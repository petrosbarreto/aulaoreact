import React, { useState } from "react";
import TarefaForm from "./TarefaForm"; // Importamos o formulário
import "./App.css";

// Nosso antigo componente de item - agora com botões de ação
function TarefaItem({ tarefa, editarTarefa, excluirTarefa }) {
  return (
    <li>
      <span>{tarefa.texto}</span>
      <div className="acoes">
        <button onClick={() => editarTarefa(tarefa)} className="btn-editar">
          Editar
        </button>
        <button onClick={() => excluirTarefa(tarefa.id)} className="btn-excluir">
          Excluir
        </button>
      </div>
    </li>
  );
}

function App() {
  // O "cérebro" da aplicação: a lista de tarefas guardada no estado
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Aprender React" },
    { id: 2, texto: "Construir um CRUD" },
  ]);

  // Estado para controlar qual tarefa está sendo editada
  const [tarefaEditando, setTarefaEditando] = useState(null);

  // Função que será passada para o TarefaForm - CREATE
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

  // O "U" do CRUD - UPDATE
  const atualizarTarefa = (id, novoTexto) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, texto: novoTexto } : tarefa
      )
    );
    setTarefaEditando(null); // Limpa o modo de edição
  };

  // O "D" do CRUD - DELETE
  const excluirTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  // Função para preparar a edição
  const editarTarefa = (tarefa) => {
    setTarefaEditando(tarefa);
  };

  return (
    <div className="app">
      <h1>Minha Lista de Tarefas (CRUD)</h1>

      {/* O "C" e "U" do CRUD */}
      <TarefaForm
        adicionarTarefa={adicionarTarefa}
        atualizarTarefa={atualizarTarefa}
        tarefaEditando={tarefaEditando}
        setTarefaEditando={setTarefaEditando}
      />

      {/* O "R" do CRUD (Read / Listagem) */}
      <ul>
        {tarefas.map((tarefa) => (
          // Usamos a 'key' para otimização do React
          <TarefaItem
            key={tarefa.id}
            tarefa={tarefa}
            editarTarefa={editarTarefa}
            excluirTarefa={excluirTarefa}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
