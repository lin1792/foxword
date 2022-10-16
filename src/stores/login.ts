import { defineStore } from 'pinia';
import {
  useLogin,
  useRegister,
  useGetisRepeated,
  useGetsendCode,
} from '@/utils/api';

export const useLoginStore = defineStore({
  id: 'login',
  state: () => ({ site: 'right', message: '' }),
  actions: {
    // 登录
    async useuserlogin(username: string, password: string) {
      await useLogin(username, password).then((res) => {
        if (res.message === '操作成功') {
          this.message = res.message;
          sessionStorage.setItem('message', res.message);
          sessionStorage.setItem('userId', res.data.userId);
          sessionStorage.setItem('token', res.data.token);
        }
      });
    },

    // 注册
    async useRegister(
      username: string,
      password: string,
      nickname: string,
      phone: string,
      email: string
    ) {
      await useRegister(username, password, nickname, phone, email);
    },

    // 注册
    async useGetisRepeated(username: string) {
      await useGetisRepeated(username);
    },

    // 发送验证码
    async useGetsendCode(email: string, nickname: string) {
      await useGetsendCode(email, nickname);
    },
  },
});
