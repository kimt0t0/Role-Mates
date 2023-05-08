// IMPORTS
// Components
import CardLink from '../card-link/CardLink'
// Styles
import './CharactersList.scss'

// LOGIC
function CharactersList ({ characters }) {
  return (
    <ul className='cards-list __characters'>
      <li className='cl-item __ characters'>
        {
              characters.map((character, index) => {
                return (<CardLink item={character} key={index} />)
              })
            }
      </li>
    </ul>
  )
}

// EXPORTS
export default CharactersList
