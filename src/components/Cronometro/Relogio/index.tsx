import "./style.scss";

interface Props {
  tempo?: number;
}

export const Relogio = ({ tempo = 0 }: Props) => {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;

  const [minutoDezena, minutoUnidade] = String(minutos)
    .padStart(2, "0")
    .split("");
  const [segundoDezena, segundoUnidade] = String(segundos)
    .padStart(2, "0")
    .split("");

  return (
    <div className="container">
      <div className="relogioNumero">
        <span>{minutoDezena}</span>
      </div>
      <div className="relogioNumero">
        <span>{minutoUnidade}</span>
      </div>
      <div className="relogioDivisao">
        <span>:</span>
      </div>
      <div className="relogioNumero">
        <span>{segundoDezena}</span>
      </div>
      <div className="relogioNumero">
        <span>{segundoUnidade}</span>
      </div>
    </div>
  );
};
