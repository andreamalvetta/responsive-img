const express = require('express');
const port = process.env.PORT || 8000;

const app = express();

app.use((req, res, next) => {
  res.header('Cache-Control', 'max-age=86400000');
  next();
});

app.use(express.static('src'));

app.listen(port);

console.info(`Project is running at http://localhost:${port}`);
