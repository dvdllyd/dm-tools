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


  constructor() {}

  getRandomTreasure() {
    const randomTreasure = this.treasures[Math.floor(Math.random()*this.treasures.length)]
    this.treasure.next(randomTreasure)
  }

  getRandomGrwchart() {
    const randomGrwchart = this.grwcharts[Math.floor(Math.random()*this.grwcharts.length)]
    this.grwchart.next(randomGrwchart)
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
}
