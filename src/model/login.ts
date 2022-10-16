export interface useLogin {
  code: string;
  data: { userId: string; token: string };
  message: string;
  success: string;
}
