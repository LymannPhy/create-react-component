import { Carousel } from "flowbite-react";
import slide1 from "../../../public/assets/slide1.png"
import slide2 from "../../../public/assets/slide2.png"
import slide3 from "../../../public/assets/slide3.png"
import slide4 from "../../../public/assets/slide4.png"
export const Slide = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-[500px]">
            <Carousel slideInterval={5000}>
                <img className="h-[600px] object-fill opacity-1" src={slide1} alt="..." />
                <img className="h-[600px] object-fill opacity-1" src={slide2} alt="..." />
                <img className="h-[600px] object-fill opacity-1" src={slide3} alt="..." />
                <img className="h-[600px] object-fill opacity-1" src={slide4} alt="..." />
            </Carousel>
        </div>
    )
}
