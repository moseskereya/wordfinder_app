import React from 'react'
import Logo from "./images/logo.png"
import {Link} from "react-router-dom"

function Header() {
    return (
        <div className="container">
            <nav>
                <img src={Logo} alt="Logo" />
                <ul>
                    <Link className="links" to="/">
                        <li>Home</li>
                    </Link>
                    <Link className="links" to="/word">
                        <li>Words</li>
                    </Link>
                    <Link className="links" to="/About">
                        <li>About</li>
                    </Link>
                </ul>
                <section className="icons">
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-github"></i>
                    <i className="fab fa-instagram"></i>
                </section>
            </nav>
            <section className="library">
                <div className="light-content">
                    <h4>Welcome to the <span>WordFinder</span></h4>
                    <div className="mid-container">
                        <p>With this app, you can learn as Many English Words as you can.</p>
                        <Link to="/word" className="links">
                            <button className="btn">Search</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header
