import React, {useEffect} from 'react';
import { Carousel } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {getCarouselAction} from '../../../../redux/actions/CarouselAction';
import './HomeCarousel.css';


const contentStyle = {
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
  };

export default function HomeCarousel(props) {
    const {arrImg} = useSelector(state => state.CarouselReducer);
    const dispatch = useDispatch();

    // sẽ tự kích hoạt khi component load ra
    useEffect(() => {
        dispatch(getCarouselAction());
    }, []);

    console.log('arrImg', arrImg);

      const renderImg = () => {
          return arrImg.map((item, index) => {
              return <div key={index}>
              <div style={{...contentStyle, backgroundImage: `url(${item.hinhAnh})`}}>
                  <img src={item.hinhAnh} className="w-full opacity-0" alt="123" />
              </div>
          </div>
          })
      }

    return (
        <Carousel effect="fade">
            {renderImg()}
        </Carousel>
    );
}