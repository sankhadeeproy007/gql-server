import { HANDLE_TOKEN } from './types';

export const handleToken = token => ({
  type: HANDLE_TOKEN,
  payload: token
});
