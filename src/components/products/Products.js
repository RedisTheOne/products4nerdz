import React from 'react';
import './Products.css';
import Navbar from '../inc/navbar/Navbar';
import ServerIp from '../inc/ServerIp';
import { Link } from 'react-router-dom';

export default class Products extends React.Component {
    state = {
        pageTitle: "Loading...",
        products: []
    }

    componentDidMount() {
        //Fetch Products
        fetch(ServerIp + 'products')
            .then(res => res.json())
            .then(products => {
                this.setState({products, pageTitle: `Products | ${products.length}`})
            });
    }

    render() {
        const productsToShow = this.state.products.map((p, i) => (
            <div className="product" key={i}>
                <div className="header">
                    <label>{p.title}</label>
                </div>
                <div className="body">
                    <p>By {p.user}</p>
                    <div>
                        <Link to={'/products/' + p.id}>
                            <i className="fa fa-sign-out icon"></i>
                        </Link>
                    </div>
                </div>
            </div>
        ));

        return (
            <div>
                <Navbar />
                <div className="products">
                    <h1>{this.state.pageTitle} </h1>
                    {productsToShow}
                </div>
            </div>
        )
    }
}