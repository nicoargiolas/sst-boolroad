const UserCard = ({ userProp }) => {

    const { nome, cognome, mail, telefono, codice_fiscale } = userProp;

    return (
        <div>
            <h2> {nome} {cognome}</h2>
            <h4> e-mail: {mail}</h4>
            <h4> telefono: {telefono}</h4>
            <h4> codice fiscale: {codice_fiscale}</h4>
        </div>
    )
}

export default UserCard