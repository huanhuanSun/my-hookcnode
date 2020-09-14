import React, { useEffect } from 'react'
import {GetUser} from '../../Store/action/shouye'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Card, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import moment from 'moment'
import ListPage from '../../Component/listpage'

export default function UserPage(props){
    const {username} = useParams()
    const {userInfo} = useSelector(state=>state.GetUser)
    const getUser = GetUser();
    console.log(userInfo)
    const {avatar_url,loading,loginname,create_at,score,githubUsername,recent_topics=[],recent_replies=[]} = userInfo;

    useEffect(()=>{
        getUser(username)
    },[])
    return <div className="user_page">
        <Card 
            loading={loading}
            className="user_title"
        >
            <Avatar 
                size={80}
                icon={<UserOutlined />}
                src={avatar_url}>
             </Avatar>
            <p>
                用户名：{loginname} &nbsp;&nbsp;
                注册时间：{moment(create_at).fromNow()} &nbsp;&nbsp;
                积分：{score}
            </p>
            <p>github：<a href={`https://github.com/${githubUsername}`}>{`https://github.com/${githubUsername}`}</a></p>
        </Card>
        <Card
            title="最近创建的话题"
            type="inner"
        >
            <ListPage data={recent_topics} loading={loading}></ListPage>
        </Card>
        <Card
            title="最近参与的话题"
            type="inner"
        >
            <ListPage data={recent_replies} loading={loading}></ListPage>
        </Card>
    </div>
}