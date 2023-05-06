// IMPORTS
// Modules
import { Link } from 'react-router-dom'
import Icon from 'react-eva-icons'
// Components
import { useState } from 'react'
import Hero from '../../components/hero-title/Hero'
// Services
import { getProfile, updateProfile } from '../../services/api'
// Styles
import './Me.scss'

// LOGIC
function Me (id) {
  // const testUserDatas = getProfile(id)
  // const userTestDatas = await getProfile('6445404a58b962b4a5593173')
  const userDatas = {
    username: 'Kwain-MtgBG',
    email: 'kwain@lapinsorcier.mtg',
    password: 'Kwain44!',
    characters: [
      {
        id: '1',
        name: 'Urza, Seigneur Grand Artificier',
        description: 'Quand Urza, seigneur grand-artificier arrive sur le champ de bataille, créez un jeton de créature-artefact 0/0 incolore Construction avec « Cette créature gagne +1/+1 pour chaque artefact que vous contrôlez. »'
      },
      {
        id: '2',
        name: 'Mad Maggie',
        description: "Margaret Kōhere, désormais plus connue sous le nom de Mad Maggie, a grandi dans l’un des coins les plus sordides de Salvo, sans aucune famille pour l'entourer. Elle a malgré tout eu la chance de rencontrer une autre âme tout aussi désemparée sous les traits d'un jeune aventurier répondant au nom de Walter Fitzroy. Tous deux sont devenus inséparables et ont décidé, à l'adolescence, de devenir des mercenaires. Le duo s'est engagé dans la Serre fendue, un puissant groupe paramilitaire clandestin. C’est dans ce contexte que Margaret a gagné son nom de guerre : Mad Maggie. Mais quand le chef de guerre rival Sandringham Kelly a signé un traité avec le Syndicat, Maggie a perdu tout espoir de voir Salvo gagner son indépendance, tandis que Fuse l’a abandonnée pour participer aux Jeux Apex. De quoi laisser Maggie devenir 'folle'..."
      }
    ]
  }
  //   toggle user inputs
  // (username)
  const [isUnameEd, setIsUnameEd] = useState(true)
  const toggleIsUnameEd = () => {
    return setIsUnameEd(!isUnameEd)
  }
  // (avatar)
  const [isUavatarEd, setIsUavatarEd] = useState(true)
  const toggleIsUavatarEd = () => {
    return setIsUavatarEd(!isUavatarEd)
  }
  // (email)
  const [isUmailEd, setIsUmailEd] = useState(true)
  const toggleIsUmailEd = () => {
    return setIsUmailEd(!isUmailEd)
  }
  // (password)
  const [isUpassEd, setIsUpassEd] = useState(true)
  const toggleIsUpassEd = () => {
    return setIsUpassEd(!isUpassEd)
  }
  // (toggle password format)
  const [passwordFormat, setPasswordFormat] = useState(true)
  const togglePasswordFormat = () => {
    return setPasswordFormat(!passwordFormat)
  }
  // handle data update
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [hasFormChanged, setHasFormChanged] = useState(true)
  const handleChange = (e) => {
    setHasFormChanged(false)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    updateProfile(formData)
  }
  // Rendering
  return (
    <section className='section __user'>
      <Hero
        title={'Bienvenu·e ' + userDatas.username + ' !'}
        subtitle="Ici, c'est ton antre. Tu peux mettre à jour tes informations et administrer tes personnages, parties de jeux et messages."
        color='secondary'
      />
      {/* {{ userTestDatas }} */}
      <div className='user-profile'>
        {/* USER INFO */}
        <form className='up-row __form' onSubmit={handleSubmit}>
          <h3 className='title-ter'>Mes informations</h3>
          {/* Username */}
          <div className='upr-group'>
            <input
              className='up-text'
              type='text'
              name='username'
              value={isUnameEd ? userDatas.username : FormData.username}
              onChange={handleChange}
              disabled={isUnameEd ? 'disabled' : ''}
            />
            <button className='classic-btn' type='button' onClick={toggleIsUnameEd}>
              <Icon
                name='edit'
                size='medium'
              />
            </button>
          </div>
          {/* Avatar */}
          <div className='upr-group __avatar'>
            <div className='avatar-frame'>
              <img className='avatar' src={userDatas.avatar ? userDatas.avatar : 'logo/logo.webp'} alt="Avatar de l'utilisateurice" />
              <button className='classic-btn __avatar-btn' type='button' onClick={toggleIsUavatarEd}>
                <Icon
                  name='edit'
                  size='medium'
                />
              </button>
            </div>
            {
              isUavatarEd
                ? <></>
                : <input
                    className='up-text'
                    type='file'
                    name='avatar'
                    value={isUavatarEd ? userDatas.avatar : FormData.avatar}
                    onChange={handleChange}
                  />
            }
          </div>
          {/* Email */}
          <div className='upr-group'>
            <input
              className='up-text'
              type='email'
              name='email'
              value={isUmailEd ? userDatas.email : FormData.email}
              onChange={handleChange}
              disabled={isUmailEd ? 'disabled' : ''}
            />
            <button className='classic-btn' type='button' onClick={toggleIsUmailEd}>
              <Icon
                name='edit'
                size='medium'
              />
            </button>
          </div>
          {/* Password */}
          <div className='upr-group'>
            <div className='input-group'>
              <input
                type={passwordFormat ? 'password' : 'text'}
                onChange={handleChange}
                className='up-text'
                value={userDatas.password}
                disabled={isUpassEd ? 'disabled' : ''}
              />
              <button
                type='button'
                className='warning-btn'
                onClick={togglePasswordFormat}
              >
                <Icon
                  name={passwordFormat ? 'eye-outline' : 'eye-off-outline'}
                  size='medium'
                />
              </button>
            </div>
            <button className='classic-btn' type='button' onClick={toggleIsUpassEd}>
              <Icon
                name='edit'
                size='medium'
              />
            </button>
          </div>
          <div className='submit-ctn'>
            <button
              type='submit'
              className={hasFormChanged ? 'neutral-btn' : 'secondary-btn'}
              disabled={hasFormChanged ? 'disabled' : ''}
            >MODIFIER
            </button>
          </div>
        </form>
        <div className='card-separator' />
        {/* USER CHARACTERS */}
        <div className='up-row __collection'>
          <h3 className='title-ter'>Mes personnages</h3>
          <div className='upr-group'>
            {userDatas.characters.map((character, index) => {
              return (
                <div className='user-card __characters' key={index}>
                  <div className='ucc-illus-ctn'>
                    <img className='ucc-illus' src={character.illus ? character.illus : 'logo/logo.webp'} alt='Illustration du personnage' />
                  </div>
                  <div className='ucc-contents'>
                    <h4>{character.name}</h4>
                    <p className='uccc-text' maxlength='200'>{character.description}</p>
                    <div className='uccn-btn-ctn'>
                      <Link to={'personnages/' + character.id} className='classic-btn-link uccn-link' title='Visiter la feuille du personnage'>
                        <Icon
                          name='eye-outline'
                          size='large'
                        />
                      </Link>
                      <Link to={'edition-personnage/' + character.id} className='secondary-btn-link uccn-link' title='Visiter la feuille du personnage'>
                        <Icon
                          name='edit'
                          size='large'
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='card-separator' />
        {/* USER GAMES */}
        {/* USER MESSAGES */}
      </div>
    </section>
  )
}

// EXPORTS
export default Me
