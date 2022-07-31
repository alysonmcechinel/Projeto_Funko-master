import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Axios from "axios";

import imgFunkoBlue from "../images/logo-funko-blue.png";

import "../styles/cadastroFunko.css";

function CadastroFunko() {
  const [newDescricao, setNewDescricao] = useState("");
  const [newValor, setNewValor] = useState("");
  let { user } = useParams();

  const api = "http://localhost:8000/funko";

  function handleSendData(event: FormEvent) {
    event.preventDefault();

    if (newDescricao.trim() === "" || newValor.trim() === "") {
      window.alert("Campo vazio");
    }

    const funko = {
      descricao: newDescricao,
      valor: newValor,
    };

    Axios.post(api + "/" + user, funko)
      .then((resp) => {
        if (resp.data) {
          window.alert("Funko inserido com sucesso!");
        }
      })
      .catch((err) => {
        window.alert(err);
      });

    setNewDescricao("");
    setNewValor("");
  }
  return (
    <>
      <div className="div-container">
        <div className="div-form">
          <img src={imgFunkoBlue} alt=" Imagem logo funko azul" />

          <h1>CADASTRAR FUNKO</h1>
          <form onSubmit={handleSendData}>
            <input
              className="input"
              type="text"
              placeholder="Informe a descrição"
              onChange={(event) => setNewDescricao(event.target.value)}
              value={newDescricao}
            />

            <input
              className="input"
              type="text"
              placeholder="Informe o valor"
              onChange={(event) => setNewValor(event.target.value)}
              value={newValor}
            />

            <label>O funko esta a venda:</label>

            {/*<div className="input-radio">
              <input type="radio" id="sim" name="sale" value="sim" />
              <label>SIM</label>
              <br />

              <input
                className="input-radio-nao"
                type="radio"
                id="nao"
                name="sale"
                value="nao"
              />
              <label>NÃO</label>
  </div>*/}

            <button type="submit">Cadastrar</button>
          </form>

          <div className="div-registrar">
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

export default CadastroFunko;
