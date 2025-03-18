// importo link
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header_container">
            
            <div className="logo_container">

               <Link to={"/"}>  <img src="../../public/Logo2.jpeg" alt="" /> </Link>
            </div>

            <div className="nav_container">

                <li>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <Link to={"/trip/add"}> <button className="contact-button">ADD TRIP</button> </Link>
                </li>
            </div>

        </div>

    )
}

export default Header