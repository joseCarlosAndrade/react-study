const conta = {
    email : 'email@domain.domain',
    password : 'secretpassword',
    name : 'name'
}

export const api = new Promise((resolve) => {
    setTimeout(()=> {
        resolve(conta); // resolve(conta) significa que a promise vai retornar o obj conta
    }, 3000); // demora 3 segundos para simular uma api
})