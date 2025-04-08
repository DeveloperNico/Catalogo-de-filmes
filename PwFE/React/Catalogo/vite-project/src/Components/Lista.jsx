// Axios permite a comunicação com as páginas HTTP e HTTPS
import axios from "axios";

// As ferramentas começadas com "use" são hooks de manuseio da biblioteca React
// State é um hook que permite criar variáveis que podem ser alteradas e atualizadas
// Effect é um hook que permite executar efeitos colaterais em componentes funcionais
import React, {useState, useEffect} from "react";
import { Card } from './Card';
import { Modal } from './Modal';
import estilos from './Lista.module.css';

const api_key = '499c2201cdc0d58443f51cc7ae480209';
const api_url = 'https://api.themoviedb.org/3/'

export function Lista() {
    // Crio uma variável chamada movie, e "seto" o estado dela como vazio
    const [movies, setMovie] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null); // Variável para armazenar o filme selecionado
    
    // Effect trabalha com uma estrutura específica, parâmetros (), script {} e dependências []
    useEffect(()=>{
        axios.get(`${api_url}movie/popular?api_key=${api_key}&language=pt-BR`)
        .then(response => { // Se toda a comunicação deu certo, então se grava o resultado em um response que pode pegar elementos através do data
            console.log(response.data.results);
            setMovie(response.data.results);
        })
        .catch(error => { // Caso não de certo, exibe um erro de comunicação
            console.log('Error', error);
        });
    },[])

    const handleOpenModal = (movie) => {
        setSelectedMovie(movie); // Atualiza o filme selecionado
    };

    const handleCloseModal = () => {
        setSelectedMovie(null); // Limpa o filme selecionado
    }

    return (
        <div className={estilos.container}>
            <figure style={{display: 'flex', flexWrap: 'wrap'}}>
                {movies.map(movie => (
                    <Card key={movie.id} movie={movie} 
                    onOpenModal = {handleOpenModal} />
                ))}
            </figure>
            {selectedMovie && (
                <Modal movie={selectedMovie} onClose={handleCloseModal} />
            )}
        </div>
    )
}

