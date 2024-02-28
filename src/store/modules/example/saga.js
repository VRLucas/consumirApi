import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as action from './action';
import * as types from './../type';

const requisicao = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

function* exampleRequest() {
  try {
    toast.success('O dados foram enviado com sucesso');
    yield call(requisicao);
    yield put(action.cliacaBotaoSuccess());
  } catch (error) {
    toast.error('Deu Erro');
    yield put(action.cliacaBotaoFail());
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
