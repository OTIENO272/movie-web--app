import Home from './pages/Home'
import { MovieProvider } from "./contexts/MovieContext";
import './CSS/App.css'
import { Routes ,Route} from 'react-router-dom'
import Favorite from './pages/Favorite.jsx'
import NavBar from './Components/NavBar'


function App() {

  return (
 <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>

  )
}


export default App
