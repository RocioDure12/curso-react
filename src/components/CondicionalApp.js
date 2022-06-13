import React, { useState } from 'react';

const CondicionalApp = () => {

    const [condition, setCondition] = useState(true);

    return (
        <div>
            <button onClick={() => setCondition(!condition)}>Toggle</button>
            
            <h1>State value es {condition.toString()}</h1>
            {/*La funcion toString convierte un booleano a cadena de texto*/}

            {/*aca estoy diciendo con !condition que cuando se clickea el valor cambia a lo opuesto del valor que tiene en ese momento (true o falso)*/}

            {/*
                condition
                    ? <h1>es true</h1>
                    : <h1>es false</h1>
            */}

            {/*
                condition && <h1>hola</h1>
            */}

        </div>


    )
}

export default CondicionalApp;