//importo parde del link del modulo react-router
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"


const UserCard = ({ userProp }) => {

    const { nome, cognome, mail, telefono, codice_fiscale } = userProp;

    const [showContact, setShowContact] = useState(false);

    return (

        <>
            <div className="user-list-container">
                <div className="user-card">
                    <div className="user-card-header">
                        <h2 className="user-summary">{nome} {cognome}</h2>
                        <button className="contact-button" onClick={() => setShowContact(true)}>Contatta</button>
                    </div>
                    <div className="user-details">
                        <p>Email: {mail}</p>
                        <p>Telefono: {telefono}</p>
                        <p>Codice Fiscale: {codice_fiscale}</p>
                    </div>
                </div>
                {showContact && (
                    <div className="lightbox" onClick={() => setShowContact(false)}>
                        <div className="contact-box">
                            <button className="close-button" onClick={() => setShowContact(false)}>
                                &times;
                            </button>
                            <h3>Contatta {nome} {cognome}</h3>
                            <div className="contact-buttons">
                                <button className="contact-btn">Chiama</button>
                                <button className="contact-btn">Email</button>
                            </div>
                        </div>
                    </div>
                )}

            </div>


        </>


    )

}

export default UserCard