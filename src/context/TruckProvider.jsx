import { TruckContext } from './TruckContext';
import { Toaster, toast } from 'react-hot-toast';
import { useState } from 'react';

export const TruckProvider = ({ children }) => {
  const [troca, setTroca] = useState([]);

  const addToTroca = (p) => {
    const productInCartIndex = troca.findIndex((item) => item.id === p.id);
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(troca);
      newCart[productInCartIndex].quantity += 1;
      toast.success('Subido a la troca!');
      return setTroca(newCart);
    }

    setTroca((prevState) => [
      ...prevState,
      {
        ...p,
        quantity: 1,
      },
    ]);

    toast.success('Subido a la troca!');
  };

  const vaciarTroca = () => {
    setTroca([]);
  };

  const deleteItem = (idForDelete) => {
    const newTroca = troca.filter((p) => p.id !== idForDelete);
    console.log('se ha presionado quitar', idForDelete);
    setTroca(newTroca);
  };

  return (
    <TruckContext.Provider
      value={{
        troca,
        addToTroca,
        vaciarTroca,
        deleteItem,
        Toaster,
      }}
    >
      {children}
    </TruckContext.Provider>
  );
};
