export interface useLogin {
  code: number;
  data: { userId: string; token: string };
  message: string;
  success: boolean;
}
export interface usecode {
  code: number;
  data: string;
  message: string;
  success: boolean;
}
export interface useisrepeated {
  code: number;
  data: boolean;
  message: string;
  success: boolean;
}
export interface useregister {
  code: number;
  data: any;
  message: string;
  success: boolean;
}
