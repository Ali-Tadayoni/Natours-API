const app = require('./app');

// Server
const port = 3000;
app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
