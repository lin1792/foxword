import http from './http';
import type {
  useLogin,
  usecode,
  useisrepeated,
  useregister,
} from '@/model/login';

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
  email: string,
  code: string
) {
  const res: useregister = await http.post('/sys/user/register', {
    username,
    password,
    nickname,
    phone,
    email,
    code,
  });
  console.log(res);
  return res;
}

// 账户查重
export async function useGetisRepeated(username: string) {
  const res: useisrepeated = await http.get('/sys/user/isRepeated', {
    username,
  });
  console.log(res);
  return res;
}

// 获取验证码
export async function useGetsendCode(email: string, nickname: string) {
  const res: usecode = await http.get('/sys/user/sendCode', {
    email,
    nickname,
  });
  console.log(res);
  return res;
}

// 添加好友
export async function useaddFriend(senderId: string, recipientId: string) {
  const res: any = await http.get('/sys/user/addFriend', {
    senderId,
    recipientId,
  });
  console.log(res);
  return res;
}
// 查询好友列表
export async function usesearchFriendsList(userId: string) {
  const res: any = await http.get('/sys/user/selectUserFriendsList', {
    userId,
  });
  console.log(res);
  return res;
}
// 查找用户
export async function usesearchFriends(username: string) {
  const res: any = await http.get('/sys/user/selectUserByUsername', {
    username,
  });
  console.log(res);
  return res;
}
// 根据id查找用户
export async function usesearchFriendsbyId(userId: string) {
  const res: any = await http.get('/sys/user/selectFriendRequestByUserId', {
    userId,
  });
  console.log(res);
  return res;
}

// 同意添加好友
export async function useApproveFriendRequest(id: string) {
  const res: any = await http.get('/sys/user/approveFriendRequest', {
    id,
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
