import "../styles/_main.scss";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const Main = () => {
    const [peliculas, setPeliculas] = useState([])


    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=bc8797042620dd30aa0adfe114e22d64&languaje=es-ES")
            .then(res => res.json())
            .then(data => {
                setPeliculas(data.results)

            })
    }, [])

    return (
        <>
            <h2>Peliculas populares</h2>
            <div className="container-tarjetas">

                {peliculas.map(pelicula => <MovieCard
                    title={pelicula.title}
                    img={pelicula.poster_path}
                />)}


            </div>
        </>
    )
}
export default Main;