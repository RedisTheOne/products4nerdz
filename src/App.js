import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Products from './components/products/Products';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path={"/"} exact component={Home} />
        <Route path={"/products"} exact component={Products} />
      </Router>
    </div>
  );
}

export default App;
