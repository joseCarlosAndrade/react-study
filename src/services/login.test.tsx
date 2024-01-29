import { validateLogin } from "./login";

describe('validando login', () => {
    it('senha deve ser 123', () => {
        // retorno concreto
        // const result = validateLogin('123');
        // expect(result).toBe(true);
    
        // funcao dentro da pagina
        const mockAlert = jest.fn();
        window.alert = mockAlert; // fazendo com que window.alert seja mock

        validateLogin('123');
        // expect(window.alert).toBeCalled(); // testa se a funcao foi chamada // para funcoes simuladas so, nao nativas
        expect(window.alert).toHaveBeenCalledWith('senha correta'); // espera chamada com este parametro
    })
}) 