// Criação do elemento square que irá compor o tabuleiro
import { useState } from 'react';
import './App.css';

function Square({valor, onSquareClick}){
  return(
    <button className="square" onClick={onSquareClick}>
      {valor}
    </button>
  );
}



export default function Tabuleiro(){
  const [squares, setSquares] = useState(Array(9).fill(null));
  const[xIsNext,setXIsNext] = useState(true);

  function handleClick(i){

    if(squares[i] || haVencedor(squares)){ // Se squares[i] é null o if não executa o return!!!
       return 
      };
      // O handleClick continua a execução pois o return não foi executado, o squares[i] era NULL!!

    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i] = "X";
    }
    else{
      nextSquares[i] = "O";
    }
    
    setSquares(nextSquares);
    setXIsNext(!xIsNext); // ! inverte a variavel booleana (true ou false)
  }

  return(
    <div>
      <div className='ht1'>
        <Square valor={squares[0]} onSquareClick={()=>{handleClick(0)}}/>
        <Square valor={squares[1]} onSquareClick={()=>{handleClick(1)}}/>
        <Square valor={squares[2]} onSquareClick={()=>{handleClick(2)}}/>
      </div>
      <div className='ht2'>
        <Square valor={squares[3]} onSquareClick={()=>{handleClick(3)}}/>
        <Square className='sq4'valor={squares[4]} onSquareClick={()=>{handleClick(4)}}/>
        <Square className='sq5'valor={squares[5]} onSquareClick={()=>{handleClick(5)}}/>
      </div>
      <div className='ht3'>
        <Square className='sq6' valor={squares[6]} onSquareClick={()=>{handleClick(6)}}/>
        <Square className='sq7'valor={squares[7]} onSquareClick={()=>{handleClick(7)}}/>
        <Square className='sq8'valor={squares[8]} onSquareClick={()=>{handleClick(8)}}/>
      </div>
    </div>
  );
}

function haVencedor(squares){
  if('ht1' === true){
    alert('Parabéns você ganhou');
  }
  else if('ht2' === true){
    alert('Parabéns você ganhou');
  }
  else if('ht3' === true){
    alert('Parabéns você ganhou');
  }
  else if(squares[0] && squares[0] === squares[3] && squares[3] === squares[6]){
    alert('Parabéns você ganhou');
  }
  else if(squares[1] && squares[1] === squares[4] && squares[4] === squares[7]){
    alert('Parabéns você ganhou');
  }
  else if(squares[2] && squares[2] === squares[5] && squares[5] === squares[8]){
    alert('Parabéns você ganhou');
  }
  else if(squares[0] && squares[0] === squares[4] && squares[4] === squares[8]){
    alert('Parabéns você ganhou');
  }
  else if(squares[2] && squares[2] === squares[4] && squares[4] === squares[6]){
    alert('Parabéns você ganhou');
  }
}