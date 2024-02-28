import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import isEmail from 'validator/lib/isEmail';

import { redirect } from 'react-router-dom';

import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyled';

import { Form, Label, Title } from './stlyed';

import Loading from '../../components/Loading';

import * as action from '../../store/modules/auth/action';

export default function Login() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.user.id);
  const nomeStade = useSelector((state) => state.auth.user.nome);
  const emailStade = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  React.useEffect(() => {
    if (!id) return;
    setNome(nomeStade);
    setEmail(emailStade);
  }, [emailStade, id, nomeStade]);

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome tem que ter entre 3 e 255 caracteres');
    }
    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email inválido');
    }
    if (!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('Senha tem que ter entre 6 e 50 caracteres');
    }
    if (formErrors) {
      return;
    }
    dispatch(action.registerRequest({ email, nome, id, password }));
  }
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>{id ? 'Editar dados' : 'Cadasto'}</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="nome">
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
          />
        </Label>
        <Label htmlFor="email">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </Label>
        <Label htmlFor="password">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Label>
        <button type="submit">Enviar</button>
        <br></br>
      </Form>
    </Container>
  );
}
