import Image1 from '../assets/images/360_F_333810258_5gP2SBYroH0jtgAtI2ANibRRDe2YY7dU.jpg'
import Image2 from '../assets/images/istockphoto-1404894296-170667a.webp'
import './LandingPage.scss'

function LandingPage(){

    return(
        <div>
            <img className="animation1" src={Image1} />
            <img className="animation2" src={Image2} />

        </div>
    )    
}

export default LandingPage;