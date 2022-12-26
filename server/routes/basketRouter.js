const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

router.post('/', basketController.addToBasket)
router.delete('/', basketController.removeFromBasket)
router.get('/:id', basketController.getBasket)

module.exports = router