import React, { useState, useEffect } from 'react';
import Logo from '../../assetsDesign/logo.png';
import Moon from '../../assetsDesign/moon.png';
import Sun from '../../assetsDesign/sun.png';
import './style.css';

export default function Topo(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div className={isDarkTheme ? 'modo-escuro' : 'modo-claro'}>
      <div className="cabecalho">
        <img className="logo" src={Logo} alt="Logo" />
        <div className="botao-clicar" onClick={() => { props.alterarTema(); setIsDarkTheme(!isDarkTheme);}}>
          <div className="imagem-texto">
            <img className="btn-icone" src={isDarkTheme ? Moon : Sun} alt="Toggle Icon" />
            
          </div>
        </div>
      </div>
    </div>
  );
}
