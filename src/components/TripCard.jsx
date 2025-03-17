import { Link } from "react-router-dom"

const TripCard = ({ tripProp }) => {

    const { id, destinazione, data_inizio, data_fine } = tripProp;

    return (
        <div>
            <h2> {destinazione} </h2>
            <h5> {data_inizio} - {data_fine} </h5>
            <Link to={`trip/${id}`} className="btn"> Partecipanti </Link>
        </div>
    )
}

export default TripCard