import React from 'react';
import ReactDOM from  'react-dom';
//import PrimeiroComponente from './components/PrimeiroComponente';
import FamiliaSilva from './components/FamiliaSilva';
import Familia from './components/Familia';
//import Membro from './components/Menbro';
import Menbro from './components/Menbro';


const elemento = document.getElementById('root');
ReactDOM.render(
    <div>
        {/* <PrimeiroComponente valor="bom dia"></PrimeiroComponente> */}
         <FamiliaSilva sobrenome='Amancio'></FamiliaSilva> 
        <Familia sobrenome='Amancio'>
            <Menbro nome ="Teste" />
            <Menbro nome ="Teste2" />
            <Menbro nome ="Teste3" />
            {/* <Menbro nome ="Teste2"/> */}
        </Familia>
    </div>
,elemento);