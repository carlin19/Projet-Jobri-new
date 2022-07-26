import React from "react"
import '../styles/Card.css'
import { Link } from "react-router-dom"
import {ImLocation} from 'react-icons/im'
import {FcBriefcase} from 'react-icons/fc'
import {FcDepartment} from 'react-icons/fc'
import {FcGraduationCap} from 'react-icons/fc'
import {FcIdea} from 'react-icons/fc'
import {MdLanguage} from 'react-icons/md'

function Cardannonce ({id,metier,pseudo,type,ville,domaine,cover,delay,experience,diplome,langue,genre}) {
    return(
        <div className="card-container">
            <div className="card">
                <img src={cover} alt={`${pseudo} cover`}/>
                <div className="card-part">
                    <div className="card-delay-annonce">
                        <p><span><Link to ={`/Home/${id}`}>{metier} ({genre})</Link></span></p>
                        <p><MdLanguage/> {langue}</p>
                    </div>
                    <div className="card-item">
                        <p><FcBriefcase/> {type}</p>
                        <p><FcDepartment/> {domaine}</p>
                        <p><ImLocation/> {ville}</p>
                        <p><FcGraduationCap/> {diplome}</p>
                        <p><FcIdea/> {experience}</p>
                    </div>
                    <div className="card-delay-annonce">
                        <p>Publié par : {pseudo}</p>
                        <p>il y'a : {delay}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cardannonce