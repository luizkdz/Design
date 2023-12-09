import React from 'react';
import './icones-style.css';
export default function Icones(props){
    return(
    <div class= "circulo-icone">
    <img src = {props.icone}/>
    </div>
    )
}