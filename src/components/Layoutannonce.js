import React from "react"
import {ImLocation} from 'react-icons/im'
import {FcBriefcase} from 'react-icons/fc'
import {GiSandsOfTime} from 'react-icons/gi'
import {FcDepartment} from 'react-icons/fc'
import {FcGraduationCap} from 'react-icons/fc'
import {GiPayMoney} from 'react-icons/gi'
import {FcIdea} from 'react-icons/fc'
import {MdLanguage} from 'react-icons/md'
import {BsGenderAmbiguous} from 'react-icons/bs'
import '../styles/Layout.css'

function Layoutannonce ({metier,pseudo,type,ville,domaine,emploidt,cover,description,diplome,experience,remuneration,delay,genre,langue}) {
    return(
        <div className="div">
        <div className="layout-container">
                <div className="layout">
                    <img src={cover} alt={`${pseudo} cover`}/>
                    <div className="layout-global">
                        <div>
                            <h1><span>{metier}</span></h1>
                        </div>
                        <div className="layout-item">
                            <p><FcBriefcase/> {type}</p>
                            <p><ImLocation/> {ville}</p>
                            <p><FcDepartment/> {domaine}</p>
                            <p><BsGenderAmbiguous/> Genre : {genre}</p>
                            <p><GiSandsOfTime/> {emploidt}</p>
                            <p><FcGraduationCap/> {diplome}</p>
                            <p><FcIdea/> {experience}</p>
                            <p><GiPayMoney/> {remuneration}</p>
                            <p><MdLanguage/> {langue}</p>
                        </div>
                        <div className="layout-delay">
                            <p>Publié par : {pseudo}</p>
                            <p>Il y'a : {delay}</p>
                        </div>
                    </div>
                </div>
                <div className="layout-description">
                    <h2>Description</h2>
                    <p>{description}</p>
                </div>
                <div className="layout-description">
                    <h2>Annonces Similaires</h2>
                    <div>

                    </div>
                </div>
                <div className="layout-description">
                    <h2>Annonces à la une</h2>
                    <div>
                        
                    </div>
                </div>
        </div>
        </div>
    )
}
export default Layoutannonce