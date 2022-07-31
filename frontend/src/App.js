import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/home";
import Login from "./components/login";
import Registrar from "./components/registrar";
import CadastroFunko from "./components/cadastroFunko";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/cadastroFunko/:user" element={<CadastroFunko />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
