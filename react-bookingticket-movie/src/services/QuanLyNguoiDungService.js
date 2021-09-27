import { baseService } from "./baseService";
import { GROUPID} from '../util/settings/config'
export class QuanLyNguoiDungService  extends baseService{

    constructor() {
        super();
    }

    dangNhap = (thongTinDangNhap) => { // {taiKhoan:'',matKhau:''}
        return this.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap);
    }
    dangKy = (newUser) => {
        return this.post(`/api/QuanLyNguoiDung/DangKy`, newUser);
    }
    
    layThongTinNguoiDung = () => {
        return this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan');
    }

    layDanhsachNguoiDung = () => {
        return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`)
    }

    // API này dùng riêng cho user
    capNhatThongTinNguoiDung = (data) => {
        return this.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, data);
    }

    // API này dành riêng cho admin
    adminCapNhatThongTinNguoiDung = (data) => {
        return this.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, data)
    }

    timKiemNguoiDung = (data='') => {
        if(data.trim() != ''){
            return this.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUPID}&&tuKhoa=${data}`);
        }
        return this.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUPID}`);
    }

    xoaNguoiDung = (taiKhoan) =>{
        return this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
    }

    // API này chỉ dành cho admin thêm user bao gồm khách hàng và quản trị
    adminThemNguoiDung = (newUser) => {
        return this.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, newUser);
    }

    adminLayThongTinNguoiDung = (taiKhoan) => {
        return this.post(`/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`);
    }
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();