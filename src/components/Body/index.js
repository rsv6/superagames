import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import { RiShoppingCartLine } from "react-icons/ri";
import './body.css';

import Main from '../../pages/Main';
import Checkout from '../../pages/Checkout';
import SobreEmpresa from '../../pages/SobreEmpresa';


export default function Body(){

    const { checkout, setCheckout } = useContext(MyContext);

    return (

        <Router >
            <div className="container-fluid-header">
                <div className="container-fluid">
                    <div className="container-1">
                        <div className="cabecalhoPrincipal">    
                            <div className="container-menu">
                                <h1 className="cabecalhoPrincipal-titulo">
                                    <a href="#">Super@Games</a>
                                </h1>
                                
                                <nav className="cabecalhoPrincipal-nav">
                                    
                                    <Link className="cabecalhoPrincipal-nav-link" to="/">Início</Link>
                                    <Link className="cabecalhoPrincipal-nav-link" to="#">Sobre nós</Link>
                                    <Link className="cabecalhoPrincipal-nav-link" to="#">Contato</Link>
                                    <Link className="cabecalhoPrincipal-nav-link" style={{backgroundColor: "green", color: '#FFF'}} to="/checkout">Finalizar compra</Link>
                                    <Link className="checkout-nav-link" to="/checkout">
                                        <RiShoppingCartLine /><span>{checkout}</span>
                                    </Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid-body">
                <div className="container-2">
                    <Switch>
                        <Route path="/" exact>
                            <Main />
                        </Route>
                        <Route path="/checkout">
                            <Checkout />
                        </Route>
                        <Route path="/sobre-empresa">
                            <SobreEmpresa />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}