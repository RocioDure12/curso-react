import React from "react";
import "../styles/_nav.scss";
import { useState, useContext } from "react";
import Context from "../Context/Context";

const Nav = () => {
    const context = useContext(Context)

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
            .then(res => res.json())
            .then(data => {
                //en este caso como la api es de prueba agregamos manualmente los datos, pero en la vida real la respuesta nos la da la api
                context.user.setUser({
                    name: "Rocio",
                    lastName: "Duré",
                    age: 27,
                    email: "emailfalso@gmail.com",

                })

            })
    }

    const sesionIniciada = context.user.user.name
    console.log(context)


    const handleClickCerrarSesion = () => {
        context.user.setUser({})
    }

    return (
        <>
            <nav className={sesionIniciada ? "nav-sesion-iniciada" : "nav"}>
                {sesionIniciada ? <h1>Bienvenide {context.user.user.name}</h1>
                    : <h1>Bienvenide</h1>}

                {sesionIniciada &&
                    <button onClick={handleClickCerrarSesion}>Cerrar sesión</button>}

                {!sesionIniciada &&
                    < button onClick={handleClickMostrarInicioSesion}>Iniciar sesión</button>
                }
                {!sesionIniciada && mostrarFormIniciarSesion &&
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="nombre usuario" value={input.email || ""} onChange={handleChange} name="email" />
                        <input type="password" value={input.contrasenia || ""} onChange={handleChange} name="contrasenia" />
                        <button>enviar</button>
                    </form>
                }
            </nav>
        </>

    )

}

export default Nav;