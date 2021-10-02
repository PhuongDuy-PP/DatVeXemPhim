import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../App';
import { layThongTinNguoiDungAction, capNhatThongTinNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction';
import { Table } from 'antd';
import Swal from "sweetalert2";
import { Redirect, Route } from "react-router";
import { USER_LOGIN } from '../../util/settings/config';
import _ from 'lodash';

export default function Profile() {
    const { userLogin, thongTinNguoiDung, newUserInfor, loadingInfoUser } = useSelector(state => state.QuanLyNguoiDungReducer);
    // const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(layThongTinNguoiDungAction());
    }, []);

    const [typePassword, settypePassword] = useState("password");

    const handleToggleHidePassword = () => {
        if (typePassword === "password") {
            settypePassword("text");
        } else {
            settypePassword("password");
        }
    };

    const danhSachDatVe = thongTinNguoiDung.thongTinDatVe;
    const getIdSeat = (danhSachGhe) => {
        const reduceShowSeat = danhSachGhe
            .reduce((listSeat, seat) => {
                return [...listSeat, seat.tenGhe];
            }, [])
            .join(", ");
        return reduceShowSeat.length > 50 ? reduceShowSeat.substr(0, 50) + '...' : reduceShowSeat;
    };

    const [user, setUser] = useState({
        taiKhoan: userLogin.taiKhoan,
        email: newUserInfor.email ?? userLogin.email,
        soDT: newUserInfor.soDT ?? userLogin.soDT,
        maNhom: newUserInfor.maNhom ?? userLogin.maNhom,
        matKhau: newUserInfor.matKhau ?? thongTinNguoiDung.matKhau,
        maLoaiNguoiDung: newUserInfor?.maLoaiNguoiDung ?? userLogin.maLoaiNguoiDung,
        hoTen: newUserInfor.hoTen ?? userLogin.hoTen
    });

    if (!localStorage.getItem(USER_LOGIN)) {
        alert('Bạn không có quyền truy cập vào trang này !')
        history.push('/home');
        window.location.reload();
        return <Redirect to='/' />
    }   

    const printValues = e => {
        e.preventDefault();
        console.log({ user });
        dispatch(capNhatThongTinNguoiDungAction(user));
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Cập nhật thành công",
            showConfirmButton: false,
            timer: 1500,
        });

    };

    const handleChange = e => {
        const { name, value } = e.target;
        setUser(user => ({
            ...user,
            [name]: value
        }));
    };

    const columns = [
        {
            title: 'Tên phim',
            dataIndex: 'tenPhim',
            width: '10%',
            sorter: (a, b) => {
                let tenPhimA = a.tenPhim.toLowerCase().trim();
                let tenPhimB = b.tenPhim.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Thời lượng phim',
            dataIndex: 'thoiLuongPhim',
            width: '5%',
        },
        {
            title: 'Ngày đặt',
            dataIndex: 'ngayDat',
            sorter: (a, b) => {
                let ngayDatA = a.ngayDat.toLowerCase().trim();
                let ngayDatB = b.ngayDat.toLowerCase().trim();
                if (ngayDatA > ngayDatB) {
                    return 1;
                }
                return -1;
            },
            render: (text, day, index) => {
                return (
                    <i>{new Date(day.ngayDat).toLocaleDateString()},{" "}
                        {new Date(day.ngayDat).toLocaleTimeString(
                            "en-US",
                            { hour: "2-digit", minute: "2-digit" }
                        )}
                    </i>
                )
            },
            sortDirections: ['descend', 'ascend'],
            width: '7%'
        },
        {
            title: 'Tên ghế',
            dataIndex: "",
            width: '5%',
            render: (text, ticket, index) => {
                return (
                    <i>
                        {getIdSeat(ticket.danhSachGhe)}
                    </i>
                )
            }
        },
        {
            title: 'Tên rạp',
            dataIndex: "",
            width: '10%',
            render: (text, ticket, index) => {
                return (
                    <i>
                        {ticket.danhSachGhe[0].tenHeThongRap},{" "}
                        {ticket.danhSachGhe[0].tenRap}
                    </i>
                )
            }
        },
    ];

    const data = danhSachDatVe;

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    return (
        <div className="bg-gray-100 " style={{ minHeight: '140vh' }}>
            <div className="pt-20"></div>
            {/* End of Navbar */}
            < div className="container mx-auto p-5" >
                <div className="md:flex no-wrap md:-mx-2 ">
                    {/* Left Side */}
                    <div className="w-full md:w-3/12 md:mx-2">
                        {/* Profile Card */}
                        <div className="bg-white p-3 border-t-4 border-green-400">
                            <div className="image overflow-hidden">
                                <img className="h-auto w-full mx-auto" src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" alt />
                            </div>
                            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{userLogin.taiKhoan}</h1>
                            <h3 className="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3>
                            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.
                                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                <li className="flex items-center py-3">
                                    <span>Status</span>
                                    <span className="ml-auto"><span className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                                </li>
                                <li className="flex items-center py-3">
                                    <span>Member since</span>
                                    <span className="ml-auto">Nov 07, 2016</span>
                                </li>
                            </ul>
                        </div>
                        {/* End of profile card */}
                        <div className="my-4" />
                    </div>
                    {/* Right Side */}
                    <div className="w-full md:w-9/12 mx-2 h-64">
                        {/* Profile tab */}
                        {/* About Section */}
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                            <form onSubmit={printValues}>
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                    <span clas="text-green-500">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">Thông tin cá nhân</span>
                                </div>
                                <div className="text-gray-700">
                                    <div className="grid md:grid-cols-2 text-sm">
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Tài khoản</div>
                                            <input
                                                className="cursor-not-allowed appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="tai-khoan"
                                                type="text"
                                                value={userLogin.taiKhoan}
                                                disabled
                                            >
                                            </input>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Họ tên</div>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="ho-ten"
                                                type="text"
                                                name="hoTen"
                                                onChange={handleChange}
                                                value={user.hoTen}
                                            >
                                            </input>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Email</div>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="email"
                                                type="text"
                                                name="email"
                                                onChange={handleChange}
                                                value={user.email}
                                            >
                                            </input>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Số điện thoại</div>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="phone-number"
                                                type="text"
                                                name="soDT"
                                                onChange={handleChange}
                                                value={user.soDT}
                                            >
                                            </input>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Mật khẩu</div>
                                            <label className="relative text-gray-400 focus-within:text-gray-600 block">
                                                <input 
                                                    type={typePassword} 
                                                    name="matKhau" 
                                                    id="password"  
                                                    onChange={handleChange}
                                                    className="form-input border py-3 px-4 bg-gray-200 placeholder-gray-500 rounded text-gray-500 appearance-none w-full block pl-3 pr-9 focus:outline-none focus:bg-white" 
                                                    value={user.matKhau}
                                                />
                                                <i onClick={handleToggleHidePassword}>
                                                    {typePassword !== "password" ? (
                                                        <svg 
                                                            xmlns="http://www.w3.org/2000/svg" 
                                                            className="cursor-pointer w-6 h-6 absolute transform -translate-y-1/2 right-2" 
                                                            style={{top: '40%'}}
                                                            viewBox="0 0 24 24" 
                                                            fill="none" 
                                                            stroke="currentColor"
                                                        >
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                    ) : (
                                                        <svg 
                                                            xmlns="http://www.w3.org/2000/svg" 
                                                            className="cursor-pointer w-6 h-6 absolute transform -translate-y-1/2 right-2" 
                                                            style={{top: '40%'}}
                                                            viewBox="0 0 24 24" 
                                                            fill="none" 
                                                            stroke="currentColor"
                                                        >
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                                        </svg>
                                                    )}
                                                </i>
                                            </label>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Loại người dùng</div>
                                            <input
                                                className="form-control cursor-not-allowed appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="loai-nguoi-dung"
                                                type="text"
                                                name="maLoaiNguoiDung"
                                                onChange={handleChange}
                                                value={user.maLoaiNguoiDung}
                                                disabled
                                            >
                                            </input>
                                        </div>
                                    </div>
                                </div>
                                <button className="mr-2 text-blue-800 text-sm font-semibold rounded-lg bg-green-200 hover:bg-green-500 focus:outline-none focus:shadow-outline focus:bg-green-200 hover:shadow-xs p-3 my-4">
                                    Cập nhật
                                </button>

                                {userLogin.maLoaiNguoiDung === 'QuanTri' ? <button onClick={() => {
                                    history.push('/admin')
                                }}
                                    className="text-blue-800 text-sm font-semibold rounded-lg bg-green-200 hover:bg-green-500 focus:outline-none focus:shadow-outline focus:bg-green-200 hover:shadow-xs p-3 my-4">
                                    Đi đến trang admin</button> : ''}
                            </form>
                        </div>

                        {/* End of about section */}
                        <div className="my-4" />
                        {/* Experience and education */}
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                            <div className="p-1">
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                    <span clas="text-green-500">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">Danh sách đặt vé</span>
                                </div>
                                <Table columns={columns} dataSource={data} onChange={onChange} />
                            </div>
                            {/* End of Experience and education grid */}
                        </div>
                        {/* End of profile tab */}
                    </div>
                </div>
            </div >
            {loadingInfoUser && (
        
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            display: "flex",
            backgroundColor: "rgb(255 255 255 / 67%)",
            zIndex: 1000,
          }}
        >
          Loading
          {console.log('loading')}
        </div>
      )}
        </div >
    )
}
