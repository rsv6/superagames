import React, { useState, useEffect } from 'react';

import Body from './components/Body';
import Footer from './components/Footer';

import produtos from './data/products.json';
import './App.css';

import MyContext from './Context/MyContext';

function App() {

  const [ checkout, setCheckout ] = useState(0);
  const [ carrinho, setCarrinho ] = useState([]);
  const [ products, setProducts ] = useState([]);

  useEffect(async ()=>{

    await localStorage.setItem('products', JSON.stringify(produtos));
    await setProducts(JSON.parse(localStorage.getItem('products')));

    if(!localStorage.getItem('carrinho')){
      await localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }

    await setCarrinho(JSON.parse(localStorage.getItem('carrinho')));
    
    if(!localStorage.getItem('checkout')){
      await localStorage.setItem('checkout', 0);
    }
    await setCheckout(parseInt(localStorage.getItem('checkout')));

  },[])


  useEffect(async () => {
    await localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho])

  return (
    <div className="container-fluid-app">
        <MyContext.Provider value={{
          checkout, setCheckout,
          products, setProducts,
          carrinho, setCarrinho
        }}>
            <Body />
        </MyContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
