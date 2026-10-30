import { useState, useEffect } from "react";
import { FRUTAS, MESES } from "./data/frutas";
import Galeria from "./components/Galeria";
import Detalle from "./components/Detalle";
import "./App.css";

function temaInicial() {
  const guardado = localStorage.getItem("tema");
  if (guardado) return guardado;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [activaId, setActivaId] = useState(FRUTAS[0].id);
  const [mes, setMes] = useState(new Date().getMonth());
  const [tema, setTema] = useState(temaInicial);
  const fruta = FRUTAS.find((f) => f.id === activaId);
  const enTemporada = FRUTAS.filter((f) => f.meses.includes(mes));

  useEffect(() => {
    document.documentElement.dataset.tema = tema;
    localStorage.setItem("tema", tema);
  }, [tema]);

  return (
    <div className="app" style={{ "--c": fruta.color, "--o": fruta.oscuro }}>
      <header className="cabecera">
        <button
          className="btn-tema"
          onClick={() => setTema(tema === "dark" ? "light" : "dark")}
        >
          {tema === "dark" ? "Modo claro" : "Modo oscuro"}
        </button>
        <h1>Frutas Caribeñas</h1>
        <p>
          Cosechadas por agricultores de Moca y vendidas sin intermediarios.
          Conoce tres frutas, sus beneficios y cuando comerlas.
        </p>
      </header>

      <Galeria frutas={FRUTAS} activa={activaId} onElegir={setActivaId} mes={mes} />

      <section className="filtro">
        <h2>¿Que fruta hay en...?</h2>
        <div className="meses" role="group" aria-label="Elegir mes">
          {MESES.map((m, i) => (
            <button key={m} className={i === mes ? "sel" : ""} onClick={() => setMes(i)}>
              {m}
            </button>
          ))}
        </div>
        <p className="resultado" aria-live="polite">
          {enTemporada.length
            ? `En ${MESES[mes]} hay: ${enTemporada.map((f) => f.nombre).join(", ")}.`
            : `En ${MESES[mes]} no hay cosecha principal. Elige otro mes.`}
        </p>
      </section>

      <Detalle fruta={fruta} />

      <footer className="pie">Moca, Republica Dominicana - Del campo a tu mesa</footer>
    </div>
  );
}