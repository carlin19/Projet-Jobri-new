import React from "react"
import Filtreindependant from "../components/Filtreindependant"
import '../styles/Page.css'
import Listindependants from "../components/Listindependants"

function Independants () {
    return(
        <div className="page-container">
            <Filtreindependant/>
            <Listindependants/>
        </div>
    )
}
export default Independants
