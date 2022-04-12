import { useState } from "react";
import { Campfire, TrainingGrounds } from "./MercBldgDesc";
import { MercsModal } from "./MercsModal";
import "./StyleMercVillage.css";

function MercsVillage(props)
{
    const openMercPopup = (value) =>
    {
        console.log(value);
    }

    return(
        <div className="villageContainer">
            <div className="villageTitleContainer">
                <div className="villageTitlePrimary">
                    <h1>The Village</h1>
                </div>
                <div className="villageTitleSecondary">
                    <span>(click each building for details)</span>
                </div>
            </div>
            <div className="campfire">
                <MercsModal tag={"fireButton"} building="Campfire" />
            </div>
            <div className="trainingGrounds">
                <MercsModal tag={"trainButton"} building="Training Grounds" />
            </div>
            <div className="fightingPit">
                <MercsModal tag={"pitButton"} building="Fighting Pit" />
            </div>
            <div className="merchantCart">
                <MercsModal tag={"cartButton"} building="Merchant Cart" />
            </div>
            <div className="tavern">
                <MercsModal tag={"tavernButton"} building="Tavern" />
            </div>
            <div className="travelPoint">
                <MercsModal tag={"travelButton"} building="Travel Point" />
            </div>
            <div className="fort">
                <MercsModal tag={"fortButton"} building="Fort" />
            </div>
            <div className="fountain">
                <MercsModal tag={"fountButton"} building="Fountain" />
            </div>
            <div className="fusionPool">
                <MercsModal tag={"fusionButton"} building="Fusion Pool" />
            </div>
        </div>
    );
};
  
export default MercsVillage;
