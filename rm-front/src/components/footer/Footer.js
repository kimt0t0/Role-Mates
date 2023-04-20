// IMPORTS
// Modules
import React from 'react'
import Icon from 'react-eva-icons'
// Styles
import './Footer.scss'

// LOGIC
function Footer () {
  return (
    <footer className='footer'>
      <div className='footer-ctn'>
        <p className='footer-txt'>Créé par <a href='https://www.linkedin.com/in/kim-robert-4291a4242/' target='_blank' title='Voir LinkedIn' rel='noreferrer'>@Kim Robert</a> dans le cadre d'un projet scolaire avec <a href='https://www.mydigitalschool.com/ecole-multimedia-nantes' target='_blank' title="Visiter le site de l\'école" rel='noreferrer'>@MDS Nantes</a>.</p>
        <ol className='footer-list'>
          <li className='footer-txt fl-elt'>
            <a className='fle-link' href='https://github.com/kimt0t0' target='_blank' title='Voir...' rel='noreferrer'>
              <Icon name='github-outline' size='small' />Github
            </a>
          </li>
          |
          <li className='footer-txt fl-elt'>
            <a className='fle-link' href='https://codepen.io/Siaesior' target='_blank' title='Voir...' rel='noreferrer'>
              <Icon name='edit-outline' size='small' />CodePen
            </a>
          </li>
        </ol>
      </div>
    </footer>
  )
}

export default Footer
