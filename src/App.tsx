// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Cards } from './components/Cards';
// import { Headers } from './components/Header/Header';
import { Layout } from './components/Layout';
import { PasswordField } from './components/PasswordField';
import { GridComponent } from './components/GridPlaying';
import { UserAuthentication } from './components/UserAuthentication'
import React from 'react' // para React.Fragment, que eh o mesmo que <> </>

// importando componentes para estilizaçao
import styled from 'styled-components'

// chakra ui
import { 
  ChakraProvider,
  Input,
  Center,
  Box,
  Flex
} from '@chakra-ui/react';


// estilizaçao usando template string
// const BoxTag = styled.div` 
//   background-color: red;
//   border-radius: 10px;
// `




function App() {
  return ( // o que a funcao app retorna
   // usamos o react fragment que nao tem significado semantico, somente para separar e acoplar divs
  //  <React.Fragment> ou  <> .. </>

  // passando todo este componente como argumento no layout
  <>  
    <ChakraProvider>
      <Layout>

        <Box minHeight={'50vh'} padding='10px'>
          <Flex align='center' justify='center' minHeight='100vh'>
            <UserAuthentication></UserAuthentication>
          {/* <PasswordField></PasswordField> */}
          </Flex>
        </Box>

        <Center>
          Tags centralizadas
        </Center>
        <GridComponent></GridComponent>


        {/* Passando uma children como argumento do componente Layout: */}

        {/* <h1>Faça o login</h1> */}

        {/* <Box>
          <h2> Texto dentro do styled components</h2>

        </Box> */}

        {/* <label htmlFor='emailInput' > Email </label>
        <input id='emailInput' type="email" />

        <label htmlFor='passwordInput' > Senha </label>
        <input id='passwordInput' type="password" /> */}

        {/* <button>Enviar</button> */}
      
      </Layout>
    </ChakraProvider>
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