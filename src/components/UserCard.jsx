const UserCard = ({ userProp }) => {

    const { nome, cognome, mail, telefono, codice_fiscale } = userProp;

    return (

        <>
            <div className="user-list-container">
                <div className="user-card">
                    <div className="user-card-header">
                        <h2 className="user-summary">{nome} {cognome}</h2>
                        <button className="contact-button">Contatta</button>
                    </div>
                    <div className="user-details">
                        <p>Email: {mail}</p>
                        <p>Telefono: {telefono}</p>
                        <p>Codice Fiscale: {codice_fiscale}</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default UserCard