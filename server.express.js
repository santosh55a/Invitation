const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router({
  users: [{ id: 1, email: 'user0@santosh.com' }, { id: 2, email: 'user1@santosh.com' }]
});
const middlewares = jsonServer.defaults();

const email409 = ['user0@santosh.com', 'user1@santosh.com'];
const email500 = 'user5@santosh.com';

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use((req, res, next) => setTimeout(next, 1000));

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    const email = req.body.email;
    if (email409.includes(req.body.email)) {
      res.sendStatus(409);
    } else if (email === email500) {
      res.sendStatus(500);
    } else {
      // Continue to JSON Server router
      next();
    }
  } else {
    // Continue to JSON Server router
    next();
  }
});

// Use default router
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
