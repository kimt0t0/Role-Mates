// IMPORTS
// Modules
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// API service
import { getProfile } from '../../services/api'
// Components
import Hero from '../../components/hero-title/Hero'
import CreateCharacter from '../../components/create-character/createCharacter'
// Styles
import './UserCreateContent.scss'

function UserCreateContent () {
  // get user id from api service
  const [userId, setUserId] = useState(null)
  const getUserId = async () => {
    const loadedProfile = await getProfile()
    return setUserId(loadedProfile._id)
  }
  // handle form/error display if no user id was found
  const [showForm, setShowForm] = useState(false)
  useEffect(() => {
    getUserId()
    if (userId) {
      setShowForm(true)
    } else {
      setShowForm(false)
    }
  }, [])
  // get content type to be able to load appropriate form
  const contentType = useParams().type

  // *** this part is commented because page content does not update when data is loaded ***
  // if (!showForm) {
  //   return (
  //     <section className='section __create-content'>
  //       <p>Oups, vous devez être connecté·e à votre compte pour effectuer cette action !</p>
  //       <Link className='classic-link' to='/auth'>Aller à la page de connexion</Link>
  //     </section>
  //   )
  // }
  switch (contentType) {
    case 'personnage':
      return (
        <section className='section __create-content'>
          <Hero title='Bienvenue dans ton interface de création' subtitle='Ici, tu peux libérer ton esprit créatif et créer du contenu pour jouer :-)' color='secondary' />
          <CreateCharacter userId={userId} />
        </section>
      )
    case 'game':
      return (
        <section className='section __create-content'>
          <Hero title='Bienvenue dans ton interface de création' subtitle='Ici, tu peux libérer ton esprit créatif et créer du contenu pour jouer :-)' color='secondary' />
          <p>Oups, cette partie du site n'est pas encore construite !</p>
          {/* <CreateGame /> */}
        </section>
      )
    default:
      return (
        <section className='section __create-content'>
          <Hero title='Bienvenue dans ton interface de création' subtitle='Ici, tu peux libérer ton esprit créatif et créer du contenu pour jouer :-)' color='secondary' />
          <p>Oups, il semble que cette catégorie n'existe pas (encore) !</p>
        </section>
      )
  }
}

export default UserCreateContent
