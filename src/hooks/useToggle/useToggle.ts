import { useCallback, useState } from 'react';

export type IUseToggle = { open: boolean; toggle: () => void };
export const useToggle = (initialState = false): IUseToggle => {
  const [open, toggle] = useState(initialState);
  return { open, toggle: useCallback(() => toggle((prev) => !prev), []) };
};
