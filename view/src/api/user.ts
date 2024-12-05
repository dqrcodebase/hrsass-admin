import { $post,$put ,$delete} from "../utils/request";
import { PageParams } from "./model/indexModel";

enum Api {
  userList = '/api/user/list',
  userAdd = '/api/user/add',
  userUpdate = '/api/user/update',
  userRemoves = '/api/user/removes'
}

export const addUserApi = async (params: any) => {
  return await $post(Api.userAdd, params)
}

export const getUserListApi = async ({ page = 0, limit = 20 }: PageParams) => {
  return await $post(`${Api.userList}/${page}/${limit}`)
}

export const updateUserApi = async (params: any) => {
  return await $put(Api.userUpdate, params)
}

export const removesUserApi = async (id: Array<Number>) => {
  return await $delete(Api.userRemoves,  id)
}