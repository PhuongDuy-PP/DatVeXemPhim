import { SET_CAROUSEL } from "../actions/types/CarouselType";


const stateDefault = {
    arrImg: [
        {
            "maBanner": 1,
            "maPhim": 1282,
            "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/04/trang-ti-16194117174325.jpg"
            // "hinhAnh": "http://movieapinew.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png"
        }
    ]
};

export const CarouselReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case SET_CAROUSEL: {
            state.arrImg = action.arrImg;
            return {...state}
        }

        default: return {...state}
    }
}