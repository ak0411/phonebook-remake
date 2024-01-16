const Router = require('express')
const persons = require('@controllers/personsController')

const router = Router()

router.get('/info', persons.info)
router.get('/persons', persons.getAll)
router.get('/persons/:id', persons.getById)
router.delete('/persons/:id', persons.remove)
router.post('/persons', persons.create)
router.put('/persons/:id', persons.update)

module.exports = router
