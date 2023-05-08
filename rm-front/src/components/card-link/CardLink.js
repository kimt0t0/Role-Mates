// IMPORTS
// Modules
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import Icon from 'react-eva-icons'
// API Service
import { getUser } from '../../services/api'
// Styles
import './CardLink.scss'

// LOGIC
function CardLink ({ item }) {
  // load owner's name
  const [owner, setOwner] = useState(null)
  const [showLoader, setShowLoader] = useState(true)

  const ownerId = item.user
  const loadOwner = async () => {
    const loadedOwner = await getUser(ownerId)
    setOwner(loadedOwner)
    setShowLoader(false)
  }

  useEffect(() => {
    loadOwner()
    if (!owner) {
      setShowLoader(true)
    }
  }, [])

  return (
    <Link className='card-link' to={'/personnages/' + item._id}>
      <div className='card __characters'>
        <div className='card-illus-ctn'>
          <img className='card-illus' src={item.illus ? item.illus : 'images/character_placeholder.webp'} alt={'Illustration de ' + item.name ? item.name : item.title} />
        </div>
        <div className='card-contents'>
          <div className='cc-bloc'>
            <h3 className='card-title'>{item.charname ? item.charname : item.title}</h3>
            <p className='card-detail'>
              {/* This content will be shown only if item has types */}
              {item.types.length > 0 && <strong>Types:</strong>}
              {item.types.length > 0 && item.types.map((type, index) => index === item.types.length - 1 ? ' ' + type : ' ' + type + ',')}
            </p>
            <p className='card-owner'>
              <strong>Auteurice:</strong>
              {owner && ' ' + owner.username}
              {showLoader && 'Chargement...'}
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
