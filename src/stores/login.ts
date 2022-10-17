import { defineStore } from 'pinia';
import {
  useLogin,
  useRegister,
  useGetisRepeated,
  useGetsendCode,
} from '@/utils/api';

export const useLoginStore = defineStore({
  id: 'login',
  state: () => ({
    site: 'right',
    message: '',
    sendcode: '',
    isrepeated: true,
    register_status: false,
  }),
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
      await useRegister(username, password, nickname, phone, email).then(
        (res) => {
          this.register_status = res.success;
        }
      );
    },

    // 查重
    async useGetisRepeated(username: string) {
      await useGetisRepeated(username).then((res) => {
        this.isrepeated = res.data;
      });
    },

    // 发送验证码
    async useGetsendCode(email: string, nickname: string) {
      await useGetsendCode(email, nickname).then((res) => {
        this.sendcode = res.data;
      });
    },
  },
});
