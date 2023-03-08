import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.svg"
import {Link} from "react-router-dom";
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="left">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="BigCo Inc. logo"/>
                    </Link>
                </div>
                <div className="nav-links">
                    <ul>
                    <li>
                            <Link className="link subtitle-1" to="/">Home</Link>
                            <div className="line"></div>
                        </li>
                        <li>
                            <Link className="link subtitle-1">Meeting</Link>
                            <div className="line"></div>
                        </li>
                        <li>
                            <Link className="link subtitle-1">Shop</Link>
                            <div className="line"></div>
                        </li>
                        <li>
                            <Link className="link subtitle-1">Offers</Link>
                            <div className="line"></div>
                        </li>
                        <li>
                            <Link className="link subtitle-1">Location</Link>
                            <div className="line"></div>
                        </li>
                    </ul>
                </div>
        
            </div>
            <div className="right">
                <div className="button">
                    <Link className="link sc-btn subtitle-1" to="/login">LOGIN</Link>
                    <Link className="link pr-btn subtitle-1" to="/register">REGISTER</Link>
                </div>
                <div className="list">
                    <Link className="link"><span>EN</span></Link>
                    <BedtimeOutlinedIcon/>
                </div>
            </div>
            
        </div>
    )
}
export default Navbar;