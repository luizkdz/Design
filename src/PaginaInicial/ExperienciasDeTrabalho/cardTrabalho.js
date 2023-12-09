import "./styleCard.css";
import React from 'react';

export default function CardTrabalho(props) {
    return (
      <div className="card-trabalho">
        <p className = "data">{props.data}</p>
        <h1>{props.titulo}</h1>
        <p>{props.empresa}</p>
        <p>{props.paragrafo}</p>
      </div>
    );
  }