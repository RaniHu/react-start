import { get } from '../get';


//获取首页导航数据
export function getHomeNavData() {
    const result = get('/api/homeNav');
    return result;
}

