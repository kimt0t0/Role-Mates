// IMPORTS
// Modules
// Components
import Hero from '../../components/hero-title/Hero'
// Styles
import './Character.scss'

// LOGIC
function Character () {
  // Fake testing data
  // const characters = [
  //   {
  //     id: '1',
  //     name: 'Kwain'
  //   },
  //   {
  //     id: '2',
  //     name: 'Anowon'
  //   },
  //   {
  //     id: '3',
  //     title: 'Myrell'
  //   }
  // ]

  // Rendering
  return (
    <section className='section __cards-list __characters'>
      <Hero
        title='Fiche personnage'
        subtitle='Voici les détails du personnage !'
        color='tertiary'
      />
    </section>
  )
}

// EXPORTS
export default Character
