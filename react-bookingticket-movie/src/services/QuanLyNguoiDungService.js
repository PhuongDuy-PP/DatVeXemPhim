import { baseService } from "./baseService";
import { GROUPID} from '../util/settings/config'
export class QuanLyNguoiDungService  extends baseService{

    constructor() {
        super();
    }

    dangNhap = (thongTinDangNhap) => { // {taiKhoan:'',matKhau:''}
        return this.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap);
    }
    
    layThongTinNguoiDung = () => {
        return this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan');
    }

    layDanhsachNguoiDung = () => {
        return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`)
    }

    capNhatThongTinNguoiDung = (data) => {
        return this.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, data);
    }

    dangKyNguoiDung = (newUser) => {
        return this.post(`/api/QuanLyNguoiDung/DangKy`, newUser);
    }
  
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();