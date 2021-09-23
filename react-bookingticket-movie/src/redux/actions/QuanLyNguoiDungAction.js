import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG, SET_DANH_SACH_NGUOI_DUNG, CAP_NHAT_THONG_TIN_NGUOI_DUNG } from "./types/QuanLyNguoiDungType";
import {history} from '../../App'
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";



export const dangNhapAction = (thongTinDangNhap) => {

    return async (dispatch) => {
        
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content
                });
                //Chuyển hướng đăng nhập về trang trước đó
                history.push("/");
            }
            dispatch(layThongTinNguoiDungAction());

            console.log('result', result);

        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const layDanhSachNguoiDungAction = () => {
    
    return async (dispatch) => {
        dispatch({
            type: 'GET_INFO_USER_REQUEST'
        });

        try {
            const result = await quanLyNguoiDungService.layDanhsachNguoiDung();

            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_DANH_SACH_NGUOI_DUNG,
                    danhSachNguoiDung: result.data.content
                });

            }

            console.log('result', result);
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const capNhatThongTinNguoiDungAction = (user) => {
    return async (dispatch) => {
    try{
        const result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(user);
        console.log(result);
        if (result.data.statusCode === 200) {
            dispatch({
                type: CAP_NHAT_THONG_TIN_NGUOI_DUNG,
                newUserInfor: result.data.content
            });

        }
    } catch (error) {
        console.log('error', error);
        }
    }
}

export const dangKyNguoiDungAction = (newUser) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangKy(newUser);
            if(result.data.statusCode === 200){
                dispatch({
                    type: 'SET_DANG_KY_NGUOI_DUNG_SUCCESS',
                    newUser: result.data.content
                });
            }
        } catch (error) {
            // console.log({error})
            dispatch({
                type: 'SET_DANG_KY_NGUOI_DUNG_FAIL',
                payload: {
                  error: error.response.data.content,
                },
            });
        }
    }
}

export const adminThemNguoiDungAction = (newUser) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.adminThemNguoiDung(newUser)
            if(result.data.statusCode === 200){
                dispatch({
                    type: 'SET_ADMIN_THEM_NGUOI_DUNG_SUCCESS',
                    newUser: result.data.content
                });
            }
        } catch (error) {
            // console.log('error', error.response.data);
            dispatch({
                type: 'SET_ADMIN_THEM_NGUOI_DUNG_FAIL',
                payload: {
                  error: error.response.data.content,
                },
            });
        }
    }
}

export const timKiemNguoiDungAction = (data) => {
    return async (dispatch) => {
        try{
            const result = await quanLyNguoiDungService.timKiemNguoiDung(data);
            console.log(result);
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_DANH_SACH_NGUOI_DUNG,
                    danhSachNguoiDung: result.data.content
                });
    
            }
        } catch (error) {
            console.log('error', error);
            }
        }
}

export const xoaNguoiDungAction = (taiKhoan) => {
    

    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyNguoiDungService.xoaNguoiDung(taiKhoan);
            console.log('result',result.data.content);
            alert('Xoá người dùng thành công !');
            //Sau khi xoá load lại danh sách phim mới;
            dispatch(layDanhSachNguoiDungAction())
            
        }catch (errors) {
            console.log('errors',errors.response?.data)
        }
    }
}

export const resetErrorRegisterAction = () => {
    return (dispatch) => {
      dispatch({
        type: 'RESET_ERROR_REGISTER',
      });
    };
  };


export const layThongTinNguoiDungAction = () => {

    return async (dispatch) => {
        
        try {
            
            dispatch(displayLoadingAction);
            dispatch({
                type: 'GET_INFO_USER_REQUEST'
              })
            const result = await quanLyNguoiDungService.layThongTinNguoiDung();
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                });
            }
            await dispatch(hideLoadingAction);

            console.log('result', result);

        } catch (error) {
            console.log('error', error.response.data);
        }

    }

}