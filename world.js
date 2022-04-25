export let worldLocations = {
    1: {
        placeName: "the Courtyard of Castle Deth",
        exits: [4, 2, 0, 3, 0, 0],
        description: "A dusty courtyard at the entrance of Castle Deth.",
        verboseDescription:
            "Nobody would have believed that the courtyard to a place such as Castle Deth could be so ordinary. You could be standing in any courtyard in any castle or mansion in the world. There is nothing to indicate the great Evil that haunts this place. One's flabber is truly gasted.",
        pickups: [],
    },
    2: {
        placeName: "the stables",
        exits: [0, 0, 0, 1, 0, 0],
        description: "The stables of Castle Deth.",
        verboseDescription:
            "The stables. What more to say? There is straw. There is and horse dung. There are saddles hanging from hooks.",
        pickups: [
            "horse",
            "a fast horse that looks as eager to leave Castle Deth as you are",
        ],
    },
    3: {
        placeName: "the Gardens of Castle Deth",
        exits: [0, 1, 0, 0, 0, 0],
        description: "The lovely gardens of Castle Deth.",
        verboseDescription:
            "The gardens of Castle Deth are famed for their stench of, well, death.",
        pickups: [
            "clothes peg",
            "the type of wooden clothes peg used to affix washing to a washing line, or to put on somebody's nose in a cartoon (or game...).",
        ],
    },
    4: {
        placeName: "the Great Hall of Castle Deth",
        exits: [5, 0, 1, 0, 0, 0],
        description: "The appropriately-named great hall in Castle Deth.",
        verboseDescription:
            "The ceiling of a thousand feet gives the Great Hall its name. The feasting tables and benches are laid as if for a great party. There is only dust and the bones here.",
        pickups: [
            "sword",
            "rusty but in good condition",
            "shield",
            "very rusty and in poor condition. Might be more of a hindrance than a help",
        ],
    },
    5: {
        placeName: "the Feasting Hall of Castle Deth",
        exits: [6, 0, 4, 0, 0, 1],
        description: "More feasting?",
        verboseDescription:
            "They must have had great times in this place in the day. Yet another feasting hall. Definitely not a lack of imagination on the part of the game designer.",
        pickups: [],
    },
    6: {
        placeName: "the corridor of Deth",
        exits: [7, 0, 5, 0, 0, 0],
        description: "a long, plain corridor in Castle Deth.",
        verboseDescription:
            "There are flagstones on the floor and water dripping down the bare brick walls. It's a corridor in a castle. Castle Deth!",
        pickups: [],
    },
    7: {
        placeName: "the Antechamber of Deth",
        exits: [8, 0, 6, 0, 0, 0],
        description: "A room adjacent to Deth itself!",
        verboseDescription:
            "Antechamber (<em>an-tee-cheym-ber</em>), noun - a chamber or room that serves as a waiting room and entrance to a larger room or an apartment [<strong>citation needed</strong>",
        pickups: [],
    },
    8: {
        placeName: "the Throne Room",
        exits: [0, 0, 0, 0, 0, 0],
        description: "The throne room of Castle Deth.",
        verboseDescription:
            "The Throne Room. You have reached your goal. Can you survive it?",
        pickups: [],
    },
};

export let exitNames = ["North", "East", "South", "West", "Down", "Up"];
