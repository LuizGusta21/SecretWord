import './GameOver.css';

const GameOver = ({retry, score}) => {
  return (
    <div>
      <h1>Fim de Jogo</h1>
      <h3>A sua Pontuação foi: <span>{score}</span></h3>
      <button onClick={retry}>Reiniciar</button>
    </div>
  );
};

export default GameOver;