import { note, leerNote } from "./funct-fire.js";
import { useState } from "react";

export default function Muro() {
  const [nota, setNota] = useState("");

  return (
    <div>
      <h1 className="titleMuro">LIBRETA DE NOTAS</h1>
      <div className="subContenedorMuro">
        <input
          className="note"
          onChange={(e) => setNota(e.target.value)}
          value={nota}
          placeholder="Ingresar notas"
        ></input>
      </div>
      <button className="guardar" onClick={() => note(nota)}>
        Guardar
      </button>

      <div className="subContenedor">
        <p
          className="notaLeer"
          onChange={(e) => leerNote(e.target.value)}
          value={nota}
        ></p>
      </div>
    </div>
  );
}
