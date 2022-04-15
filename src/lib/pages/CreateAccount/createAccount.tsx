import { Button } from '@goshirts-react/lib';
import React from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const gender = [
  { key: 1, label: 'Masculino', value: 0 },
  { key: 2, label: 'Feminino', value: 1 }
];

const country = [
  { key: 1, label: 'Brasil', value: 'Brasil' },
  { key: 2, label: 'Chile', value: 'Chile' },
  { key: 3, label: 'Espanha', value: 'Espanha' },
  { key: 4, label: 'Estados Unidos', value: 'Estados Unidos' },
  { key: 5, label: 'Inglaterra', value: 'Inglaterra' }
];

const createAccount = () => {
  return (
    <>
      <h1>createAccount</h1>
      <Button type="button" id="teste" name="teste" onClick={() => alert('foi clicado')}>
        Teste
      </Button>
    </>
  );
};

export default createAccount;
