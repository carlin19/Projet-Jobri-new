import React from "react"
import '../styles/Page.css'
import Filtreannonce from '../components/Filtreannonce'
import Listannonces from "../components/Listannonces"

function Home () {
    return(
        <div className="page-container">
            <Filtreannonce/>
            <Listannonces/>
        </div>
    )
}
export default Home
