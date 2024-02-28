import * as types from '../type';
const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      const newStade = { ...state };
      newStade.botaoClicado = !newStade.botaoClicado;
      return newStade;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      return state;
    }
    case types.BOTAO_CLICADO_FAIL: {
      return state;
    }

    default: {
      return state;
    }
  }
}
