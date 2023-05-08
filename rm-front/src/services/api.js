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

// ----- User -----
// Register/signup service
const register = async (registeredDatas) => {
  try {
    // (fetch api post route)
    if (registeredDatas.file) {
      // const file = { file: registeredDatas.avatar }
      const savedImage = await api.post('/images', { file: registeredDatas.file })
      registeredDatas.avatar = savedImage.data._id
    }
    const response = await api.post('/users', registeredDatas)
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
  try {
    // (check if a token is stored in localStorage)
    const auth = window.localStorage.AUTH
    // (if so, fetch api to get user profile, using token as authorization data to get the corresponding data)
    if (auth) {
      const response = await api.get('/me', {
        headers: {
          Authorization: `Bearer ${auth}`
        }
      })
      return response.data
    }
    // (show error in console if there is a problem, for instance invalid token)
  } catch (e) {
    console.error(e)
  }
}

const updateProfile = async () => {
  try {
    // (check if a token is stored in localStorage)
    const auth = window.localStorage.AUTH
    // (if so, fetch api to get user profile, using token as authorization data to get the corresponding data)
    if (auth) {
      const response = await api.patch('/me', {
        headers: {
          Authorization: `Bearer ${auth}`
        }
      })
      console.log(`service data: ${JSON.stringify(response.data)}`)
      return response.data
    }
    // (show error in console if there is a problem, for instance invalid token)
  } catch (e) {
    console.error(e)
  }
}

// ----- Character ------
const createCharacter = async (formData) => {
  try {
    const user = await getProfile()
    if (user._id && formData) {
      const data = {
        ...formData,
        user: user._id
      }
      console.log(`Données: ${data}`)
      const response = await api.post('/characters', data)
      return response.data
    }
  } catch (e) {
    console.error(e)
  }
}

// EXPORTS

export {
  // user api services
  register,
  login,
  getProfile,
  updateProfile,
  // character api services
  createCharacter
}
