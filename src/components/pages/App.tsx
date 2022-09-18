import React, { useState } from "react";
import { ITarefas } from "../../Types/types";
import { Cronometro } from "../Cronometro";
import { Form } from "../Form";
import { ListScreen } from "../List/ui";
import "./style.scss";

function App() {
  const [tarefasState, setTarefasState] = useState<ITarefas[] | []>([]);

  return (
    <div className="AppStyle">
      <Form setTarefasState={setTarefasState} />
      <ListScreen tarefasState={tarefasState} />
      <Cronometro />
    </div>
  );
}

export default App;
