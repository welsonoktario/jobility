import { APIResponse } from '@/types';

const API_URL = import.meta.env.VITE_API_URL;

export async function $get<T = unknown>(
  url: string,
  headers?: Record<string, string>,
  options?: RequestInit,
): Promise<APIResponse<T>> {
  const httpOptions: RequestInit = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  const response = await fetch(API_URL + url, httpOptions);

  return await (response.json() as Promise<APIResponse<T>>);
}

export async function $post<T = unknown>(
  url: string,
  body?: Record<string, any>,
  headers?: Record<string, string>,
): Promise<APIResponse<T>> {
  const httpOptions: RequestInit = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  };

  const response = await fetch(API_URL + url, httpOptions);

  return await (response.json() as Promise<APIResponse<T>>);
}
