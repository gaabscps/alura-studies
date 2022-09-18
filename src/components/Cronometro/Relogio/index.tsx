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
    <div>
      <span className="relogioNumero">{minutoDezena}</span>
      <span className="relogioNumero">{minutoUnidade}</span>
      <span className="relogioDivisao">:</span>
      <span className="relogioNumero">{segundoDezena}</span>
      <span className="relogioNumero">{segundoUnidade}</span>
    </div>
  );
};
