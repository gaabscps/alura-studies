import React from "react";
import { Button } from "../../Button/ui";
import "../style.scss";

export const Form = () => {
  return (
    <div>
      <form className="novaTarefa">
        <div className="inputContainer">
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que voce quer estudar"
            required
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="tempo">Tempo</label>
          <input type="time" name="tempo" id="tempo" placeholder="" required />
        </div>
        <Button />
      </form>
    </div>
  );
};
