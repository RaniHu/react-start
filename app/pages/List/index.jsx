import React from 'react';


//数据
import {getListData} from '../../fetch/list/list.js';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }


    componentDidMount() {

        // 获取列表数据
        const result = getListData("张三",16);
        result.then(res => {
            return res.json()
        }).then(json => {

            // 处理获取到的数据
            const data = json.data;
            if (data.length) {
                this.setState({
                    data: data
                })
            }
        }).catch(ex => {
            // 发生错误
            if (__DEV__) {
                console.error('首页导航数据报错, ', ex.message)
            }
        })
    }


    render() {
        return (
               <ul>
               {
                        this.state.data.map(function(item,index){
                            return(
                                <li key={index}>{item.name}</li>
                            )
                        })
                
                    }
                </ul>
        )
    }
}

export default List;
