import React, { useState } from "react";

// Recebemos a função 'adicionarTarefa' via props
function TarefaForm({ adicionarTarefa }) {
  // 1. Estado para guardar o que o usuário digita no input
  const [texto, setTexto] = useState("");

  // 2. Função chamada quando o formulário é enviado
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    if (!texto.trim()) return; // Não adiciona tarefa vazia

    // 3. Chama a função do componente "Pai"
    adicionarTarefa(texto);

    // 4. Limpa o input após adicionar
    setTexto("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicionar nova tarefa"
        // 5. Liga o valor do input ao nosso estado
        value={texto}
        // 6. Atualiza o estado a cada tecla digitada
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TarefaForm;
