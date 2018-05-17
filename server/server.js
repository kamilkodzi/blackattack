const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);

const numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10
];

server.get('/numbers', (req, res) => {
  res.send({
    'data': numbers
  });
});


server.get('/random-numbers', (req, res) => {
  res.send({
    'data': new Array(5).fill(0).map(() => numbers[Math.floor(Math.random() * numbers.length)])
  });
});

server.listen(3000, () => {
  console.log('JSON Server is running')
});