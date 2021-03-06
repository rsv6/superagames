import React, { useState } from 'react';


function App() {

  const [ nome, setNome ] = useState("");

  return (
    <div >
      <input value={nome} onChange={(e) => setNome(e)} placeholder="Digite seu nome" />
      <h2>Olá mundo React JS, por {nome}.</h2>
    </div>
  );
}

export default App;
