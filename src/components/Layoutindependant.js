import React from "react"
import {FcClock} from 'react-icons/fc'
import {ImLocation} from 'react-icons/im'
import {FcBriefcase} from 'react-icons/fc'
import {FcGraduationCap} from 'react-icons/fc'
import {FcIdea} from 'react-icons/fc'
import {BsGenderAmbiguous} from 'react-icons/bs'
import {MdOutlineGpsFixed} from 'react-icons/md'
import {MdLanguage} from 'react-icons/md'
import '../styles/Layout.css'

function Layoutindependant ({pseudo,experience,genre,profession,cover,ville,quartier,disponibilité,delay,diplome,presentation,langue}) {
    return(
        <div className="layout-container">
            <div className="layout">
                <img src={cover} alt={`${pseudo} cover`}/>
                <div className="layout-global">
                    <div>
                        <h1><span>{pseudo}</span></h1>
                    </div>
                    <div className="layout-item">
                        <p><FcBriefcase/> {profession}</p>
                        <p><MdOutlineGpsFixed/> {quartier}</p>
                        <p><ImLocation/> {ville}</p>
                        <p><BsGenderAmbiguous/> Genre : {genre}</p>
                        <p><MdLanguage/> {langue}</p>
                        <p><FcGraduationCap/> {diplome}</p>
                        <p><FcIdea/> {experience}</p>
                        <p><FcClock/> {disponibilité}</p>
                    </div>
                    <div className="layout-delay">
                        <p>En ligne il y'a : {delay}</p>
                    </div>
                </div>
            </div>
            <div className="layout-description">
                <h2>Presentation</h2>
                <p>{presentation}</p>
            </div>
            <div className="layout-description">
                <h2>Catalogue photos</h2>
                <div>

                </div>
            </div>
            <div className="layout-description">
                <h2>Notes et Avis</h2>
                <div>

                </div>
            </div>
        </div>
    )
}
export default Layoutindependant