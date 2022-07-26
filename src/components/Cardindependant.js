import React from "react"
import '../styles/Card.css'
import { Link } from "react-router-dom"
import {ImLocation} from 'react-icons/im'
import {FcBriefcase} from 'react-icons/fc'
import {FcClock} from 'react-icons/fc'
import {MdOutlineGpsFixed} from 'react-icons/md'
import {MdLanguage} from 'react-icons/md'
import {FcIdea} from 'react-icons/fc'

function Cardindependant ({id,pseudo,profession,cover,ville,quartier,delay,genre,langue,disponibilité,experience}) {
    return(
        <div className="card-container">
            <div className="card">
                <img src={cover} alt={`${pseudo} cover`}/>
                <div className="card-part">
                    <div className="card-delay-annonce">
                        <p><span><Link to ={`/Independants/${id}`}>{pseudo} ({genre})</Link></span></p>
                        <p><MdLanguage/> {langue}</p>
                    </div>
                    <div className="card-item">
                        <p><FcBriefcase/> {profession}</p>
                        <p><MdOutlineGpsFixed/> {quartier}</p>
                        <p><ImLocation/> {ville}</p>
                        <p><FcIdea/> {experience}</p>
                        <p><FcClock/> {disponibilité}</p>
                    </div>
                    <div className="card-delay-independant">
                        <p>En ligne : {delay}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cardindependant