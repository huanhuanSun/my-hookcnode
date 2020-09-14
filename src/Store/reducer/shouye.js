function GetTopicList(state={
    loading:false,
    data:[]
},action){
    switch(action.type){
        case 'TOPIC_LOADING':
            return {
                ...state,
                loading:true
            }
        case 'TOPIC_LOADEND':
            return {
                loading:false,
                data:action.data
            }
        default:
            return state
    }
}

function GetTopicDetail(state={
    loading:false,
    detailData:{
        author:{}
    },
    isError:false,
    errMsg:''
},action){
    switch(action.type) {
        case 'TOPIC_DETAIL_LOADING':{
            return {
                ...state,
                detailData:{
                    author:{}
                },
                loading:true
            }
        }
        case 'TOPIC_DETAIL_LOADEND':{
            return {
                ...state,
                loading:false,
                detailData:action.data
            }
        }
        case 'TOPIC_DETAIL_ERROR':
            return {
                ...state,
                isError:true,
                detailData:{
                    author:{}
                },
                errMsg:action.err_msg
            }
        default:
            return state

    }
}

function GetUser(state={
    loading:false,
    userInfo:{}
},action){
    switch(action.type){
        case 'USER_LOADING':
            return {
                ...state,
                loading:true
            }
        case 'USER_LOADEND':
            return {
                loading:false,
                userInfo:action.data
            }
        default: 
        return state
    }
}

export {GetTopicList,GetTopicDetail,GetUser}

