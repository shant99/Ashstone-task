import { useCallback, useRef } from "react";

function useDebounceCallback<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  const debounceTimeout = useRef<any>(null);

  const debouncedFunction = useCallback(
    (...args: Parameters<T>) => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }

      debounceTimeout.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedFunction;
}

export default useDebounceCallback;
