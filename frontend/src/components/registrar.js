import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import imgFunkoBlue from "../images/logo-funko-blue.png";

function Registrar() {
  const [newNome, setNewNome] = useState("");
  const [newUser, setNewUser] = useState("");
  const [newSenha, setNewSenha] = useState("");

  const Api = "http://localhost:8000/user";

  function handleSendData(event: FormEvent) {
    event.preventDefault();

    if (
      newNome.trim() === "" ||
      newUser.trim() === "" ||
      newSenha.trim() === ""
    ) {
      window.alert("Campo vazio");
    }

    const user = {
      name: newNome,
      login: newUser,
      senha: newSenha,
    };

    Axios.post(Api, user)
      .then((resp) => {
        if (resp.data) {
          window.alert("Usuario inserido com sucesso!");
        }
      })
      .catch((err) => {
        window.alert(err);
      });

    setNewNome("");
    setNewUser("");
    setNewSenha("");
  }

  return (
    <>
      <div className="div-container">
        <div className="div-form">
          <img src={imgFunkoBlue} alt=" Imagem logo funko azul" />
          <h1>CADASTRA-SE</h1>
          <form onSubmit={handleSendData}>
            <input
              className="input"
              type="text"
              placeholder="Digite o seu nome"
              onChange={(event) => setNewNome(event.target.value)}
              value={newNome}
            />

            <input
              className="input"
              type="text"
              placeholder="Digite o seu usuario"
              onChange={(event) => setNewUser(event.target.value)}
              value={newUser}
            />

            <input
              className="input"
              type="password"
              placeholder="Digite a sua senha"
              onChange={(event) => setNewSenha(event.target.value)}
              value={newSenha}
            />

            <button type="submit">Cadastra-se</button>
          </form>

          <div className="div-registrar">
            <span>
              <Link className="voltar" to="/login">
                Voltar
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registrar;
