const { Router } = require('express')

const {showAll, register, login, showMe } = require('./controller')


//import middleware
const { authenticate } = require('../../middleware/auth')

// create a new Router instance
const router = new Router()

// define routes

router.get('/', authenticate, showAll)
router.get('/me', authenticate, showMe)
router.post('/register', register)
router.post('/login', login)


// exporting router
module.exports = router

