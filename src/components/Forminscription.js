import React,{useState} from'react'
import '../styles/Form.css'
import { Formdata } from '../datas/Formdata'

function Forminscription () {
        
    const [email,setEmail]=useState('')
    const [pseudo,setPseudo]=useState('')
    const [phone,setPhone]=useState('')
    const [statut,setStatut]=useState('')
    const [password,setPassword]=useState('')
    const [confirmpassword,setConfirmpassword]=useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        const datainscription = {email,phone,statut,password,confirmpassword}
        console.log(datainscription)
    }

return(
    <div className='form-container'>
        <form  onSubmit={handleSubmit} className="form" >
            <div>
                <label htmlFor="email">Pseudo</label>
                <input type="text" name='Pseudo' required value={pseudo} onChange = { (e) => setPseudo(e.target.value)} />
            </div>
            <div>
            <label htmlFor="email">Email</label>
                <input type="email" name='email' required value={email} onChange = { (e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="telephone">Téléphone mobile</label>
                <input type="text" name='numero' required value={phone} onChange = { (e) => setPhone(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="statut">Statut Proffessionel</label>
                <select required value={statut} onChange = { (e) => setStatut(e.target.value)}>
                    <option value=''></option>
                    {Formdata[6].map((data)=>(<option value={`${data}`}>{data}</option>))}
                </select>
            </div>
            <div>
                <label htmlFor="pass">Mot de passe</label>
                <input type="password" name='password' required value={password} onChange = { (e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label htmlFor="passconfirm">Confirmez votre mot de passe</label>
                <input type="password" name='password' required value={confirmpassword} onChange = { (e) => setConfirmpassword(e.target.value)} />
            </div>
            <div>
                <p>En cliquant sur Accepter et s’inscrire, vous acceptez les Conditions d’utilisation, la Politique de confidentialité et la Politique relative aux cookies de JOBRIE.</p>
            </div>
            <div>
                <button type="submit">Accepter et S'inscrire</button>
            </div>
        </form>
    </div>
)
}
export default Forminscription