import { Link } from "react-router-dom"

const TripCard = ({ tripProp }) => {

    // Destrutturazione viaggio
    const { id, destinazione, data_inizio, data_fine,image } = tripProp;

    return (
        <div className="trips_container">
            <img src={image} alt="" className="img-set" />
            <div className="black_square">
                <h2> {destinazione} </h2>

                <h5> {data_inizio} - {data_fine} </h5>
                <Link to={`trip/${id}`} className="btn"> Partecipanti </Link>

            </div>

        </div>
    )
}

export default TripCard