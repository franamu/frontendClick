import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";

// css imports
import "./PanelRegistro.styles.css";

const PanelRegistro = ({ actualizarUser }) => {
  const [usuario, setUsuario] = useState({});

  const responseGoogle = res => {
    const { profileObj } = res;
    let user = {
      nombre: profileObj.name,
      email: profileObj.email,
      foto: profileObj.imageUrl
    };
    console.log("user", user);
    setUsuario(user);
    localStorage.setItem("usuario", JSON.stringify(usuario));
    actualizarUser("hola");
  };

  const { email } = usuario;

  /*if (email !== "") {
    return <Redirect to={"/sala"} />;
  }*/
  return (
    <div className="miRoot">
      <div className="aligner-panel">
        <p className="title">Breaking Mouse</p>
        <div className="panel">
          <GoogleLogin
            clientId="338003117611-gcbrp1upjun1hbtdclsl2rv51o909f45.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </div>
  );
};

export default PanelRegistro;
