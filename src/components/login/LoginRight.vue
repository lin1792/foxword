<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useLoginStore } from '@/stores/login';
import { storeToRefs } from 'pinia';
import { useGetisRepeated } from '@/utils/api';
import { Md5 } from 'ts-md5';
const useLogin = useLoginStore();
const { site, fail_message, register_status, register_data } =
  storeToRefs(useLogin);
const { useRegister, useGetsendCode } = useLogin;

const isrepeated = ref(false);
const tel_rule = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
let tel_status = ref(0);

const email_rule =
  /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
let email_status = ref(0);

const form = reactive({
  nickname: '',
  account: '',
  password: '',
  tel: '',
  email: '',
  sendcode: '',
});
const form_status = reactive({
  nickname: 0,
  account: 0,
  password: 0,
  tel: 0,
  email: 0,
  sendcode: 0,
});

const finish = ref(0);

const code = ref(60);

const get = ref(false);

const toggle = () => {
  site.value === 'left' ? (site.value = 'right') : (site.value = 'left');
  finish.value = 0;
};

// 账号查重
const getisrepeated = async () => {
  await useGetisRepeated(form.account).then((res) => {
    isrepeated.value = res.data;
  });
};

const isempty = (item: string) => {
  if (item === 'nickname') {
    if (form.nickname !== '') {
      form_status.nickname = 0;
    } else {
      form_status.nickname = 1;
    }
  }
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
  if (item === 'tel') {
    if (form.tel !== '') {
      form_status.tel = 0;
      tel_rule.test(form.tel) ? (tel_status.value = 0) : (tel_status.value = 1);
    } else {
      form_status.tel = 1;
    }
  }
  if (item === 'email') {
    if (form.email !== '') {
      form_status.email = 0;
      email_rule.test(form.email)
        ? (email_status.value = 0)
        : (email_status.value = 1);
    } else {
      form_status.email = 1;
    }
  }
  if (item === 'sendcode') {
    if (form.sendcode !== '') {
      form_status.sendcode = 0;
    } else {
      form_status.sendcode = 1;
    }
  }
};

const getCode = async () => {
  if (form.email !== '' && email_status.value === 0) {
    get.value = true;
    const remove = setInterval(() => {
      code.value--;
      if (code.value === -1) {
        code.value = 60;
        get.value = false;
        clearInterval(remove);
      }
    }, 1000);
    await useGetsendCode(form.email, form.nickname).then(() => {});
  }
};

const register = async () => {
  const isfulled = ref(
    form.nickname !== '' &&
      form.account !== '' &&
      form.password !== '' &&
      form.tel !== '' &&
      form.email !== '' &&
      form.sendcode !== ''
  );

  const email_tel = email_status.value === 0 && tel_status.value === 0;

  // const issendcode = form.sendcode === sendcode.value;

  if (isfulled.value && email_tel && isrepeated.value === false) {
    await useRegister(
      form.account,
      Md5.hashStr(form.password),
      form.nickname,
      form.tel,
      form.email,
      form.sendcode
    ).then(() => {
      if (register_status.value === true) {
        finish.value = 1;
        form.account = '';
        form.email = '';
        form.nickname = '';
        form.password = '';
        form.sendcode = '';
        form.tel = '';
      } else {
        finish.value = 2;
      }
    });
  }
};
</script>

