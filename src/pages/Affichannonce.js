import React from "react"
import '../styles/Page.css'
import { useParams } from "react-router-dom"
import { Annoncesdata } from "../datas/Annoncesdata"
import Layoutannonce from '../components/Layoutannonce'

function Affichannonce () {
    const { id } = useParams()
    return(
        <div className="page-container">
            <Layoutannonce 
            metier={Annoncesdata[id].metier}
            pseudo={Annoncesdata[id].pseudo}
            type={Annoncesdata[id].type}
            ville={Annoncesdata[id].ville}
            domaine={Annoncesdata[id].domaine}
            emploidt={Annoncesdata[id].emploidt}
            cover={Annoncesdata[id].cover}
            description={Annoncesdata[id].description}
            diplome={Annoncesdata[id].diplome}
            experience={Annoncesdata[id].experience}
            remuneration={Annoncesdata[id].remuneration}
            delay={Annoncesdata[id].delay}
            langue={Annoncesdata[id].langue}
            genre={Annoncesdata[id].genre}/>
        </div>
    )
}
export default Affichannonce