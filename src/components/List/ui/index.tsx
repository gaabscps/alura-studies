import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import "../style.scss";

interface ListScreenProps {
  tarefas: object[];
}

export const ListScreen = (props: ListScreenProps) => {
  return (
    <aside className="listaTarefas">
      <div>
        <h2>Estudos do dia</h2>
        <ul>
          {props.tarefas.map((item: any, index: any) => (
            <li className="item" key={index}>
              <h3>{item.tarefa}</h3>
              <span>{item.tempo}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
