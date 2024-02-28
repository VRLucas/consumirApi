import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { isEmail, isInt, isFloat } from 'validator';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyled';

import * as fa from 'react-icons/fa';

import Loading from '../../components/Loading';
import { Title, Form, Label, ProfilePicture } from './styled';
import { toast } from 'react-toastify';
import * as actions from '../../store/modules/auth/action';
import history from '../../service/history';
import axios from '../../service/axios';

export default function Edit() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [foto, setFoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const foto = get(data, 'Fotos[0].url', '');

        setFoto(foto);

        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);

        if (status === 401) {
          errors.map((error) => toast.error(error));
          history.push('/');
        }
      }
    }
    getData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErros = false;
    if (nome.length < 3 || nome.length > 255) {
      formErros = true;
      toast.error('Nome tem que ter entre 3 e 255 caracteres');
    }
    if (sobrenome.length < 3 || sobrenome.length > 255) {
      formErros = true;
      toast.error('Sobrenome tem que ter entre 3 e 255 caracteres');
    }
    if (!isEmail(email)) {
      formErros = true;
      toast.error('Email inválido');
    }
    if (!isInt(String(idade))) {
      formErros = true;
      toast.error('A idade precisa ser um numero');
    }
    if (!isFloat(String(peso))) {
      formErros = true;
      toast.error('A peso precisa ser um numero');
    }
    if (!isFloat(String(altura))) {
      formErros = true;
      toast.error('A altura precisa ser um numero');
    }

    if (formErros) {
      return;
    }
    try {
      if (id) {
        setIsLoading(true);
        await axios.put(`/alunos/${id}`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        setIsLoading(false);
        toast.success('Aluno editado com sucesso.');
      } else {
        setIsLoading(true);
        await axios.post(`/alunos/`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        setIsLoading(false);
        toast.success('Aluno cadastrado com sucesso.');
        history.push('/aluno');
      }
    } catch (err) {
      setIsLoading(false);
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'response.data.errors', []);

      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('Erro desconhecido');
      }
      if (status == 401) dispatch(actions.loginFail());
    }
  };
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>{id ? 'Editando Aluno' : 'Novo Aluno'}</Title>
      {id && (
        <ProfilePicture>
          {foto ? (
            <img src={foto} alt={nome} />
          ) : (
            <fa.FaUserCircle size={114} color="#89f1f5" />
          )}
          <Link to={`/fotos/${id}`}>
            <fa.FaEdit size={24} color="#000"></fa.FaEdit>
          </Link>
        </ProfilePicture>
      )}
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="nome">
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Label>
        <Label htmlFor="sobrenome">
          <input
            type="text"
            placeholder="Sobrenome"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
        </Label>
        <Label htmlFor="email">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>
        <Label htmlFor="idade">
          <input
            type="idade"
            placeholder="Idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
        </Label>
        <Label htmlFor="peso">
          <input
            type="peso"
            placeholder="Peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </Label>
        <Label htmlFor="altura">
          <input
            type="altura"
            placeholder="Altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </Label>
        <button type="submit">Enviar</button>
        <br></br>
      </Form>
    </Container>
  );
}
