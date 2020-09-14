import React from 'react'
import { useLocation, useParams, useHistory, Link } from 'react-router-dom'
import qs from 'qs'
import { useSelector } from 'react-redux';
import {GetTopicDetail} from '../../Store/action/shouye'
import { useEffect } from 'react';
import moment from 'moment'
import { Alert } from 'antd';
import TopicTag from '../../Component/tabTag'
import MyComment from './detailCOmment'


export default function Topic(props){
    // console.log(props);
    const {topicId} = useParams();
    // const {pathname} = useLocation()
    // const topicId = pathname.split('/')[2];
    const history = useHistory();
    const {detailData,loading,isError,errMsg} = useSelector(state=>state.GetTopicDetail)
    console.log(detailData)
    
    const {title,author,tab,create_at,content,visit_count,replies} = detailData;
    // console.log(replies)
    const {avatar_url,loginname} = author;
    const getTopicDetailInfo = GetTopicDetail()
    useEffect(()=>{
        getTopicDetailInfo(topicId)
    },[])
    return <>
        <div>{isError?
            <Alert 
                message={errMsg} 
                closable={true}
                type="error"
                afterClose={()=>{
                    history.goBack()
                }}
            />:<div className="topic_detail">
                    <h1 >
                        <TopicTag tab={tab} />
                        <span> {title}</span>
                    </h1>
                    <p>
                    - 作者：<Link to={`/user/${loginname}`}>{loginname}</Link>&nbsp;&nbsp;
                    - 创建时间：{moment(create_at).fromNow()}&nbsp;&nbsp;
                    - 浏览人数：{visit_count}
                    </p>
                    <div  
                        dangerouslySetInnerHTML={{
                        __html:content
                    }}></div>
                    <MyComment data={replies&&replies.reverse()}/>
                </div>}
        </div>
    </>
}