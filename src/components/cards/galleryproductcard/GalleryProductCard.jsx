import './GalleryProductCard.scss'


function GalleryProductCard () {
    return(
        <div className='gallery__product-card'>
            <div className="gallery__product-img">
                Insert Picture of Product
            </div>
            <div className="gallery__product-details">
                <h4>Product Name</h4>
                <p>main color - No. of color options</p>
                <p>$Price</p>
            </div>
        </div>
    )
}

export default GalleryProductCard;