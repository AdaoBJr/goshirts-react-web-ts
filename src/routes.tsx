import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CreateAccount from './lib/pages/CreateAccount';
import SignIn from './lib/pages/SignIn';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/login" element={<SignIn />} />
    </Routes>
  );
};

export default Router;
