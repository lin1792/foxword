import http from './http';
import type { useLogin } from '@/model/login';

// 登录
export async function useLogin(username: string, password: string) {
  const res: useLogin = await http.post('/sys/user/login', {
    username,
    password,
  });
  console.log(res);
  return res;
}

// 注册
export async function useRegister(
  username: string,
  password: string,
  nickname: string,
  phone: string,
  email: string
) {
  const res: any = await http.post('/sys/user/register', {
    username,
    password,
    nickname,
    phone,
    email,
  });
  console.log(res);
  return res;
}

// 账户查重
export async function useGetisRepeated(username: string) {
  const res: any = await http.get('/sys/user/isRepeated', {
    username,
  });
  console.log(res);
  return res;
}

// 获取验证码
export async function useGetsendCode(email: string, nickname: string) {
  const res: any = await http.get('/sys/user/sendCode', {
    email,
    nickname,
  });
  console.log(res);
  return res;
}

// 测试接口
export async function useCeshi(username: string) {
  const res: any = await http.get('/sys/user/isRepeated', {
    username,
  });
  console.log(res);
  return res;
}
