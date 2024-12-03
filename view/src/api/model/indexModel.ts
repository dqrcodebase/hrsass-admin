 export interface Result {
  successfully: boolean;
  msg: string;
  code: string;
  data: any;
 }

 export interface PageParams {
  page: number;
  limit: number;
 }