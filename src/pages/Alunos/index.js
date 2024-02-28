import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from 'react-icons/fa';

import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyled';

import { Title, Paragrafo, Picture, CadAluno } from './styled';

import Loading from '../../components/Loading';

import axios from '../../service/axios';
import history from '../../service/history';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false);
    }
    getData();
  }, []);
  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  };
  const handleDelete = async (e, id, index) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.delete(`/alunos/${id}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
      toast.success('Aluno exluido com sucesso.');
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);

      if (status == 401) {
        toast.error('Voce precisa fazer login');
      } else {
        toast.error('Erro ao excluir aluno');
      }
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Alunos</Title>

      <CadAluno to="/aluno/edit">Novo Aluno</CadAluno>
      <Paragrafo>
        {alunos.map((alunos, index) => (
          <div key={String(alunos.id)}>
            <Picture>
              {get(alunos, 'Fotos[0].url', false) ? (
                <img src={alunos.Fotos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} color="#89f1f5" />
              )}
            </Picture>
            <span>{alunos.nome}</span>
            <span>{alunos.email}</span>
            <Link to={`/aluno/${alunos.id}/edit`}>
              <FaEdit size={16} />
            </Link>
            <Link onClick={handleDeleteAsk} to={`/aluno/${alunos.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>
            <FaExclamation
              onClick={(e) => handleDelete(e, alunos.id, index)}
              size={16}
              display="none"
              cursor="pointer"
            />
          </div>
        ))}
      </Paragrafo>
    </Container>
  );
}
