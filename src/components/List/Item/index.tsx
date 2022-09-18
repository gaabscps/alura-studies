import "../style.scss";

export const Item = ({ tarefa, tempo }: { tarefa: string; tempo: string }) => {
  return (
    <li className="item">
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
};
