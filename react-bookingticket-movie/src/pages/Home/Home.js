import React, { useEffect } from 'react';
import HomeMenu from './HomeMenu/HomeMenu';
//kết nối redux

import {useSelector, useDispatch} from 'react-redux';
import Film from '../../components/Film/Film';
import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick';
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction';

export default function Home(props) {
    const {arrFilm} = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();
    console.log('propsHome', props);

    // const renderFilms = () => {
    //     return arrFilm.map((phim, index) => {
    //         return <Film key={index} />
    //     })
    // }

    useEffect(() => {
        const action = layDanhSachPhimAction();
        dispatch(action);   //dispatch function từ thunk
    }, []);

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                <MultipleRowSlick arrFilm={arrFilm}/>
                    {/* <div className="flex flex-wrap -m-4" style={{justifyContent: 'center'}}>
                        {renderFilm()}
                    </div> */}
                </div>
            </section>

            <div className="mx-36">
                <HomeMenu />
            </div>
           
        </div>
    );
}