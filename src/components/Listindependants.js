import React from "react"
import { Independantsdata } from "../datas/Independantsdata"
import Cardindependant from './Cardindependant'
import '../styles/List.css'

function Listindependants () {
    return(
        <div className="list">
                {Independantsdata.map((independant,id)=>(
                        <Cardindependant
                            key={`${independant.pseudo}-${id}`}
                            id={independant.id}
                            cover={independant.cover}
                            pseudo={independant.pseudo} 
                            quartier={independant.quartier}  
                            ville={independant.ville} 
                            disponibilité={independant.disponibilité} 
                            profession={independant.profession}
                            delay={independant.delay}
                            genre={independant.genre}
                            langue={independant.langue}
                            experience={independant.experience} />
                ))}
        </div>
    )
}
export default Listindependants