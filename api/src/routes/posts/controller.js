require("dotenv").config()

const { findAllPosts, createNewPost } = require("./service")

exports.showAllPosts = async (req, res) => {
  try {
    const allPosts = await findAllPosts(req.params)
    console.log("allPosts: ", allPosts)
    return res.json(allPosts)
  } catch (error) {
    console.log(error)
    return res.status(500).json()
  }
}

exports.createNewPost = async (req, res) => {
  try {
    const newPost = req.body
    // Only allow admins and account owners to access the user data
    const post = await addNewPost(newPost)
    return res.json(post)
  } catch (error) {
    console.log(error)
    return res.status(500).json()
  }
}


