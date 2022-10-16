import http from './http';

// 登录
export async function useLogin(username: string, password: string) {
  const res: any = await http.post('/user/login ', {
    username,
    password,
  });
  console.log(res);
  return res;
}
