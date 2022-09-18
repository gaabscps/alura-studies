import { Button } from "../Button/ui";
import { Relogio } from "./Relogio";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefas } from "../../Types/types";
import { useEffect, useState } from "react";
import "./style.scss";

interface Props {
  selecionado?: ITarefas | undefined;
  finalizarTarefa: () => void;
}
function playSound(url: string | undefined) {
  const audio = new Audio(url);
  audio.play();
}

export const Cronometro = ({ selecionado, finalizarTarefa }: Props) => {
  const [tempo, setTempo] = useState<number>();
  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(String(selecionado?.tempo)));
    }
  }, [selecionado]);

  const regressiva = (contador: number) => {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        regressiva(contador - 1);
      }
    }, 1000);
  };
  useEffect(() => {
    if (tempo === 0) {
      finalizarTarefa();
      playSound(
        "http://freesoundeffect.net/sites/default/files/sci-fi-alarmbeep-27-sound-effect-1254273.mp3"
      );
    }
  }, [tempo]);

  return (
    <div className="cronometro">
      <p className="titulo">Escolha um card e inicie o cronometro</p>
      <div className="relogioWrapper">
        <Relogio tempo={tempo} />
      </div>
      <Button onClick={() => regressiva(tempo ? tempo : 0)}>Comecar</Button>
    </div>
  );
};
