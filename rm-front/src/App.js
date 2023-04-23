// IMPORTS
// Modules
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
// Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
// Pages
import About from './pages/about/About'
import Auth from './pages/auth/Auth'
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
            <Route path='/a-propos' element={<About />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/joueureuse' element={<User />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
