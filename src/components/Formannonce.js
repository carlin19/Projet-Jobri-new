import React,{useState} from 'react'
import '../styles/Form.css'
import { Formdata } from '../datas/Formdata'

  function Formannonce () {
    const [type,setType]=useState('')
    const [domaine,setDomaine]=useState('')
    const [metier,setMetier]=useState('')
    const [ville,setVille]=useState('')
    const [emploidt,setEmploidt]=useState('')
    const [diplome,setDiplome]=useState('')
    const [langue,setLangue]=useState('')
    const [genre,setGenre]=useState('')
    const [experience,setExperience]=useState('')
    const [remuneration,setRemuneration]=useState('')
    const [description,setDescription]=useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        const dataannonce = {type,domaine,metier,ville,emploidt,diplome,langue,genre,experience,remuneration,description}
        console.log(dataannonce)
    }
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit} className='form'>
                <div>
                <label>Type d'annonce</label>
                <select required value={type} onChange = { (e) => setType(e.target.value)}>
                    <option value=''></option>
                    {Formdata[0].map((data)=>(<option value={`${data}`}>{data}</option>))}
                </select>
                </div>
                <div>
                <label>Domaine</label>
                <select required value={domaine} onChange = { (e) => setDomaine(e.target.value)}>
                    <option value=''></option>
                    {Formdata[1].map((data)=>(<option value={`${data}`}>{data}</option>))}
                </select>
                </div>
                <div>
                <label>Metier</label>
                <input type="text" placeholder=" Poste/metier" required value={metier} onChange = { (e) => setMetier(e.target.value)} />
                </div>
                <div>
                <label>Ville</label>
                <select required value={ville} onChange = { (e) => setVille(e.target.value)}>
                    <option value=''></option>
                    {Formdata[2].map((data)=>(<option value={`${data}`}>{data}</option>))}
                </select>
                </div>
                <div>
                <label>Emploi de temps</label>
                <select required value={emploidt} onChange = { (e) => setEmploidt(e.target.value)}>
                    <option value=''></option>
                    <option value="Temps plein">Temps plein</option>
                    <option value="Temps partiel">Temps partiel</option>
                </select>
                </div>
                <div>
                <label>Diplome réquis</label>
                <select required value={diplome} onChange = { (e) => setDiplome(e.target.value)}>
                    <option value=''></option>
                    {Formdata[3].map((data)=>(<option value={`${data}`}>{data}</option>))}
                </select>
                </div>
                <div>
                <label>Langue requise</label>
                <select required value={langue} onChange = { (e) => setLangue(e.target.value)}>
                    <option value=''></option>
                    <option value="EN">EN</option>
                    <option value="FR">FR</option>
                    <option value="FR et EN">FR et EN</option>
                    <option value="FR ou EN">FR ou EN</option>
                </select>
                </div>
                <div>
                    <label>Genre requis</label>
                    <select required value={genre} onChange = { (e) => setGenre(e.target.value)}>
                        <option value=""></option>
                        <option value="F">F</option>
                        <option value="H">H</option>
                        <option value="H/F">H/F</option>
                    </select>
                </div>
                <div>
                <label>Experience réquise</label>
                <select required value={experience} onChange = { (e) => setExperience(e.target.value)}>
                    <option value=''></option>
                    {Formdata[4].map((data)=>(<option value={`${data}`}>{data}</option>))}
                </select>
                </div>
                <div>
                <label>Rémunération</label>
                <select required value={remuneration} onChange = { (e) => setRemuneration(e.target.value)}>
                    <option value=''></option>
                    <option value="Avec">Avec</option>
                    <option value=" Sans"> Sans</option>
                </select>
                </div>
                <div>
                <label>Description</label>
                <textarea required value={description} placeholder=" description generale; missions ;competences " onChange = { (e) => setDescription(e.target.value)} />
                </div>
                <div>
                <button type="submit">Publier</button>
                </div>
            </form>
        </div>
    )
}
export default Formannonce