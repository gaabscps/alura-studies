import { ITarefas } from "../../../Types/types";
import "../style.scss";

interface Props extends ITarefas {
  selecionaTarefa: (tarefaSelecionada: ITarefas) => void;
}

export const Item = ({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa,
}: Props) => {
  return (
    <li
      className={"item" + `${selecionado ? "item--selecionado" : ""}`}
      onClick={() =>
        selecionaTarefa({ tarefa, tempo, selecionado, completado, id })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
};
