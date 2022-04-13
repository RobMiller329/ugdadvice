export const Campfire = () =>
{
    return(
        <p>
            There isn't a lot I would suggest here - it's a basic building that gets its job done. With the latest changes made to Mysterious Stranger/Tasks, 
            I don't have anything I would request here.
        </p>
    );
}

export const TrainingGrounds = () =>
{
    return(
        <p>
            The passive XP gain for mercenaries is fine, but there's a nice feature we could add to this building that makes it so much more valuable. 
            My suggestion for the Training Grounds is an “active training session” option after upgrading a third time. Here, you can select a deck for you to 
            control, and fight an AI controlled sparring deck of your making. The sparring decks are not limited to your collection; when you make the sparring decks, you 
            choose from any mercenary. When making the sparring deck, you also choose which equipment to put on each merc when you add them. All equipment is unlocked, 
            and the merc is fully maxed.
        </p>
    );
}

export const FightingPit = () =>
{
    return(
        <p>
            Not much to change here. I would like to see the ability to challenge other players' Forts through here, but that also could be done through the Fort interface.
        </p>
    );
}

export const MerchantCart = () =>
{
    return(
        <p>
            At present, the Merchant Cart is a wildly overpriced grabbag of "deals" that leave you feeling mugged even if you <i>didn't</i> purchase them. My suggestion is 
            that it will now offer items purchasable for Fountain Coins and Conquest Coins in addition to the current Gold and real-money options. The Merchant 
            Cart will need to be upgraded to unlock slots in the Fountain Coins and Conquest Coins sections (eg they start with offering 4 items, can be upgraded to offer 
            6, can be upgraded to offer 8, etc), and those slots will appear in a second tab. The real money options can still be the default page you open to and the new 
            items won't eat into their existing real estate. More information on both Fountain Coins and Conquest Coins can be found in the Fountain and Fort sections 
            respectively.
        </p>
    );
}

export const Tavern = () =>
{
    return(
        <p>
            The only changes I am suggesting here are contingent on other changes being made. If the Training Grounds suggestion is taken, it would be 
            nice to be able to make sparring decks in the Tavern. If the player character suggestion is taken, you would need a significant UI change 
            to accommodate player gear.
        </p>
    );
}

export const TravelPoint = () =>
{
    return(
        <p>
            Fairly straight-forward change: Require an upgrade for each additional method of fighting (eg legendary bounties, each level of dungeon).
        </p>
    );
}

export const Fort = () =>
{
    return(
        <p>
            If any of you have played Hex: Shards of Fate, I’m borrowing <b>heavily</b> from one of their game modes. In the Fort, you create three PvE decks and place each 
            deck in one of three locations. Once you use a Merc in one deck, it can not be used in another deck, and the same applies to player gear*. When 
            your Fort is challenged, the challenger can use one deck (with gear) and has to defeat all three of your decks to successfully complete the challenge. A 
            successful raid or defense of a Fort earns Conquest Coins** (you earn a lot more for raiding than defending). Challenging a Fort can be done from the Fighting 
            Pit, but costs Fountain Coins for each challenge.
            <br/><br/>
            * This is assuming that the player character (with gear) suggestion is implemented.
            <br/><br/>
            ** Conquest Coins are earned by demonstrating skill in the game (as opposed to just having an s-ton of excess coins). For this reason, I think they should be worth 
            a bit more than something like Fountain Coins or even some merc coins. Some things you could buy with Conquest Coins include portraits, playing boards for each Fort 
            room, and Conquest Coin exclusve mercs.
            <br/>
            For the Conquest Coin exclusive mercs, there could be one of each rarity, and they should be PvP focused. It would provide a ton of incentive to engage with the Fort 
            system, and could be a fun way to earn mercs that can’t be opened in a pack. Since they'd be directly purchasable, you wouldn't run into a duplicate coin issue; you 
            are only buying exactly what you need.
        </p>
    );
}

export const Fountain = () =>
{
    return(
        <p>
            This suggestion is strictly for creating an excess merc coin sink. You get one free and three “paid” Fountain uses each day in a fully upgraded Fountain, and the fountain 
            costs excess merc coins to upgrade. Each rarity can only be used once in a day, so for today you can throw in some excess rare coins to spin the Fountain prize wheel, 
            but then you can’t use rare coins in the Fountain again until tomorrow. However, you can still use the Fountain today three other times: one free spin (prizes are at 
            the rare coin level), once by throwing in excess epic coins, and once by throwing in excess legendary coins.
            <br/>
            As for what kinds of rewards can come from the Fountain spins, you can get Fountain Coins (most common reward), dupe protected merc coins of the rarity you threw in (you 
            won’t pull any coins for a merc you already have maxed), free Fort challenge tickets, gold, or packs. Obviously those last two would be rather rare, and only at the 
            highest rarity level. I'd also like to see one or two Fountain Coin exclusive mercs.
            <br/><br/>
            For the Fountain Coin exclusive merc, it would have to be something usable, but not absurdly strong. Probably something with a strong PvE role that maybe wouldn’t do 
            great in PvP. If I had it my way, the Fountain Coin unit(s) would be something fun like the cat vendor outside of Stormwind, or the Orc who wants you to beat sleeping 
            peons in the Orc starting zone. (Obviously I don’t know my WoW characters, but I think you get my meaning.) A silly character that could offer some great utility moves, 
            but isn’t going to hold up well in a competitive environment.
        </p>
    );
}

export const FusionPool = () =>
{
    return(
        <p>
            The other large merc coin sink suggestion is the Fusion Pool. Fusions are a common mechanic in gacha games, and for good reason. Players get to take excess resources of 
            a lower rarity level, and turn them into rarer resources which often provide much greater utility. In the case of Mercenaries, I would like to take excess merc coins and 
            turn them into fusion-exclusive mercenaries. (<i>The numbers listed below are just to illustrate the idea.</i>)
            In total there would be four legendary fusion mercenaries. Each of those requires excess coins from three specific epic fusion mercs, plus excess epic merc coins of any 
            kind. Each of the epic fusion mercs take coins from four specific rare fusion mercs, plus excess rare merc coins of any kind. Each of the rare fusion mercs take excess rare 
            merc coins of any kind.
            <br/><br/>
            Let's look at an example:
            <br/>
            You have tens of thousands of excess rare merc coins. You spend 250 of them to unlock the (bear with me on the terrible names/examples) Stonetusk Boar rare merc. You spend 
            another 5400 excess rare merc coins maxing out that merc. Now you want to unlock the epic fusion merc Rockhide Boar; to do that you'll need not just 500 excess Stonetusk Boar 
            coins, but also 500 excess coins from the Bushtail, Murloc Lurker, and Young Forest Bear rare fusion mercs, and you would need an additional 500 excess rare coins from any 
            mercenary (fusion or not). Now you want to unlock the legendary fusion mercenary Princess. To do that you'll need excess coins from Rockhide Boar plus two other specific epic 
            fusion mercenaries, plus additional excess coins from any epic merc (fusion or not).
            <br/>
            It obviously wouldn't be exactly this, but you get the general idea I'm going for, I hope.
        </p>
    );
}
