import { get } from '../get';
import {post}  from '../post';


//获取列表页数据 get方法
export function getListData(name, age) {
    const result = get('/api/list/' + encodeURIComponent(name) + '/' + age)
    return result
}


//获取列表页数据 post方法
// export function getListData(name, age) {
//     const result = post('/api/list/',{
//         name:name,
//         age:age
//     })
//     return result
// }