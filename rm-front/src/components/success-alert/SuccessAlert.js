// IMPORTS
// Modules
import { Link } from 'react-router-dom'
// Styles
import './SuccessAlert.scss'

// LOGIC
function SuccessAlert ({ title, ctas }) {
  // refresh page to clean form and restart
  const refreshPage = () => {
    window.location.reload(false)
  }
  return (
    <div className='success-alert'>
      <h3 className='sa-title'>{title}</h3>
      <div className='sa-ctas'>
        {ctas.includes('home') && <Link className='sa-link __link' to='/' title="Aller vers la page d'accueil">Aller vers la page d'accueil</Link>}
        {ctas.includes('collection-char') && <Link className='sa-link __link' to='/personnages/' title='Aller vers la liste des personnages'>Voir la liste des personnages</Link>}
        {ctas.includes('create-again') && <button type='button' className='sa-link tertiary-btn' title='Recharger la page' onClick={refreshPage}>+</button>}
      </div>
    </div>
  )
}

// EXPORTS
export default SuccessAlert
