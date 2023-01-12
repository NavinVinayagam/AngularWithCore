const { env } = require('process');
const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:6937';

const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
      "/_content",
      "/_framework",
      "/_blazor"
   ],
    target: target,
    secure: false,
    ws: true,
    logLevel: "debug",
    headers: {
      Connection: 'Keep-Alive'
    }
  }
]

module.exports = PROXY_CONFIG;
