import { Carousel } from "flowbite-react";
export const Slide = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-[500px]">
            <Carousel slideInterval={5000}>
                <img className="h-[600px] object-fill" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="..." />
                <img className="h-[600px] object-fill" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="..." />
                <img className="h-[600px] object-fill" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="..." />
                <img className="h-[600px] object-fill" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="..." />
                <img className="h-[600px] object-fill" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="..." />
            </Carousel>
        </div>
    )
}
