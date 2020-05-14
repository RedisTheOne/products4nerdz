import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    state = {
        userIsSignedIn: false,
        navbarLabel: "Products4Nerdz"
    }

    componentDidMount() {
        //Check if token in local storage
        if(localStorage.getItem("TOKEN"))
            this.setState({userIsSignedIn: true});
    }

    render() {
        return (
            <div className="navbar">
                <div className="left">
                    <div>
                        <label>{this.state.navbarLabel}</label>
                    </div>
                </div>
                <div className="right">
                    <div>
                        {
                            this.state.userIsSignedIn ?
                                <Link to={'/user/dashboard'}>
                                    <button className="btn">Dashboard</button>
                                </Link>
                            :
                                <Link to={'/user/signin'}>
                                    <button className="btn">Sign In</button>
                                </Link>
                        }
                    </div>
                </div>
            </div>
        )
    }
}