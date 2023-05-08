// IMPORTS
// Modules
import Icon from 'react-eva-icons'
// Styles
import './CobayeWip.scss'

// LOGIC
function CobayeWip () {
  return (
  // Area
    <div className='area'>
      <p className='content-line'>OooOOoouPS !</p>
      {/* frame */}
      <div className='frame'>
        {/* body */}
        <div className='cobaye-body'>
          {/* head with details */}
          <div className='cobaye-head'>
            <div className='ch-helmet' />
            <div className='ch-helmet-lower' />
            <div className='ch-helmet-middle' />
            <div className='ch-ear __left' />
            <div className='ch-ear __right' />
            <div className='ch-cheek __left' />
            <div className='ch-cheek __right' />
            {/* eyes */}
            <div className='ch-eye-ctn __left'>
              <div className='eye' />
            </div>
            <div className='ch-eye-ctn __right'>
              <div className='eye' />
            </div>
            <div className='ch-nose' />
            <div className='ch-tongue' />
          </div>
          {/* paws */}
          <div className='cb-paw __left' />
          <div className='cb-paw __right' />
        </div>
      </div>
      {/* text and cta */}
      <div className='content-line'>
        <p>Cette page est encore en chantier !</p>
        <a
          href='https://codepen.io/Siaesior/pen/JjmpdLp?editors=1100'
          target='_#'
          className='easter-link'
          alt="Voir la source de l'illustration"
        >
          <Icon
            name='bulb-outline'
            size='large'
          />
        </a>
      </div>
    </div>
  )
}

// EXPORT
export default CobayeWip
