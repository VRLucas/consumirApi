import * as types from '../type';
export function cliacaBotaoSuccess() {
  return {
    type: types.BOTAO_CLICADO_SUCCESS,
  };
}
export function cliacaBotaoFail() {
  return {
    type: types.BOTAO_CLICADO_FAIL,
  };
}
export function cliacaBotaoRequest() {
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  };
}
