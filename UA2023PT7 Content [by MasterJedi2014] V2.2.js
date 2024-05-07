/*	-INFORMATION-
	Subject:	Classes, Subclasses, Feats, & Spells
	Effect:		This script adds the content from the 2023 Unearthed Arcana "Player's Handbook Playtest 7" article.
				This file has been made by MasterJedi2014, borrowing a lot of code from MPMB and those who have contributed to the sheet's existing material.
	Code by:	MasterJedi2014, using MorePurpleMoreBetter's code as reference
	Date:		2024-04-10 (sheet v13.1.0)
*/

var iFileName = "UA2023PT7 Content [by MasterJedi2014] V2.2.js";
RequiredSheetVersion("13.1.0");

SourceList["UA23PT7"] = {
	name : "Unearthed Arcana 2023: Player's Handbook Playtest 7",
	abbreviation : "UA23PT7",
	date : "2023/09/07",
	url : "https://media.dndbeyond.com/compendium-images/ua/ph-playtest7/tsgOb3llF22AL0nU/UA2023-PH-Playtest7.pdf",
};

SourceList["MJ:HB"] = {
	name : "MasterJedi2014's Homebrew",
	abbreviation : "MJ:HB",
	date : "2024/05/07",
};

// Add UA23PT7 Warlock class
ClassList.warlock_ua23pt7 = {
	name : "Warlock (UA:PT-vii)",
	regExpSearch : /warlock/i,
	source : [["UA23PT7", 25], ["MJ:HB", 0]],
	primaryAbility : "Charisma",
	prerequisite : "Charisma 13+",
	prereqeval : function(v) {
		return What('Cha') >= 13;
	},
	die : 8,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Wis", "Cha"],
	skills : ["\n\n" + toUni("Warlock") + ": Choose two from Arcana, Deception, History, Intimidation, Investigation, Nature, Religion", ""],
	armor : [
		[true, false, false, false],
		[true, false, false, false],
	],
	weapons : [
		[true, false, [""]],
		[true, false, [""]],
	],
	equipment : "Warlock starting equipment:" +
		"\n \u2022 Arcane Focus (Orb)," +
		"\n \u2022 Book (Occult Lore)," +
		"\n \u2022 Dagger (2)," +
		"\n \u2022 Leather Armor," +
		"\n \u2022 Scholar’s Pack," +
		"\n \u2022 Sickle," +
		"\n \u2022 and 15 gp;" +
		"\n\nAlternatively, choose 100 gp worth of starting equipment instead of the class' starting equipment.",
	subclasses : ["Otherworldly Patron", []],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	abilitySave : 6,
	spellcastingFactor : "warlock1",
	spellcastingKnown : {
		cantrips : [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		spells : "list",
		prepared : true
	},
	spellcastingList : {
		class : ["warlock", "warlock_ua23pt7"],
		level : [0, 5], //lower and higher limit
	},
	features : {
		"eldritch invocations ua23pt7" : { //Ripped directly from "ListsClasses.js" and then altered
			name : "Eldritch Invocations",
			source : [["UA23PT7", 26], ["SRD", 47], ["P", 107], ["MJ:HB", 0]],
			minlevel : 1,
			description : desc([
				'Use the "Choose Feature" button above to add Eldritch Invocations to the third page',
				"Whenever I gain a warlock level, I can replace an invocation I know with another"
			]),
			additional : levels.map(function (n) {
				return (n < 2 ? 1 : n < 5 ? 3 : n < 7 ? 5 : n < 9 ? 6 : n < 12 ? 7 : n < 15 ? 8 : n < 18 ? 9 : 10) + " invocations known";
			}),
			extraname : "Eldritch Invocation",
			extrachoices : ["Agonizing Blast (prereq: Warlock cantrip)", "Armor of Shadows", "Ascendant Step (prereq: level 5 warlock)", "Beast Speech", "Beguiling Influence", "Bewitching Whispers (prereq: level 7 warlock)", "Book of Ancient Secrets (prereq: Pact of the Tome)", "Chains of Carceri (prereq: level 15 warlock, Pact of the Chain)", "Devil's Sight", "Dreadful Word (prereq: level 7 warlock)", "Eldritch Sight", "Eldritch Smite (prereq: level 5 warlock, Pact of the Blade)", "Eldritch Spear (prereq: Eldritch Blast cantrip)", "Eyes of the Rune Keeper", "Fiendish Vigor", "Gaze of Two Minds (prereq: level 5 warlock)", "Lifedrinker (prereq: level 9 warlock, Pact of the Blade)", "Mask of Many Faces", "Master of Myriad Forms (prereq: level 15 warlock)", "Minions of Chaos (prereq: level 9 warlock)", "Mire the Mind (prereq: level 5 warlock)", "Misty Visions", "One with Shadows (prereq: level 5 warlock)", "Otherworldly Leap (prereq: level 9 warlock)", "Repelling Blast (prereq: Eldritch Blast cantrip)", "Sculptor of Flesh (prereq: level 7 warlock)", "Sign of Ill Omen (prereq: level 5 warlock)", "Thief of Five Fates", "Thirsting Blade (prereq: level 5 warlock, Pact of the Blade)", "Visions of Distant Realms (prereq: level 15 warlock)", "Voice of the Chain Master (prereq: Pact of the Chain)", "Whispers of the Grave (prereq: level 9 warlock)", "Witch Sight (prereq: level 15 warlock)"],
			extraTimes : levels.map(function (n) {
				return n < 2 ? 1 : n < 5 ? 3 : n < 7 ? 5 : n < 9 ? 6 : n < 12 ? 7 : n < 15 ? 8 : n < 18 ? 9 : 10;
			}),
			"agonizing blast (prereq: warlock cantrip)" : {
				name : "Agonizing Blast",
				description : desc([
					"I can add my Charisma modifier to the damage of one of my known Warlock cantrips.",
					"I can change which cantrip benefits from this invocation upon gaining a Warlock level.",
				]),
				source : [["UA23PT7", 29], ["SRD", 48], ["P", 110], ["MJ:HB", 0]],
				submenu : "[improves Warlock cantrips]",
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (classes.known.warlock_ua23pt7 && v.thisWeapon[3] && v.thisWeapon[4].indexOf('warlock_ua23pt7') !== -1 && SpellsList[v.thisWeapon[3]].level === 0) {
								output.extraDmg += What('Cha Mod');
							};
						},
						"My Warlock cantrips get my Charisma modifier added to their damage."
					],
					spellAdd : [
						function (spellKey, spellObj, spName) {
							if (spName.indexOf("warlock_ua23pt7") == -1 || !What("Cha Mod") || Number(What("Cha Mod")) <= 0 || spellObj.psionic || spellObj.level !== 0) return;
							return genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", "Cha");
						},
						"I add my Charisma modifier to the damage of my Warlock cantrips."
					]
				}
			},
			"armor of shadows" : {
				name : "Armor of Shadows",
				description : desc("I can cast Mage Armor on myself at will, without using a spell slot."),
				source : [["UA23PT7", 29], ["SRD", 48], ["P", 110], ["MJ:HB", 0]],
				spellcastingBonus : {
					name : "Armor of Shadows",
					spells : ["mage armor"],
					selection : ["mage armor"],
					firstCol : "atwill"
				},
			},
			"ascendant step (prereq: level 5 warlock)" : {
				name : "Ascendant Step",
				description : desc("I can cast Levitate on myself at will, without using a spell slot."),
				source : [["UA23PT7", 29], ["SRD", 48], ["P", 110], ["MJ:HB", 0]],
				submenu : "[warlock level  5+]",
				spellcastingBonus : {
					name : "Ascendant Step",
					spells : ["levitate"],
					selection : ["levitate"],
					firstCol : "atwill"
				},
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 5; },
			},
			"beast speech" : {
				name : "Beast Speech",
				description : desc("I can cast Speak with Animals at will, without using a spell slots."),
				source : [["SRD", 48], ["P", 110]],
				spellcastingBonus : {
					name : "Beast Speech",
					spells : ["speak with animals"],
					selection : ["speak with animals"],
					firstCol : "atwill"
				}
			},
			"beguiling influence" : {
				name : "Beguiling Influence",
				description : desc("I gain proficiencies with the Deception and Persuasion skills."),
				source : [["SRD", 48], ["P", 110]],
				skills : ["Deception", "Persuasion"]
			},
			"bewitching whispers (prereq: level 7 warlock)" : {
				name : "Bewitching Whispers",
				description : desc("Once per long rest, I can cast Compulsion using a warlock spell slot."),
				source : [["SRD", 48], ["P", 110]],
				submenu : "[warlock level  7+]",
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Bewitching Whispers",
					spells : ["compulsion"],
					selection : ["compulsion"],
					firstCol : "oncelr"
				},
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 7; }
			},
			"book of ancient secrets (prereq: pact of the tome)" : {
				name : "Book of Ancient Secrets",
				description : desc([
					"I can add any two 1st-level spells that have the ritual tag to my Book of Shadows.",
					"If I come across spells with the ritual tag, I can transcribe them into my book, as well.",
					"I can cast any of these spells in my Book of Shadows as rituals, but not as normal spells.",
					"I can cast my known warlock spells as rituals if they have the ritual tag."
				]),
				source : [["SRD", 48], ["P", 110]],
				submenu : "[improves Pact of the Tome]",
				eval : function() {
					CurrentSpells['warlock-book of ancient secrets'] = {
						name : 'Book of Ancient Secrets',
						ability : 'warlock',
						list : {class : 'any', ritual : true},
						known : {spells : 'book'},
						refType : "feat"
					};
					if (CurrentSpells['book of ancient secrets'] && CurrentSpells['book of ancient secrets'].selectSp) {
						// v12.999 style is present, so transfer chosen spells over and remove it
						CurrentSpells['warlock-book of ancient secrets'].offsetBo = CurrentSpells['book of ancient secrets'].offsetBo;
						CurrentSpells['warlock-book of ancient secrets'].selectBo = CurrentSpells['book of ancient secrets'].selectBo;
						CurrentSpells['warlock-book of ancient secrets'].selectSp = CurrentSpells['book of ancient secrets'].selectSp;
						delete CurrentSpells['book of ancient secrets'];
					}
					SetStringifieds('spells'); CurrentUpdates.types.push('spells');
				},
				removeeval : function() {
					delete CurrentSpells['warlock-book of ancient secrets'];
					SetStringifieds('spells'); CurrentUpdates.types.push('spells');
				},
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 3 && GetFeatureChoice('class', 'warlock_ua23pt7', 'pact boon') == 'pact of the tome'; },
				calcChanges : {
					spellAdd : [
						function (spellKey, spellObj, spName) {
							if (spName == "book of ancient secrets") {
								spellObj.firstCol = "(R)";
								if (!(/.*(\d+ ?h\b|special|see b).*/i).test(spellObj.time)) {
									var numMinutes = Number(spellObj.time.replace(/(\d+) ?min.*/, "$1"));
									if (isNaN(numMinutes)) numMinutes = 0;
									spellObj.time = (numMinutes + 10) + " min";
								}
								return true;
							};
						},
						"By the Book of Ancient Secrets invocation, I can cast ritual spells from my Book of Shadows. Ritual spell always have a casting time of 10 minutes or more."
					]
				}
			},
			"chains of carceri (prereq: level 15 warlock, pact of the chain)" : {
				name : "Chains of Carceri",
				description : desc([
					"I can cast Hold Monster at will if the target is a celestial, fiend, or elemental.",
					"This uses no spell slots/material comp.; I can only target an individual once per long rest."
				]),
				source : [["SRD", 49], ["P", 110]],
				submenu : "[improves Pact of the Chain]",
				spellcastingBonus : {
					name : "Chains of Carceri",
					spells : ["hold monster"],
					selection : ["hold monster"],
					firstCol : "atwill"
				},
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 15 && GetFeatureChoice('class', 'warlock_ua23pt7', 'pact boon') == 'pact of the chain'; },
				spellChanges : {
					"speak with animals" : {
						components : "V,S",
						compMaterial : "",
						description : "1 celestial, fiend, or elemental, save or paralyzed; extra save at end of each turn",
						changes : "With the Chains of Carceri invocation I can cast Hold Monster without a material component, but only on a celestial, fiend, or elemental."
					}
				}
			},
			"devil's sight" : {
				name : "Devil's Sight",
				description : desc("I can see in Dim Light as well as magical and nonmagical Darkness out to 120 ft."),
				source : [["UA23PT7", 29], ["SRD", 49], ["P", 110], ["MJ:HB", 0]],
				vision : [["Devil's sight", 120]]
			},
			"dreadful word (prereq: level 7 warlock)" : {
				name : "Dreadful Word",
				description : desc("Once per long rest, I can cast Confusion using a warlock spell slot."),
				source : [["SRD", 49], ["P", 110]],
				submenu : "[warlock level  7+]",
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Dreadful Word",
					spells : ["confusion"],
					selection : ["confusion"],
					firstCol : "oncelr"
				},
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 7 ; }
			},
			"eldritch sight" : {
				name : "Eldritch Sight",
				description : desc("I can cast Detect Magic at will, without using a spell slot."),
				source : [["SRD", 49], ["P", 110]],
				spellcastingBonus : {
					name : "Eldritch Sight",
					spells : ["detect magic"],
					selection : ["detect magic"],
					firstCol : "atwill"
				}
			},
			"eldritch smite (prereq: level 5 warlock, pact of the blade)" : { //Ripped directly from "all_WotC_pub+UA.js" and then altered
				name : "Eldritch Smite",
				description : desc([
					"Once per turn when I hit a creature with my pact weapon, I can empower the strike.",
					"By expending a Warlock spell slot, the creature takes extra damage and is knocked Prone.",
					"It takes 1d8 Force damage and another 1d8 Force damage per level of the spell slot.",
					"The target is only knocked Prone if it is Huge or smaller."
				]),
				source : [["UA23PT7", 29], ["X", 56], ["MJ:HB", 0]],
				submenu : "[improves Pact of the Blade]",
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 5 && GetFeatureChoice('class', 'warlock_ua23pt7', 'pact boon') == 'pact of the blade'; }
			},
			"eldritch spear (prereq: eldritch blast cantrip)" : {
				name : "Eldritch Spear",
				description : desc("My Eldritch Blast cantrip has a range of 300 ft"),
				source : [["UA23PT7", 29], ["SRD", 49], ["P", 111], ["MJ:HB", 0]],
				submenu : "[improves Warlock cantrips]",
				calcChanges : { //?????????????????????????????????????????????????????????????????????????????
					atkAdd : [
						function (fields, v) {
							if (fields.Range >= 10) fields.Range = 300 * (v.rangeM ? v.rangeM : 1) + ' ft';
						},
						"My Eldritch Blast cantrip has a range of 300 ft."
					]
				},
				spellChanges : {
					"eldritch blast" : {
						range : "300 ft",
						changes : "My Eldritch Blast cantrip has a range of 300 ft."
					}
				}
			},
			"eyes of the rune keeper" : {
				name : "Eyes of the Rune Keeper",
				description : desc("I can read all writing"),
				source : [["SRD", 49], ["P", 111]]
			},
			"fiendish vigor" : {
				name : "Fiendish Vigor",
				description : desc("I can cast False Life on myself at will, without using a spell slot. I also gain the max amount of Temp HP."),
				source : [["UA23PT7", 29], ["SRD", 49], ["P", 111], ["MJ:HB", 0]],
				spellcastingBonus : {
					name : "Fiendish Vigor",
					spells : ["false life"],
					selection : ["false life"],
					firstCol : "atwill"
				},
				spellChanges : {
					"false life" : {
						components : "V,S,M",
						compMaterial : "A small amount of alcohol or distilled spirits",
						description : "I gain 8 temporary hit points for the duration",
						changes : "With the Fiendish Vigor invocation, I gain the max amount of Temp HP when I can cast False Life."
					}
				}
			},
			"gaze of two minds (prereq: level 5 warlock)" : {
				name : "Gaze of Two Minds",
				description : desc([
					"As a Bonus Action, I can touch a willing creature and perceive through its senses (not my own).",
					"This lasts until the end of my next turn, but I can use a Bonus Action to extend the duration.",
					"While perceiving through the other creature's senses, I benefit from any special senses it has,",
					"  and I can cast spells as if I were in either my space or the space the other creature, so long",
					"  as it is within 60 ft of me.",
				]),
				source : [["UA23PT7", 29], ["SRD", 49], ["P", 111], ["MJ:HB", 0]],
				submenu : "[warlock level  5+]",
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 5 ; }
			},
			"lifedrinker (prereq: level 9 warlock, pact of the blade)" : {
				name : "Lifedrinker",
				description : desc([
					"My pact weapon does extra necrotic damage equal to my Charisma modifier",
				]),
				source : [["UA23PT7", 30], ["SRD", 49], ["P", 111], ["MJ:HB", 0]],
				submenu : "[improves Pact of the Blade]",
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (v.pactWeapon) fields.Description += (fields.Description ? '; ' : '') + '+Cha mod necrotic damage (included above)';
						},
						"My Charisma modifier will be added to the damage of my Pact Weapons. However, it won't say in the damage box that this added damage is of the necrotic type, as it can only display a single damage type."
					],
					atkCalc : [
						function (fields, v, output) {
							if (v.pactWeapon) output.extraDmg += What('Cha Mod');
						}, ""
					]
				},
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 9 && GetFeatureChoice('class', 'warlock_ua23pt7', 'pact boon') == 'pact of the blade'; }
			},
			"mask of many faces" : {
				name : "Mask of Many Faces",
				description : desc("I can cast Disguise Self on myself at will, without using a spell slot"),
				source : [["SRD", 49], ["P", 111]],
				spellcastingBonus : {
					name : "Mask of Many Faces",
					spells : ["disguise self"],
					selection : ["disguise self"],
					firstCol : "atwill"
				}
			},
			"master of myriad forms (prereq: level 15 warlock)" : {
				name : "Master of Myriad Forms",
				description : desc("I can cast Alter Self at will, without using a spell slot"),
				source : [["SRD", 49], ["P", 111]],
				submenu : "[warlock level 15+]",
				spellcastingBonus : {
					name : "Mask of Myriad Forms",
					spells : ["alter self"],
					selection : ["alter self"],
					firstCol : "atwill"
				},
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 15; }
			},
			"minions of chaos (prereq: level 9 warlock)" : {
				name : "Minions of Chaos",
				description : desc("Once per long rest, I can cast Conjure Elemental using a warlock spell slot"),
				source : [["SRD", 49], ["P", 111]],
				submenu : "[warlock level  9+]",
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Minions of Chaos",
					spells : ["conjure elemental"],
					selection : ["conjure elemental"],
					firstCol : "oncelr"
				},
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 9; }
			},
			"mire the mind (prereq: level 5 warlock)" : {
				name : "Mire the Mind",
				description : desc("Once per long rest, I can cast Slow using a warlock spell slot"),
				source : [["SRD", 49], ["P", 111]],
				submenu : "[warlock level  5+]",
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Mire the Mind",
					spells : ["slow"],
					selection : ["slow"],
					firstCol : "oncelr"
				},
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 5; }
			},
			"misty visions" : {
				name : "Misty Visions",
				description : desc("I can cast Silent Image at will, without using a spell slot or material components"),
				source : [["SRD", 49], ["P", 111]],
				spellcastingBonus : {
					name : "Misty Visions",
					spells : ["silent image"],
					selection : ["silent image"],
					firstCol : "atwill"
				},
				spellChanges : {
					"silent image" : {
						components : "V,S",
						compMaterial : "",
						changes : "With the Misty Visions invocation I can cast Silent Image without a material component."
					}
				}
			},
			"one with shadows (prereq: level 5 warlock)" : {
				name : "One with Shadows",
				description : desc([
					"As an action, when I'm in an area of dim light or darkness, I can become invisible",
					"I become visible again when I move or take an action or reaction"
				]),
				source : [["SRD", 49], ["P", 111]],
				submenu : "[warlock level  5+]",
				action : ["action", ""],
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 5; }
			},
			"otherworldly leap (prereq: level 9 warlock)" : {
				name : "Otherworldly Leap",
				description : desc("I can cast Jump on myself at will, without using a spell slot or material components"),
				source : [["SRD", 49], ["P", 111]],
				submenu : "[warlock level  9+]",
				spellcastingBonus : {
					name : "Otherworldly Leap",
					spells : ["jump"],
					selection : ["jump"],
					firstCol : "atwill"
				},
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 9; },
				spellChanges : {
					"jump" : {
						range : "Self",
						components : "V,S",
						compMaterial : "",
						description : "My jump distance is tripled for the duration",
						changes : "With the Otherworldly Leap invocation I can cast Jump without a material component, but only on myself."
					}
				}
			},
			"repelling blast (prereq: eldritch blast cantrip)" : {
				name : "Repelling Blast",
				description : desc("I can have creatures hit by my Eldritch Blast cantrip be pushed 10 ft away from me"),
				source : [["SRD", 49], ["P", 111]],
				submenu : "[improves Eldritch Blast]",
				prereqeval : function(v) { return v.hasEldritchBlast; },
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (v.baseWeaponName == 'eldritch blast') fields.Description += '; Target pushed back 10 ft';
						},
						"When I hit a creature with my Eldritch Blast cantrip, it is pushed 10 ft away from me."
					]
				},
				spellChanges : {
					"eldritch blast" : {
						description : "Spell attack beam 1d10 Force damage \u0026 push 10 ft; beams can be combined; +1 beam at CL5,11,17",
						descriptionShorter : "Spell atk beam 1d10 Force damage \u0026 push 10 ft; can combine beams; +1 beam at CL5,11,17",
						descriptionCantripDie : "Spell atk for `CD` beam(s), each 1d10 Force damage \u0026 push 10 ft; can combine/split beams",
						changes : "When I hit a creature with my Eldritch Blast cantrip, it is pushed 10 ft away from me."
					}
				}
			},
			"sculptor of flesh (prereq: level 7 warlock)" : {
				name : "Sculptor of Flesh",
				description : desc("Once per long rest, I can cast Polymorph using a warlock spell slot"),
				source : [["SRD", 50], ["P", 111]],
				submenu : "[warlock level  7+]",
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Sculptor of Flesh",
					spells : ["polymorph"],
					selection : ["polymorph"],
					firstCol : "oncelr"
				},
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 7; }
			},
			"sign of ill omen (prereq: level 5 warlock)" : {
				name : "Sign of Ill Omen",
				description : desc("Once per long rest, I can cast Bestow Curse using a warlock spell slot"),
				source : [["SRD", 50], ["P", 111]],
				submenu : "[warlock level  5+]",
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Sign of Ill Omen",
					spells : ["bestow curse"],
					selection : ["bestow curse"],
					firstCol : "oncelr"
				},
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 5; }
			},
			"thief of five fates" : {
				name : "Thief of Five Fates",
				description : desc("Once per long rest, I can cast Bane using a warlock spell slot"),
				source : [["SRD", 50], ["P", 111]],
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Thief of Five Fates",
					spells : ["bane"],
					selection : ["bane"],
					firstCol : "oncelr"
				}
			},
			"thirsting blade (prereq: level 5 warlock, pact of the blade)" : {
				name : "Thirsting Blade",
				description : desc("When taking the attack action, I can attack twice with my pact weapon"),
				source : [["SRD", 50], ["P", 111]],
				submenu : "[improves Pact of the Blade]",
				action : ['action', 'Pact Weapon (2 attacks per action)'],
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 5 && GetFeatureChoice('class', 'warlock_ua23pt7', 'pact boon') == 'pact of the blade'; }
			},
			"visions of distant realms (prereq: level 15 warlock)" : {
				name : "Visions of Distant Realms",
				description : desc("I can cast Arcane Eye at will, without using a spell slot"),
				source : [["SRD", 50], ["P", 111]],
				submenu : "[warlock level 15+]",
				spellcastingBonus : {
					name : "Visions of Distant Realms",
					spells : ["arcane eye"],
					selection : ["arcane eye"],
					firstCol : "atwill"
				},
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 15; }
			},
			"voice of the chain master (prereq: pact of the chain)" : {
				name : "Voice of the Chain Master",
				description : desc([
					"While on the same plane as my familiar, I can communicate telepathically with it",
					"Also, I can perceive through its senses and have it speak with my voice while doing so"
				]),
				source : [["SRD", 50], ["P", 111]],
				submenu : "[improves Pact of the Chain]",
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 3 && GetFeatureChoice('class', 'warlock_ua23pt7', 'pact boon') == 'pact of the chain'; }
			},
			"whispers of the grave (prereq: level 9 warlock)" : {
				name : "Whispers of the Grave",
				description : desc("I can cast Speak with Dead at will, without using a spell slot"),
				source : [["SRD", 50], ["P", 111]],
				submenu : "[warlock level  9+]",
				spellcastingBonus : {
					name : "Whispers of the Grave",
					spells : ["speak with dead"],
					selection : ["speak with dead"],
					firstCol : "atwill"
				},
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 9; }
			},
			"witch sight (prereq: level 15 warlock)" : {
				name : "Witch Sight",
				description : desc("I can see the true form of creatures (shapechangers/illusions/transmutations) within 30 ft"),
				source : [["SRD", 50], ["P", 111]],
				submenu : "[warlock level 15+]",
				vision : [["Witch sight", 30]],
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 15; }
			}
		},
		"pact magic ua23pt7" : { //Ripped directly from "ListsClasses.js" and then altered
			name : "Pact Magic",
			source : [["UA23PT7", 27], ["SRD", 46], ["P", 107], ["MJ:HB", 0]],
			minlevel : 1,
			description : desc([
				"I can cast warlock cantrips/spells that I know, using Charisma as my spellcasting ability",
				"I can use an arcane focus as a spellcasting focus for my warlock spells",
				"I regain these spell slots on a short rest"
			]),
			additional : levels.map(function (n, idx) {
				var cantr = [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4][idx];
				var splls = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15][idx];
				var slots = n < 2 ? 1 : n < 11 ? 2 : n < 17 ? 3 : 4;
				var sllvl = n < 3 ? 1 : n < 5 ? 2 : n < 7 ? 3 : n < 9 ? 4 : 5;
				return cantr + " cantrips \u0026 " + splls + " spells prepared; " + slots + "\xD7 " + Base_spellLevelList[sllvl] + " spell slot";
			}),
		},
		"spellcasting ua23pt6" : { //Copied and altered from Paladin class in this script
			name : "Spellcasting",
			source : [["UA23PT6", 43], ["SRD", 31], ["P", 84], ["MJ:HB", 0]],
			minlevel : 1,
			description : desc([
				"I can cast prepared ranger spells, using Wisdom as my spellcasting ability",
				"I can use a Druidic Focus as a spellcasting focus for my ranger spells",
			]),
		},
		"weapon mastery ua23pt6" : { //Using Reaction Fields for this because there are too many possible weapons to choose from and I don't know how to code FeatureChoices to take that vast number of possible weapons into account.
			name : "Weapon Mastery",
			source : [["UA23PT6", 43], ["MJ:HB", 0]],
			minlevel : 1,
			description : desc([
				"I can use the Mastery property of two kinds of weapons of my choice with which I have proficiency.",
				"I can change what weapons I can use the Mastery property of after finishing a Long Rest.",
			]),
			action : [
				["reaction", "Wpn Mstry 1: [Wpn Name]"],
				["reaction", "Wpn Mstry 2: [Wpn Name]"],
			],
		},
		"favored enemy ua23pt6" : {
			name : "Favored Enemy",
			source : [["UA23PT6", 43], ["MJ:HB", 0]],
			minlevel : 2,
			description : desc([
				"I now always have the Hunter's Mark (UA23PT6) spell prepared.",
				"I can cast it Wis mod (min 1) times without using a spell slot per Long Rest.",
			]),
			spellcastingBonus : {
				name : "Hunter's Mark (UA23PT6)",
				spells : ["hunter's mark ua23pt6"],
				selection : ["hunter's mark ua23pt6"],
				times : 1,
			},
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : [["bonus action", " (Hunter's Mark)"]],
		},
		"fighting style ua23pt6" : { //Ripped directly from ListClasses.js and then altered
			name : "Fighting Style",
			source : [["UA23PT6", 43], ["SRD", 36], ["P", 91], ["MJ:HB", 0]],
			minlevel : 2,
			description : desc([
				"Choose a Fighting Style feat for the ranger using the \"Choose Feature\" button above.",
				"The chosen option will appear in pg 3's Notes section & in the list of feats",
			]),
		},
		"subclassfeature3" : { //Ripped directly from ListClasses.js
			name : "Ranger Archetype",
			source : [["SRD", 37], ["P", 92]],
			minlevel : 3,
			description : desc('Choose a Ranger Archetype you strive to emulate and put it in the "Class" field ')
		},
		"roving ua23pt6" : {
			name : "Roving",
			source : [["UA23PT6", 43], ["MJ:HB", 0]],
			minlevel : 6,
			description : desc([
				"My Speed increases by 10 feet when not wearing Heavy Armor.",
				"I also gain a Climb & Swim Speed equal to my Speed.",
			]),
			speed : {
				climb : { spd : "walk", enc : "walk" },
				swim : { spd : "walk", enc : "walk" },
				allModes : "+10",
			},
		},
		"conjure barrage ua23pt6" : {
			name : "Conjure Barrage",
			source : [["UA23PT6", 44], ["MJ:HB", 0]],
			minlevel : 9,
			description : desc([
				"I now always have the Conjure Barrage (UA23PT6) spell prepared.",
			]),
			spellcastingBonus : {
				name : "Conjure Barrage (UA23PT6)",
				spells : ["conjure barrage ua23pt6"],
				selection : ["conjure barrage ua23pt6"],
				times : 1,
			},
		},
		"tireless ua23pt6" : {
			name : "Tireless",
			source : [["UA23PT6", 44], ["MJ:HB", 0]],
			minlevel : 10,
			description : desc([
				"Wis mod (min 1) number of times per Long Rest, I can use an action to gain Temp HP equal to 1d8 + Wis mod (min 1).",
				"Taking a Short Rest decreases my Exhaustion level, if any, by 1.",
			]),
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : [["action", " (Add Temp HP)"]],
		},
		"natures veil ua23pt6" : {
			name : "Nature's Veil",
			source : [["UA23PT6", 44], ["MJ:HB", 0]],
			minlevel : 14,
			description : desc([
				"As a Bonus Action, I can make myself Invisible until the end of my next turn.",
				"I can do this a number times equal to my Wis mod (min 1).",
			]),
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : [["action", ""]],
		},
		"conjure volley ua23pt6" : {
			name : "Conjure Volley",
			source : [["UA23PT6", 44], ["MJ:HB", 0]],
			minlevel : 17,
			description : desc([
				"I now always have the Conjure Volley (UA23PT6) spell prepared.",
			]),
			spellcastingBonus : {
				name : "Conjure Volley (UA23PT6)",
				spells : ["conjure volley ua23pt6"],
				selection : ["conjure volley ua23pt6"],
				times : 1,
			},
		},
		"feral senses ua23pt6" : { //Ripped directly from ListClasses.js and then altered
			name : "Feral Senses",
			source : [["UA23PT6", 44], ["SRD", 37], ["P", 92], ["MJ:HB", 0]],
			minlevel : 18,
			description : desc([
				"I gain 30 ft Blindsight.",
			]),
			vision : [["Blindsight", 30]],
		},
		"foe slayer ua23pt6" : { //Ripped directly from ListClasses.js and then altered
			name : "Foe Slayer",
			source : [["UA23PT6", 44], ["SRD", 37], ["P", 92], ["MJ:HB", 0]],
			minlevel : 20,
			description : desc([
				"I can add my Wis mod to the attack and damage roll vs. the target of my Hunter's Mark",
			]),
		},
	},
};

