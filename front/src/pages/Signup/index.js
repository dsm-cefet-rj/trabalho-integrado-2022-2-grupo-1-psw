import React, { useState } from "react";
import Input from "../../components/Input";
import * as C from "./styles";
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConf, setSenhaConf] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const handleSignup = async () => {
    if (!email | !senhaConf | !senha | !user) {
      setError("Preencha todos os campos");
      return;
    } else if (senha !== senhaConf) {
        setError("As senhas não são iguais");
        return;
    }
      else if (!isEmail(email)) {
        setError ("Formato de email inválido");
        return;
    }

    const res = await signup(user, email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/dashboard");
  };

  return (
    <C.Container>
      <C.Label>Cadastro</C.Label>
      <C.Content>
        <Input
          type="text"
          placeholder="Digite seu Usuario"
          value={user}
          onChange={(e) => [setUser(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Confirme sua Senha"
          value={senhaConf}
          onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button variant="primary" className='m-2' onClick={handleSignup}>
        Inscrever-se
        </Button>
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/Dashboard">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
