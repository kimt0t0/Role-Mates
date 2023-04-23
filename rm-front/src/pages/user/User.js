// IMPORTS
// Components
import Hero from '../../components/hero-title/Hero'
// Services
import { getProfile } from '../../services/api'
// Styles
import './User.scss'

// LOGIC
function User (id) {
  // let userDatas = getProfile(id)
  const userDatas = getProfile('6445404a58b962b4a5593173')
  // Rendering
  return (
    <section className='section __user'>
      <Hero
        title={'Bienvenu·e ' + userDatas.username + ' !'}
        subtitle="Ici, c'est ton antre. Tu peux mettre à jour tes informations et administrer tes personnages, parties de jeux et messages."
        color='warning'
      />
    </section>
  )
}

// EXPORTS
export default User
