import React, { useState } from "react";
import io from "socket.io-client";
import PanelRegistro from "./components/Join/PanelRegistro";

// import default styles
import "./styles.css";

// bootrap imports
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  // socket io
  const ENDPOINT = "localhost:5000";
  let socket = io(ENDPOINT);

  const [usuario, setUsuario] = useState("");
  const [room, setRoom] = useState({});

  const [logeado, guardarLogeado] = useState(false);

  const actualizarUser = usuario => {
    console.log("usuairo q viene", usuario);
    setUsuario(usuario);
    console.log("usuario", usuario);
  };
  return logeado ? null : <PanelRegistro actualizarUser={actualizarUser} />;
};

export default App;
