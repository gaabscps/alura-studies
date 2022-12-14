import React, { useState } from "react";
import { ITarefas } from "../../Types/types";
import { Cronometro } from "../Cronometro";
import { Form } from "../Form";
import { ListScreen } from "../List/ui";
import "./style.scss";

function App() {
  const [tarefasState, setTarefasState] = useState<ITarefas[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefas>();

  const finalizarTarefa = () => {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefasState((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            };
          }
          return tarefa;
        })
      );
    }
  };
  const selecionaTarefa = (tarefaSelecionada: ITarefas) => {
    setSelecionado(tarefaSelecionada);
    setTarefasState((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  };
  return (
    <div className="AppStyle">
      <Form setTarefasState={setTarefasState} />
      <ListScreen
        tarefasState={tarefasState}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;
