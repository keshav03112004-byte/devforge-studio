#!/usr/bin/env bash
# One-time EC2 setup for Neo Block Dev (Amazon Linux or Ubuntu)
set -euo pipefail

is_amazon_linux() {
  [ -f /etc/os-release ] && grep -qi "amazon linux" /etc/os-release
}

is_ubuntu() {
  [ -f /etc/os-release ] && grep -qi "ubuntu" /etc/os-release
}

install_node() {
  if command -v node >/dev/null 2>&1; then
    return
  fi

  echo "==> Installing Node.js 20..."
  if is_amazon_linux; then
    curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
    if command -v dnf >/dev/null 2>&1; then
      sudo dnf install -y nodejs
    else
      sudo yum install -y nodejs
    fi
  elif is_ubuntu; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
  else
    echo "Unsupported OS. Install Node.js 20 manually, then re-run deploy/deploy.sh"
    exit 1
  fi
}

install_packages() {
  echo "==> Updating system packages..."
  if is_amazon_linux; then
    if command -v dnf >/dev/null 2>&1; then
      sudo dnf update -y
      sudo dnf install -y git nginx
      sudo dnf install -y certbot python3-certbot-nginx || true
    else
      sudo yum update -y
      sudo yum install -y git
      sudo amazon-linux-extras install -y nginx1 || sudo yum install -y nginx
    fi
  elif is_ubuntu; then
    sudo apt-get update -y
    sudo apt-get upgrade -y
    sudo apt-get install -y nginx certbot python3-certbot-nginx git
  else
    echo "Unsupported OS for automatic package install."
    exit 1
  fi
}

install_packages
install_node
node -v
npm -v

echo "==> Installing PM2..."
sudo npm install -g pm2

if ! command -v nginx >/dev/null 2>&1; then
  echo "Nginx not found after install. Install nginx manually and re-run."
  exit 1
fi

echo "==> Enabling services..."
sudo systemctl enable nginx
sudo systemctl start nginx
pm2 startup systemd -u "$USER" --hp "$HOME" | tail -1 | bash || true

if command -v ufw >/dev/null 2>&1 && sudo ufw status 2>/dev/null | grep -q "Status: active"; then
  echo "==> Opening firewall (ufw)..."
  sudo ufw allow OpenSSH
  sudo ufw allow "Nginx Full"
fi

echo "==> Server ready."
echo "    Next: ./deploy/deploy.sh"
echo "    Then: configure Nginx + GoDaddy DNS (see deploy/DEPLOY.md)"
