require("dotenv").config()

const {
  findAllPosts,
} = require("./service")

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


