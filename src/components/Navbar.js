import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Header.css'
import {FcHome} from 'react-icons/fc'
import {FcManager} from 'react-icons/fc'
import { FcAbout } from "react-icons/fc"
import {FcBusinessContact} from 'react-icons/fc'


function Navbar () {
    return (
        <div className='header'>
            <div className='header-container'>
                <div className='icone'><Link to ='/Home'>JOBRIE</Link></div>
                <nav>
                    <ul>
                        <li><FcHome/> Annonces 
                            <ul>
                                <li><Link to ='/Home'>Consulter</Link></li>
                                <li><Link to ='/Formulaireannonce'>Publier une annonce</Link></li>
                                <li><Link to ='/Publications'>Mes publications</Link></li>
                                <li><Link to ='/Sauvegardes'>Mes Sauvegardes</Link></li>
                            </ul>
                        </li>
                        <li><FcManager/> Independants
                            <ul>
                                <li><Link to ='/Independants'>Catalogue</Link></li>
                                <li><Link to ='/Mesindependants'>Mes independants</Link></li>
                                <li><Link to ='/Inscriptionindependant'>Devenir independant</Link></li>
                                <li><Link to ='/Affichageprofil'>Mon profil</Link></li>
                            </ul>
                        </li>
                        <li><Link to ='/About'><FcAbout/> About us</Link></li>
                        <li><Link to ='/Contactus'><FcBusinessContact/> Contact us</Link></li>
                    </ul> 
                </nav>
                <div className='log'>
                    <Link to ='/Inscription'>S'inscrire</Link>
                    <Link to ='/Connexion'>S'identifier</Link>
                </div>
            </div>
        </div>
        
    )
    }
export default Navbar