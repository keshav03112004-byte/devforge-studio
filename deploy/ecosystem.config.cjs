/** PM2 process config — run from project root after build */
module.exports = {
  apps: [
    {
      name: "neoblock-dev",
      cwd: __dirname + "/..",
      script: ".next/standalone/server.js",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3001,
        HOSTNAME: "127.0.0.1",
      },
    },
  ],
};
