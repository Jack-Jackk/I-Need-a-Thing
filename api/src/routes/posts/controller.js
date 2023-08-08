require("dotenv").config()

const { findAllPosts, addNewPost, findAllRequests, findAllServices, findById, findRequestById, findServiceById } = require("./service")

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

exports.showPostsById = async (req, res) => {
  try {
    const postId = await findById(req.params)
    console.log("PostsId: ", postId)
    return res.json(allPosts)
  } catch (error) {
    console.log(error)
    return res.status(500).json()
  }
}

exports.getRequestById = async (req, res) => {
  try {
    const request = await findById(req.params.id);
    if (request.id != req.params.id) {
      return res
        .status(403)
        .json({ error: "You do not have permission to access this resource" });
    }

    const foundRequest = await findById(req.params.id);
    if (!foundRequest) {
      return res.status(404).json("No Request Found");
    }

    return res.json(foundRequest);
  } catch (error) {
    console.log(error);
    return res.status(500).json();
  }
};

exports.getServiceById = async (req, res) => {
  try {
    const service = await findById(req.params.id);
    if (service.id != req.params.id) {
      return res
        .status(403)
        .json({ error: "You do not have permission to access this resource" });
    }

    const foundService = await findById(req.params.id);
    if (!foundService) {
      return res.status(404).json("No Service Found");
    }

    return res.json(foundService);
  } catch (error) {
    console.log(error);
    return res.status(500).json();
  }
};

exports.createNewPost = async (req, res) => {
  try {
    const postData = req.body;
    const post = await addNewPost(postData);

    // Create a JWT and send it back to the client
    const token = jwt.sign({ id: userId }, process.env.SECRET_KEY);
    return res.json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

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