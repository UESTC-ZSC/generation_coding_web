/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}
export interface MenuInfo {
  id: number | string;
  version: number | string;
  createTime: string;
  updateTime: string;
  parentId: number | string;
  title: string;
  level: number;
  sort: number;
  name: string;
  icon: string;
  hidden: string;
}

/**
 * 登陆接口返回结果
 */
export interface LoginToken {
  token: string;
}
