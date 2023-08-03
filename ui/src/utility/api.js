
//The base url of the API, can be changed in the .env file
const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:3000";


//function to get all posts from the posts url
export const getAllPosts = async () => {
	const response = await fetch(`${baseUrl}/posts/`)
	const responseData = await response.json()
	return responseData
}

//function to post new user data to the register url
export const register = async (data) => {

	const response = await fetch(`${baseUrl}/users/register`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	})

	const responseData = await response.json()

	if (!response.ok) {
		throw new Error(
			`Status Code: ${response?.status} - ${responseData?.message}`
		)
	}

	return responseData
}

//function to post a new post to the database
export const post = async (data) => {
  
	const response = await fetch(`${baseUrl}/posts/new`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	})

	const responseData = await response.json()

	if (!response.ok) {
		throw new Error(
			`Status Code: ${response?.status} - ${responseData?.message}`
		)
	}

	return responseData
}

//function to post existing user data to the login url
export const login = async (data) => {
	const { username, password } = data

	const response = await fetch(`${baseUrl}/users/login`, {
		method: 'POST',
		headers: new Headers({
			Authorization: `Basic ${btoa(`${username}:${password}`)}`, 
		}),
	})

	const responseData = await response.json()

	if (!response.ok) {
		throw new Error(
			`Status Code: ${response?.status} - ${responseData?.message}`
		)
	}

	return responseData
}

//function to post new post data to the new post url
export const createPost = async (data) => {

	const response = await fetch(`${baseUrl}/posts/new`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	})

	const responseData = await response.json()

	if (!response.ok) {
		throw new Error(
			`Status Code: ${response?.status} - ${responseData?.message}`
		)
	}

	return responseData
}