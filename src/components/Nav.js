import React, { Component } from 'react';
import {Link} from "react-router-dom"
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="word_nav">
                <h5>WordFinder</h5>
                <ul>
                    <Link to="/" className="links">
                        <li>Home</li>
                    </Link>
                    <Link to="/word" className="links">
                        <li>Word</li>
                    </Link>
                    <Link to="/About" className="links">
                        <li>About</li>
                    </Link>
                </ul>
            </div>
         );
    }
}
 
export default Nav;