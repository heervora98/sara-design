import React from 'react'
import { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Carousels = () => {
    return (
        <div >
            <Carousel>
                <div style={{height:"600px"}}>
                    <img src="/assets/images/01.jpg" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div style={{height:"600px"}}>
                    <img src="/assets/images/02.jpg" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div style={{height:"600px"}}>
                    <img src="/assets/images/03.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div style={{height:"600px"}}>
                    <img src="/assets/images/04.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>
    )
}

export default Carousels
