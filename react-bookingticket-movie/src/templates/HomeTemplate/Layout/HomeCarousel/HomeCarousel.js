import React, { Component, useState } from 'react';

import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import BtnPlay from '../../../../components/Movie/BtnPlay/index';

export default function HomeCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides"
  }
  const photos = [
    {
      name: 'Photo 1',
      url: './images/banner1.jpg',
      link: 'https://www.youtube.com/watch?v=XRm1P7oGpMQ'
    },
    {
      name: 'Photo 2',
      url: './images/banner2.jpg',
      link: 'https://www.youtube.com/watch?v=VAvF3VBxOac'
    },
    {
      name: 'Photo 3',
      url: './images/banner3.jpg',
      link: 'https://www.youtube.com/watch?v=x3ggvoYbcLo'
    },
    {
      name: 'Photo 4',
      url: './images/banner4.jpg',
      link: 'https://www.youtube.com/watch?v=Vgb1uUmpQNU'
    }
  ]
  return (
    <div>
      <section className="carousel pt-28">
        <Slider {...settings}>
          {photos.map((photo, index) => {
            return (
              <div key={index} className="carousel-inner">
                {/* <img width="100%" src={photo.url} className="img-fluid" /> */}
                {/* <a href="https://www.youtube.com/watch?v=XSGBVzeBUbk" data-lity><i className="fa fa-play" id="viewTrailer" /></a> */}
                <img src={photo.url} alt="anh_carousel" className="img-fluid w-100" />
                <div className="playTrailer" >
                  {/* <a href={photo.link}>
                    <i className="fa fa-play" id="viewTrailer" />
                  </a> */}
                  <i className="fa fa-play" />
                  <BtnPlay cssRoot={"play"} width={150} height={150} urlYoutube={photo.link} />
                </div>
                
              </div>
            )
          })}
        </Slider>
      </section>
    </div>

  )
}