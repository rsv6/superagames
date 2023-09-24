import React, { useContext, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import MyContext from '../../Context/MyContext';

import Main from '../Main/index';
import Body from '../../components/Body';

import './checkout.css';

function Contato(){

    const { checkout, setCheckout, carrinho, setCarrinho, products, setProducts } = useContext(MyContext);

    const finalizarPedido = async () => {

        if(checkout === 0){
            alert("Carrinho sem produto, você não pode finalizar pedido!!!");
            // window.location.replace("http://localhost:3000");
            window.location.replace("https://superagames.onrender.com/")
            return
        }

        setCheckout(0);
        await localStorage.setItem('checkout', parseInt(0));

        setProducts([]);
        localStorage.setItem('products', JSON.stringify([]));

        alert("Pedido finalizado, compra realizada! Obrigado pela preferência!");
        setTimeout(() => {
            // window.location.replace("http://localhost:3000");
            window.location.replace("https://superagames.onrender.com/")
        }, 500);
    }





    return (
        <div className="contaner-checkout">

            <div className="container-checkout-bloco-1">
                {carrinho.map((item, index) => {

                    return (

                        <div key={index} className="container-checkout-layout">
                            
                            <div className="checkout-item-img">
                                <img src={require(`../../img/${item.image}`).default} />
                            </div>
                            <div className="checkout-item-info">
                                <div className="valor">
                                    <h3>Valor: </h3>
                                    <span>R$ {item.price.toFixed(2).replace('.', ',')}</span>
                                </div>
                                <div className="btnRemover">
                                    <button id={() => {}}>Remover</button>
                                </div>
                            </div>
                        </div>
                    )
                })} 
            </div>

            <div className="container-checkout-bloco-2">
                <div className="container-checkout-info">
                    { (function calcularTotal(){
                            let subtotal = carrinho.reduce(getTotal, 0);
                            let frete = 10;
                            let valores = 0;

                            function getTotal(total, item){
                                return total + item.price;
                            }

                            
                            if(subtotal > 250){
                                frete = 0;
                                valores = subtotal + frete;
                            }
                            
                            frete = frete * Object.keys(carrinho).length;
                            valores = subtotal + frete; 

                            return (
                                <Fragment>
                                    <div className="desc">
                                        <h3>Quantidade:</h3>
                                        <h3><span>{checkout} &nbsp; Unidades</span></h3>
                                    </div>
                                    <div className="desc">
                                        <h3>Subtotal:</h3>
                                        <h3>R$&nbsp; {subtotal.toFixed(2).replace('.', ',')}</h3>
                                    </div>
                                    <div className="desc">
                                        <h3>Frete:</h3>
                                        <h3>R$&nbsp; {frete.toFixed(2).replace('.', ',')}</h3>
                                    </div>
                                    <span>* Frete grátis para compras acima de R$ 250,00 </span>
                                    <hr />
                                    <div className="desc">
                                        <h2>Total:</h2>
                                        <h2>R$&nbsp; {valores.toFixed(2).replace('.', ',')}</h2>
                                    </div>
                                </Fragment>
                            )
                        })()
                    }
                </div>
                
                <div className="desc-btn">
                    <Router>
                        {/* <a  id="btnCan" onClick={cancelarPedido}>Cancelar</a> */}

                        
                    </Router>
                    <a id="btnFin" onClick={finalizarPedido}>Finalizar pedido</a>
                    
                </div>
            </div>  
        </div>
    );
}

export default Contato;
