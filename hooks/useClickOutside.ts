import {useEffect} from 'react';

/**
 * @param {string} elementId
 * @param {boolean} canListen
 * @param {Function} onClickOutside
 * @return {void}
 */
function useClickOutside(
    elementId: string,
    canListen: boolean,
    onClickOutside: () => void,
): void {
  const handler = (event: MouseEvent) => {
    const element = document.querySelector(`#${elementId}`);
    if (element && !event.composedPath().includes(element)) {
      onClickOutside();
    }
  };

  useEffect(() => {
    if (canListen) {
      window.addEventListener('click', handler);
    } else {
      window.removeEventListener('click', handler);
    }

    return () => {
      window.removeEventListener('click', handler);
    };
  }, [canListen]);
}

export default useClickOutside;
