import { quanLyPhimService } from '../../services/QuanLyPhimService';
import { SET_DANH_SACH_PHIM } from './types/QuanLyPhimType';

export const layDanhSachPhimAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.layDanhSachPhim();

            dispatch({
                type: SET_DANH_SACH_PHIM,
                arrFilm: result.data.content,
            })
        } catch (error) {
            console.log('error', error);
        }
    };
}

export const xoaPhimAction = (maPhim) => {
    

    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyPhimService.xoaPhim(maPhim);
            console.log('result',result.data.content);
            alert('Xoá phim thành công !');
            //Sau khi xoá load lại danh sách phim mới;
            dispatch(layDanhSachPhimAction())
            
        }catch (errors) {
            console.log('errors',errors.response?.data)
        }
    }
}