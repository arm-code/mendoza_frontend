import { ClientContext } from './ClientContext';
import { Children, useState } from 'react';

export const ClientProvider = ({ children }) => {
  const [client, setClient] = useState([]);
  return (
    <ClientContext.Provider
      value={{
        client,
        setClient
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
