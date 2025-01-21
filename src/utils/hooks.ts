import { useQuery } from "@tanstack/react-query";

export const useProductQuery = <T>(apiFunction: (...args: Array<unknown>) => Promise<T>, queryKey: string, ...rest: Array<unknown>) => { // Abstracted this functionality to avoid repeating the same pattern in multiple functions
  const { isLoading, data, error } = useQuery({
    queryKey: [queryKey, ...rest],
    queryFn: () => apiFunction(...rest),
    staleTime: 30000,
    refetchOnWindowFocus: false
  });

  return { isLoading, data: data as T, error }
}