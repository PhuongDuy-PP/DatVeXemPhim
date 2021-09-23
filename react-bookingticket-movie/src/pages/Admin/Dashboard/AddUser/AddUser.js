import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { adminThemNguoiDungAction } from '../../../../redux/actions/QuanLyNguoiDungAction';
import Swal from "sweetalert2";

export default function AddUser(props) {
    const [typePassword, settypePassword] = useState("password");
    const dispatch = useDispatch();

    const handleToggleHidePassword = () => {
        if (typePassword === "password") {
            settypePassword("text");
        } else {
            settypePassword("password");
        }
    };

    const { responseRegister, loadingRegister, errorRegister } = useSelector(
        (state) => state.QuanLyNguoiDungReducer
    );

    useEffect(() => {
        console.log({ responseRegister });
        if (responseRegister) {
            // đăng ký thành công thì đăng nhập, responseRegister để bỏ qua componentditmount
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Đăng ký thành công",
                showConfirmButton: false,
                timer: 2000,
            });
            
        }
    }, [responseRegister]);

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDT: '',
            hoTen: '',
            maNhom: '',
            maLoaiNguoiDung: ''
        },
        onSubmit: user => {
            console.log('values', user);
            if (!loadingRegister && !responseRegister) {
                
                dispatch(adminThemNguoiDungAction(user));
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="mt-16 lg:col-span-2">
                <h3 className="text-4xl">Thêm người dùng</h3>
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-2">
                        <label htmlFor="taiKhoan">Tài Khoản</label>
                        <input 
                            type="text" 
                            name="taiKhoan" 
                            id="taiKhoan" 
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="md:col-span-3 relative">
                        <label htmlFor="password">Mật khẩu</label>
                        <input 
                            type={typePassword} 
                            name="matKhau" 
                            id="password" 
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            onChange={formik.handleChange}
                        />
                        <i onClick={handleToggleHidePassword}>
                                    {typePassword !== "password" ? (
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className="cursor-pointer w-6 h-6 absolute transform -translate-y-1/2 right-2" 
                                            style={{top: '68%'}}
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
                                            style={{top: '68%'}}
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            stroke="currentColor"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    )}
                            </i>
                    </div>
                    <div className="md:col-span-2 mt-4">
                        <label htmlFor="hoTen">Họ tên</label>
                        <input 
                            type="text" 
                            name="hoTen" 
                            id="hoTen" 
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="md:col-span-3 mt-4">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            id="email" 
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="md:col-span-2 mt-4">
                        <label htmlFor="soDT">Số điện thoại</label>
                        <input 
                            type="text" 
                            name="soDT" 
                            id="soDT" 
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="md:col-span-2 mt-4">
                        <label htmlFor="maLoaiNguoiDung">Mã loại người dùng</label>
                        <input 
                            type="text" 
                            name="maLoaiNguoiDung" 
                            id="maLoaiNguoiDung" 
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="md:col-span-1 mt-4">
                        <label htmlFor="maNhom">Mã nhóm</label>
                        <input 
                            type="text" 
                            name="maNhom" 
                            id="maNhom" 
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="md:col-span-5 text-right mt-3">
                        <div className="inline-flex items-end">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}