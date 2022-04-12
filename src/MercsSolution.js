import './StyleMercProblemSolution.css';

function MercsSolution(props)
{
    return (
        <div className="mercSolutionContainer">
            <div className="mercSolutionTitle">
                <h1>Proposing a Solution</h1>
            </div>
            <div className="mercSolutionBody">
                <p>
                    To break the existing gameplay loop and add in something that works, we’ll need more to chase. That’s why I’d 
                    
                    like to add a player character. In the Mercenaries mode, we – the players – are spoken to by our campfire visitors. 
                   
                    It appears we’re some kind of commander leading mercenaries into battle. Great, let’s use that! If we have a proper 
              
                    player character then we can put equipment on the them which opens up a LOT of space for us to use. Right now, the 
              
                    only real variety in the use of each mercenary is from their own equipment, but there’s very little wiggle-room 
                
                    there. If we want players to be able to make truly unique compositions, there must be greater flexibility. Players 
           
                    can potentially wear gear that impacts mercenaries on several levels – faction, race, color (fighter/caster/protector), 
            
                    ability element, etc. You can have Gloves X mixed with Helmet Y and have an entirely different composition than 
           
                    someone running the exact same mercenaries, but with Gloves A, Helmet B, and Axe C.
                    <br/><br/>
                    Having a gear system brings us two significant benefits (outside of varied gameplay, which itself is a worthwhile 
                   
                    pursuit). The first is that it allows for a proper progression system. You run low level bounties to gear for heroic 
                    
                    bounties, then dungeons, then legendary bounties, then heroic dungeons, then legendary dungeons. Since the mercenaries 
                    
                    themselves are maxed at a certain point, it makes the increased challenge of each new area all about how you can use 
                  
                    the equipment you’re able to find. The second is that it brings some relief from the excess coin concerns because 
                 
                    you’re replacing several coin rewards with gear rewards.
                    <br/><br/>
                    On the next page, you can walk through the changes I'd make to each Village building. Some are significant (like the 
                    
                    Training Grounds), and some are not (like the Travel Master). The Fort and Fountain are two entirely new structures. All 
                    
                    of the changes serve two primary purposes - giving players a rewarding gameplay experience for their invested time, and 
                    
                    fixing the economy.
                </p>
            </div>
        </div>
    );
};
  
export default MercsSolution;
