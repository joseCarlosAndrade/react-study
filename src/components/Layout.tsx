import { Headers } from "./Header/Header"
// import { Cards } from "./Cards"

export const Layout = ( { children  } : any) => { // children eh a propriedade filha da interface obj
    return (
        // Passando um componente como argumento para paginas padroes
        <>
            <Headers />
            
                {children}

            {/* <Cards id={1} data='data repetida' /> */}
            <p>Footer</p>
        </>
    )
}