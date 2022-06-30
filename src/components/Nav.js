import React from "react";
import "../styles/_nav.scss";
import { useState, useContext } from "react";

const Nav = () => {
    const [input, setInputs] = useState({})
    const [mostrarFormIniciarSesion, setMostrarFormIniciarSesion] = useState(false);

    const handleClickMostrarInicioSesion = () => {
        setMostrarFormIniciarSesion(true)
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("https://601da02bbe5f340017a19d60.mockapi.io/users", {
            method: "POST",
            body: JSON.stringify(input),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)

            })
    }

    return (
        <>
            <nav className="nav">
                <h1>Bienvenido</h1>
                <button onClick={handleClickMostrarInicioSesion}>Iniciar sesión</button>

                {mostrarFormIniciarSesion &&
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="nombre usuario" value={input.email || ""} onChange={handleChange} name="email" />
                        <input type="password" value={input.contrasenia || ""} onChange={handleChange} name="contrasenia" />
                        <button>enviar</button>
                    </form>}

            </nav>
        </>

    )

}

export default Nav;