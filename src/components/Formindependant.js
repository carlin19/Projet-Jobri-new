import React,{useState} from 'react'
import '../styles/Form.css'
import { Formdata } from '../datas/Formdata'

  function Formindependant() {

    const [nom,setNom]=useState('')
    const [quartier,setQuartier]=useState('')
    const [prenom,setPrenom]=useState('')
    const [birthday,setBirthday]=useState('')
    const [genre,setGenre]=useState('')
    const [langue,setLangue]=useState('')
    const [statut,setStatut]=useState('')
    const [ville,setVille]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [diplome,setDiplome]=useState('')
    const [experience,setExperience]=useState('')
    const [profession,setProfession]=useState('')
    const [presentation,setPresentation]=useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        const dataindependant = {nom,quartier,prenom,birthday,genre,statut,ville,phone,email,diplome,experience,profession,presentation}
        console.log(dataindependant)
    }
  
  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit} className='form'>
            <div>
            <label>Nom</label>
            <input type="text" placeholder=" Nom" required value={nom} onChange = { (e) => setNom(e.target.value)} />
            </div>
            <div>
            <label>Prénom</label>
            <input type="text" placeholder=" Prénom" required value={prenom} onChange = { (e) => setPrenom(e.target.value)} />
            </div>
            <div>
            <label>Date de naissance</label>
            <input type="datetime" placeholder=" Date de naissance" required value={birthday} onChange = { (e) => setBirthday(e.target.value)} />
            </div>
            <div>
            <label>Genre</label>
            <select required value={genre} onChange = { (e) => setGenre(e.target.value)}>
                <option value=""></option>
                <option value="F">F</option>
                <option value="H">H</option>
            </select>
            </div>
            <div>
                <label>Langue</label>
                <select required value={langue} onChange = { (e) => setLangue(e.target.value)}>
                    <option value=''></option>
                    <option value="EN">EN</option>
                    <option value="FR">FR</option>
                    <option value="FR et EN">FR et EN</option>
                </select>
                </div>
            <div>
            <label>Statut Proffessionnel</label>
            <select required value={statut} onChange = { (e) => setStatut(e.target.value)}>
                <option value=""></option>
                {Formdata[6].map((data)=>(<option value={`${data}`}>{data}</option>))}
            </select>
            </div>
            <div>
            C:\Users\djofa\Desktop\react projet\annonces-jobrie\src\components\Listannonces.js
            <label>Ville</label>
            <select required value={ville} onChange = { (e) => setVille(e.target.value)}>
                <option value=""></option>
                {Formdata[2].map((data)=>(<option value={`${data}`}>{data}</option>))}
            </select>
            </div>
            <div>
                <label>Quartier</label>
                <input type='text' required value={quartier} onChange = { (e) => setQuartier(e.target.value)}/>
            </div>
            <div>
            <label>Télephone Mobile</label>
            <input type="number" required value={phone} onChange = { (e) => setPhone(e.target.value)} />
            </div>
            <div>
            <label htmlFor="email">Email</label>
                <input type="email" name='email' required value={email} onChange = { (e) => setEmail(e.target.value)} />
            </div>
            <div>
            <label>Dernier Diplome :</label>
            <select required value={diplome} onChange = { (e) => setDiplome(e.target.value)}>
                <option value=""></option>
                {Formdata[3].map((data)=>(<option value={`${data}`}>{data}</option>))}
            </select>
            </div>
            <div>
            <label>Expérience</label>
            <select required value={experience} onChange = { (e) => setExperience(e.target.value)}>
                <option value=""></option>
                {Formdata[4].map((data)=>(<option value={`${data}`}>{data}</option>))}
            </select>
            </div>
            <div>
            <label>Profession</label>
            <select required value={profession} onChange = { (e) => setProfession(e.target.value)}>
                <option value=""></option>
                {Formdata[5].map((data)=>(<option value={`${data}`}>{data}</option>))}
            </select>
            </div>
            <div>
            <label>Présentation</label>
            <textarea required value={presentation} onChange = { (e) => setPresentation(e.target.value)} />
            </div>
            <div>
            <button type="submit" >Soumettre</button>
            </div>
        </form>
    </div>
      
  );
}
export default Formindependant