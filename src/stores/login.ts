import { defineStore } from 'pinia';

export const useLoginStore = defineStore({
  id: 'login',
  state: () => ({ site: 'right' }),
});
