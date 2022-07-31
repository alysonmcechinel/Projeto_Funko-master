import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

import imgFunkoBlue from "../images/logo-funko-blue.png";

import "../styles/login.css";

function Login() {
  const [User, setUser] = useState("");
  const [Senha, setSenha] = useState("");
  const navigate = useNavigate();

  const api = "http://localhost:8000/";

  function handleSendData(event: FormEvent) {
    event.preventDefault();

    if (User.trim() === "" || Senha.trim() === "") {
      window.alert("Campo vazio");
    }

    const user = {
      user: User,
      senha: Senha,
    };

    Axios.get(api + User, user)
      .then((resp) => {
        const data = resp.data;

        if (data.user === User && data.senha === Senha) {
          navigate(`/cadastroFunko/${data.user}`);
        } else {
          window.alert("Usuario ou senha incorreto");
        }
      })
      .catch((err) => {
        window.alert(err);
      });

    setUser("");
    setSenha("");
  }
  return (
    <>
      <div className="div-container">
        <div className="div-form">
          <img src={imgFunkoBlue} alt=" Imagem logo funko azul" />

          <h1>LOGIN</h1>
          <form onSubmit={handleSendData}>
            <input
              className="input"
              type="text"
              placeholder="Digite o seu usuario"
              onChange={(event) => setUser(event.target.value)}
              value={User}
            />

            <input
              className="input"
              type="password"
              placeholder="Digite a sua senha"
              onChange={(event) => setSenha(event.target.value)}
              value={Senha}
            />

            <button type="submit">Logar</button>
          </form>

          <div className="div-registrar">
            <span>
              <Link className="registrar" to="/registrar">
                Registre-se
              </Link>
            </span>
            <span>
              <Link className="voltar" to="/">
                Voltar
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
