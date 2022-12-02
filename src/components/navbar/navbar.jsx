import "./navbar.css";


const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="container">
                <h1>Mahkamov</h1>
                <ul className="nav-list">
                    <li className="nav-item"><a className="nav-item-link" href="#">Blog</a></li>
                    <li className="nav-item"><a className="nav-item-link" href="#">Blog</a></li>
                    <li className="nav-item"><a className="nav-item-link" href="#">Blog</a></li>
                    <li className="nav-item"><a className="nav-item-link" href="#">Blog</a></li>
                </ul>
                <div>
                    <a className="nav-apply" href="#">Apply</a>
                    <a className="nav-contact" href="#">Contact</a>
                </div>
            </div>
        </div>
    )
}


export default Navbar;