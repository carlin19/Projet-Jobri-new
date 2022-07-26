import React,{useState} from "react"

function Formforget () {

    const [email,setEmail]=useState('')
    const handleSubmit = (e)=>{
        e.preventDefault();
        const datainscription = {email}
        console.log(datainscription)
    }
    return(
        <div className='form-container'>
            <form onSubmit={handleSubmit} className='form'>
                <div>
                <label htmlFor="email">Email</label>
                    <input type="email" name='email' required value={email} onChange = { (e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Envoyer</button>
                </div>
            </form>
        </div>
    )
}
export default Formforget