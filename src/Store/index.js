//创建仓库

import {createStore,combineReducers} from 'redux';
import topic from './reducer/topic.js'
import {GetTopicList,GetTopicDetail,GetUser} from './reducer/shouye.js'

export default createStore(combineReducers({
    topic,
    GetTopicList,
    GetTopicDetail,
    GetUser
}))