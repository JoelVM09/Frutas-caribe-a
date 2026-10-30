import Calendario from "./Calendario";

const WHATSAPP = "+1809-432-1234";

export default function Detalle({ fruta }) {
  const msg = encodeURIComponent(`Hola, quiero pedir ${fruta.nombre} de Moca.`);
  return (
    <section className="detalle" key={fruta.id}>
      <header>
        <h2>{fruta.nombre}</h2>
        <p className="cientifico">{fruta.cientifico}</p>
        <p className="resumen">{fruta.resumen}</p>
      </header>

      <div className="bloque">
        <h3>Beneficios</h3>
        <ul className="beneficios">
          {fruta.beneficios.map((b) => (
            <li key={b.titulo}>
              <strong>{b.titulo}</strong>
              <span>{b.texto}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bloque dos">
        <div>
          <h3>En la cultura</h3>
          <p>{fruta.cultura}</p>
        </div>
        <div>
          <h3>Un dato de ciencia</h3>
          <p>{fruta.ciencia}</p>
        </div>
      </div>

      <div className="bloque">
        <h3>Temporada</h3>
        <Calendario meses={fruta.meses} color={fruta.color} />
      </div>

      <a
        className="pedir"
        href={`https://wa.me/${WHATSAPP}?text=${msg}`}
        target="_blank"
        rel="noreferrer"
      >
        Pedir {fruta.nombre} directo al agricultor
      </a>
    </section>
  );
}