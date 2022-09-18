import { Button } from "../Button/ui";
import { Relogio } from "./Relogio";

export const Cronometro = () => {
  return (
    <div className="cronometro">
      <p className="titulo">Escolha um card e inicie o cronometro</p>
      <div className="relogio.Wrapper">
        <Relogio />
      </div>
      <Button>Comecar</Button>
    </div>
  );
};
