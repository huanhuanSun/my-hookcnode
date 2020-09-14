import React from 'react';
import {Switch,Route} from 'react-router-dom'
import routes from './Router/routes.js'
import { Button, Layout } from 'antd';
import { useSelector } from 'react-redux';
import Header from './Component/header'
import Footer from './Component/footer.js';
import './Static/css/index.css'
import moment from 'moment'
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

function App(props) {
  return (
    <>
      <Layout className="page">
        <Header />
        <Layout.Content>
          <div className="wrap">
            <Switch>
              {routes.map((item,index)=>{
                return (<Route 
                            key={index} 
                            path={item.path} 
                            exact={item.exact} 
                            render={(props)=>{
                              props.uername='shh'
                              return item.render(props)
                            }}>
                        </Route>)
                  })}
            </Switch>
          </div>
        </Layout.Content>
        <Footer />
      </Layout>
    </>
  );
}

export default App;
