/*	-INFORMATION-
	Subject:	Classes, Subclasses, Feats, & Spells
	Effect:		This script adds the content from the 2023 Unearthed Arcana "Player's Handbook Playtest 7" article.
				This file has been made by MasterJedi2014, borrowing a lot of code from MPMB and those who have contributed to the sheet's existing material.
	Code by:	MasterJedi2014, using MorePurpleMoreBetter's code as reference
	Date:		2024-05-08 (sheet v13.1.0)
*/

var iFileName = "UA2023PT7 Content [by MasterJedi2014] V2.9.js";
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
	date : "2024/05/08",
};

// Add "weaponMasteryAtkAdd" & "masterOfArmamentsAtkAdd" genericFunctions for Weapon Masteries, made with help from user @Joost/MorePurpleMoreBetter
genericFunctions = {
	weaponMasteryAtkAdd : [
		function (fields, v) {
			if (/mastery/i.test(v.WeaponText)) {
				if ((/club/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Slow';
				}
				if ((/dagger/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += ((fields.Description ? '; ' : '') + 'Mstry: Nick');
				}
				if ((/greatclub/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Push';
				}
				if ((/handaxe/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Vex';
				}
				if ((/javelin/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Slow';
				}
				if ((/light hammer/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Nick';
				}
				if ((/mace/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Sap';
				}
				if ((/quarterstaff/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Topple';
				}
				if ((/sickle/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Nick';
				}
				if ((/spear/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Sap';
				}
				if ((/light crossbow/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Slow';
				}
				if ((/dart/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Vex';
				}
				if ((/shortbow/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Vex';
				}
				if ((/sling/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Slow';
				}
				if ((/battleaxe/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Topple';
				}
				if ((/flail/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Sap';
				}
				if ((/glaive/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Graze';
				}
				if ((/greataxe/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Cleave';
				}
				if ((/greatsword/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Graze';
				}
				if ((/halberd/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Cleave';
				}
				if ((/lance/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Topple';
				}
				if ((/longsword/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Sap';
				}
				if ((/maul/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Topple';
				}
				if ((/morningstar/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Sap';
				}
				if ((/pike/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Push';
				}
				if ((/rapier/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Vex';
				}
				if ((/scimitar/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Nick';
				}
				if ((/shortsword/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Vex';
				}
				if ((/trident/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Topple';
				}
				if ((/war pick/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Sap';
				}
				if ((/warhammer/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Push';
				}
				if ((/whip/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Slow';
				}
				if ((/blowgun/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Vex';
				}
				if ((/hand crossbow/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Vex';
				}
				if ((/heavy crossbow/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Push';
				}
				if ((/longbow/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Slow';
				}
				if ((/musket/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Slow';
				}
				if ((/pistol/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Vex';
				}
				if ((/pistol automatic/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Vex';
				}
				if ((/revolver/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Vex';
				}
				if ((/rifle hunting/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Slow';
				}
				if ((/rifle automatic/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Slow';
				}
				if ((/shotgun/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Slow';
				}
				if ((/laser pistol/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Vex';
				}
				if ((/antimatter rifle/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Slow';
				}
				if ((/laser rifle/i).test(v.WeaponName + v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Slow';
				}
			}
		},
		'If I include the word "Mastery" in the name of a weapon, the Mastery property for that weapon will be appended to the description.',
	],
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
		"eldritch invocations ua23pt7" : { //Ripped directly from "ListsClasses.js" and then altered; "Book of Ancient Secrets" functions were bundled into "Pact of the Tome" in the UA, so it has been removed from this list;
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
			extrachoices : ["Agonizing Blast (prereq: Warlock cantrip)", "Armor of Shadows", "Ascendant Step (prereq: level 5 warlock)", "Beast Speech", "Beguiling Influence", "Bewitching Whispers (prereq: level 7 warlock)", "Chains of Carceri (prereq: level 15 warlock, Pact of the Chain)", "Devil's Sight", "Dreadful Word (prereq: level 7 warlock)", "Eldritch Sight", "Eldritch Smite (prereq: level 5 warlock, Pact of the Blade)", "Eldritch Spear (prereq: Eldritch Blast cantrip)", "Eyes of the Rune Keeper", "Fiendish Vigor", "Gaze of Two Minds (prereq: level 5 warlock)", "Lifedrinker (prereq: level 9 warlock, Pact of the Blade)", "Mask of Many Faces", "Master of Myriad Forms (prereq: level 5 warlock)", "Minions of Chaos (prereq: level 9 warlock)", "Mire the Mind (prereq: level 5 warlock)", "Misty Visions", "One with Shadows (prereq: level 5 warlock)", "Otherworldly Leap (prereq: level 2 warlock)", "Pact of the Blade", "Pact of the Chain", "Pact of the Tome", "Repelling Blast (prereq: Eldritch Blast cantrip)", "Sculptor of Flesh (prereq: level 7 warlock)", "Sign of Ill Omen (prereq: level 5 warlock)", "Thief of Five Fates", "Thirsting Blade (prereq: level 5 warlock, Pact of the Blade)", "Visions of Distant Realms (prereq: level 9 warlock)", "Voice of the Chain Master (prereq: Pact of the Chain)", "Whispers of the Grave (prereq: level 7 warlock)", "Witch Sight (prereq: level 15 warlock)"],
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
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 15 && GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the chain'; },
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
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 5 && GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the blade'; }
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
					"My pact weapon does extra necrotic damage equal to my Charisma modifier.",
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
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 9 && GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the blade'; }
			},
			"mask of many faces" : {
				name : "Mask of Many Faces",
				description : desc("I can cast Disguise Self at will, without using a spell slot."),
				source : [["UA23PT7", 30], ["SRD", 49], ["P", 111], ["MJ:HB", 0]],
				spellcastingBonus : {
					name : "Mask of Many Faces",
					spells : ["disguise self"],
					selection : ["disguise self"],
					firstCol : "atwill"
				}
			},
			"master of myriad forms (prereq: level 5 warlock)" : {
				name : "Master of Myriad Forms",
				description : desc("I can cast Alter Self at will, without using a spell slot."),
				source : [["UA23PT7", 30], ["SRD", 49], ["P", 111], ["MJ:HB", 0]],
				submenu : "[warlock level 5+]",
				spellcastingBonus : {
					name : "Mask of Myriad Forms",
					spells : ["alter self"],
					selection : ["alter self"],
					firstCol : "atwill"
				},
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 5; }
			},
			"minions of chaos (prereq: level 9 warlock)" : {
				name : "Minions of Chaos",
				description : desc("Once per Long Rest, I can cast Conjure Elemental using a warlock spell slot."),
				source : [["SRD", 49], ["P", 111], ["MJ:HB", 0]],
				submenu : "[warlock level  9+]",
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : [{
					name : "Minions of Chaos: 2014 Conjure Elemental",
					spells : ["conjure elemental"],
					selection : ["conjure elemental"],
					firstCol : "oncelr",
				}, {
					name : "Minions of Chaos: UA23PT8 Conjure Elemental",
					spells : ["conjure elemental ua23pt8"],
					selection : ["conjure elemental ua23pt8"],
					firstCol : "oncelr",
				}],
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 9; }
			},
			"mire the mind (prereq: level 5 warlock)" : {
				name : "Mire the Mind",
				description : desc("Once per long rest, I can cast Slow using a warlock spell slot."),
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
				description : desc("I can cast Silent Image at will, without using a spell slot."),
				source : [["UA23PT7", 30], ["SRD", 49], ["P", 111], ["MJ:HB", 0]],
				spellcastingBonus : {
					name : "Misty Visions",
					spells : ["silent image"],
					selection : ["silent image"],
					firstCol : "atwill"
				},
			},
			"one with shadows (prereq: level 5 warlock)" : {
				name : "One with Shadows",
				description : desc([
					"As a Magic Action, when I'm in an area of Dim Light or Darkness, I can cast Invisibility",
					"  on myself, without using a spell slot.",
				]),
				source : [["UA23PT7", 30], ["SRD", 49], ["P", 111], ["MJ:HB", 0]],
				submenu : "[warlock level  5+]",
				spellcastingBonus : {
					name : "One with Shadows",
					spells : ["invisibility"],
					selection : ["invisibility"],
					firstCol : "atwill"
				},
				action : ["action", ""],
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 5; }
			},
			"otherworldly leap (prereq: level 2 warlock)" : {
				name : "Otherworldly Leap",
				description : desc("I can cast Jump on myself at will, without using a spell slot."),
				source : [["UA23PT7", 30], ["SRD", 49], ["P", 111], ["MJ:HB", 0]],
				submenu : "[warlock level  2+]",
				spellcastingBonus : [{
					name : "Otherworldly Leap: 2014 Jump",
					spells : ["jump"],
					selection : ["jump"],
					firstCol : "atwill",
				}, {
					name : "Otherworldly Leap: UA23PT7 Jump",
					spells : ["jump ua23pt7"],
					selection : ["jump ua23pt7"],
					firstCol : "atwill",
				}],
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 2; },
			},
			"pact of the blade" : {
				name : "Pact of the Blade",
				description : desc([
					"As a Bonus Action, I can create a pact weapon in my empty hand; I'm proficient in its use,",
					"  can use its Mastery Property, \u0026 can use it as a spellcasting focus.",
					"I must add the word \"Mastery\" to the name of the weapon to display the Mastery property.",
					"I can choose the type of melee weapon every time I create it, and it has those statistics.",
					"The weapon disappears if it is more than 5 ft away from me for 1 minute.",
					"I can use a Bonus Action to re-summon it in any form and can dismiss it as no action."
				]),
				source : [["UA23PT7", 30], ["SRD", 47], ["P", 107], ["MJ:HB", 0]],
				action : ["bonus action", ""],
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (v.theWea.pactWeapon || ((v.isMeleeWeapon || v.thisWeapon[1]) && (/\bpact\b/i).test(v.WeaponTextName))) {
								v.pactWeapon = true;
							}
						}, "",
						90
					],
					atkAdd : [
						function (fields, v) {
							if (v.pactWeapon || v.theWea.pactWeapon || ((v.isMeleeWeapon || v.thisWeapon[1]) && (/\bpact\b/i).test(v.WeaponTextName))) {
								v.pactWeapon = true;
								fields.Proficiency = true;
								if (!v.theWea.isMagicWeapon && !v.thisWeapon[1] && !(/counts as( a)? magical/i).test(fields.Description)) fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';
							};
						},
						"If I include the word 'Pact' in a melee or magic weapon's name, it gets treated as my Pact Weapon.",
						290
					],
				},
			},
			"pact of the chain" : {
				name : "Pact of the Chain",
				description : desc([
					"I can cast Find Familiar, without using a spell slot, \u0026 it can be a Pseudodragon,",
					"  Imp, Quasit, or Sprite. When taking the Attack action, I can forgo 1 attack to have my",
					"  familiar make one attack of its own instead with its Reaction."
				]),
				source : [["UA23PT7", 31], ["SRD", 47], ["P", 107], ["MJ:HB", 0]],
				submenu : "[warlock level  2+]",
				spellcastingBonus : [{
					name : "Pact of the Chain: 2014 Find Familiar",
					spells : ["find familiar"],
					selection : ["find familiar"],
					firstCol : "awtill",
				}, {
					name : "Pact of the Chain: UA23DP Find Familiar",
					spells : ["find familiar ua23dp"],
					selection : ["find familiar ua23dp"],
					firstCol : "awtill",
				}],
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 2; },
			},
			"pact of the tome" : {
				name : "Pact of the Tome",
				source : [["UA23PT7", 31], ["SRD", 48], ["P", 108], ["MJ:HB", 0]],
				description : desc([
					"I have a Book of Shadows that I can use a spellcasting focus.",
					"The book contains any three cantrips of my choosing along with any two 1st lvl ritual spells.",
					"I can cast these cantrips \u0026 spells as long as I have the book on my person.",
					"Regardless of the lists they come from, these count as warlock cantrips/spells to me.",
					"I gain one level one spell slot. Once expended, I can't gain another slot from this feature",
					"  until I finish a Long Rest. I can get a replacement book at the end of a Short or Long Rest.",
				]),
				spellcastingBonus : [{
					name : "Pact of the Tome: Cantrips",
					"class" : "any",
					level : [0, 0],
					times : 3,
				},{
					name : "Pact of the Tome: 1st-level Spells",
					"class" : "any",
					level : [1, 1],
					times : 2,
				}],
				limfeaname : "Pact of the Tome: 1st-lvl Spell Slot",
				usages : 1,
				recovery : "long rest",
			},
			"repelling blast (prereq: eldritch blast cantrip)" : {
				name : "Repelling Blast",
				description : desc("I can have Large or smaller creatures hit by my Eldritch Blast cantrip be pushed up to 10 ft straight away from me."),
				source : [["UA23PT7", 31], ["SRD", 49], ["P", 111], ["MJ:HB", 0]],
				submenu : "[improves Eldritch Blast]",
				prereqeval : function(v) { return v.hasEldritchBlast; },
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (v.baseWeaponName == 'eldritch blast') fields.Description += '; Target pushed back 10 ft';
						},
						"When I hit a Large or smaller creature with my Eldritch Blast cantrip, it is pushed up to 10 ft straight away from me."
					]
				},
				spellChanges : {
					"eldritch blast" : {
						description : "Spell attack beam 1d10 Force damage \u0026 push 10 ft; beams can be combined; +1 beam at CL5,11,17; see book",
						descriptionShorter : "Spell atk beam 1d10 Force damage \u0026 push 10 ft; can combine beams; +1 beam at CL5,11,17; see book",
						descriptionCantripDie : "Spell atk for `CD` beam(s), each 1d10 Force damage \u0026 push 10 ft; can combine/split beams; see book",
						descriptionFull : "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage. Additionally, if the target is Large or smaller, it can be pushed up to 10 ft straight away from you." + "\n   " + "The spell creates more than one beam when you reach higher levels - two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam.",
						changes : "When I hit a Large or smaller creature with my Eldritch Blast cantrip, it is pushed 10 ft straight away from me."
					}
				},
			},
			"sculptor of flesh (prereq: level 7 warlock)" : {
				name : "Sculptor of Flesh",
				description : desc("Once per long rest, I can cast Polymorph using a warlock spell slot."),
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
				description : desc("Once per long rest, I can cast Bestow Curse using a warlock spell slot."),
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
				description : desc("Once per long rest, I can cast Bane using a warlock spell slot."),
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
				description : desc([
					"When taking the Attack action, I can attack twice with my pact weapon.",
					"Upon reaching 11th level in this class, I can attack thrice with my pact weapon.",
				]),
				source : [["UA23PT7", 31], ["SRD", 50], ["P", 111], ["MJ:HB", 0]],
				submenu : "[improves Pact of the Blade]",
				action : ['action', 'Pact Weapon (2 attacks per action)'],
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 5 && GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the blade'; }
			},
			"visions of distant realms (prereq: level 9 warlock)" : {
				name : "Visions of Distant Realms",
				description : desc("I can cast Arcane Eye at will, without using a spell slot."),
				source : [["UA23PT7", 31], ["SRD", 50], ["P", 111], ["MJ:HB", 0]],
				submenu : "[warlock level 9+]",
				spellcastingBonus : {
					name : "Visions of Distant Realms",
					spells : ["arcane eye"],
					selection : ["arcane eye"],
					firstCol : "atwill"
				},
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 9; }
			},
			"voice of the chain master (prereq: pact of the chain)" : {
				name : "Voice of the Chain Master",
				description : desc([
					"While on the same plane as my familiar, I can communicate telepathically with it at any range.",
					"Also, I can perceive through its senses and have it speak with my voice while doing so."
				]),
				source : [["SRD", 50], ["P", 111], ["MJ:HB", 0]],
				submenu : "[improves Pact of the Chain]",
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 3 && GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the chain'; }
			},
			"whispers of the grave (prereq: level 7 warlock)" : {
				name : "Whispers of the Grave",
				description : desc("I can cast Speak with Dead at will, without using a spell slot."),
				source : [["UA23PT7", 31], ["SRD", 50], ["P", 111], ["MJ:HB", 0]],
				submenu : "[warlock level  7+]",
				spellcastingBonus : {
					name : "Whispers of the Grave",
					spells : ["speak with dead"],
					selection : ["speak with dead"],
					firstCol : "atwill"
				},
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 7; }
			},
			"witch sight (prereq: level 15 warlock)" : {
				name : "Witch Sight",
				description : desc("I have Truesight with a range of 30 ft."),
				source : [["UA23PT7", 31], ["SRD", 50], ["P", 111], ["MJ:HB", 0]],
				submenu : "[warlock level 15+]",
				vision : [["Witch sight (Truesight)", 30]],
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 15; }
			}
		},
		"pact magic ua23pt7" : { //Ripped directly from "ListsClasses.js" and then altered
			name : "Pact Magic",
			source : [["UA23PT7", 27], ["SRD", 46], ["P", 107], ["MJ:HB", 0]],
			minlevel : 1,
			description : desc([
				"I can cast Warlock cantrips/spells that I have prepared, using Charisma as my spellcasting ability.",
				"I can use an arcane focus as a spellcasting focus for my Warlock spells.",
				"I regain all expended Pact Magic spell slots on a Short or Long Rest.",
			]),
			additional : levels.map(function (n, idx) {
				var cantr = [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4][idx];
				var splls = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15][idx];
				var slots = n < 2 ? 1 : n < 11 ? 2 : n < 17 ? 3 : 4;
				var sllvl = n < 3 ? 1 : n < 5 ? 2 : n < 7 ? 3 : n < 9 ? 4 : 5;
				return cantr + " cantrips \u0026 " + splls + " spells prepared; " + slots + "\xD7 " + Base_spellLevelList[sllvl] + " spell slot";
			}),
			calcChanges : {
				spellList : [
					function(spList, spName, spType) {
						// Stop this is not the class' spell list or if this is for a bonus spell entry
						if (spName !== "warlock" && spType.indexOf("bonus") !== -1) return;
						spList.extraspells = spList.extraspells.concat(["bane", "detect magic", "speak with animals"]);
					},
					"Adds the \"Bane\", \"Detect Magic\", & \"Speak with Animals\" spells to the Warlock class' spell list.",
					101,
				]
			},
		},
		"magical cunning ua23pt7" : {
			name : "Magical Cunning",
			source : [["UA23PT7", 27], ["MJ:HB", 0]],
			minlevel : 2,
			description : desc([
				"Once per Long Rest when all of my Pact Magic spell slots are expended, I can perform a ritual",
				"  for 1 minute to regain half of those spell slots (round up).",
			]),
			usages : 1,
			recovery : "long rest",
		},
		"subclassfeature3" : {
			name : "Otherworldly Patron",
			source : [["UA23PT7", 27], ["SRD", 46], ["P", 107], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc('Choose the Otherworldly Patron you have a bargain with and put it in the "Class" field ')
		},
		"contact patron ua23pt7" : {
			name : "Contact Patron",
			source : [["UA23PT7", 28], ["MJ:HB", 0]],
			minlevel : 9,
			description : desc([
				"I now always have the Contact Other Plane spell prepared. Once per Long Rest, I can cast it",
				"  without using a spell slot to contact my patron, automatically succeeding on the saving throw.",
			]),
			spellcastingBonus : {
				name : "Contact Patron",
				spells : ["contact other plane"],
				selection : ["contact other plane"],
				times : 1,
			},
			usages : 1,
			recovery : "long rest",
		},
		"mystic arcanum ua23pt7" : {
			name : "Mystic Arcanum",
			source : [["UA23PT7", 28], ["SRD", 48], ["P", 108], ["MJ:HB", 0]],
			minlevel : 11,
			description : desc([
				"I can choose one spell from the warlock spell list of each level mentioned above.",
				"I can cast these spells each once per long rest without needing to use a spell slot.",
				"Whenever I gain a Warlock lvl, I can replace one of my arcanum spells with another of the same lvl.",
			]),
			additional : ["", "", "", "", "", "", "", "", "", "", "6th level", "6th level", "6th and 7th level", "6th and 7th level", "6th, 7th, and 8th level", "6th, 7th, and 8th level", "6th, 7th, 8th, and 9th level", "6th, 7th, 8th, and 9th level", "6th, 7th, 8th, and 9th level", "6th, 7th, 8th, and 9th level"],
			spellcastingBonus : [{
				name : "Mystic Arcanum (6th-level)",
				"class" : ["warlock", "warlock_ua23pt7"],
				level : [6, 6],
				firstCol : "oncelr"
			}, {
				name : "Mystic Arcanum (7th-level)",
				"class" : ["warlock", "warlock_ua23pt7"],
				level : [7, 7],
				firstCol : "oncelr",
				times : levels.map(function (n) { return n < 13 ? 0 : 1; })
			}, {
				name : "Mystic Arcanum (8th-level)",
				"class" : ["warlock", "warlock_ua23pt7"],
				level : [8, 8],
				firstCol : "oncelr",
				times : levels.map(function (n) { return n < 15 ? 0 : 1; })
			}, {
				name : "Mystic Arcanum (9th-level)",
				"class" : ["warlock", "warlock_ua23pt7"],
				level : [9, 9],
				firstCol : "oncelr",
				times : levels.map(function (n) { return n < 17 ? 0 : 1; })
			}],
		},
		"eldritch master ua23pt7" : {
			name : "Eldritch Master",
			source : [["UA23PT7", 28], ["SRD", 48], ["P", 108], ["MJ:HB", 0]],
			minlevel : 20,
			description : desc([
				"When I use my Magical Cunning feature, I regain all used Pact Magic spells slots.",
			]),
			recovery : "long rest",
			usages : 1,
		},
	},
};

//// Add Warlock Pacts choices as Invocations; kept separate from the extra Invocation List below for my sanity
AddWarlockInvocation("Pact of the Talisman", {
	name : "Pact of the Talisman",
	source : [["T", 70]],
	description : desc([
		"When the wearer of this amulet fails an ability check, they can add +1d4 to the roll.",
		"I can give the talisman to others to use; The talisman turns to ash when I die.",
		"If I lose my talisman, I can perform a 1-hour ceremony to gain a replacement.",
		"This ceremony destroys the previous amulet and can be done during a Short or Long Rest."
	]),
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus')",
	recovery : "long rest",
});
AddWarlockInvocation("Pact of the Star Chain", {
	name : "Pact of the Star Chain",
	source : [["UA:TF", 1]],
	description : desc([
		"My patron grants me an item of power which disappears when I die.",
		"While it is on my person, I can cast Augury as a ritual.",
		"Additionally, once per Short Rest, I can get Advantage on an Intelligence check.",
		"If I lose this item I can perform a 1-hour ceremony to get a replacement."
	]),
	usages : 1,
	recovery : "short rest",
	spellcastingBonus : {
		name : "Pact of the Star Chain",
		spells : ["augury"],
		selection : ["augury"],
		firstCol : "(R)"
	},
	spellChanges : {
		"augury" : {
			time : "11 min",
			changes : "With my Pact of the Star Chain boon I can cast Augury only as a ritual, thus requiring 10 extra minutes to cast it."
		}
	},
	prereqeval : function(v) {
		return classes.known.warlock_ua23pt7 && classes.known.warlock_ua23pt7.subclass.indexOf("the seeker") !== -1 ? true : "skip";
	}
});

//// Add Warlock "Eldritch Invocation" choices;
//// Invocations being added here were not a part of the Invocation List in "ListsClasses.js" & are either are being imported from "all_WotC_pub+UA.js" or are a new Invocation from the 5.1E UA articles.
AddWarlockInvocation("Arcane Gunslinger (prereq: Pact of the Blade)", { // Still valid 2021-09-21
	name : "Arcane Gunslinger",
	description : desc([
		"My pact weapon can take firearm forms."
	]),
	source : [["UA:MM", 3]],
	submenu : "[improves Pact of the Blade]",
	prereqeval : function(v) { return GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the blade'; },
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.isRangedWeapon && /firearm/i.test(v.theWea.type + " " + v.theWea.list) && /\bpact\b/i.test(v.WeaponTextName)) {
					v.pactWeapon = true;
				}
			},
			"If I include the word 'Pact' in a firearm weapon's name, it gets treated as my Pact Weapon.",
			90
		]
	}
});
AddWarlockInvocation("Aspect of the Moon (prereq: Pact of the Tome)", {
	name : "Aspect of the Moon",
	description : "\n   " + "I don't need sleep nor can be forced to by any means; I can rest while doing light activity.",
	source : [["X", 56], ["UA:RCO", 5]],
	submenu : "[improves Pact of the Tome]",
	prereqeval : function(v) { return GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the tome'; },
	savetxt : { text : ["Nothing can force me to sleep"] }
});
AddWarlockInvocation("Bond of the Talisman (prereq: level 12 warlock, Pact of the Talisman)", {
	name : "Bond of the Talisman",
	source : [["T", 70]],
	submenu : "[improves Pact of the Talisman]",
	description : desc([
		"As an Action, I can teleport to the unoccupied space closest to the wearer of my talisman.",
		"The talisman's wearer can do the same to teleport to me; Only works if both on same plane."
	]),
	prereqeval : function(v) {
		return classes.known.warlock_ua23pt7.level >= 12 && GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7').indexOf("pact of the talisman") !== -1;
	},
	action : [["action", ""]],
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus')",
	recovery : "long rest"
});
AddWarlockInvocation("Burning Hex (prereq: the Hexblade patron)", {
	name : "Burning Hex",
	description : desc([
		"As a Bonus Action, I can cause a target affected by my hexblade's curse to take damage.",
		"It immediately takes Fire damage equal to my Charisma modifier (min 1)."
	]),
	source : [["UA:WnW", 3]],
	prereqeval : function(v) { return (/hexblade/).test(classes.known.warlock_ua23pt7.subclass); },
	action : ["bonus action", ""]
});
AddWarlockInvocation("Caiphon's Beacon (prereq: the Great Old One patron)", {
	name : "Caiphon's Beacon",
	description : desc([
		"I gain Proficiencies with the Deception and Stealth skills.",
		"I have Advantage on attack rolls against charmed creatures."
	]),
	source : [["UA:WnW", 3]],
	prereqeval : function(v) { return (/great old one/).test(classes.known.warlock_ua23pt7.subclass); },
	skills : ["Deception", "Stealth"]
});
AddWarlockInvocation("Chilling Hex (prereq: the Hexblade patron)", {
	name : "Chilling Hex",
	description : desc([
		"As a Bonus Action, I can swirl frost around a target affected by my hexblade's curse.",
		"All creatures within 5 ft of the target take Cold damage equal to my Cha modifier (min 1)."
	]),
	source : [["UA:WnW", 3]],
	prereqeval : function(v) { return (/hexblade/).test(classes.known.warlock_ua23pt7.subclass); },
	action : ["bonus action", ""]
});
AddWarlockInvocation("Chronicle of the Raven Queen (prereq: the Raven Queen patron, Pact of the Tome)", {
	name : "Chronicle of the Raven Queen",
	description : desc([
		"Within 1 minute of a creature's death, I can use my book of shadows to ask it 1 question.",
		"To do this, I need to put the corpse's hand on the book and speak the question aloud.",
		"Its spirit writes the answer, to the best of its knowledge, in blood in a language I choose."
	]),
	source : [["UA:WnW", 3]],
	submenu : "[improves Pact of the Tome]",
	prereqeval : function(v) { return (/raven queen/).test(classes.known.warlock_ua23pt7.subclass) && classes.known.warlock_ua23pt7.level >= 3 && GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the tome'; },
	action : ["bonus action", ""]
});
AddWarlockInvocation("Claw of Acamar (prereq: the Great Old One patron, Pact of the Blade)", {
	name : "Claw of Acamar",
	description : desc([
		"As a pact weapon, I can create a black, lead flail with grasping tentacles for a head.",
		"It has Reach and can reduce a creature's Speed to 0 on a hit until the end of my next turn.",
		"On a hit, I can expend a spell slot to have it do +2d8 Necrotic damage per spell slot level."
	]),
	source : [["UA:WnW", 3]],
	submenu : "[improves Pact of the Blade]",
	prereqeval : function(v) { return (/great old one/).test(classes.known.warlock_ua23pt7.subclass) && classes.known.warlock_ua23pt7.level >= 3 && GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the blade'; },
	weaponOptions : {
		baseWeapon : "flail",
		regExpSearch : /^(?=.*\bclaw\b)(?=.*\bacamar\b).*$/i,
		name : "Claw of Acamar",
		source : [["UA:WnW", 3]],
		pactWeapon : true,
		description : "Pact weapon, reach; On hit: Reduces speed to 0, Expend spell slot for +2d8 necrotic damage per slot level"
	},
	weaponsAdd : ['Claw of Acamar']
});
AddWarlockInvocation("Cloak of Flies (prereq: level 5 warlock)", {
	name : "Cloak of Flies",
	description : desc([
		"As a Bonus Action, I can surround myself with a 5-ft radius magical aura of buzzing flies.",
		"It lasts until I'm Incapacitated or dismiss it as a Bonus Action; Total cover block the aura.",
		"The aura grants me Adv. on Cha (Intimidation), but Disadv. on all other Cha checks.",
		"Creatures starting their turn in the aura take my Cha mod (min 0) in Poison damage."
	]),
	source : [["X", 56], ["UA:RCO", 5]],
	submenu : "[warlock level  5+]",
	prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 5; },
	recovery : "short rest",
	usages : 1,
	action : ["bonus action", " (start/stop)"]
});
AddWarlockInvocation("Curse Bringer (prereq: the Hexblade patron, Pact of the Blade)", {
	name : "Curse Bringer",
	description : desc([
		"As a pact weapon, I can create a silver greatsword with black runes etched in the blade.",
		"If I bring a target of my hexblade's curse to 0 HP with it, I can move the curse to another.",
		"It can reduce a creature's Speed to 0 on a hit until the end of my next turn.",
		"On a hit, I can expend a spell slot to have it do +2d8 Slashing damage per spell slot level."
	]),
	source : [["UA:WnW", 4]],
	submenu : "[improves Pact of the Blade]",
	prereqeval : function(v) { return (/hexblade/).test(classes.known.warlock_ua23pt7.subclass) && classes.known.warlock_ua23pt7.level >= 3 && GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the blade'; },
	weaponOptions : {
		baseWeapon : "greatsword",
		regExpSearch : /^(?=.*\bcurse)(?=.*bringer\b).*$/i,
		name : "Curse Bringer",
		source : [["UA:WnW", 4]],
		pactWeapon : true,
		description : "Pact weapon, heavy, two-handed; On hit: Reduces speed to 0, Expend spell slot for +2d8 slashing damage per slot level"
	},
	weaponsAdd : ['Curse Bringer']
});
AddWarlockInvocation("Eldritch Armor (prereq: Pact of the Blade)", {
	name : "Eldritch Armor",
	source : [["UA:CFV", 11]],
	submenu : "[improves Pact of the Blade]",
	description : desc([
		"As an Action, I can touch an unattended suit of armor and instantly don it.",
		"I am Proficient with this suit of armor until it is removed."
	]),
	prereqeval : function(v) {
		return GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the blade';
	},
	action : [["action", ""]]
});
AddWarlockInvocation("Eldritch Mind", {
	name : "Eldritch Mind",
	source : [["T", 71]],
	description : "\n   I have Advantage on my Constitution saving throws to maintain concentration on a spell.",
	savetxt : { text : "Adv. on Con (Concentration) saves" }
});
AddWarlockInvocation("Far Scribe (prereq: level 5 warlock, Pact of the Tome)", {
	name : "Far Scribe",
	source : [["T", 71]],
	submenu : "[improves Pact of the Tome]",
	description : desc([
		"My book of shadows has a new page; As an Action, a creature can write its name on it.",
		"This page can hold my Proficiency Bonus in creature names; I can remove one as an Action.",
		"I can cast Sending without a spell slot or material components, targeting one on the page.",
		"Instead of saying the message, I write it on the page and any reply appears there as well.",
		"This writing disappears after 1 minute; The target still hears the message in their mind."
	]),
	prereqeval : function(v) {
		return classes.known.warlock_ua23pt7.level >= 5 && GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the tome';
	},
	action : [["action", " (erase name)"]],
	spellcastingBonus : {
		name : "Far Scribe",
		spells : ["sending"],
		selection : ["sending"],
		firstCol : "atwill"
	},
	spellChanges : {
		"sending" : {
			components : "V,S",
			compMaterial : "",
			description : "Send 25 word message to crea named in book of shadows; it recognizes me and can respond 25 words",
			changes : "By using Far Scribe, I can cast Sending without using a spell slot or material components, but only to target one of the creatures that wrote their name in my book of shadows. Instead of speaking the message, I write it in my book and any response appears there as well, lasting for 1 minute. The target still hears the message in their mind."
		}
	}
});
AddWarlockInvocation("Gaze of Khirad (prereq: level 7 warlock, the Great Old One patron)", {
	name : "Gaze of Khirad",
	description : desc([
		"As an Action, I can see through solid object out to 30 ft until the end of my current turn"
	]),
	source : [["UA:WnW", 4]],
	submenu : "[warlock level  7+]",
	prereqeval : function(v) { return (/great old one/).test(classes.known.warlock_ua23pt7.subclass) && classes.known.warlock_ua23pt7.level >= 7; },
	action : ["action", ""]
});
AddWarlockInvocation("Ghostly Gaze (prereq: level 7 warlock)", {
	name : "Ghostly Gaze",
	description : desc([
		"As an Action, I can gain Darkvision, and the ability to see through solid objects, out to 30 ft.",
		"Objects appear ghostly to me; This lasts up to 1 minute, while I'm concentrating on this."
	]),
	source : [["X", 56]],
	submenu : "[warlock level  7+]",
	prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 7; },
	recovery : "short rest",
	usages : 1,
	action : ["action", ""]
});
AddWarlockInvocation("Gift of the Depths (prereq: level 5 warlock)", {
	name : "Gift of the Depths",
	description : desc([
		"I can breathe underwater and I have a Swim Speed equal to my Walking Speed.",
		"Once per Long Rest, I can cast Water Breathing without using a spell slot (PHB 287)."
	]),
	source : [["UA23PT7", 29], ["X", 57], ["UA:RCO", 6], ["MJ:HB", 0]],
	submenu : "[warlock level  5+]",
	spellcastingBonus : {
		name : "Gift of the Depths",
		spells : ["water breathing"],
		selection : ["water breathing"],
		firstCol : 'oncelr'
	},
	prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 5; },
	speed : { swim : { spd : "walk", enc : "walk" } }
});
AddWarlockInvocation("Gift of the Ever-Living Ones (prereq: Pact of the Chain)", {
	name : "Gift of the Ever-Living Ones",
	description : "\n   " + "When I regain HP while my familiar is within 100 ft, I regain the max the dice can roll.",
	source : [["X", 57], ["UA:RCO", 6]],
	submenu : "[improves Pact of the Chain]",
	prereqeval : function(v) { return GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the chain'; }
});
AddWarlockInvocation("Gift of the Protectors (prereq: level 9 warlock, Pact of the Tome)", {
	name : "Gift of the Protectors",
	source : [["UA23PT7", 29], ["T", 71], ["MJ:HB", 0]],
	submenu : "[improves Pact of the Tome]",
	description : desc([
		"My Book of Shadows has a new page; As an action, a creature can write its name on it.",
		"This page can hold my Proficiency Bonus in creature names; I can remove one as a Magic action.",
		"If a creature whose name is on the page drops to 0 HP, it magically drops to 1 HP instead.",
		"Once this occurs, no creature can benefit from this Invocation until I finish a Long Rest.",
		"This doesn't work if the creature would be killed outright.",
	]),
	prereqeval : function(v) {
		return classes.known.warlock_ua23pt7.level >= 9 && GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the tome';
	},
	action : [["action", " (erase name)"]],
	usages : 1,
	recovery : "long rest"
});
AddWarlockInvocation("Grasp of Hadar (prereq: Eldritch Blast cantrip)", { //Altered to be in alignment with UA Repelling Blast
	name : "Grasp of Hadar",
	description : desc("Once per turn when my Eldritch Blast hits a Large or smaller creature, I can move it up to 10 ft closer to me in a straight line."),
	source : [["X", 57], ["UA:RCO", 6], ["MJ:HB", 0]],
	submenu : "[improves Eldritch Blast]",
	prereqeval : function(v) { return v.hasEldritchBlast; },
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'eldritch blast') fields.Description += '; Target moved 10 ft to me';
			},
			"When I hit a Large or smaller creature with my Eldritch Blast cantrip once or more times in a turn, I can move it in a straight line 10 ft closer to me."
		]
	}
});
AddWarlockInvocation("Green Lord's Gift (prereq: the Archfey patron)", {
	name : "Green Lord's Gift",
	description : desc([
		"When I regain HP, all dice for determining the HP I heal are treated as rolling maximum."
	]),
	source : [["UA:WnW", 4]],
	prereqeval : function(v) { return (/\barchfey\b/).test(classes.known.warlock_ua23pt7.subclass); }
});
AddWarlockInvocation("Improved Pact Weapon (prereq: Pact of the Blade)", { //Some of this Invocation's functions were absorbed into baseline Pact of the Blade, so this has been altered accordingly
	name : "Improved Pact Weapon",
	description : desc([
		"Any pact weapon I create is a +1 magic weapon, if it isn't already a +1 magic weapon.",
		"I can now also conjure a shortbow, longbow, or light or heavy crossbow as my pact weapon."
	]),
	source : [["X", 57]],
	submenu : "[improves Pact of the Blade]",
	prereqeval : function(v) { return GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the blade'; },
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				if ((/^(shortbow|longbow|light crossbow|heavy crossbow)$/).test(v.baseWeaponName) && (/\bpact\b/i).test(v.WeaponTextName)) {
					v.pactWeapon = true;
				}
				// Test if this is a pact weapon, has no + bonus from somewhere else, and doesn't already have a improved pact weapon bonus
				if (v.pactWeapon && !output.magic) {
					var bContinue = true;
					// Now test if this isn't a weaponOptions addition with a static + bonus set to the modifier fields
					if (v.theWea && v.theWea.isMagicWeapon && v.theWea.modifiers) {
						// Test the first two modifiers to see if both offer a +1 or more. Returns `true` if one contains no numbers or is less than the improved pact weapon bonus
						var bContinue = v.theWea.modifiers.slice(0, 2).some(function (n) {
							if (!n || !/\d/.test(n)) {
								var nmbr = 0;
							} else if (isNaN(n)) {
								var nmbr = n.match(/(^|\+|-)\d+\b/g);
								nmbr = !nmbr ? 0 : nmbr.reduce(function(a, b) {return Number(a) + Number(b)});
							} else {
								var nmbr = Number(n);
							}
							return nmbr < 1;
						});
					}
					// if the continue boolean wasn't set to false, we can proceed
					if (bContinue) {
						v.pactMag = 1;
						output.magic = 1;
					}
				};
			},
			"If I include the word 'Pact' in a the name of a melee weapon, shortbow, longbow, light crossbow, or heavy crossbow, it will be treated as my Pact Weapon.\n \u2022 If my Pact Weapon doesn't already include a magical bonus in its name and is not a magic weapon with at least a +1 bonus, the calculation will add +1 to its To Hit and Damage.",
			290
		],
		atkAdd : [
			function (fields, v) {
				if ((/^(shortbow|longbow|light crossbow|heavy crossbow)$/).test(v.baseWeaponName) && (/\bpact\b/i).test(v.WeaponTextName)) {
					v.pactWeapon = true;
				};
			}, "", 90]
	}
});
AddWarlockInvocation("Investment of the Chain Master (prereq: level 5 warlock, prereq: Pact of the Chain)", {
	name : "Investment of the Chain Master",
	source : [["UA23PT7", 29], ["T", 71], ["MJ:HB", 0]],
	submenu : "[improves Pact of the Chain]",
	description : desc([
		"When I cast Find Familiar, the summoned create has additional benefits:",
		"\u2022 It gains a Flying or Swimming Speed of 40 ft (my choice at casting)",
		"\u2022 As a Bonus Action, I can command it to take the Attack action",
		"\u2022 Its weapon attacks can, if I desire, instead deal Necrotic or Radiant damage",
		"\u2022 If it forces a creature to make a saving throw, it uses my spell save DC",
		"\u2022 As a Reaction when it takes damage, I can grant it Resistance against that damage"
	]),
	action : [["bonus action", " (command to attack)"], ["reaction", " (give resistance)"]],
	prereqeval : function(v) {
		return classes.known.warlock_ua23pt7.level >= 5 && GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the chain';
	},
	calcChanges : {
		companionCallback : [function(prefix, oCrea, bAdd, sCompType) {
			if (sCompType !== "pact_of_the_chain") return;
			var strFea = "\u25C6 Investment of the Chain Master (TCoE 71): The familiar gains 40 ft fly or swim speed (my choice), its attacks can instead deal Necrotic or Radiant damage, and it can use my spell save DC instead of its own DC's (if any).";
			var strSpd = "fly or swim 40 ft";
			if (What("Unit System") === "metric") {
				strFea = ConvertToMetric(strFea, 0.5);
				strSpd = ConvertToMetric(strSpd, 0.5);
			}
			var aFnc = bAdd ? AddString : RemoveString;
			aFnc(prefix + "Comp.Use.Features", strFea, true);
			aFnc(prefix + "Comp.Use.Speed", strSpd, typePF ? ",\n" : ", ");
			for (var i = 1; i <= 3; i++) {
				var baseFld = prefix + "Comp.Use.Attack." + i;
				var weaDescrFld = baseFld + ".Description";
				var strWeaDescr = What(weaDescrFld);
				if (bAdd && What(baseFld + ".Weapon Selection") && !(/(,|;)? ?can instead deal necrotic or radiant damage/i).test(strWeaDescr)) {
					AddString(weaDescrFld, "Can instead deal Necrotic or Radiant damage", "; ");
				} else if (!bAdd) {
					Value(weaDescrFld, strWeaDescr.replace(/(,|;)? ?can instead deal necrotic or radiant damage/i, ''));
				}
			}
		},
		"My pact of the chain familiars gain an extra feature listing the extra bonuses they gain."]
	}
});
AddWarlockInvocation("Kiss of Mephistopheles (prereq: level 5 warlock, the Fiend patron, Eldritch Blast cantrip)", {
	name : "Kiss of Mephistopheles",
	description : desc([
		"As a Bonus Action when my Eldritch Blast hits, I can cast Fireball using a warlock spell slot.",
		"The origin of the Fireball is the creature that was hit with my Eldritch Blast attack."
	]),
	source : [["UA:WnW", 4]],
	submenu : "[improves Eldritch Blast]",
	prereqeval : function(v) { return v.hasEldritchBlast && classes.known.warlock_ua23pt7.level >= 5 && (/\bfiend\b/).test(classes.known.warlock_ua23pt7.subclass); },
	action : ["bonus action", ""]
});
AddWarlockInvocation("Lance of Lethargy (prereq: Eldritch Blast cantrip)", {
	name : "Lance of Lethargy",
	description : desc([
		"Once per turn when my Eldritch Blast hits a creature, I can reduce its Speed by 10 ft.",
		"This Speed reduction lasts until the end of my next turn."
	]),
	source : [["X", 57]],
	submenu : "[improves Eldritch Blast]",
	prereqeval : function(v) { return v.hasEldritchBlast; },
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'eldritch blast') fields.Description += '; 1 target -10 ft speed';
			},
			"Once on each of my turns when I hit a creature with my Eldritch Blast cantrip, I can reduce its Speed by 10 ft until the end of my next turn."
		]
	}
});
AddWarlockInvocation("Lessons of the Old Ones (prereq: level 2 warlock, repeatable)", { //Original to the 5.1E UA articles; put here instead in the class code so as to keep myself sane.
	name : "Lessons of the Old Ones",
	description : desc([
		"I gain one Feat of my choice that lacks prerequisites.",
		"I can take this Invocation multiple times, but must take a different Feat each time."
	]),
	source : [["UA23PT7", 29], ["MJ:HB", 0]],
	submenu : "[warlock level  2+]",
	prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 2; },
});
AddWarlockInvocation("Mace of Dispater (prereq: the Fiend patron, Pact of the Blade)", {
	name : "Mace of Dispater",
	description : desc([
		"As a pact weapon, I can create an iron mace forged in Dis, the 2nd layer of the Nine Hells.",
		"I can knock a target Prone with it on a hit, if the target's size is Huge or smaller.",
		"On a hit, I can expend a spell slot to have it do +2d8 Force damage per spell slot level."
	]),
	source : [["UA:WnW", 4]],
	submenu : "[improves Pact of the Blade]",
	prereqeval : function(v) { return (/\bfiend\b/).test(classes.known.warlock_ua23pt7.subclass) && classes.known.warlock_ua23pt7.level >= 3 && GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the blade'; },
	weaponOptions : {
		baseWeapon : "mace",
		regExpSearch : /^(?=.*\bmace\b)(?=.*\bdispater\b).*$/i,
		name : "Mace of Dispater",
		source : [["UA:WnW", 4]],
		pactWeapon : true,
		description : "Pact weapon; On hit: knock Huge or smaller prone, Expend spell slot for +2d8 force damage per slot level"
	},
	weaponsAdd : ['Mace of Dispater']
});
AddWarlockInvocation("Maddening Hex (prereq: level 5 warlock, Hex spell or warlock feature that curses)", {
	name : "Maddening Hex",
	description : desc([
		"As a Bonus Action, I cause pain around a target hexed by me that I can see within 30 ft.",
		"It and any of my choice I can see in 5 ft of it take my Cha mod (min 1) in psychic damage.",
		"The Hex spell and all of my Warlock features that curse are considered a hex for this."
	]),
	source : [["X", 57]],
	submenu : "[improves Hex spell or warlock feature that curses]",
	prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 5 && (isSpellUsed('hex', true) || (/hexblade/).test(classes.known.warlock_ua23pt7.subclass)); },
	action : ["bonus action", ""]
});
AddWarlockInvocation("Moon Bow (prereq: the Archfey patron, Pact of the Blade)", {
	name : "Moon Bow",
	description : desc([
		"As a pact weapon, I can create a longbow that creates arrows of white wood when drawn.",
		"Its arrows last for 1 minute; I have Advantage on attack rolls against lycanthropes with it.",
		"On a hit, I can expend a spell slot to have it do +2d8 Radiant damage per spell slot level."
	]),
	source : [["UA:WnW", 4]],
	submenu : "[improves Pact of the Blade]",
	prereqeval : function(v) { return (/\barchfey\b/).test(classes.known.warlock_ua23pt7.subclass) && classes.known.warlock_ua23pt7.level >= 3 && GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the blade'; },
	weaponOptions : {
		baseWeapon : "longbow",
		regExpSearch : /^(?=.*\bmoon)(?=.*bow\b).*$/i,
		name : "Moon Bow",
		source : [["UA:WnW", 4]],
		pactWeapon : true,
		description : "Pact weapon, heavy, two-handed; Adv. vs. lycanthropes; On hit, expend spell slot for +2d8 radiant damage per slot level"
	},
	weaponsAdd : ['Moon Bow']
});
AddWarlockInvocation("Path of the Seeker (prereq: the Seeker patron)", {
	name : "Path of the Seeker",
	description : desc([
		"I ignore Difficult Terrain; I have Advantage on saving throws against being Paralyzed",
		"I also have Advantage on checks to escape a Grapple, manacles, or rope bindings"
	]),
	source : [["UA:WnW", 4]],
	prereqeval : function(v) { return (/\bseeker\b/).test(classes.known.warlock_ua23pt7.subclass); },
	savetxt : { adv_vs : ["paralyzed"] }
});
AddWarlockInvocation("Protection of the Talisman (prereq: level 7 warlock, Pact of the Talisman)", {
	name : "Protection of the Talisman",
	source : [["T", 71]],
	submenu : "[improves Pact of the Talisman]",
	description : "\n   " + "When the wearer of my talisman fails a saving throw, they can add +1d4 to the roll.",
	prereqeval : function(v) {
		return classes.known.warlock_ua23pt7.level >= 7 && GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7').indexOf("pact of the talisman") !== -1;
	},
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus')",
	recovery : "long rest"
});
AddWarlockInvocation("Raven Queen's Blessing (prereq: the Raven Queen patron, Eldritch Blast cantrip)", {
	name : "Raven Queen's Blessing",
	description : desc([
		"When I score a Critical Hit with Eldritch Blast, I can choose an ally I can see within 30 ft.",
		"That ally can immediately expend one HD to regain HP, just like after a Short Rest."
	]),
	source : [["UA:WnW", 5]],
	submenu : "[improves Eldritch Blast]",
	prereqeval : function(v) { return v.hasEldritchBlast && (/raven queen/).test(classes.known.warlock_ua23pt7.subclass); }
});
AddWarlockInvocation("Rebuke of the Talisman (prereq: Pact of the Talisman)", {
	name : "Rebuke of the Talisman",
	source : [["T", 71]],
	submenu : "[improves Pact of the Talisman]",
	description : desc([
		"As a Reaction when the wearer of my talisman is hit, I deal damage and push the attacker.",
		"To be able to do this, I have to see the attacker and it has to be within 30 ft of me.",
		"I deal it my Proficiency Bonus in psychic damage and push it 10 ft straight away from the talisman."
	]),
	prereqeval : function(v) {
		return GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7').indexOf("pact of the talisman") !== -1;
	},
	action : [["reaction", ""]]
});
AddWarlockInvocation("Relentless Hex (prereq: level 7 warlock, Hex spell or warlock feature that curses)", {
	name : "Relentless Hex",
	description : desc([
		"As a Bonus Action, I can teleport to a target hexed by me that I can see within 30 ft.",
		"I teleport up to 30 ft to an unoccupied space that I can see within 5 ft of the target."
	]),
	source : [["X", 57]],
	submenu : "[improves Hex spell or warlock feature that curses]",
	prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 7 && (isSpellUsed('hex', true) || (/hexblade/).test(classes.known.warlock_ua23pt7.subclass)); },
	action : ["bonus action", ""]
});
AddWarlockInvocation("Seeker's Speech (prereq: the Seeker patron)", {
	name : "Seeker's Speech",
	description : desc([
		"When I finish a Long Rest, I pick two Languages that I know until I finish my next Long Rest."
	]),
	source : [["UA:WnW", 5]],
	prereqeval : function(v) { return (/\bseeker\b/).test(classes.known.warlock_ua23pt7.subclass); }
});
AddWarlockInvocation("Shroud of Shadow (prereq: level 15 warlock)", {
	name : "Shroud of Shadow",
	description : "\n   " + "I can cast Invisibility at will, without using spell slots (PHB 254).",
	source : [["X", 57], ["UA:RCO", 6]],
	submenu : "[warlock level 15+]",
	spellcastingBonus : {
		name : "Shroud of Shadow",
		spells : ["invisibility"],
		selection : ["invisibility"],
		firstCol : 'atwill'
	},
	prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 15; },
	spellChanges : {
		"invisibility" : {
			description : "1 crea invisible; attacking/casting makes the crea visible; anything worn/carried also invisible",
			changes : "With the Shroud of Shadow invocation I can cast Invisibility at will, but when I do so I am unable to cast it using a higher level spell slot."
		}
	}
});
AddWarlockInvocation("Shroud of Ulban (prereq: level 18 warlock, the Great Old One patron)", {
	name : "Shroud of Ulban",
	description : desc([
		"As an Action, I can turn myself Invisible for 1 minute.",
		"If I attack, deal damage, or force a creature to make a save, I become visible again.",
		"However, I only become visible at the end of the current turn."
	]),
	source : [["UA:WnW", 4]],
	submenu : "[warlock level 18+]",
	prereqeval : function(v) { return (/great old one/).test(classes.known.warlock_ua23pt7.subclass) && classes.known.warlock_ua23pt7.level >= 18; },
	action : ["action", ""]
});
AddWarlockInvocation("Superior Pact Weapon (prereq: level 9 warlock, Pact of the Blade)", {
	name : "Superior Pact Weapon",
	description : desc([
		"Any pact weapon I create is a +2 magic weapon, if it isn't already a magic weapon."
	]),
	source : [["UA:WnW", 5]],
	submenu : "[improves Pact of the Blade]",
	prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 9 && GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the blade'; },
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				// Test if this is a pact weapon, has no + bonus in its name, is not a magic weapon, and doesn't already have a improved pact weapon bonus
				var iPactWeaBonus = 2;
				if (v.pactWeapon && !v.thisWeapon[1] && !(v.theWea && v.theWea.isMagicWeapon) && ((!v.pactMag && !output.magic) || (v.pactMag && v.pactMag < iPactWeaBonus))) {
					if (v.pactMag) output.magic -= v.pactMag;
					v.pactMag = iPactWeaBonus;
					output.magic += v.pactMag;
				};
			},
			"If my Pact Weapon doesn't already include a magical bonus in its name or gets it from somewhere else and is not a magic weapon, the calculation will add +2 to its To Hit and Damage."
		]
	}
});
AddWarlockInvocation("Tomb of Levistus (prereq: level 5 warlock)", {
	name : "Tomb of Levistus",
	description : desc([
		"As a Reaction when I take damage, I can entomb myself in ice until the end of my turn.",
		"During, I get 10 temp. HP per Warlock level, which I use to absorb the triggering damage.",
		"After, till the ice is gone, I also get Vulnerability to Fire, 0 Speed, and am Incapacitated."
	]),
	source : [["X", 57], ["UA:RCO", 6]],
	submenu : "[warlock level  5+]",
	prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 5; },
	recovery : "short rest",
	usages : 1,
	action : ["reaction", ""],
	additional : levels.map( function(n) { return (n * 10) + " temp HP"; })
});
AddWarlockInvocation("Trickster's Escape (prereq: level 7 warlock)", {
	name : "Trickster's Escape",
	description : "\n   " + "Once per Long Rest, I can cast Freedom of Movement on myself without using a spell slot",
	source : [["X", 57], ["UA:RCO", 7]],
	submenu : "[warlock level  7+]",
	spellcastingBonus : {
		name : "Trickster's Escape",
		spells : ["freedom of movement"],
		selection : ["freedom of movement"],
		firstCol : 'oncelr'
	},
	prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 7; },
	spellChanges : {
		"freedom of movement" : {
			range : "Self",
			description : "Magic can't reduce my speed, paralyze or restrain me; I can use 5 ft to escape nonmagical restrains",
			changes : "With the Trickster's Escape invocation I can cast Freedom of Movement, but only on myself."
		}
	}
});
AddWarlockInvocation("Ultimate Pact Weapon (prereq: level 15 warlock, Pact of the Blade)", {
	name : "Ultimate Pact Weapon",
	description : desc([
		"Any pact weapon I create is a +3 magic weapon, if it isn't already a magic weapon"
	]),
	source : [["UA:WnW", 5]],
	submenu : "[improves Pact of the Blade]",
	prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 15 && GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the blade'; },
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				// Test if this is a pact weapon, has no + bonus in its name, is not a magic weapon, and doesn't already have a improved pact weapon bonus
				var iPactWeaBonus = 3;
				if (v.pactWeapon && !v.thisWeapon[1] && !(v.theWea && v.theWea.isMagicWeapon) && ((!v.pactMag && !output.magic) || (v.pactMag && v.pactMag < iPactWeaBonus))) {
					if (v.pactMag) output.magic -= v.pactMag;
					v.pactMag = iPactWeaBonus;
					output.magic += v.pactMag;
				};
			},
			"If my Pact Weapon doesn't already include a magical bonus in its name or gets it from somewhere else and is not a magic weapon, the calculation will add +3 to its To Hit and Damage."
		]
	}
});
AddWarlockInvocation("Undying Servitude (prereq: level 5 warlock)", {
	name : "Undying Servitude",
	description : "\n   Once per long rest, I can cast Animate Dead without using a spell slot.",
	source : [["T", 71]],
	submenu : "[warlock level  5+]",
	usages : 1,
	additional : "no spell slot",
	recovery : "long rest",
	spellcastingBonus : {
		name : "Undying Servitude",
		spells : ["animate dead"],
		selection : ["animate dead"],
		firstCol : "oncelr"
	},
	prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 5; }
});

//// Add Warlock optional choices
AddFeatureChoice(ClassList.warlock_ua23pt7.features["pact magic ua23pt7"], true, "Access to Dunamancy Spells", {
	name : "Dunamancy Spells",
	extraname : "Optional Warlock 1",
	source : [["W", 186]],
	description : desc([
		"All dunamancy spells are added to the Warlock spell list, each still pending DM's approval"
	]),
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "warlock_ua23pt7" || (spType.indexOf("bonus") !== -1 && (!spList["class"] || spList["class"] !== "warlock_ua23pt7"))) return;
				spList.extraspells = spList.extraspells.concat(["sapping sting", "gift of alacrity", "magnify gravity", "fortune's favor", "immovable object", "wristpocket", "pulse wave", "gravity sinkhole", "temporal shunt", "gravity fissure", "tether essence", "dark star", "reality break", "ravenous void", "time ravage"]);
			},
			"This optional class feature expands the spell list of the Warlock class with all dunamancy spells (spell level in brackets): Sapping Sting (cantrip), Gift of Alacrity (1), Magnify Gravity (1), Fortune's Favor (2), Immovable Object (2), Wristpocket (2), Pulse Wave (3), Gravity Sinkhole (4), Temporal Shunt (5), Gravity Fissure (6), Tether Essence (7), Dark Star (8), Reality Break (8),Ravenous Void (9), and Time Ravage (9)."
		]
	}
}, "Optional 1st-level warlock features");
AddFeatureChoice(ClassList.warlock_ua23pt7.features["pact magic ua23pt7"], true, "Additional Warlock Spells", {
	name : "Additional Warlock Spells",
	extraname : "Optional Warlock 1",
	source : [["T", 70]],
	description : "",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "warlock_ua23pt7" || (spType.indexOf("bonus") !== -1 && (!spList["class"] || spList["class"] !== "warlock_ua23pt7"))) return;
				spList.extraspells = spList.extraspells.concat(["mislead", "planar binding", "teleportation circle", "gate", "weird"]);
			},
			"This optional class feature expands the spell list of the Warlock class with the following spells (spell level in brackets): Mislead (5), Planar Binding (5), Teleportation Circle (5), Gate (9), and Weird (9)."
		]
	}
}, "Optional 1st-level warlock features");
AddFeatureChoice(ClassList.warlock_ua23pt7.features["magical cunning ua23pt7"], true, "Eldritch Versatility", {
	name : "Eldritch Versatility",
	extraname : "Optional Warlock 4",
	source : [["T", 70]],
	description : " [ASI = Ability Score Improvement]" + desc([
		"Whenever I gain an ASI from the warlock class, I can change one of the following things:",
		" \u2022 I can replace one warlock cantrip with another cantrip from the warlock spell list",
		" \u2022 I can replace my pact boon for another",
		" \u2022 If I have Mystic Arcanum, I can replace one spell from it with another of the same level"
	]),
	prereqeval : function (v) { return classes.known.warlock_ua23pt7.level >= 4 ? true : "skip"; }
}, "Optional 4th-level warlock features");
AddFeatureChoice(ClassList.warlock_ua23pt7.features["pact magic ua23pt7"], true, "Pact of the Blade Mastery Properties", {
	name : "Pact of the Blade Mastery Properties",
	extraname : "Optional Warlock 1",
	source : [["UA23PT7", 30], ["SRD", 47], ["P", 107], ["MJ:HB", 0]],
	description : desc([
		"This feature adds the appropriate Mastery Property to my pact weapons.",
	]),
	calcChanges : {
		atkAdd : [
			function(weaponMasteryAtkAdd) {}, "", 291,
		],
	},
	prereqeval : function (v) { return classes.known.warlock_ua23pt7.level >= 2 ? true : "skip" && GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the blade'; }
}, "Optional 1st-level warlock features");

////// Add UA23PT7 Archfey Patron Warlock subclass
AddSubClass("warlock_ua23pt7", "the archfey", { //Ripped directly from "all_WotC_pub+UA.js" and then altered
	regExpSearch : /^(?=.*fey)(?=.*warlock).*$/i,
	subname : "the Archfey",
	source : [["UA23PT7", 31], ["P", 109], ["MJ:HB", 0]],
	spellcastingExtra : ["misty step", "faerie fire", "sleep", "calm emotions", "phantasmal force", "blink", "plant growth", "dominate beast", "greater invisibility", "dominate person", "seeming"],
	features : {
		"subclassfeature3" : {
			name : "Steps of the Fey",
			source : [["UA23PT7", 32], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				"I can cast Misty Step Cha mod (min 1) times without using a spell slot per Long Rest.",
				"I can choose to apply one of the following additional effects when I cast the spell:",
				" \u2022 Refreshing Step. Immediately after I teleport, one creature I can see within 10 feet",
				"  of me gains 1d10 Temporary Hit Points.",
				" \u2022 Taunting Step. Creatures within 5 feet of the space I left must succeed on a Wis saving throw",
				"  or have Disadv. on attack rolls against creatures other than me until the start of my next turn.",
			]),
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"subclassfeature6" : {
			name : "Misty Escape",
			source : [["UA23PT7", 32], ["P", 109], ["MJ:HB", 0]],
			minlevel : 6,
			description : desc([
				"As a Reaction, when I take damage, I can cast Misty Step; Additionally, the following effects",
				"  are among my Steps of the Fey options:",
				" \u2022 Disappearing Step. I can turn Invisible until the start of my next turn or until I",
				"  attack or cast a spell.",
				" \u2022 Dreadful Step. Creatures within 5 feet of the space I left or the space I appear in",
				"  (my choice) must succeed on a Wis saving throw or take 2d10 Psychic damage.",
			]),
			action : ["reaction", " (taking damage)"],
		},
		"subclassfeature10" : {
			name : "Beguiling Defenses",
			source : [["UA23PT7", 32], ["P", 109], ["MJ:HB", 0]],
			minlevel : 10,
			description : desc([
				"Once per Long Rest, I can use a Reaction when a creature hits me with an attack roll,",
				"  reducing the damage I take by half (round down), and I can force the attacker to make a",
				"  Wis save or take Psychic damage equal to the damage I took.",
				"Additionally, I am immune to being charmed.",
			]),
			recovery : "long rest",
			usages : 1,
			action : ["reaction", " (when damaged)"],
			savetxt : { immune : ["charmed"] },
		},
		"subclassfeature14" : {
			name : "Bewitching Magic",
			source : [["UA23PT7", 32], ["MJ:HB", 0]],
			minlevel : 14,
			description : desc([
				"Immediately after casting an Enchantment or Illusion spell using an action \u0026 a spell slot,",
				"  I can cast Misty Step as part of the same action \u0026 without using a spell slot.",
			]),
		},
	},
});

////// Add UA23PT7 Celestial Patron Warlock subclass
AddSubClass("warlock_ua23pt7", "the celestial", { //Ripped directly from "all_WotC_pub+UA.js" and then altered
	regExpSearch : /^(?=.*warlock)(?=.*celestial).*$/i,
	subname : "the Celestial",
	source : [["UA23PT7", 32], ["X", 54], ["MJ:HB", 0]],
	spellcastingExtra : ["cure wounds", "cure wounds ua23pt8", "guiding bolt", "flaming sphere", "lesser restoration", "daylight", "revivify", "guardian of faith", "wall of fire", "flame strike", "greater restoration"],
	features : {
		"subclassfeature3" : {
			name : "Bonus Cantrips",
			source : [["UA23PT7", 33], ["X", 54]],
			minlevel : 3,
			description : "\n   " + "I learn the Light and Sacred Flame cantrips, not counting for the number I can know.",
			spellcastingBonus : [{
				name : "Bonus Cantrips",
				spells : ["light"],
				selection : ["light"]
			}, {
				name : "Bonus Cantrips",
				spells : ["sacred flame"],
				selection : ["sacred flame"]
			}],
		},
		"subclassfeature3.1" : {
			name : "Healing Light",
			source : [["UA23PT7", 33], ["X", 54], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				"As a Bonus Action, I can heal a creature I can see within 60 ft by expending dice.",
				"I can expend up to my Charisma modifier (min 1) of dice from my pool at a time.",
				"The target heals HP equal to the roll of the dice; I regain all expended dice on a Long Rest."
			]),
			usages : levels.map(function (n) { return (n + 1) + "d6 per "; }),
			usagescalc : "event.value = !classes.known.warlock_ua23pt7 ? '' : (1 + classes.known.warlock_ua23pt7.level) + 'd6';",
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"subclassfeature6" : {
			name : "Radiant Soul",
			source : [["UA23PT7", 33], ["X", 55]],
			minlevel : 6,
			description : desc([
				"I add my Cha modifier once to the Fire or Radiant damage of cantrips and spells I cast.",
				"This bonus only applies to one target; Also, I have Resistance to Radiant damage."
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
			source : [["UA23PT7", 33], ["X", 55], ["MJ:HB", 0]],
			minlevel : 10,
			description : desc([
				"When I finish a Short or Long Rest, or I use my Magical Cunning feature, I and up to five allies",
				"  gain Temp HP. I get my Warlock level + Cha mod, while my allies get half my Warlock level + Cha mod.",
			]),
			additional : levels.map(function (n) { return n < 10 ? "" : "Me: " + n + "+Cha mod; Allies: " + Math.floor(n / 2) + "+Cha mod"; })
		},
		"subclassfeature14" : {
			name : "Searing Vengeance",
			source : [["UA23PT7", 33], ["X", 55], ["MJ:HB", 0]],
			minlevel : 14,
			description : desc([
				"At the start of my turn when I would make a death save, I can instead spring back up.",
				"I recover HP equal to half my current HP maximum, and can then stand up if I choose.",
				"When I recover HP in this manner, creatures of my choice within 30 ft take 2d8 + Cha mod in",
				"  Radiant damage, becoming Blinded until the end of my current turn."
			]),
			usages : 1,
			recovery : "long rest"
		},
	},
});

////// Add UA23PT7 Fiend Patron Warlock subclass
AddSubClass("warlock_ua23pt7", "the fiend", { //Ripped directly from "ListsClasses.js" and then altered
	regExpSearch : /^(?=.*(fiend|devil|demon|daemon|hell|abyss))(?=.*warlock).*$/i,
	subname : "the Fiend",
	source : [["UA23PT7", 33], ["SRD", 50], ["P", 109], ["MJ:HB", 0]],
	spellcastingExtra : ["burning hands", "command", "suggestion", "scorching ray", "fireball", "stinking cloud", "fire shield", "wall of fire", "geas", "insect plague"],
	features : {
		"subclassfeature3" : {
			name : "Dark One's Blessing",
			source : [["UA23PT7", 34], ["SRD", 50], ["P", 109], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				"When myself or another within 10 ft of me reduce a hostile to 0 HP, I gain spellcasting mod +",
				"  Warlock level Temp HP (min 1).",
			]),
		},
		"subclassfeature6" : {
			name : "Dark One's Own Luck",
			source : [["UA23PT7", 34], ["SRD", 50], ["P", 109], ["MJ:HB", 0]],
			minlevel : 6,
			description : desc([
				"When I make an ability check or saving throw, I can add 1d10 after rolling the d20.",
				"I can do this spellcasting mod (min 1) times per Long Rest, but no more than once per roll.",
			]),
			recovery : "long rest",
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
		},
		"subclassfeature10" : {
			name : "Fiendish Resilience",
			source : [["UA23PT7", 34], ["SRD", 51], ["P", 109], ["MJ:HB", 0]],
			minlevel : 10,
			description : desc([
				"After a Short or Long Rest, I can choose one damage type, other than Force, to become Resistant to.",
				"This lasts until I choose another type."
			])
		},
		"subclassfeature14" : {
			name : "Hurl Through Hell",
			source : [["UA23PT7", 34], ["SRD", 51], ["P", 109], ["MJ:HB", 0]],
			minlevel : 14,
			description : desc([
				"When I hit a creature with an attack roll, I can instantly transport it through Lower Planes.",
				"Target must succeed a Cha save or it disappears \u0026 hurtles through a nightmarish landscape.",
				"It takes 8d10 Psychic damage if not a Fiend, is Incapacitated, \u0026 reappears where it left or in",
				"  the nearest unoccupied space at the end of my next turn, at which point it is no longer Incapacitated.",
				"I can only use this feature once per Long Rest.",
			]),
			recovery : "long rest",
			usages : 1,
		},
	},
});

////// Add UA23PT7 Great Old One Patron Warlock subclass
AddSubClass("warlock_ua23pt7", "the great old one", { //Ripped directly from "all_WotC_pub+UA.js" and then altered
	regExpSearch : /^(((?=.*(tharizdun|cthulhu))(?=.*warlock))|((?=.*(great|dread))(?=.*(ancient|old))(?=.*\b(one|entity)\b))).*$/i,
	subname : "the Great Old One",
	source : [["UA23PT7", 34], ["P", 110], ["MJ:HB", 0]],
	spellcastingExtra : ["dissonant whispers", "tasha's hideous laughter", "detect thoughts", "phantasmal force", "clairvoyance", "sending", "dominate beast", "evard's black tentacles", "dominate person", "telekinesis"],
	features : {
		"subclassfeature3" : {
			name : "Awakened Mind",
			source : [["UA23PT7", 35], ["P", 110], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				"I can telepathically speak with another creature I can see within 30 ft.",
				"Myself \u0026 the chosen creature can speak telepathically with each other while we are within",
				"  Cha mod (min 1) number of miles of each other. The other can understand me only if I speak",
				"  mentally in a language they know.",
				"This connection lasts for a number of minutes equal to my Warlock level, \u0026 ends early if I",
				"  gain the Incapacitated condition, die, or I use this feature with another creature.",
			]),
		},
		"subclassfeature3.1" : {
			name : "Psychic Spells",
			source : [["UA23PT7", 35], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				"I can change the damage type of my Warlock spells to Psychic damage.",
				"I can cast Enchantment \u0026 Illusion Warlock spells without verbal or somatic components.",
			]),
		},
		"subclassfeature6" : {
			name : "Clairvoyant Combatant",
			source : [["UA23PT7", 35], ["MJ:HB", 0]],
			minlevel : 6,
			description : desc([
				"When I connect with a creature using my Awakened Mind feature, I can force that creature to make",
				"  a Wis save. If it fails, it has Disadv. on attack rolls against me, \u0026 I have Adv. on attack",
				"  rolls against it. These effects last for the duration of the bond.",
				"I can do this once per Short or Long Rest, or by expending a 2nd-level or higher spell slot (SS 2+)",
			]),
			recovery : "short rest",
			usages : 1,
			altResource : "SS 2+",
		},
		"subclassfeature10" : {
			name : "Thought Shield",
			source : [["UA23PT7", 35], ["P", 110], ["MJ:HB", 0]],
			minlevel : 10,
			description : desc([
				"No one can read my mind unless I allow it; I have Resistance to Psychic damage.",
				"When I take Psychic damage, the dealer of the Psychic damage takes the same amount.",
			]),
			dmgres : ["Psychic"]
		},
		"subclassfeature10.1" : {
			name : "Eldritch Hex",
			source : [["UA23PT7", 35], ["MJ:HB", 0]],
			minlevel : 10,
			description : desc([
				"I always have the Hex spell prepared; The target of my Hex spells also have Disadv. on saving throws.",
			]),
			spellcastingBonus : {
				name : "Eldritch Hex",
				spells : ["hex"],
				selection : ["hex"],
				times : 1,
			},
			spellChanges : {
				"hex" : {
					description : "1 crea +1d6 Necrotic dmg from my atks; Dis. on chosen ability checks \u0026 saves; SL3: conc, 8h; SL5: conc, 24h",
					descriptionShorter : "1 crea +1d6 Necrotic dmg from my atks; Dis. chosen abi chks \u0026 saves; SL3: conc, 8h; SL5: conc, 24h",
					descriptionFull : "You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks \u0026 saving throws made with the chosen ability." + "\n   " + "If the target drops to 0 hit points before this spell ends, you can use a Bonus Action on a subsequent turn of yours to curse a new creature." + "\n   " + "A Remove Curse cast on the target ends this spell early." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours.",
					changes : "The target of my Hex spells also have Disadv. on saving throws.",
				},
			},
		},
		"subclassfeature14" : {
			name : "Create Thrall",
			source : [["UA23PT7", 35], ["MJ:HB", 0]],
			minlevel : 14,
			description : desc([
				"I always have the Summon Aberration spell prepared; When I cast the spell, I can modify it so",
				"  that it doesn't require Concentration. If I do so, the spell's duration becomes 1 minute and",
				"  when summoned, the Aberration has a number of Temp HP equal to my Warlock level + Cha mod.",
				"Additionally, the first time each turn the Aberration hits a creature under the effects of my Hex",
				"  spell, the Aberration deals extra Psychic damage equal to the bonus damage of the Hex spell.",
			]),
			spellcastingBonus : {
				name : "Create Thrall",
				spells : ["summon aberration"],
				selection : ["summon aberration"],
			},
		},
	},
});