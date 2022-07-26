import React from "react"
import { Annoncesdata } from "../datas/Annoncesdata"
import Cardannonce from "./Cardannonce"
import '../styles/List.css'

function Listannonces () {
    return(
        <div className="list">
                {Annoncesdata.map((annonce,id)=>(
                        <Cardannonce
                            key={`${annonce.pseudo}-${id}`}
                            id={annonce.id}
                            cover={annonce.cover}
                            metier={annonce.metier} 
                            emploidt={annonce.emploidt} 
                            ville={annonce.ville} 
                            type={annonce.type} 
                            domaine={annonce.domaine}
                            pseudo={annonce.pseudo}
                            delay={annonce.delay}
                            remuneration={annonce.remuneration}
                            diplome={annonce.diplome}
                            experience={annonce.experience}
                            langue={annonce.langue}
                            genre={annonce.genre}   />
                ))}
        </div>
    )
}
export default Listannonces