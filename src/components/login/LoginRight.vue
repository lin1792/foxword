<script setup lang="ts">
import { ref } from 'vue';
import { useLoginStore } from '@/stores/login';
import { storeToRefs } from 'pinia';
const useLogin = useLoginStore();
const { site } = storeToRefs(useLogin);

const finish = ref(false);

const code = ref(60);

const get = ref(false);

const toggle = () => {
  site.value === 'left' ? (site.value = 'right') : (site.value = 'left');
  finish.value = false;
};

const getCode = () => {
  get.value = true;
  const remove = setInterval(() => {
    code.value--;
    if (code.value === -1) {
      code.value = 60;
      get.value = false;
      clearInterval(remove);
    }
  }, 1000);
};

const register = () => {
  finish.value = true;
};
</script>

<template>
  <div class="login_left">
    <!-- 注册 -->
    <div v-if="!finish" :class="'left_box'">
      <div class="top">注册</div>
      <div class="center">
        <div class="password"><span>*</span>账号</div>
        <div class="input"><input type="text" placeholder="请输入" /></div>
        <div class="password"><span>*</span>密码</div>
        <div class="input"><input type="text" placeholder="请输入" /></div>
        <div class="password"><span>*</span>手机号码</div>
        <div class="input">
          <input type="text" placeholder="请输入" />
        </div>
        <div class="account"><span>*</span>邮箱</div>
        <div class="input">
          <input type="text" class="mail" placeholder="请输入" /><i
            v-show="!get"
            @click="getCode"
            >获取验证码</i
          ><i v-show="get" style="text-decoration: none; padding: 0 10px"
            >{{ code }} S</i
          >
        </div>
        <div class="yanzhen"><span>*</span>验证码</div>
        <div class="input">
          <input type="text" class="ipt_last" placeholder="请输入" />
        </div>
      </div>
      <div class="bottom">
        <span @click="toggle">已有账号，点击登录</span>
        <button @click="register">注册</button>
      </div>
    </div>
    <!-- 注册成功 -->
    <transition name="panel">
      <div v-if="finish" class="success">
        <div class="tubiao iconfont icon-gou"></div>
        <div class="text">注册成功</div>
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
    height: 420px;
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
