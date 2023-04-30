// IMPORTS
// Modules
import { useState } from 'react'
// Components
import Hero from '../hero-title/Hero'
import Icon from 'react-eva-icons'
// Styles
import './LoginForm.scss'

// LOGIC
function LoginForm ({ submit, error }) {
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

  // Function to take into account input fields changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Function to submit form
  const handleSubmit = (e) => {
    e.preventDefault()
    submit(formData)
  }
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