<template>
  <div class="login_left">
    <!-- 注册 -->
    <div v-if="finish === 0" :class="'left_box'">
      <div class="top">注册</div>
      <div class="center">
        <div class="nickname">
          <span>*</span>昵称<span
            style="color: red; font-size: 12px; margin-left: 10px"
            >{{ form_status.nickname === 1 ? '昵称不能为空' : '' }}</span
          >
        </div>
        <div class="input">
          <input
            v-model="form.nickname"
            :class="form_status.nickname === 1 ? 'empty' : ''"
            type="text"
            placeholder="请输入"
            @blur="isempty('nickname')"
          />
        </div>
        <div class="account">
          <span>*</span>账号<span
            style="color: red; font-size: 12px; margin-left: 10px"
            >{{ isrepeated ? '该账号已存在' : ''
            }}{{ form_status.account === 1 ? '账号不能为空' : '' }}</span
          >
        </div>
        <div class="input">
          <input
            v-model="form.account"
            :class="form_status.account === 1 || isrepeated ? 'empty' : ''"
            type="text"
            placeholder="请输入"
            @blur="getisrepeated(), isempty('account')"
          />
        </div>
        <div class="password">
          <span>*</span>密码<span
            style="color: red; font-size: 12px; margin-left: 10px"
            >{{ form_status.password === 1 ? '密码不能为空' : '' }}</span
          >
        </div>
        <div class="input">
          <input
            v-model="form.password"
            :class="form_status.password === 1 ? 'empty' : ''"
            type="password"
            placeholder="请输入"
            @blur="isempty('password')"
          />
        </div>
        <div class="tel">
          <span>*</span>手机号码<span
            style="color: red; font-size: 12px; margin-left: 10px"
            >{{ form_status.tel === 1 ? '手机号码不能为空' : ''
            }}{{ tel_status === 1 ? '请输入正确的手机号码' : '' }}</span
          >
        </div>
        <div class="input">
          <input
            v-model="form.tel"
            :class="form_status.tel === 1 || tel_status === 1 ? 'empty' : ''"
            type="text"
            placeholder="请输入"
            @blur="isempty('tel')"
          />
        </div>
        <div class="email">
          <span>*</span>邮箱<span
            style="color: red; font-size: 12px; margin-left: 10px"
            >{{ form_status.email === 1 ? '邮箱不能为空' : ''
            }}{{ email_status === 1 ? '请输入正确的邮箱' : '' }}</span
          >
        </div>
        <div class="input">
          <input
            v-model="form.email"
            :class="
              form_status.email === 1 || email_status === 1 ? 'empty' : ''
            "
            type="text"
            class="mail"
            placeholder="请输入"
            @blur="isempty('email')"
          /><i v-show="!get" @click="getCode(), isempty('email')">获取验证码</i
          ><i v-show="get" style="text-decoration: none; padding: 0 10px"
            >{{ code }} S</i
          >
        </div>
        <div class="sendcode">
          <span>*</span>验证码<span
            style="color: red; font-size: 12px; margin-left: 10px"
            >{{ form_status.sendcode === 1 ? '验证码不能为空' : ''
            }}{{ register_data === '验证码错误' ? '验证码错误' : '' }}</span
          >
        </div>
        <div class="input">
          <input
            v-model="form.sendcode"
            :class="form_status.sendcode === 1 ? 'empty' : ''"
            type="text"
            class="ipt_last"
            placeholder="请输入"
            @blur="isempty('sendcode')"
          />
        </div>
      </div>
      <div class="bottom">
        <span @click="toggle">已有账号，点击登录</span>
        <button @click="register">注册</button>
      </div>
    </div>
    <!-- 注册成功 -->
    <transition name="panel">
      <div v-if="finish === 1" class="success">
        <div class="tubiao iconfont icon-gou"></div>
        <div class="text">注册成功</div>
        <button @click="toggle">点击登录</button>
      </div>
    </transition>
    <transition name="panel">
      <div v-if="finish === 2" class="success">
        <div
          class="tubiao iconfont icon-chacha"
          style="border-color: #d81e06; line-height: 46px"
        ></div>
        <div class="text" style="color: #d81e06">注册失败</div>
        <div class="text" style="color: #d81e06">{{ fail_message }}</div>
        <button @click="toggle">点击登录</button>
      </div>
    </transition>
  </div>
</template>

<style lang="less" scoped>
.panel-enter-from {
  opacity: 0;
}
.panel-enter-active {
  transition: all 0.5s linear;
}
.panel-enter-to {
  opacity: 1;
}
* {
  color: #ffffff;
}
.login_left {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .left_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 490px;
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
        display: flex;
        align-items: center;
        position: relative;
        margin-bottom: 5px;
        font-size: 16px;
        span {
          display: inline-block;
          height: 14px;
          margin-right: 2px;
          color: red;
        }
        input {
          width: 270px;
          height: 30px;
          color: rgb(146, 143, 143);
          outline: none;
          border: 1px solid rgb(188, 185, 185);
          border-radius: 5px;
          margin-bottom: 5px;
          box-shadow: 0 0 1px 1px rgba(188, 185, 185, 0.627);
          padding: 0 8px;
        }
        input::placeholder {
          font-size: 13px;
          color: rgba(128, 128, 128, 0.726);
          letter-spacing: 1px;
        }
        input:focus {
          border-color: rgba(0, 255, 255, 0.832);
          box-shadow: 0 0 1px 1px rgba(0, 255, 255, 0.832);
        }
        .empty {
          border-color: rgb(255, 3, 3);
        }
        .empty::placeholder {
          color: rgba(213, 25, 25, 0.532);
        }

        .ipt_last {
          margin-bottom: 0;
        }
        .mail {
          padding-right: 80px;
        }
        i {
          position: absolute;
          right: 6px;
          height: 30px;
          bottom: 5px;
          line-height: 30px;
          font-size: 12px;
          text-decoration: underline;
          font-style: normal;
          color: rgb(0, 174, 255);
          cursor: pointer;
        }
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

  .success {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;

    // background-color: rgb(28, 115, 201);
    div {
      margin-bottom: 15px;
    }
    .tubiao {
      width: 44px;
      height: 45px;
      border: 1px solid #0b9686;
      border-radius: 100%;
      line-height: 50px;
      text-align: center;
      font-size: 25px;
      color: green !important;
    }
    .text {
      font-size: 30px;
      font-weight: 600;
      letter-spacing: 2px;
      color: #0b9686;
    }
    button {
      width: 100px;
      height: 30px;
      margin: 0 10px;
      background-color: rgba(0, 81, 255, 0.7);
      border: 1px solid rgba(0, 81, 255);
      box-shadow: 0 0 10px 1px rgba(0, 81, 255, 0.3);
      border-radius: 3px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s linear;
      text-align: center;
      letter-spacing: 1px;
    }
    button:hover {
      background-color: rgba(0, 81, 255);
    }
  }
}
</style>
