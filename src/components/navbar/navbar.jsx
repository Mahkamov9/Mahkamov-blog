import "./navbar.css";

import { Turn as Hamburger } from 'hamburger-react';



const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="container nav-box">
                <a href="/" className="nav-logo" >Mahkamov</a>
                <ul className="nav-list">
                    <li className="nav-item"><a className="nav-item-link" href="#">Blog</a></li>
                    <li className="nav-item"><a className="nav-item-link" href="#">Blog</a></li>
                    <li className="nav-item"><a className="nav-item-link" href="#">Blog</a></li>
                    <li className="nav-item"><a className="nav-item-link" href="#">Blog</a></li>
                </ul>
                <div className="nav-btn-box">
                    <a className="nav-apply" href="#">Apply</a>
                    <a className="nav-contact" href="#">Contact</a>
                </div>
                <a className="nav-res-btn" href="#"><Hamburger/></a>
            </div>
        </div>
    )
}


export default Navbar;