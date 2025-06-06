import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`JSON Server está rodando na porta ${PORT}`);
});