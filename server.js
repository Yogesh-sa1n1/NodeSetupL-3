// simple.js

// Import the built-in 'http' module
const http = require("http");

// Create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // OK
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, Node.js is working!\n");
});

// Define port
const PORT = 3000;

// Start server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
