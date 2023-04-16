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
import Home from './pages/home/Home'
import About from './pages/about/About'
// Styles
import './styles/App.scss'

function App () {
  return (
    <div className='App'>
      <Router>
        <Header />
        <div class='classic-ctn'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/a-propos' element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
