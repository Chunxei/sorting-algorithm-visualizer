import {useEffect, useState} from 'react';

interface IScroll {
  scrollX: number
  scrollY: number
}

/**
 * @return {IScroll}
 */
function useViewportScroll(): IScroll {
  const [scroll, setScroll] = useState<IScroll>({scrollX: 0, scrollY: 0});

  const handler = () => {
    setScroll({
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return scroll;
}

export default useViewportScroll;
