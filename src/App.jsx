import { BrowserRouter as Router , Route } from 'react-router-dom'
import './App.css'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Header from './components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from './components/Slider'
import Company from './components/Company'
import GenreMovieList from './components/GenreMovieList'
import Detail from './components/Detail'
import GenreMovieList2 from './components/GenreMovieList2'
import GenreMovieList3 from './components/GenreMovieList3'


function App() {
  return (
    < >
    <Header />
    <Slider />
    <Company />
    <GenreMovieList />
    <GenreMovieList2 />
    <GenreMovieList3 />
    </>
  )
}

export default App