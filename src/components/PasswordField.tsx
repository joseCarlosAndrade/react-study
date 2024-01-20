import React from "react"

import {
    Input, InputGroup, InputRightElement, Button
} from '@chakra-ui/react';

export const PasswordField = () => {
    const [ show, setShow] = React.useState(false); // useState returns a state variable and a function to update it
    const handleClickEvent = () => {
        setShow(!show); // atualiza o valor da variavel
        console.log("clicked")
    }

    return (
        <InputGroup size='md'>
            
            <Input 
            pr='1.0rem'
            type={show ? 'text' : 'password'} // define se a senha sera mostrada ou nao
            placeholder='Digite sua senha aqui'
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClickEvent}>Show</Button>
            </InputRightElement>
            
        </InputGroup>
    )
}