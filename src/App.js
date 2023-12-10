
import './App.css';
import Topo from '../src/PaginaInicial/Topo/index.js';
import Banner from '../src/PaginaInicial/Banner/index.js';
import ExperienciaDeTrabalho from '../src/PaginaInicial/ExperienciasDeTrabalho/index.js';
import Rodape from '../src/PaginaInicial/Rodape/index.js';
import {useState} from 'react';

function App() {
  const [ehTemaEscuro, setEhTemaEscuro] = useState(false);

  const alterarTema = () => {

    
    const cabecalho = document.querySelector('.cabecalho');
    cabecalho.style.backgroundColor = ehTemaEscuro ? '#252525' : '#fff';
    const backgroundFotoBanner = document.querySelector('.background-foto-banner');
    backgroundFotoBanner.style.backgroundColor = ehTemaEscuro ? '#252525' : '#fafbfc'; 
    const backGroundExperienciasTrabalho = document.querySelector('.secao-experiencia');
    backGroundExperienciasTrabalho.style.backgroundColor = ehTemaEscuro ? '#393838' : '#f6f8fc';
    const backGroundRodape = document.querySelector('.grupo-rodape');
    backGroundRodape.style.backgroundColor = ehTemaEscuro ? "#252525" : "#fff";
   
    const h2Element = document.querySelector('.titulo-experiencia h2');
    h2Element.style.color =ehTemaEscuro ? "#CCCCCC" : '#32333c';
 
    const h1Elements = document.querySelectorAll('.card-trabalho h1');
    h1Elements[0].style.color = ehTemaEscuro ? "white" : "#32333c";
    h1Elements[1].style.color = ehTemaEscuro ? "white" : "#32333c";
    h1Elements[2].style.color = ehTemaEscuro ? "white" : "#32333c";
    setEhTemaEscuro(!ehTemaEscuro);
  }
 

  
  return (
    <div className="App">
      <Topo alterarTema = {alterarTema}/>
      <Banner alterarTema = {alterarTema}/>
      <ExperienciaDeTrabalho alterarTema = {alterarTema}/>
      <Rodape/>
    </div>
  );
}

export default App;
