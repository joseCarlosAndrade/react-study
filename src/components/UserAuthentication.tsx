import { PasswordField } from "./PasswordField";
import { Input, InputGroup, InputLeftAddon, Stack, Button, Center, Heading } from "@chakra-ui/react";
import styled from 'styled-components';
import  React  from 'react'

// const StyledHeader = styled.h1`
//     font-size: 30px;

// `

export const UserAuthentication = () => {
    const [bg, setBg] = React.useState(false)
    const handleClick= () => {
        setBg(!bg)
    }

    return (
        <>
            <Stack margin='10px' width='50%' >
            <Stack spacing={3}  bg={ bg ? 'beige' : 'lightGray'}  borderRadius='10px' padding={2}>
                <Center>
                    {/* <StyledHeader>Insira suas credenciais</StyledHeader> */}
                    <Heading fontSize={30}>Insira seus dados aqui</Heading>
                </Center>
                
                <InputGroup gap={3} >
                    <Input placeholder="Nome" colorScheme="blue" ></Input>
                    <Input placeholder="Sobrenome"></Input>
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon padding={0}> <Button onClick={handleClick}>Botao aqui</Button></InputLeftAddon>
                    <Input placeholder="Enter your email"></Input>
                </InputGroup>
                <PasswordField></PasswordField>
            </Stack>
            <Button bg='lightBlue'>Enviar</Button>
        </Stack>
        </>
    )
}