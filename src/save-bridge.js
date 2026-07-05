const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const dbPath = path.join(root, 'database.js');
const host = '127.0.0.1';
const port = 43123;

function send(res, status, body, headers = {}) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    ...headers,
  });
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
      if (data.length > 10 * 1024 * 1024) reject(new Error('Payload too large'));
    });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    res.end();
    return;
  }

  if (req.method === 'GET' && req.url === '/health') {
    send(res, 200, { ok: true, path: dbPath });
    return;
  }

  if (req.method === 'POST' && req.url === '/save') {
    try {
      const raw = await readBody(req);
      const payload = JSON.parse(raw || '{}');
      if (!payload || typeof payload.content !== 'string') throw new Error('Missing content');
      fs.writeFileSync(dbPath, payload.content, 'utf8');
      send(res, 200, { ok: true, saved: dbPath });
    } catch (err) {
      send(res, 500, { ok: false, error: err.message });
    }
    return;
  }

  send(res, 404, { ok: false, error: 'Not found' });
});

server.listen(port, host, () => {
  console.log(`Save bridge running at http://${host}:${port}`);
  console.log(`Writing to ${dbPath}`);
});
