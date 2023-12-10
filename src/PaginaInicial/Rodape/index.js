import React from 'react';
import ImagemLogo from '../../assetsDesign/logo.png';
import {useState} from 'react';
import './style.css';
import logoFacebook from '../../assetsDesign/facebook.png';
import logoTwitter from '../../assetsDesign/twitter.png';
import logoLinkedin from '../../assetsDesign/linkedin.png';
import logoDribble from '../../assetsDesign/dribble.png';
import logoBehance from '../../assetsDesign/behance.png';
import logoGooglePlus from '../../assetsDesign/google-plus.png';
import Icones from '../Rodape/icones.js';

export default function Rodape(){
    return(
        <div class = "grupo-rodape">
            <img className = "logo-rodape" src = {ImagemLogo}/>
            <p>Ajudamos a criar uma personalidade digital construindo sua marca<br/> no ambiente online utilizando estratégias,
        ferramentas<br/> e tecnologias personalizadas.</p>
            <div className = "container-links">
                <Icones icone = {logoFacebook}/>
                <Icones icone = {logoTwitter}/>
                <Icones icone = {logoLinkedin}/>
                <Icones icone = {logoDribble}/>
                <Icones icone = {logoBehance}/>
                <Icones icone = {logoGooglePlus}/>    
            </div>
        <p>Copyright 2022 © <span class= "texto-amarelo">Luiz Gustavo Cardoso</span></p>
        </div>
    )
}