import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Loading.css';


export default function Loading(props) {

    const { isLoading } = useSelector(state => state.LoadingReducer);


    return (
        <Fragment>
            {isLoading ?
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 99 }}>
                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                    <div className="text-center text-white text-4xl font-semibold">Loading ...</div>
                </div> : ''

            }
        </Fragment>
    )
}
