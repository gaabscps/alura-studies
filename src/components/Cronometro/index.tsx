import { Button } from "../Button/ui";
import { Relogio } from "./Relogio";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefas } from "../../Types/types";
import { useEffect, useState } from "react";

interface Props {
  selecionado?: ITarefas | undefined;
}

export const Cronometro = ({ selecionado }: Props) => {
  const [tempo, setTempo] = useState<number>();
  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(String(selecionado?.tempo)));
    }
  }, [selecionado]);

  return (
    <div className="cronometro">
      <p className="titulo">Escolha um card e inicie o cronometro</p>
      <div className="relogio.Wrapper">
        <Relogio tempo={tempo} />
      </div>
      <Button>Comecar</Button>
    </div>
  );
};
