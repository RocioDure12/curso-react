import React, { useState } from 'react';

const CounterApp = () => {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <button onClick={() => setContador(contador + 1)}>incrementar</button>
            {/*en el onclick se agrega () => para que la funcion no se ejecute inmediatamente sino solo cuando se haga click*/}
            <h1>Clicks: {contador}</h1>
        </div>)
}

export default CounterApp;