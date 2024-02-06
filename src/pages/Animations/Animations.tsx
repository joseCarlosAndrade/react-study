import './animations.css'

export const Animations = () => {
    return (
        <>
            <h1>Animation</h1>
            <div className='container'>

                <button className='container-btn'>Botao</button>

                <h1 className='container-h1  animate slideInLeft'>Hello World</h1>
                <h1 className='container-h1 animate slideInLeft animate--fast' >Hello World</h1>

                <h1 className='container-h1 animate rotate animate--slow animate--infinite'>Hello World</h1>

                <h1 className='container-h1 animate rotate-bounce animate--infinite'>Hello Bouncing World</h1>

                
                <button className='container-red-btn'>Bounce!</button>
            </div>

        </>
    )
}