// Importazione use state e use effect
import { useState, useEffect } from "react"

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

    const renderTrips = () => {
        return trips.map(
            trip => {
                return (
                    <div key={trip.id} >
                        <TripCard tripProp={trip} />
                    </div>
                )
            }
        )
    }

    return (
        <>
            <div>
                {renderTrips()}
            </div>
        </>
    )
}

export default HomePage