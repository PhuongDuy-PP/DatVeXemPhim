import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Movie from "../Movie";
import { SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from "../../redux/actions/types/QuanLyPhimType";
import { useDispatch, useSelector } from "react-redux";
import '../../scss/style.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function MultipleRowSlick(props) {
  const listMovie = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  useEffect(() => {
    props.fetchListMovieDangChieu();
    props.fetchListMovieSapChieu();
  }, []);
  const renderListMovieDangChieu = () => {
    let listMovie = [...props.listMovie];
    let listMovieDangChieu = listMovie.filter(film => film.dangChieu === true )
    // console.log({listMovieDangChieu})
    if (listMovieDangChieu && listMovieDangChieu.length > 0) {
      return listMovieDangChieu.map((item) => {
        return <Movie key={item.maPhim} Movie={item} LichChieu={"before"} />;
      });
    }
  };
  const renderListMovieSapChieu = () => {
    let listMovie = [...props.listMovieSapChieu];
    let listMovieSapChieu = listMovie.filter(film => film.sapChieu === true )
    // console.log({listMovieSapChieu})
    if (listMovieSapChieu && listMovieSapChieu.length > 0) {
      return listMovieSapChieu.map((item) => {
        return <Movie key={item.maPhim} Movie={item} LichChieu={"after"} />;
      });
    }
  };
  return (
    <div id="lichChieu">
      <section className="listMovie container">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active button"
              id="pills-dangChieu-tab"
              data-toggle="pill"
              href="#pills-dangChieu"
              role="tab"
              aria-controls="pills-dangChieu"
              aria-selected="true"
            >
              Phim ??ang chi???u
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link button"
              id="pills-sapChieu-tab"
              data-toggle="pill"
              href="#pills-sapChieu"
              role="tab"
              aria-controls="pills-sapChieu"
              aria-selected="false"
            >
              Phim s???p chi???u
            </a>
          </li>
        </ul>
        <div className="tab-content listMovie__content" id="pills-tabContent">
          <div
            className="tab-pane fade show active content__item"
            id="pills-dangChieu"
            role="tabpanel"
            aria-labelledby="pills-dangChieu-tab"
          >
            <div className="content__dangChieu">
              <Slider {...listMovie}>{renderListMovieDangChieu()}</Slider>
            </div>
          </div>
          <div
            className="tab-pane fade content__item"
            id="pills-sapChieu"
            role="tabpanel"
            aria-labelledby="pills-sapChieu-tab"
          >
            <div className="content__dangChieu">
              <Slider {...listMovie}>{renderListMovieSapChieu()}</Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listMovie: state.QuanLyPhimReducer.arrFilm,
    listMovieSapChieu: state.QuanLyPhimReducer.arrFilm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListMovieDangChieu: () => {
      const action = {type:SET_FILM_DANG_CHIEU}
      dispatch(action);
    },
    fetchListMovieSapChieu: () => {
      const action = {type:SET_FILM_SAP_CHIEU}
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MultipleRowSlick);
