import { Link } from "react-router-dom"

const TripCard = ({ tripProp }) => {

    // Destrutturazione viaggio
    const { id, destinazione, data_inizio, data_fine,image } = tripProp;

    return (
        <div className="container-home">
            <h2> {destinazione} </h2>
            <img src={image} alt=""  className="img-set"/>
            <h5> {data_inizio} - {data_fine} </h5>
            <Link to={`trip/${id}`} className="btn"> Partecipanti </Link>
        </div>
    )
}

export default TripCard