import { get } from '../get';


//获取列表页数据
export function getListData(name, age) {
    const result = get('/api/list/' + encodeURIComponent(name) + '/' + age)
    return result
}