/* eslint-disable @typescript-eslint/ban-types */
import { toast, ToastOptions } from 'react-toastify';

const toastDefaultParams: ToastOptions<{}> = { position: 'top-right', theme: 'colored' };
export const toastSuccess = (successMessage?: string, params?: ToastOptions<{}>) => {
  if (successMessage) toast.success(successMessage, { ...toastDefaultParams, ...params });
};

export const toastError = (errorMessage?: string, params?: ToastOptions<{}>) => {
  if (errorMessage) toast.error(errorMessage, { ...toastDefaultParams, ...params });
};
