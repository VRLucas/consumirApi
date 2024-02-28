import { call, put, all, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import { toast } from 'react-toastify';

import * as action from './action';
import * as types from '../type';

import axios from '../../../service/axios';
import history from '../../../service/history';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(action.loginSuccess(response.data));
    toast.success('Login efetuado com sucesso.');
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
  } catch (e) {
    toast.error('Usuario ou senha Invalidas.');
    yield put(action.loginFail());
  }
}
function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function* registerRequest({ payload }) {
  const { id, nome, email, password } = payload;
  try {
    if (id) {
      const response = yield call(axios.put, '/users', {
        nome,
        email,
        password: password || undefined,
      });
      yield put(action.registerUpdateSuccess({ nome, email }));
      toast.success('Usuario editado com sucesso.');
    } else {
      const response = yield call(axios.post, '/users/', {
        nome,
        email,
        password,
      });
      yield put(action.registerCreateSuccess(response.data));
      toast.success('Cadastro efetuado com sucesso.');
      history.push('/login');
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);
    if (status === 401) {
      toast.error('Faz login novamente');
      yield put(action.loginFail());
      return history.push('/login');
    } else {
      toast.error('Error desconhecido.');
    }
    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Error desconhecido.');
    }

    yield put(action.registerFail(errors));
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
