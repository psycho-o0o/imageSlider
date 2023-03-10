import React from 'react';
import styled from 'styled-components';

function ImageSlides({currentIndex, imageSlidesInfo}) {
    return (
        <div>
            {
                imageSlidesInfo.map(({index, url}) => <ImageSlide key={index} url={url} />)
            }
        </div>
    );
}

function ImageSlide({url}) {
    const [width, height] = [500, 800];
    return (
        <img src={url} width={width} height={height}/>
    );
}

export default ImageSlides;