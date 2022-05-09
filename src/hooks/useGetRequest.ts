import { toast } from 'react-toastify';
import { http } from '../axiosInstance';
import { useState } from 'react';

type Params = {
  api_key: string;
  page?: number;
};

const useGetRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function fetch<T>(url: string, params?: Params) {
    try {
      setIsLoading(true);
      return http.get<T>(url, { params });
    } catch (err) {
      setIsError(true);
      toast.error('네트워크 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  }

  return { fetch, isLoading, isError };
};

export default useGetRequest;
