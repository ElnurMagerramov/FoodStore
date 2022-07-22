import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner(props) {
    return (
        <div className='row border px-4 col-lg-4 col-md-5 col-sm-12 my-3 me-md-5 me-sm-0 me-lg-0 bg-success text-white border-secondary align-items-center' 
        style={{height:"270px"}}
        >
            <div className='col-lg-6 text-start'>
                <h3 className=' fw-bold pt-4'>{props.name}</h3>
                <p className=''>{props.info}</p>
            </div>
            <div className='col-lg-6'>
                <img src={props.imgSource} alt='slideImage' className='w-100 h-50 opaci'/>
            </div>
        </div>
    )
}
