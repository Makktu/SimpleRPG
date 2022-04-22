export let worldLocations = {
    0: {
        placeName: "the Courtyard of Castle Deth",
        exits: [1, 1, 1, 1, 1, 0],
        description: "A dusty courtyard at the entrance of Castle Deth.",
        verboseDescription:
            "Nobody would have believed that the courtyard to a place such as Castle Deth could be so ordinary. You could be standing in any courtyard in any castle or mansion in the world. There is nothing to indicate the great Evil that haunts this place. One's flabber is truly gasted.",
        pickups: [],
    },
    1: {
        placeName: "the grand hall",
        exits: [0, 0, 1, 0, 0, 0],
        description: "The grand hall in Castle Deth.",
        verboseDescription:
            "The grand hall is empty. The feasting tables and benches are laid as if for a great party. There is only dust and the bones here.",
        pickups: ["sword", "GOOD", "shield", "AVERAGE"],
    },
};

export let exitNames = ["North", "East", "South", "West", "Down", "Up"];
