import React, { useState } from "react";
import { ITarefas } from "../../Types/types";
import { FormScreen } from "./ui";

interface PageProps {
  setTarefasState: React.Dispatch<React.SetStateAction<ITarefas[]>>;
}

export const Form: React.FC<PageProps> = ({ setTarefasState }) => {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("");

  const adicionarTarefa = (e: React.FormEvent) => {
    e.preventDefault();
    setTarefasState((prevState: any) => [
      ...prevState,
      {
        tarefa,
        tempo,
      },
    ]);
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
