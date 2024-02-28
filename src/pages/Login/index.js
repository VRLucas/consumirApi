import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { get } from 'lodash';

import isEmail from 'validator/lib/isEmail';

import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyled';

import { Form, Label, Title } from './stlyed';

import * as actions from '../../store/modules/auth/action';

import Loading from '../../components/Loading';

import axios from '../../service/axios';

import history from '../../service/history';
export default function Login() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.auth.isLoading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();

    let formErros = false;

    if (!isEmail(email)) {
      formErros = true;
      toast.error('email inválido');
    }
    if (password.length < 6 || password.length > 50) {
      formErros = true;
      toast.error('Senha Inválida');
    }
    dispatch(actions.loginRequest({ email, password }));
    history.push('/aluno');
  }
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </Label>
        <br />
        <Label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </Label>
        <button type="submit">Enviar</button>
        <br></br>
      </Form>
    </Container>
  );
}
