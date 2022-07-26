import React from 'react'
import './styles/App.css'
import {Routes,Route} from 'react-router-dom'
import Affichannonce from './pages/Affichannonce'
import Affichindependant from './pages/Affichindependant'
import Home from './pages/Home'
import Formulaireannonce from './pages/Formulaireannonce'
import Independants from './pages/Independants'
import Contactus from './pages/Contactus'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './pages/Error'
import Inscription from './pages/Inscription'
import Connexion from './pages/Connexion'
import About from './pages/About'
import Inscriptionindependant from './pages/Inscriptionindependant'
import Publications from './pages/Publications'
import Sauvegardes from './pages/Sauvegardes'
import Affichageprofil from './pages/Affichageprofil'
import Mesindependants from './pages/Mesindependants'
import Forgetpassword from './pages/Forgetpassword'
import Resetpassword from './pages/Resetpassword'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/Home' element={<Home/>} />
        <Route path='/Home/:id' element={<Affichannonce/>} />
        <Route path='/Affichageprofil' element={<Affichageprofil/>} />
        <Route path='/Forgetpassword' element={<Forgetpassword/>} />
        <Route path='/Resetpassword' element={<Resetpassword/>} />
        <Route path='/Publications' element={<Publications/>} />
        <Route path='/Mesindependants' element={<Mesindependants/>} />
        <Route path='/Sauvegardes' element={<Sauvegardes/>} />
        <Route path='/Formulaireannonce' element={<Formulaireannonce/>} />
        <Route path='/Inscription' element={<Inscription/>} />
        <Route path='/Connexion' element={<Connexion/>} />
        <Route path='/Contactus' element={<Contactus/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Independants' element={<Independants/>} />
        <Route path='/Independants/:id' element={<Affichindependant/>} />
        <Route path='/Inscriptionindependant' element={<Inscriptionindependant/>} />
        <Route path='/*' element={<Error/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
