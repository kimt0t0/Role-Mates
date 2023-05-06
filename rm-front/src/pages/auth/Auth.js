// IMPORTS
// Modules
import { useState } from 'react'
// Components
import LoginForm from '../../components/login-form/LoginForm'
import RegisterForm from '../../components/register-form/RegisterForm'

// Styles
import './Auth.scss'

function Auth () {
  // toggle form state variable and setter
  const [isRegistered, setIsRegistered] = useState(true)
  const toggleForm = () => {
    return setIsRegistered(!isRegistered)
  }
  // Rendering
  return (
    <section className='section __user'>
      {isRegistered
        ? <LoginForm />
        : <RegisterForm />}
      <div className='link-ctn'>
        <button type='button' className='formToggle' onClick={toggleForm}>
          {isRegistered ? "Je n'ai pas de compte" : "J'ai déjà un compte"}
        </button>
      </div>
    </section>
  )
}

export default Auth
