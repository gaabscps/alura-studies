import React from "react";
import { Button } from "../../Button/ui";
import "../style.scss";

interface FormScreenProps {
  tarefa: string;
  tempo: string;
  setTarefa: React.Dispatch<React.SetStateAction<string>>;
  setTempo: React.Dispatch<React.SetStateAction<string>>;
  adicionarTarefa: (e: React.FormEvent) => void;
}

export const FormScreen: React.FC<FormScreenProps> = ({
  tarefa,
  setTarefa,
  tempo,
  setTempo,
  adicionarTarefa,
}) => {
  return (
    <div>
      <form className="novaTarefa" onSubmit={adicionarTarefa}>
        <div className="inputContainer">
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
            placeholder="O que voce quer estudar"
            required
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            name="tempo"
            id="tempo"
            onChange={(e) => setTempo(e.target.value)}
            value={tempo}
            required
          />
        </div>
        <Button type="submit">Adicionar</Button>
      </form>
    </div>
  );
};
