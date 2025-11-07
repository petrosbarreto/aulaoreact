import React, { useState, useEffect } from "react";

// Recebemos as funções via props
function TarefaForm({
  adicionarTarefa,
  atualizarTarefa,
  tarefaEditando,
  setTarefaEditando,
}) {
  // 1. Estado para guardar o que o usuário digita no input
  const [texto, setTexto] = useState("");

  // 2. useEffect para preencher o input quando estiver editando
  useEffect(() => {
    if (tarefaEditando) {
      setTexto(tarefaEditando.texto);
    }
  }, [tarefaEditando]);

  // 3. Função chamada quando o formulário é enviado
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    if (!texto.trim()) return; // Não adiciona tarefa vazia

    // 4. Se estiver editando, atualiza; senão, adiciona nova
    if (tarefaEditando) {
      atualizarTarefa(tarefaEditando.id, texto);
    } else {
      adicionarTarefa(texto);
    }

    // 5. Limpa o input após adicionar/editar
    setTexto("");
  };

  // 6. Função para cancelar a edição
  const cancelarEdicao = () => {
    setTarefaEditando(null);
    setTexto("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={
          tarefaEditando ? "Editar tarefa" : "Adicionar nova tarefa"
        }
        // 7. Liga o valor do input ao nosso estado
        value={texto}
        // 8. Atualiza o estado a cada tecla digitada
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">
        {tarefaEditando ? "Atualizar" : "Adicionar"}
      </button>
      {tarefaEditando && (
        <button type="button" onClick={cancelarEdicao} className="btn-cancelar">
          Cancelar
        </button>
      )}
    </form>
  );
}

export default TarefaForm;
