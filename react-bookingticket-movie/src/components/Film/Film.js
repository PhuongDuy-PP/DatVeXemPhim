import React from 'react'

export default function Film(props) {

    const { item } = props;


    return (<div className="mr-2 h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <div
            style={{ background: `url(${item.hinhAnh})`, backgroundPosition: 'center', backgroundSize: '100%' }}
        >
            <img src={item.hinhAnh} alt={item.tenPhim} className="opacity-0 w-full" style={{ height: '300px' }} />
        </div>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 h-16">{item.tenPhim}</h1>
        <p className="leading-relaxed mb-3 h-16">{item.moTa.length > 100 ? <span>{item.moTa.slice(0, 100)} ...</span> : <span>{item.moTa}</span>}</p>
        <a className="text-indigo-500 inline-flex items-center">ĐẶT VÉ
<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
            </svg>
        </a>

    </div>
    )
}