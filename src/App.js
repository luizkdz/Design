
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
    cabecalho.style.backgroundColor = ehTemaEscuro ? 'white' : 'black';
    const backgroundFotoBanner = document.querySelector('.background-foto-banner');
    backgroundFotoBanner.style.backgroundColor = ehTemaEscuro ? 'white' : 'black'; 
    const backGroundExperienciasTrabalho = document.querySelector('.secao-experiencia');
    backGroundExperienciasTrabalho.style.backgroundColor = ehTemaEscuro ? 'white' : 'black';
    const backGroundRodape = document.querySelector('.grupo-rodape');
    backGroundRodape.style.backgroundColor = ehTemaEscuro ? 'white' : 'black';
    setEhTemaEscuro(!ehTemaEscuro);
}
  
  return (
    <div className="App">
      <Topo alterarTema = {alterarTema}/>
      <Banner alterarTema = {alterarTema}/>
      <ExperienciaDeTrabalho/>
      <Rodape/>
    </div>
  );
}

export default App;
