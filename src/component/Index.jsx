/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Style.css'


function Index({ data }) {

    const [slide, setSlide] = useState(0)

    function nextSlide() {
        setSlide(slide === data.length - 1 ? 0 : slide + 1)
    }

    function prevSlide() {
        setSlide(slide === 0 ? data.length - 1 : slide - 1)
    }

    console.log(data)
    return (
        <div className='container'>
            <i className="fi 
            fi fi-rr-angle-left arrow arrow-left" onClick={prevSlide}></i>


            {
                data.map((item, index) => (
                    <img className={slide === index ? "slide" : " slide slide-hidden"} key={index} src={item.src} alt={item.alt} />
                ))
            }
            <i className="fi fi-rr-angle-right arrow arrow-right" onClick={nextSlide}></i>
            <span className='indicators'>
                {
                    data.map((_, index) => (
                        <a
                            onClick={() => setSlide(index)}
                            key={index} className={slide === index ? "indicator" : "indicator indicator-inactive"}></a>
                    ))
                }
            </span>
        </div>
    )
}

export default Index
