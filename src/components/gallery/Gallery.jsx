import './Gallery.scss'
import GalleryProductCard from "../cards/galleryproductcard/GalleryProductCard";

function Gallery () {

    const products = [{},{}
    ]

    return(
        <div className='gallery'>
            <GalleryProductCard/>
        </div>
    )
}

export default Gallery;