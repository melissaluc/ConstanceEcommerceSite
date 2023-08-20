
function LandingPage(){

    const myWords = [223,23123123,2312,123,123,123,123,123,123,123,123,123,123,12,12312,123,123123,123,123123,1231,123,123,123,123,123,123,123,123,123,123,123,1223,123,123,123,123,123,123,,123,213,213,123]
    return(
        <div>
            <h1>Landing Page</h1>
            {myWords.map((i)=>(
                <div>
                    {i}
                </div>                
            ))}
        </div>
    )
}

export default LandingPage;