#!/usr/bin/env bash
# Deploy Neo Block Dev on EC2 (Ubuntu). Run from project root on the server.
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/neoblock-dev}"
REPO="${REPO:-https://github.com/keshav03112004-byte/devforge-studio.git}"
BRANCH="${BRANCH:-main}"
PORT="${PORT:-3001}"

echo "==> Deploying Neo Block Dev to ${APP_DIR} (port ${PORT})"

if [ ! -d "${APP_DIR}/.git" ]; then
  echo "==> Cloning repository..."
  sudo mkdir -p "${APP_DIR}"
  sudo chown -R "$USER:$USER" "${APP_DIR}"
  git clone --branch "${BRANCH}" "${REPO}" "${APP_DIR}"
fi

cd "${APP_DIR}"
echo "==> Pulling latest code..."
git fetch origin "${BRANCH}"
git checkout "${BRANCH}"
git pull origin "${BRANCH}"

echo "==> Installing dependencies..."
npm ci

echo "==> Building Next.js (standalone)..."
npm run build

echo "==> Copying static assets into standalone output..."
cp -r public .next/standalone/public
cp -r .next/static .next/standalone/.next/static

echo "==> Restarting PM2..."
if pm2 describe neoblock-dev >/dev/null 2>&1; then
  PORT="${PORT}" pm2 restart deploy/ecosystem.config.cjs --update-env
else
  PORT="${PORT}" pm2 start deploy/ecosystem.config.cjs
fi
pm2 save

echo "==> Done. App listening on http://127.0.0.1:${PORT}"
echo "    Configure Nginx + Certbot if not done yet (see deploy/DEPLOY.md)."
