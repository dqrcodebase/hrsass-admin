export interface LoginParams {
  loginName: string;
  loginPwd: string;
}

export interface LoginResultModel {
  userId: string | number;
  token: string;
}