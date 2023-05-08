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
    // if (registeredDatas.avatar) {
    //   const savedImage = await api.post('/images', registeredDatas.avatar)
    //   registeredDatas.avatar = savedImage.data._id
    // }
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

// Get user by id
const getUser = async (userId) => {
  try {
    const auth = window.localStorage.AUTH
    if (auth) {
      const response = await api.get(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${auth}`
        }
      })
      return response.data
    }
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
      return response.data
    }
    // (show error in console if there is a problem, for instance invalid token)
  } catch (e) {
    console.error(e)
  }
}

// ----- Account private routes -----
const getUserCharacters = async () => {
  try {
    const auth = window.localStorage.AUTH
    if (auth) {
      const owner = getProfile()
      const ownerId = owner._id
      const response = await api.get('/characters', {
        headers: {
          Authorization: `Bearer ${auth}`
        }
      }) // find a way to request specifically with owner id here
      return response.data
    }
  } catch (e) {
    console.error(e)
  }
}

// ----- Images -----
const createImage = async (file) => {
  console.log(`depuis le service: ${JSON.stringify(file)}`)
  try {
    const auth = window.localStorage.AUTH
    if (auth) {
      const response = await api.post('/images', file, {
        headers: {
          Authorization: `Bearer ${auth}`
        }
      }) // find a way to request specifically with owner id here
      return response.data
    }
  } catch (e) {
    console.error(e)
  }
}

// ----- Character ------
const createCharacter = async (formData) => {
  try {
    const auth = window.localStorage.AUTH
    if (auth) {
      const user = await getProfile()
      if (user._id && formData) {
        const data = {
          ...formData,
          user: user._id
        }
        const response = await api.post('/characters', data, {
          headers: {
            Authorization: `Bearer ${auth}`
          }
        })
        return response.data
      }
    }
  } catch (e) {
    console.error(e)
  }
}

const getCharacters = async () => {
  try {
    const auth = window.localStorage.AUTH
    if (auth) {
      const response = await api.get('/characters', {
        headers: {
          Authorization: `Bearer ${auth}`
        }
      })
      return response.data
    }
  } catch (e) {
    console.error(e)
  }
}

const getCharacter = async (characterId) => {
  try {
    const auth = window.localStorage.AUTH
    if (auth) {
      const response = await api.get(`/characters/${characterId}`, {
        headers: {
          Authorization: `Bearer ${auth}`
        }
      })
      return response.data
    }
  } catch (e) {
    console.error(e)
  }
}

const updateCharacter = async (characterId, formData) => {
  try {
    const auth = window.localStorage.AUTH
    if (auth) {
      const response = await api.patch(`/characters/${characterId}`, formData, {
        headers: {
          Authorization: `Bearer ${auth}`
        }
      })
      return response.data
    }
  } catch (e) {
    console.error(e)
  }
}

const removeCharacter = async (characterId) => {
  try {
    const auth = window.localStorage.AUTH
    if (auth) {
      const response = await api.delete(`/characters/${characterId}`, {
        headers: {
          Authorization: `Bearer ${auth}`
        }
      })
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
  getUser,
  // user specific collection data
  getUserCharacters,
  // Images
  createImage,
  // character api services
  createCharacter,
  getCharacters,
  getCharacter,
  updateCharacter,
  removeCharacter
}
