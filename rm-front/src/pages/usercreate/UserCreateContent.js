// IMPORTS
// Modules
import { useParams } from 'react-router-dom'
// Components
import Hero from '../../components/hero-title/Hero'
import CreateCharacter from '../../components/create-character/createCharacter'
// Styles
import './UserCreateContent.scss'

function UserCreateContent () {
  const contentType = useParams().type
  switch (contentType) {
    case 'personnage':
      return (
        <section className='section __create-content'>
          <Hero title='Bienvenue dans ton interface de création' subtitle='Ici, tu peux libérer ton esprit créatif et créer du contenu pour jouer :-)' color='secondary' />
          <CreateCharacter />
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
  }
}

export default UserCreateContent
