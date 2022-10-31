import React, { Component } from "react";
import Slider from "react-slick";
import './style.css';
import images from "./images";

export default class ImageSlider extends React.Component {


  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 5,
      vertical: true,
      autoplay: true,
      verticalSwiping: true,
      swipeToSlide: true,
      arrows: false,
    };
    return (
      <div className="slider">
        <Slider ref={slider => (this.slider = slider)} {...settings}>
         {images.map((image) => {
            return (
                <div className='item' key={image}>
                    <img src={image} alt=''/>
                    {/* <p className='itemTitle'>metaverse flatform</p> */}
                </div>
            );
        })}
        </Slider>
      </div>
    );
  }
}