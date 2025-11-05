import React from "react";
import './App.css';

function TarefaItem(props) {
  return <li>{props.texto}</li>;

}

function App() {
  return(
    <div className="app">
      <h1>Minha Lista de Tarefas (CRUD)</h1>
      <ul>
        {/* Usando o componente e passando a prop "texto"*/}
        <TarefaItem texto="Aprender React" />
        <TarefaItem texto="Construir um Crud" />
        <TarefaItem texto="Depois vou pedir PONTO" />
      </ul>
    </div>
  );
}

export default App;
