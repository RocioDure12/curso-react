import React, { useState } from 'react';


const UsuariosSave = () => {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs)
        
        fetch("https://601da02bbe5f340017a19d60.mockapi.io/users", {
            method: "POST",
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
