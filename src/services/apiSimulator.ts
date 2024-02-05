export interface Account {
    email : string,
    name : string,
    password : string
}

const account : Account =  {
    email : 'email@email.com',
    name : 'name',
    password : 'password'
}

export const fetchMyAPI = new Promise<Account>((resolve) => {
    setTimeout(()=> {
        resolve(account);
    }, 3000);
})