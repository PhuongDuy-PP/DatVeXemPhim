import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import { layDanhSachNguoiDungAction, timKiemNguoiDungAction, xoaNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungAction';
import { AudioOutlined, EditOutlined, SearchOutlined, DeleteOutlined,CalendarOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { history } from '../../../App';
import { Input, Space } from 'antd';
import { connect } from "react-redux";
const { Search } = Input;

function Dashboard(props) {

    const {danhSachNguoiDung} = useSelector(state => state.QuanLyNguoiDungReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        props.fetchListUser();
        // dispatch(layDanhSachNguoiDungAction());
    }, []);
    // console.log('arrFilmDefault', danhSachNguoiDung);
    console.log({props})

    const columns = [
        {
            title: 'Tài khoản',
            dataIndex: 'taiKhoan',
            sorter: (a, b) => {
                let taiKhoanA = a.taiKhoan.toLowerCase().trim();
                let taiKhoanB = b.taiKhoan.toLowerCase().trim();
                if (taiKhoanA > taiKhoanB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            width: '15%'

            // sortOrder:'descend'
        },
        {
            title: 'Họ tên',
            dataIndex: 'hoTen',
            width: '15%',
            sorter: (a, b) => {
                let hoTenA = a.hoTen.toLowerCase().trim();
                let hoTenB = b.hoTen.toLowerCase().trim();
                if (hoTenA > hoTenB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            width: '15%'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            sorter: (a, b) => {
                let emailA = a.email.toLowerCase().trim();
                let emailB = b.email.toLowerCase().trim();
                if (emailA > emailB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            width: '15%'
        },
        // {
        //     title: 'Mật khẩu',
        //     dataIndex: 'matKhau',
        //     width: '15%'
        // },
        {
            title: 'Mã loại người dùng',
            dataIndex: 'maLoaiNguoiDung',
            width: '15%'
        },
        {
            title: 'Hành động',
            dataIndex: 'maPhim',
            render: (text, user) => {
                return <Fragment>
                    <NavLink key={1} className=" mr-2  text-2xl" to={`/admin/users/edit/${user.taiKhoan}`}><EditOutlined style={{ color: 'blue' }} /> </NavLink>
                    <span style={{ cursor: 'pointer' }} key={2} className="text-2xl" onClick={() => {
                        //Gọi action xoá
                        if (window.confirm('Bạn có chắc muốn xoá người dùng này ? ' )) {
                            //Gọi action
                            dispatch(xoaNguoiDungAction(user.taiKhoan));
                        }

                    }}><DeleteOutlined style={{ color: 'red' }} /> </span>


                </Fragment>
            },
            sortDirections: ['descend', 'ascend'],
            width: '15%'
        },
      ];
      
      const data = danhSachNguoiDung;

      const onSearch = value => {

        console.log(value);
        dispatch(timKiemNguoiDungAction(value));

    };
      
      function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
      }

    return (
        <div className="mt-16">
            <h3 className="text-4xl">Quản lý người dùng</h3>
            <button 
                className="mb-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
                onClick={() => {
                    history.push('/admin/users/addnew');
                }}
            >
                Thêm người dùng
            </button>
            <Search
                className="mb-5"
                placeholder="input search text"
                enterButton={<SearchOutlined />}
                size="large"

                onSearch={onSearch}
            />
            <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      
      fetchListUser: () => {
        dispatch(layDanhSachNguoiDungAction());
      }
    }
  }

const mapStateToProps = state => {
    return {
      listUser: state.QuanLyNguoiDungReducer.danhSachNguoiDung,
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
