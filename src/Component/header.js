import React from 'react'
import { Affix,Layout, Button, Row, Col, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import routes from '../Router/routes'

export default function Header() {
    const {pathname} = useLocation()
    
    const activeIndex = routes.findIndex(v=>{
        return v.path === pathname
    })
    // console.log(activeIndex)
    return <>
        <Affix offsetTop={0}>
            <Layout.Header id="header">
                <header className="wrap">
                    <Row>
                        <Col xs={6} sm={4}>
                            <h1 className="logo">
                                <Link to="/">logo</Link>
                            </h1>
                        </Col>
                        <Col xs={18} sm={20}>
                            <Menu 
                                mode="horizontal" 
                                theme="dark" 
                                selectedKeys={[activeIndex.toString()]}
                            >
                                {routes.filter(v=>v.isNav).map((item,index)=>{
                                    return (<Menu.Item key={index}>
                                        <Link to={item.path} >{item.title}</Link>
                                    </Menu.Item>)
                                })}
                            </Menu>
                        </Col>
                    </Row>
                </header>
            </Layout.Header>
        </Affix>
    </>
}