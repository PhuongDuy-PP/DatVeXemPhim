import { SET_DANH_SACH_PHIM, SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU, SET_THONG_TIN_PHIM } from "../actions/types/QuanLyPhimType"
import { SET_CHI_TIET_PHIM } from "../actions/types/QuanLyRapType";

const stateDefault = {
    arrFilm: [
        {
            "maPhim": 4893,
            "tenPhim": "Tenett 2",
            "biDanh": "tenett-2",
            "trailer": "https://www.youtube.com/embed/L3pk_TBkihU",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/tenet_gp01.jpg",
            "moTa": "Tenet là một bộ phim hành động - giật gân và khoa học viễn tưởng phát hành năm 2020 của Mỹ, do Christopher Nolan đạo diễn kiêm biên kịch. Phim có sự tham gia của John David Washington, Robert Pattinson, Elizabeth Debicki, Dimple Kapadia, Michael Caine, cùng Kenneth Branagh.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-08-29T00:00:00",
            "danhGia": 10,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          }
    ], 
    dangChieu: true,
    sapChieu:true,
    arrFilmDefault: [],
    filmDetail:{},

    thongTinPhim:{}
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case SET_DANH_SACH_PHIM: {
            state.arrFilm = action.arrFilm;
            state.arrFilmDefault = state.arrFilm;
            state.arrFilmSapChieu = action.arrFilm;
            return {...state}
        }
        case SET_FILM_DANG_CHIEU: {
            state.dangChieu = !state.dangChieu;

            state.arrFilm = state.arrFilmDefault.filter(film => film.dangChieu === true );
            return {...state}
        }
        case SET_FILM_SAP_CHIEU : {
            state.sapChieu = !state.sapChieu;

            state.arrFilm = state.arrFilmDefault.filter(film => film.sapChieu === true );
            return {...state}
        }

        case SET_CHI_TIET_PHIM :{
            state.filmDetail = action.filmDetail;
            return {...state};
        }

        case SET_THONG_TIN_PHIM: {
            state.thongTinPhim = action.thongTinPhim;
            return {...state}
        }

        default: return {...state}
    }
}