import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Checkout.module.css';
import './Checkout.css';
import { CheckOutlined, CloseOutlined, UserOutlined ,SmileOutlined,HomeOutlined} from '@ant-design/icons';
import { datGheAction, layChiTietPhongVeAction } from '../../redux/actions/QuanLyDatVeAction';
import { connection } from '../../index';
import _ from 'lodash';

export default function Checkout(props) {
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

    const { chiTietPhongVe, danhSachGheDangDat,danhSachGheKhachDat } = useSelector(state => state.QuanLyDatVeReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        //gọi hàm tạo ra 1 async function
        const action = layChiTietPhongVeAction(props.match.params.id);

        //dispatch function này đi
        dispatch(action);

        //Vừa vào trang load tất cả ghế của các người khác đang đặt
        // connection.invoke('loadDanhSachGhe',props.match.params.id);


        //Load danh sách ghế đang đặt từ server về (lắng nghe tín hiệu từ server trả về)
        // connection.on("loadDanhSachGheDaDat", (dsGheKhachDat) => {
        //     console.log('danhSachGheKhachDat',dsGheKhachDat);
        //     //Bước 1: Loại mình ra khỏi danh sách 
        //     dsGheKhachDat = dsGheKhachDat.filter(item => item.taiKhoan !== userLogin.taiKhoan);
        //     //Bước 2 gộp danh sách ghế khách đặt ở tất cả user thành 1 mảng chung 

        //     let arrGheKhachDat = dsGheKhachDat.reduce((result,item,index)=>{
        //         let arrGhe = JSON.parse(item.danhSachGhe);

        //         return [...result,...arrGhe];
        //     },[]);

        //     //Đưa dữ liệu ghế khách đặt cập nhật redux
        //     arrGheKhachDat = _.uniqBy(arrGheKhachDat,'maGhe');

        //     //Đưa dữ liệu ghế khách đặt về redux
        //     dispatch({
        //         type:'DAT_GHE',
        //         arrGheKhachDat
        //     })
            
        //  })

         //Cài đặt sự kiện khi reload trang
        //  window.addEventListener("beforeunload", clearGhe);

        //  return () => {
        //      clearGhe();
        //      window.removeEventListener('beforeunload',clearGhe);
        //  }
    }, []);

    // const clearGhe = function(event) {
        
    //     connection.invoke('huyDat',userLogin.taiKhoan,props.match.params.id);

            
    // }

    const {thongTinPhim, danhSachGhe} = chiTietPhongVe;

    const renderSeats = () => {
        return danhSachGhe.map((ghe, index) => {

            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
            let classGheDangDat = '';
            //Kiểm tra từng ghế render xem có trong mảng ghế đang đặt hay không
            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);

            //Kiểm tra từng render xem có phải ghế khách đặt hay không
            let classGheKhachDat = '';
            let indexGheKD = danhSachGheKhachDat.findIndex(gheKD => gheKD.maGhe === ghe.maGhe);
            if(indexGheKD !== -1){
                classGheKhachDat = 'gheKhachDat';
            }
            let classGheDaDuocDat = '';
            if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
                classGheDaDuocDat = 'gheDaDuocDat';
            }


            if (indexGheDD != -1) {
                classGheDaDat = 'gheDangDat';
            }


            return <Fragment key={index}>
                <button onClick={() => {
                    const action = datGheAction(ghe,props.match.params.id);
                    dispatch(action);
                }} disabled={ghe.daDat || classGheKhachDat !=='' } className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat} ${classGheKhachDat} text-center`} key={index}>

                    {ghe.daDat  ? classGheDaDuocDat != '' ? <UserOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> : <CloseOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> : classGheKhachDat !=='' ? <SmileOutlined  style={{ marginBottom: 7.5, fontWeight: 'bold' }} />  :  ghe.stt}

                </button>

                {(index + 1) % 16 === 0 ? <br /> : ''}

            </Fragment>
        })
    }

    return (
        <div className="min-h-screen mt-5">
            <div className="grid grid-cols-12">
                <div className="col-span-9">
                    <div className="flex flex-col items-center mt-5">
                        <div className="bg-black " style={{ width: '80%', height: 15 }}>
                        </div>
                        <div className={`${style['trapezoid']} text-center`}>
                            <h3 className="mt-3 text-black">Màn hình</h3>
                        </div>
                        <div>
                        {renderSeats()}
                        </div>
                    </div>
                </div>
                

                <div className="col-span-3">
                    <h3 className="text-green-400 text-center text-4xl">0 đ</h3>
                    <hr />
                    <h3 className="text-xl">{thongTinPhim.tenPhim}</h3>
                    <p>Địa điểm: {thongTinPhim.tenCumRap}</p>
                    <p>Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}</p>
                    <hr />
                    <div className="flex flex-row my-5">
                        <div className="w-4/5">
                            <span className="text-red-400 text-lg">Ghế</span>
                        </div>
                        <div className="text-right col-span-1">
                            <span className="text-green-800 text-lg">0đ</span>
                        </div>
                    </div>
                    <hr />
                    <div className="my-5">
                        <i>Email</i> <br />
                        {userLogin.email}
                    </div>
                    <div className="my-5">
                        <i>Phone</i> <br />
                        123456
                    </div>
                    <hr />
                    <div className="mb-0 h-full flex flex-col justify-end items-center" style={{marginBottom: 0}}>
                        <div className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl">
                            ĐẶT VÉ
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}