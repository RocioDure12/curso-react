import "../styles/_main.scss";
import { useState, useEffect, useContext } from "react";
import MovieCard from "./MovieCard";
import Context from "../Context/Context";
import useApi from '../Hooks/useApi'

const Main = () => {
    const context = useContext(Context)
    const [peliculas, setPeliculas] = useState([])
    const api = useApi("https://api.themoviedb.org/3/movie","07b7fbf0aa198d742f7f3020308675d2");

    useEffect(() => {
        //useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=07b7fbf0aa198d742f7f3020308675d2&//language=${context.language.language}`)
        
        api.listPopular(context.language.language)
            .then((data)=>setPeliculas(data.results))


    }, [context.language.language])

    const handleChangeIdioma = (e) => {
        context.language.setLanguage(e.target.value)


    }
    console.log(context)

    return (
        <>

            {context.user.user.name && <section className="ofertas">
                <h3>ATENCION!!! (Ofertas solo para usuarios registrados)</h3>

            </section>}
            <select onChange={handleChangeIdioma}>

                <option value="es">Español</option>
                <option value="en">Ingles</option>
                <option value="lv">Latvian</option>
                <option value="ko">한국어/조선말</option>
            </select>
            <div className="container-tarjetas">

                {peliculas.map(pelicula => <MovieCard
                    key={pelicula.id}
                    id={pelicula.id}
                    title={pelicula.title}
                    img={pelicula.poster_path}
                />)}


            </div>
        </>
    )
}
export default Main;