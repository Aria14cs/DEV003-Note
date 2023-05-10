import { note, leerNote, eliminarNote, getNote } from "./funct-fire.js";
import { useEffect, useState } from "react";

export default function Muro() {
  // Definir estados iniciales
  const [nota, setNota] = useState("");
  const [notas, setNotas] = useState([]);

  // Función para cargar las notas desde la base de datos
  const cargarNotas = () => {
    leerNote()
      .then((notas) => {
        setNotas(notas);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Cargar las notas al cargar el componente
  useEffect(() => {
    cargarNotas();
  }, []);

  // Función para cargar una nota específica
  const cargarNota = (id) => {
    getNote(id)
      .then((nota) => {
        setNota(nota.contenido);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Función para guardar una nota en la base de datos
  const guardarNota = () => {
    note(nota)
      .then(() => {
        cargarNotas();
        setNota("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Función para eliminar una nota de la base de datos
  const eliminarNota = (id) => {
    eliminarNote(id)
      .then(() => {
        cargarNotas();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Renderizar el componente
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
        <button className="buttonGuardar" onClick={() => guardarNota()}>
          Guardar
        </button>
      </div>

      <div className="cardNotas">
        {notas.map((nota) => (
          <div key={nota.id}>
            <p
              className="contNote"
              onClick={() => cargarNota(nota.id)}
            >
              {nota.contenido}
            </p>
            <button
              className="buttonEliminar"
              onClick={() => eliminarNota(nota.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
