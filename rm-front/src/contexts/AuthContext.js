// IMPORTS
// Modules
import { createContext, useContext, useEffect, useReducer } from 'react'
import { login } from '../services/api'

// LOGIC
// (store created context within a variable)
const AuthContext = createContext()

// (list possible action types)
const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  ERROR: 'ERROR'
}

// (define context's initial state - state it has by default)
// (has parsed value from auth item in local storage or null values)
const initialState = JSON.parse(window.localStorage.getItem('AUTH')) || {
  token: null,
  user: null,
  error: null,
  loading: false
}

// (reducer, defines state modifications according to actions listed earlier)
const AuthReducer = (state, action) => {
  switch (action.type) {
    // (if login action, copy initial state and add token and user data in appropriate fields)
    case actionTypes.LOGIN:
      return {
        ...initialState,
        token: action.data.token,
        user: action.data.token
      }
    // (if logout action, remove 'auth' item - hence auth data - from local storage and reset context to initial state)
    case actionTypes.LOGOUT:
      window.localStorage.removeItem('AUTH')
      return initialState
    // (if error or unknown action, reset context to initial state to avoid security issues)
    // (and return error data so it can be used in our code)
    case actionTypes.ERROR:
      return {
        ...initialState,
        error: action.data.error
      }
    // (if action unknown in our list, throw error - also prevents security issues)
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

// (provider,enables to pass down data in the app)
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  useEffect(() => {
    window.localStorage.setItem('AUTH', JSON.stringify(state))
  }, [state])

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
}

// (this function can be used to access auth context from app components)
const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside an AuthProvider only')
  return context
}

// (this function uses api service and sets localStorage auth data with api response contents)
// (hence we can check user data anywhere in the app)
const loginUser = async (credentials, dispatch) => {
  try {
    const data = await login(credentials)
    dispatch({
      type: actionTypes.LOGIN,
      data: { user: data.user, token: data.token }
    })
    // (if there is a problem with action type or data added here, the data willl contain an error message instead)
  } catch (e) {
    dispatch({
      type: actionTypes.ERROR,
      data: { error: e.message }
    })
  }
}

// EXPORTS
// (enables to use context data in any component in the app)
// (hence we will be able to check user permissions, ownership on a data object, etc)
export {
  useAuth,
  AuthProvider,
  actionTypes,
  loginUser
}
