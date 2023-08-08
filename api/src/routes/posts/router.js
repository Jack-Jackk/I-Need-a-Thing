const { Router } = require('express')
const { showAllPosts, createNewPost, showAllRequests, showAllServices, showPostsById} = require('./controller')

//import middleware
const { authenticate } = require('../../middleware/auth')
// create a new Router instance
const router = new Router()

// define routes
router.get('/', showAllPosts)
router.get('/requests', showAllRequests)
router.get('/services', showAllServices)
router.get('/:id', showPostsById)
router.get('/requests', showAllRequests)
router.get('/services', showAllServices)
router.post('/new/request', authenticate, createNewPost)
router.post('/new/service', createNewPost)

// exporting router
module.exports = router