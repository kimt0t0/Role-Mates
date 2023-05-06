// IMPORTS
// Modules
import axios from 'axios'

// LOGIC
// Get backend app port
const backPort = process.env.REACT_APP_BACK_PORT
// Create axios api
const api = axios.create({
  baseURL: `http://localhost:${backPort}/`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, PATCH'
  },
  timeout: 10000
})

// Register service
const register = async (registerDatas) => {
  try {
    // (fetch api post route)
    const response = await api.post('/users', registerDatas)
    // (if api returns user data and token, set token item in local storage)
    if (response.data && response.data.token) {
      window.localStorage.setItem('token', response.data.token)
    }
    // (else return response data)
    return {
      error: null,
      data: response.data
    }
  } catch (e) {
    // (if error, return error so it can be passed to component using the service)
    return {
      error: e,
      data: null
    }
  }
}

// Login service
// (send user credentials as parameter)
const login = async (credentials) => {
  try {
    // (fetch api with credentials as additional parameter so the api can forward them do db and compare with existing users)
    const response = await api.post('/auth/login', credentials)
    return response.data
  } catch (e) {
    throw new Error(e.message)
  }
}

// Get user profile service
const getProfile = async () => {
  console.log('entrée dans la fonction du service')
  try {
    // (check if a token is stored in localStorage)
    const token = window.localStorage.getItem('token')
    // (if so, fetch api to get user profile, using token as authorization data to get the corresponding data)
    if (token) {
      const response = await api.get('/users', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log('user data from service: ', response.data)
      return response.data
    }
    // (show error in console if there is a problem, for instance invalid token)
  } catch (e) {
    console.error(e)
  }
}

const updateProfile = async () => {
  console.log('update user')
}

// EXPORTS

export {
  register,
  login,
  getProfile,
  updateProfile
}
