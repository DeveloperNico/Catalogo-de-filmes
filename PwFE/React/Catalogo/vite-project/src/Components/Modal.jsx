export function Modal({movie, onClose}) {
    if (!movie) {
        return null; // Se não houver filme, não renderiza nada
    }

    console.log("Modal renderizada");
    console.log(movie);

    return (
        <div>
            <div>
                <div>
                    <h2>{movie.title}</h2>
                    <button onClick={onClose}>X</button>
                </div>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <ul>
                        <li>{`Popularidade: ${movie.popularity}`}</li>
                        <li>{`Data de lançamento: ${movie.release_date}`}</li>
                        <li>{`Quantidade de votos: ${movie.vote_average}`}</li>
                        <li>{`Sinópse: ${movie.overview}`}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}