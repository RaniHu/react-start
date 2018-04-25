import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'

//路由配置
import RouteMap from './router/routeMap'

render(
    <RouteMap history={hashHistory} />,
    document.getElementById('root')
)
