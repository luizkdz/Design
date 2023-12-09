import React from 'react';
import ImagemBanner from '../../assetsDesign/banner.png';
import {useState} from 'react';
import './style.css';




export default function Banner(props){
    const [ehTemaEscuro, setEhTemaEscuro] = useState(false);

    return(
        <div className={`componente-banner ${props.ehTemaEscuro ? 'modo-escuro' : 'modo-claro'}`}>
            <div className = "background-foto-banner">
            <img src = {ImagemBanner}/>
            </div>
            <div className = "texto-banner">
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>    
                <span>e design digital</span>
            </div>

        </div>
    )
}