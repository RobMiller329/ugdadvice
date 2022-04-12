import './StyleMercProblemSolution.css';

function MercsProblem(props)
{
    return (
        <div className="mercProblemContainer">
            <div className="mercProblemTitle">
                <h1>Diagnosing the Problem</h1>
            </div>
            <div className="mercProblemSansTitle">
                <div className="mercProblemApproachSubtitle">
                    <h2>The Approach</h2>
                </div>
                <div className="mercProblemApproachBody">
                    <p>
                        I’m making some assumptions about how Blizzard handles design and how they would approach a major change like this. These assumptions are:
                    </p>
                        <ul>
                            <li>It needs to be better monetized in some way.</li>
                            <li>The pack economy has to be mostly unchanged. By this, I mean the means and rate of earning packs.</li>
                            <li>All combat portions of a game must be highly watchable.</li>
                        </ul>
                    <p>
                        Things that are not easily understood to an audience will likely not get included. So if you hit a Water Elemental with a Lightning Bolt, 
                        
                        the only damage modifier that applies is from the current Fighter/Caster/Protector type matching; they probably won’t put another system 
                        
                        (eg elemental typing) on top because it makes the game harder to understand if you’re a new spectator. The same goes with brand new ways 
                        
                        of engaging in combat (eg the proposed Fort structure in the Village).
                        <br/><br/>
                        We’re going to look at the economy since that is the only system that players meaningfully interact with aside from combat.
                    </p>
                </div>
                <div className="mercProblemProblemSubtitle">
                    <h2>The Problem</h2>
                </div>
                <div className="mercProblemProblemBody">
                    <p>
                        There are two ways to play the game – PvE and PvP. The gameplay loops of both are roughly the same: <i>Engage in a fight, earn mercenary</i> 
                        
                        <i>experience and coins for fighting, improve mercenaries with coins, engage in a new fight. </i>Both the PvE and PvP modes have their own reasons 
                        
                        why their loop isn’t great. In PvE, the bounties provide specific coins, but you need to run the same bounties dozens and dozens of times 
                        
                        to max a few of a single mercenary’s abilities. In PvP, the coins rewarded are entirely random, so your coins have an enormous window of 
                        
                        potential value all the way, “this was an amazing haul” to “I literally can not use a single coin I earned here.” While that windowisn’t on 
                        
                        its own necessarily terrible, it becomes a whole lot worse once you remember the added context that only a finite amount of coins are usable 
                        
                        to begin with, so the more you earn, the more and more of those earnings become worthless.
                        <br/><br/>
                        Booster packs do not have duplicate protection; a completely maxed out mercenary can still have coins drop in a pack. Mercenaries also don’t 
                        
                        have the “built in” duplicate protection that most gacha games have: In every other gacha game I’ve played, you can use duplicate pulls to 
                        
                        uniquely improve a unit’s star level, abilities, etc. This all means that every time you open a pack, you diminish the returns on both opening 
                        
                        additional packs and – more importantly – on playing the game.
                        <br/><br/>
                        So this is our problem: There is only one system in place. Both contexts you can play the game in (PvE, PvP) flow through this system, and 
                        
                        the system is so limited that it kills replayability. Our solution is going to have to involve adding parallel systems to the existing game 
                        
                        mode in order to stop the endless flow of coins and give players more to chase.
                    </p>
                </div>
            </div>
        </div>
    );
};
  
export default MercsProblem;
