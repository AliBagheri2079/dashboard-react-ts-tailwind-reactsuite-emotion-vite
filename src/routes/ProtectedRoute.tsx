import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useReadLocalStorage } from 'usehooks-ts';

type Props = {
  children: ReactElement;
};

const ProtectedRoute = ({ children }: Props) => {
  const isLoggedin = useReadLocalStorage('logged');

  if (!isLoggedin) return <Navigate to="/register" replace />;

  return children;
};

export default ProtectedRoute;
