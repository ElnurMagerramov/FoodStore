import React from 'react'

export default function SlideContent(props) {
    return (
        <div className='w-75 row'>
            <div className='col-lg-6 text-start py-5'>
                <h5 className='py-2 text-center mt-5 bg-white opacity-50 rounded'>{props.info}</h5>
                <h1 className='py-3 bg-white text-center opacity-50 rounded'>{props.name}</h1>
                <button className='btn btn-primary rounded-pill mb-5'>
                    SHOP NOW
                </button> <br/><br/><br/><br/><br/>
            </div>
            <div className='col-lg-6'>
            </div>
        </div>
    )
}
