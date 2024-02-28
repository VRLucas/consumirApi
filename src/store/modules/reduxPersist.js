import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistReducers = persistReducer(
    {
      key: 'CONSUMIRAPI',
      storage,
      whitelist: ['auth'], // Indica que queremos salvar apenas essas chaves do Redux no Storage
    },
    reducers,
  );
  return persistReducers;
};
