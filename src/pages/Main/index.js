import React, { useContext } from 'react';
import { Fragment } from 'react';
import MyContext from '../../Context/MyContext';
import './main.css';

function Main(){
    
    const { products, checkout, setCheckout, carrinho, setCarrinho } = useContext(MyContext);  
    const produto = {};

    const addItem = async (id) => {


        for(var i = 0; i < Object.keys(products).length; i++){

            if(products[i].id === parseInt(id)){
                produto.id = parseInt(products[i].id);
                produto.name = String(products[i].name);
                produto.price = products[i].price;
                produto.score = parseInt(products[i].score);
                produto.image = String(products[i].image);
            }
        }
        
        setCarrinho([...carrinho, produto]);
        await localStorage.setItem('carrinho', JSON.stringify(carrinho));
     
        setCheckout(checkout + 1);
        localStorage.setItem('checkout', parseInt(checkout +1));
    }

    return (
        <div className="container-main-pri">
            <h2 style={{color: "#FFF"}}>Destaque da semana:</h2>

            <div className="container-main">
                <div className="container-destaque-pri">

                    {products.map((item, index) => {
                            if(item.id == 201){
                                return (
                                    <Fragment key={index}>
                                        <div className="destaque-pri-img">
                                            <img src={require(`../../img/${item.image}`).default} />
                                        </div>

                                        <div className="destaque-pri-info">
                                            <h3>{item.name}</h3>
                                            
                                            <h5>O Jogo desenvolvido pelo estúdio Infinity Ward, cujo objetivo é comandar as forças de coalizão UNSA para desestruturar a organização espacial.</h5>
                                            
                                            <h4>Score: {item.score}</h4>
                                            
                                            <h2>R$ {item.price.toFixed(2).replace(".", ",")}</h2>
                                            
                                            <button id={item.id} type="submit" className="btnAdd" onClick={(e) => addItem(e.target.id)} >Adicionar no carrinho</button>
                                        </div>
                                    </Fragment>
                                )
                            }                         
                        })}

                </div>

                <div className="container-destaque-sec">
                    <div className="container-bloco">
                        {products.map((item, index) => {
                            if(item.id == 420){
                                return (
                                    <Fragment key={index}>
                                        <div className="mini-bloco-img">
                                            <img src={require(`../../img/${item.image}`).default} />
                                        </div>

                                        <div className="mini-bloco-info">
                                                
                                            <div>
                                                <h4>{item.name}</h4>
                                                <h5>Score: {item.score}</h5>
                                                <h3>R$ {item.price.toFixed(2).replace(".", ",")}</h3>
                                            </div>
                                            
                                            <button id={item.id} type="submit" className="btnAdd" onClick={(e) => addItem(e.target.id)}>Adicionar no carrinho</button>
                                        </div>
                                </Fragment>
                                )
                            }                         
                        })}
                    </div>
                    <div className="container-bloco">
                        {products.map((item, index) => {
                            if(item.id == 501){
                                return (
                                    <Fragment>
                                        <div className="mini-bloco-img">
                                            <img src={require(`../../img/${item.image}`).default} />
                                        </div>

                                        <div className="mini-bloco-info">
                                                
                                            <div>
                                                <h4>{item.name}</h4>
                                                <h5>Score: {item.score}</h5>
                                                <h3>R$ {item.price.toFixed(2).replace(".", ",")}</h3>
                                            </div>
                                            
                                            <button id={item.id} type="submit" className="btnAdd" onClick={(e) => addItem(e.target.id)} >Adicionar no carrinho</button>
                                        </div>
                                </Fragment>
                                )
                            }                         
                        })}
                    </div>
                </div>

                
            </div>

            <div className="container-main-sec">
                
                {products.map((item, index) => {
                    return (
                        <div key={index} data-id={item.id} className="container-bloco-games">
                            
                            <div className="destaque-sec-img">
                                <img src={require(`../../img/${item.image}`).default} />
                            </div>
                            
                            <div className="destaque-pri-info">
                                <h3>{item.name}</h3>
                                
                                <h5>O Jogo desenvolvido pelo estúdio Infinity Ward, distribuidor por Tecent Games.</h5>
                                
                                <h4>Score: {item.score}</h4>
                                
                                <h2>R$ {item.price.toFixed(2).replace(".", ",")}</h2>
                                
                                <button id={item.id} type="submit" className="btnAdd" onClick={(e) => addItem(e.target.id)}>Adicionar no carrinho</button>
                            </div>
                        </div>
                    )
                })} 
            </div>
            
        </div>
    );
}

export default Main;