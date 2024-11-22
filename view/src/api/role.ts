import {$get, $post} from "../utils/request";

export const $list = async () => {
  let res = await $get('Role/List')
  return res
}