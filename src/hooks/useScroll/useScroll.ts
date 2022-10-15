import { useCallback } from 'react';

export const useScroll = () => {
  const scrollTop = useCallback((options?: ScrollToOptions) => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth', ...options });
  }, []);

  const scrollBottom = useCallback((options?: ScrollToOptions) => {
    const { scrollHeight } = document.scrollingElement || document.body;
    window.scrollTo({ left: 0, top: scrollHeight, behavior: 'smooth', ...options });
  }, []);

  const scrollToElement = useCallback(
    (element: EventTarget | HTMLElement, options?: ScrollIntoViewOptions) => {
      (element as HTMLElement)?.scrollIntoView?.({ behavior: 'smooth', ...options });
    },
    []
  );

  return { scrollBottom, scrollTop, scrollToElement };
};
