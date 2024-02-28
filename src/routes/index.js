import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MyRoute from './MyRoute';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import Login from '../pages/Login';
import CadUser from '../pages/CadUser';
import Aluno from '../pages/Alunos';
import Edit from '../pages/EditAlunos';
import Foto from '../pages/Foto';

export default function Rotas() {
  return (
    <Routes>
      <Route exact path="/" element={<MyRoute componet={Home} isClosed />}>
        <Route exact path="/" element={<Home />} />
        <Route path="/aluno" element={<Aluno />} />
        <Route path="aluno/:id/edit" element={<Edit />} />
        <Route path="aluno/edit" element={<Edit />} />
        <Route path="fotos/:id" element={<Foto />} />
      </Route>
      <Route path="/user" element={<CadUser />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
