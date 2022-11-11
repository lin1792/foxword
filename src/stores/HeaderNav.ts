import { defineStore } from 'pinia';

export const useHeaderNavStore = defineStore({
  id: 'headernav',
  state: () => ({
    friends_open: false,
    add_friend: false,
  }),
  actions: {},
});
