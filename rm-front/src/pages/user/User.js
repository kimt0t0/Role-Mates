// IMPORTS
// Modules
import { useState } from 'react'
// Components
import LoginForm from '../../components/login-form/LoginForm'
import RegisterForm from '../../components/register-form/RegisterForm'

// Styles
import './User.scss'

function User () {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isRegistered, setIsRegistered] = useState(true)
  // const [profile, setProfile] = useState(null)

  const toggleForm = () => {
    return setIsRegistered(!isRegistered)
  }
  return (
    <section className='section __user'>
      {isRegistered
        ? <LoginForm />
        : <RegisterForm />}
      <div className='link-ctn'>
        <a href='#' className='formToggle' onClick={toggleForm}>
          {isRegistered ? "Je n'ai pas de compte" : "J'ai déjà un compte"}
        </a>
      </div>
    </section>
  )
}

export default User
