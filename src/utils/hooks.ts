import { useQuery } from "@tanstack/react-query";

export const useProductQuery = <T>(apiFunction: (...args: Array<any>) => Promise<T>, queryKey: string, ...args: Array<any>) => { // Abstracted this functionality to avoid repeating the same pattern in multiple functions
  const { isLoading, data, error } = useQuery({
    queryKey: [queryKey, ...args],
    queryFn: () => apiFunction(...args),
    staleTime: 30000,
    refetchOnWindowFocus: false
  });

  return { isLoading, data: data as T, error }
}