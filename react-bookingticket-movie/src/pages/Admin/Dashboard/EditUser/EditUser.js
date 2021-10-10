import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { adminThemNguoiDungAction, adminLayThongTinNguoiDungAction, adminCapNhatThongTinNguoiDungAction, resetErrorLoginRegister } from '../../../../redux/actions/QuanLyNguoiDungAction';
import Swal from "sweetalert2";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { GROUPID } from '../../../../util/settings/config';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, Zoom, cssTransition } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


function EditUser(props) {
    const { responseAdminUpdateUserSuccess, errorUpdate, userLogin, thongTinNguoiDung, newUserInfor, loadingInfoUser } = useSelector(state => state.QuanLyNguoiDungReducer);
    // console.log({responseAdminUpdateUserSuccess})
    const taiKhoan = props.match.params.taiKhoan;
    if (props.listUser) {
        var user = props.listUser.find((item) => {
            return item.taiKhoan === taiKhoan;
        })
        // console.log({user});
    }

    const [typePassword, settypePassword] = useState("password");
    // const [userDetail, setUserDetail] = useState({
    //     taiKhoan: user?.taiKhoan ?? '',
    //     email: user?.email ?? '',
    //     soDt: user?.soDt ?? '',
    //     maNhom: `${GROUPID}`,
    //     matKhau: user?.matKhau ?? '',
    //     maLoaiNguoiDung: user?.maLoaiNguoiDung ?? '',
    //     hoTen: user?.hoTen ?? ''
    // })
    const dispatch = useDispatch();

    // const printValues = (data) => {

    //     let user = {
    //         ...data,
    //         taiKhoan: userDetail.taiKhoan,
    //         maLoaiNguoiDung: userDetail.maLoaiNguoiDung,
    //         maNhom: `${GROUPID}`
    //     }
    //     // console.log({ user })
    //     dispatch(adminCapNhatThongTinNguoiDungAction(user));
    //     console.log({ errorUpdate });
    // };

    // useEffect(() => {
    //     dispatch(resetErrorLoginRegister())
    //     const taiKhoan = props.match.params.taiKhoan;
    //     if (props.listUser) {
    //         let user = props.listUser.find((item) => {
    //             return item.taiKhoan === taiKhoan;
    //         })
    //         //   console.log({user});
    //         setUserDetail(user);
    //     }
    // }, []);

    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const schema = yup.object().shape({
        matKhau: yup.string().required("*Mật khẩu không được bỏ trống !"),
        email: yup
            .string()
            .required("*Email không được bỏ trống !")
            .email("* Email không hợp lệ "),
        soDt: yup
            .string()
            .required("*Số điện thoại không được bỏ trống !")
            .matches(phoneRegExp, "Số điện thoại không hợp lệ!"),
        hoTen: yup.string().required("*Tên không được bỏ trống !"),
    });

    // sử dụng schema đã tạo ở trên vào RHF
    // const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const formik = useFormik({
        initialValues: {
            taiKhoan: user?.taiKhoan ?? '',
            email: user?.email ?? '',
            soDt: user?.soDt ?? '',
            maNhom: `${GROUPID}`,
            matKhau: user?.matKhau ?? '',
            maLoaiNguoiDung: user?.maLoaiNguoiDung ?? '',
            hoTen: user?.hoTen ?? ''
        },
        validationSchema: schema,
        onSubmit: user => {
            console.log('values', user);

            dispatch(adminCapNhatThongTinNguoiDungAction(user));

        },
    });

    useEffect(() => {
        console.log({ responseAdminUpdateUserSuccess });
        if (responseAdminUpdateUserSuccess) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Cập nhật thành công",
                showConfirmButton: false,
                timer: 2000,
            });
        }
    }, [responseAdminUpdateUserSuccess]);


    // const handleChange = e => {
    //     console.log({ e })
    //     const { name, value } = e.target;

    //     setUserDetail(user => ({
    //         ...user,
    //         taiKhoan: userDetail?.taiKhoan,
    //         maNhom: `${GROUPID}`,
    //         [name]: value
    //     }));

    // };
    //   console.log({userDetail});
    const handleToggleHidePassword = () => {
        if (typePassword === "password") {
            settypePassword("text");
        } else {
            settypePassword("password");
        }
    };

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="mt-20 lg:col-span-2">
                    <h3 className="text-4xl">Cập nhật người dùng</h3>
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-2">
                            <label htmlFor="taiKhoan">Tài Khoản</label>
                            <input
                                type="text"
                                id="taiKhoan"
                                className="cursor-not-allowed h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                value={formik.values.taiKhoan}
                                disabled
                            />

                        </div>
                        <div className="md:col-span-3 relative">
                            <label htmlFor="password">Mật khẩu</label>
                            <input
                                type={typePassword}
                                name="matKhau"
                                id="password"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                value={formik.values.matKhau}
                                onChange={formik.handleChange}
                            // ref={register}
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
                            {/* {errors.matKhau &&
                            <div
                                className="alert alert-danger mt-2 text-center"
                            >
                                <span> {errors.matKhau?.message}</span>
                            </div>
                        } */}
                            {formik.errors.matKhau && formik.touched.matKhau && (
                                <p className="text-red-500 absolute">{formik.errors.matKhau}</p>
                            )}
                        </div>
                        <div className="md:col-span-2 mt-4">
                            <label htmlFor="hoTen">Họ tên</label>
                            <input
                                type="text"
                                name="hoTen"
                                id="hoTen"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                value={formik.values.hoTen}
                                onChange={formik.handleChange}
                            />
                            {/* {errors.hoTen &&
                            <div
                                className="alert alert-danger mt-2 text-center"
                            >
                                <span> {errors.hoTen?.message}</span>
                            </div>
                        } */}
                            {formik.errors.hoTen && formik.touched.hoTen && (
                                <p className="text-red-500 absolute">{formik.errors.hoTen}</p>
                            )}
                        </div>
                        <div className="md:col-span-3 mt-4">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                            {/* {errors.email &&
                            <div
                                className="alert alert-danger mt-2 text-center"
                            >
                                <span> {errors.email?.message}</span>
                            </div>
                        } */}
                            {formik.errors.email && formik.touched.email && (
                                <p className="text-red-500 absolute">{formik.errors.email}</p>
                            )}
                        </div>
                        <div className="md:col-span-2 mt-4">
                            <label htmlFor="soDt">Số điện thoại</label>
                            <input
                                type="text"
                                name="soDt"
                                id="soDt"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                value={formik.values.soDt}
                                onChange={formik.handleChange}
                            />
                            {/* {errors.soDt &&
                            <div
                                className="col-start-2 alert alert-danger mt-2 text-center"
                            >
                                <span> {errors.soDt?.message}</span>
                            </div>
                        } */}
                            {formik.errors.soDt && formik.touched.soDt && (
                                <p className="text-red-500 absolute">{formik.errors.soDt}</p>
                            )}
                        </div>
                        <div className="md:col-span-2 mt-4">
                            <label htmlFor="maLoaiNguoiDung">Mã loại người dùng</label>
                            <select
                                id="maLoaiNguoiDung"
                                name="maLoaiNguoiDung"
                                onChange={formik.handleChange}
                                value={formik.values.maLoaiNguoiDung}
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            >
                                <option value="KhachHang">KhachHang</option>
                                <option value="QuanTri">QuanTri</option>
                            </select>
                        </div>
                        <div className="md:col-span-1 mt-4">
                            <label htmlFor="maNhom">Mã nhóm</label>
                            <input
                                type="text"
                                id="maNhom"

                                className="cursor-not-allowed h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                value={formik.values.maNhom}
                                disabled
                            />
                        </div>
                        <div className="md:col-span-5 text-right mt-3">
                            <div className="inline-flex items-end">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cập nhật</button>
                            </div>
                        </div>
                    </div>
                    {errorUpdate && responseAdminUpdateUserSuccess === null && <div className="alert-toast fixed bottom-0 right-0 m-8 w-5/6 md:w-full max-w-sm">
                        <input type="checkbox" className="hidden" id="footertoast" />
                        <label className="close cursor-pointer flex items-start justify-between w-full p-2 bg-red-500 h-24 rounded shadow-lg text-white" title="close" htmlFor="footertoast">
                            {errorUpdate}
                            <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                            </svg>
                        </label>
                    </div>}
                </div>

            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        listUser: state.QuanLyNguoiDungReducer.danhSachNguoiDung,
    }
}
export default connect(mapStateToProps, null)(EditUser);