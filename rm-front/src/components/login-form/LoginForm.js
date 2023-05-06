// IMPORTS
// Modules
import { useState, useEffect } from 'react'
import Icon from 'react-eva-icons'
// Auth context
import { actionTypes, loginUser, useAuth } from '../../contexts/AuthContext'
// Components
import Hero from '../hero-title/Hero'
import WelcomeUser from '../welcome-user/WelcomeUser'
// Styles
import './LoginForm.scss'

// LOGIC
function LoginForm ({ submit, error }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const { dispatch, state: { e, user, loading } } = useAuth()
  useEffect(() => {
    if (user) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [user])

  // Toggle password visibility
  const [showPassword, setShowPassword] = useState(true)

  const onToggleShowPassword = () => {
    return setShowPassword(!showPassword)
  }
  // Store and update form data
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  // Take into account input fields changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Submit form using api service
  const handleSubmit = async (e) => {
    e.preventDefault()
    await loginUser(formData, dispatch)
  }

  // Disconnect user
  const logout = () => {
    dispatch({
      type: actionTypes.LOGOUT
    })
  }
  // Rendering is conditioned to user being logged-in or not
  // (if logged in, success alert and redirect to homepage)
  if (isLoggedIn) {
    return <WelcomeUser />
  }
  // (else stay on auth page)
  return (
    <>
      <Hero title='Connexion' subtitle='Entre tes identifiants pour jouer :-)' color='secondary' />
      <form className='login-form' onSubmit={handleSubmit}>
        {/* (Email) */}
        <div className='form-group'>
          <label className='form-label'>Adresse mail</label>
          <div className='form-input-group'>
            <input
              className='form-input'
              type='email'
              name='email'
              value={FormData.email}
              onChange={handleChange}
              placeholder='kwain@lapinsorcier.mtg'
            />
          </div>
        </div>
        {/* (Password) */}
        <div className='form-group'>
          <label className='form-label'>Mot de passe</label>
          <div className='form-input-group __password'>
            <input
              className='form-input __password'
              type={showPassword ? 'password' : 'text'}
              name='password'
              value={FormData.password}
              onChange={handleChange}
              placeholder='Kwain44!'
            />
            <button type='button' className='warning-btn' onClick={onToggleShowPassword}>
              <Icon
                name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                size='large'
              />
            </button>
          </div>
        </div>
        <div className='btn-ctn'>
          <button type='submit' className='secondary-btn'>Connexion</button>
        </div>
      </form>
    </>
  )
}

// EXPORTS
export default LoginForm
