import { useEffect, useState } from "react";
import { Campfire, TrainingGrounds } from "./MercBldgDesc";

export const MercPopup = (props) =>
{
    const [contentValue, setContentValue] = useState("");

    useEffect(() =>
    {
        setContentValue(props.content);
    }, [props])


    let contentToShow;

    switch(contentValue)
    {
        case "Campfire":
            contentToShow = <Campfire />
            break;
        case "TrainingGrounds":
            contentToShow = <TrainingGrounds />
            break;
        default:
            break;
    }

    return(
        <div className="mercPopupContainer">
            <div className="mercPopupBox">
                <span className="mercPopupCloseIcon" onClick={props.handleClose}>x</span>
                {contentToShow}
            </div>
        </div>
    );
}
