// app.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log('Received login request with email:', email, 'and password:', password);

  // Validate login (you should replace this with your own authentication logic)
  if (email === 'user@example.com' && password === 'password') {
    console.log('Login successful. Username:', email, 'Password:', password);
    res.send('Login successful');
  } else {
    console.log('Invalid login credentials. Username:', email, 'Password:', password);
    res.send('Invalid login credentials');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
