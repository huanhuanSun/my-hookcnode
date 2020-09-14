import React from 'react'
import { List, Col, Avatar, Tag } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import {dateHanddle} from '../Static/js/function'
import{ Link} from 'react-router-dom'
import moment from 'moment'
import TopicTag from '../Component/tabTag'



export default function ListPage(props){
    const {loading,data} = props;
    //2020-07-02T04:01:43.808Z
    // console.log(moment().fromNow())
    
    return (
        <div className="list_page">
                <List 
                    className="list"
                    loading={loading}
                    dataSource={data}
                    renderItem={(v,index)=>{
                        const {author,good,tab,last_reply_at,reply_count,title,top,visit_count} =v;
                        const {avatar_url,loginname} = author;
                        return <List.Item key={v.id}>
                            <Col
                                xs={24}
                                md={21}
                            >
                                <Link to={`/user/${v.author_id}`} className="list_avatar">
                                    <Avatar icon={<UserOutlined />} src={avatar_url} alt={loginname}/>
                                </Link>
                                {reply_count?(<span className="cont_wrap">{reply_count}/{visit_count}</span>):''}
                                <TopicTag tab={top?'top':(good?'good':tab)}/>
                                <Link to={`/topic/${v.id}`} >
                                    <span className="topic_list_title">{title}</span>
                                </Link>
                            </Col>
                            <Col
                                xs={0}
                                md={3}
                                className="time_wrap"
                            >{moment(last_reply_at).fromNow()}</Col>
                        </List.Item>
                    }}
                />
            </div>
    )
}