//引入fetch.js文件
import { fetch } from './fetch' 
import Qs from 'qs';

export function setAxios(url,type,data) {
  var obj = {};
  if (type.toUpperCase()==='GET'){
      obj = {
        url:url,
        method:'GET',
        params:data
      }
    }else{
    console.log(Qs.stringify(data))
      obj = {
        url: url,
        method: 'POST',
        data: Qs.stringify(data)
      }
    };
    return fetch(obj)
}
