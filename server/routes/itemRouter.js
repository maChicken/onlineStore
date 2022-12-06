const Router = require('express')
const router = new Router()
const ItemController = require('../controllers/itemController')
const checkRole = require('../middleware/checkRoleMiddleWare')

router.post('/', checkRole('ADMIN'), ItemController.create)
router.delete('/:id', checkRole('ADMIN'), ItemController.delete)
router.get('/', ItemController.getAll)
router.get('/:id', ItemController.getOne)

module.exports = router