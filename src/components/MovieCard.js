import "../styles/_moviecard.scss";
const MovieCard= ({title, img})=>{
    return(
        <div className="container">
            <h3>{title}</h3>
            <img  src={`https://image.tmdb.org/t/p/w500/${img}`} alt={`Poster de ${title}`}/>
        </div>
    )
}

export default MovieCard;