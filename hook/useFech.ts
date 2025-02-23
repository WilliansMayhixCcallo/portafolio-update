// import { getRequest } from '@/utils/http';
// import useSWR from 'swr';

// export const useFetch = <T>(url: string, withToken: boolean = false) => {

//   const fetcher = async (url: string) => {
//     const result = await getRequest<T>(url, withToken);
//     if (result.state) {
//       throw result.state;
//     }
//     return result.data as T;
//   };


//   const { data, error, mutate, isValidating } = useSWR<T>(url, fetcher, {
//     revalidateOnFocus: false,
//   });

//   const isLoading = !data && !error;

//   return { data, error, mutate, isValidating, isLoading };
// };
