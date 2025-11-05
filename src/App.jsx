import React, { useState } from "react";
import TarefaForm from "./TarefaForm"; // Importamos o formulário
import "./App.css";

// Nosso antigo componente de item
function TarefaItem({ texto }) {
  return <li>{texto}</li>;
}

function App() {
  // O "cérebro" da aplicação: a lista de tarefas guardada no estado
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Aprender React" },
    { id: 2, texto: "Construir um CRUD" },
  ]);

  // Função que será passada para o TarefaForm
  const adicionarTarefa = (texto) => {
    const novaTarefa = {
      id: Date.now(), // ID único (simples, mas funciona para o exemplo)
      texto: texto,
      concluida: false, // Adicionamos um novo campo
    };

    // ATENÇÃO: Nunca modifique o estado diretamente (ex: tarefas.push())
    // Criamos um *novo* array com a nova tarefa
    setTarefas([...tarefas, novaTarefa]);
  };

  return (
    <div className="app">
      <h1>Minha Lista de Tarefas (CRUD)</h1>

      {/* O "C" do CRUD */}
      <TarefaForm adicionarTarefa={adicionarTarefa} />

      {/* O "R" do CRUD (Read / Listagem) */}
      <ul>
        {tarefas.map((tarefa) => (
          // Usamos a 'key' para otimização do React
          <TarefaItem key={tarefa.id} texto={tarefa.texto} />
        ))}
      </ul>
    </div>
  );
}

export default App;
