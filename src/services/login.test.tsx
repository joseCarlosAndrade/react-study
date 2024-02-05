import { asyncLogin, validateLogin } from "./login";

describe('validando login', () => {
    // funcao dentro da pagina
    const mockAlert = jest.fn();
    window.alert = mockAlert; // fazendo com que window.alert seja mock

    it('senha deve ser 123', () => {
        // retorno concreto
        // const result = validateLogin('123');
        // expect(result).toBe(true);
        

        validateLogin('123');
        // expect(window.alert).toBeCalled(); // testa se a funcao foi chamada // para funcoes simuladas so, nao nativas
        expect(window.alert).toHaveBeenCalledWith('senha correta'); // espera chamada com este parametro
    })

    const mockEmail = 'email@email.com';

    it('Deve exibir um alert de boas vindas caso o email seja correto', async ()=> {
        await asyncLogin(mockEmail);
        expect(window.alert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}`)

    })

    it('Deve exibir um erro caso o email seja invalido', async () => {
        await asyncLogin('invalid@email');
        expect(mockAlert).toHaveBeenCalledWith('Email invalido');
    })
}) 