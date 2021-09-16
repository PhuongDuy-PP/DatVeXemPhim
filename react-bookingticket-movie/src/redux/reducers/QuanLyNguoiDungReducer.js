import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG, SET_DANH_SACH_NGUOI_DUNG, CAP_NHAT_THONG_TIN_NGUOI_DUNG } from "../actions/types/QuanLyNguoiDungType"


let user = {};
if(localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
    userLogin: user,
    thongTinNguoiDung: {},
    danhSachNguoiDung: [],

    newUserInfor: {},

    responseRegister: null,
    loadingRegister: false,
    errorRegister: null,
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case DANG_NHAP_ACTION : {
            const {thongTinDangNhap} = action;
            localStorage.setItem(USER_LOGIN,JSON.stringify(thongTinDangNhap));
            localStorage.setItem(TOKEN,thongTinDangNhap.accessToken);
            return {...state, userLogin:thongTinDangNhap}
        }

        case SET_THONG_TIN_NGUOI_DUNG :{ 
            state.thongTinNguoiDung = action.thongTinNguoiDung;
            return {...state};
        }

        case SET_DANH_SACH_NGUOI_DUNG: {
            state.danhSachNguoiDung = action.danhSachNguoiDung;
            return { ...state };
        }

        case CAP_NHAT_THONG_TIN_NGUOI_DUNG: {
            state.newUserInfor = action.newUserInfor;
            const currentUser = {
                email: state.newUserInfor.email,
                hoTen: state.newUserInfor.hoTen,
                maLoaiNguoiDung: state.userLogin.maLoaiNguoiDung,
                matKhau: state.thongTinNguoiDung.matKhau,
                maNhom: state.newUserInfor.maNhom,
                soDT: state.newUserInfor.soDT,
                taiKhoan: state.newUserInfor.taiKhoan,
                accessToken: localStorage.getItem(TOKEN)
            }
            localStorage.setItem(USER_LOGIN, JSON.stringify(currentUser));
            return {...state};
        }

        case 'SET_DANG_KY_NGUOI_DUNG_SUCCESS': {
            return {
                ...state,
                responseRegister: action.newUser,
                loadingRegister: false
              };
        }

        case 'SET_DANG_KY_NGUOI_DUNG_FAIL': {
            return {
                ...state,
                errorRegister: action.payload.error,
                loadingRegister: false,
              };
        }

        case 'RESET_ERROR_LOGIN_REGISTER': {
            return {
              ...state,
              errorRegister: null,
              
            };
          }

        default:
            return { ...state }
    }
}