import React from "react"
import '../styles/Page.css'
import { Independantsdata } from "../datas/Independantsdata"
import { useParams } from "react-router-dom"
import Layoutindependant from '../components/Layoutindependant'

function Affichindependant () {
    const { id } = useParams()
    return(
        <div className="page-container">
            <Layoutindependant 
            pseudo={Independantsdata[id].pseudo}
            genre={Independantsdata[id].genre}
            quartier={Independantsdata[id].quartier}
            cover={Independantsdata[id].cover}
            ville={Independantsdata[id].ville}
            diplome={Independantsdata[id].diplome}
            experience={Independantsdata[id].experience}
            profession={Independantsdata[id].profession}
            presentation={Independantsdata[id].presentation}
            disponibilité={Independantsdata[id].disponibilité}
            langue={Independantsdata[id].langue} />
        </div>
    )
}
export default Affichindependant