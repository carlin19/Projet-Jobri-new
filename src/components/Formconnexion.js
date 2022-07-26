import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/Form.css'

function Formconnexion () {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        const dataconnexion = {email,password}
        console.log(dataconnexion)
    }
    return(
        <div className='form-container'>
            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <label>Email/Mobile phone</label>
                    <input type="email"  name="email" required value={email} onChange = { (e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Mot de passe</label>
                    <input type="password"  name="password" required value={password} onChange = { (e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <p>Mot de passe oublié? Réinitialisez le <span><Link to ='/Forgetpassword'>ICI</Link></span></p>
                </div>
                <div>
                <button type="submit">S'identifier</button>
                </div>
            </form>
        </div>
    )
}
export default Formconnexion