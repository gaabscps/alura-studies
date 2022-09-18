import React, { Dispatch, SetStateAction } from "react";
import "../style.scss";
import { Item } from "../Item";
import { ITarefas } from "../../../Types/types";

interface ListScreenProps {
  tarefasState: ITarefas[];
}

export const ListScreen: React.FC<ListScreenProps> = ({ tarefasState }) => {
  return (
    <aside className="listaTarefas">
      <div>
        <h2>Estudos do dia</h2>
        <ul>
          {tarefasState.map((item: any, index: any) => (
            <div>
              <Item key={index} {...item} />
            </div>
          ))}
        </ul>
      </div>
    </aside>
  );
};
