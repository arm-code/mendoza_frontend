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
    setTroca(newTroca);
  };

  const delete1Product = (idForDelete) => {
    // substract 1 product from truck if is already
    const newTruck = troca.map((p) =>
      p.id === idForDelete && p.quantity > 1
        ? { ...p, quantity: p.quantity - 1 }
        : p
    );

    setTroca(newTruck);
  };

  const add1Product = (idForAdd) => {
    // substract 1 product from truck if is already
    const newTruck = troca.map((p) =>
      p.id === idForAdd && p.quantity > 0
        ? { ...p, quantity: p.quantity + 1 }
        : p
    );

    setTroca(newTruck);
  };

  return (
    <TruckContext.Provider
      value={{
        troca,
        addToTroca,
        vaciarTroca,
        deleteItem,
        delete1Product,
        add1Product,
        Toaster,
      }}
    >
      {children}
    </TruckContext.Provider>
  );
};
