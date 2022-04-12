import react from "react";

function Home(props)
{
    return(
        <div className="homePageContainer">
            <div className="homePageTitle">
                <h1>Home</h1>
            </div>
            <div className="homePageBlurb">
                <span>This site isn't intended to be some super serious, "my word is law" type of deal.</span>
                <br/>
                <span>It's me having fun with a passion. If you disagree, I'd love to know why. If you</span>
                <br/>
                <span>agree, that's cool too. Either way, I'd love to know what other tweaks or changes</span>
                <br/>
                <span>you'd make.</span>
                <br/><br/>
                <span>I appreciate you taking the time to read through my unnecessarily long thoughts.</span>
                <br/>
                <span>I hope to get a chance to write some more soon, and if you don't hate this, you</span>
                <br/>
                <span>may not hate that either. Feel free to check back in the future.</span>
                <br/><br/>
                <span>Regards,</span>
                <br/>
                <span>- Rob Miller</span>
            </div>
        </div>
    );
};
  
export default Home;
