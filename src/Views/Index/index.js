import React,{ useEffect } from 'react'
import { Menu, List,Pagination, Affix } from 'antd'
import {navList,navTypes} from '../../Router/routes'
import { Link, useLocation } from 'react-router-dom'
import {connect} from 'react-redux'
import {GetTopicList} from '../../Store/action/shouye'
import ListPage from '../../Component/listpage'
import qs from 'qs'

function Index(props){
    // console.log(props)
    const {data,loading } = props;
    // console.log(data)
    const {search} = useLocation();
    const {tab='all',page=1} = qs.parse(search.substr(1));
    const activeIndex = navTypes.indexOf(tab)
    const getTopics = GetTopicList()
    useEffect(()=>{
        getTopics(tab,page)
    },[tab,page])
    return <>
        <div className="index_page">
            <Menu 
                mode="horizontal" 
                theme="light"
                selectedKeys={[activeIndex.toString()]}
                
            >
                {navList.map((v,index)=>{
                    return (<Menu.Item key={index}><Link to={v.url} >{v.name}</Link></Menu.Item>)
                })}
            </Menu>
            <ListPage loading={loading} data={data}/>
            {loading?'':<Affix offsetBottom={50}>
                <Pagination
                    className="page_nation"
                    defaultCurrent={page}
                    defaultPageSize={20}
                    total={1000}
                    itemRender={(page,type)=>{
                        switch(type){
                            case 'prev':
                                return <Link to={`/?tab=${tab}&page=${page}`}>{"<"}</Link>
                            case 'next':
                                return <Link to={`/?tab=${tab}&page=${page}`}>{">"}</Link>
                            case 'page':
                                return <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>
                            default:
                                return <Link to={`/?tab=${tab}&page=${page}`}>{"..."}</Link>
                        }
                    }}
                />
            </Affix>}
            
            
        </div>
    </>
}

export default connect((state)=>state.GetTopicList)(Index)

