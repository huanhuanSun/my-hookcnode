import React from 'react'
import {List,Comment} from 'antd'
import moment from 'moment'


export default function MyComment(props) {
    // console.log(props)
    const {data} = props;
    return (
        <>
            <List 
                header="评论列表"
                dataSource={data}
                renderItem={(item)=>{
                    return (<li>
                    <Comment 
                        author={<a href={`/user/${item.author.loginname}`}>{item.author.loginname}</a>}
                        avatar={item.author.avatar_url}
                        content={<div dangerouslySetInnerHTML={{
                            __html: item.content
                        }}></div>}
                        datetime={moment(item.create_at).fromNow()}
                    ></Comment>
                </li>)
                }}
            >
            </List>
        </>
    )
}