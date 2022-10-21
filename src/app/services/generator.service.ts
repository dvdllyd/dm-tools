import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  treasures: string[]= [
    'Nothing', 'Nothing', 'Nothing', 'Nothing', 'Nothing',
    'Nothing', 'Nothing', 'Nothing', 'Nothing', 'Nothing',
    'Coins 1', 'Coins 2', 'Coins 3', 'Coins 4', 'Coins 5', 'Coins 6', 'Coins 7', 'Coins 8', 'Coins 9', 'Coins 10',
    'Coins 11', 'Coins 12', 'Coins 13', 'Coins 14', 'Coins 15', 'Coins 16', 'Coins 17', 'Coins 18', 'Coins 19', 'Coins 20',
    'Lotus Powder',
    'Space Alien Tech', 'Space Alien Tech',
    'Magic Item', 'Magic Item',
    'Weird Alien Tech',
    'Spellbook']
    treasure = new Subject

  grwcharts: string[]= [
    'Common', 'Common', 'Common', 'Common', 'Common', 'Common', 'Common',
    'Common', 'Common', 'Common', 'Common', 'Common', 'Common',
    'Uncommon', 'Uncommon', 'Uncommon', 'Uncommon', 'Uncommon', 'Uncommon',
    'Rare', 'Rare', 'Rare', 'Rare', 'Rare', ]
    grwchart = new Subject

  comcharts: string[]= [
    "Slow creature pointed at for 10 rounds (DC 15 negates).",
    "Faerie Fire surrounds the target.",
    'Deludes wielder for 1 round into believing the rod functions as indicated by a second die roll (no save).',
    "Gust of Wind, but at a windstorm force(DC 14 negates).",
    "Wielder learns target's surface thoughts (as with detect thoughts) for 1d4 rounds (no save).",
    "Stinking Cloud at 30 ft. range (DC 15 negates).",
    'Heavy rain falls for 1 round in 60 ft. radius centered on rod wielder.',
    'Summon an animal: a rhino (01 - 25 on d%), elephant (26 - 50), or mouse (51 - 100).',
    "Lightning Bolt, 6d6 damage (DC 16 half).",
    'Stream of 600 large butterflies pours forth and flutters around for 2 rounds, blinding everyone (including wielder) within 25 ft. (DC 14 negates).',
    "Enlarge if within 60 ft. of rod (DC 13 negates).",
    "Darkness, 30 ft. diameter hemisphere, centered 30 ft. away from rod.",
    'Grass grows in 160 sq. ft. area before the rod, or grass existing there grows to ten times normal height.',
    'Turn ethereal any nonliving object of up to 1,000 lb. mass and up to 30 cu. ft. in size.',
    'Reduce wielder to 1/12 height (no save).',
    "Fireball at target or 100 ft. straight ahead, 6d6 damage (DC 16 half).",
    "Invisibility covers rod wielder.",
    'Leaves grow from target if within 60 ft. of rod. These last 24 hours.',
    '10-40 gems, value 1 GP each, shoot forth in a 30 ft. long stream. Each gem deals 1 point of damage to any creature in its path: Roll 5d4 for the number of hits and divide them among the available targets.',
    'Shimmering colors dance and play over a 40 ft. by 30 ft. area in front of rod. Creatures therein are blinded for 1d6 rounds (DC 15 negates).',
    'Wielder (50% chance) or target (50% chance) turns permanently blue, green, or purple (no save).',
    "Flesh to Stone (or Stone to Flesh if target is stone already) if target is within 60 ft. (DC 18 negates)."]
    comchart = new Subject

    uncomcharts: string[]= [
      'Wielder is Teleported to the location where they were at exactly one day ago.',
      'A 200-ft. Wall of Stone appears wherever the rod wielder wishes it.',
      'Mass Invisibility affects every creature within 900 ft. of the wielder.',
      'Antimagic Field centered on the rod wielder.',
      "Brilliant light from above illuminates random creature (DM’s choice) granting a +3 circumstance bonus on all ranged attacks against that creature.",
      "Baleful Polymorph (DC 25) affects a creature of the rod wielder's choosing.",
      'Summon Spawn 1D10 HD',
      'Delayed blast fireball, at target or 100 ft. straight ahead, causes 15d6 points of fire damage (DC 25).',
      'Forcecage affects an area selected by the rod wielder.',
      'Nearest pool of standing water becomes stagnant and undrinkable.',
      'A random creature within 50 ft. of the rod wielder is affected by Eyebite (DC 25).',
      'The nearest plant is affected by Blight.',
      'Wielder becomes a member of the opposite sex.',
      'Legend Lore is cast upon the item nearest to the rod wielder that is not carried by the wielder or another party member.',
      'Hold Monster (DC 25) is cast against the monster nearest the rod wielder.',
      'Greater Teleport to the nearest city (or place of interest if there are no cities on the plane where the PCs are currently at).',
      'The creature nearest the rod wielder is afflicted with Insanity (DC 25).',
      'Reverse Gravity affects 150 ft., centered on the rod wielder.',
      'Move Earth affects the surrounding area as instructed by the rod wielder.',
      'Nearest structure house-sized or smaller constructed primarily of wood crumbles.',
      'Statue is cast upon the wielder.',
      "The rod wielder or the creature of the wielder's choice is affects by Moment of Prescience (caster level 20).",
      'Project Image of the rod wielder.',
      'Transmute Rock to Mud affects thirty 10 ft. cubes in the locations specified by the rod wielder.',
      "Power Word Blind against a creature of the rod wielder's choice.",
      'Rod fires an energy beam (see Space Alien Weapons).'    ]
      uncomchart = new Subject

    rarecharts: string[]= [
      "Gate to Kord's Realm in Ysgard.",
      "Gate to Shra'kt'lor in Limbo.",
      "Gate to the City of Slaughter in Pandemonium.",
      "Gate to Azzgrat on the 45th layer of the Abyss.",
      "Gate to the Sand Tombs of Payratheon in Carceri.",
      "Gate to Khin-Oin the Wasting Tower in Hades.",
      "Gate to The Crawling City in Gehenna.",
      "Gate to The City of Minauros in the Nine Hells.",
      "Gate to Clangor in Acheron.",
      "Gate to The Center in Mechanus.",
      "Gate to The Glass Tarn in Celestia.",
      "Gate to The Golden Hills in Bytopia.",
      "Gate to The Fortress of the Sun in Elysium.",
      "Gate to The Grove of Unicorns in the Beastlands.",
      "Gate to The Seldarine in Arborea.",
      "Gate to Sigil in The Outlands.",
      "Wielder is affected by the Imprisonment spell.",
      "Day becomes night or night becomes day; the day/night pattern of the planet or plane is permanently offset by half a day.",
      "Power Word Kill against a creature of the wielder's choice.",
      "The most recent adversary the wielder killed that has an equal or greater number of Hit Dice is returned to life at exact location where it was slain, and it immediately becomes obsessed with evening the score.",
      "Summon Spawn 2D6 HD",
      "Wielder Shapechanges into a creature of the character's choice.",
      "Iron Body affects the wielder for 20 minutes.",
      "Wish (no XP or gold cost)."]
      rarechart = new Subject

      gates: string[]= [
        'Banish and Close', 'Banish', 'Banish', 'Banish', 'Banish', 'Banish', 'Banish', 'Banish', 'Banish', 'Banish',
        'Neutral', 'Neutral', 'Neutral', 'Neutral', 'Neutral', 'Neutral', 'Neutral', 'Neutral', 'Neutral', 'Neutral',
        'Summon x2', 'Summon', 'Summon', 'Summon', 'Summon', 'Summon', 'Summon', 'Summon', 'Summon', 'Summon',  ]
        gate = new Subject

    polytypes: string[]= [
      'Creature', 'Element', 'Item' ]
      polytype = new Subject

    creatures: string[]= [
      'Human', 'Mutant', 'Cyborg', 'Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Halfling', 'Orc', 'Tiefling', 'Thri-Kreen', 'Half-Giant',
      'Animal', 'Amphibious Ones', "B'yakhee", 'Colour Out of Space', "Cthugah's Flame Creature", 'Deep One', 'Dimensional Shambler', 'Dinosaur', 'Diseased Guardian', 'Dolm Ooze',
      'Dolm Pudding', 'Dolm Worm', 'Flying Polyp', 'Giant Jungle Ant', 'Great Race', 'Jale Slime', 'Lake Monster', 'Mi-Go', 'Mummy', 'Mummy Brain',
      'Primordial One', 'Servitor of the Outer Gods', 'Shoggoth', 'Space Alien', 'Species 23750', 'Ulfire Jelly', 'Ulfire Mold', 'Unquiet Worm', 'Spawn of Yog-Sothoth', 'Spawn of Shub-Niggurath',
      'Anhkheg', 'Axe Beak', 'Baluchiterium', 'Basilisk', 'Beholder', 'Bulette', 'Carrion Crawler', 'Catoblepas', 'Chimera', 'Cockatrice',
      'Displacer Beast', 'Ettin', 'Gas Spore', 'Gelatinous Cube', 'Gorgon', 'Harpy', 'Hell Hound', 'Hydra', 'Intellect Devourer', 'Lamia',
      'Larva', 'Manticore', 'Mind Flayer', 'Neo-Otyugh', 'Ogre', 'Otyugh', 'Owlbear', 'Peryton', 'Remorhaz', 'Rust Monster',
      'Salamander', 'Shambling Mound', 'Giant Slug', 'Stirge', 'Su-Monster', 'Thought Eater', 'Troglodyte', 'Troll', 'Umber Hulk', 'Xorn',
      'Old One'
    //'Azathoth', 'Colorless Ooze', 'Crawling God', 'Cthugah', 'Cthulhu', 'Deep Gibbering Madness', 'Desiccating Slime of the Silent Halls', 'Fetor of the Depths', 'Foul Putrescence', 'God of the Primal Void',
    //'Green Ooze Pool', 'Hastur the Unspeakable', 'Inky Crawler', "I'Thaqua", 'It of the Fallen Pylons', 'Leprous Dweller Below', 'Lurker Amidst the Obsidian Ruins', 'Lurker of the Putrescent Pits', 'Nyarlathotep', 'Putrescent Stench',
    //'Shambler of the Endless Night', 'Shub-Niggurath', 'Slime God', 'Squamous Worm of the Pit', 'Suckered Abomination', 'Tentacled One', 'Violet Mist', 'Watery Death', 'Weird God', 'Yog-Sothoth'
    ]
      creature = new Subject

    elements: string[]= [
      'Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon',
      'Sodium', 'Magnesium', 'Aluminum', 'Silicon', 'Phosphorus', 'Sulfur', 'Chlorine', 'Argon', 'Potassium', 'Calcium',
      'Scandium', 'Titanium', 'Vanadium', 'Chromium', 'Manganese', 'Iron', 'Cobalt', 'Nickel', 'Copper', 'Zinc',
      'Gallium', 'Germanium', 'Arsenic', 'Selenium', 'Bromine', 'Krypton', 'Rubidium', 'Strontium', 'Yttrium', 'Zirconium',
      'Niobium', 'Molybdenum', 'Technetium', 'Ruthenium', 'Rhodium', 'Palladium', 'Silver', 'Cadmium', 'Indium', 'Tin',
      'Antimony', 'Tellurium', 'Iodine', 'Xenon', 'Cesium', 'Barium', 'Lanthanum', 'Cerium', 'Praseodymium', 'Neodymium',
      'Promethium', 'Samarium', 'Europium', 'Gadolinium', 'Terbium', 'Dysprosium', 'Holmium', 'Erbium', 'Thulium', 'Ytterbium',
      'Lutetium', 'Hafnium', 'Tantalum', 'Tungsten', 'Rhenium', 'Osmium', 'Iridium', 'Platinum', 'Gold', 'Mercury',
      'Thallium', 'Lead', 'Bismuth', 'Polonium', 'Astatine', 'Radon', 'Francium', 'Radium', 'Actinium', 'Thorium',
      'Protactinium', 'Uranium', 'Neptunium', 'Plutonium']
      element = new Subject

    items: string[]= [
      'Junk', 'Armor', 'Shield', 'Weapon', 'Treasure']
      item = new Subject

    prismatics: string[]= [
      'Red: fire damage, save for half',
      'Orange: acid damage, save for half',
      'Yellow: lightning damage, save for half',
      'Green: save vs poison or die, half damage on save',
      'Blue: save or turn to stone',
      'Purple: save or go insane',
      'Dolm: save or mutate',
      'Jale: save or wildsurge',
      'Ulfire: save or polymorph',
      'Brown: save or cursed',
      'Black: radiation damage, save for half',
      'White: cold damage, save for half',
      'Clear: x-ray damage, save for half',
      'Roll again twice']
      prismatic = new Subject

    satechs: string[]= [
      'Projectile Weapon', 'Melee Weapon', 'Power Cell', 'Grenades', 'Grenade Launcher', 'Bomb', 'Mini Missiles', 'Missle', 'Telescopic Sight', 'Night Vision Sight', 'Reflective Armor',
      'Battle Armor', 'Space Suit', 'Force Field', 'Absorption Field', 'Communicators', 'Healing Doses', 'Night Vision Goggles', 'Robots', 'Cybernetics', 'Roll Twice']
      satech = new Subject

    carouses: string[]= [
      "Wake up in room of stinking drunks covered in vomit",
      "Meeting, possible new friends among the down trodden",
      "Wedding gets the village singing, dancing and gorging",
      "Wake up with d4 drunks who followed you home and think you are now buddies",
      "Meet a shifty man with a big coat offering dodgy goods",
      "Stinking old man dead in your bed with bottle in hand",
      "Tavern staff of a venue like you and you get a free drink every visit",
      "Awake with headache and hideous mutant cooking you breakfast",
      "Next morning after feast cough up a large live frog",
      "You meet a cunning street urchin who can procure goods and services",
      "Villagers get carried away and perform bloody sacrifices and make a mess",
      "You help a beggar and he and his peers in beggars guild keep an eye out for you",
      "Violent drunken fight breaks out over sports event",
      "Awake in marriage bed with d4 new brides of various species",
      "An old crippled drunk knows many stories of treasure and exotic places",
      "Awake with mutants in shack and a d3 petty mutations and a single major one",
      "You meet an adventurer from a rival party and get along famously",
      "Awake with d4 signed IOU notes from last nights gambling companions",
      "You befriend a terrible gossip who knows lots of local news",
      "Masked villagers you danced with turned out to be spirits who disappeared",
      "Awake with interesting map tattooed on back",
      "Invitation to wedding, meet attractive person and get horribly drunk",
      "Spend time drinking, telling stories, feasting and vomiting",
      "Awake with a new pet who follows you about like a sphinx cat or capybara",
      "You wake up in a strange bed with no one, but there is a scent of long rotting flesh coming from under the bed.",
      "Poisoned spent time ill and feeling vile",
      "Awake in witch shack with her brewing you a potion in payment for your services",
      "Invited to orgy with d4; 1=mystical cult, 2=blackmailed after, 3=shapeshifters, 4=demons",
      "Had a huge tavern fight and not welcome there again",
      "Awake with awesome tattoos all over your body detailing your adventures",
      "Offered to join a gang or a job for a gang",
      "Got a horrible disease like groin rot, parasitic crabs or worms",
      "Awake with tattoos dealing with religion (hopefully one you ascribe too)",
      "Invited to a cult or sect or secret society",
      "Got into a fight or duel with a local spent rest of time drunk",
      "Awake with a girdle of gender change locked and cursed to be irremovable",
      "Invited to guild or fraternal order",
      "Awake with 2d6 foot long beard and hair from drinking odd potions",
      "You wake up in bed with a total stranger when they wake up, they are: roll 1d6 1 = Friendly, 2 = Neutral, 3 = Hostile, 4 = Disgusted, 5 = Frightened, 6 = In Love.",
      "You wake up in your bed. You are wearing a full face of makeup and there are 1d4 GP on the nightstand.",
      "Awake with naked halflings in a nest made of hair in their shack",
      "Woke up married to local in family home",
      "Awake with belly button missing",
      "You wake up in your bed. You would get up, but you are tied to it with leather straps.",
      "Hear stories of possible near by dungeon or lair",
      "New growth with a face declares it is your conjoined twin and how great this will be",
      "A huge bar fight results in a gang hating you, you will be attacked anywhere they see you",
      "Awake with horrible lice infestation causing itching and sores",
      "You wake up in your bed. You are wearing a large hat, fake nose, and mustache. Walking around town later, you see a large number of wanted posters. The person depicted looks a lot like you. Only they have a bigger nose. And a mustache. And a hat.",
      "Invited to secret pleasure cult orgy with drugs, slaves and demons",
      "A huge bar fight results in you being locked up with 3d6 GP bail",
      "Awake in harem room with exit guarded by unforgiving mutant eunuchs",
      "Someone mistakes you for enemy and attacks you",
      "You wake up in your bed. You are 1d20 GP poorer. Everything else seems normal, until the life size, lifelike bust of you carved from cheese is delivered.",
      "Awake floating in a septic tank with singing rats",
      "Awake dizzy with part of strange map in hand",
      "A gang of youths try and rob you when drunk",
      "You wake up in your bed. Take the cost of your armor type (non-magical), multiply it	by 1d4. You are that many GP poorer but you have the result of that 1d4 roll in otherwise cosmetically identical suits of armor in different colors.",
      "Tried some strange drug now can detect magic for 24 hours",
      "A stranger shanks you in an alley",
      "A punk challenges you to a fight 1d4; 1=knife, 2=fists, 3=wrestling, 4=swords",
      "You wake up in your bed. You are 1d10 GP poorer and have numerous bruises of unknown origin.",
      "Wake up after partying with wizards now speak d4 exotic or dead languages",
      "Trashy affair leads to friendship with professional adventurer from rival party",
      "Parents upset you have corrupted their child demand compensation or a marriage",
      "Awake naked in bed of local leader",
      "A tavern worker has a tumble with you 1d4, 1=stalker, 2=diseased, 3=thief, 4=actually was pretty good",
      "You wake up in your bed. Your knuckles are bruised, bloodied, and full of splinters. Your pockets are filled with fresh produce. You have a vague memory of a fruit cart looking at you funny.",
      "You were having great time when you had visions of demons entering via a gate",
      "Wake up with ugly person after drinking 1d4; 1=mutant, 2=witch, 3=now pregnant, 4=demands payment",
      "You wake up in your bed. You are wearing a suit cobbled together from bits and pieces of the skins of various animals. Later in the day, you hear stories of how some clawed, antlered monster was seen peeping in windows and climbing on roofs throughout the night.",
      "Skin pigment has been changed from wizard potion sample party",
      "You wake up in your bed. At your feet, you see 4d6 mice standing on their hind legs watching you. As soon as you stir, they scatter, leaving behind what appears to be a tiny altar with offerings of bread crust and cheese crumbles. One lock of your hair is now shorter than the rest.",
      "You wake up on the floor of your room. In your bed, there are 2d4 sleeping prostitutes. You are still fully clothed and unsticky.",
      "Vomiting in morning, spew contains party of tiny drowned adventurers",
      "Spent the night with a shape shifting monster who adopts true form then disappears",
      "Old man leaves you his treasure map",
      "You wake up on the floor of your room. You are covered in dirt and mud. On your bed is a freshly exhumed corpse.",
      "You wake up on the floor of your room. All the furniture and rugs have been moved up against the walls. In the center is a crudely drawn summoning circle ringed with the remains of black candles. At the center of the circle is a really fantastic looking sandwich.",
      "An angry pimp with gang chase you looking for payment",
      "You wake up in a temple. Several monks have gathered around you and are praying for you.",
      "Awake with a bandaged wound, later see someone selling a clone of you",
      "As you get to the bedroom with a potential lover a gang awaits to rob you",
      "You wake up in a temple. In a coffin. Several monks are standing over you offering a pauper's last rites. They seem surprised when you start moving.",
      "Wake up naked in trash heap 1d4; 1=diseased, 2=bite marks, 3=pig sleeping on you, 4=body part missing",
      "You caught a thief and the law beat them and drove them out of village",
      "As you awake sore all over a tentacled thing oozes away into a drain",
      "Lover's partner comes home d3; 1=attacks you, 2=demands cash, 3=joins in",
      "An angry mob chased you out of village",
      "Have become addicted to toad licking visions and always looking for new types",
      "Bet you can taunt local tough guy and escape a beating win 3d6gp",
      "A village drunk talks about strange caves full of treasure in hills",
      "Wild rumor about you and octopus mutants spread everywhere",
      "Bet on a race 1d4; 1=lose 3D6gp, 2=lose 3d6sp, 3=win 3d6sp 4=win 3d6gp",
      "An old wise woman gives you a healing potion",
      "Awake in mutant feeding pit where they wallow in rancid food stuff like a hot tub",
      "Drinking contest 1d4; 1=win 3d6 gold, 2=wake up covered in vomit, 3=drugged,	4=sick for d4 days",
      "Hunters offer to initiate you in their secret lodge dedicated to the “Wood God”",
      "Awake in bedroom of sacred virgins of a dangerous cult",
      "Target shooting contest to win 100gp 1d4; 1=darts, 2=dagger, 3=bow, 4=(reluctant) gnome throwing",
      "Someone shows you where wild magic mushrooms grow in a field",
      "Awake in bed of magic user who is obsessed with you, likes stalking and meddling",
      "You wake up in a temple. You are wearing fine clothes. By the altar is a coffin, the corpse inside is wearing your clothes.",
      "Offered a patch of good land and a shack",
      "You wake up in a temple naked behind the altar. The first of the faithful are starting to enter for services. Someone has defecated in the offering dish.",
      "Bet who can steal most gold in one hour, winner gets losers loot",
      "Sheriff thinks you are a hoot and lets you do all kinds of rotten stuff",
      "Bet who can take most 1d3; 1=punches, 2=knife stabbings, 3=chairs to the head",
      "Hear about old man with several dungeon maps from his youth",
      'Awake on surgical table with newly sculptured face "just as you requested"',
      "Bet who can loot most from a dungeon in three days, winners gets losers loot",
      "Awake in home of old magic user who declares you his heir for saving his life",
      "Made friends with a gang of bandits who all think fondly of you",
      "A local leader you met at an orgy is obsessed with you and abuses their power",
      "Someone picks your pockets",
      "You wake up in an alley. 1d6 hobos are wearing 1d6 articles of your clothing.",
      "A wealthy lover sends you valuable gifts 1d3; 1=slave, 2=ivory, 3=healing potion",
      "Gang demand you pay protection money",
      "Made good new friend with same class and aspirations",
      "Narrowly escaped being eaten at orgy full of doppelgangers, cannibals, or cultists",
      "Offend a gang, now they all hate you and your friends",
      "Crooks follow you to your accommodation, plan to rob you",
      "Joined a secret society seeking power and fabulous feasts and drug abuse",
      "Joined secret cult hoping on finding secret pleasures, instead they have a sealed gate",
      "Assassin order offer you a discount",
      "You wake up in an alley. A group of local children are poking you with sticks and arguing about whether or not you're dead.",
      "While in a banquet discovered secret door to forgotten subterranean complex",
      "Offered stolen goods 1d4; 1=owner seeking return, 2=police seeking, 3=cursed, 4=bargain",
      "A village idiot decides will follow you everywhere",
      "Awake in bed with partners corpse chewed up and blood drained",
      "A gang trap you, intending to give you a beating and rob you",
      "You wake up in an alley. A group of urchins are standing over you and arguing about how to split your money or how much they could sell your hair for if they shaved you.",
      "Chased by lovers angry partner naked through the streets",
      "A gang send a hired killer to assassinate you",
      "Gain addiction to tea or coffee or some drinkable herb drink",
      "Wasted money on a cheap prostitutes",
      "Drug induced dream of running from strange nightmares in dreamworld",
      "Your alcoholism goes up a notch, you always carry some grog now",
      "You wake up in an alley. There is a dead body next to you.",
      "You had a romance but it turned sour at the end",
      "Drug induced dream showing lair of a chaos infestation nearby",
      "You had a romance and they are waiting for you to return and marry them",
      "While staggering to your place of rest followed by creepy shadowy occult being",
      "You had a romance and got engaged",
      "Awake with carved ivory armbands with no idea of where they came from",
      "You wake up in an alley. Your clothing is splattered in blood and you are carrying a sack with 1d100 GP worth of an illegal substance.",
      "After drinking with a stranger discovered they were a shapeshifter ",
      "You had a romance and your lover is following you",
      "Lost in a dust storm wandering home found a weathered bone idol of a god",
      "Awaken naked in gutter covered in slime",
      "Take so many drugs most don't really affect you much anymore",
      "All the village thinks you a sleazy and loose, possibly a prostitute",
      "Gain taste for unusual and exotic prostitutes",
      "Found a wandering idiot who follows you home and serves you faithfully",
      "Found a bone astrolabe to navigate to a mysterious location",
      "You wake up in an alchemist's shop. There are a number of empty vials on the floor around you. For the next 2d6 days, everything that should be green looks purple and food tastes like it's vibrating. Occasionally, you burp multi-colored bubbles.",
      "A witch came demanding hospitality, she gave you a potion for your respect",
      "Found bone tablets in some rubbish indicating a cavern full of drugs",
      "You wake up in a crypt. You hear retreating footsteps as one person complains to another that nothing makes him go soft faster than realizing they're still alive.",
      "Given a brain in a jar by a shaman that can talk telepathically",
      "Awake to find a d6 kobolds who declare you are their master in your bed",
      "You wake up in a closed coffin, crammed in next to you is someone recently deceased. Outside, you hear the sounds of a funeral service.",
      "Met a human from beyond Carcosa who gave you a map of their travels",
      "You wake up in the communal lodge of a fraternal order. Your clothing and all exposed skin are now covered in crudely drawn pictures of genitalia. (Ink takes 1d6 days or 2d12 washes to fade completely.)",
      "Village idiot saved you from poisoning by drinking your beer",
      "Found several burnt shadow like remains of people in a back alley",
      "Saw robed cultists sneaking into hidden hideout with bound sacrifices",
      "You wake up on a cold marble slab surrounded by candles with two men in robes standing vigilant over you.",
      "Witnessed a murder",
      "Offered a baby monster in a sack for cheap price",
      "Fire starts and village blame you for destruction",
      "Saved a local from death and family grateful, offer to help you any way they can",
      "You wake up with a new magic item. It's original owner will want it back.",
      "Everything seems fine until you open your backpack and discover someone's complete skeleton inside",
      "Priest recognizes your being sent by divine ones and declares you a cult saint",
      "Offered a rusty old item which you recognize as magic or containing hidden information",
      "Someone yells at you to wake up, it seems you challenged someone to a duel at noon, you have 15 Minutes left, and you're still drunk.",
      "Witnessed local leaders fuse into a shoggoth during an orgy, now they want you dead",
      "Offered 1d6 cheap potions! 1D4; 1=weak healing, 2=fake, 3=reduced duration, 4=full strength",
      "Given bottle, by hunter, of pheromones to attract savage pack of giant ants",
      "Offered quality weapon or armor at cheap price by drunk",
      "You find yourself in a cage outside the city. You have no memory of how you got there or what for.",
      "Eat strange fleshy fruit, gain knowledge of hidden garden of unearthly delights",
      "Offered cheap slave 1d4; 1=orc, 2=child, 3=kobold, 4=goblin",
      "As you wake up you discover a shiny new tattoo on your chest, it glows and it seems to be some kind of rune.",
      "Escaped orgy where participants fused into a shoggoth and chased you till dawn",
      "Offered a map 1d4; 1=dungeon location, 2=hidden treasure, 3=bandit lair, 4=lost magic item",
      "You wake up in a tent full of sleeping, apparently drunk Goblins, there's also a bounty on their heads. But all your weapons are gone.",
      "Met priest who tells of lost settlement of outsiders in the mountains",
      "You wake up half in a ditch of stinking greenish water. Something is crawling up your leg inside of your clothes then it bites your inner thigh...",
      "Find a giant beetle wing casing with strange carvings and maps",
      "Learn whereabouts of wanted criminal 1d4; 1=traitor, 2=murderer, 3=bandit, 4=arsonist",
      "Some masked villagers drugged you and tried to sacrifice you",
      "Develop case of worms that keep away all other parasites and advantage on poison saves",
      "You swore an oath to perform a great deed on behalf of a local church. In their temple. Standing on their altar. During a ceremony.",
      "You impressed local bandits with your willingness to injure yourself to get laughs. They like you.",
      "Flesh sculptor improves your appearance in return for sex",
      "Wake up covered in blood 1d4; 1=it's yours, 2=dead prostitute, 3=dead animal, 4=dog sized bedbug",
      "Somebody has shaved off all your hair. A quick check around your body reveals that, yes, they shaved all of your hair.",
      'Offered "food of the gods" gain 10% height and weight and +d4 HP',
      "You awaken with an entire small tavern's worth of people crammed into your bed in various states of undress. You're sticky with spilled beer, somebody has drawn a huge mustache on your face in soot, and you have a horrible feeling that one of your new friends missed the chamber pot in the middle of the night. There is vomit in your left boot, and the right is missing entirely.",
      'You wake up covered in blood, scrapes, cuts, and with a wobbly tooth. Your companions tell you that you stumbled in late last night yelling "You should have seen the other guy!". Examination of your belongings reveals you are now 100GP richer. It seems you may have gotten into a fight with, or possibly mugged, somebody quite well off. There is a heavy knock on the tavern door, and you can see guards outside.',
      "Found a living spell book made of flesh with d6 spells and notes on lost treasure",
      "As the sun rises your lover awakes grinning for more 1d4; 1=halfling, 2=dwarf, 3=gnome, 4=goblin",
      "Chased by a phantom while on way to inn from lover's house",
      "Wealthy merchant hears of your adventures and gives you a slave gladiator",
      "Wake up married, earnest new spouse looks eager, family pursue if you try to escape",
      "Groped and whispered to by a lecherous phantom spirit",
      "Gifted a +1 tooth dagger by a kind adventurer you told your stories to",
      "Wake up covered in vomit in strange bed in strange house",
      "Spent night with friendly local, find out later they died years ago",
      "Captured an evil cult leader and locals gave you a +1 bone sword",
      "Wake up with new health problem 1d4; 1=parasites, 2=hideous boils, 3=goblin pox, 4=sweat & shakes",
      "Find some old bottles of ale with strange labels that peel off. Draw 1d3 cards from the Deck of a Few Things.",
      "Priest of Xor transplanted some of your organs with better vat grown ones",
      "You wake up with a terrible headache, and are inside a closed casket turned upside down in an abandoned warehouse.",
      "Spend the night playing a weird card game. Draw 1d3 cards from the Deck of Several Things.",
      "Priest removes all unwanted mutations.",
      "A person at a party drops out of sight, transforms into inhuman being and creeps or flies away",
      "Gamble with a Mysterious Stranger. Roll Oddy Bodden's Dice.",
      "Priests of Xor attach new muscle fibers to your body",
      "Fortune teller reads your future. Draw 1d3 cards from the Deck of Many Things.",
      "You find a wedding ring (worth 1d10x1d100 GP) on your finger. Even after you take off the ring, you may or may not notice shadowy people following you.",]
      carouse = new Subject

    curses: string[]= [
      'Fragile: A natural 1 on an attack automatically shatters your weapon beyond repair.',
      'Weakness: Your damage is reduced by one die type. A weapon that does 1d10 does 1d8. A spell that does 6d6 does 6d4.',
      'Speech: Anyone who can understand you suffers 1 point of damage each round you speak.',
      'Dark Reincarnation: Once you are slain your are immediately reincarnated as an undead creature. D4: 1. Zombie, 2. Ghoul, 3. Ghast, 4. Whight',
      'Thirst: Water or other liquids provide you no hydration. You must consume magical potions to be hydrated. Failure to consume potions will result in death in 1d4+2 days.',
      'Indecision: You hesitate in all your actions. You attack once every two rounds and all spell casting times are doubled.',
      "Crawl: You can't stand or walk, but you can crawl. You are considered prone and your movement is reduced by half.",
      "Incurable: You don't naturally heal damage and all cure spells have no effect on you.",
      "Painful: All damage dealt to you is maxed.",
      "Nearsighted: You see perfectly clear within 10' of you. Beyond that your vision is blurry and you can't perceive anything. Your suffer 50% miss chance on all missile attack rolls.",
      "Farsighted: Your vision is blurry within 10' of you. All your melee attacks suffer a 50% miss chance. Beyond 10' you see perfectly clear.",
      "Remorseful: Every time you slay an enemy you feel sorrow for their loss. You can't do anything for 1d4 rounds as you mourn their death.",
      "Addiction: Your addicted to blueberry pie or whatever. If on any given day you don't indulge in your vice you enter a severe depression and refuse to do anything except find your blueberry pie.",
      "Beacon: Your draw unwanted attention. All random encounter rolls are doubled.",
      "Bleeder: Every time you take damage you continue to bleed for one additional round. Repeat the damage your were dealt the following round.",
      "Coward: Every time you are presented with danger your must make a Magic Save to maintain your composure. Failure mean you move at full speed away from the danger. A new check can be made each round.",
      "Misfortune: All saving throws are made with a 2d8 (not open ended) rather then a d20.",
      "Youthful: Each day your age is reduced by 1d6 years. If you pass the infant stage you cease to exist.",
      "Growing Old: You age 1d6 years each day. You gain all the negative physical modifiers but none of the beneficial mental ones associated with age.",
      "Poor Comprehension: Every time you read or are spoken to you must make an intelligence attribute check to comprehend the meaning.",
      "Doomed: Will automatically save the next save vs death.",
      "Cursed to die in a fire: Fire does double damage.",
      "Mute: Cannot cast spells.",
      "Hiccups: Always fail stealth checks. Never surprise anyone.", ]
      curse = new Subject

      cyborgs:string[]=[
        'Head', 'Torso',
        'Right hand', 'Right arm at elbow', 'Right arm',
        'Left hand', 'Left arm at elbow', 'Left arm',
        'Right foot', 'Right leg at knee', 'Right leg',
        'Left foot', 'Left leg at knee', 'Left leg',]
        cyborg = new Subject

        morphs:string[]=[
          'HUMANOID', 'HUMANOID', 'HUMANOID', 'HUMANOID', 'HUMANOID', 'HUMANOID', 'HUMANOID', 'HUMANOID', 'HUMANOID', 'HUMANOID',
          'SPHERICAL W/ RETRACTABLE APPENDAGES', 'SPHERICAL W/ RETRACTABLE APPENDAGES',
          'ARACHNID / INSECTILE', 'ARACHNID / INSECTILE',
          'MYRIAPOD', 'MYRIAPOD',
          'SERPENTINE', 'SERPENTINE',
          'COIL-SHAPED (WALKS END-OVER-END)', 'BIZARRE']
          morph = new Subject

  constructor() {}

  getRandomTreasure() {
    const randomTreasure = this.treasures[Math.floor(Math.random()*this.treasures.length)]
    this.treasure.next(randomTreasure)
  }

  getRandomGrwchart() {
    const randomGrwchart = this.grwcharts[Math.floor(Math.random()*this.grwcharts.length)]
    this.grwchart.next(randomGrwchart)
  }

  getRandomGate() {
    const randomGate = this.gates[Math.floor(Math.random()*this.gates.length)]
    this.gate.next(randomGate)
  }

  getRandomComchart() {
    const randomComchart = this.comcharts[Math.floor(Math.random()*this.comcharts.length)]
    this.comchart.next(randomComchart)
  }

  getRandomUncomchart() {
    const randomUncomchart = this.uncomcharts[Math.floor(Math.random()*this.uncomcharts.length)]
    this.uncomchart.next(randomUncomchart)
  }

  getRandomRarechart() {
    const randomRarechart = this.rarecharts[Math.floor(Math.random()*this.rarecharts.length)]
    this.rarechart.next(randomRarechart)
  }

  getRandomPolytype() {
    const randomPolytype = this.polytypes[Math.floor(Math.random()*this.polytypes.length)]
    this.polytype.next(randomPolytype)
  }

  getRandomCreature() {
    const randomCreature = this.creatures[Math.floor(Math.random()*this.creatures.length)]
    this.creature.next(randomCreature)
  }

  getRandomElement() {
    const randomElement = this.elements[Math.floor(Math.random()*this.elements.length)]
    this.element.next(randomElement)
  }

  getRandomItem() {
    const randomItem = this.items[Math.floor(Math.random()*this.items.length)]
    this.item.next(randomItem)
  }

  getRandomPrismatic() {
    const randomPrismatic = this.prismatics[Math.floor(Math.random()*this.prismatics.length)]
    this.prismatic.next(randomPrismatic)
  }

  getRandomSatech() {
    const randomSatech = this.satechs[Math.floor(Math.random()*this.satechs.length)]
    this.satech.next(randomSatech)
  }

  getRandomCarouse() {
    const getRandomCarouse = this.carouses[Math.floor(Math.random()*this.carouses.length)]
    this.carouse.next(getRandomCarouse)
  }

  getRandomCurse() {
    const randomCurse = this.curses[Math.floor(Math.random()*this.curses.length)]
    this.curse.next(randomCurse)
  }

  getRandomCyborg() {
    const randomCyborg = this.cyborgs[Math.floor(Math.random()*this.cyborgs.length)]
    this.cyborg.next(randomCyborg)
  }

  getRandomMorph() {
    const randomMorph = this.morphs[Math.floor(Math.random()*this.morphs.length)]
    this.morph.next(randomMorph)
  }

}
