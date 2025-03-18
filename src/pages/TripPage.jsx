import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

import UserCard from "../components/UserCard";

const TripPage = () => {
    // Recuperiamo id dall url
    const { id } = useParams();

    // variabile di stato per array di oggetti
    const [users, setUsers] = useState([]);

    // andiamo a gestire il form 
    const [search, setSearch] = useState("");

    const fetchUsers = () => {
        fetch("/trips.json")
            .then(res => res.json())
            .then(data => {
                // Trova il viaggio con l'ID corrispondente
                const selectedTrip = data.find(trip => trip.id === parseInt(id));
                setUsers(selectedTrip.partecipanti); // Salva l'array di partecipanti
            })
            .catch(err => console.error("Errore nel caricamento dei dettagli dei partecipanti:", err));
    };
    useEffect(fetchUsers, [])

    // Filtraggio per input ci permette di scrivere nell input e constatare che con .includes scriviamo la prima lettera ci cerchera i nomi che hanno quella lettera
    const filteredUsers = users.filter((user) => user.nome.toLowerCase().includes(search.toLowerCase()));


    return (
        <>
            {/* Gestiamo il onSubmit  */}
            <form onSubmit={(e) => event.preventDefault()}>
                <div className="search-bar">
                    <input className="search" type="text"
                        value={search}
                        placeholder="Cerca"

                        // Gestiamo onChange prendendo il value che sarebbe quello che inserisce l utente
                        onChange={(e) => setSearch(e.target.value)} />
                    <button>Invia</button>
                </div>



            </form>

            <div>
                {filteredUsers.map(user => <UserCard key={user.id} userProp={user} />)}
            </div>

        </>

    )
}

export default TripPage