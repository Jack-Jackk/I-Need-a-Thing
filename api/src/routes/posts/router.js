const { Router } = require('express')
const { showAllPosts, createNewPost, showAllRequests, showAllServices, showServiceById, showRequestById} = require('./controller')

//import middleware

// create a new Router instance
const router = new Router()

// define routes
router.get('/', showAllPosts)
router.get('/requests', showAllRequests)
router.get('/services', showAllServices)
router.get('/services/id/:id', showServiceById)
router.get('/requests/id/:id', showRequestById)
router.post('/new/request', createNewPost)
router.post('/new/service', createNewPost)

// exporting router
module.exports = router