// IMPORTS
// Modules
import { useState } from 'react'
import Icon from 'react-eva-icons'
// Components
import Hero from '../hero-title/Hero'
// Styles
import './RegisterForm.scss'

// LOGIC
function RegisterForm (submit, error) {
  // Toggle password visibility
  const [showPassword, setShowPassword] = useState(true)

  const onToggleShowPassword = () => {
    return setShowPassword(!showPassword)
  }
  // Store and update form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'CLASSIC',
    avatar: null
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
      <Hero title='Inscription' subtitle='Rejoins le côté des cookies...' color='secondary' />
      <form className='register-form' onSubmit={handleSubmit}>
        {/* Username */}
        <div className='form-group'>
          <label className='form-label'>Pseudo</label>
          <div className='form-input-group'>
            <input
              className='form-input'
              type='text'
              name='username'
              value={FormData.username}
              onChange={handleChange}
              placeholder='Kwain-MtgBG'
            />
          </div>
        </div>
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
          <div className='form-input-group'>
            <input
              className='form-input'
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
        {/* Avatar */}
        <div className='form-group'>
          <label className='form-label'>Avatar <i>(facultatif)</i></label>
          <div className='form-input-group'>
            <input
              className='form-input __file'
              type='file'
              name='avatar'
              value={FormData.avatar}
              onChange={handleChange}
              placeholder='kwain@lapinsorcier.mtg'
            />
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
export default RegisterForm
