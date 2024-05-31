const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 0; // Use 0 to get a random port

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public', 'assets')));

// Serve the index.html file for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const server = app.listen(port, () => {
  const actualPort = server.address().port;
  const url = `http://localhost:${actualPort}`;
  console.log(`Server is running at ${url}`);
});