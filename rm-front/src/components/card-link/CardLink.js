// IMPORTS
// Modules
import { Link } from 'react-router-dom'
// import Icon from 'react-eva-icons'
// Styles
import './CardLink.scss'

// LOGIC
function CardLink ({ item }) {
  return (
    <Link className='card-link' to={'/personnages/' + item.id}>
      <div className='card __characters'>
        <div className='card-illus-ctn'>
          <img className='card-illus' src={item.illus ? item.illus : 'images/avatar_placeholder.webp'} alt={'Illustration de ' + item.name ? item.name : item.title} />
        </div>
        <div className='card-contents'>
          <div className='cc-bloc'>
            <h3 className='card-title'>{item.name ? item.name : item.title}</h3>
            <p className='card-detail'>
              {/* This content will be shown only if item has types */}
              {/* {item.types.length > 0 && <strong>Types:</strong>} */}
              {/* {item.types.length > 0 && item.types.map((type, index) => index === -1 ? ' ' + type : ' ' + type + ',')} */}
            </p>
            <p className='card-owner'>
              <strong>Auteurice:</strong>
              {' ' + item.user}
            </p>
          </div>

          <div className='cc-bloc'>
            <p className='card-descr'>{item.description}</p>
          </div>
        </div>

      </div>
    </Link>
  )
}

// EXPORTS
export default CardLink
