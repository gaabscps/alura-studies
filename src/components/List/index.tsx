import React from "react";
import { ListScreen } from "./ui";

export const List = () => {
  const tarefas = [
    {
      tarefa: "react",
      tempo: "02:00:00",
    },
    {
      tarefa: "javascript",
      tempo: "01:00:00",
    },
    {
      tarefa: "typescript",
      tempo: "03:00:00",
    },
  ];
  return <ListScreen tarefas={tarefas} />;
};
