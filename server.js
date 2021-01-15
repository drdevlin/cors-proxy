const app = require('./app.js');

const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});