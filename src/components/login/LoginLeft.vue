<script setup lang="ts">
import { reactive } from 'vue';
import { Md5 } from 'ts-md5';
// import CryptoJs from 'crypto-js';
import { useLoginStore } from '@/stores/login';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter();

const useLogin = useLoginStore();
const { site, log_state } = storeToRefs(useLogin);
const { useuserlogin } = useLogin;

const form = reactive({
  account: '',
  password: '',
});

const form_status = reactive({
  account: 0,
  password: 0,
});

const isempty = (item: string) => {
  if (item === 'account') {
    if (form.account !== '') {
      form_status.account = 0;
    } else {
      form_status.account = 1;
    }
  }
  if (item === 'password') {
    if (form.password !== '') {
      form_status.password = 0;
    } else {
      form_status.password = 1;
    }
  }
};

const toggle = () => {
  site.value === 'left' ? (site.value = 'right') : (site.value = 'left');
};

const login = async () => {
  // const md5: any = new Md5();
  // md5.appendAsciiStr(form.password); //password 密码
  // const md5pwd = md5.end(); // 加密后的md5 密码
  // const password = CryptoJs.enc.Hex.stringify(CryptoJs.HmacMD5(md5pwd, ''));
  await useuserlogin(form.account, Md5.hashStr(form.password)).then(() => {
    if (sessionStorage.getItem('message') === '操作成功') {
      router.push('/fox/home');
    }
  });
};
</script>

<template>
  <div class="login_left">
    <div class="left_box">
      <div class="top">登录</div>
      <div class="center">
        <div class="account">
          账号<span style="color: red; font-size: 12px; margin-left: 10px"
            >{{ form_status.account === 1 ? '账号不能为空' : ''
            }}{{ log_state }}</span
          >
        </div>
        <input
          v-model="form.account"
          :class="form_status.account === 1 ? 'empty' : ''"
          class="ipt1"
          type="text"
          placeholder="请输入"
          @blur="isempty('account')"
          @focus="log_state = ''"
        />
        <div class="password">
          密码<span style="color: red; font-size: 12px; margin-left: 10px"
            >{{ form_status.password === 1 ? '密码不能为空' : ''
            }}{{ log_state }}</span
          >
        </div>
        <input
          v-model="form.password"
          :class="form_status.password === 1 ? 'empty' : ''"
          type="password"
          placeholder="请输入"
          @blur="isempty('password')"
          @focus="log_state = ''"
        />
      </div>
      <div class="bottom">
        <button @click="login">登录</button>
        <span @click="toggle">没有账号，点击注册</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
* {
  color: #ffffff;
}
.login_left {
  display: flex;
  justify-content: center;
  // align-items: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  .left_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 220px;
    // background-color: rgb(5, 240, 221);
    // margin-bottom: 80px;
    .top {
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 5px;
      margin-bottom: 10px;
    }
    .center {
      margin-bottom: 20px;
      div {
        margin-bottom: 5px;
        font-size: 16px;
      }
      input {
        width: 250px;
        height: 30px;
        color: rgb(146, 143, 143);
        outline: none;
        border: 1px solid rgb(188, 185, 185);
        border-radius: 5px;
        box-shadow: 0 0 1px 1px rgba(188, 185, 185, 0.627);
        padding: 0 5px;
      }
      input::placeholder {
        font-size: 13px;
        color: rgba(128, 128, 128, 0.726);
        letter-spacing: 1px;
      }
      .empty {
        border-color: rgb(255, 3, 3);
      }
      .empty::placeholder {
        color: rgba(213, 25, 25, 0.532);
      }
      .ipt1 {
        margin-bottom: 10px;
      }
    }
    .bottom {
      button {
        width: 80px;
        height: 28px;
        margin: 0 10px;
        background-color: rgba(0, 81, 255, 0.7);
        border: 1px solid rgba(0, 81, 255);
        box-shadow: 0 0 10px 1px rgba(0, 81, 255, 0.3);
        border-radius: 3px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s linear;
      }
      button:hover {
        background-color: rgba(0, 81, 255);
      }
      span {
        font-size: 14px;
        cursor: pointer;
      }
      span:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
