const { Router } = require('express')
const { showAllPosts } = require('./controller')

//import middleware

// create a new Router instance
const router = new Router()

// define routes
router.get('/', showAllPosts)

// exporting router
module.exports = router