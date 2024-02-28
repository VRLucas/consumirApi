import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UseSelector, useSelector } from 'react-redux';

export default function PrivateRoutes({
  componet: Componet,
  isClosed,
  ...rest
}) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (isClosed && !isLoggedIn) {
    return <Navigate to={{ pathname: '/login' }} />;
  }
  return <Outlet {...rest} componet={Componet} />;
}
PrivateRoutes.defaultProps = {
  isClosed: false,
};
PrivateRoutes.propTypes = {
  componet: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isClosed: PropTypes.bool,
};
