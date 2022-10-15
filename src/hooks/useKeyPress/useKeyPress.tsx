import { useCallback, useEffect, useState } from 'react';

type ICallbacks = {
  upCallback: (e: KeyboardEvent) => void;
  downCallback: (e: KeyboardEvent) => void;
};

export const useKeyPress = (targetKey: string, cb?: Partial<ICallbacks>) => {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === targetKey) {
        cb?.downCallback?.(e);
        setKeyPressed(() => true);
      }
    },
    [targetKey, cb]
  );

  const upHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === targetKey) {
        cb?.upCallback?.(e);
        setKeyPressed(() => false);
      }
    },
    [targetKey, cb]
  );

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [upHandler, downHandler]);

  return keyPressed;
};
