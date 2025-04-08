// Crio um apelido para o arquivo de CSS e chamo no componente
import estilos from './Card.module.css';

// Precisamos colocar a estrutura para fazer o componente
export function Card({movie}) {
    return (
        <div className={estilos.container}>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <p>{movie.overview}</p>
        </div>
    );
}