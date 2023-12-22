import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './containers/header';
import ProductListing from "./containers/productList";
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          {/* <Route path="/product/:productId" component={ProductDetails} /> */}
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
