import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

import UserCard from "../components/UserCard";

const TripPage = () => {

    const { id } = useParams();

    const [users, setUsers] = useState([]);

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

    const renderUsers = () => {
        return users.map(
            user => <UserCard key={user.id} userProp={user} />
        )
    }

    useEffect(fetchUsers, [])


    
    return (
        <>
            <form action="submit">
                <input type="text" placeholder="Cerca"/>
                <button>Invia</button>
                <div>
                    {renderUsers()}
                </div>

            </form>

        </>

    )
}

export default TripPage