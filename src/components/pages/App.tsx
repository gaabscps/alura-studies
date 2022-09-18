import React, { useState } from "react";
import { Cronometro } from "../Cronometro";
import { Form } from "../Form";
import { ListScreen } from "../List/ui";
import "./style.scss";

function App() {
  const [tarefasState, setTarefasState] = useState([
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
  ]);

  return (
    <div className="AppStyle">
      <Form setTarefasState={setTarefasState} />
      <ListScreen tarefasState={tarefasState} />
      <Cronometro />
    </div>
  );
}

export default App;
