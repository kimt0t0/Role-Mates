// IMPORTS
// Modules
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from 'react-eva-icons'
// API service
import { updateProfile } from '../../services/api'
// Styles
import './UserProfile.scss'

// LOGIC
function UserProfile ({ profile }) {
  console.log(profile)
  // Form handling
  // (enable/disable form edition)
  const [editForm, setEditForm] = useState(false)
  const onToggleEditForm = () => {
    setEditForm(!editForm)
  }
  // (enable/disable show new password)
  const [showNewPassword, setShowNewPassword] = useState(true)
  const onToggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword)
  }

  // handle form data
  const [formData, setFormData] = useState({
    email: profile.email
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(`from component updating ${formData}`)
      // await updateProfile(formData)
    } catch (e) {
      console.error(e)
    }
  }

  // if no profile is loaded, display error message and homelink
  if (!profile) {
    return (
      <>
        <h2>Oups, votre profil n'a pas pu être chargé !</h2>
        <Link className='classic-link' to='/' />
      </>
    )
  }
  // else use profile data as form datas
  // form is initially locked and can be edited if toggled with button
  return (
    <div className='user-profile-contents'>
      {/* FORM */}
      <form className='register-form' onSubmit={handleSubmit}>
        <div className='uf-headline'>
          <button onClick={onToggleEditForm}>EditForm</button>
        </div>
        {/* Avatar */}
        <div className='form-group'>
          <div className='avatar-ctn'>
            <img
              src={profile.avatar ? profile.avatar.path : 'images/avatar_placeholder.webp'}
              className='avatar'
              alt={'Avatar de ' + profile.username}
            />
          </div>
          <div className='form-input-group __file'>
            <input
              className='form-input __file'
              type='file'
              name='avatar'
              value={FormData.avatar}
              onChange={handleChange}
              placeholder='kwain@lapinsorcier.mtg'
              disabled={editForm ? '' : 'disabled'}
            />
          </div>
        </div>
        {/* Username */}
        <div className='form-group'>
          <p className='data-name'>Pseudo</p>
          <p className='data-field'>{profile.username}</p>
        </div>
        {/* (Email) */}
        <div className='form-group'>
          <label className='form-label'>Adresse mail</label>
          <div className='form-input-group'>
            <input
              className='form-input'
              type='email'
              name='email'
              value={FormData.email}
              onChange={handleChange}
              placeholder='kwain@lapinsorcier.mtg'
              disabled={editForm ? '' : 'disabled'}
            />
          </div>
        </div>
        {/* (Password) */}
        <div className='form-group'>
          <label className='form-label'>Nouveau mot de passe</label>
          <div className='form-input-group __password'>
            <input
              className='form-input __password'
              type={showNewPassword ? 'password' : 'text'}
              name='password'
              value={FormData.password}
              onChange={handleChange}
              placeholder='Kwain44!'
              disabled={editForm ? '' : 'disabled'}
            />
            <button
              type='button'
              className={editForm ? 'warning-btn' : 'disabled-btn'}
              onClick={onToggleShowNewPassword}
              disabled={editForm ? '' : 'disabled'}
            >
              <Icon
                name={showNewPassword ? 'eye-outline' : 'eye-off-outline'}
                size='large'
              />
            </button>
          </div>
        </div>

        {/* Security */}
        <div className='form-group'>
          <label className='form-label'>Nouveau mot de passe</label>
          <p className='security-phrase'>Pour la sécurité de votre compte, nous vous demandons d'entrer votre mot  de passe actuel avant tout changement.</p>
          <div className='form-input-group __password'>
            <input
              className='form-input __password'
              type='password'
              name='password'
              placeholder='Kwain44!'
              onChange={handleChange}
              disabled={editForm ? '' : 'disabled'}
            />
          </div>
        </div>

        <div className='btn-ctn'>
          <button type='submit' className='secondary-btn'>Mettre à jour mes informations</button>
        </div>
      </form>

      {/* ------------------------------------------ */}
      {/* Characters */}
      <ul className='characters-list'>
        {profile.characters.length > 0
          ? profile.characters.map(character => {
            <p>placeholder personnage</p>
          })
          : <p>Vous n'avez créé aucun personnage pour l'instant</p>}
      </ul>
      <div className='cta-container'>
        <Link className='btn-link' to='creation-utilisateurice/personnage'>+</Link>
      </div>
    </div>
  )
}
// EXPORTS
export default UserProfile
