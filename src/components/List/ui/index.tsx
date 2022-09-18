import React, { Dispatch, SetStateAction } from "react";
import "../style.scss";
import { Item } from "../Item";
import { ITarefas } from "../../../Types/types";

interface ListScreenProps {
  tarefasState: ITarefas[];
  selecionaTarefa: (tarefaSelecionada: ITarefas) => void;
}

export const ListScreen: React.FC<ListScreenProps> = ({
  tarefasState,
  selecionaTarefa,
}) => {
  return (
    <aside className="listaTarefas">
      <div>
        <h2>Estudos do dia</h2>
        <ul>
          {tarefasState.map((item: any) => (
            <div>
              <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item} />
            </div>
          ))}
        </ul>
      </div>
    </aside>
  );
};
