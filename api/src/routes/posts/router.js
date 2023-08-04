const { Router } = require('express')
const { showAllPosts, createNewPost } = require('./controller')

//import middleware

// create a new Router instance
const router = new Router()

// define routes
router.get('/', showAllPosts)
router.post('/new/request', createNewPost)

// exporting router
module.exports = router