//// Add Warlock "Eldritch Invocation" choices
AddSubClass("warlock_ua23pt7", "the celestial", {
	regExpSearch : /^(?=.*warlock)(?=.*celestial).*$/i,
	subname : "the Celestial",
	source : [["X", 54]],
	spellcastingExtra : ["cure wounds", "guiding bolt", "flaming sphere", "lesser restoration", "daylight", "revivify", "guardian of faith", "wall of fire", "flame strike", "greater restoration"],
	features : {
		"subclassfeature3" : {
			name : "Bonus Cantrips",
			source : [["X", 54]],
			minlevel : 1,
			description : "\n   " + "I learn the Light and Sacred Flame cantrips, not counting for the number I can know",
			spellcastingBonus : [{
				name : "Bonus Cantrips",
				spells : ["light"],
				selection : ["light"]
			}, {
				name : "Bonus Cantrips",
				spells : ["sacred flame"],
				selection : ["sacred flame"]
			}]
		},
		"subclassfeature3.1" : {
			name : "Healing Light",
			source : [["X", 54]],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can heal a creature I can see within 60 ft by expending dice",
				"I can expend up to my Charisma modifier (min 1) of dice from my pool at a time",
				"The target heals HP equal to the roll of the dice; I regain all expended dice on a long rest"
			]),
			usages : levels.map(function (n) { return (n + 1) + "d6 per "; }),
			usagescalc : "event.value = !classes.known.warlock ? '' : (1 + classes.known.warlock.level) + 'd6';",
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"subclassfeature6" : {
			name : "Radiant Soul",
			source : [["X", 55]],
			minlevel : 6,
			description : desc([
				"I add my Cha modifier once to the fire or radiant damage of cantrips and spells I cast",
				"This bonus only applies to one target; Also, I have resistance to radiant damage"
			]),
			dmgres : ["Radiant"],
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (v.isSpell && (/fire|radiant/i).test(fields.Damage_Type)) {
							output.extraDmg += What('Cha Mod');
						};
					},
					"Cantrips and spells that fire or radiant damage get my Charisma modifier added to their damage to one target."
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "fire|radiant", "Cha", true);
					},
					"Cantrips and spells that fire or radiant damage get my Charisma modifier added to their damage to one target."
				]
			}
		},
		"subclassfeature10" : {
			name : "Celestial Resilience",
			source : [["X", 55]],
			minlevel : 10,
			description : desc([
				"When I finish a short or long rest, I and up to five allies gain temporary hit points",
				"I get my warlock level + Cha mod, while my allies get half my warlock level + Cha mod"
			]),
			additional : levels.map(function (n) { return n < 10 ? "" : "Me: " + n + "+Cha mod; Allies: " + Math.floor(n / 2) + "+Cha mod"; })
		},
		"subclassfeature14" : {
			name : "Searing Vengeance",
			source : [["X", 55]],
			minlevel : 14,
			description : desc([
				"At the start of my turn when I would make a death save, I can instead spring back up",
				"I recover HP equal to half my current HP maximum, and can then stand up if I choose",
				"When I do, creatures of my choice within 30 ft take 2d8 + Cha mod in radiant damage",
				"Damaged creatures are blinded until the end of my current turn"
			]),
			usages : 1,
			recovery : "long rest"
		}
	}
});

