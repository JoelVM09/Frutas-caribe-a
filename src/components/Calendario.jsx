import { MESES } from "../data/frutas";

export default function Calendario({ meses, color }) {
  return (
    <div className="calendario" aria-label="Meses de temporada">
      {MESES.map((m, i) => (
        <span
          key={m}
          className={meses.includes(i) ? "mes activo" : "mes"}
          style={meses.includes(i) ? { background: color } : undefined}
        >
          {m}
        </span>
      ))}
    </div>
  );
}