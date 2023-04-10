// IMPORTS
const User = require('../data/models/User')
const jwt = require('jsonwebtoken')

// LOGIC
const loginUser = async (credentials) => {
  // if missing params throw error
  if (!credentials.email || !credentials.password) {
    throw new Error('Missing credentials')
  }
  if (typeof credentials.email !== 'string' || typeof credentials.password !== 'string') {
    throw new Error('Invalid credentials format')
  }
  //   find user in db
  const user = await User.findOne({ email: credentials.email })
  if (!user) {
    throw new Error('Invalid username')
  }
  //   compare password and encrypted db password
  const isPasswordValid = await user.comparePassword(credentials.password)
  if (isPasswordValid) {
    const payload = {
      id: user.id,
      role: user.role
    }
    const token = await jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '30d' })
    const _user = user.toObject()
    delete _user.password
    return {
      user: _user,
      token
    }
  } else {
    throw new Error('Invalid password')
  }
}

// EXPORTS
module.exports = {
  loginUser
}
