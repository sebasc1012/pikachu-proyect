import { useEffect, useState } from "react";

interface FetchError {
  code: number;
  message: string;
}
interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  hasError: boolean;
  error: FetchError | null;
}

const localCache: Record<string, unknown> = {}

export function useFetch<T>(url: string) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getPokemons();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };
  const getPokemons = async () => {

    if(localCache[url]){
      setState({
        data: localCache[url] as T,
        isLoading:false,
        hasError:false,
        error:null
      })
      return;
    }
    setLoadingState();


    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setState({
          data: data as T,
          isLoading: false,
          hasError: false,
          error: null,
        });

        localCache[url]= data
      } else {
        setState({
          data: null,
          isLoading: false,
          hasError: true,
          error: {
            code: response.status,
            message: response.statusText,
          },
        });
      }
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: 0,
          message: "network mistake",
        },
      });
    }
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
}
