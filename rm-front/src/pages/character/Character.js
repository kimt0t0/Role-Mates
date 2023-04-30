// IMPORTS
// Modules
import { useParams } from 'react-router-dom'
// Components
import Hero from '../../components/hero-title/Hero'
import CharDetails from '../../components/charDetails/CharDetails'
// Styles
import './Character.scss'
import { useState } from 'react'

// LOGIC
function Character () {
  // Fake testing data
  const characters = [
    {
      id: '1',
      user: 'Kim',
      name: 'Kwain',
      illus: 'https://i.pinimg.com/originals/f9/38/5e/f9385e895fd4012b7d36e82ffb40055e.png',
      description: 'Pourquoi tant de lenteur ? Pourquoi tant de lenteur ? Dépêchez-vous enfin ! On sait jamais sur quoi on peut tomber !',
      types: ['Lapin', 'Sorcier'],
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
      status: ['DRAFT', 'ALIVE'],
      games: [
        {
          name: 'CEDH',
          owner: 'Temple du Jeu'
        },
        {
          name: 'Apex',
          owner: 'Steam (lol)'
        }
      ],
      messages: []
    },
    {
      id: '2',
      user: 'Kim',
      name: 'Anowon',
      illus: 'https://crystal-cdn1.crystalcommerce.com/photos/6602875/Anowon__the_Ruin_Thief.jpg',
      description: '',
      types: [],
      stats: [],
      abilities: [],
      life: 17,
      status: ['DRAFT'],
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
      life: 20,
      status: ['DRAFT'],
      games: [],
      messages: []
    }
  ]
  // Toggle details state hook and function
  const [showDetails, setShowDetails] = useState(false)

  const toggleContent = () => {
    return setShowDetails(!showDetails)
  }
  // Get character id from url params
  // Get information about this functionality here: https://reactrouter.com/en/main/hooks/use-search-params
  const characterId = useParams().id
  const character = characters.find(char => char.id === characterId)

  // Rendering
  return (
    <section className='section __cards-list __characters'>
      <Hero
        title={'Fiche personnage de ' + character.name}
        subtitle={'Types: ' + character.types.map(type => {
          return type
        })}
        color='tertiary'
      />
      <div className='char-details'>
        <div className='char-illus-ctn'>
          <img className='char-illus' src={character.illus} alt={'Illustration de ' + character.name} />
        </div>
        {/* Info group 1 */}
        <div className='cd-group'>
          <h3 className='cdg-title'>Description générale</h3>
          <div className='cdg-contents'>
            {character.description}
          </div>
          <div className='btn-ctn'>
            <button
              type='button'
              className='tertiary-btn'
              onClick={toggleContent}
            >
              {showDetails ? 'Cacher les détails' : 'Voir les détails'}
            </button>
          </div>
        </div>
        {showDetails && <CharDetails character={character} />}
      </div>
    </section>
  )
}

// EXPORTS
export default Character
