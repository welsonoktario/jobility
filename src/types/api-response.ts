export type APIResponse<T = unknown> = {
  status: string | 'success' | 'fail';
  message?: string;
  data?: T;
};
