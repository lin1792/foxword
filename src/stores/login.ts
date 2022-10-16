import { defineStore } from 'pinia';
import { useLogin } from '@/utils/api';

export const useLoginStore = defineStore({
  id: 'login',
  state: () => ({ site: 'right' }),
  actions: {
    async useuserlogin(username: string, password: string) {
      await useLogin(username, password);
    },
  },
});
