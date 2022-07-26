import React, { useState } from "react"
import '../styles/Filtre.css'
import { Formdata } from "../datas/Formdata"
import {ImLocation} from 'react-icons/im'
import {FcBriefcase} from 'react-icons/fc'
import {FcDepartment} from 'react-icons/fc'
import {FcGraduationCap} from 'react-icons/fc'
import {FcIdea} from 'react-icons/fc'

function Filtreannonce() {
    
    const [type,setType]=useState('')
    const [domaine,setDomaine]=useState('')
    const [ville,setVille]=useState('')
    const [diplome,setDiplome]=useState('')
    const [experience,setExperience]=useState('')
    const datafilter={type,domaine,ville,diplome,experience}
    const handleSubmit= (e)=>{
        e.preventDefault()
        console.log(datafilter)
    }
return(
    <div className="formfiltre-container">
        <form onSubmit={handleSubmit} className="formfiltre">
                <div>
                    <label htmlFor=""><FcBriefcase/> Type d annonces : </label>
                    <select value={type} onChange={(e)=>setType(e.target.value)}>
                        <option value=""></option>
                        {Formdata[0].map((data)=>(<option value={`${data}`}>{data}</option>))}
                    </select>
                </div>
                <div>
                    <label htmlFor=""><FcDepartment/>Domaine d activité : </label>
                    <select value={domaine} onChange={(e)=>setDomaine(e.target.value)}>
                        <option value=""></option>
                        {Formdata[1].map((data)=>(<option value={`${data}`}>{data}</option>))}
                    </select>
                </div>
                <div>
                    <label htmlFor=""><ImLocation/> Ville : </label>
                    <select value={ville} onChange={(e)=>setVille(e.target.value)}>
                    <option value=''></option>
                    {Formdata[2].map((data)=>(<option value={`${data}`}>{data}</option>))}
                    </select>
                </div>
                <div>
                    <label><FcGraduationCap/> Diplome :</label>
                    <select value={diplome} onChange = { (e) => setDiplome(e.target.value)}>
                        <option value=""></option>
                        {Formdata[3].map((data)=>(<option value={`${data}`}>{data}</option>))}
                    </select>
                </div>
                <div>
                    <label><FcIdea/> Expérience :</label>
                    <select value={experience} onChange = { (e) => setExperience(e.target.value)}>
                        <option value=""></option>
                        {Formdata[4].map((data)=>(<option value={`${data}`}>{data}</option>))}
                    </select>
            </div>
                <div>
                    <button type="submit" name="Rechercher">Filtrer</button>
                </div>
        </form>
    </div>
)
}
export default Filtreannonce