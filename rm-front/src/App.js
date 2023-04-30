// IMPORTS
// Modules
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
// Components
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
// Pages
import About from './pages/about/About'
import Auth from './pages/auth/Auth'
import Character from './pages/character/Character'
import Characters from './pages/characters/Characters'
import Home from './pages/home/Home'
import User from './pages/user/User'
// Styles
import './styles/App.scss'

function App () {
  return (
    <div className='App'>
      <Router>
        <Header />
        <div className='classic-ctn'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/joueureuse' element={<User />} />
            <Route path='/personnages' element={<Characters />} />
            <Route path='/personnages/:id' element={<Character />} />
            <Route path='/a-propos' element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
