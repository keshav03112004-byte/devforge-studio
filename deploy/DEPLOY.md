# Deploy Neo Block Dev to AWS EC2 + GoDaddy Domain

Target domain: **neoblock.dev** (change in `deploy/nginx-neoblock.conf` if different)

## Prerequisites

- EC2 instance (Ubuntu 22.04 or 24.04 recommended)
- **Elastic IP** attached to the instance (so the IP does not change on reboot)
- Security group: inbound **22** (SSH), **80** (HTTP), **443** (HTTPS)
- Domain purchased on **GoDaddy**
- GitHub repo: https://github.com/keshav03112004-byte/devforge-studio

---

## Part 1 — EC2 server setup (one time)

SSH into your EC2 instance:

```bash
ssh -i your-key.pem ubuntu@YOUR_ELASTIC_IP
```

Run the setup script:

```bash
curl -fsSL https://raw.githubusercontent.com/keshav03112004-byte/devforge-studio/main/deploy/server-setup.sh | bash
```

Or clone first and run locally:

```bash
git clone https://github.com/keshav03112004-byte/devforge-studio.git /var/www/neoblock-dev
cd /var/www/neoblock-dev
chmod +x deploy/*.sh
./deploy/server-setup.sh
./deploy/deploy.sh
```

The app runs on **port 3001** (so it can sit beside Mamta Textiles or other sites on 3000).

---

## Part 2 — Nginx reverse proxy

Edit the domain in the config if needed, then install:

```bash
cd /var/www/neoblock-dev
sudo cp deploy/nginx-neoblock.conf /etc/nginx/sites-available/neoblock.dev
sudo ln -sf /etc/nginx/sites-available/neoblock.dev /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

Test: open `http://YOUR_ELASTIC_IP` — you should see the site (after DNS or using Host header).

---

## Part 3 — GoDaddy DNS

1. Log in to [GoDaddy](https://www.godaddy.com) → **My Products** → your domain → **DNS**
2. Add or update these records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| **A** | `@` | Your EC2 **Elastic IP** | 600 |
| **A** | `www` | Same Elastic IP | 600 |

Remove conflicting old A records pointing elsewhere.

DNS propagation usually takes **15 minutes to a few hours**.

---

## Part 4 — HTTPS (Let's Encrypt)

After DNS points to your server:

```bash
sudo certbot --nginx -d neoblock.dev -d www.neoblock.dev
```

Certbot auto-renews. Test renewal:

```bash
sudo certbot renew --dry-run
```

---

## Part 5 — Future updates

After pushing to GitHub:

```bash
ssh -i your-key.pem ubuntu@YOUR_ELASTIC_IP
cd /var/www/neoblock-dev
./deploy/deploy.sh
```

---

## Multiple sites on one EC2 (e.g. Mamta Textiles + Neo Block)

| Site | Port | Nginx config |
|------|------|--------------|
| Mamta Textiles | 3000 | existing vhost |
| Neo Block Dev | 3001 | `deploy/nginx-neoblock.conf` |

Each domain gets its own Nginx `server_name`; Certbot adds SSL per domain.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Site not loading | `pm2 status`, `pm2 logs neoblock-dev`, `sudo nginx -t` |
| 502 Bad Gateway | App not running — `cd /var/www/neoblock-dev && ./deploy/deploy.sh` |
| DNS not resolving | Wait for propagation; verify A record in GoDaddy |
| Certbot fails | Ensure DNS A record points to this server before running certbot |
| Out of memory on build | Use `t3.small` or add swap: `sudo fallocate -l 2G /swapfile && sudo chmod 600 /swapfile && sudo mkswap /swapfile && sudo swapon /swapfile` |

---

## Optional — environment variables

Create `/var/www/neoblock-dev/.env.production` for future email/API keys:

```env
# RESEND_API_KEY=re_xxx
```

Then add to `deploy/ecosystem.config.cjs` under `env`.
