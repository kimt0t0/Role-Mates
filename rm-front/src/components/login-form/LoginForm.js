// IMPORTS
// Modules
import { useState } from 'react'
// Components
import Hero from '../hero-title/Hero'

// LOGIC
function LoginForm ({ submit, error }) {
  // Store and update form data
  const [formData, setFormData] = useState({
    email: 'kwain@wizard.mtg',
    password: '123456789'
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
      <Hero title='Connexion' subtitle='Entre tes identifiants pour jouer :-)' color='warning' />
      <form className='login-form' onSubmit={handleSubmit}>
        {/* (Email) */}
        <div className='form-group'>
          <label className='form-label'>Adresse mail</label>
          <input
            type='email'
            name='email'
            value={FormData.email}
            onChange={handleChange}
          />
        </div>
        {/* (Password) */}
        <div className='form-group'>
          <label className='form-label'>Mot de passe</label>
          <input
            type='password'
            name='password'
            value={FormData.password}
            onChange={handleChange}
          />
        </div>
      </form>
    </>
  )
}

// EXPORTS
export default LoginForm
