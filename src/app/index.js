const Koa = require('koa')
const koaBody = require('koa-body')
// const userRouter = require('../router/user.route')
// const goodsRouter = require('../router/goods.route')
const router = require('../router')
const errHandler = require('./errHandler')
const app = new Koa()
app.use(koaBody())
// app.use(userRouter.routes()).use(userRouter.allowedMethods())
// app.use(goodsRouter.routes()).use(goodsRouter.allowedMethods())
app.use(router.routes()).use(router.allowedMethods())
app.on('error', errHandler)
module.exports = app