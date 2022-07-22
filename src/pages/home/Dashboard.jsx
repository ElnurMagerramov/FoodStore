import React from 'react'
import Banner from './Banner'
import SlideShow from './SlideShow'
import banner1 from "../../assets/image/banner1.png"
import banner2 from "../../assets/image/banner2.png"
import banner3 from "../../assets/image/banner3.webp"
import Shop from '../shop/Shop'
export default function Dashboard(props) {
  return (
    <div>
      <SlideShow />
      <div className='d-flex justify-content-center mt-2'>
        <div className='row w-75 justify-content-lg-between justify-content-md-center justify-content-sm-center mt-5'>
          <Banner info="Mixed" name="Vegetables" imgSource={banner2} />
          <Banner info="Mixed" name="Fruits" imgSource={banner1} />
          <Banner info="New" name="Bananas" imgSource={banner3} />
        </div>
      </div>
      <div className='shop d-flex align-items-center flex-column mt-5 pt-5'>
        <h2 className='w-75 fw-bold'>PRODUCT OVERVIEW</h2>
      </div>
      <Shop addToCart={props.addToCart} basicData={props.basicData} addToLike={props.addToLike} likes={props.likes} setLikes={props.setLikes}/>
    </div>
  )
}
