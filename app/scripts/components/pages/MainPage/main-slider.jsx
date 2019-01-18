import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import slider from '../../../../API/main-slider.json';

export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <Slider {...settings}>
        {slider.map((item, index) => (
          <div className="main-slider__item" key={index}>
            <div className="main-slider__box" style={ { backgroundImage: `url(${item.image})` } }>
              <div className="main-slider__info">
                <div className="main-slider_info-box">
                  <div className="main-slider__label">{item.label}</div>
                  <div className="main-slider__title">{item.title}</div>
                  <div className="main-slider__subtitle">{item.subtitle}</div>
                  <div className="main-slider__text">{item.text}</div>
                  <Link className="main-slider__button" to={`${item.linkurl}`} >{item.linktext}</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}
