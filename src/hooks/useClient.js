import { useContext } from 'react';
import { ClientContext } from '../context/ClientContext';

export const useClient = () => {
  const context = useContext(ClientContext);
  if (context === undefined) {
    throw new Error('error en el contexto del cliente!');
  }
  return context;
};
