import React from "react";

import "./footer.css";

const FooterPage = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-container-1">
            <div className="footer-bloco">

              <h5 className="title">Super@Games</h5>

              <p>
              Todas as marcas são propriedade dos seus respectivos produtos no Brasil e em outros países.
              Os Horários do site seguem a Hora Oficial de Brasília (GMT -3).
              </p>
            </div>
            <div className="footer-bloco">

              <ul>
                <li className="link">
                  <a href="#">Início</a>
                </li>
                <li className="link">
                  <a href="#">Produtos</a>
                </li>
                <li className="link">
                  <a href="#">Contato</a>
                </li>
                <li className="link">
                  <a href="#">Sobre nós</a>
                </li>
              </ul>
            </div>
          
        </div>
        <div className="footer-container-2">
          <div className="footer-ft">
            <span>
              &reg; {new Date().getFullYear()} Todos os direitos reservados: <a href="http://rsv6.com"> superagames.com </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterPage;