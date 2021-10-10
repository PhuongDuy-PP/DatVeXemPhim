import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import { useLocation, useHistory } from "react-router-dom";
import { dangKyNguoiDungAction, resetErrorLoginRegister } from '../../redux/actions/QuanLyNguoiDungAction';
import { GROUPID } from '../../util/settings/config';
import Swal from "sweetalert2";
import { history } from '../../App';
import './Register.css';
import * as yup from "yup";

export default function Register(props) {
    const dispatch = useDispatch();
    let location = useLocation();
    const history = useHistory();
    const [typePassword, settypePassword] = useState("password");

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
        // console.log({ responseRegister });
        if (responseRegister) {
            // đăng ký thành công thì đăng nhập, responseRegister để bỏ qua componentditmount
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Bạn đã đăng ký thành công",
                showConfirmButton: false,
                timer: 2000,
            });
            history.push("/login", location.state);
        }
    }, [responseRegister]);

    useEffect(() => {
        return () => {
            dispatch(resetErrorLoginRegister());
        };
    }, []);

    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const signupUserSchema = yup.object().shape({
        taiKhoan: yup.string().required("*Tài khoản không được bỏ trống !"),
        matKhau: yup.string().required("*Mật khẩu không được bỏ trống !"),
        email: yup
            .string()
            .required("*Email không được bỏ trống !")
            .email("* Email không hợp lệ "),
        soDT: yup
            .string()
            .required("*Số điện thoại không được bỏ trống !")
            .matches(phoneRegExp, "Số điện thoại không hợp lệ!"),
        hoTen: yup.string().required("*Tên không được bỏ trống !"),
    });

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDT: '',
            hoTen: '',
            maNhom: `${GROUPID}`
        },
        validationSchema: signupUserSchema,
        onSubmit: values => {
            console.log('values', values);
            if (!loadingRegister && !responseRegister) {
                const action = dangKyNguoiDungAction(values);
                dispatch(action);
            }
        },
    });
    // console.log({errorRegister})
    return (
        
        <form onSubmit={formik.handleSubmit} className="lg:w-1/2 xl:max-w-screen-sm">
            <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
                <div className="cursor-pointer flex items-center">
                    <div>
                        <svg className="w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 225 225" style={{ enableBackground: 'new 0 0 225 225' }} xmlSpace="preserve">
                            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n                                    .st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}\n                                " }} />
                            <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                                <g>
                                    <path id="Layer0_0_1_STROKES" className="st0" d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <NavLink to="/" className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">BOSS BABY</NavLink>
                </div>
            </div>
            <div className="mt-0 mb-5 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                xl:text-bold">Đăng ký</h2>
                <div className="mt-12">
                    <div>
                        <div>
                            <div className="text-sm font-bold text-gray-700 tracking-wide">Tài khoản</div>
                            <input name="taiKhoan" onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập vào tài khoản" />
                            {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                                <p className="text-red-500">{formik.errors.taiKhoan}</p>
                            )}
                        </div>
                        <div className="mt-8 relative">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Mật khẩu
                                </div>
                            </div>
                            <input 
                                type={typePassword} 
                                name="matKhau" 
                                onChange={formik.handleChange} 
                                className="w-full text-lg py-2 pr-9 border-b border-gray-300 focus:outline-none focus:border-indigo-500" 
                                placeholder="Nhập vào mật khẩu" 
                            />
                            <i onClick={handleToggleHidePassword}>
                                {typePassword !== "password" ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="cursor-pointer w-6 h-6 absolute transform -translate-y-1/2 right-2"
                                        style={{ top: '68%' }}
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
                                        style={{ top: '68%' }}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                    </svg>
                                )}
                            </i>
                            {formik.errors.matKhau && formik.touched.matKhau && (
                                <p className="text-red-500 absolute">{formik.errors.matKhau}</p>
                            )}
                        </div>
                        <div className="mt-8">
                            <div className="text-sm font-bold text-gray-700 tracking-wide">Họ tên</div>
                            <input name="hoTen" onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập họ tên" />
                            {formik.errors.hoTen && formik.touched.hoTen && (
                                <p className="text-red-500">{formik.errors.hoTen}</p>
                            )}
                        </div>
                        
                        <div className="mt-8">
                            <div className="text-sm font-bold text-gray-700 tracking-wide">Email</div>
                            <input name="email" onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập email" />
                            {formik.errors.email && formik.touched.email && (
                                <p className="text-red-500">{formik.errors.email}</p>
                            )}
                        </div>
                        
                        <div className="mt-8">
                            <div className="text-sm font-bold text-gray-700 tracking-wide">Số điện thoại</div>
                            <input name="soDT" onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập số điện thoại" />
                            {formik.errors.soDT && formik.touched.soDT && (
                                <p className="text-red-500">{formik.errors.soDT}</p>
                            )}
                        </div>
                        <div className="mt-10">
                            <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                  shadow-lg">
                                Đăng ký
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {errorRegister && (
                <div className="alert-toast fixed top-0 right-0 m-8 w-5/6 md:w-full max-w-sm">
                    <input type="checkbox" className="hidden" id="footertoast" />
                    <label className="close cursor-pointer flex items-start justify-between w-full p-2 bg-red-500 h-24 rounded shadow-lg text-white" title="close" htmlFor="footertoast">
                        {errorRegister}
                        <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                        </svg>
                    </label>
                </div>
            )}
        </form>
        
    )
}