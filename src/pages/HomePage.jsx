// Importazione use state e use effect
import { useState, useEffect } from "react"

// importo link
import { Link } from "react-router-dom";

import TripCard from './../components/TripCard';


const HomePage = () => {

    const [trips, setTrips] = useState([]);

    const fetchTrips = () => {
        fetch("/trips.json")
            .then(res => res.json())
            .then(data => setTrips(data))
            .catch(err => console.error("Errore nel caricamento dei viaggi:", err));
    };

    useEffect(fetchTrips, [])

    // andiamo a gestire la funzione che ci permettere di aggiungere un nuovo viaggio

   

    return (
        <>
            <div>
                {trips.map(trip => (
                    <TripCard tripProp={trip} key={trip.id} />
                ))}
                <Link to={"/trip/add"}> <button>ADD TRIP</button> </Link>
            </div>
        </>
    )
}

export default HomePage