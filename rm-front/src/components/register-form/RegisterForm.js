// IMPORTS
// Modules
import { useState } from 'react'
import Icon from 'react-eva-icons'
// Services
import { createImage, register } from '../../services/api'
// Components
import Hero from '../hero-title/Hero'
import SuccessAlert from '../success-alert/SuccessAlert'
// Styles
import './RegisterForm.scss'

// LOGIC
function RegisterForm () {
  // Handle success alert
  const [successAlert, setSuccessAlert] = useState(false)
  // Toggle password visibility
  const [showPassword, setShowPassword] = useState(true)

  const onToggleShowPassword = () => {
    setShowPassword(!showPassword)
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
    if (e.target.name === 'avatar') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0]
      })
    }
    if (e.target.name !== 'role' && e.target.name !== 'avatar') { // may prevent hackers to set their role to admin :-)
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }

  // Function to submit form
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('données du formulaire: ', formData)
    try {
      if (formData.avatar) {
        const savedImage = await createImage({ file: formData.avatar })
        console.log('image sauvée: ', savedImage)
      }
      const registeredUser = await register(formData)
      if (registeredUser) {
        setSuccessAlert(true)
      }
    } catch (e) {
      console.error(e)
    }
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
        {/* Avatar */}
        <div className='form-group'>
          <label className='form-label'>Avatar <i>(facultatif)</i></label>
          <div className='form-input-group __file'>
            <input
              className='form-input __file'
              type='file'
              name='avatar'
              value={FormData.avatar}
              onChange={handleChange}
            />
          </div>
        </div>
        {successAlert && <SuccessAlert
          title='Ton compte a bien été créé !'
          ctas={[]}
                         />}
        <div className='btn-ctn'>
          <button type='submit' className='secondary-btn'>Je m'inscris !</button>
        </div>
      </form>
    </>
  )
}

// EXPORTS
export default RegisterForm
