import http from './http'
import qs from 'qs'
import { useDispatch } from 'react-redux'



function GetTopicList () {
    const dispatch = useDispatch();
    return function (tab='all',page=1,limit=20,mdrender=false) {
        let param = qs.stringify({tab,page,limit,mdrender})
        dispatch({
            type:'TOPIC_LOADING'
        })
        http.get(`/topics?${param}`).then((res)=>{
            if (res.data.success) {
                dispatch({
                    type:'TOPIC_LOADEND',
                    data:res.data.data
                })
            }
        })
    }
}

function GetTopicDetail(){
    const dispatch = useDispatch();
    return function (id,mdrender=true) {
        let param = qs.stringify({mdrender})
        http.get(`/topic/${id}?${param}`).then(res=>{
            // console.log(res)
            if (res.data.success) {
                dispatch({
                    type:'TOPIC_DETAIL_LOADEND',
                    data:res.data.data
                })
            }
        }).catch((res)=>{
            dispatch({
                type:'TOPIC_DETAIL_ERROR',
                err_msg:res.response.data.error_msg
            })
        })
    }
}

function GetUser () {
    const dispatch = useDispatch();
    return function (username) {
        dispatch({
            type:'USER_LOADING'
        })
        http.get(`/user/${username}`).then(res=>{
            if (res.data.success) {
                dispatch({
                    type:'USER_LOADEND',
                    data:res.data.data
                })
            }
        })
    }
}

export {GetTopicList,GetTopicDetail,GetUser}

