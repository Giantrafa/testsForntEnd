import axios from "axios";

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com",
  headers: {
    "X-Parse-Application-Id": "F9PL8Gv7DCyZflxRptJuVBau0Gs5rjNTwemrdoOk",
    "X-Parse-REST-API-Key": "Besw4IFlIg560POQEfbSyx5uut8rqi4S8WTRTSXx",
  },
});
const tarefaURL = "/classes/Tarefa";
const headerJson = { "Content-Type": "application/json" };
export async function getTarefas() {
  const response = await instance.get(tarefaURL);
  return response.data?.results;
}

export async function addTarefa(descricao) {
  const response = await instance.post(
    tarefaURL,
    {
      descricao,
    },
    {
      headerJson,
    },    
  );
  return response.data;
}
export async function updateTarefa(tarefa) {
  const response = await instance.put(
    `${tarefaURL}/${tarefa.objectId}`,
    {
      descricao: tarefa.descricao,
      concluida: tarefa.concluida,
    },
    {
      headers: headerJson,
    },
  );
  return response.data;
}

export async function deleteTarefa(tarefa) {
  const response = await instance.delete(`${tarefaURL}/${tarefa.objectId}`);
  return response.data;
}