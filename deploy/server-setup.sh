#!/usr/bin/env bash
# One-time EC2 setup for Neo Block Dev (Ubuntu 22.04/24.04)
set -euo pipefail

echo "==> Updating system packages..."
sudo apt-get update -y
sudo apt-get upgrade -y

echo "==> Installing Node.js 20..."
if ! command -v node >/dev/null 2>&1; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi
node -v
npm -v

echo "==> Installing PM2, Nginx, Certbot..."
sudo npm install -g pm2
sudo apt-get install -y nginx certbot python3-certbot-nginx git

echo "==> Enabling services..."
sudo systemctl enable nginx
sudo systemctl start nginx
pm2 startup systemd -u "$USER" --hp "$HOME" | tail -1 | bash || true

echo "==> Opening firewall (if ufw is active)..."
if command -v ufw >/dev/null 2>&1 && sudo ufw status | grep -q "Status: active"; then
  sudo ufw allow OpenSSH
  sudo ufw allow "Nginx Full"
fi

echo "==> Server ready."
echo "    Next: clone repo and run deploy/deploy.sh"
echo "    Then: configure Nginx + GoDaddy DNS (see deploy/DEPLOY.md)"
