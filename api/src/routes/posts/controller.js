require("dotenv").config()

const { findAllPosts, addNewPost, findAllRequests, findAllServices, findRequestById, findServiceById } = require("./service")

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

exports.showRequestById = async (req, res) => {
  try {
    const getRequestsData = await findRequestById(req.params.id);
    return res.json(getRequestsData);
  } catch (error) {
    console.log(error);
    return res.status(500).json();
  }
};

exports.showServiceById = async (req, res) => {
  try {
    const getServiceData = await findServiceById(req.params.id);
    return res.json(getServiceData);
  } catch (error) {
    console.log(error);
    return res.status(500).json();
  }
};

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

exports.showAllRequests = async (req, res) => {
  try {
    const getRequests = await findAllRequests(req.params);
    return res.json(getRequests);
  } catch (error) {
    console.log(error);
    return res.status(500).json();
  }
};

exports.showAllServices = async (req, res) => {
  try {
    const getServices = await findAllServices(req.params);
    return res.json(getServices);
  } catch (error) {
    console.log(error);
    return res.status(500).json();
  }
};