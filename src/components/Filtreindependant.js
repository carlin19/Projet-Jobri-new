import React, { useState } from "react"
import '../styles/Filtre.css'
import { Formdata } from "../datas/Formdata"
import {FcBriefcase} from 'react-icons/fc'
import {ImLocation} from 'react-icons/im'
import {FcGraduationCap} from 'react-icons/fc'
import {FcIdea} from 'react-icons/fc'
import {BsGenderAmbiguous} from 'react-icons/bs'

function Filtreindependant() {
    
    const [genre,setGenre]=useState('')
    const [diplome,setDiplome]=useState('')
    const [experience,setExperience]=useState('')
    const [profession,setProfession]=useState('')
    const [ville,setVille]=useState('')
    const datafiltreindependant={profession,genre,ville,experience,diplome}
    const handleSubmit= (e)=>{
        e.preventDefault()
        console.log(datafiltreindependant)
    }
return(
    <div className="formfiltre-container">
        <form onSubmit={handleSubmit} className="formfiltre">
            <div>
            <label><FcBriefcase/> Profession</label>
            <select required value={profession} onChange = { (e) => setProfession(e.target.value)}>
                <option value=""></option>
                {Formdata[5].map((data)=>(<option value={`${data}`}>{data}</option>))}
            </select>
            </div>
            <div>
            <label><BsGenderAmbiguous/> Genre :</label>
            <select value={genre} onChange = { (e) => setGenre(e.target.value)}>
                <option value=""></option>
                <option value="F">F</option>
                <option value="H">H</option>
            </select>
            </div>
            <div>
                <label><ImLocation/> Ville :</label>
                <select value={ville} onChange = { (e) => setVille(e.target.value)}>
                    <option value=''></option>
                    {Formdata[2].map((data)=>(<option value={`${data}`}>{data}</option>))}
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
            <label><FcGraduationCap/> Diplome :</label>
            <select value={diplome} onChange = { (e) => setDiplome(e.target.value)}>
                <option value=""></option>
                {Formdata[3].map((data)=>(<option value={`${data}`}>{data}</option>))}
            </select>
            </div>
            <div>
                <button type="submit" name="Rechercher">Filtrer</button>
            </div>
        </form>
    </div>
)
}
export default Filtreindependant