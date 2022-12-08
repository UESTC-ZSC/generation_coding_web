export interface BasicPageParams {
  page: number;
  pageSize: number;
}

export interface BasicFetchResult<T> {
  items: T[];
  total: number;
}

/**
 * 基础返回结果
 */
export interface BaseResponse<T> {
  code: number | string;
  message: string;
  data: T;
}

/**
 * 基础分页查询返回结果
 */
export interface BasePageResponse<T> {
  code: number | string;
  message: string;
  data: T;
}
