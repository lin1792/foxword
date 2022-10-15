import http from './http';

// 登录
export async function useLogin(account_number: string, login_password: string) {
  const res: any = await http.post('/login', {
    account_number,
    login_password,
  });
  console.log(res);
  return res;
}
