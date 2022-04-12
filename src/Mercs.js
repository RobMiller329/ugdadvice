import react from "react";
import { useState } from "react";
import MercsProblem from "./MercsProblem";
import MercsSolution from "./MercsSolution";
import MercsVillage from "./MercsVillage";

function MercsNavBar(props)
{
    return(        
        <div>
            <button type="button" value="problem" onClick={ (event) => props.changePage(event.target.value) }>The Problem</button>
            <button type="button" value="solution" onClick={ (event) => props.changePage(event.target.value) }>Proposed Solution</button>
            <button type="button" value="village" onClick={ (event) => props.changePage(event.target.value) }>Updated Village</button>
        </div>
    );
}

function Mercs(props)
{
    const [mercsPage, setMercsPage] = useState("");

    let pageToShow;

    switch(mercsPage)
    {
        case "problem":
            pageToShow = <MercsProblem />;
            break;
        case "solution":
            pageToShow = <MercsSolution />;
            break;
        case "village":
            pageToShow = <MercsVillage />;
            break;
        default:
            pageToShow = <MercsProblem />;
            break;
    }

    return (
        <div>
            <div>
                <MercsNavBar changePage={ setMercsPage } />
            </div>
            <div>
                { pageToShow }
            </div>
        </div>
    );
};
  
export default Mercs;
