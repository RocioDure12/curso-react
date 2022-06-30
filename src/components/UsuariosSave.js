import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const UsuariosSave = () => {
   
    const [inputs, setInputs] = useState({});
    const params = useParams()

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs)


        //Defino la url a la cual enviar la solicitud. Si el id existe, le agrego /{id} al final
        /*let url = `https://601da02bbe5f340017a19d60.mockapi.io/users`;
        if(params.id)
        {
            url = `https://601da02bbe5f340017a19d60.mockapi.io/users/${params.id}`
        }*/
        const url = `https://601da02bbe5f340017a19d60.mockapi.io/users${params.id ? `/${params.id}` : ''}`;

        //Defino el metodo que voy a utilizar para enviar la solicitud. Si el id existe, PUT sino PATCH
        const method = params.id ? "PUT" : "POST";

        fetch(url, {
            method,
            body: JSON.stringify(inputs),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)

            })
    }

    const obtenerDatos = () => {
        if (params.id) {
            fetch(`https://601da02bbe5f340017a19d60.mockapi.io/users/${params.id}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setInputs(data)

                })
        }
    }

    useEffect(() => {
        obtenerDatos()

    }, [])

    return (
        <div>
            <form id="form" onSubmit={handleSubmit}>
                <input required type="text" value={inputs.nombre || ""} name="nombre" placeholder="nombre" onChange={handleChange} />

                <input required type="text" value={inputs.apellido || ""} name="apellido" placeholder="apellido" onChange={handleChange} />

                <input required type="email" value={inputs.email || ""} name="email" placeholder="email" onChange={handleChange} />

                <button>Ingresar</button>
            </form>
        </div>
    )
}

export default UsuariosSave;
