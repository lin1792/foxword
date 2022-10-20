import { defineStore } from 'pinia';
import { useLogin, useRegister, useGetsendCode } from '@/utils/api';

export const useLoginStore = defineStore({
  id: 'login',
  state: () => ({
    log_state: '',
    site: 'right',
    message: '',
    sendcode: '',
    register_status: false,
    register_data: '',
    fail_message: '',
  }),
  actions: {
    // 登录
    async useuserlogin(username: string, password: string) {
      await useLogin(username, password).then((res) => {
        if (res.success === true) {
          this.message = res.message;
          sessionStorage.setItem('message', res.message);
          sessionStorage.setItem('userId', res.data.userId);
          sessionStorage.setItem('token', res.data.token);
        }
        if (res.success === false) {
          this.log_state = res.message;
        } else {
          this.log_state = '';
        }
      });
    },

    // 注册
    async useRegister(
      username: string,
      password: string,
      nickname: string,
      phone: string,
      email: string,
      code: string
    ) {
      await useRegister(username, password, nickname, phone, email, code).then(
        (res) => {
          this.register_status = res.success;
          if (res.success === false) {
            this.register_data = res.data;
            this.fail_message = res.data;
          }
        }
      );
    },

    // // 查重
    // async useGetisRepeated(username: string) {
    //   await useGetisRepeated(username).then((res) => {
    //     this.isrepeated = res.data;
    //   });
    // },

    // 发送验证码
    async useGetsendCode(email: string, nickname: string) {
      await useGetsendCode(email, nickname).then((res) => {
        this.sendcode = res.data;
      });
    },
  },
});
