import React from 'react';

//组件
import List from '../List';

//数据
import {getHomeNavData}  from '../../fetch/home/home.js';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }

    componentDidMount() {

        // 获取首页导航数据
        const result = getHomeNavData();
        result.then(res => {
            return res.json()
        }).then(json => {

            // 处理获取到的数据
            const data = json
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
            <div>
               <p> this is home page!</p>
               <ul>
                    {
                        this.state.data.map(function(item,index){
                            return(
                                <li key={index} style={{backgroundColor:item.bgColor}}>{item.name}</li>
                            )
                        })
                
                    }
               </ul>
               <List/>
            </div>
        
        )
    }
}

export default Home;
