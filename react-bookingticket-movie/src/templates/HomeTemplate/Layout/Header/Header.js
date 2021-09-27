import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { history } from '../../../../App';
import { Select } from 'antd';
import { TOKEN, USER_LOGIN } from '../../../../util/settings/config';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Image from '../../../../assets/images/boss-baby1.png';

const { Option } = Select;

export default function Header(props) {
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

    const { t, i18n } = useTranslation();


    const handleChange = (value) => {
        i18n.changeLanguage(value)
    }
    const renderLogin = () => {
        if (_.isEmpty(userLogin)) {
            return <Fragment>
                <button onClick={() => {
                    history.push('/login')
                }} className="self-center font-bold px-8 py-3 rounded">{t('Sign in')}</button>
                <button onClick={() => {
                    history.push('/register')
                }} className="self-center px-8 py-3 font-bold font-semibold rounded bg-violet-600 text-coolGray-50">{t('Register')}</button>

            </Fragment>
        }


        return <Fragment>
            {/* <button onClick={() => {
                history.push('/profile')
            }} className="self-center px-8 py-3 rounded">Hello ! {userLogin.taiKhoan}</button> */}

            <div className="avatar">
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
            }} className="text-yellow-500 font-bold ml-3 mr-5">{t('Sign out')}</button>
        </Fragment>
    }

    return (
        <header className="p-4 bg-coolGray-100 text-coolGray-800 bg-opacity-40 bg-black text-white fixed w-full z-10">
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <img style={{width: '130px', height: '70px'}} src={Image} alt="cybersoft" />
                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink to="/home" className="flex items-center -mb-0.5 font-bold border-b-2 px-4 border-transparent text-violet-600 
                        border-violet-600 text-white" activeClassName="border-b-2 border-white">Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/contact" className="flex items-center -mb-0.5 font-bold border-b-2 px-4 
                        border-transparent text-white" activeClassName="border-b-2 border-white">Contact</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/news" className="flex items-center -mb-0.5 font-bold border-b-2 px-4 
                        border-transparent text-white" activeClassName="border-b-2 border-white">News</NavLink>
                    </li>
                </ul>

                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        {renderLogin()}

                        <Select defaultValue="en" style={{ width: 100 }} onChange={handleChange}>
                            <Option value="en">Eng</Option>
                            <Option value="chi">Chi</Option>

                            <Option value="vi">Vi</Option>
                        </Select>
                    </div>

                    {/* <button onClick={() => {
                    history.push('/login')
                }} className="self-center px-8 py-3 rounded">Sign in</button>
                <button className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50">Sign up</button> */}
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-coolGray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>

    );
}