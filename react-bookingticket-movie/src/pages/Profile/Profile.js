import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../App';
import { layThongTinNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction';
import { Table } from 'antd';

export default function Profile() {
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
    const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layThongTinNguoiDungAction());
    }, []);
    const danhSachDatVe = thongTinNguoiDung.thongTinDatVe;
    console.log('Thông tin người dùng: ');
    console.log(thongTinNguoiDung.thongTinDatVe);

    const getIdSeat = (danhSachGhe) => {
        const reduceShowSeat = danhSachGhe
        .reduce((listSeat, seat) => {
          return [...listSeat, seat.tenGhe];
        }, [])
        .join(", ");
        return reduceShowSeat.length > 50 ? reduceShowSeat.substr(0, 50) + '...': reduceShowSeat;
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
                            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{userLogin.hoTen}</h1>
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
                                        <input className="cursor-not-allowed appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="tai-khoan" type="text" value={userLogin.taiKhoan} disabled></input>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Họ tên</div>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="ho-ten" type="text" value={userLogin.hoTen}></input>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Email</div>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="text" value={userLogin.email}></input>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Số điện thoại</div>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone-number" type="text" value={userLogin.soDT}></input>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Mật khẩu</div>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="password" type="text" value={thongTinNguoiDung.matKhau}></input>
                                        {/* <div className="relative w-full">
                                            <div className="absolute inset-y-0 right-0 flex items-center px-2">
                                                <input className="hidden" id="toggle" type="checkbox" />
                                                <label className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label" htmlFor="toggle">show</label>
                                            </div>
                                            <input className="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-indigo-700 focus:bg-white text-gray-700 pr-16 font-mono js-password" id="password" type="password" autoComplete="off"
                                            value={userLogin.matKhau} />
                                        </div> */}

                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Loại người dùng</div>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="loai-nguoi-dung" type="text" value={userLogin.maLoaiNguoiDung}></input>
                                    </div>

                                </div>
                            </div>
                            <button onClick={() => {
                                history.push('/')
                            }}
                                className="mr-2 text-blue-800 text-sm font-semibold rounded-lg bg-green-200 hover:bg-green-500 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                                Cập nhật</button>
                            
                            {userLogin.maLoaiNguoiDung === 'QuanTri' ? <button onClick={() => {
                                                                            history.push('/admin')
                                                                        }}
                                                                        className="text-blue-800 text-sm font-semibold rounded-lg bg-green-200 hover:bg-green-500 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                                Đi đến trang admin</button>:''}

                            
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
        </div >
    )
}
