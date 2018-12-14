import React,{Component} from 'react';
import { Layout } from 'antd';
import MyHeader from './components/Header';
import MyFooter from './components/Footer';
import Home from './pages/homePages';
import NavLeft from './components/NavLeft';
import './style/common.scss';

const {Content} = Layout;
export default class Admin extends Component{
    render(){
      return (
        <Layout className='container'>
          <NavLeft/>
          <Layout>
            <MyHeader/>
            <Content className='content'>
              <Home/>
            </Content>
            <MyFooter/>
          </Layout>
        </Layout>
      )
    }
}
