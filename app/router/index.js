const koaRouter = require('koa-router')

const router = new koaRouter();

router.prefix('/api')

const routeList = require('./routes');

routeList.forEach(item => {
  const { method, path, controller } = item;
  router[method](path, controller);
});

module.exports = router