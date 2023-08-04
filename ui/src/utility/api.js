import { getToken } from "./utils";


//The base url of the API, can be changed in the .env file
const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:3000";

export const getAllUsers = async (data) => {
	const response = await fetch(`${baseUrl}/users/`, {
		method: 'GET',
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

//function to get all posts from the posts url
export const getAllPosts = async (data) => {
	const response = await fetch(`${baseUrl}/posts/`, {
		method: 'GET',
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

//function to get all requests from the url
export const getAllRequests = async (data) => {
	const response = await fetch(`${baseUrl}/posts/requests/`, {
		method: 'GET',
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

//function to get all requests from the url
export const getAllServices = async (data) => {
	const response = await fetch(`${baseUrl}/posts/services/`, {
		method: 'GET',
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

//function to post new user data to the register url
export const register = async (data) => {

	const response = await fetch(`${baseUrl}/users/register/`, {
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

	const response = await fetch(`${baseUrl}/users/login/`, {
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

//function to post new request data to the new request url
export const postRequest = async (data) => {

	const response = await fetch(`${baseUrl}/posts/new/request/`, {
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

//function to post new service data to the new service url

export const postService = async (data) => {

	const response = await fetch(`${baseUrl}/posts/new/service/`, {
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

//get my data from the server

export const getMe = async() => {

	const token = getToken()
	if (!token) {
	  throw new Error(`Missing User Token`)
	}
  
	const response = await fetch(`${baseUrl}/users/me/`, {
	  method: "GET",
	  headers: new Headers({
		"Authorization": `Bearer ` //Token is required for protected Routes
	  }),
	})

	const responseData = await response.json()

  if (!response.ok) {
    throw new Error(`Status Code: ${response?.status} - ${responseData?.message}`)
  }

  return responseData
}

export const getServiceById = async (id) => {
	
	const response = await fetch(`${baseUrl}/posts/id/${id}`, {
	  method: "GET",
	  headers: new Headers({
		Authorization: `Bearer `, //Token is required for protected Routes
	  }),
	});
	const responseData = await response.json();
	if (!response.ok) {
	  throw new Error(
		`Status Code: ${response?.status} - ${responseData?.message}`
	  );
	}
	return responseData;
  };

  export const getRequestById = async (id) => {
	
	const response = await fetch(`${baseUrl}/posts/id/${id}`, {
	  method: "GET",
	  headers: new Headers({
		Authorization: `Bearer `, //Token is required for protected Routes
	  }),
	});
	const responseData = await response.json();
	if (!response.ok) {
	  throw new Error(
		`Status Code: ${response?.status} - ${responseData?.message}`
	  );
	}
	return responseData;
  };