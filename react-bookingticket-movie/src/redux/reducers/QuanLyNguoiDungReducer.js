import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG, SET_DANH_SACH_NGUOI_DUNG, CAP_NHAT_THONG_TIN_NGUOI_DUNG } from "../actions/types/QuanLyNguoiDungType"


let user = {};
if(localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
    userLogin: user,
    errorLogin: null,
    thongTinNguoiDung: {},
    danhSachNguoiDung: [],

    responseAdminUpdateUserSuccess: {},
    isUpdateSuccess: false,
    getUser: {},
    isUpdateFail: false,

    loadingInfoUser: false,
    newUserInfor: {},

    responseRegister: null,
    loadingRegister: false,
    errorRegister: null,
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case 'LOGIN_REQUEST': {
            return { ...state, errorLogin: null }; // error: null trong trường error đang báo lỗi, nhấn đăng nhập lại thì cần reset lại không báo lỗi nữa
          }

        case DANG_NHAP_ACTION : {
            const {thongTinDangNhap} = action;
            localStorage.setItem(USER_LOGIN,JSON.stringify(thongTinDangNhap));
            localStorage.setItem(TOKEN,thongTinDangNhap.accessToken);
            return {...state, userLogin:thongTinDangNhap}
        }

        case 'LOGIN_FAIL': {
            return {
              ...state,
              errorLogin: action.payload
            };
          }

        case SET_THONG_TIN_NGUOI_DUNG :{ 
            state.thongTinNguoiDung = action.thongTinNguoiDung;
            return {...state, loadingInfoUser: false};
        }

        case SET_DANH_SACH_NGUOI_DUNG: {
            state.danhSachNguoiDung = action.danhSachNguoiDung;
            return { ...state };
        }

        case 'GET_INFO_USER_REQUEST': {
            return { ...state, loadingInfoUser: true};
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

        case 'SET_ADMIN_GET_USER_SUCCESS': {
            state.getUser = action.updateUser;
            return {
                ...state,
            };
        }

        case 'SET_ADMIN_CAP_NHAT_NGUOI_DUNG_SUCCESS': {
            state.responseAdminUpdateUserSuccess = action.userUpdate;
            state.getUser = action.userUpdate;
            return {
                ...state,
            };
        }

        case 'SET_ADMIN_CAP_NHAT_NGUOI_DUNG_FAIL': {
            return {
                ...state,
                isUpdateFail: true
            };
        }

        case 'SET_DANG_KY_NGUOI_DUNG_SUCCESS': {
            return {
                ...state,
                responseRegister: action.newUser,
                loadingRegister: false
              };
        }

        case 'SET_ADMIN_THEM_NGUOI_DUNG_SUCCESS': {
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

        case 'SET_ADMIN_THEM_NGUOI_DUNG_FAIL': {
            return {
                ...state,
                errorRegister: action.payload,
                loadingRegister: false,
              };
        }

        case 'RESET_ERROR_REGISTER_LOGIN': {
            return {
              ...state,
              errorRegister: null,
              errorLogin: null,
            };
          }

        default:
            return { ...state }
    }
}