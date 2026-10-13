import { Link } from "react-router-dom";
import logo from "/img/footware/logo.png";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <Link to={"/"}> 
                    <img src={logo} alt="Logo" />
                    <span>Fire Music</span>
                </Link>
            </div>
            <Nav />
        </header>
    );
}