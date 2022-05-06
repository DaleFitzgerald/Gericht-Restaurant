import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">

    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quotation mark" />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet modi eveniet deleniti, neque consectetur accusantium ducimus nam esse est.</p>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsa aut earum distinctio atque fugit totam placeat, quo harum sint.</p>
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef &amp; Founder</p>
          <img src={images.sign} alt="chef signature" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
