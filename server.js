const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Comprehensive CORS configuration
app.use((req, res, next) => {
  // Allow requests from any origin
  res.header('Access-Control-Allow-Origin', '*');
  
  // Allow these HTTP methods
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  
  // Allow these headers in requests
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Range');
  
  // Allow credentials (cookies, authorization headers)
  res.header('Access-Control-Allow-Credentials', true);
  
  // Handle preflight OPTIONS requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});

// Serve the VAST XML with proper headers
app.get('/vast.xml', (req, res) => {
  // Set appropriate content type for XML
  res.set('Content-Type', 'application/xml');
  
  // Prevent caching issues
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  
  // Send the file
  res.sendFile(path.join(__dirname, 'vast.xml'));
});

// Health check endpoint
app.get('/', (req, res) => {
  res.send('VAST Tag server is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
