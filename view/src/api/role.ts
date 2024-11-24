import {$get, $post} from "../utils/request";

export const $list = async () => {
  let res = await $get('Role/List2')
  return res
}