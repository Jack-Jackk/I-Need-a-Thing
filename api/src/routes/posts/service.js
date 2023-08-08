const knex = require('../../knex.js')

//selects all reports from the reports table2
exports.findAllPosts = async () => {
    const posts = await knex('posts').select("*")
    console.log('posts: ', posts)
    return posts
  }

  exports.addNewPost = async (postData) => {
    const createdPost = await knex('posts').insert(postData)
    return createdPost
  }

  exports.findAllRequests = async () => {
    const requests = await knex('posts').select("*").where("posts.type", "request")
    return requests
  }

  exports.findAllServices = async () => {
    const services = await knex('posts').select("*").where("posts.type", "service")
    return services
  }

  exports.findById = async (id) => {
    const postId = await knex("posts").select("*").where('id', id)
    return postId;
  };


  