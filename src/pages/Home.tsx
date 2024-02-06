import { Box, Center,  Flex } from "@chakra-ui/react"
import { Layout } from "../components/Layout"
import { UserAuthentication } from "../components/UserAuthentication"
import { GridComponent } from "../components/GridPlaying"

export const Home = () => {
    return (
        <>
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

        
        </>
    )
}