import MoveButton from '../components/MoveButton';
import ImageSlides from '../components/ImageSlides';
import IndexButton from '../components/IndexButton';
import { useState, useMemo } from 'react';

const imageSlide = {
    index : 0,
    url : 'url'
}

function ImageSlider() {
    // state
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageSlidesInfo, setImageSlidesInfo] = useState([
        {
            url : 'image1.jpg'
        },
        {
            url : 'image2.jpg'
        },
        {
            url : 'image3.jpg'
        },
        {
            url : 'image4.jpg'
        },
        {
            url : 'image5.jpg'
        }
    ]);

    // useMemo
    const imageSlidesInfoLength = useMemo(() => imageSlidesInfo.length, [imageSlidesInfo]);

    // useCallback
    const moveSlide = useCallback((to) => () => {
            if(to === -1) {
                setCurrentIndex(imageSlidesInfo.length-1)
            }
            else if(to === imageSlidesInfo.length) {
                setCurrentIndex(0);
            }
            else if(to !== currentIndex) {
                setCurrentIndex(to);
            }
    }, []);
    
    return (
        <div>
            <div className="top">
                <MoveButton type="prev" onClick={moveSlide(currentIndex-1)} />
                <ImageSlides currentIndex={currentIndex} imageSlidesInfo={imageSlidesInfo} />
                <MoveButton type="next" onClick={moveSlide(currentIndex+1)} />
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