import React, { useState } from 'react';

const ErrorApp = () =>{

    const [error, setError]=useState("");
    return(
        <div>
            <button onClick={()=> setError("error al traer con la api")}>Error</button>

            <button onClick={()=> setError("credenciales incorrectas")}>otro Error</button>

            <button onClick={()=> setError("")}>Proceso exitoso</button>

            {error && <h1>{error}</h1>}

        </div>
    )
}

export default  ErrorApp;