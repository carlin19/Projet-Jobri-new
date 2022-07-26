import React from "react"
import '../styles/Footer.css'

function Footer () {
    return(
        <div className="footer">
            <div className="footer-container">
                <ul className="ullist">
                    <li><ul className="ullist2">Contact
                        <li>email</li>
                        <li>numero</li>
                        <li>addresse</li>
                    </ul></li>
                    <li>Politique d utilisation</li>
                    <li>Politique des cookies</li>
                    <li>Foire aux questions</li>
                    <li>Comment utiliser JOBRIE</li>
                </ul>
            </div>
        </div>
    )

}
export default Footer