import Image1 from '../assets/images/360_F_333810258_5gP2SBYroH0jtgAtI2ANibRRDe2YY7dU.jpg'
import Image2 from '../assets/images/istockphoto-1404894296-170667a.webp'
import Image4 from '../assets/images/black-woman-trendy-grey-leather-jacket-posing-beige-background-studio-winter-autumn-fashion-look_273443-141.avif'
import Image3 from '../assets/images/stylish-blonde-woman-brown-dress-fixing-sunglasses_105609-10057.avif'
import './LandingPage.scss'

function LandingPage(){

    return(
        <div className='landing-page'>
            <div className='landing-page__img-container'>

                    <img className="landing-page__img animation3" src={Image4} />
            </div>
            <div className='landing-page__promo'>
                “Quality is never an accident; it is always the result of high intention, sincere effort, intelligent direction and skillful execution; it represents the wise choice of many alternatives.” ~William A. Foster.
            </div>


        </div>
    )    
}

export default LandingPage;