const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const itemRouter = require('./itemRouter')
const basketRouter = require('./basketRouter')

router.use('/user', userRouter)
router.use('/item', itemRouter)
router.use('/basket', basketRouter)

module.exports = router