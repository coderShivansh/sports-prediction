import React from 'react'
import styled from 'styled-components'
import './style_carousel.css';

export default function Carousel() {
  return (
    <Main>
        <div id='cricket' className='outer-container'>

        <p id='head-content'>What Do We Have For You <i className="fa-solid fa-arrow-right"></i></p>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
  <div className="carousel-indicators"  >
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" style={{borderRadius:"8px"}}>
    <div className="carousel-item active" style={{borderRadius:"8px"}}>
      <img src="https://m.media-amazon.com/images/I/91JL1XmxHQL._AC_SL1500_.jpg" className="d-block w-100" alt="..."/>
      {/* <div className="carousel-caption d-none d-md-block" >
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div> */}
    </div>
    <div className="carousel-item" style={{borderRadius:"8px"}}>
      <img src="https://dekhnews.com/wp-content/uploads/2021/05/FIBA-ABL-1000x700-1.jpg" className="d-block w-100" alt="..."/>
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div> */}
    </div>
    <div className="carousel-item" style={{borderRadius:"8px"}}>
      <img src="https://i.pinimg.com/originals/53/50/3c/53503c28cd0d6bca81ae9a58a26dee69.jpg" className="d-block w-100" alt="..."/>
      {/* <div className="carousel-caption d-none d-md-block" >
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div> */}
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    </Main>
  )
}

const Main=styled.div`
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');

/* .maindiv{
    
    width: 980px;
    height: 500px;
    border: none;
    border-radius: 10px;
    margin-left: 0rem;
    padding: 1rem;
    margin-top: 1.2rem;
    color: white;  
}
img{
    width: auto;
    height: 500px;
}
#pp{
    font-size: 40px;
    
    font-weight: 400;
    font-style: normal;
    font-family: "bavro";
} */
/* Responsiveness */
/* @media (max-width:830px){
    .maindiv{
        width: auto;
        padding-right: 1rem;
    }
}
@media (max-width: 576px){
    width: unset;  
}
@media (min-width:900px) and (max-width:1200px) {
  .maindiv{
    width: auto;
  }
} */

/* animation */

/* .maindiv{
    animation: transIn 8s;
    
}

@keyframes transIn {
    from{
        opacity: 0;
        transform: rotateX(-10deg);
    }
    to{
        opacity: 1;
        transform: rotateX(0deg);
    } 
} */


`
