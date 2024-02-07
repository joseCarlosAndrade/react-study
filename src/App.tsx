// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Cards } from './components/Cards';
// import { Headers } from './components/Header/Header';

import React from 'react' // para React.Fragment, que eh o mesmo que <> </>


import { BrowserRouter, Route, Routes } from 'react-router-dom';


// estilizaçao usando template string
// const BoxTag = styled.div` 
//   background-color: red;
//   border-radius: 10px;
// `

import {Home} from './pages/Home';
import { Conta } from './pages/Conta';
import { Animations} from './pages/Animations/Animations';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return ( // o que a funcao app retorna
   // usamos o react fragment que nao tem significado semantico, somente para separar e acoplar divs
  //  <React.Fragment> ou  <> .. </>

  // passando todo este componente como argumento no layout
  <>  
    {/* <BrowserRouter> */}
      <ChakraProvider>
        <Animations></Animations>
        <Home></Home>
        {/* <Routes>
          <Route path='/' element={
            <Home></Home> 
          }/>

        <Route path='/conta' element={
          <Conta></Conta>
        } />

        <Route path='/animations' element={
          <Animations></Animations>
        }></Route>

        </Routes> */}
      </ChakraProvider>
    {/* </BrowserRouter> */}
  </>
  //  ou usemos: </React.Fragment> 
  
  );
}

export default App;


/**
 *  <div> 
      <h1>EItaaa header</h1>
      <p> IH</p>
      <Headers/>
        {/* Inserindo componente Card  
        <Cards
          id={13}  
          data='eitaa'/> {/*Valor numerico sempre entre {}, string entre '' 
        <Cards id={11} data='segunda string'/>
        <Cards id={213} data='terceira string'/>
      </div>
      <div>
        <p>Agora eh possivel separar em varias divs</p>
      </div>
 */