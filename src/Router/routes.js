import React from 'react'
import Index from '../Views/Index'
import NewStart from '../Views/New'
import About from '../Views/About'
import Topic from '../Views/Topic/topicDetail'
import UserPage from '../Views/User'
import View404 from '../Views/View404'
import qs from 'qs'

const navTypes = ['all','good','share','ask','job','dev'];

const routes =[
    {
        title:'首页',
        path:'/',
        isNav:true,
        exact:true,
        render(props){//props是路由参数
            // console.log(props)
            const {search} = props.location;
            const {tab,page} = qs.parse(search.substr(1))
            //处理url 非法url跳转到404
            if (((tab && navTypes.includes(tab)) || page === undefined) && ((page && page>0) || page === undefined)) {
                return <Index {...props} />
            }
                return <View404 />
        }
    },
    {
        title:'新手入门',
        path:'/new',
        isNav:true,
        exact:true,
        render(props){
            return <NewStart {...props}/>
        }
    },
    {
        title:'关于',
        path:'/about',
        isNav:true,
        exact:true,
        render(props){
            return <About {...props} />
        }
    },
    {
        title:'主题详情',
        path:'/topic/:topicId',
        isNav:false,
        exact:true,
        render(props){
            return <Topic {...props} />
        }
    },
    {
        title:'用户',
        path:'/user/:username',
        isNav:false,
        exact:true,
        render(props){
            return <UserPage {...props} />
        }
    },
    {
        title:'View404',
        path:'',
        isNav:false,
        exact:false,
        render(props){
            return <View404 {...props} />
        }
    }

]

const navList=[
    {
        name:'全部',
        url:'/?tab=all'
    },
    {
        name:'精华',
        url:'/?tab=good'
    },
    {
        name:'分享',
        url:'/?tab=share'
    },
    {
        name:'问答',
        url:'/?tab=ask'
    },
    {
        name:'招聘',
        url:'/?tab=job'
    },
    {
        name:'客户端测试',
        url:'/?tab=dev'
    },
]

export {navTypes,navList}

export default routes