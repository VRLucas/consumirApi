import React from 'react';
import * as fa from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import history from '../../service/history';
import * as action from '../../store/modules/auth/action';
import { Nav } from './styled';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(action.loginFail());
    history.push('/');
  };
  return (
    <Nav>
      <Link to="/">
        <fa.FaHome size={22} />
      </Link>
      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/logout">
          <fa.FaPowerOff size={20} />
        </Link>
      ) : (
        <Link to="/login">
          <fa.FaSignInAlt size={20} />
        </Link>
      )}

      <Link to="/user">
        <fa.FaUserAlt size={20} />
      </Link>
      <Link to="/aluno">{isLoggedIn && <fa.FaUserGraduate size={20} />}</Link>
    </Nav>
  );
}
