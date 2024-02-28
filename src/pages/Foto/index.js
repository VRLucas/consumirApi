import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get } from 'lodash';

import Loading from '../../components/Loading';
import { Container } from '../../styles/GlobalStyled';

import { Title, Form } from './styled';
import { toast } from 'react-toastify';

import * as actions from '../../store/modules/auth/action';
import axios from '../../service/axios';
import history from '../../service/history';

export default function Foto() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [foto, setFoto] = useState('');

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        setFoto(data, 'Fotos.[0].url', '');
        setIsLoading(false);
      } catch {
        toast.error('Error em carregar a image');
        setIsLoading(false);
        history.push('/');
      }
    }
    getData();
  }, [id]);
  async function handleChange(e) {
    const file = e.target.files[0];
    const fotoUrl = URL.createObjectURL(file);
    setFoto(fotoUrl);

    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('foto', foto);

    try {
      setIsLoading(true);

      await axios.post('/fotos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Foto enviada com sucesso');
    } catch (err) {
      setIsLoading(false);
      const { status } = get(err, 'response', '');
      toast.error('Erro ao enviar a foto');

      if (status == 401) dispatch(actions.loginFail());
    }
  }
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Fotos</Title>
      <Form>
        <label htmlFor="foto">
          {foto ? <img src={foto} alt="Imagem" /> : 'Selecione uma foto'}
          <input type="file" id="foto" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}
