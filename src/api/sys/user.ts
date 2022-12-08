import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginToken } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';
import { BaseResponse } from '/@/api/model/baseModel';
import { UserInfo } from '/#/store';

enum Api {
  Login = 'api/admin/login',
  Logout = '/logout',
  GetUserInfo = 'api/admin/getLoginInfo',
  GetPermCode = '/getPermCode',
  TestRetry = '/testRetry',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<BaseResponse<LoginToken>>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: 获取当前登陆用户信息
 */
export function getUserInfo() {
  return defHttp.get<BaseResponse<UserInfo>>(
    { url: Api.GetUserInfo },
    { errorMessageMode: 'none' },
  );
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}

export function testRetry() {
  return defHttp.get(
    { url: Api.TestRetry },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000,
      },
    },
  );
}
