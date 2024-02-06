import { PasswordField } from "./PasswordField";
import { Input, InputGroup, InputLeftAddon, Stack, Button, Center, Heading, Box, Text, background, Spinner } from "@chakra-ui/react";
import styled from 'styled-components';
import  React, { useState }  from 'react'
import { useEffect } from "react";
import { fetchMyAPI } from "../services/apiSimulator";
import { asyncLogin } from "../services/login";

import CSS from 'csstype';
// const StyledHeader = styled.h1`
//     font-size: 30px;

// `

import './UserAuthentication.css';


interface MyDataInterface {
    email : string,
    name : string,
    password : string
}

export const UserAuthentication = () => {
    const [bg, setBg] = React.useState(false)
    const handleClick= () => {
        setBg(!bg)
    }

    const [userData, setUserData] = useState<null | MyDataInterface>();

    useEffect(()=>{
        const getData = async () => {
            const data : any | MyDataInterface = await fetchMyAPI;
            setUserData(data);
        }
        getData();
    }, []);

    const [email, setEmail] = useState('');
   

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
                    <Input placeholder="Enter your email" value={email} onChange={(event) => {setEmail(event.target.value)}}></Input>
                </InputGroup>
                <PasswordField></PasswordField>
            </Stack>
            <Button bg='lightBlue' onClick={()=> {asyncLogin(email)}}>Enviar</Button>
            <Box display='flex' flexDir='column' alignItems='center' justifyContent='center'  >
                <Text fontSize='20px' fontWeight='700'>Texto retornado Promise:</Text>
                <Box 
                    display='flex' flexDir='column' alignItems='center' justifyContent='center'
                    color='rgba(222, 222, 222, 1)' 
                    bgColor='rgba(10,0,230,0.5)'
                    boxShadow='2px 2px 10px 7px rgba(0, 0, 0, 0.3)'
                    fontSize='2rem'
                    fontWeight='700'
                    background='radial-gradient(circle, rgba(50,86,129,1) 0%, rgba(35,41,80,1) 100%)'
                    borderRadius='13px'
                    padding='1rem 3rem'>
                        {/* conditional rendering: */}
                    {
                       ( userData === null || userData === undefined ) ?
                        // <p>Loading..</p> :
                        <Spinner></Spinner> :
                        <div className="gradient-text">
                            <p>{userData?.email} </p>
                            <p>{userData?.name}</p>
                            <p>{userData?.password}</p>
                        </div>
                        
                    }
                    
                </Box>
            </Box>
        </Stack>
        </>
    )
}