// IMPORTS
// Modules
// import { Link } from 'recat-router-dom'
// import Icon from 'react-eva-icons'
// Components
import CardLink from '../../components/card-link/CardLink'
import Hero from '../../components/hero-title/Hero'
// Styles
import './Characters.scss'

// LOGIC
function Characters () {
  // Fake testing data
  const characters = [
    {
      id: '1',
      user: 'Kim',
      name: 'Kwain',
      illus: 'https://i.pinimg.com/originals/f9/38/5e/f9385e895fd4012b7d36e82ffb40055e.png',
      description: 'Pourquoi tant de lenteur ? Pourquoi tant de lenteur ? Dépêchez-vous enfin ! On sait jamais sur quoi on peut tomber !',
      types: ['Lapin', 'Sorcier'],
      stats: [],
      abilities: [],
      life: 15,
      status: 'DRAFT',
      games: [],
      messages: []
    },
    {
      id: '2',
      user: 'Kim',
      name: 'Anowon',
      illus: 'https://crystal-cdn1.crystalcommerce.com/photos/6602875/Anowon__the_Ruin_Thief.jpg',
      description: '',
      types: [],
      stats: [
        {
          name: 'Accélération', amount: 10
        },
        {
          name: 'Surprise', amount: 10
        },
        {
          name: 'Soin', amount: 5
        },
        {
          name: 'Solidité', amount: 2
        },
        {
          name: 'Habileté', amount: 8
        }
      ],
      abilities: [
        {
          name: 'Actionis Supplementaris',
          type: 'Accélération',
          amount: 3,
          description: 'Vous pouvez jouer une action supplémentaire en plus de votre action légale.'
        }
      ],
      life: 15,
      status: 'DRAFT',
      games: [],
      messages: []
    },
    {
      id: '3',
      user: 'Djibi',
      title: 'Wilhelt',
      illus: 'https://www.mtg-forum.de/db/picture.php?art=1&idprintings=346105',
      description: '',
      types: [],
      stats: [],
      abilities: [],
      life: 15,
      status: 'DRAFT',
      games: [],
      messages: []
    }
  ]
  // Rendering
  return (
    <section className='section __cards-list __characters'>
      <Hero
        title='Personnages de jeu'
        subtitle="Bienvenu·e sur la liste des personnages du site. N'hésite pas à t'en inspirer !"
        color='secondary'
      />
      <ul className='cards-list __characters'>
        <li className='cl-item __ characters'>
          {
            characters.map((character, index) => {
              return (<CardLink item={character} key={index} />)
            })
          }
        </li>
      </ul>
    </section>
  )
}

// EXPORTS
export default Characters
