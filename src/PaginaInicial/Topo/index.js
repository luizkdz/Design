import React from 'react';
import Logo from '../../assetsDesign/logo.png';
import Moon from '../../assetsDesign/moon.png';
import Sun from '../../assetsDesign/sun.png';
import {useState} from 'react';
import './style.css';


export default function Topo(props){
    
    const [ehTemaEscuro, setEhTemaEscuro] = useState(false);
    return(
    <div className={ehTemaEscuro ? 'modo-escuro': 'modo-claro'}>
    <div className= "cabecalho">
            <img className="logo" src = {Logo} alt = "logo"/><div class = "botao-clicar" onClick={props.alterarTema}><div class = "imagem-texto"><img className = "btn-icone" src = {ehTemaEscuro ? Moon : Sun} alt = "icone"/>
    </div> </div>
          </div>
          </div>
)
}