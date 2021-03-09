import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import './se.css';

function SobreEmpresa(){

    const { checkout } = useContext(MyContext);

    return (
        <div className="container-se">
            <h1>Página Sobre Empresa:</h1>  
            <h3>Quantidade de itens no carrinho: <span>{checkout}</span></h3>
        </div>
    );
}

export default SobreEmpresa;