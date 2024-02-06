import { fetchMyAPI } from "./apiSimulator";

export const login = () => {
    
}

export const validateLogin = (password : string) : void => {
    if (password === '123') {
        alert("senha correta")
    }

    return;
}


export const asyncLogin = async (email : string) => { // promised not being used
    // let data : Account;
    // fetchMyAPI.then((result : Account) => {
    //     data = result;
    // })
    // .catch((error) => {
    //     console.error(error);
    // })

    try {
        const data = await fetchMyAPI;
        if (email !== data.email) {
            return alert('Email invalido')
        }
        alert(`Bem vindo ${data?.email}`);
    } catch (error) {
        console.error(error);
    }
    // const data : Account | any = await fetchMyAPI;
    
}