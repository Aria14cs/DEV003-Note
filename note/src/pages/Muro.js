import { note, leerNote } from "./funct-fire.js";
import { useEffect, useState } from "react";

export default function Muro() {
  
   { /*Variables de estado  */}
  const [nota, setNota] = useState("");
  const [notas, setNotas] = useState([]);
  
   { /* funcion es para renderizar las notas creadas*/}
  useEffect(() => {
    leerNote()
      .then((notas) => {
        setNotas(notas);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [notas]);

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
        <button className="buttonGuardar" onClick={() => note(nota)}></button> 
      </div>
      
      <div className="cardNotas"> 
        {notas.map((not) => (
          <div key={not.id}>
            <p className="contNote">{not.contenido} </p>
          </div>
        ))}
        </div>
      </div>
    
  );
}
