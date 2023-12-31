import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './containers/header';
import ProductListing from "./containers/productList";
import ProductDetail from './containers/productDetail';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/online-store" element={<ProductListing />} />
          <Route path="/product/:productId" element={< ProductDetail />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
