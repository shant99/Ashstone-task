import { FetchState } from "../types/index.types";
import { useEffect, useState } from "react";

const useFetch = <T>(fetcher: () => Promise<T>): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetcher();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetcher]);

  return { data, isLoading, error };
};

export default useFetch;
