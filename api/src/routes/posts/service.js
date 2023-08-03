const knex = require('../../knex.js')

//selects all reports from the reports table2
exports.findAllPosts = async () => {
    const posts = await knex('posts').select("*")
    console.log('posts: ', posts)
  
    return posts
  }

  exports.addNewPost = async (newPost) => {
    const createdPost = await knex('posts').insert(newPost)
    return createdPost
  }

  