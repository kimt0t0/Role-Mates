// IMPORTS
// Modules
import React from 'react'
import { Link } from 'react-router-dom'
import Icon from 'react-eva-icons'
// Components
import Hero from '../../components/hero-title/Hero'
// Styles
import './Home.scss'

// LOGIC
function Home () {
  // Variables
  // (articles here may be filled with props instead if we build a backoffice later)
  const articles = [
    {
      title: 'Explorer',
      paragraph: "Tu fan de SF ? Plutôt épée et bouclier contre un vil félon ? Voleur sournois ou mage habile ? Tu préfères cramer du zombie avec des copaines ? RoleMates est fait pour toi. Tout ce qu'on te demande, c'est de prendre plaisir à jouer et de respecter les autres. Et rien ne t'empêche de vivre plusieurs aventures en même temps !",
      link: {
        path: '/jeux',
        text: 'Découvrir les jeux',
        icon: 'compass'
      }
    },
    {
      title: 'Raconter',
      paragraph: "Envie d'imaginer et de décider toi-même où va l'histoire plutôt qu'être enfermae dans des scénarios convenus, avec des personnages clichés ? Tu es tombae au bon endroit !",
      link: {
        path: '/personnages',
        text: 'Rencontrer les personnages',
        icon: 'star'
      }
    },
    {
      title: 'Échanger',
      paragraph: "La distance c'est dans la tête ! Rencontre des joueureuses d'horizons, goûts, opinions varié·e·s (rappel: les propos oppressifs ne sont pas des opinions et sont banis ici). Viens jouer et partager de bons moments avec bienveillance à toute heure du jour et de la nuit dans notre safeplace numérique.",
      link: {
        path: '/joueureuses',
        text: 'Voir les joueureuses',
        icon: 'people'
      }
    }
  ]
  // Rendering
  return (
    <section class='section __home'>
      <Hero
        title='Accueil'
        subtitle="Bienvenu·e à toi explorateurice de la toile ! Tu n'es peut-être pas une araignée mais si tu veux tisser des liens avec d'autres joueureuses et explorer des rôles dans des univers de jeu textuel variés, tu es tombae au bon endroit !"
        color='warning'
      />
      <img className='home-illus' src='images/rpg_illus_1.webp' alt='' />
      {articles.map(article => (
        <article key={article.title} class='home-article'>
          <h3 className='article-title'>{article.title}</h3>
          <p className='article-txt'>{article.paragraph}</p>
          <div class='article-btn-ctn'>
            <Link className='classic-btn-link' to={article.link.path}>
              <Icon name={article.link.icon} size='medium' />{article.link.text}
            </Link>
          </div>
        </article>
      )
      )}
    </section>
  )
}

// EXPORT
export default Home
