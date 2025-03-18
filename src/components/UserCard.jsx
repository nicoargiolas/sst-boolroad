const UserCard = ({ userProp }) => {

    const { id, nome, cognome, mail, telefono, codice_fiscale } = userProp;

    return (
        <>
            <div className="user-list-container">
                <div className="user-card">
                    <h2 className="user-summary">{nome} {cognome}</h2>
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