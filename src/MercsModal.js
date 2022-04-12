import Popup from 'reactjs-popup';
import { Campfire, TrainingGrounds, FightingPit, MerchantCart, Tavern, TravelPoint, Fort, Fountain, FusionPool } from './MercBldgDesc';
import './StyleMercModal.css';

export const MercsModal = (props) =>
{
    let buildingDesc;

    switch(props.building)
    {
        case "Campfire":
            buildingDesc = <Campfire />
            break;
        case "Training Grounds":
            buildingDesc = <TrainingGrounds />
            break;
        case "Fighting Pit":
            buildingDesc = <FightingPit />
            break;
        case "Merchant Cart":
            buildingDesc = <MerchantCart />
            break;
        case "Tavern":
            buildingDesc = <Tavern />
            break;
        case "Travel Point":
            buildingDesc = <TravelPoint />
            break;
        case "Fort":
            buildingDesc = <Fort />
            break;
        case "Fountain":
            buildingDesc = <Fountain />
            break;
        case "Fusion Pool":
            buildingDesc = <FusionPool />
            break;
        default:
            break;
    }

    return(
        <Popup trigger={<button className={props.tag}> {props.building} </button>} modal>
            {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                    <div className="header"> {props.building} </div>
                    <div className="content">
                        { buildingDesc }
                    </div>
                    <div className="actions">
                        <button className="button" onClick={ () => { console.log('modal closed '); close(); } }>
                            close popup
                        </button>
                    </div>
                </div>
            )}
        </Popup>
    );
};
