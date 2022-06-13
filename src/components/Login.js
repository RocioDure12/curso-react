import React, { useState } from 'react';
const Login = () => {

    const [email, setEmail] = useState();
    const [contraseña, setContraseña] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        if(email === '' || password === '') {
            console.log("los campos estan vacios");
        }
    }

    return (
        <>
            <h2>Formulario Login</h2>
            <form onSubmit={submitHandler}>
                <label>Correo electronico</label>
                <input type="email" name="email" />

                <label>Contraseña</label>
                <input type="password" name="password" />
                <button type="submit">Ingresar</button>
            </form>
        </>
    )
}

export default Login;