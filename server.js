// Import the built-in HTTP module
const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    // Set response headers
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    // Send response
    res.end('<h1>Hello Node!!!!</h1>\n');
});

// Start server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
