const Koa = require('koa')
const config = require('./config')
const compose = require('koa-compose');
const middlewares = require('./middlewares');

const app = new Koa()

app.use(compose(middlewares))

app.listen(config.PROT,config.HOST,()=>{
  console.log(`server starting : ${config.HOST}:${config.PROT}`)
})