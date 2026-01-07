const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello World - Version 2.0</h1>');
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

https.createServer(options, app).listen(3000, '0.0.0.0', () => {
    console.log('App démarrée sur le port 3000 (HTTPS)');
});