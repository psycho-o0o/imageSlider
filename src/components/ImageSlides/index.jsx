import React from 'react';
import styled from 'styled-components';

function ImageSlides({ imageSlidesInfo }) {
    return (
        <div>
            {
                imageSlidesInfo.map(({ name }, index) => <ImageSlide key={index} name={name} />)
            }
        </div>
    );
}

function ImageSlide({ name }) {
    const [width, height] = [400, 300];
    const imageUrl = process.env.PUBLIC_URL + "/images/" + name;
    return (
        <img src={imageUrl} width={width} height={height} />
    );
}

export default ImageSlides;