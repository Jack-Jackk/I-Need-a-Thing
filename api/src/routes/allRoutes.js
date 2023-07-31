const { Router } = require('express')

// import routes
const users = require('./users/router')
const posts = require('./posts/router')


// create a new Router instance
const allRouters = new Router()

// create base routes
allRouters.use('/users', users)
allRouters.use('/posts', posts)


// exporting router
module.exports = allRouters