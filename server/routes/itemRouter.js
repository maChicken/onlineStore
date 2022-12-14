const Router = require('express')
const router = new Router()
const ItemController = require('../controllers/itemController')

router.post('/', ItemController.create)
router.delete('/:id', ItemController.delete)
router.get('/', ItemController.getAll)
router.get('/:id', ItemController.getOne)

module.exports = router