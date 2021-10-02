import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { CarouselReducer } from './reducers/CarouselReducer';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer';
import { QuanLyRapReducer } from './reducers/QuanLyRapReducer';
import { QuanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer';
import { QuanLyDatVeReducer } from './reducers/QuanLyDatVeReducer';
import { LoadingReducer } from './reducers/LoadingReducer';
import { ModalTrailerReducer } from './reducers/ModalTrailerReducer'

import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';


const middleWareSaga = createMiddleWareSaga();

const rootReducer = combineReducers({
    // State ứng dụng
    CarouselReducer,
    QuanLyPhimReducer,
    QuanLyRapReducer,
    QuanLyNguoiDungReducer,
    QuanLyDatVeReducer,
    LoadingReducer,
    ModalTrailerReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk, middleWareSaga));

middleWareSaga.run(rootSaga);