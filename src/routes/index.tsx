import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '@/layouts';
import Products from '@/pages/Products';
import Crypto from '@/pages/Crypto';
import Register from '@/pages/Register';
import NotFound from '@/pages/NotFound';
import ProtectedRoute from './ProtectedRoute';

/*
? I know routes folder created for routing in server but
? I think this way is possible.
*/
const ManageRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Products />} />
          <Route path="crypto" element={<Crypto />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ManageRouting;
