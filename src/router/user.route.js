const Router = require('koa-router')
const { userValidator, verifyUser, cryptPassword, verifyLogin } = require('../middleware/user.middleware')
const { register, login , changePassword} = require('../controller/user.controller')
const { auth } = require('../middleware/auth.middleware')
const router = new Router({ prefix: '/users' })
//注册接口
router.post('/register', userValidator, verifyUser, cryptPassword, register)
//登录接口
router.post('/login', userValidator, verifyLogin, login)
router.patch('/', auth, cryptPassword,changePassword)
module.exports = router