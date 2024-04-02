import { useContext } from 'react';
import { TruckContext } from '../context/TruckContext';

export const useTruck = () => {
  const context = useContext(TruckContext);
  if (context === undefined) {
    throw new Error('error!!!');
  }

  return context;
};
