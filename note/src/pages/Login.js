//import react de manera global
//import * as React from "react";

import React from "react";
import { useRouter } from "next/router";
import { googleAuth } from "./funct-fire.js";

const Login = () => {
  const router = useRouter();
  function signIn() {
    console.log("ggggg");
    googleAuth(router);
    // router.push('/Muro');routers declara en la funcion google auth
  }

  return (
    <div className="contenedor">
      <div className="cajaLogin1">
        <div className="cajaLogin2">
          <img className="img" alt="fondo" src={"img/cel-img.png"} />
        </div>
      </div>
      <h1 className="title">LIBRETA DE NOTAS</h1>
      <button className="buttonGoogle" onClick={signIn}>
        Iniciar sesión con google
      </button>
    </div>
  );
};
export default Login;
