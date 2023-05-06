// IMPORTS
// Modules
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
// Contexts
import { AuthProvider } from './contexts/AuthContext'
// Components
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
// Pages
import About from './pages/about/About'
import Auth from './pages/auth/Auth'
import Character from './pages/character/Character'
import Characters from './pages/characters/Characters'
import Home from './pages/home/Home'
import Me from './pages/me/Me'
// Styles
import './styles/App.scss'

function App () {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <Header />
          <div className='classic-ctn'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/auth' element={<Auth />} />
              <Route path='/profil' element={<Me />} />
              <Route path='/personnages' element={<Characters />} />
              <Route path='/personnages/:id' element={<Character />} />
              <Route path='/a-propos' element={<About />} />
            </Routes>
          </div>
          <Footer />
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
