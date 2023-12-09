import React from 'react';
import ImagemBanner from '../../assetsDesign/banner.png';
import {useState} from 'react';
import './style.css';
import CardTrabalho from './cardTrabalho';

export default function ExperienciaDeTrabalho(){
    return(
        <div className = "secao-experiencia">
            <div className="titulo-experiencia"><h2>Experiências De Trabalho</h2></div>
            <p class = "descricao-experiencia-trabalho">Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
          Sites e Marketing<br/> Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos<br/> nossos clientes.</p>
        <div className = "container-cards">
        <CardTrabalho data = "JUNHO 2012 - 2016" titulo="Web Designer" empresa= "Pied Piper StartUp." paragrafo={
    "Criação de Landing pages, sites institucionais\n e E-commerces completamente personalizados e otimizados para buscadores"}/>
        <CardTrabalho data = "AGOSTO 2016 - 2019" titulo="Product Designer" empresa= "E Corp." paragrafo = "Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"/>
        <CardTrabalho data = "FEVEREIRO 2019 - 2021" titulo="Digital Consulting" empresa= "Arasaka Inc." paragrafo = "Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"/>
        </div>
        </div>
        
    )
};