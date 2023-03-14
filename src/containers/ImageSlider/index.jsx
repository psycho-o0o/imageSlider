import { useState, useCallback } from 'react';
import MoveButton from '../../components/MoveButton';
import ImageSlides from '../../components/ImageSlides';
import IndexButton from '../../components/IndexButton';
import { Wrapper, Container } from './style';

const imageSlidesInfo = [
    {
        name: 'image1.jpg'
    },
    {
        name: 'image2.jpg'
    },
    {
        name: 'image3.jpg'
    },
    {
        name: 'image4.jpg'
    },
    {
        name: 'image5.jpg'
    }
]
const { length } = imageSlidesInfo;

function ImageSlider() {
    // state
    const [currentIndex, setCurrentIndex] = useState(0);
    const moveSlide = useCallback((to) => () => {
        if (to === -1) setCurrentIndex(length - 1);
        else if (to === length) setCurrentIndex(0);
        else setCurrentIndex(to)
    }, []);

    return (
        <Wrapper>
            <Container>
                <article className="top">
                    <MoveButton type="left" moveSlide={moveSlide(currentIndex - 1)} />
                    <ImageSlides currentIndex={currentIndex} imageSlidesInfo={imageSlidesInfo} />
                    <MoveButton type="right" moveSlide={moveSlide(currentIndex + 1)} />
                </article>
                <article >
                    <IndexButton currentIndex={currentIndex} length={imageSlidesInfo.length}
                        onClick={moveSlide}
                    />
                </article>
            </Container>
        </Wrapper>
    )
}

export default ImageSlider;