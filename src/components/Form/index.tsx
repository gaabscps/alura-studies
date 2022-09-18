import React, { useState } from "react";
import { ITarefas } from "../../Types/types";
import { FormScreen } from "./ui";
import { v4 as uuidv4 } from "uuid";

interface PageProps {
  setTarefasState: React.Dispatch<React.SetStateAction<ITarefas[]>>;
}

export const Form: React.FC<PageProps> = ({ setTarefasState }) => {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00:00");

  const resetState = () => {
    setTarefa("");
    setTempo("00:00:00");
  };
  const adicionarTarefa = (e: React.FormEvent) => {
    e.preventDefault();
    setTarefasState((prevState: any) => [
      ...prevState,
      {
        tarefa,
        tempo,
        selecionado: false,
        completado: false,
        id: uuidv4(),
      },
    ]);
    resetState();
  };
  return (
    <FormScreen
      tarefa={tarefa}
      tempo={tempo}
      setTarefa={setTarefa}
      setTempo={setTempo}
      adicionarTarefa={adicionarTarefa}
    />
  );
};
