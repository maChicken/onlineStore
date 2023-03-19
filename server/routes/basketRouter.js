const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

router.post('/', basketController.addToBasket)
router.delete('/:id', basketController.removeFromBasket)
router.get('/:id', basketController.getBasket)
router.put('/', basketController.changeQuantity)

module.exports = router