import React from 'react'
import {Tag} from 'antd'

export default function TopicTag (props) {
    const {tab} = props;
    switch (tab) {
        case 'top':
            return <Tag color="#87d068" >置顶</Tag>
        case 'good':
            return <Tag color="#87d068" >精华</Tag>
        case 'share':
            return <Tag color="#87d068" >分享</Tag>
        case 'ask':
            return <Tag color="#E5E5E5" className="tag_ask">问答</Tag>
        case 'job':
            return <Tag color="#E5E5E5" className="tag_job">招聘</Tag>
        case 'dev':
            return <Tag color="#E5E5E5" className="tag_dev">测试</Tag>
        default:
            return null
    }
}