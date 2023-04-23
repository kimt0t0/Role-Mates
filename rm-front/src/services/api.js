// IMPORTS
// Modules
import axios from 'axios'

// LOGIC
// Create axios api
const api = axios.create({
  baseURL: 'http://locahost:3000/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

// Register service
const register = async (registerDatas) => {
  try {
    console.log(`from service, registering ${registerDatas}`)
    const response = await api.post('/users', registerDatas)
    if (response.data && response.data.token) {
      window.localStorage.setItem('token', response.data.token)
    }
    return {
      error: null,
      data: response.data
    }
  } catch (e) {
    return {
      error: e,
      data: null
    }
  }
}

// Login service
const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login')
    return response.data
  } catch (e) {
    throw new Error(e.message)
  }
}

// Get user profile service
const getProfile = async (id) => {
  const response = await api.get(`/users/${id}`) // this is a test request not needing user authentication - not working
  return response.data
  // try {
  //   const token = window.localStorage.getItem('token')
  //   if (token) {
  //     const response = await api.get(`/users/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     })
  //     return response.data
  //   }
  // } catch (e) {
  //   console.error(e)
  // }
}

// Update user
const updateUser = async (data) => {
  console.log(`Updating user... ${JSON.stringify(data)}`)
}

// EXPORTS

export {
  register,
  login,
  getProfile,
  updateUser
}
