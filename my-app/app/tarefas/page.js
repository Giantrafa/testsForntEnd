//backEnd
"use client";

import { useState } from "react";

export default function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState([]);
  async function handlerCarregarTarefas(){
    const response = await fetch(
    //  ver depois
    );
    const data = await response.json();
    setTarefas(data.results ?? []);
  }
  
  return(
    <><h1>Lista de Tarefas</h1>
      <hr />
      <button onClick={handleCarregarTarefas}>Carregar Tarefas</button>
      <hr />
      <ol>
        {tarefas.map((tarefa) => (
          <li key={tarefa.objectId}>
            {tarefa.descricao} ({`${tarefa.concluida}`})
          </li>
        ))}
      </ol>
    </>
  );
}