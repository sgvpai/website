const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Define the base directory for your project (where server.js is located)
  const baseDirectory = __dirname;

  // Function to serve static files
  const serveStaticFile = (res, filename, contentType) => {
    fs.readFile(path.join(baseDirectory, filename), (err, data) => {
      if (err) {
        console.error(`Error reading file ${filename}:`, err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }

      console.log(`Serving file ${filename}`);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  };

  // Routing
  if (req.url === '/' || req.url === '/index.html') {
    serveStaticFile(res, 'code export/index.html', 'text/html'); // Adjust the path
  } else if (req.url === '/assets/room.glb') {
    serveStaticFile(res, 'code export/public/assets/room.glb', 'application/octet-stream'); // Adjust the path
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
