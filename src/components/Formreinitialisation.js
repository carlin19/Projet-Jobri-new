import React,{useState} from "react"

function Formreinitialisation () {

    const [password,setPassword]=useState('')
    const [confirmpassword,setConfirmpassword]=useState('')
    const handleSubmit = (e)=>{
        e.preventDefault();
        const datainscription = {password,confirmpassword}
        console.log(datainscription)
    }
    return(
        <div className='form-container'>
            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <label htmlFor="pass">Mot de passe</label>
                    <input type="password" name='password' required value={password} onChange = { (e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="passconfirm">Confirmez votre mot de passe</label>
                    <input type="password" name='password' required value={confirmpassword} onChange = { (e) => setConfirmpassword(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Reinitialisez</button>
                </div>
            </form>
        </div>
    )
}
export default Formreinitialisation