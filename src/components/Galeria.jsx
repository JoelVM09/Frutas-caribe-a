export default function Galeria({ frutas, activa, onElegir, mes }) {
  return (
    <div className="galeria" role="tablist" aria-label="Frutas disponibles">
      {frutas.map((f) => {
        const abierta = f.id === activa;
        const enTemporada = f.meses.includes(mes);
        return (
          <button
            key={f.id}
            role="tab"
            aria-selected={abierta}
            className={`panel ${abierta ? "abierto" : ""}`}
            style={{ "--c": f.color, "--o": f.oscuro }}
            onClick={() => onElegir(f.id)}
          >
            <img
              src={f.imagen}
              alt={abierta ? `Fotografia de ${f.nombre}` : ""}
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <span className="panel-nombre">{f.nombre}</span>
            {enTemporada && <span className="sello">En temporada</span>}
          </button>
        );
      })}
    </div>
  );
}