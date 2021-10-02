import React, { useEffect } from 'react'
import { Button, CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import '../../assets/styles/circle.scss'
import { Tabs, Radio, Space, Rate } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { SET_CHI_TIET_PHIM } from '../../redux/actions/types/QuanLyRapType';
import { layThongTinChiTietPhim } from '../../redux/actions/QuanLyRapAction';
import moment from 'moment'; //npm i moment
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
const { TabPane } = Tabs;




export default function Detail(props) {

    const filmDetail = useSelector(state => state.QuanLyPhimReducer.filmDetail);

    console.log({ filmDetail })

    const dispatch = useDispatch();

    useEffect(() => {
        //Lấy thông tin param từ url
        let { id } = props.match.params;

        dispatch(layThongTinChiTietPhim(id))


    }, [])

    const formatDate = (dateIn) => { // ISODate ~ 2021-3-31
        if (!dateIn) {
          return { dayToday: "loading...", dateShort: "loading...", dateFull: "loading...", dDMmYy: "loading..." }
        }
        if (dateIn?.indexOf("/") !== -1) { // if input 31/3/2021 > output 2021-3-31
          const arr = dateIn?.split('/')
          dateIn = `${arr[2]}-${arr[1]}-${arr[0]}`
        }
        const dateObj = new Date(dateIn);
        const dayNumber = dateObj.getDay(); // trả về thứ dưới dạng một số từ 0 > 6
        const dateNowFormat = new Date().toString().slice(0, 10);
        const dateObjFormat = dateObj.toString().slice(0, 10);
      
        let dayToday = '';
        if (dayNumber === 0) {
          dayToday = "Chủ nhật";
        }
        if (dayNumber === 1) {
          dayToday = "Thứ hai";
        }
        if (dayNumber === 2) {
          dayToday = "Thứ ba";
        }
        if (dayNumber === 3) {
          dayToday = "Thứ tư";
        }
        if (dayNumber === 4) {
          dayToday = "Thứ năm";
        }
        if (dayNumber === 5) {
          dayToday = "Thứ sáu";
        }
        if (dayNumber === 6) {
          dayToday = "Thứ bảy";
        }
        if (dateNowFormat === dateObjFormat) {
          dayToday = "Hôm nay";
        }
      
        const date = `0${dateObj.getDate()}`.slice(-2);
      
        const month = `0${dateObj.getMonth() + 1}`.slice(-2);
      
        const year = dateObj.getFullYear();
      
        const dateFull = dayToday + ', ' + date + ' tháng ' + month + ', ' + year;
      
        const getTime = dateObj.getTime()
      
        return { dayToday, dateShort: dateIn, dateFull, YyMmDd: `${year}.${month}.${date}`, getTime };
      };

    return (
        <div style={{ backgroundImage: `url(${filmDetail.hinhAnh})`, backgroundSize: '100%', backgroundPosition: 'center', minHeight: '100vh' }}>
            <CustomCard
                style={{ paddingTop: 150, minHeight: '100vh' }}
                effectColor="#fff" // required
                color="#fff" // default color is white
                blur={10} // default blur value is 10px
                borderRadius={0} // default border radius value is 10px
            >
                <div className="grid grid-cols-12">
                    <div className="col-span-5 col-start-3">
                        <div className="grid grid-cols-3">
                            <img className="col-span-1" src={filmDetail.hinhAnh} style={{ width: '100%', height: 300 }} alt="123" />
                            <div className="col-span-2 ml-5" style={{ marginTop: '25%' }}>
                                <p className="text-sm">Ngày chiếu: {moment(filmDetail.ngayKhoiChieu).format('DD.MM.YYYY')}</p>
                                <p className="text-4xl leading-3">{filmDetail.tenPhim}</p>
                                <p>{filmDetail.moTa}</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-span-4">
                        <h1 style={{ marginLeft: '15%', color: 'yellow', fontWeight: 'bold', fontSize: 15 }}>Đánh giá</h1>
                        <h1 style={{ marginLeft: '5%' }} className="text-green-400 text-2xl"><Rate allowHalf value={filmDetail.danhGia / 2} style={{ color: '#78ed78', fontSize: 30 }} /></h1>
                        <div className={`c100 p${filmDetail.danhGia * 10} big`}>
                            <span className="text-white">

                                {filmDetail.danhGia * 10}%
                            </span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>

                            </div>

                        </div>
                        <br />

                    </div>
                </div>

                <div className="mt-10 ml-72 w-2/3 container bg-white px-5 py-5" >
                    <Tabs defaultActiveKey="1" centered >
                        <TabPane tab="Lịch chiếu" key="1" style={{ minHeight: 300 }}>
                            <div >
                                <Tabs tabPosition={'left'} >
                                    {filmDetail.heThongRapChieu?.map((htr, index) => {
                                        return <TabPane
                                            tab={<div className="flex flex-row items-center justify-center">
                                                <img src={htr.logo} className="rounded-full w-full" style={{ width: 50 }} alt="..." />
                                                <div className="text-center ml-2">
                                                    {htr.tenHeThongRap}
                                                </div>
                                            </div>}
                                            key={index}>
                                            {htr.cumRapChieu?.map((cumRap, index) => {
                                                return <div className="mt-5" key={index}>
                                                    <div className="flex flex-row">
                                                        <img style={{ width: 60, height: 60 }} src={cumRap.hinhAnh} alt="..." />
                                                        <div className="ml-2">
                                                            <p style={{ fontSize: 20, fontWeight: 'bold', lineHeight: 1 }} >{cumRap.tenCumRap}</p>
                                                            <p className="text-gray-400" style={{ marginTop: 0 }}>{cumRap.diaChi}</p>
                                                        </div>
                                                    </div>
                                                    <div className="thong-tin-lich-chieu grid grid-cols-4">
                                                        {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                                                            return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className="col-span-1 text-green-800 font-bold">
                                                                {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                            </NavLink>
                                                        })}
                                                    </div>
                                                </div>
                                            })}



                                        </TabPane>
                                    })}


                                </Tabs>
                            </div>
                        </TabPane>
                        <TabPane tab="Thông tin" key="2" style={{ minHeight: 300 }}>
                            <div className="row text-black ml-0" >
                                <div className="col-sm-6 col-xs-12">
                                    <div className="row mb-2">
                                        <p className="float-left font-bold" style={{width: '30%'}}>
                                            Ngày công chiếu
                                        </p>
                                        <p className="float-left" style={{width: '70%'}}>
                                            {formatDate(filmDetail.ngayKhoiChieu?.slice(0, 10)).YyMmDd}
                                        </p>
                                    </div>
                                    <div className="row mb-2">
                                        <p className="float-left font-bold" style={{width: '30%'}}>Đạo diễn</p>
                                        <p className="float-left" style={{width: '70%'}}>
                                            {" "}
                                            Adam Wingard{" "}
                                        </p>
                                    </div>
                                    <div className="row mb-2">
                                        <p className="float-left font-bold" style={{width: '30%'}}>
                                            Diễn viên
                                        </p>
                                        <p className="float-left" style={{width: '70%'}}>
                                            Kyle Chandler, Rebecca Hall, Eiza González, Millie Bobby Brown
                                        </p>
                                    </div>
                                    <div className="row mb-2">
                                        <p className="float-left font-bold" style={{width: '30%'}}>Thể Loại</p>
                                        <p className="float-left" style={{width: '70%'}}>
                                            Hành động, giả tưởng, ly kỳ, thần thoại
                                        </p>
                                    </div>
                                    <div className="row mb-2">
                                        <p className="float-left font-bold" style={{width: '30%'}}>
                                            Định dạng
                                        </p>
                                        <p className="float-left" style={{width: '70%'}}>
                                            2D/Digital
                                        </p>
                                    </div>
                                    <div className="row mb-2">
                                        <p className="float-left font-bold" style={{width: '30%'}}>
                                            Quốc Gia SX
                                        </p>
                                        <p className="float-left" style={{width: '70%'}}>Mỹ</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xs-12">
                                    <div className="row mb-2">
                                        <p className="float-left font-bold pl-5" style={{width: '30%'}}>Nội dung</p>
                                    </div>
                                    <div className="row mb-2 pl-5" style={{width: '95%'}}>
                                        <p>{filmDetail.moTa}</p>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="Đánh giá" key="3" style={{ minHeight: 300 }}>
                            Đánh giá
                        </TabPane>
                    </Tabs>
                </div>

            </CustomCard>

        </div>
    )
}