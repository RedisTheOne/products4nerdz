import React from 'react';
import './Home.css';
import Img1 from '../../images/homeWp.jpg';
import Img2 from '../../images/homeWp1.jpg';
import Img3 from '../../images/homeWp2.jpg';
import Img4 from '../../images/homeWp3.jpg';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    state = {
        currentimg: 0,
        loading: true,
        interval1: '',
        interval2: ''
    }

    componentDidMount() {
        document.querySelector('*').style.overflow = "hidden";
        let currAnime = Math.ceil(Math.random() * 3);
        const interval1 = setInterval(() => {
            if (currAnime === 1) {
                currAnime = Math.ceil(Math.random() * 3);
                document.querySelector('.container-a').style.animation = "anime infinite 5s";
            } else if (currAnime === 2) {
                currAnime = Math.ceil(Math.random() * 3);
                document.querySelector('.container-a').style.animation = "anime1 infinite 5s";
            } else {
                currAnime = Math.ceil(Math.random() * 3);
                document.querySelector('.container-a').style.animation = "anime2 infinite 5s";
            }
        }, 5000);
        const interval2 = setInterval(() => {
            setTimeout(() => {
                this.setState({currentimg: Math.floor(Math.random() * 4)});  
            }, 1000);
        }, 2000);
        this.setState({interval1, interval2})
    }

    render() {
        if(this.state.loading)
            return (
                <div style={{height: "100vh", width: "100vw", background: "#3e3e3e", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center"}}>
                    <h1>Loading...</h1>
                    <div className="containe-a" style={{display: "none"}}></div>
                    <div style={{display: "none"}}>
                        <img alt="" src={Img1} onLoad={() => this.setState({loading: false})} />
                        <img alt="" src={Img2} />
                        <img alt="" src={Img3} />
                        <img alt="" src={Img4} />
                    </div>
                </div>
            )
        return (
            <div className="home">
                <div style={{ backgroundImage: `url("${this.state.currentimg === 0 ? Img1 : this.state.currentimg === 1 ? Img2 : this.state.currentimg === 2 ? Img3 : Img4}")` }} className="container-a">
                </div>
                <Link onClick={() => {
                    clearInterval(this.state.interval1);
                    clearInterval(this.state.interval2);
                }} to={'/products'} style={{color: "#3e3e3e", textDecoration: "none"}}>
                    <h2 style={{textAlign: "center"}}>
                        Products
                    </h2>
                </Link>
            </div>
        )
    }
}