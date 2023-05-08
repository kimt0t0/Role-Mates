// This is a css art I made of Death's Crow game main character.
// I use it here as a defender for forbidden pages.
// You can find the corresponding codepen here: https://codepen.io/Siaesior/pen/MWVPJog

// IMPORTS
// Modules
import { Link } from 'react-router-dom'
// Styles
import('./PageDefender.scss')

// LOGIC
function PageDefender () {
  return (
    <div className='page-defender classic-ctn'>
      <h2>Oooups ! Tu n'es pas autorisé·e à visiter cette page.</h2>

      <div class='frame'>
        {/* <!-- CROW --> */}
        {/* <!-- Head --> */}
        <div class='c-head' />
        <div class='c-eye-left' />
        <div class='c-eye-right' />
        <div class='c-beak' />
        <div class='c-beak-hider cbh-01' />
        <div class='c-beak-hider cbh-02' />
        {/* <!-- Neck --> */}
        <div class='c-neck cn-left' />
        <div class='c-neck cn-right' />
        {/* <!-- Body --> */}
        <div class='c-body' />
        {/* <!-- Arms --> */}
        <div class='c-arm ca-left' />
        <div class='c-arm ca-right' />
        {/* <!-- Hand --> */}
        <div class='c-hand' />
        {/* <!-- Legs --> */}
        <div class='c-leg cl-left' />
        <div class='c-leg cl-right' />
        {/* <!-- Feet --> */}
        <div class='c-foot-talon cft-01' />
        <div class='c-foot-talon cft-02' />
        <div class='c-foot-talon cft-03' />
        <div class='c-foot-talon cft-04' />
        <div class='c-foot-talon cft-05' />

        {/* <!-- SWORD --> */}
        <div class='s-pommel' />
        <div class='s-handle-bottom' />

        <div class='s-handle-top' />
        <div class='s-handle-circle shc-left'>
          <div class='s-handle-magic' />
        </div>
        <div class='s-handle-circle shc-right'>
          <div class='s-handle-magic' />
        </div>

        <div class='s-handle-triangle sht-left' />
        <div class='s-handle-triangle sht-right' />

        <div class='s-blade'>
          <div class='s-blade-magic sbm-basis' />
        </div>
        <div class='s-blade-top'>
          <div class='s-blade-magic sbm-basis-top' />
        </div>

        <div class='s-blade-magic sbm-detail-01' />
        <div class='s-blade-magic sbm-detail-02' />
        <div class='s-blade-magic sbm-detail-03' />
      </div>
      <p>Tu peux <Link className='secondary-link' to='/auth' title="Aller vers la page d'authentification">te connecter ou t'inscrire</Link> si tu souhaites y accéder.</p>
      <p>Si tu préfères, tu peux aussi retourner à la <Link className='classic-link' to='/' title="Aller vers la page d'accueil">page d'accueil</Link>.</p>
    </div>
  )
}

// EXPORTS
export default PageDefender
