// IMPORTS
// Modules
import { useState } from 'react'
// Components
import LoginForm from '../../components/login-form/LoginForm'
import RegisterForm from '../../components/register-form/RegisterForm'

// Styles
import './Auth.scss'

function Auth () {
  const [isRegistered, setIsRegistered] = useState(true)
  // const [profile, setProfile] = useState(null)

  // toggle form
  const toggleForm = () => {
    return setIsRegistered(!isRegistered)
  }
  // check if user is logged in and return user data
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const { dispatch, state: { error, user, loading } } = useAuth()
  // useEffect(() => {
  //   if (user) {
  //     setIsLoggedIn(true)
  //   } else {
  //     setIsLoggedIn(false)
  //   }
  // }, [user])
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
