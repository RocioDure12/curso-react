import { useEffect, useState } from "react";
import "../styles/_listausuarios.scss";

const Usuarios = ({ }) => {
    const [usuarios, setUsuarios] = useState([]);

    const obtenerUsuarios = () => {
        fetch("https://601da02bbe5f340017a19d60.mockapi.io/users")
            .then((res) => res.json())
            .then((data) => {
                setUsuarios(data)
            })

    }
    useEffect(() => {
        obtenerUsuarios()
    }, [])

    const eliminarUsuario = (id) => {
            fetch(`https://601da02bbe5f340017a19d60.mockapi.io/users/${id}`, {
                method: "DELETE"
              })
              .then((res) => res.json())
              .then((data) => {
                obtenerUsuarios()
              })
    }

    const editarUsuario = () => {

    }

    return (
        <>
            <h2>Usuarios</h2>

            <table>
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Dirección</th>
                        <th>Acciones</th>
                    </tr>
                    {usuarios.map(usuarios =>

                        <tr key={usuarios.id} id={usuarios.id}>
                            <td>{usuarios.nombre}</td>
                            <td>{usuarios.email}</td>
                            <td>{usuarios.address}</td>
                            <td><button onClick={() => editarUsuario(usuarios.id)}>Editar</button> <button onClick={() => eliminarUsuario(usuarios.id)}>Eliminar</button></td>
                        </tr>

                    )
                    }
                </tbody>
            </table>


        </>
    )
}

export default Usuarios;