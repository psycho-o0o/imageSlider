import MoveButton from '../components/MoveButton';
import ImageSlides from '../components/ImageSlides';
import IndexButton from '../components/IndexButton';
import { useState, useMemo, useCallback } from 'react';

function ImageSlider() {
    // state
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageSlidesInfo, setImageSlidesInfo] = useState([
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
    ]);

    // useMemo
    const imageSlidesInfoLength = useMemo(() => imageSlidesInfo.length, [imageSlidesInfo]);

    // useCallback
    const moveSlide = useCallback((to) => () => {
        if (to === -1) {
            setCurrentIndex(imageSlidesInfo.length - 1)
        }
        else if (to === imageSlidesInfo.length) {
            setCurrentIndex(0);
        }
        else if (to !== currentIndex) {
            setCurrentIndex(to);
        }
    }, []);

    return (
        <div>
            <div className="top">
                <MoveButton type="prev" onClick={moveSlide(currentIndex - 1)} />
                <ImageSlides currentIndex={currentIndex} imageSlidesInfo={imageSlidesInfo} />
                <MoveButton type="next" onClick={moveSlide(currentIndex + 1)} />
            </div>
            <div className="bottom" >
                <IndexButton currentIndex={currentIndex} length={imageSlidesInfoLength}
                    onClick={moveSlide}
                />
            </div>
        </div>
    )
}

export default ImageSlider;