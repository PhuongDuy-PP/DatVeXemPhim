import { Fragment, useEffect, useState } from "react";
import { Redirect, Route } from "react-router";
import { Layout, Menu, Breadcrumb } from 'antd';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import _ from "lodash";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { history } from "../../App";
import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import Image from '../../assets/images/boss-baby1.png';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminTemplate = (props) => { //path, exact, Component

    const { Component, ...restProps } = props;
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = collapsed => {
        // console.log(collapsed);
        setCollapsed(collapsed);
    };

    useEffect(() => {
        window.scrollTo(0, 0);

    })

    if (!localStorage.getItem(USER_LOGIN)) {
        alert('Bạn không có quyền truy cập vào trang này !')
        return <Redirect to='/' />
    }

    if (userLogin.maLoaiNguoiDung !== 'QuanTri') {
        alert('Bạn không có quyền truy cập vào trang này !')
        return <Redirect to='/' />

    }

    const renderLogin = () => {
        return <Fragment>
            
            <div 
            className="avatar">
                <button onClick={() => {
                    history.push('/profile')
                }} className="rounded-full w-14 h-14 ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img class="w-auto mx-auto rounded-full object-cover object-center" src="https://i1.pngguru.com/preview/137/834/449/cartoon-cartoon-character-avatar-drawing-film-ecommerce-facial-expression-png-clipart.jpg" alt="Avatar Upload" />
                </button>
            </div>
            <button onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(TOKEN);
                history.push('/home');
                window.location.reload();
            }} className="text-yellow-500 font-bold ml-3 mr-5">Sign out</button>
        </Fragment>
    }

    

    const operations = <Fragment>
        {!_.isEmpty(userLogin) ? <Fragment> 
        <header className="p-4 pl-0 bg-coolGray-100 text-coolGray-800 bg-opacity-40 bg-black text-white fixed w-full z-10">
            <div className="container pr-32 ml-5 flex justify-between h-16" style={{paddingRight: '100px'}}>
                <div  className="flex items-center p-2"></div>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        {renderLogin()}
                    </div>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-coolGray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>

                </Fragment> : ''}
            </Fragment>

    return <Route {...restProps} render={(propsRoute) => { //props.location,props.history,props.match
        const { Component, ...restProps } = props;
        
        return <Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                {/* <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} > */}
                <Sider>
                    <NavLink to="/" className="logo p-5">
                        <img className="ml-10" style={{width: '120px', height: '70px'}} src={Image} alt="..." />
                    </NavLink>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <SubMenu key="1" icon={<UserOutlined />} title="Users">
                            <Menu.Item key="8" icon={<UserOutlined />}>
                                <NavLink to="/admin/users">Users</NavLink>
                            </Menu.Item>
                            <Menu.Item key="9" icon={<FileOutlined />}>
                            <NavLink to="/admin/users/addnew">Add user</NavLink> 
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub1" icon={<FileOutlined />} title="Films">
                            <Menu.Item key="10" icon={<FileOutlined />}>
                                <NavLink to="/admin/films">Films</NavLink>
                               
                            </Menu.Item>
                            <Menu.Item key="11" icon={<FileOutlined />}>
                            <NavLink to="/admin/films/addnew">Add new</NavLink> 
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="3" icon={<DesktopOutlined />}>
                            <NavLink to="/admin/showtimes">Showtime</NavLink>

                        </Menu.Item>
                        {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined />}>
                            Files
                        </Menu.Item> */}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    
                    <div className="text-right pr-10">{operations}</div>
                    
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: '85vh' }}>
                            <Component {...propsRoute} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Copyright by BOSS BABY MOVIE</Footer>
                </Layout>
            </Layout>
        </Fragment>
    }} />

}

export default AdminTemplate;