interface DioCard {
    id: number,
    data : string,
    event: () => {}
}

export const Cards = ( {id, data} : DioCard) => { // pasando o parametro id da interface DioCard
    console.log(id)
    return (
    
             <div>
            <h1>Card em componente</h1>
            <p> Hhehehehe</p>
            <p>Numero: {id}</p>
            <p>String: {data}</p>
        </div>
        // <div> illegal</div> nao podemos exportar dois componetnes irmaos
        // para isso, podemos usar o react fragment
        
    )
}