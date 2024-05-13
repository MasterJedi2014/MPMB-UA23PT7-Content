/*	-INFORMATION-
	Subject:	Classes, Subclasses, Feats, & Spells
	Effect:		This script adds the content from the 2023 Unearthed Arcana "Player's Handbook Playtest 7" article.
				This file has been made by MasterJedi2014, borrowing a lot of code from MPMB and those who have contributed to the sheet's existing material.
	Code by:	MasterJedi2014, using MorePurpleMoreBetter's code as reference
	Date:		2024-05-13 (sheet v13.1.0)
*/

var iFileName = "UA2023PT7 Content [by MasterJedi2014] V4.js";
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
	date : "2024/05/13",
};

// Add UA23PT7 Fighter class
ClassList.fighter_ua23pt7 = {
	name : "Fighter (UA:PT-vii)",
	regExpSearch : /(?=.*(fighter|warrior|militant|warlord|phalanx|gladiator|trooper)).*$/i,
	source : [["UA23PT7", 9], ["MJ:HB", 0]],
	primaryAbility : "Strength or Dexterity",
	prerequisite : "Strength 13+ or Dexterity 13+",
	prereqeval : function(v) {
		return (What('Str') >= 13 || What('Dex') >= 13);
	},
	die : 10,
	improvements : [0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6, 6, 7, 7],
	saves : ["Str", "Con"],
	skills : ["\n\n" + toUni("Fighter") + ": Choose two from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Persuasion, Perception, Survival", ""],
	armor : [
		[true, true, true, true],
		[true, true, false, true],
	],
	weapons : [
		[true, true, [""]],
		[false, true, [""]],
	],
	equipment : "Fighter starting equipment:" +
		"\n \u2022 Chain Mail," +
		"\n \u2022 Crossbow Bolts (20)," +
		"\n \u2022 Dungeoneer's Pack," +
		"\n \u2022 Greatsword," +
		"\n \u2022 Light Crossbow," +
		"\n \u2022 Quiver," +
		"\n \u2022 and 11 gp;" +
		"\n OR;" +
		"\n \u2022 Chain Mail," +
		"\n \u2022 Crossbow Bolts (20)," +
		"\n \u2022 Dungeoneer's Pack," +
		"\n \u2022 Longsword," +
		"\n \u2022 Shield," +
		"\n \u2022 Light Crossbow," +
		"\n \u2022 Quiver," +
		"\n \u2022 and 36 gp;" +
		"\n\nAlternatively, choose 175 gp worth of starting equipment instead of the class' starting equipment.",
	subclasses : ["Martial Archetype", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4,],
	features : {
		"fighting style ua23pt7" : { //Ripped directly from "ListClasses.js" and then altered
			name : "Fighting Style",
			source : [["UA23PT7", 10], ["SRD", 24], ["P", 72], ["MJ:HB", 0]],
			minlevel : 1,
			description : desc([
				"Choose a Fighting Style feat for the Fighter using the \"Choose Feature\" button above.",
				"The chosen option will appear in pg 3's Notes section & in the list of feats.",
				"Upon gaining a Fighter Lvl, I can replace the feat chosen with another Fighting Style feat.",
			]),
		},
		"second wind ua23pt7" : { //Ripped directly from "ListClasses.js" and then altered
			name : "Second Wind",
			source : [["UA23PT7", 10], ["SRD", 24], ["P", 72], ["MJ:HB", 0]],
			minlevel : 1,
			description : desc([
				"As a Bonus Action, I regain 1d10 + fighter level HP;",
				"I can use this a number of times per Long Rest, regaining one expended use after a Short Rest.",
				"I can use this 2 times at Fighter Lvl 1, 3 times at Fighter Lvl 4, \u0026 4 times at Fighter Lvl 10.",
			]),
			additional : levels.map(function (n) {
				return "1d10+" + n;
			}),
			limfeaname : "Second Wind (Regain 1/SR)",
			usages : [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"weapon mastery ua23pt7" : {
			/* This feature calls the masteryFunctions.weaponMasteryAtkAdd function (made by Joost/MPMB) for the
			actual weapon description alterations. The feature also lets the user select via extrachoices what
			Weapons they currently have chosen to add Mastery properties to. The extrachoices options are
			functionally useless, but I'm leaving it in here because I know some users in my own play group need
			what the extrachoices does to realize "Oh, I need to remove the word 'Mastery' from one of my weapons
			to use the Mastery property of a different weapon".
			Joost/MPMB, you can remove the extrachoices aspect of this if you want when you get around to updating
			the sheet code yourself for the revised rules.*/
			name : "Weapon Mastery",
			source : [["UA23PT7", 11], ["MJ:HB", 0]],
			minlevel : 1,
			description : desc([
				"I can use the Mastery property of 3 kinds of weapons of my choice with which I have proficiency.",
				"I can change what weapons I can use the Mastery property of after finishing a Long Rest.",
				"I can choose 4 kinds of weapons when I reach Fighter lvl 4, 5 kinds at Fighter Lvl 10, \u0026 6 at Fighter Lvl 16.",
				"My chosen weapon types will appear in the pg 3 Notes section.",
			]),
			calcChanges : {
				atkAdd : masteryFunctions.weaponMasteryAtkAdd
			},
			extraname : "Weapon Mastery",
			extrachoices : ["Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Light Crossbow", "Dart", "Shortbow", "Sling", "Battleaxe", "Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstar", "Pike", "Rapier", "Scimitar", "Shortsword", "Trident", "War Pick", "Warhammer", "Whip", "Blowgun", "Hand Crossbow", "Heavy Crossbow", "Longbow", "Pistol", "Musket", "Pistol Automatic", "Revolver", "Hunting Rifle", "Automatic Rifle", "Shotgun", "Laser Pistol", "Antimatter Rifle", "Laser Rifle"],
			extraTimes : levels.map(function (n) { return n < 4 ? 3 : n < 10 ? 4 : n < 16 ? 5 : 6; }),
			"club" : {
				name : "Club",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"dagger" : {
				name : "Dagger",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"greatclub" : {
				name : "Greatclub",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"handaxe" : {
				name : "Handaxe",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"javelin" : {
				name : "Javelin",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"light hammer" : {
				name : "Light Hammer",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"mace" : {
				name : "Mace",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"quarterstaff" : {
				name : "Quarterstaff",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"sickle" : {
				name : "Sickle",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"spear" : {
				name : "Spear",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"light crossbow" : {
				name : "Light Crossbow",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"dart" : {
				name : "Dart",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"shortbow" : {
				name : "Shortbow",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"sling" : {
				name : "Sling",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"battleaxe" : {
				name : "Battleaxe",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"flail" : {
				name : "Flail",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"glaive" : {
				name : "Glaive",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"greataxe" : {
				name : "Greataxe",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"greatsword" : {
				name : "Greatsword",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"halberd" : {
				name : "Halberd",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"lance" : {
				name : "Lance",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"longsword" : {
				name : "Longsword",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"maul" : {
				name : "Maul",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"morningstar" : {
				name : "Morningstar",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"pike" : {
				name : "Pike",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"rapier" : {
				name : "Rapier",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"scimitar" : {
				name : "Scimitar",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"shortsword" : {
				name : "Shortsword",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"trident" : {
				name : "Trident",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"war pick" : {
				name : "War Pick",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"warhammer" : {
				name : "Warhammer",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"whip" : {
				name : "Whip",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"blowgun" : {
				name : "Blowgun",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"hand crossbow" : {
				name : "Hand Crossbow",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"heavy crossbow" : {
				name : "Heavy Crossbow",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"longbow" : {
				name : "Longbow",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"pistol" : {
				name : "Pistol",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"musket" : {
				name : "Musket",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"pistol automatic" : {
				name : "Pistol Automatic",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"revolver" : {
				name : "Revolver",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"hunting rifle" : {
				name : "Hunting Rifle",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"automatic rifle" : {
				name : "Automatic Rifle",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"shotgun" : {
				name : "Shotgun",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"laser pistol" : {
				name : "Laser Pistol",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"antimatter rifle" : {
				name : "Antimatter Rifle",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
			"laser rifle" : {
				name : "Laser Rifle",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				description : "I can use the Mastery Property of this kind of weapon.",
			},
		},
		"action surge ua23pt7" : { //Ripped directly from "ListClasses.js" and then altered
			name : "Action Surge",
			source : [["UA23PT7", 11], ["SRD", 25], ["P", 72], ["MJ:HB", 0]],
			minlevel : 2,
			description : desc([
				"I can take one additional action, except the Magic action, on my turn on top of my normally allowed actions.",
				"I gain another use per Short Rest of this feature at Fighter Lvl 17, but can only use one per turn.",
			]),
			usages : [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
			recovery : "short rest",
		},
		"tactical mind ua23pt7" : {
			name : "Tactical Mind",
			source : [["UA23PT7", 11], ["MJ:HB", 0]],
			minlevel : 2,
			description : desc([
				"When I fail an Ability Check, I can expend a use of Second Wind to roll a 1d10 to add to the Ability Check.",
				"Expending a use of Second Wind in this manner forgoes the normal healing that Second Wind provides.",
				"If the check still fails after adding the 1d10, this use of Second Wind isn't expended.",
			]),
		},
		"subclassfeature3" : { //Ripped directly from "ListClasses.js" and then altered
			name : "Martial Archetype",
			source : [["UA23PT7", 11], ["SRD", 25], ["P", 72], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc('Choose a Martial Archetype you strive to emulate and put it in the "Class" field '),
		},
		"indomitable ua23pt7" : { //Ripped directly from "ListClasses.js" and then altered
			name : "Indomitable",
			source : [["UA23PT7", 11], ["SRD", 25], ["P", 72], ["MJ:HB", 0]],
			minlevel : 9,
			description : desc([
				"I can reroll a failed saving throw with a bonus equal to my Fighter Lvl, but must keep the new result",
				"I gain another use per Long Rest starting at Fighter lvl 13, \u0026 a 3rd use starting at Fighter Lvl 17.",
			]),
			usages : [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3],
			recovery : "long rest",
		},
		"master of armaments ua23pt7" : {
			name : "Master of Armaments",
			source : [["UA23PT7", 11], ["MJ:HB", 0]],
			minlevel : 9,
			description : desc([
				"After a Long Rest, I can choose any of the kinds of Mastery weapons I'm using \u0026 replace the Mastery",
				"  property of each with another Mastery property for which it qualifies. These property changes apply only",
				"  for me, not for others, and the changes end for me when I finish my next Long Rest.",
				"For reference, the prerequisites for each Mastery property will be listed in the pg 3 Notes section.",
			]),
			calcChanges : {
				atkAdd : masteryFunctions.masterOfArmamentsAtkAdd
			},
			toNotesPage : [{
				name : "Master of Armaments: Mastery Property Prerequisites",
				source : [["UA23PT7", 11], ["MJ:HB", 0]],
				note : [
					"For reference, here are the prerequisites for each Mastery property:",
					" \u2022 Cleave: Melee Weapon, Heavy Property",
					" \u2022 Graze: Melee Weapon, Heavy Property",
					" \u2022 Nick: Light Property",
					" \u2022 Push: Heavy, Two-Handed, or Versatile Property",
					" \u2022 Sap: Versatile Property or lacking a Weapon Property (ex: Mace, Flail)",
					" \u2022 Slow: No prerequisites",
					" \u2022 Topple: Heavy, Reach, or Versatile Property",
					" \u2022 Vex: Ammunition, Finesse, or Light Property",
				],
				page3notes : true,
				popupName : "Master of Armaments: Mastery Property Prerequisites",
			}],
		},
		"studied attacks ua23pt7" : {
			name : "Studied Attacks",
			source : [["UA23PT7", 11], ["MJ:HB", 0]],
			minlevel : 13,
			description : desc([
				"After missing an attack roll against a creature, I gain Adv. on my next attack roll against that creature",
				"  before the end of my next turn.",
			]),
		},
	},
};

//// Add Fighter "Fighting Style" choices
AddFeatureChoice(ClassList.fighter_ua23pt7.features["fighting style ua23pt7"], true, "Fighting Style: Archery", {
	name : "Fighting Style: Archery",
	extraname : "Fighter 1",
	source : [["UA23PT7", 10], ["MJ:HB", 0]],
	description : "\n   " + "I have chosen the Archery Fighting Style feat.",
	prereqeval : function (v) { return classes.known.fighter_ua23pt7.level >= 1 ? true : "skip"; },
	eval : function() { AddFeat("Archery Fighting Style (UA23PT6)"); },
	removeeval : function() { RemoveFeat("Archery Fighting Style (UA23PT6)"); }
}, "1st-level fighter Fighting Style choice");
AddFeatureChoice(ClassList.fighter_ua23pt7.features["fighting style ua23pt7"], true, "Fighting Style: Blind Fighting", {
	name : "Fighting Style: Blind Fighting",
	extraname : "Fighter 1",
	source : [["UA23PT7", 10], ["MJ:HB", 0]],
	description : "\n   " + "I have chosen the Blind Fighting Style feat.",
	prereqeval : function (v) { return classes.known.fighter_ua23pt7.level >= 1 ? true : "skip"; },
	eval : function() { AddFeat("Blind Fighting Style (UA23PT7)"); },
	removeeval : function() { RemoveFeat("Blind Fighting Style (UA23PT7)"); }
}, "1st-level fighter Fighting Style choice");
AddFeatureChoice(ClassList.fighter_ua23pt7.features["fighting style ua23pt7"], true, "Fighting Style: Defense", {
	name : "Fighting Style: Defense",
	extraname : "Fighter 1",
	source : [["UA23PT7", 10], ["MJ:HB", 0]],
	description : "\n   " + "I have chosen the Defense Fighting Style feat.",
	prereqeval : function (v) { return classes.known.fighter_ua23pt7.level >= 1 ? true : "skip"; },
	eval : function() { AddFeat("Defense Fighting Style (UA23PT6)"); },
	removeeval : function() { RemoveFeat("Defense Fighting Style (UA23PT6)"); }
}, "1st-level fighter Fighting Style choice");
AddFeatureChoice(ClassList.fighter_ua23pt7.features["fighting style ua23pt7"], true, "Fighting Style: Dueling", {
	name : "Fighting Style: Dueling",
	extraname : "Fighter 1",
	source : [["UA23PT7", 10], ["MJ:HB", 0]],
	description : "\n   " + "I have chosen the Dueling Fighting Style feat.",
	prereqeval : function (v) { return classes.known.fighter_ua23pt7.level >= 1 ? true : "skip"; },
	eval : function() { AddFeat("Dueling Fighting Style (UA23PT6)"); },
	removeeval : function() { RemoveFeat("Dueling Fighting Style (UA23PT6)"); }
}, "1st-level fighter Fighting Style choice");
AddFeatureChoice(ClassList.fighter_ua23pt7.features["fighting style ua23pt7"], true, "Fighting Style: Great Weapon Fighting", {
	name : "Fighting Style: Great Weapon Fighting",
	extraname : "Fighter 1",
	source : [["UA23PT7", 10], ["MJ:HB", 0]],
	description : "\n   " + "I have chosen the Great Weapon Fighting Style feat.",
	prereqeval : function (v) { return classes.known.fighter_ua23pt7.level >= 1 ? true : "skip"; },
	eval : function() { AddFeat("Great Weapon Fighting Style (UA23PT6)"); },
	removeeval : function() { RemoveFeat("Great Weapon Fighting Style (UA23PT6)"); }
}, "1st-level fighter Fighting Style choice");
AddFeatureChoice(ClassList.fighter_ua23pt7.features["fighting style ua23pt7"], true, "Fighting Style: Interception", {
	name : "Fighting Style: Interception",
	extraname : "Fighter 1",
	source : [["UA23PT7", 10], ["MJ:HB", 0]],
	description : "\n   " + "I have chosen the Interception Fighting Style feat.",
	prereqeval : function (v) { return classes.known.fighter_ua23pt7.level >= 1 ? true : "skip"; },
	eval : function() { AddFeat("Interception Fighting Style (UA23PT7)"); },
	removeeval : function() { RemoveFeat("Interception Fighting Style (UA23PT7)"); }
}, "1st-level fighter Fighting Style choice");
AddFeatureChoice(ClassList.fighter_ua23pt7.features["fighting style ua23pt7"], true, "Fighting Style: Protection", {
	name : "Fighting Style: Protection",
	extraname : "Fighter 1",
	source : [["UA23PT7", 10], ["MJ:HB", 0]],
	description : "\n   " + "I have chosen the Protection Fighting Style feat.",
	prereqeval : function (v) { return classes.known.fighter_ua23pt7.level >= 1 ? true : "skip"; },
	eval : function() { AddFeat("Protection Fighting Style (UA23PT6)"); },
	removeeval : function() { RemoveFeat("Protection Fighting Style (UA23PT6)"); }
}, "1st-level fighter Fighting Style choice");
AddFeatureChoice(ClassList.fighter_ua23pt7.features["fighting style ua23pt7"], true, "Fighting Style: Superior Technique", {
	name : "Fighting Style: Superior Technique",
	extraname : "Fighter 1",
	source : [["UA23PT7", 10], ["MJ:HB", 0]],
	description : "\n   " + "I have chosen the Superior Technique Fighting Style feat.",
	prereqeval : function (v) { return classes.known.fighter_ua23pt7.level >= 1 ? true : "skip"; },
	eval : function() { AddFeat("Superior Technique Fighting Style (UA23PT7)"); },
	removeeval : function() { RemoveFeat("Superior Technique Fighting Style (UA23PT7)"); }
}, "1st-level fighter Fighting Style choice");
AddFeatureChoice(ClassList.fighter_ua23pt7.features["fighting style ua23pt7"], true, "Fighting Style: Thrown Weapon", {
	name : "Fighting Style: Thrown Weapon",
	extraname : "Fighter 1",
	source : [["UA23PT7", 10], ["MJ:HB", 0]],
	description : "\n   " + "I have chosen the Thrown Weapon Fighting Style feat.",
	prereqeval : function (v) { return classes.known.fighter_ua23pt7.level >= 1 ? true : "skip"; },
	eval : function() { AddFeat("Thrown Weapon Fighting Style (UA23PT7)"); },
	removeeval : function() { RemoveFeat("Thrown Weapon Fighting Style (UA23PT7)"); }
}, "1st-level fighter Fighting Style choice");
AddFeatureChoice(ClassList.fighter_ua23pt7.features["fighting style ua23pt7"], true, "Fighting Style: Two-Weapon Fighting", {
	name : "Fighting Style: Two-Weapon Fighting",
	extraname : "Fighter 1",
	source : [["UA23PT7", 10], ["MJ:HB", 0]],
	description : "\n   " + "I have chosen the Two-Weapon Fighting Style feat.",
	prereqeval : function (v) { return classes.known.fighter_ua23pt7.level >= 1 ? true : "skip"; },
	eval : function() { AddFeat("Two-Weapon Fighting Style (UA23PT6)"); },
	removeeval : function() { RemoveFeat("Two-Weapon Fighting Style (UA23PT6)"); }
}, "1st-level fighter Fighting Style choice");
AddFeatureChoice(ClassList.fighter_ua23pt7.features["fighting style ua23pt7"], true, "Fighting Style: Unarmed Fighting", {
	name : "Fighting Style: Unarmed Fighting",
	extraname : "Fighter 1",
	source : [["UA23PT7", 10], ["MJ:HB", 0]],
	description : "\n   " + "I have chosen the Unarmed Fighting Style feat.",
	prereqeval : function (v) { return classes.known.fighter_ua23pt7.level >= 1 ? true : "skip"; },
	eval : function() { AddFeat("Unarmed Fighting Style (UA23PT7)"); },
	removeeval : function() { RemoveFeat("Unarmed Fighting Style (UA23PT7)"); }
}, "1st-level fighter Fighting Style choice");

////// Add UA23PT7 Battle Master Fighter subclass
AddSubClass("fighter_ua23pt7", "battle master_ua23pt7", {
	regExpSearch : /^(?=.*(war|fighter|battle|martial))(?=.*master).*$/i,
	subname : "Battle Master",
	fullname : "Battle Master",
	source : [["UA23PT7", 12], ["P", 73], ["MJ:HB", 0]],
	features : {
		"subclassfeature3" : { //Ripped directly from "all_WotC_pub+UA.js"
			name : "Combat Superiority",
			source : [["P", 73]],
			minlevel : 3,
			description : "\n   " + "I gain a number of Superiority Dice that I can use to fuel special Maneuvers" + "\n   " + "I regain all Superiority Dice after a Short Rest",
			additional : ["", "", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12"],
			usages : [0, 0, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6],
			recovery : "short rest"
		},
		"subclassfeature3.1" : { //Ripped directly from "all_WotC_pub+UA.js" and then altered; Adding all TCE Maneuvers, not just the ones in UA23PT7
			name : "Maneuvers",
			source : [["UA23PT7", 12], ["P", 73], ["MJ:HB", 0]],
			minlevel : 3,
			description : "\n   " + 'Use the "Choose Feature" button above to add a Maneuver to the third page' + "\n   " + "I can use a Maneuver by expending a Superiority Die (only one Maneuver per attack)",
			additional : levels.map(function (n) {
				return n < 3 ? "" : (n < 7 ? 3 : n < 10 ? 5 : n < 15 ? 7 : 9) + " known";
			}),
			extraname : "Maneuver",
			extrachoices : ["Ambush", "Bait and Switch", "Brace", "Commander's Strike", "Commanding Presence", "Disarming Attack", "Distracting Strike", "Evasive Footwork", "Feinting Attack", "Goading Attack", "Grappling Strike", "Lunging Attack", "Maneuvering Attack", "Menacing Attack", "Parry", "Precision Attack", "Pushing Attack", "Quick Toss", "Rally", "Riposte", "Sweeping Attack", "Tactical Assessment", "Trip Attack"],
			extraTimes : levels.map(function (n) {
				return n < 3 ? 0 : n < 7 ? 3 : n < 10 ? 5 : n < 15 ? 7 : 9;
			}),
			"ambush" : {
				name : "Ambush",
				source : [["UA23PT7", 13], ["T", 42], ["UA:CFV", 5], ["MJ:HB", 0]],
				description : desc([
					"When I make an initiative roll or a Dex (Stealth) check, I can add a Superiority Die to it.",
					"I can't do this if I'm Incapacitated.",
				]),
			},
			"bait and switch" : {
				name : "Bait and Switch",
				source : [["UA23PT7", 13], ["T", 42], ["MJ:HB", 0]],
				description : desc([
					"On my turn, I can expend a Superiority Die to swap places with an ally within 5 ft.",
					"I can't do this if the ally is Incapacitated or unwilling to swap.",
					"Doing this costs me 5 ft of movement, but this doesn't provoke opportunity attacks.",
					"Me or my ally (my choice) can then add the Superiority Die to AC until my next turn starts.",
				]),
			},
			"brace" : {
				name : "Brace",
				source : [["T", 42], ["MJ:HB", 0]],
				description : desc([
					"As a Reaction when a creature I can see moves within my melee reach, I can attack it.",
					"I expend a Superiority Die and make one weapon attack, adding the die to the damage.",
				]),
				action : [["reaction", "Brace"]],
			},
			"commander's strike" : {
				name : "Commander's Strike",
				source : [["UA23PT7", 13], ["P", 74], ["MJ:HB", 0]],
				description : desc([
					"I forgo one attack of my Attack action to direct an ally I see/hear.",
					"The ally can use a Reaction to make an attack, adding the Superiority Die to damage.",
				]),
			},
			"commanding presence" : {
				name : "Commanding Presence",
				source : [["UA23PT7", 13], ["T", 42], ["MJ:HB", 0]],
				description : desc([
					"When I make a Performance, Intimidation, or Persuasion check, I can add a Superiority Die to it.",
				]),
			},
			"disarming attack" : {
				name : "Disarming Attack",
				source : [["UA23PT7", 13], ["P", 74], ["MJ:HB", 0]],
				description : desc([
					"Use after hitting a creature; I add the Superiority Die to my attack's damage.",
					"Target makes a Strength save or drops a held object of my choice to its feet.",
				]),
			},
			"distracting strike" : {
				name : "Distracting Strike",
				source : [["UA23PT7", 13], ["P", 74], ["MJ:HB", 0]],
				description : desc([
					"Use after hitting a creature; I add the Superiority Die to my attack's damage.",
					"The next attack of an ally before my next turn has Adv. against the creature.",
				]),
			},
			"evasive footwork" : {
				name : "Evasive Footwork",
				source : [["UA23PT7", 13], ["P", 74], ["MJ:HB", 0]],
				description : desc([
					"Use when moving at least 5 ft; I add the Superiority Die to my AC until the end of my turn.",
				]),
			},
			"feinting attack" : {
				name : "Feinting Attack",
				source : [["UA23PT7", 13], ["P", 74], ["MJ:HB", 0]],
				description : desc([
					"As a Bonus Action, I can feint to gain Adv. on my next attack this turn vs. a target in 5 ft.",
					"If I hit, add the Superiority Die to my attack's damage.",
				]),
				action : [["bonus action", ""]],
			},
			"goading attack" : {
				name : "Goading Attack",
				source : [["UA23PT7", 13], ["P", 74], ["MJ:HB", 0]],
				description : desc([
					"Use after hitting a creature; I add the Superiority Die to my attack's damage.",
					"Target makes a Wis save or has Disadv. vs. other targets until the end of my next turn.",
				]),
			},
			"grappling strike" : {
				name : "Grappling Strike",
				source : [["T", 42], ["MJ:HB", 0]],
				description : desc([ //The alterations made to bring this in line with the UA Grapple rules are of my own creation
					"Immediately after hitting with a melee attack, I can use a Bonus Action to try to Grapple Unarmed Strike.",
					"I subtract the Superiority Die from the target's Str or Dex save; I can only do this on my own turn.",
				]),
				action : [["bonus action", " (after melee hit)"]],
			},
			"lunging attack" : {
				name : "Lunging Attack",
				source : [["UA23PT7", 13], ["P", 74], ["MJ:HB", 0]],
				description : desc([
					"I can spend a Superiority Die to take the Dash action as a Bonus Action.",
					"If after moving at least 10 ft in a straight line immediately before hitting with a",
					"  melee attack as part of Attack action, I add the Superiority Die to my attack's damage.",
				]),
				action : [["bonus action", " (Dash)"]],
			},
			"maneuvering attack" : {
				name : "Maneuvering Attack",
				source : [["UA23PT7", 13], ["P", 74], ["MJ:HB", 0]],
				description : desc([
					"Use after hitting a creature; I add the Superiority Die to my attack's damage.",
					"Ally who can see/hear me can use Reaction to move half speed without opportunity attack from the target.",
				]),
			},
			"menacing attack" : {
				name : "Menacing Attack",
				source : [["UA23PT7", 13], ["P", 74], ["MJ:HB", 0]],
				description : desc([
					"Use after hitting a creature; I add the Superiority Die to my attack's damage.",
					"Target makes a Wisdom save or is Frightened of me until the end of my next turn.",
				]),
			},
			"parry" : {
				name : "Parry",
				source : [["UA23PT7", 13], ["P", 74], ["MJ:HB", 0]],
				description : desc([
					"When damaged in melee, I can use a Reaction to reduce damage taken by",
					"  Superiority Die + Str/Dex mod, my choice.",
				]),
				action : [["reaction", " (when damaged in melee)"]],
			},
			"precision attack" : {
				name : "Precision Attack",
				source : [["UA23PT7", 14], ["P", 74], ["MJ:HB", 0]],
				description : desc([
					"After missing with an attack roll, I add the Superiority Die to my attack roll,",
					"  potentially causing it to instead hit.",
				]),
			},
			"pushing attack" : {
				name : "Pushing Attack",
				source : [["UA23PT7", 14], ["P", 74], ["MJ:HB", 0]],
				description : desc([
					"Use after hitting a creature; I add the Superiority Die to my attack's damage.",
					"If target is Large or smaller, it must make a Strength save or be pushed up to 15 ft away.",
				]),
			},
			"quick toss" : {
				name : "Quick Toss",
				source : [["T", 42], ["MJ:HB", 0]],
				description : desc([
					"As a Bonus Action, I can use a Superiority Die to do a ranged attack with a thrown weapon.",
					"I can draw a thrown weapon as part of making this attack; I add the die to the damage.",
				]),
				action : [["bonus action", ""]],
			},
			"rally" : {
				name : "Rally",
				source : [["UA23PT7", 14], ["P", 74], ["MJ:HB", 0]],
				description : desc([
					"As a Bonus Action, ally that can see/hear me gets temporary HP equal to",
					"  Superiority Die + Int/Wis/Cha mod, my choice.",
				]),
				action : [["bonus action", ""]],
			},
			"riposte" : {
				name : "Riposte",
				source : [["UA23PT7", 14], ["P", 74], ["MJ:HB", 0]],
				description : desc([
					"When missed in melee, I can use my Reaction to make one melee attack vs. the attacker.",
					"If the attack hits, I add the Superiority Die to my attack's damage.",
				]),
				action : [["reaction", " (after missed in melee)"]],
			},
			"sweeping attack" : {
				name : "Sweeping Attack",
				source : [["UA23PT7", 14], ["P", 74], ["MJ:HB", 0]],
				description : desc([
					"Use after hitting a creature and a second creature is within 5 ft of the first.",
					"If the original attack roll hits this second creature, it takes the Superiority Die in damage.",
				]),
			},
			"tactical assessment" : {
				name : "Tactical Assessment",
				source : [["UA23PT7", 13], ["T", 42], ["MJ:HB", 0]],
				description : desc([
					"When I make an Investigation, History, or Insight check, I can add a Superiority Die to it.",
				]),
			},
			"trip attack" : {
				name : "Trip Attack",
				source : [["UA23PT7", 14], ["P", 74], ["MJ:HB", 0]],
				description : desc([
					"Use after hitting a creature; I add the Superiority Die to my attack's damage.",
					"If target is Large or smaller, it must make a Strength save or be knocked Prone.",
				]),
			},
		},
		"subclassfeature3.2" : { //Ripped directly from "all_WotC_pub+UA.js" and then altered
			name : "Student of War",
			source : [["UA23PT7", 12], ["P", 73], ["MJ:HB", 0]],
			minlevel : 3,
			description : "\n   " + "I have proficiency with one Artisan's Tool set \u0026 one Fighter skill of my choice",
			toolProfs : [["Artisan's tools", 1]],
			skillstxt : "Choose one from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Persuasion, Perception, and Survival",
		},
		"subclassfeature7" : {
			name : "Know Your Enemy",
			source : [["UA23PT7", 12], ["MJ:HB", 0]],
			minlevel : 7,
			description : desc([
				"As a Bonus Action, I can focus on a creature I can see within 30 ft.",
				"I know what damage immunities, resistances, and/or vulnerabilities, if it has any.",
				"I can do this once per Long Rest, or I can use a Superiority Die to restore a use as a Free Action.",
			]),
			action : [["bonus action", ""]],
			usages : 1,
			altResource : "1 Sup. Die",
			recovery : "long rest",
		},
		"subclassfeature10" : { //Ripped directly from "all_WotC_pub+UA.js"
			name : "Improved Combat Superiority",
			source : [["UA23PT7", 12], ["P", 74]],
			minlevel : 10,
			description : "\n   " + "My Superiority Dice turn into d10s at 10th level and into d12s at 18th level"
		},
		"subclassfeature15" : {
			name : "Relentless",
			source : [["UA23PT7", 12], ["MJ:HB", 0]],
			minlevel : 15,
			description : desc([
				"Once per turn, when I use a Maneuver, I can roll a d8 and use the number rolled instead",
				"of expending a use of Superiority Die.",
			]),
		},
	},
});

////// Add UA23PT7 Brawler Fighter subclass
AddSubClass("fighter_ua23pt7", "brawler_ua23pt7", {
	regExpSearch : /^(?=.*brawler).*$/i,
	subname : "Brawler",
	fullname : "Brawler",
	source : [["UA23PT7", 14], ["MJ:HB", 0]],
	features : {
		"subclassfeature3" : {
			name : "Unarmed Expert",
			source : [["UA23PT7", 14], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				"My Unarmed Strikes deal 1d6 damage, or 1d8 damage when I have both hands free.",
				"At Fighter Lvl 18, this damage increases to 1d8 dmg, or 1d10 dmg when both hands are free.",
			]),
			calcChanges : { //Ripped directly from Monk "ListsClasses.js" and then altered
				atkAdd : [
					function (fields, v) {
						if (classes.known.fighter_ua23pt7 && classes.known.fighter_ua23pt7.level && v.baseWeaponName == "unarmed strike") {
							var aBrawlerDie = function (n) { return n < 3 ? 1 : n < 18 ? 6 : 8; }(classes.known.fighter_ua23pt7.level);
							try {
								var curDie = eval_ish(fields.Damage_Die.replace('d', '*'));
							} catch (e) {
								var curDie = 'x';
							}
							if (isNaN(curDie) || curDie < aBrawlerDie) {
								fields.Damage_Die = '1d' + aBrawlerDie;
							}
							if (fields.Mod === 1 || fields.Mod === 2 || What(AbilityScores.abbreviations[fields.Mod - 1] + " Mod") < What(AbilityScores.abbreviations[v.StrDex - 1] + " Mod")) {
								fields.Mod = v.StrDex;
							}
							fields.Description += (fields.Description ? '; ' : '') + 'Versatile (d8 [Lvl 3])/(d10 [Lvl 18])';
						}
					},
					"My Unarmed Strikes deal 1d6 damage instead of 1, which increases to 1d8 if I have both hands free to make an Unarmed Strike with. At Fighter Lvl 18, the dmg increases to 1d8/1d10.",
					5
				],
			},
		},
		"subclassfeature3.1" : {
			name : "Improvised Expert",
			source : [["UA23PT7", 14], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				"After a Long Rest, I add either the Light or Thrown weapon property to my one-handed Improvised Weapons",
				"  \u0026 and either the Reach or Thrown weapon property to my two-handed Improvised Weapons.",
				"Additionally, when I attack with my one-handed Improvised Weapons, I can add either the Sap, Slow,",
				"  or Vex Weapon Mastery property for that attack. Likewise, when I attack with my two-handed Improvised",
				"  Weapons, I can add either the Cleave, Push, or Topple Weapon Mastery property for that attack.",
				'Use the "Choose Feature" button above to choose which property to add to each kind of Improvised Weapon.',
			]),
			weaponProfs : [false, false, ["Improvised weapons"]],
			additional : ["", "", "2d10 + 3 damage", "2d10 + 4 damage", "2d10 + 5 damage", "2d10 + 6 damage", "2d10 + 7 damage", "2d10 + 8 damage", "2d10 + 9 damage", "2d10 + 10 dmg", "2d10 + 11 dmg", "2d10 + 12 dmg", "2d10 + 13 dmg", "2d10 + 14 dmg", "2d10 + 15 dmg", "2d10 + 16 dmg", "2d10 + 17 dmg", "2d10 + 18 dmg", "2d10 + 19 dmg", "2d10 + 20 dmg"],
			action : ["action", ""],
		},
		"subclassfeature7" : {
			name : "Grappling Expert",
			source : [["UA23PT7", 14], ["MJ:HB", 0]],
			minlevel : 7,
			description : desc([
				"As a Bonus Action I can make one Unarmed Strike using the Grapple or Shove options.",
				"In addition, at the start of each of my turns, I can deal 1d6 Bldug. dmg to one creature",
				"  Grappled by me.",
			]),
			action : ["bonus action", "Unarmed Strike (Grapple/Shove)"],
		},
		"subclassfeature10" : {
			name : "Dirty Fighting",
			source : [["UA23PT7", 15], ["MJ:HB", 0]],
			minlevel : 10,
			description : desc([
				"I have Adv. on attacks made with Improvised Weapons \u0026 Unarmed Strikes against",
				"  a creature Grappled by me.",
			]),
		},
		"subclassfeature15" : {
			name : "Improvised Specialist",
			source : [["UA23PT7", 15], ["MJ:HB", 0]],
			minlevel : 15,
			description : desc([
				"I add my Proficiency Bonus to damage with Improvised Weapons. I can also use two Mastery",
				"  properties from Improvised Expert, instead of one.",
			]),
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (v.baseWeaponName == ("improvised weapon")) {
							output.extraDmg += What('Prof');
						}
						if( (/two-handed/i.test(fields.Description + v.WeaponName)) && (/improvised weapon/i.test(v.theWea.type) || (/improvised/i).test(v.WeaponName + v.baseWeaponName))) {
							output.die = 12;
						}
					},
					"My Improvised Weapons deal extra damage equal to my Proficiency Bonus & my Two-handed Improvised Weapons use a d12 damage die..",
					1
				],
			},
		},
	},
});
if (ClassSubList["fighter_ua23pt7-brawler_ua23pt7"]) {
	AddFeatureChoice(ClassSubList["fighter_ua23pt7-brawler_ua23pt7"].features["subclassfeature3.1"], true, "One-Handed 1: Light", {
		name : "One-Handed 1: Light",
		extraname : "Brawler Fighter 3",
		source : [["UA23PT7", 14], ["MJ:HB", 0]],
		description : "\n   " + "I have chosen to add the Light weapon property to my one-handed Improvised Weapons.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if ((/improvised/i).test(v.WeaponName + v.baseWeaponName) && (/improvised weapon/i).test(v.theWea.type)) {
						fields.Description += (fields.Description ? '; ' : '') + 'Light';
						fields.Range = 'Melee';
					}
				},
				"I have chosen to add the Light weapon property to my one-handed Improvised Weapons."
			]
		},
	}, "Improvised Expert choices");
	AddFeatureChoice(ClassSubList["fighter_ua23pt7-brawler_ua23pt7"].features["subclassfeature3.1"], true, "One-Handed 1: Thrown", {
		name : "One-Handed 1: Thrown",
		extraname : "Brawler Fighter 3",
		source : [["UA23PT7", 14], ["MJ:HB", 0]],
		description : "\n   " + "I have chosen to add the Thrown weapon property to my one-handed Improvised Weapons, with a range of 20 ft/60 ft.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if ((/improvised/i).test(v.WeaponName + v.baseWeaponName) && (/improvised weapon/i).test(v.theWea.type)) {
						fields.Description += (fields.Description ? '; ' : '') + 'Thrown';
						fields.Range = '20/60 ft';
					}
				},
				"I have chosen to add the Thrown weapon property to my one-handed Improvised Weapons, with a range of 20 ft/60 ft."
			]
		},
	}, "Improvised Expert choices");
	AddFeatureChoice(ClassSubList["fighter_ua23pt7-brawler_ua23pt7"].features["subclassfeature3.1"], true, "Two-Handed 1: Reach", {
		name : "Two-Handed 1: Reach",
		extraname : "Brawler Fighter 3",
		source : [["UA23PT7", 14], ["MJ:HB", 0]],
		description : "\n   " + "I have chosen to add the Reach weapon property to my two-handed Improvised Weapons.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if( (/two-handed/i.test(fields.Description + v.WeaponName)) && (/improvised weapon/i.test(v.theWea.type) || (/improvised/i).test(v.WeaponName + v.baseWeaponName))) {
						fields.Description += (fields.Description ? '; ' : '') + 'Reach';
					}
				},
				"I have chosen to add the Reach weapon property to my two-handed Improvised Weapons."
			]
		},
	}, "Improvised Expert choices");
	AddFeatureChoice(ClassSubList["fighter_ua23pt7-brawler_ua23pt7"].features["subclassfeature3.1"], true, "Two-Handed 1: Thrown", {
		name : "Two-Handed 1: Thrown",
		extraname : "Brawler Fighter 3",
		source : [["UA23PT7", 14], ["MJ:HB", 0]],
		description : "\n   " + "I have chosen to add the Thrown weapon property to my two-handed Improvised Weapons, with a range of 10 ft/30 ft.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if( (/two-handed/i.test(fields.Description + v.WeaponName)) && (/improvised weapon/i.test(v.theWea.type) || (/improvised/i).test(v.WeaponName + v.baseWeaponName))) {
						fields.Description += (fields.Description ? '; ' : '') + 'Thrown';
						fields.Range = '10/30 ft';
					}
				},
				"I have chosen to add the Thrown weapon property to my two-handed Improvised Weapons, with a range of 10 ft/30 ft."
			]
		},
	}, "Improvised Expert choices");
	AddFeatureChoice(ClassSubList["fighter_ua23pt7-brawler_ua23pt7"].features["subclassfeature3.1"], true, "One-Handed 2: Sap Mastery", {
		name : "One-Handed 2: Sap Mastery",
		extraname : "Brawler Fighter 3",
		source : [["UA23PT7", 14], ["MJ:HB", 0]],
		description : "\n   " + "I have chosen to add the Sap Mastery property to my one-handed Improvised Weapons.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if ((/improvised/i).test(v.WeaponName + v.baseWeaponName) && (/improvised weapon/i).test(v.theWea.type)) {
						fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Sap';
					}
				},
				"I have chosen to add the Sap Mastery property to my one-handed Improvised Weapons."
			]
		},
	}, "Improvised Expert choices");
	AddFeatureChoice(ClassSubList["fighter_ua23pt7-brawler_ua23pt7"].features["subclassfeature3.1"], true, "One-Handed 2: Slow Mastery", {
		name : "One-Handed 2: Slow Mastery",
		extraname : "Brawler Fighter 3",
		source : [["UA23PT7", 14], ["MJ:HB", 0]],
		description : "\n   " + "I have chosen to add the Slow Mastery property to my one-handed Improvised Weapons.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if ((/improvised/i).test(v.WeaponName + v.baseWeaponName) && (/improvised weapon/i).test(v.theWea.type)) {
						fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Slow';
					}
				},
				"I have chosen to add the Slow Mastery property to my one-handed Improvised Weapons."
			]
		},
	}, "Improvised Expert choices");
	AddFeatureChoice(ClassSubList["fighter_ua23pt7-brawler_ua23pt7"].features["subclassfeature3.1"], true, "One-Handed 2: Vex Mastery", {
		name : "One-Handed 2: Vex Mastery",
		extraname : "Brawler Fighter 3",
		source : [["UA23PT7", 14], ["MJ:HB", 0]],
		description : "\n   " + "I have chosen to add the Vex Mastery property to my one-handed Improvised Weapons.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if ((/improvised/i).test(v.WeaponName + v.baseWeaponName) && (/improvised weapon/i).test(v.theWea.type)) {
						fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Vex';
					}
				},
				"I have chosen to add the Vex Mastery property to my one-handed Improvised Weapons."
			]
		},
	}, "Improvised Expert choices");
	AddFeatureChoice(ClassSubList["fighter_ua23pt7-brawler_ua23pt7"].features["subclassfeature3.1"], true, "Two-Handed 2: Cleave Mastery", {
		name : "Two-Handed 2: Cleave Mastery",
		extraname : "Brawler Fighter 3",
		source : [["UA23PT7", 14], ["MJ:HB", 0]],
		description : "\n   " + "I have chosen to add the Cleave Mastery property to my two-handed Improvised Weapons.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if( (/two-handed/i.test(fields.Description + v.WeaponName)) && (/improvised weapon/i.test(v.theWea.type) || (/improvised/i).test(v.WeaponName + v.baseWeaponName))) {
						fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Cleave';
					}
				},
				"I have chosen to add the Cleave Mastery property to my two-handed Improvised Weapons."
			]
		},
	}, "Improvised Expert choices");
	AddFeatureChoice(ClassSubList["fighter_ua23pt7-brawler_ua23pt7"].features["subclassfeature3.1"], true, "Two-Handed 2: Push Mastery", {
		name : "Two-Handed 2: Push Mastery",
		extraname : "Brawler Fighter 3",
		source : [["UA23PT7", 14], ["MJ:HB", 0]],
		description : "\n   " + "I have chosen to add the Push Mastery property to my two-handed Improvised Weapons.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if( (/two-handed/i.test(fields.Description + v.WeaponName)) && (/improvised weapon/i.test(v.theWea.type) || (/improvised/i).test(v.WeaponName + v.baseWeaponName))) {
						fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Push';
					}
				},
				"I have chosen to add the Push Mastery property to my two-handed Improvised Weapons."
			]
		},
	}, "Improvised Expert choices");
	AddFeatureChoice(ClassSubList["fighter_ua23pt7-brawler_ua23pt7"].features["subclassfeature3.1"], true, "Two-Handed 2: Topple Mastery", {
		name : "Two-Handed 2: Topple Mastery",
		extraname : "Brawler Fighter 3",
		source : [["UA23PT7", 14], ["MJ:HB", 0]],
		description : "\n   " + "I have chosen to add the Topple Mastery property to my two-handed Improvised Weapons.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if( (/two-handed/i.test(fields.Description + v.WeaponName)) && (/improvised weapon/i.test(v.theWea.type) || (/improvised/i).test(v.WeaponName + v.baseWeaponName))) {
						fields.Description += (fields.Description ? '; ' : '') + 'Mstry: Topple';
					}
				},
				"I have chosen to add the Topple Mastery property to my two-handed Improvised Weapons."
			]
		},
	}, "Improvised Expert choices");
};

////// Add UA23PT7 Champion Fighter subclass
AddSubClass("fighter_ua23pt7", "champion_ua23pt7", {
	regExpSearch : /champion/i,
	subname : "Champion",
	fullname : "Champion",
	source : [["UA23PT7", 15], ["SRD", 25], ["P", 72], ["MJ:HB", 0]],
	features : {
		"subclassfeature3" : { //Ripped directly from "ListsClasses.js"
			name : "Improved Critical",
			source : [["SRD", 25], ["P", 72]],
			minlevel : 3,
			description : desc("I score a critical hit with my weapon attacks on a roll of 19 and 20."),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (!v.isSpell && !v.CritChance && classes.known.fighter_ua23pt7 && classes.known.fighter_ua23pt7.level < 15) {
							fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20';
							v.CritChance = 19;
						}
					},
					"My weapon attacks score a critical on a to hit roll of both 19 and 20.",
					19
				]
			}
		},
		"subclassfeature3.1" : { //Ripped directly from "ListsClasses.js" and then altered
			name : "Remarkable Athlete",
			source : [["UA23PT7", 15], ["SRD", 25], ["P", 72], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				"I have Adv. on Initiative rolls \u0026 Strength (Athletics) checks.",
				"When making running long jumps, I add my Strength modifier to the distance in feet.",
				"If using metric units, instead add Strength modifier * 0.3 to distance in meters.",
			]),
		},
		"subclassfeature7" : { //Though I list SRD & PHB sources for this, none of this code comes from the version of this in "ListsClasses.js"; It is actually copied from the Fighting Style feature above in the base class.
			name : "Additional Fighting Style",
			source : [["UA23PT7", 15], ["SRD", 25], ["P", 73], ["MJ:HB", 0]],
			minlevel : 7,
			description : desc([
				"Choose another Fighting Style feat for the Fighter using the \"Choose Feature\" button above.",
				"The chosen option will appear in pg 3's Notes section & in the list of feats.",
			]),
		},
		"subclassfeature10" : {
			name : "Heroic Warrior",
			source : [["UA23PT7", 15], ["MJ:HB", 0]],
			minlevel : 10,
			description : desc([
				"During combat, I can give myself Heroic Advantage (previously known as \"Inspiration\")",
				"  whenever I start my turn without it.",
			]),
		},
		"subclassfeature15" : { //Ripped directly from "ListsClasses.js"
			name : "Superior Critical",
			source : [["SRD", 25], ["P", 73]],
			minlevel : 15,
			description : desc("I score a critical hit with my weapon attacks on a roll of 18, 19, and 20."),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.isSpell) return;
						if (v.CritChance && v.CritChance > 18) {
							fields.Description = fields.Description.replace('Crit on ' + CritChance + '-20', 'Crit on 18-20');
							v.CritChance = 18;
						} else if (!v.CritChance) {
							fields.Description += (fields.Description ? '; ' : '') + 'Crit on 18-20';
							v.CritChance = 18;
						}
					},
					"My weapon attacks also score a critical on a to hit roll of 18.",
					18
				]
			}
		},
		"subclassfeature18" : { //Ripped directly from "ListsClasses.js" and then altered
			name : "Survivor",
			source : [["UA23PT7", 15], ["SRD", 25], ["P", 73], ["MJ:HB", 0]],
			minlevel : 18,
			description : desc([
				"I have Adv. on death saving throws, and rolling 18-20 on such saves is equivalent to rolling a 20.",
				"At the start of my turn, if I'm not above half or at 0 HP, I regain 5 + Con mod HP.",
			]),
		},
	},
});

////// Add UA23PT6 Eldritch Knight Fighter subclass
AddSubClass("fighter_ua23pt7", "eldritch knight_ua23pt7", { //Ripped directly from "all_WotC_pub+UA.js" and then altered
	regExpSearch : /^(?!.*(exalted|sacred|holy|divine|nature|natural|purple.*dragon|green|arcane archer))(?=.*(knight|fighter|warrior|militant|warlord|gladiator|trooper))(?=.*\b(eldritch|arcane|magic|mage)\b).*$/i,
	subname : "Eldritch Knight",
	fullname : "Eldritch Knight",
	source : [["UA23PT7", 16], ["P", 75], ["MJ:HB", 0]],
	abilitySave : 4,
	spellcastingFactor : 3,
	spellcastingList : {
		"class" : ["wizard", "wizard_ua23pt7"],
		level : [0, 4],
	},
	spellcastingTable : [
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 0
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 3
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 4
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 5
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 6
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 7
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 8
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 9
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl10
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl11
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl12
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl13
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl14
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl15
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl16
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl17
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl18
		[4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl19
		[4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl20
	],
	spellcastingKnown : {
		cantrips : [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		spells : "list",
		prepared : true,
	},
	features : {
		"subclassfeature3" : {
			name : "Spellcasting",
			source : [["UA23PT7", 16], ["P", 75], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				"I can cast known/prepared Wizard cantrips/spells, using Intelligence as my spellcasting ability.",
				"Two of the spells I prepare must be from the Abjuration or Evocation schools of magic.",
				"When I gain a Fighter Lvl, I can swap one known cantrip for another on the Wizard spell list.",
			]),
			additional : ["", "", "2 cantrips \u0026 3 spells prepared", "2 cantrips \u0026 4 spells prepared", "2 cantrips \u0026 4 spells prepared", "2 cantrips \u0026 4 spells prepared", "2 cantrips \u0026 5 spells prepared", "2 cantrips \u0026 6 spells prepared", "2 cantrips \u0026 6 spells prepared", "3 cantrips \u0026 7 spells prepared", "3 cantrips \u0026 8 spells prepared", "3 cantrips \u0026 8 spells prepared", "3 cantrips \u0026 9 spells prepared", "3 cantrips \u0026 10 spells prepared", "3 cantrips \u0026 10 spells prepared", "3 cantrips \u0026 11 spells prepared", "3 cantrips \u0026 11 spells prepared", "3 cantrips \u0026 11 spells prepared", "3 cantrips \u0026 12 spells prepared", "3 cantrips \u0026 13 spells prepared"],
		},
		"subclassfeature3.1" : {
			name : "War Bond",
			source : [["UA23PT7", 16], ["P", 75], ["MJ:HB", 0]],
			minlevel : 3,
			description : "\n   " + "I can bond with up to two weapons by spending a Short Rest (1 hr) with each." + "\n   " + "I can't be disarmed of a bonded weapon unless I am Incapacitated \u0026 I can summon one as a Bonus Action.",
			action : ["bonus action", ""],
		},
		"subclassfeature7" : {
			name : "War Magic",
			source : [["UA23PT7", 16], ["P", 75], ["MJ:HB", 0]],
			minlevel : 7,
			description : desc([
				"When I take the Attack action on my turn, I can replace one of the attacks with one of my",
				"  Wizard cantrips that has a casting time of an action.",
			]),
		},
		"subclassfeature10" : {
			name : "Eldritch Strike",
			source : [["UA23PT7", 16], ["P", 75], ["MJ:HB", 0]],
			minlevel : 10,
			description : "\n   " + "A creature hit by my weapon attack has Disadv. on the save vs. the next spell I cast." + "\n   " + "This lasts until the end of my next turn.",
		},
		"subclassfeature15" : {
			name : "Arcane Charge",
			source : [["UA23PT7", 16], ["P", 75], ["MJ:HB", 0]],
			minlevel : 15,
			description : "\n   " + "When I use Action Surge, I can also teleport up to 30 ft to an empty space I can see." + "\n   " + "I can do so before or after the extra action.",
		},
		"subclassfeature18" : {
			name : "Improved War Magic",
			source : [["UA23PT7", 16], ["P", 75], ["MJ:HB", 0]],
			minlevel : 18,
			description : desc([
				"When I take the Attack action on my turn, I can replace two of the attacks with one of my",
				"  Wizard cantrips that has a casting time of an action, one cantrip per attack replaced.",
			]),
		},
	},
});

// Add UA23PT7 Sorcerer class
ClassList.sorcerer_ua23pt7 = {
	name : "Sorcerer (UA:PT-vii)",
	regExpSearch : /sorcerer/i,
	source : [["UA23PT7", 18], ["MJ:HB", 0]],
	primaryAbility : "Charisma",
	prerequisite : "Charisma 13+",
	prereqeval : function(v) {
		return What('Cha') >= 13;
	},
	die : 6,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Con", "Cha"],
	skills : ["\n\n" + toUni("Sorcerer") + ": Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, Religion", ""],
	weapons : [
		[true, false, [""]],
		[false, false, [""]],
	],
	equipment : "Sorcerer starting equipment:" +
		"\n \u2022 Arcane Focus (Crystal)," +
		"\n \u2022 Dagger (2)," +
		"\n \u2022 Dungeoneer's Pack," +
		"\n \u2022 Spear," +
		"\n \u2022 and 28 gp;" +
		"\n\nAlternatively, choose 50 gp worth of starting equipment instead of the class' starting equipment.",
	subclasses : ["Sorcerous Origin", []],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	abilitySave : 6,
	spellcastingFactor : 1,
	spellcastingKnown : {
		cantrips : [4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		spells : "list",
		prepared : true,
	},
	spellcastingList : {
		class : ["sorcerer", "sorcerer_ua23pt7"],
	},
	features : {
		"innate sorcery ua23pt7" : {
			name : "Innate Sorcery",
			source : [["UA23PT7", 19], ["MJ:HB", 0]],
			minlevel : 1,
			description : desc([
				"As a Bonus Action, I gaining the following benefits for 1 min:",
				" \u2022 The spell save DC of my Sorcerer spells increase by 1.",
				" \u2022 I have Adv. on attack rolls of Sorcerer spells I cast.",
				"I can use this feature twice, regaining all expended uses after a Long Rest.",
			]),
			usages : 2,
			recovery : "long rest",
			action : [
				["bonus action", ""],
			],
		},
		"spellcasting ua23pt7" : { //Ripped directly from "ListsClasses.js" and then altered
			name : "Spellcasting",
			source : [["UA23PT7", 20], ["SRD", 43], ["P", 101], ["MJ:HB", 0]],
			minlevel : 1,
			description : desc([
				"I can cast Sorcerer cantrips/spells that I know/prepare, using Charisma as my spellcasting ability.",
				"I can use an arcane focus as a spellcasting focus for my sorcerer spells."
			]),
			additional : levels.map(function (n, idx) {
				var cantr = [4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6][idx];
				var splls = [2, 4, 6, 7, 9, 10, 11, 12, 14, 15, 16, 16, 17, 17, 18, 18, 19, 20, 21, 22][idx];
				return cantr + " cantrips \u0026 " + splls + " spells prepared";
			}),
		},
		"font of magic ua23pt7" : { //Ripped directly from "ListsClasses.js" and then altered
			name : "Font of Magic",
			source : [["UA23PT7", 20], ["SRD", 43], ["P", 101], ["MJ:HB", 0]],
			minlevel : 2,
			description : desc([
				"As a Bonus Action, I can use Sorcery Points to create spell slots and vice versa.",
				"I can convert spell slots to Sorcery Points at a rate of 1 point per spell slot level.",
				"I can convert Sorcery Points to spell slots, which last until I finish a Long Rest, as follows:",
				"Level 1 for 2 Sorcery Points;   level 2 for 3 Sorcery Points;   level 3 for 5 Sorcery Points;",
				"Level 4 for 6 Sorcery Points;   level 5 for 7 Sorcery Points",
			]),
			usages : [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			recovery : "long rest",
			action : ["bonus action", "Font of Magic"],
			additional : "Sorcery Points",
			limfeaname : "Sorcery Points",
		},
		"subclassfeature3" : { //Ripped directly from "ListsClasses.js" and then altered
			name : "Sorcerous Origin",
			source : [["UA23PT7", 21], ["SRD", 43], ["P", 101], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc('Choose the Sorcerous Origin for your innate powers and put it in the "Class" field ')
		},
		"metamagic ua23pt7" : { //Ripped directly from "ListsClasses.js" and then altered
			name : "Metamagic",
			source : [["UA23PT7", 21], ["SRD", 44], ["P", 101], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				'Use the "Choose Feature" button above to add a Metamagic option to the third page.',
				"I can use only 1 Metamagic option on a spell unless otherwise written."
			]),
			additional : levels.map(function (n) {
				return n < 3 ? "" : (n < 10 ? 2 : n < 17 ? 4 : 6) + " known";
			}),
			extraname : "Metamagic Option",
			extrachoices : ["Careful Spell", "Distant Spell", "Empowered Spell", "Extended Spell", "Heightened Spell", "Quickened Spell", "Seeking Spell", "Subtle Spell", "Transmuted Spell", "Twinned Spell"],
			extraTimes : levels.map(function (n) {
				return n < 3 ? 0 : n < 10 ? 2 : n < 17 ? 4 : 6;
			}),
			"careful spell" : {
				name : "Careful Spell",
				source : [["UA23PT7", 21], ["SRD", 44], ["P", 102], ["MJ:HB", 0]],
				description : " [1 Sorcery Point]" + desc([
					"If the spell allows a saving throw, I can protect Cha modifier number of creatures.",
					"The selected creatures automatically succeed on their saving throws vs. the spell.",
					"The selected creatures take no damage if they would normally take half damage on a successful save.",
				]),
			},
			"distant spell" : {
				name : "Distant Spell",
				source : [["UA23PT7", 21], ["SRD", 44], ["P", 102], ["MJ:HB", 0]],
				description : " [1 Sorcery Point]" + desc("I double the range of the spell or make the range 30 ft if the range was touch."),
			},
			"empowered spell" : {
				name : "Empowered Spell",
				source : [["UA23PT7", 21], ["SRD", 44], ["P", 102], ["MJ:HB", 0]],
				description : " [1 Sorcery Point]" + desc([
					"If the spell uses damage dice, I can reroll my Charisma modifier number of damage dice.",
					"I can Empower a spell even if I use another Metamagic option on it.",
				]),
			},
			"extended spell" : {
				name : "Extended Spell",
				source : [["UA23PT7", 22], ["SRD", 44], ["P", 102], ["MJ:HB", 0]],
				description : " [1 Sorcery Point]" + desc([
					"If the spell has a duration of at least 1 min, I can double it, up to 24 hours.",
					"If the spell requires Concentration, I have Adv. on Concentration checks.",
				]),
			},
			"heightened spell" : {
				name : "Heightened Spell",
				source : [["UA23PT7", 22], ["SRD", 44], ["P", 102], ["MJ:HB", 0]],
				description : " [2 Sorcery Points]" + desc("If the spell allows a saving throw, I can have one target get Disadv. on their saves."),
			},
			"quickened spell" : {
				name : "Quickened Spell",
				source : [["UA23PT7", 22], ["SRD", 44], ["P", 102], ["MJ:HB", 0]],
				description : " [2 Sorcery Points]" + desc([
					"If the spell has a casting time of 1 action, I can cast it as a Bonus Action.",
					"I can't do this if I've already cast a spell of lvl 1 or higher, nor can I cast",
					"  a spell of lvl 1 or higher after modifying a spell in this manner.",
				]),
				action : ["bonus action", ""],
			},
			"seeking spell" : { //Ripped directly from "all_WotC_pub+UA.js" and then altered
				name : "Seeking Spell",
				source : [["UA23PT7", 22], ["T", 66], ["MJ:HB", 0]],
				description : " [1 Sorcery Point]" + desc([
					"If I miss an attack roll for a spell, I can reroll the d20 and must use the new roll",
					"I can do this even if I already used another Metamagic option during the casting of the spell",
				]),
			},
			"subtle spell" : {
				name : "Subtle Spell",
				source : [["UA23PT7", 22], ["SRD", 44], ["P", 102], ["MJ:HB", 0]],
				description : " [1 Sorcery Point]" + desc([
					"I can cast the spell without the need to use Somatic, Verbal, or Material components,",
					"  except Material components that are consumed by the spell or that have a specified cost.",
				]),
			},
			"transmuted spell" : { //Ripped directly from "all_WotC_pub+UA.js" and then altered
				name : "Transmuted Spell",
				source : [["UA23PT7", 22], ["T", 66], ["MJ:HB", 0]],
				description : " [1 Sorcery Point]" + desc([
					"If the spell deals one of the below damage types, I can change it to another on the list",
					"These damage types are: Acid, Cold, Fire, Lightning, Poison, or Thunder",
				]),
			},
			"twinned spell" : {
				name : "Twinned Spell",
				source : [["UA23PT7", 22], ["SRD", 44], ["P", 102], ["MJ:HB", 0]],
				description : " [1 Sorcery Point]" + desc([
					"If the spell can target an additional creature by upcasting it, I can increase the",
					"  spell's effective level by 1.",
				]),
			},
		},
		"sorcerous restoration ua23pt7" : {
			name : "Sorcerous Restoration",
			source : [["UA23PT7", 22], ["SRD", 44], ["P", 102], ["MJ:HB", 0]],
			minlevel : 5,
			description : desc([
				"If I roll Initiative or finish a Short Rest with 0 remaining Sorcery Points, I regain a number",
				"  of Sorcery Points equal to my Sorcerer Lvl divided by 5 (round down).",
			]),
		},
		"sorcery incarnate ua23pt7" : {
			name : "Sorcery Incarnate",
			source : [["UA23PT7", 22], ["MJ:HB", 0]],
			minlevel : 7,
			description : desc([
				"While my Innate Sorcery feature is active, I can use up to two of my Metamagic options on each",
				"  spell I cast. Additionally, If I have no more available uses of Innate Sorcery, I can expend",
				"  2 Sorcery Points instead to activate Innate Sorcery.",
			]),
		},
		"arcane apotheosis ua23pt7" : {
			name : "Arcane Aposteosis",
			source : [["UA23PT7", 22], ["MJ:HB", 0]],
			minlevel : 20,
			description : desc([
				"While my Innate Sorcery feature is active, I can use one Metamagic option on each of my turns without",
				"  expending Sorcery Points on it.",
			]),
		},
	},
};

//// Add Sorcerer optional choices; Ripped directly from "all_WotC_pub+UA.js" and then altered
AddFeatureChoice(ClassList.sorcerer_ua23pt7.features["spellcasting ua23pt7"], true, "Access to Dunamancy Spells", {
	name : "Dunamancy Spells",
	extraname : "Optional Sorcerer 1",
	source : [["W", 186]],
	description : desc([
		"All dunamancy spells are added to the sorcerer spell list, each still pending DM's approval"
	]),
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "sorcerer_ua23pt7" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["sapping sting", "gift of alacrity", "magnify gravity", "fortune's favor", "immovable object", "wristpocket", "pulse wave", "gravity sinkhole", "temporal shunt", "gravity fissure", "tether essence", "dark star", "reality break", "ravenous void", "time ravage"]);
			},
			"This optional class feature expands the spell list of the sorcerer class with all dunamancy spells (spell level in brackets): Sapping Sting (cantrip), Gift of Alacrity (1), Magnify Gravity (1), Fortune's Favor (2), Immovable Object (2), Wristpocket (2), Pulse Wave (3), Gravity Sinkhole (4), Temporal Shunt (5), Gravity Fissure (6), Tether Essence (7), Dark Star (8), Reality Break (8),Ravenous Void (9), and Time Ravage (9)."
		]
	}
}, "Optional sorcerer features");
AddFeatureChoice(ClassList.sorcerer_ua23pt7.features["spellcasting ua23pt7"], true, "Additional Sorcerer Spells", {
	name : "Additional Sorcerer Spells",
	extraname : "Optional Sorcerer 1",
	source : [["T", 65]],
	description : "",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "sorcerer_ua23pt7" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["grease", "flame blade", "flaming sphere", "magic weapon", "vampiric touch", "fire shield", "bigby's hand", "flesh to stone", "otiluke's freezing sphere", "demiplane"]);
			},
			"This optional class feature expands the spell list of the sorcerer class with the following spells (spell level in brackets): Grease (1), Flame Blade (2), Flaming Sphere (2), Magic Weapon (2), Vampiric Touch (3), Fire Shield (4), Bigby's Hand (5), Flesh to Stone (6), Otiluke's Freezing Sphere (6), and Demiplane (8)."
		]
	}
}, "Optional sorcerer features");
AddFeatureChoice(ClassList.sorcerer_ua23pt7.features["spellcasting ua23pt7"], true, "Sorcerous Versatility (prereq: level 4 sorcerer)", {
	name : "Sorcerous Versatility",
	extraname : "Optional Sorcerer 4",
	source : [["T", 66]],
	description : " [ASI = Ability Score Improvement]" + desc([
		"Whenever I gain an ASI from the sorcerer class, I can change a cantrip or Metamagic choice",
		"I can select either another cantrip from the sorcerer spell list or another Metamagic option"
	]),
	prereqeval : function (v) { return classes.known.sorcerer_ua23pt7.level >= 4 ? true : "skip"; }
}, "Optional sorcerer features");
AddFeatureChoice(ClassList.sorcerer_ua23pt7.features["spellcasting ua23pt7"], true, "Magical Guidance (prereq: level 5 sorcerer)", {
	name : "Magical Guidance",
	extraname : "Optional Sorcerer 5",
	source : [["T", 66]],
	description : " [1 Sorcery Point]\n   When I make an ability check that fails, I can reroll the d20 and must use the new roll",
	prereqeval : function (v) { return classes.known.sorcerer_ua23pt7.level >= 5 ? true : "skip"; }
}, "Optional sorcerer features");
AddFeatureChoice(ClassList.sorcerer_ua23pt7.features["font of magic ua23pt7"], true, "Imbuing Touch (UA:CFV)", {
	name : "Imbuing Touch",
	extraname : "Optional Sorcerer 2",
	source : [["UA:CFV", 10]],
	description : " [2 Sorcery Points]\n   As an action, I can touch a nonmagical weapon and make it count as magical for 1 minute",
	action : [["action", " (2 Sorcery Points)"]]
}, "Optional 2nd-level sorcerer features");
AddFeatureChoice(ClassList.sorcerer_ua23pt7.features["font of magic ua23pt7"], true, "Sorcerous Fortitude (UA:CFV)", {
	name : "Sorcerous Fortitude",
	extraname : "Optional Sorcerer 2",
	source : [["UA:CFV", 10]],
	description : " [1+ Sorcery Points]\n   As an action, I can gain 1d4 temporary hit points per Sorcery Point I spend",
	action : [["action", " (1+ Sorcery Points)"]]
}, "Optional 2nd-level sorcerer features");

////// Add UA23PT7 Draconic Sorcerer subclass
AddSubClass("sorcerer_ua23pt7", "draconic bloodline", {
	regExpSearch : /^(?=.*(sorcerer))(?=.*(draconic|dragon)).*$/i,
	subname : "Draconic Bloodline",
	source : [["UA23PT7", 22], ["SRD", 44], ["P", 102], ["MJ:HB", 0]],
	features : {
		"subclassfeature3" : { //Ripped directly from "ListsClasses.js" and then altered
			name : "Draconic Resilience",
			source : [["UA23PT7", 22], ["SRD", 45], ["P", 102], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				"When I am not wearing armor, my AC is 10 + Dexterity modifier + Charisma modifier.",
				"My hit point maximum increases by 3 + an amount equal to my Sorcerer level."
			]),
			calcChanges : {
				hp : function (totalHD) {
					if (classes.known.sorcerer_ua23pt7) {
						return [3 + classes.known.sorcerer_ua23pt7.level, "Draconic Resilience (sorcerer level)"];
					}
				}
			},
			armorOptions : [{
				regExpSearch : /^(?=.*(dragon|draconic))(?=.*(hide|skin|scales|resilience)).*$/i,
				name : "Draconic Resilience",
				source : [["UA23PT7", 22], ["SRD", 45], ["P", 102], ["MJ:HB", 0]],
				ac : "10+Cha",
				affectsWildShape : true
			}],
			armorAdd : "Draconic Resilience"
		},
		"subclassfeature3.1" : { //Ripped directly from "ListsClasses.js" and then altered
			name : "Dragon Ancestor / Dragon Speech",
			source : [["UA23PT7", 23], ["SRD", 44], ["P", 102], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				'Choose a Dragon Ancestor using the "Choose Feature" button above.',
				"I can speak, read, \u0026 write Draconic, and can be understood by all creatures of the Dragon type.",
			]),
			choices : ["Black Dragon Ancestor", "Blue Dragon Ancestor", "Brass Dragon Ancestor", "Bronze Dragon Ancestor", "Copper Dragon Ancestor", "Gold Dragon Ancestor", "Green Dragon Ancestor", "Red Dragon Ancestor", "Silver Dragon Ancestor", "White Dragon Ancestor"],
			"black dragon ancestor" : {
				name : "Black Dragon Ancestor",
				description : desc([
					"I have draconic ancestry with black dragons, which are affiliated with acid damage.",
					"I can speak, read, \u0026 write Draconic, and can be understood by all creatures of the Dragon type.",
				]),
				dependentChoices : "acid"
			},
			"blue dragon ancestor" : {
				name : "Blue Dragon Ancestor",
				description : desc([
					"I have draconic ancestry with blue dragons, which are affiliated with lightning damage.",
					"I can speak, read, \u0026 write Draconic, and can be understood by all creatures of the Dragon type.",
				]),
				dependentChoices : "lightning"
			},
			"brass dragon ancestor" : {
				name : "Brass Dragon Ancestor",
				description : desc([
					"I have draconic ancestry with brass dragons, which are affiliated with fire damage.",
					"I can speak, read, \u0026 write Draconic, and can be understood by all creatures of the Dragon type.",
				]),
				dependentChoices : "fire"
			},
			"bronze dragon ancestor" : {
				name : "Bronze Dragon Ancestor",
				description : desc([
					"I have draconic ancestry with bronze dragons, which are affiliated with lightning dmg.",
					"I can speak, read, \u0026 write Draconic, and can be understood by all creatures of the Dragon type.",
				]),
				dependentChoices : "lightning"
			},
			"copper dragon ancestor" : {
				name : "Copper Dragon Ancestor",
				description : desc([
					"I have draconic ancestry with copper dragons, which are affiliated with acid damage.",
					"I can speak, read, \u0026 write Draconic, and can be understood by all creatures of the Dragon type.",
				]),
				dependentChoices : "acid"
			},
			"gold dragon ancestor" : {
				name : "Gold Dragon Ancestor",
				description : desc([
					"I have draconic ancestry with gold dragons, which are affiliated with fire damage.",
					"I can speak, read, \u0026 write Draconic, and can be understood by all creatures of the Dragon type.",
				]),
				dependentChoices : "fire"
			},
			"green dragon ancestor" : {
				name : "Green Dragon Ancestor",
				description : desc([
					"I have draconic ancestry with green dragons, which are affiliated with poison damage.",
					"I can speak, read, \u0026 write Draconic, and can be understood by all creatures of the Dragon type.",
				]),
				dependentChoices : "poison"
			},
			"red dragon ancestor" : {
				name : "Red Dragon Ancestor",
				description : desc([
					"I have draconic ancestry with red dragons, which are affiliated with fire damage.",
					"I can speak, read, \u0026 write Draconic, and can be understood by all creatures of the Dragon type.",
				]),
				dependentChoices : "fire"
			},
			"silver dragon ancestor" : {
				name : "Silver Dragon Ancestor",
				description : desc([
					"I have draconic ancestry with silver dragons, which are affiliated with cold damage.",
					"I can speak, read, \u0026 write Draconic, and can be understood by all creatures of the Dragon type.",
				]),
				dependentChoices : "cold"
			},
			"white dragon ancestor" : {
				name : "White Dragon Ancestor",
				description : desc([
					"I have draconic ancestry with white dragons, which are affiliated with cold damage.",
					"I can speak, read, \u0026 write Draconic, and can be understood by all creatures of the Dragon type.",
				]),
				dependentChoices : "cold"
			},
			languageProfs : ["Draconic"],
			choiceDependencies : [{
				feature : "subclassfeature6",
				choiceAttribute : true
			}],
		},
		"subclassfeature6" : { //Ripped directly from "ListsClasses.js" and then altered
			name : "Elemental Affinity",
			source : [["UA23PT7", 23], ["SRD", 45], ["P", 102], ["MJ:HB", 0]],
			minlevel : 6,
			description : desc([
				'Choose a Dragon Ancestor using the "Choose Feature" button above.',
				"I add Cha mod for spell damage if matching my dragon ancestor's affiliated type.",
				"I also gain permanent Resistance to my dragon ancestor's affiliated type."
			]),
			choices : ["acid", "cold", "fire", "lightning", "poison"],
			choicesNotInMenu : true,
			"acid" : {
				name : "Acid Elemental Affinity",
				description : desc([
					"I add my Charisma modifier to one damage roll of a spell if it does acid damage.",
					"I also gain permanent Acid Resistance.",
				]),
				dmgres : ["Acid"],
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (classes.known.sorcerer_ua23pt7 && classes.known.sorcerer_ua23pt7.level > 5 && v.isSpell && (/acid/i).test(fields.Damage_Type)) {
								output.extraDmg += What('Cha Mod');
							}
						},
						"Cantrips and spells that deal acid damage get my Charisma modifier added to their damage."
					],
					spellAdd : [
						function (spellKey, spellObj, spName) {
							if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "acid", "Cha", true);
						},
						"Cantrips and spells that deal acid damage get my Charisma modifier added to their damage."
					]
				}
			},
			"cold" : {
				name : "Cold Elemental Affinity",
				description : desc([
					"I add my Charisma modifier to one damage roll of a spell if it does cold damage",
					"I also gain permanent Cold Resistance.",
				]),
				dmgres : ["Cold"],
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (classes.known.sorcerer_ua23pt7 && classes.known.sorcerer_ua23pt7.level > 5 && v.isSpell && (/cold/i).test(fields.Damage_Type)) {
								output.extraDmg += What('Cha Mod');
							}
						},
						"Cantrips and spells that deal cold damage get my Charisma modifier added to their damage."
					],
					spellAdd : [
						function (spellKey, spellObj, spName) {
							if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "cold", "Cha", true);
						},
						"Cantrips and spells that deal cold damage get my Charisma modifier added to their damage."
					]
				}
			},
			"fire" : {
				name : "Fire Elemental Affinity",
				description : desc([
					"I add my Charisma modifier to one damage roll of a spell if it does fire damage",
					"I also gain permanent Fire Resistance.",
				]),
				dmgres : ["Fire"],
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (classes.known.sorcerer_ua23pt7 && classes.known.sorcerer_ua23pt7.level > 5 && v.isSpell && (/fire/i).test(fields.Damage_Type)) {
								output.extraDmg += What('Cha Mod');
							}
						},
						"Cantrips and spells that deal fire damage get my Charisma modifier added to their damage."
					],
					spellAdd : [
						function (spellKey, spellObj, spName) {
							if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "fire", "Cha", true);
						},
						"Cantrips and spells that deal fire damage get my Charisma modifier added to their damage."
					]
				}
			},
			"lightning" : {
				name : "Lightning Elemental Affinity",
				description : desc([
					"I add my Charisma modifier to one damage roll of a spell if it does lightning damage",
					"I also gain permanent Fire Resistance.",
				]),
				dmgres : ["Lightning"],
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (classes.known.sorcerer_ua23pt7 && classes.known.sorcerer_ua23pt7.level > 5 && v.isSpell && (/lightning/i).test(fields.Damage_Type)) {
								output.extraDmg += What('Cha Mod');
							}
						},
						"Cantrips and spells that deal lightning damage get my Charisma modifier added to their damage."
					],
					spellAdd : [
						function (spellKey, spellObj, spName) {
							if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "lightn\\.?|lightning", "Cha", true);
						},
						"Cantrips and spells that deal lightning damage get my Charisma modifier added to their damage."
					]
				}
			},
			"poison" : {
				name : "Poison Elemental Affinity",
				description : desc([
					"I add my Charisma modifier to one damage roll of a spell if it does poison damage",
					"I also gain permanent Poison Resistance.",
				]),
				dmgres : ["Poison"],
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (classes.known.sorcerer_ua23pt7 && classes.known.sorcerer_ua23pt7.level > 5 && v.isSpell && (/poison/i).test(fields.Damage_Type)) {
								output.extraDmg += What('Cha Mod');
							}
						},
						"Cantrips and spells that deal poison damage get my Charisma modifier added to their damage."
					],
					spellAdd : [
						function (spellKey, spellObj, spName) {
							if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "poison", "Cha", true);
						},
						"Cantrips and spells that deal poison damage get my Charisma modifier added to their damage."
					]
				}
			},
		},
		"subclassfeature14" : { //Ripped directly from "ListsClasses.js" and then altered
			name : "Dragon Wings",
			source : [["UA23PT7", 23], ["SRD", 45], ["P", 103], ["MJ:HB", 0]],
			minlevel : 14,
			description : desc([
				"As a Bonus Action, I can sprout dragon wings from my back, gaining a Fly Speed equal to my",
				"  current Speed until I dismiss the wings as a Bonus Action or I become Incapacitated.",
				"When the wings manifest, I can decide if they are spectral or physical. If they are physical,",
				"  I must not be wearing somthing that obstructs them, like armor.",
			]),
			action : ["bonus action", " (start/stop)"],
			speed : { fly : { spd : "walk", enc : "walk" } }
		},
		"subclassfeature18" : { //Ripped directly from "ListsClasses.js" and then altered
			name : "Draconic Presence",
			source : [["UA23PT7", 23], ["SRD", 45], ["P", 103], ["MJ:HB", 0]],
			minlevel : 18,
			description : desc([
				"As a Bonus Action, I create 60-ft radius aura of awe/fear for up to 1 minute.",
				"All hostiles in this aura must make a Wis save or be Charmed (awe) or Frightened (fear).",
				"Once a creature fails, it has the condition until it leaves the area of the aura.",
			]),
			additional : "5 Sorcery Points",
			action : ["bonus action", ""]
		},
	},
});

////// Add UA23PT7 Wild Magic Sorcerer subclass
AddSubClass("sorcerer_ua23pt7", "wild magic", {
	regExpSearch : /^(?=.*(mage|magus|sorcerer))(?=.*(wild|chaos|chaotic)).*$/i,
	subname : "Wild Magic",
	fullname : "Wild Mage",
	source : [["UA23PT7", 23], ["P", 103], ["MJ:HB", 0]],
	features : {
		"subclassfeature3" : { //Ripped directly from "all_WotC_pub+UA.js" and then altered
			name : "Wild Magic Surge",
			source : [["UA23PT7", 23], ["P", 103], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				"When I cast a spell with a spell slot, I can roll a d20, but no more than once per turn.",
				"If the result is a 20, I roll on the Wild Magic Surge table found on the \"Notes\" page.",
				"Metamagic can't affect spells cast because of the surge, but they require no concentration.",
			]),
			toNotesPage : [{
				name : "Wild Magic Surge Table",
				source : [["P", 104]],
				popupName : "Wild Mage's Wild Magic Surge Table, part 1",
				additional : "results 01-50",
				note : [
					"My spellcasting can unleash surges of untamed magic. Immediately after I cast a sorcerer spell of 1st level or higher, the DM can have me roll a d20. If I roll a 1, a Wild Magic Surge happens. Roll on the table below to create a random magical effect. A surge can happen only once per turn.",
					"If a Wild Magic effect is a spell, it's too wild to be affected by Metamagic. If it normally requires concentration, it doesn't require concentration in this case; the spell lasts for its full duration.",
					"d100  Effect",
					"01-02 Roll on this table at the start of each of your turns for the next minute, ignoring this result on subsequent rolls.",
					"03-04 For the next minute, you can see any invisible creature if you have line of sight to it.",
					"05-06 A modron chosen and controlled by the DM appears in an unoccupied space within 5 ft of you, then disappears 1 minute later.",
					"07-08 You cast fireball as a 3rd-level spell centered on yourself.",
					"09-10 You cast magic missile as a 5th-level spell.",
					"11-12 Roll a d10. Your height changes by a number of inches equal to the roll. If the roll is odd, you shrink. If the roll is even, you grow.",
					"13-14 You cast confusion centered on yourself.",
					"15-16 For the next minute, you regain 5 hit points at the start of each of your turns.",
					"17-18 You grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode out from your face.",
					"19-20 You cast grease centered on yourself.",
					"21-22 Creatures have disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw.",
					"23-24 Your skin turns a vibrant shade of blue. A remove curse spell can end this effect.",
					"25-26 An eye appears on your forehead for the next minute.",
					"27-28 For the next minute, all your spells with a casting time feet of 1 action have a casting time of 1 bonus action.",
					"29-30 You teleport up to 60 ft to an unoccupied space of your choice that you can see.",
					"31-32 You are transported to the Astral Plane until the end of your next turn, after which time you return to the space you previously occupied or the nearest unoccupied space if that space is occupied.",
					"33-34 Maximize the damage of the next damaging spell you cast within the next minute.",
					"35-36 Roll a d10. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older.",
					"37-38 1d6 flumphs controlled by the DM appear in unoccupied spaces within 60 ft of you and are frightened of you. They vanish after 1 minute.",
					"39-40 You regain 2d10 hit points.",
					"41-42 You turn into a potted plant until the start of your next turn. While a plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts.",
					"43-44 For the next minute, you can teleport up to 20 ft as a bonus action on each of your turns.",
					"45-46 You cast levitate on yourself.",
					"47-48 A unicorn controlled by the DM appears in a space within 5 ft of you, then disappears 1 minute later.",
					"49-50 You can't speak for the next minute. Whenever you try, pink bubbles float out of your mouth."
				]
			}, {
				name : "Wild Magic Surge Table",
				source : [["P", 104]],
				popupName : "Wild Mage's Wild Magic Surge Table, part 2",
				additional : "results 51-100",
				note : [
					"d100  Effect",
					"51-52 A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to magic missile.",
					"53-54 You are immune to being intoxicated by alcohol for the next 5d6 days.",
					"55-56 Your hair falls out but grows back within 24 hours.",
					"57-58 For the next minute, any flammable object you touch that isn't being worn or carried by another creature bursts into flame.",
					"59-60 You regain your lowest-level expended spell slot.",
					"61-62 For the next minute, you must shout when you speak.",
					"63-64 You cast fog cloud centered on yourself.",
					"65-66 Up to three creatures you choose within 30 ft of you take 4d10 lightning damage.",
					"67-68 You are frightened by the nearest creature until the end of your next turn.",
					"69-70 Each creature within 30 ft of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell.",
					"71-72 You gain resistance to all damage for the next minute.",
					"73-74 A random creature within 60 ft of you becomes poisoned for 1d4 hours.",
					"75-76 You glow with bright light in a 30-ft radius for the next minute. Any creature that ends its turn within 5 ft of you is blinded until the end of its next turn.",
					"79-80 Illusory butterflies and flower petals flutter in the air within 10 ft of you for the next minute.",
					"77-78 You cast polymorph on yourself. If you fail the saving throw, you turn into a sheep for the spell's duration.",
					"81-82 You can take one additional action immediately.",
					"83-84 Each creature within 30 ft of you takes 1d10 necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt.",
					"85-86 You cast mirror image.",
					"87-88 You cast fly on a random creature within 60 ft of you.",
					"89-90 You become invisible for the next minute. During that time, other creatures can't hear you. The invisibility ends if you attack or cast a spell.",
					"91-92 If you die within the next minute, you immediately come back to life as if by the reincarnate spell.",
					"93-94 Your size increases by one size category for the next minute.",
					"95-96 You and all creatures within 30 ft of you gain vulnerability to piercing damage for the next minute.",
					"97-98 You are surrounded by faint, ethereal music for the next minute.",
					"99-100 You regain all expended Sorcery Points."
				]
			}],
		},
		"subclassfeature3.1" : { //Ripped directly from "all_WotC_pub+UA.js" and then altered
			name : "Tides of Chaos",
			source : [["UA23PT7", 23], ["P", 103], ["MJ:HB", 0]],
			minlevel : 1,
			description : desc([
				"Once per Long Rest, I can gain Advantage on one d20 Test.",
				"If I cast a Sorcerer spell with a spell slot before I regain the use of this feature,",
				"  I immediately roll on the Wild Magic Surge table \u0026 regain my use of this feature.",
			]),
			recovery : "long rest",
			usages : 1,
		},
		"subclassfeature6" : { //Ripped directly from "all_WotC_pub+UA.js" and then altered
			name : "Bend Luck",
			source : [["UA23PT7", 23], ["P", 103], ["MJ:HB", 0]],
			minlevel : 6,
			description : "\n   " + "As a Reaction, I can add/subtract 1d4 from a d20 Test made by another creature I can see.",
			action : ["reaction", " (1 Sorcery Point)"],
			additional : "1 Sorcery Point"
		},
		"subclassfeature14" : { //Ripped directly from "all_WotC_pub+UA.js"
			name : "Controlled Chaos",
			source : [["UA23PT7", 23], ["P", 103]],
			minlevel : 14,
			description : "\n   " + "Whenever I roll on the Wild Magic Surge table, I can roll twice and use either result."
		},
		"subclassfeature18" : { //Ripped directly from "all_WotC_pub+UA.js" and then heavily altered
			name : "Spell Bombardment",
			source : [["UA23PT7", 23], ["P", 103], ["MJ:HB", 0]],
			minlevel : 18,
			description : desc([
				"Immediately after I cast a Sorcerer spell with a spell slot, I can create an effect that casts a",
				"  spell of my choice from the Wild Magic Surge table, regaining all expended Sorcery Points.",
				"Upon using this feature, I can't do so again until I finish 1d4 Long Rests.",
			]),
			recovery : "1d4 long rest",
			usages : 1,
		},
	},
});

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
		"eldritch invocations ua23pt7" : { //Ripped directly from "ListsClasses.js" & "all_WotC_pub+UA.js" and then altered; "Book of Ancient Secrets" functions were bundled into "Pact of the Tome" in the UA, so it has been removed from this list;
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
			extrachoices : ["Agonizing Blast (prereq: Warlock cantrip)", "Arcane Gunslinger (prereq: Pact of the Blade)", "Armor of Shadows", "Ascendant Step (prereq: level 5 warlock)", "Aspect of the Moon (prereq: Pact of the Tome)", "Beast Speech", "Beguiling Influence", "Bewitching Whispers (prereq: level 7 warlock)", "Bond of the Talisman (prereq: level 12 warlock, Pact of the Talisman)", "Burning Hex (prereq: the Hexblade patron)", "Caiphon's Beacon (prereq: the Great Old One patron)", "Chains of Carceri (prereq: level 15 warlock, Pact of the Chain)", "Chilling Hex (prereq: the Hexblade patron)", "Chronicle of the Raven Queen (prereq: the Raven Queen patron, Pact of the Tome)", "Claw of Acamar (prereq: the Great Old One patron, Pact of the Blade)", "Cloak of Flies (prereq: level 5 warlock)", "Curse Bringer (prereq: the Hexblade patron, Pact of the Blade)", "Devil's Sight", "Dreadful Word (prereq: level 7 warlock)", "Eldritch Armor (prereq: Pact of the Blade)", "Eldritch Mind", "Eldritch Sight", "Eldritch Smite (prereq: level 5 warlock, Pact of the Blade)", "Eldritch Spear (prereq: Eldritch Blast cantrip)", "Eyes of the Rune Keeper", "Far Scribe (prereq: level 5 warlock, Pact of the Tome)", "Fiendish Vigor", "Gaze of Khirad (prereq: level 7 warlock, the Great Old One patron)", "Gaze of Two Minds (prereq: level 5 warlock)", "Ghostly Gaze (prereq: level 7 warlock)", "Gift of the Depths (prereq: level 5 warlock)", "Gift of the Ever-Living Ones (prereq: Pact of the Chain)", "Gift of the Protectors (prereq: level 9 warlock, Pact of the Tome)", "Grasp of Hadar (prereq: Eldritch Blast cantrip)", "Green Lord's Gift (prereq: the Archfey patron)", "Improved Pact Weapon (prereq: Pact of the Blade)", "Investment of the Chain Master (prereq: level 5 warlock, prereq: Pact of the Chain)", "Kiss of Mephistopheles (prereq: level 5 warlock, the Fiend patron, Eldritch Blast cantrip)", "Lance of Lethargy (prereq: Eldritch Blast cantrip)", "Lessons of the Old Ones (prereq: level 2 warlock, repeatable)", "Lifedrinker (prereq: level 9 warlock, Pact of the Blade)", "Mace of Dispater (prereq: the Fiend patron, Pact of the Blade)", "Maddening Hex (prereq: level 5 warlock, Hex spell or warlock feature that curses)", "Mask of Many Faces", "Master of Myriad Forms (prereq: level 5 warlock)", "Minions of Chaos (prereq: level 9 warlock)", "Mire the Mind (prereq: level 5 warlock)", "Misty Visions", "Moon Bow (prereq: the Archfey patron, Pact of the Blade)", "One with Shadows (prereq: level 5 warlock)", "Otherworldly Leap (prereq: level 2 warlock)", "Pact of the Blade", "Pact of the Star Chain (prereq: the Seeker patron)", "Pact of the Chain (prereq: level 2 warlock)", "Pact of the Talisman", "Pact of the Tome", "Path of the Seeker (prereq: the Seeker patron)", "Protection of the Talisman (prereq: level 7 warlock, Pact of the Talisman)", "Raven Queen's Blessing (prereq: the Raven Queen patron, Eldritch Blast cantrip)", "Rebuke of the Talisman (prereq: Pact of the Talisman)", "Relentless Hex (prereq: level 7 warlock, Hex spell or warlock feature that curses)", "Repelling Blast (prereq: Eldritch Blast cantrip)", "Sculptor of Flesh (prereq: level 7 warlock)", "Seeker's Speech (prereq: the Seeker patron)", "Shroud of Shadow (prereq: level 15 warlock)", "Shroud of Ulban (prereq: level 18 warlock, the Great Old One patron)", "Sign of Ill Omen (prereq: level 5 warlock)", "Superior Pact Weapon (prereq: level 9 warlock, Pact of the Blade)", "Thief of Five Fates", "Thirsting Blade (prereq: level 5 warlock, Pact of the Blade)", "Tomb of Levistus (prereq: level 5 warlock)", "Trickster's Escape (prereq: level 7 warlock)", "Ultimate Pact Weapon (prereq: level 15 warlock, Pact of the Blade)", "Undying Servitude (prereq: level 5 warlock)", "Visions of Distant Realms (prereq: level 9 warlock)", "Voice of the Chain Master (prereq: Pact of the Chain)", "Whispers of the Grave (prereq: level 7 warlock)", "Witch Sight (prereq: level 15 warlock)"],
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
							}
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
			"arcane gunslinger (prereq: pact of the blade)" : {
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
				},
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
			"aspect of the moon (prereq: pact of the tome)" : {
				name : "Aspect of the Moon",
				description : "\n   " + "I don't need sleep nor can be forced to by any means; I can rest while doing light activity.",
				source : [["X", 56], ["UA:RCO", 5]],
				submenu : "[improves Pact of the Tome]",
				prereqeval : function(v) { return GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the tome'; },
				savetxt : { text : ["Nothing can force me to sleep"] },
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
			"bond of the talisman (prereq: level 12 warlock, pact of the talisman)" : {
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
				recovery : "long rest",
			},
			"burning hex (prereq: the hexblade patron)" : {
				name : "Burning Hex",
				description : desc([
					"As a Bonus Action, I can cause a target affected by my hexblade's curse to take damage.",
					"It immediately takes Fire damage equal to my Charisma modifier (min 1)."
				]),
				source : [["UA:WnW", 3]],
				submenu : "[improves Hex spell or warlock feature that curses]",
				prereqeval : function(v) { return (/hexblade/).test(classes.known.warlock_ua23pt7.subclass); },
				action : ["bonus action", ""],
			},
			"caiphon's beacon (prereq: the great old one patron)" : {
				name : "Caiphon's Beacon",
				description : desc([
					"I gain Proficiencies with the Deception and Stealth skills.",
					"I have Advantage on attack rolls against charmed creatures."
				]),
				source : [["UA:WnW", 3]],
				prereqeval : function(v) { return (/great old one/).test(classes.known.warlock_ua23pt7.subclass); },
				skills : ["Deception", "Stealth"],
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
			"chilling hex (prereq: the hexblade patron)" : {
				name : "Chilling Hex",
				description : desc([
					"As a Bonus Action, I can swirl frost around a target affected by my hexblade's curse.",
					"All creatures within 5 ft of the target take Cold damage equal to my Cha modifier (min 1)."
				]),
				source : [["UA:WnW", 3]],
				submenu : "[improves Hex spell or warlock feature that curses]",
				prereqeval : function(v) { return (/hexblade/).test(classes.known.warlock_ua23pt7.subclass); },
				action : ["bonus action", ""],
			},
			"chronicle of the raven queen (prereq: the raven queen patron, pact of the tome)" : {
				name : "Chronicle of the Raven Queen",
				description : desc([
					"Within 1 minute of a creature's death, I can use my book of shadows to ask it 1 question.",
					"To do this, I need to put the corpse's hand on the book and speak the question aloud.",
					"Its spirit writes the answer, to the best of its knowledge, in blood in a language I choose."
				]),
				source : [["UA:WnW", 3]],
				submenu : "[improves Pact of the Tome]",
				prereqeval : function(v) { return (/raven queen/).test(classes.known.warlock_ua23pt7.subclass) && classes.known.warlock_ua23pt7.level >= 3 && GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the tome'; },
				action : ["bonus action", ""],
			},
			"claw of acamar (prereq: the great old one patron, pact of the blade)": {
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
				weaponsAdd : ['Claw of Acamar'],
			},
			"cloak of flies (prereq: level 5 warlock)" : {
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
				action : ["bonus action", " (start/stop)"],
			},
			"curse bringer (prereq: the hexblade patron, pact of the blade)" : {
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
				weaponsAdd : ['Curse Bringer'],
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
			"eldritch armor (prereq: pact of the blade)" : {
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
				action : [["action", ""]],
			},
			"eldritch mind" : {
				name : "Eldritch Mind",
				source : [["T", 71]],
				description : "\n   I have Advantage on my Constitution saving throws to maintain concentration on a spell.",
				savetxt : { text : "Adv. on Con (Concentration) saves" },
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
			"far scribe (prereq: level 5 warlock, pact of the tome)" : {
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
				},
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
			"gaze of khirad (prereq: level 7 warlock, the great old one patron)" : {
				name : "Gaze of Khirad",
				description : desc([
					"As an Action, I can see through solid object out to 30 ft until the end of my current turn"
				]),
				source : [["UA:WnW", 4]],
				submenu : "[warlock level  7+]",
				prereqeval : function(v) { return (/great old one/).test(classes.known.warlock_ua23pt7.subclass) && classes.known.warlock_ua23pt7.level >= 7; },
				action : ["action", ""],
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
			"ghostly gaze (prereq: level 7 warlock)" : {
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
				action : ["action", ""],
			},
			"gift of the depths (prereq: level 5 warlock)" : {
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
				speed : { swim : { spd : "walk", enc : "walk" } },
			},
			"gift of the ever-living ones (prereq: pact of the chain)" : {
				name : "Gift of the Ever-Living Ones",
				description : "\n   " + "When I regain HP while my familiar is within 100 ft, I regain the max the dice can roll.",
				source : [["X", 57], ["UA:RCO", 6]],
				submenu : "[improves Pact of the Chain]",
				prereqeval : function(v) { return GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the chain'; },
			},
			"gift of the protectors (prereq: level 9 warlock, pact of the tome)" : {
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
				recovery : "long rest",
			},
			"grasp of hadar (prereq: eldritch blast cantrip)" : { //Altered to be in alignment with UA Repelling Blast
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
				},
			},
			"green lord's gift (prereq: the archfey patron)" : {
				name : "Green Lord's Gift",
				description : desc([
					"When I regain HP, all dice for determining the HP I heal are treated as rolling maximum."
				]),
				source : [["UA:WnW", 4]],
				prereqeval : function(v) { return (/\barchfey\b/).test(classes.known.warlock_ua23pt7.subclass); },
			},
			"improved pact weapon (prereq: pact of the blade)" : { //Some of this Invocation's functions were absorbed into baseline Pact of the Blade, so this has been altered accordingly
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
							}
						},
						"If I include the word 'Pact' in a the name of a melee weapon, shortbow, longbow, light crossbow, or heavy crossbow, it will be treated as my Pact Weapon.\n \u2022 If my Pact Weapon doesn't already include a magical bonus in its name and is not a magic weapon with at least a +1 bonus, the calculation will add +1 to its To Hit and Damage.",
						290
					],
					atkAdd : [
						function (fields, v) {
							if ((/^(shortbow|longbow|light crossbow|heavy crossbow)$/).test(v.baseWeaponName) && (/\bpact\b/i).test(v.WeaponTextName)) {
								v.pactWeapon = true;
							}
						}, "", 90]
				},
			},
			"investment of the chain master (prereq: level 5 warlock, prereq: pact of the chain)" : {
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
				},
			},
			"kiss of mephistopheles (prereq: level 5 warlock, the fiend patron, eldritch blast cantrip)" : {
				name : "Kiss of Mephistopheles",
				description : desc([
					"As a Bonus Action when my Eldritch Blast hits, I can cast Fireball using a warlock spell slot.",
					"The origin of the Fireball is the creature that was hit with my Eldritch Blast attack."
				]),
				source : [["UA:WnW", 4]],
				submenu : "[improves Eldritch Blast]",
				prereqeval : function(v) { return v.hasEldritchBlast && classes.known.warlock_ua23pt7.level >= 5 && (/\bfiend\b/).test(classes.known.warlock_ua23pt7.subclass); },
				action : ["bonus action", ""],
			},
			"lance of lethargy (prereq: eldritch blast cantrip)" : {
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
				},
			},
			"lessons of the old ones (prereq: level 2 warlock, repeatable)": {
				name : "Lessons of the Old Ones",
				description : desc([
					"I gain one Feat of my choice that lacks prerequisites.",
					"I can take this Invocation multiple times, but must take a different Feat each time.",
					"Do note that the sheet will not reflect more than one instance of this Invocation.",
				]),
				source : [["UA23PT7", 29], ["MJ:HB", 0]],
				submenu : "[warlock level  2+]",
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 2; },
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
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 9 && GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the blade'; },
			},
			"mace of dispater (prereq: the fiend patron, pact of the blade)" : {
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
				weaponsAdd : ['Mace of Dispater'],
			},
			"maddening hex (prereq: level 5 warlock, hex spell or warlock feature that curses)" : {
				name : "Maddening Hex",
				description : desc([
					"As a Bonus Action, I cause pain around a target hexed by me that I can see within 30 ft.",
					"It and any of my choice I can see in 5 ft of it take my Cha mod (min 1) in psychic damage.",
					"The Hex spell and all of my Warlock features that curse are considered a hex for this."
				]),
				source : [["X", 57]],
				submenu : "[improves Hex spell or warlock feature that curses]",
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 5 && (isSpellUsed('hex', true) || (/hexblade/).test(classes.known.warlock_ua23pt7.subclass)); },
				action : ["bonus action", ""],
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
			"moon bow (prereq: the archfey patron, pact of the blade)" : {
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
				weaponsAdd : ['Moon Bow'],
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
							if ((v.theWea.pactWeapon || ((v.isMeleeWeapon || v.theWea.isMagicWeapon || v.thisWeapon[1]) && (/\bpact\b/i).test(v.WeaponTextName))) && What('Cha Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod')) {
								fields.Mod = 6;
								v.pactWeapon = true;
							}
						}, "",
						90,
					],
					atkAdd : [
						function (fields, v) {
							if ((v.pactWeapon || v.theWea.pactWeapon || ((v.isMeleeWeapon || v.theWea.isMagicWeapon || v.thisWeapon[1]) && (/\bpact\b/i).test(v.WeaponTextName))) && What('Cha Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod')) {
								fields.Mod = 6;
								v.pactWeapon = true;
								fields.Proficiency = true;
							}
						},
						"If I include the word 'Pact' in a melee or magic weapon's name, it gets treated as my Pact Weapon.",
						290
					],
				},
			},
			"pact of the chain (prereq: level 2 warlock)" : {
				name : "Pact of the Chain",
				description : desc([
					"I can cast Find Familiar, without using a spell slot, \u0026 it can be a Pseudodragon,",
					"  Imp, Quasit, or Sprite. When taking the Attack action, I can forgo 1 attack to have my",
					"  familiar make one attack of its own instead with its Reaction."
				]),
				source : [["UA23PT7", 31], ["SRD", 47], ["P", 107], ["MJ:HB", 0]],
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
			"pact of the star chain (prereq: the seeker patron)" : {
				name : "Pact of the Star Chain",
				source : [["UA:TF", 1]],
				description : desc([
					"My patron grants me an item of power which disappears when I die.",
					"While it is on my person, I can cast Augury as a Ritual.",
					"Additionally, once per Short Rest, I can get Advantage on an Intelligence check.",
					"If I lose this item I can perform a 1-hour ceremony to get a replacement."
				]),
				usages : 1,
				recovery : "short rest",
				spellcastingBonus : {
					name : "Pact of the Star Chain",
					spells : ["augury"],
					selection : ["augury"],
					firstCol : "(R)",
				},
				spellChanges : {
					"augury" : {
						time : "11 min",
						changes : "With my Pact of the Star Chain boon I can cast Augury only as a ritual, thus requiring 10 extra minutes to cast it."
					}
				},
				prereqeval : function(v) {
					return classes.known.warlock_ua23pt7 && classes.known.warlock_ua23pt7.subclass.indexOf("the seeker") !== -1 ? true : "skip";
				},
			},
			"pact of the talisman" : {
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
			"path of the seeker (prereq: the seeker patron)" : {
				name : "Path of the Seeker",
				description : desc([
					"I ignore Difficult Terrain; I have Advantage on saving throws against being Paralyzed",
					"I also have Advantage on checks to escape a Grapple, manacles, or rope bindings"
				]),
				source : [["UA:WnW", 4]],
				prereqeval : function(v) { return (/\bseeker\b/).test(classes.known.warlock_ua23pt7.subclass); },
				savetxt : { adv_vs : ["paralyzed"] },
			},
			"protection of the talisman (prereq: level 7 warlock, pact of the talisman)" : {
				name : "Protection of the Talisman",
				source : [["T", 71]],
				submenu : "[improves Pact of the Talisman]",
				description : "\n   " + "When the wearer of my talisman fails a saving throw, they can add +1d4 to the roll.",
				prereqeval : function(v) {
					return classes.known.warlock_ua23pt7.level >= 7 && GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7').indexOf("pact of the talisman") !== -1;
				},
				usages : "Proficiency bonus per ",
				usagescalc : "event.value = How('Proficiency Bonus')",
				recovery : "long rest",
			},
			"raven queen's blessing (prereq: the raven queen patron, eldritch blast cantrip)" : {
				name : "Raven Queen's Blessing",
				description : desc([
					"When I score a Critical Hit with Eldritch Blast, I can choose an ally I can see within 30 ft.",
					"That ally can immediately expend one HD to regain HP, just like after a Short Rest."
				]),
				source : [["UA:WnW", 5]],
				submenu : "[improves Eldritch Blast]",
				prereqeval : function(v) { return v.hasEldritchBlast && (/raven queen/).test(classes.known.warlock_ua23pt7.subclass); },
			},
			"rebuke of the talisman (prereq: pact of the talisman)" : {
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
				action : [["reaction", ""]],
			},
			"relentless hex (prereq: level 7 warlock, hex spell or warlock feature that curses)" : {
				name : "Relentless Hex",
				description : desc([
					"As a Bonus Action, I can teleport to a target hexed by me that I can see within 30 ft.",
					"I teleport up to 30 ft to an unoccupied space that I can see within 5 ft of the target."
				]),
				source : [["X", 57]],
				submenu : "[improves Hex spell or warlock feature that curses]",
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 7 && (isSpellUsed('hex', true) || (/hexblade/).test(classes.known.warlock_ua23pt7.subclass)); },
				action : ["bonus action", ""],
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
			"seeker's speech (prereq: the seeker patron)" : {
				name : "Seeker's Speech",
				description : desc([
					"When I finish a Long Rest, I pick two Languages that I know until I finish my next Long Rest."
				]),
				source : [["UA:WnW", 5]],
				prereqeval : function(v) { return (/\bseeker\b/).test(classes.known.warlock_ua23pt7.subclass); },
			},
			"shroud of shadow (prereq: level 15 warlock)" : {
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
				},
			},
			"shroud of ulban (prereq: level 18 warlock, the great old one patron)" : {
				name : "Shroud of Ulban",
				description : desc([
					"As an Action, I can turn myself Invisible for 1 minute.",
					"If I attack, deal damage, or force a creature to make a save, I become visible again.",
					"However, I only become visible at the end of the current turn."
				]),
				source : [["UA:WnW", 4]],
				submenu : "[warlock level 18+]",
				prereqeval : function(v) { return (/great old one/).test(classes.known.warlock_ua23pt7.subclass) && classes.known.warlock_ua23pt7.level >= 18; },
				action : ["action", ""],
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
			"superior pact weapon (prereq: level 9 warlock, pact of the blade)" : {
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
							}
						},
						"If my Pact Weapon doesn't already include a magical bonus in its name or gets it from somewhere else and is not a magic weapon, the calculation will add +2 to its To Hit and Damage."
					]
				},
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
			"tomb of levistus (prereq: level 5 warlock)" : {
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
				additional : levels.map( function(n) { return (n * 10) + " temp HP"; }),
			},
			"trickster's escape (prereq: level 7 warlock)" : {
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
				},
			},
			"ultimate pact weapon (prereq: level 15 warlock, pact of the blade)" : {
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
							}
						},
						"If my Pact Weapon doesn't already include a magical bonus in its name or gets it from somewhere else and is not a magic weapon, the calculation will add +3 to its To Hit and Damage."
					]
				},
			},
			"undying servitude (prereq: level 5 warlock)" : {
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
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 5; },
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
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 9; },
			},
			"voice of the chain master (prereq: pact of the chain)" : {
				name : "Voice of the Chain Master",
				description : desc([
					"While on the same plane as my familiar, I can communicate telepathically with it at any range.",
					"Also, I can perceive through its senses and have it speak with my voice while doing so."
				]),
				source : [["SRD", 50], ["P", 111], ["MJ:HB", 0]],
				submenu : "[improves Pact of the Chain]",
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 3 && GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the chain'; },
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
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 7; },
			},
			"witch sight (prereq: level 15 warlock)" : {
				name : "Witch Sight",
				description : desc("I have Truesight with a range of 30 ft."),
				source : [["UA23PT7", 31], ["SRD", 50], ["P", 111], ["MJ:HB", 0]],
				submenu : "[warlock level 15+]",
				vision : [["Witch sight (Truesight)", 30]],
				prereqeval : function(v) { return classes.known.warlock_ua23pt7.level >= 15; },
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
		"subclassfeature3" : { //Ripped directly from "ListsClasses.js" and then altered
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
		"mystic arcanum ua23pt7" : { //Ripped directly from "ListsClasses.js" and then altered
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
		"eldritch master ua23pt7" : { //Ripped directly from "ListsClasses.js" and then altered
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
/*AddFeatureChoice(ClassList.warlock_ua23pt7.features["pact magic ua23pt7"], true, "Pact of the Blade Mastery Properties", {
	name : "Pact of the Blade Mastery Properties",
	extraname : "Optional Warlock 1",
	source : [["UA23PT7", 30], ["SRD", 47], ["P", 107], ["MJ:HB", 0]],
	description : desc([
		"This feature adds the appropriate Mastery Property to my pact weapons.",
	]),
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				masteryFunctions.weaponMasteryAtkAdd[0](fields, v, true);
			},
			'My pact weapon gets its mastery feature added to its description.',
			291
		]
	},
	prereqeval : function (v) { return classes.known.warlock_ua23pt7.level >= 2 ? true : "skip" && GetFeatureChoice('class', 'warlock_ua23pt7', 'eldritch invocations ua23pt7') == 'pact of the blade'; }
}, "Optional 1st-level warlock features");*/

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
						}
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

// Add UA23PT7 Wizard class
ClassList.wizard_ua23pt7 = {
	name : "Wizard (UA:PT-vii)",
	regExpSearch : /^(?=.*(wizard|mage))(?!.*wild mage).*$/i,
	source : [["UA23PT7", 36], ["MJ:HB", 0]],
	primaryAbility : "Intelligence",
	prerequisite : "Intelligence 13+",
	prereqeval : function(v) {
		return What('Int') >= 13;
	},
	die : 6,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Int", "Wis"],
	skills : ["\n\n" + toUni("Wizard") + ": Choose two from Arcana, History, Insight, Investigation, Medicine, Religion", ""],
	armor : [
		[false, false, false, false],
		[false, false, false, false],
	],
	weapons : [
		[false, false, [""]],
		[false, false, [""]],
	],
	equipment : "Wizard starting equipment:" +
		"\n \u2022 Arcane Focus (Quarterstaff)," +
		"\n \u2022 Dagger (2)," +
		"\n \u2022 Robe," +
		"\n \u2022 Scholar's Pack," +
		"\n \u2022 and 5 gp;" +
		"\n\nAlternatively, choose 55 gp worth of starting equipment instead of the class' starting equipment.",
	subclasses : ["Arcane Tradition", []],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	abilitySave : 4,
	spellcastingFactor : 1,
	spellcastingKnown : {
		cantrips : [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		spells : "book",
		prepared : true,
	},
	features : {
		"arcane recovery ua23pt7" : { //Ripped directly from "ListsClasses.js" and then altered
			name : "Arcane Recovery",
			source : [["UA23PT7", 37], ["SRD", 53], ["P", 115], ["MJ:HB", 0]],
			minlevel : 1,
			description : desc([
				"Once per Long Rest, after a Short Rest, I can recover a number of 5th-level or lower spell slots.",
				"The recovered spell slots can have a combined level \u003c half my Wizard lvl (rounded up).",
			]),
			additional : levels.map(function (n) {
				var lvls = Math.ceil(n / 2);
				return lvls + " level" + (lvls > 1 ? "s" : "") + " of spell slots";
			}),
			usages : 1,
			recovery : "long rest",
		},
		"spellcasting ua23pt7" : { //Ripped directly from "ListsClasses.js" and then altered
			name : "Spellcasting",
			source : [["UA23PT7", 38], ["SRD", 52], ["P", 114], ["MJ:HB", 0]],
			minlevel : 1,
			description : desc([
				"I can cast prepared Wizard cantrips/spells, using Intelligence as my spellcasting ability.",
				"I can use an Arcane Focus as a spellcasting focus for my Wizard spells.",
				"I can cast all Wizard spells in my spellbook as Rituals if they have the Ritual tag.",
				"I can copy any leveled spell I find into my spellbook at a cost of 2 hours \u0026 50gp per lvl.",
				"Whenever I gain a Wizard lvl after 1, I can add 2 Wizard spells of my to choice my spellbook;",
				"  Each of these spells must be of a lvl for which I have spell slots.",
				"I can copy a spell from my own spellbook into another book at a cost of 1 hour \u0026 10gp per",
				"  level. If I lose my spellbook, I can use the same procedure to transcribe my prepared Wizard",
				"  spells into a new spellbook.",
			]),
			/*	I have added language to the description regarding the copying of spells into a spellbook, how
				many spells a Wizard gets upon lvl up, & the cost of replacing/copying the spellbook; I'd
				personally rather have that info explicitly on the sheet than have to look it up every time it
				comes up. I know doing so tripled the length of the description, but I personally feel it is
				worth it. You can change it back if you want when you make the official revision updates to the
				class code, Joost.		-MasterJedi2014	*/
			additional : levels.map(function (n, idx) {
				return [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5][idx] + " cantrips known";
			}),
		},
		"scholar ua23pt7" : function() { //Copied directly from the Rogue's "Expertise" feature in "ListsClasses.js" and then altered
			var a = {
				name : "Scholar",
				source : [["UA23PT7", 39], ["MJ:HB", 0]],
				minlevel : 2,
				description : desc([
					"I specialized in an academic field of study. I gain Expertise in one of the following skills in",
					"  which I already have Proficiency: Arcana, History, Nature, or Religion.",
				]),
				skillstxt : "Expertise in one of the following skills in which I already have Proficiency: Arcana, History, Nature, or Religion.",
				extraname : "Expertise",
				extrachoices : ["Arcana", "History", "Nature", "Religion"],
				extraTimes : 1,
			};
			for (var i = 0; i < a.extrachoices.length; i++) {
				var attr = a.extrachoices[i].toLowerCase();
				if (a[attr]) continue;
				a[attr] = {
					name : a.extrachoices[i] + " Expertise",
					description : "",
					source : a.source,
					skills : [[a.extrachoices[i], "only"]],
					prereqeval : function(v) {
						return v.skillProfsLC.indexOf(v.choice) === -1 ? false : v.skillExpertiseLC.indexOf(v.choice) === -1 ? true : "markButDisable";
					}
				};
			}
			return a;
		}(),
		"subclassfeature3" : { //Ripped directly from "ListsClasses.js" and then altered
			name : "Arcane Tradition",
			source : [["UA23PT7", 39], ["SRD", 53], ["P", 115], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc('Choose the Arcane Tradition you studied and put it in the "Class" field '),
		},
		"memorize spell ua23pt7" : { //Original to the UA Wizard
			name : "Memorize Spell",
			source : [["UA23PT7", 39], ["MJ:HB", 0]],
			minlevel : 5,
			description : desc([
				"I can study my spellbook for 1 minute and prepare one extra 1st-lvl or higher spell from my",
				"  spellbook that wasn't already prepared. This spell is prepared until I use this feature to",
				"  prepare a different spell.",
			]),
		},
		"spell mastery ua23pt7" : { //Ripped directly from "ListsClasses.js" and then altered
			name : "Spell Mastery",
			source : [["UA23PT7", 39], ["SRD", 53], ["P", 115], ["MJ:HB", 0]],
			minlevel : 18,
			description : desc([
				"After a Long Rest, I can pick a 1st and 2nd-level spell in my spellbook;",
				"While prepared, I can cast them at their lowest levels without expending spell slots;",
				"I must expend a spell slot to cast these spells at a higher level.",
			]),
		},
		"signature spells ua23pt7" : { //Ripped directly from "ListsClasses.js" and then altered
			name : "Signature Spells",
			source : [["UA23PT7", 39], ["SRD", 54], ["P", 115], ["MJ:HB", 0]],
			minlevel : 20,
			description : desc([
				"Two 3rd-level spells of my choice in my spellbook will always count as prepared.",
				"I can cast both at third level once per Short Rest or Long Rest without expending spell slots.",
				"I must expend a spell slot to cast these spells at a higher level.",
			]),
			recovery : "short rest",
			usages : 2,
		},
	},
};

//// Add Wizard optional choices
AddFeatureChoice(ClassList.wizard_ua23pt7.features["arcane recovery ua23pt7"], true, "Cantrip Formulas", { //Ripped directly from "all_WotC_pub+UA.js" and then altered
	name : "Cantrip Formulas",
	extraname : "Optional Wizard 3",
	source : [["T", 76]],
	description : desc([
		"I have scribed arcane formulas in my spellbook with which I formulate cantrips in my mind.",
		"Whenever I finish a Long Rest, I can use this to change a Wizard cantrip I know for another.",
	]),
	prereqeval : function (v) { return classes.known.wizard_ua23pt7.level >= 3 ? true : "skip"; },
}, "Optional 3rd-level wizard features");

////// Add UA23PT7 Abjurer Wizard subclass
AddSubClass("wizard_ua23pt7", "abjuration", { //Ripped directly from "all_WotC_pub+UA.js" and then altered
	regExpSearch : /(abjuration|abjurer)/i,
	subname : "School of Abjuration",
	fullname : "Abjurer",
	source : [["UA23PT7", 40], ["P", 115], ["MJ:HB", 0]],
	features : {
		"subclassfeature3" : {
			name : "Abjuration Savant",
			source : [["UA23PT7", 40], ["P", 115], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				"I can add two Abjuration spells from the Wizard spell list, each 2nd-lvl or lower, to my spellbook",
				"  for free. Additionally, when I gain a new level of spell slots in this class, I can add one",
				"  Abjuration spell from the Wizard spell list to my spellbook for free.",
			]), //The following code for this feature was ripped from the Eldritch Knight and then altered
			additional : ["", "", "2 Abjur. spells", "2 Abjur. spells", "3 Abjur. spells", "3 Abjur. spells", "4 Abjur. spells", "4 Abjur. spells", "5 Abjur. spells", "5 Abjur. spells", "6 Abjur. spells", "6 Abjur. spells", "7 Abjur. spells", "7 Abjur. spells", "8 Abjur. spells", "8 Abjur. spells", "9 Abjur. spells", "9 Abjur. spells", "10 Abjur. spells", "10 Abjur. spells"],
			spellcastingBonus : {
				name : "From the Abjuration school",
				"class" : ["wizard", "wizard_ua23pt7"],
				school : ["Abjur"],
				times : [0, 0, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10],
			},
		},
		"subclassfeature3.1" : {
			name : "Arcane Ward",
			source : [["UA23PT7", 40], ["P", 115], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				"Whenever I cast an 1st-level or higher Abjuration spell with a spell slot, I make/heal a ward.",
				"I make it at max HP; When I cast an Abjur. spell again, it heals 2 HP per spell slot lvl.",
				"I can alternatively expend a spell slot as a Bonus Action to heal the ward 2 HP per slot lvl.",
				"It stays active at 0 HP and doesn't go away until I finish my next Long Rest.",
				"If I take damage, the ward takes the damage instead, but excess damage carries over to me.",
			]),
			additional : levels.map( function(n) {
				return n < 2 ? "" : "Ward max HP: " + (n * 2) + "+Int mod";
			}),
			usages : 1,
			recovery : "long rest",
			action : ["bonus action", "Heal Arcane Ward (2HP/SL)"],
		},
		"subclassfeature6" : {
			name : "Projected Ward",
			source : [["UA23PT7", 40], ["P", 115]],
			minlevel : 6,
			description : "\n   " + "As a Reaction, my Arcane Ward can absorb damage done to a creature within 30 ft.",
			action : ["reaction", ""],
		},
		"subclassfeature10" : {
			name : "Spell Breaker", //Previously known as "Improved Abjuration"
			source : [["UA23PT7", 40], ["P", 115], ["MJ:HB", 0]],
			minlevel : 10,
			description : desc([
				"I now always have the Dispel Magic spell prepared.",
				"Additionally, I can add my Proficiency Bonus to its ability check.",
			]),
			spellcastingBonus : {
				name : "Spell Breaker",
				spells : ["dispel magic"],
				selection : ["dispel magic"],
				times : 1,
				firstCol : "markedbox",
			},
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spellKey === "dispel magic") {
							var profB = Number(How("Proficiency Bonus"));
							var checkStr = "(" + AbilityScores.names.join("|") + "|spell(casting)?( ability )?) check";
							var checkRx = RegExp(checkStr + " \\(([+-]?\\d+)\\)", "i");
							var theBonus = profB;
							if (checkRx.test(spellObj.description)) {
								var theMatch = spellObj.description.match(checkRx);
								theBonus += Number(theMatch[2]);
								if (tDoc.getField("Remarkable Athlete").isBoxChecked(0) === 1 && theMatch[1].test(/Str|Dex|Con/i)) {
									theBonus -= Math.ceil(profB/2);
								} else if (tDoc.getField("Jack of All Trades").isBoxChecked(0) === 1) {
									theBonus -= Math.floor(profB/2);
								}
							} else {
								var theMatch = spellObj.description.match(RegExp(checkStr, "i"));
							}
							spellObj.description = spellObj.description.replace(theMatch[0], theMatch[1] + " check (" + (theBonus >= 0 ? "+" : "") + theBonus + ")");
							return true;
						}
					},
					"I add my Proficiency Bonus to ability checks required by Dispel Magic. This is shown on the spell sheet by a lowered DC on the check."
				]
			},
		},
		"subclassfeature14" : {
			name : "Spell Resistance",
			source : [["UA23PT7", 40], ["P", 116], ["MJ:HB", 0]],
			minlevel : 14,
			description : "\n   " + "I have Adv. on spell saves and Resistance to spell damage.",
			dmgres : ["Spells"],
			savetxt : { adv_vs : ["spells"] },
		},
	},
});

////// Add UA23PT7 Diviner Wizard subclass
AddSubClass("wizard_ua23pt7", "divination", { //Ripped directly from "all_WotC_pub+UA.js" and then altered
	regExpSearch : /(divination|diviner|divinator)/i,
	subname : "School of Divination",
	fullname : "Diviner",
	source : [["UA23PT7", 40], ["P", 116], ["MJ:HB", 0]],
	features : {
		"subclassfeature3" : {
			name : "Divination Savant",
			source : [["UA23PT7", 40], ["P", 116], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([ //The following code for this feature was ripped from the Abjurer above and then altered
				"I can add two Divination spells from the Wizard spell list, each 2nd-lvl or lower, to my spellbook",
				"  for free. Additionally, when I gain a new level of spell slots in this class, I can add one",
				"  Divination spell from the Wizard spell list to my spellbook for free.",
			]),
			additional : ["", "", "2 Div. spells", "2 Div. spells", "3 Div. spells", "3 Div. spells", "4 Div. spells", "4 Div. spells", "5 Div. spells", "5 Div. spells", "6 Div. spells", "6 Div. spells", "7 Div. spells", "7 Div. spells", "8 Div. spells", "8 Div. spells", "9 Div. spells", "9 Div. spells", "10 Div. spells", "10 Div. spells"],
			spellcastingBonus : {
				name : "From the Divination school",
				"class" : ["wizard", "wizard_ua23pt7"],
				school : ["Div"],
				times : [0, 0, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10],
			},
		},
		"subclassfeature3.1" : {
			name : "Portent",
			source : [["UA23PT7", 41], ["P", 116], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([
				"After a Long Rest, I roll dice and keep the results to be used before my next rest.",
				"A result can replace any d20 Test made by me or a creature I can see.",
				"I choose to switch them before the dice to be replaced are rolled; Max once per turn.",
			]),
			additional : levels.map( function(n) {
				return n < 2 ? "" : (n < 14 ? 2 : 3) + "d20 after a long rest";
			}),
		},
		"subclassfeature6" : {
			name : "Expert Divination",
			source : [["UA23PT7", 41], ["P", 116], ["MJ:HB", 0]],
			minlevel : 6,
			description : desc([
				"When I cast a Divination spell \u2265 2nd-lvl using a spell slot, I regain 1 spent spell slot",
				"  of a lower level than the one I cast \u0026 \u003c 5th-lvl.",
			]),
		},
		"subclassfeature10" : {
			name : "The Third Eye",
			source : [["UA23PT7", 41], ["P", 116], ["MJ:HB", 0]],
			minlevel : 10,
			description : desc([
				"As a Bonus Action, I gain one of the following benefits until my next Short or Long Rest:",
				"  Darkvision 60ft, cast See Invisibility for free, or read any language.",
			]),
			recovery : "short rest",
			usages : 1,
			action : ["bonus action", ""],
		},
		"subclassfeature14" : {
			name : "Greater Portent",
			source : [["UA23PT7", 41], ["P", 117]],
			minlevel : 14,
			description : "\n   " + "I can roll 3d20 instead of 2d20 when using my Portent feature."
		},
	},
});

////// Add UA23PT7 Evoker Wizard subclass
AddSubClass("wizard_ua23pt7", "evoker", { //Ripped directly from "ListsClasses.js" and then altered
	regExpSearch : /(evocation|evocer|evoker)/i,
	subname : "School of Evocation",
	fullname : "Evoker",
	source : [["UA23PT7", 41], ["SRD", 54], ["P", 117], ["MJ:HB", 0]],
	features : {
		"subclassfeature3" : {
			name : "Evocation Savant",
			source : [["UA23PT7", 41], ["SRD", 54], ["P", 117], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([ //The following code for this feature was ripped from the Abjurer above and then altered
				"I can add two Evocation spells from the Wizard spell list, each 2nd-lvl or lower, to my spellbook",
				"  for free. Additionally, when I gain a new level of spell slots in this class, I can add one",
				"  Evocation spell from the Wizard spell list to my spellbook for free.",
			]),
			additional : ["", "", "2 Evoc. spells", "2 Evoc. spells", "3 Evoc. spells", "3 Evoc. spells", "4 Evoc. spells", "4 Evoc. spells", "5 Evoc. spells", "5 Evoc. spells", "6 Evoc. spells", "6 Evoc. spells", "7 Evoc. spells", "7 Evoc. spells", "8 Evoc. spells", "8 Evoc. spells", "9 Evoc. spells", "9 Evoc. spells", "10 Evoc. spells", "10 Evoc. spells"],
			spellcastingBonus : {
				name : "From the Evocation school",
				"class" : ["wizard", "wizard_ua23pt7"],
				school : ["Evoc"],
				times : [0, 0, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10],
			},
		},
		"subclassfeature3.1" : {
			name : "Potent Cantrip",
			source : [["UA23PT7", 41], ["SRD", 54], ["P", 117], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc("Any cantrips I cast still deal half damage on a successful save or if I miss the atk roll."),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.isSpell && v.isDC && v.thisWeapon[3] && SpellsList[v.thisWeapon[3]].save) {
							fields.Description = fields.Description.replace(/ success - no( damage|thing)/ , "success - half damage");
						}
						if (v.isSpell && !v.isDC && v.thisWeapon[3] && !SpellsList[v.thisWeapon[3]].save) {
							fields.Description += (fields.Description ? '; ' : '') + 'half damage on a miss';
						}
					},
					"My cantrips still do half damage on a successful saving throw or if I miss the atk roll, but none of their other effects."
				],
				spellAdd : [ //I am not experienced enough at JS coding to alter this part correctly, so I am going to leave this part as is for now.
					function (spellKey, spellObj, spName) {
						if (spellObj.psionic || spellObj.level || !spellObj.save || !(/\d+d\d+/).test(spellObj.description)) return;
						var startDescr = spellObj.description;
						spellObj.description = spellObj.description.replace("at CL 5, 11, and 17", "CL 5, 11, 17").replace(/damage/ig, "dmg").replace(/creatures?/ig, "crea").replace("save or ", "").replace("at casting or entering", "at cast/enter").replace(/(; \+\d+d\d+.*$|$)/, "; save: half dmg only$1");
						switch (spellKey) {
							case "lightning lure" :
								spellObj.description = spellObj.description.replace(/(Lightn|pull)(ing|ed)/gi, "$1");
								break;
							case "create bonfire" :
								spellObj.description = spellObj.description.replace("half dmg only", "half dmg");
								break;
						}
						return startDescr !== spellObj.description;
					}, //The below line is the only line of this part of the code I have altered at the moment.
					"My cantrips still do half damage on a successful saving throw or if I miss the atk roll, but none of their other effects."
				],
			},
		},
		"subclassfeature6" : {
			name : "Sculpt Spells",
			source : [["UA23PT7", 41], ["SRD", 54], ["P", 117]],
			minlevel : 3,
			description : desc([
				"If I cast an Evocation spell affecting others I can see, I can protect 1 + the spell's level.",
				"The chosen automatically succeed on their saving throws vs. the spell.",
				"They also take no damage if the spell would normally deal half damage on a save."
			]),
		},
		"subclassfeature10" : {
			name : "Empowered Evocation",
			source : [["UA23PT7", 41], ["SRD", 54], ["P", 117], ["MJ:HB", 0]],
			minlevel : 10,
			description : desc("I can add my Int modifier to a single damage roll of any Wizard Evocation spell I cast."),
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (v.thisWeapon[4].indexOf("wizard") !== -1 && SpellsList[v.thisWeapon[3]] && SpellsList[v.thisWeapon[3]].school === "Evoc") {
							output.extraDmg += What('Int Mod');
						}
					},
					"I add my Intelligence modifier to a single damage roll of any Wizard Evocation spell I cast."
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spName.indexOf("wizard") !== -1 && !spellObj.psionic && spellObj.school === "Evoc") return genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", "Int", true);
					},
					"I add my Intelligence modifier to a single damage roll of any Wizard Evocation spell I cast."
				],
			},
		},
		"subclassfeature14" : {
			name : "Overchannel",
			source : [["UA23PT7", 42], ["SRD", 54], ["P", 118]],
			minlevel : 14,
			description : desc([
				"When I cast a 5th-lvl or lower Wizard spell that damages, it can deal max damage on the turn",
				"  I cast it. Every time I do this after the first instance before taking a Long Rest, I suffer",
				"  2d12 Necrotic dmg per spell lvl. This necrotic damage ignores Resistances/Immunities.",
				"I can't overchannel cantrips."
			]),
			extraLimitedFeatures : [{
				name : "Overchannel",
				recovery : "long rest",
				usages : "1 + \u221E"
			}],
		},
	},
});

////// Add UA23PT7 Illusionist Wizard subclass
AddSubClass("wizard_ua23pt7", "illusion", { //Ripped directly from "all_WotC_pub+UA.js" and then altered
	regExpSearch : /(illusion|illusionist|illusionary)/i,
	subname : "School of Illusion",
	fullname : "Illusionist",
	source : [["UA23PT7", 42], ["P", 118], ["MJ:HB", 0]],
	features : {
		"subclassfeature3" : {
			name : "Illusion Savant",
			source : [["UA23PT7", 42], ["P", 118], ["MJ:HB", 0]],
			minlevel : 3,
			description : desc([ //The following code for this feature was ripped from the Abjurer above and then altered
				"I can add two Illusion spells from the Wizard spell list, each 2nd-lvl or lower, to my spellbook",
				"  for free. Additionally, when I gain a new level of spell slots in this class, I can add one",
				"  Illusion spell from the Wizard spell list to my spellbook for free.",
			]),
			additional : ["", "", "2 Illus. spells", "2 Illus. spells", "3 Illus. spells", "3 Illus. spells", "4 Illus. spells", "4 Illus. spells", "5 Illus. spells", "5 Illus. spells", "6 Illus. spells", "6 Illus. spells", "7 Illus. spells", "7 Illus. spells", "8 Illus. spells", "8 Illus. spells", "9 Illus. spells", "9 Illus. spells", "10 Illus. spells", "10 Illus. spells"],
			spellcastingBonus : {
				name : "From the Illusion school",
				"class" : ["wizard", "wizard_ua23pt7"],
				school : ["Illus"],
				times : [0, 0, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10],
			},
		},
		"subclassfeature3.1" : {
			name : "Improved Minor Illusion",
			source : [["UA23PT7", 42], ["P", 118]],
			minlevel : 3,
			description : "\n   " + "I gain the knowledge of the Minor Illusion cantrip (or another if I already knew it)." + "\n   " + "When I cast it, I can create both a sound and an image with a single casting.",
			spellcastingBonus : {
				name : "Minor Illusion cantrip",
				spells : ["minor illusion"],
				selection : ["minor illusion"]
			},
			spellChanges : {
				"minor illusion" : {
					description : "5-ft cube illusion includes visible and audible; Int(Investigation) check vs. Spell DC; see book",
					changes : "My Improved Minor Illusion class feature allows me to make both a sound and an image with a single casting."
				},
			},
		},
		"subclassfeature6" : {
			name : "Malleable Illusion",
			source : [["UA23PT7", 42], ["P", 118], ["MJ:HB", 0]],
			minlevel : 6,
			description : desc([
				"After I cast an Illusion spell that lasts 1 min or longer, I can use a Bonus Action to change it.",
				"I can only change the nature of the illusion, using the spell’s normal parameters of the illusion.",
				"I can only make changes to an Illusion spell I can see.",
			]),
			action : ["bonus action", ""],
		},
		"subclassfeature10" : {
			name : "Illusory Self",
			source : [["UA23PT7", 42], ["P", 118], ["MJ:HB", 0]],
			minlevel : 10,
			description : "\n   " + "As a Reaction, when I'm attacked, I can impose an illusion that makes the attack miss.",
			action : ["reaction", ""],
			recovery : "short rest",
			usages : 1,
			altResource : "SS 2+",
		},
		"subclassfeature14" : {
			name : "Illusory Reality",
			source : [["P", 118]],
			minlevel : 14,
			description : desc([
				"As a Bonus Action, after I cast a 1st-level or higher Illusion spell, I can make it partially real.",
				"One inanimate, nonmagical object that is part of the illusion becomes real for 1 minute.",
				"The object can't be something that deal damage or imposes any conditions.",
			]),
			action : ["bonus action", ""],
		},
	},
});

// Add Feat Versions of TCE Fighting Styles
FeatsList["blind fighting style ua23pt7"] = {
	name : "Blind Fighting Style (UA23PT7)",
	source : [["UA23PT7", 10], ["T", 41], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Fighting Style Feature",
	prereqeval : function(v) {
		return (/features["fighting style ua23pt6"]|features["fighting style ua23pt7"]|features["fighting style"]/i).test(classes.known);
	},
	description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
		"I have Blindsight with 10 ft range, allowing me to see anything not behind total cover",
		"In range, I can see Invisible, but not Hidden, things, even when Blinded or in darkness",
	]),
	vision : [["Blindsight", 10]], //Ripped directly from "all_WotC_pub+UA.js"
};
FeatsList["interception fighting style ua23pt7"] = {
	name : "Interception Fighting Style (UA23PT7)",
	source : [["UA23PT7", 10], ["T", 41], ["UA:CFV", 12], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Fighting Style Feature",
	prereqeval : function(v) {
		return (/features["fighting style ua23pt6"]|features["fighting style ua23pt7"]|features["fighting style"]/i).test(classes.known);
	},
	description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
		"As a Reaction when a creature I can see hits another within 5 ft of me, I can intercept",
		"I reduce the damage the target takes by 1d10 + my Proficiency Bonus (min 0 damage)",
		"I can't be the target and it requires me wielding a shield or a simple or martial weapon"
	]),
	action : [["reaction", ""]], //Ripped directly from "all_WotC_pub+UA.js"
};
FeatsList["superior technique fighting style ua23pt7"] = {
	name : "Superior Technique Fighting Style (UA23PT7)",
	source : [["UA23PT7", 10], ["T", 41], ["T", 42], ["UA:CFV", 5], ["P", 74], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Fighting Style Feature",
	prereqeval : function(v) {
		return (/features["fighting style ua23pt6"]|features["fighting style ua23pt7"]|features["fighting style"]/i).test(classes.known);
	},
	description : " [1 maneuver; d6, 1\xD7 per short rest]" + desc([ //Ripped directly from "all_WotC_pub+UA.js"
		"I gain one superiority die (d6) that I can expend to fuel a special Maneuver",
		"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice",
		"I choose a Maneuver upon selecting this feat",
	]),
	extraLimitedFeatures : [{ //Ripped directly from "all_WotC_pub+UA.js"
		name : "Combat Superiority",
		usages : 1,
		additional : 'd6',
		recovery : "short rest",
		addToExisting : true
	}],
	choices : ["Ambush", "Bait and Switch", "Brace", "Commander's Strike", "Commanding Presence", "Disarming Attack", "Distracting Strike", "Evasive Footwork", "Feinting Attack", "Goading Attack", "Grappling Strike", "Lunging Attack", "Maneuvering Attack", "Menacing Attack", "Parry", "Precision Attack", "Pushing Attack", "Quick Toss", "Rally", "Riposte", "Sweeping Attack", "Tactical Assessment", "Trip Attack"],
	"ambush" : {
		name : "Superior Technique [Ambush] (UA23PT7)",
		description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver.",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice.",
			"My chosen Maneuver is Ambush: When I make an initiative roll or a Dex (Stealth) check,",
			"I can add a superiority die to it. I can't do this if I'm Incapacitated.",
		]),
	},
	"bait and switch" : {
		name : "Superior Technique [Bait and Switch] (UA23PT7)",
		description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver.",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice.",
			"My chosen Maneuver is Bait and Switch: On my turn, I can expend a superiority die to swap",
			"places with an ally within 5 ft. I can't do this if the ally is Incapacitated or unwilling",
			"to swap. Doing this costs me 5 ft of movement, but this doesn't provoke opportunity attacks.",
			"Me or my ally (my choice) can then add the superiority die to AC until my next turn starts.",
		]),
	},
	"brace" : {
		name : "Superior Technique [Brace] (UA23PT7)",
		description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver.",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice.",
			"My chosen Maneuver is Brace: As a Reaction when a creature I can see moves within my melee",
			"reach, I can attack it. I expend a superiority die and make one weapon attack, adding the die",
			"to the damage.",
		]),
		action : [["reaction", "Brace"]],
	},
	"commander's strike" : {
		name : "Superior Technique [Commander's Strike] (UA23PT7)",
		description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver.",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice.",
			"My chosen Maneuver is Commander's Strike: I forgo one attack of my Attack action to direct",
			"an ally I see/hear. The ally can use a Reaction to make an attack, adding the superiority",
			"die to damage.",
		]),
	},
	"commanding presence" : {
		name : "Superior Technique [Commanding Presence] (UA23PT7)",
		description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver.",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice.",
			"My chosen Maneuver is Commanding Presence: When I make a Performance, Intimidation, or",
			"Persuasion check, I can add a superiority die to it.",
		]),
	},
	"disarming attack" : {
		name : "Superior Technique [Disarming Attack] (UA23PT7)",
		description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver.",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice.",
			"My chosen Maneuver is Disarming Attack: Use after hitting a creature; I add the superiority",
			"die to my attack's damage. Target makes a Strength save or drops a held object of my choice",
			"to its feet.",
		]),
	},
	"distracting strike" : {
		name : "Superior Technique [Distracting Strike] (UA23PT7)",
		description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver.",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice.",
			"My chosen Maneuver is Distracting Strike: Use after hitting a creature; I add the superiority",
			"die to my attack's damage. The next attack of an ally before my next turn has Adv. against",
			"the creature.",
		]),
	},
	"evasive footwork" : {
		name : "Superior Technique [Evasive Footwork] (UA23PT7)",
		description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver.",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice.",
			"My chosen Maneuver is Evasive Footwork: Use when moving at least 5 ft; I add the",
			"superiority die to my AC until the end of my turn.",
		]),
	},
	"feinting attack" : {
		name : "Superior Technique [Feinting Attack] (UA23PT7)",
		description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver.",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice.",
			"My chosen Maneuver is Feinting Attack: As a Bonus Action, I can feint to gain Adv. on my next",
			"attack this turn vs. a target in 5 ft. If I hit, add the superiority die to my attack's damage.",
		]),
		action : ["bonus action", "Feinting Attack"],
	},
	"goading attack" : {
		name : "Superior Technique [Goading Attack] (UA23PT7)",
		description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver.",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice.",
			"My chosen Maneuver is Goading Attack: Use after hitting a creature; I add the superiority",
			"die to my attack's damage. Target makes a Wis save or has Disadv. vs. other targets until",
			"the end of my next turn.",
		]),
	},
	"grappling strike" : {
		name : "Superior Technique [Grappling Strike] (UA23PT7)",
		description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered; The alterations made to bring this in line with the UA Grapple rules are of my own creation
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver.",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice.",
			"My chosen Maneuver is Grappling Strike: Immediately after hitting with a melee attack, I can",
			"use a Bonus Action to try to Grapple Unarmed Strike. I subtract the superiority die from the",
			"target's Str or Dex save; I can only do this on my own turn.",
		]),
		action : [["bonus action", "Grappling Strike (after melee hit)"]],
	},
	"lunging attack" : {
		name : "Superior Technique [Lunging Attack] (UA23PT7)",
		description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver.",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice.",
			"My chosen Maneuver is Lunging Attack: I can spend a superiority die to take the Dash action",
			"as a Bonus Action. If after moving at least 10 ft in a straight line immediately before hitting",
			"with a melee attack as part of Attack action, I add the superiority die to my attack's damage.",
		]),
		action : ["bonus action", "Lunging Attack (Dash)"],
	},
	"maneuvering attack" : {
		name : "Superior Technique [Maneuvering Attack] (UA23PT7)",
		description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver.",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice.",
			"My chosen Maneuver is Maneuvering Attack: Use after hitting a creature; I add the superiority",
			"die to my attack's damage. Ally who can see/hear me can use Reaction to move half speed without",
			"opportunity attack from the target.",
		]),
	},
	"menacing attack" : {
		name : "Superior Technique [Menacing Attack] (UA23PT7)",
		description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver.",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice.",
			"My chosen Maneuver is Menacing Attack: Use after hitting a creature; I add the superiority",
			"die to my attack's damage. Target makes a Wisdom save or is Frightened of me until the end",
			"of my next turn.",
		]),
	},
	"parry" : {
		name : "Superior Technique [Parry] (UA23PT7)",
		description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver.",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice.",
			"My chosen Maneuver is Parry: When damaged in melee, I can use a Reaction to reduce",
			"damage taken by superiority die + Str/Dex mod, my choice.",
		]),
		action : [["reaction", "Parry (when damaged in melee)"]],
	},
	"precision attack" : {
		name : "Superior Technique [Precision Attack] (UA23PT7)",
		description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver.",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice.",
			"My chosen Maneuver is Precision Attack: After missing with an attack roll, I add the",
			"superiority die to my attack roll, potentially causing it to instead hit.",
		]),
	},
	"pushing attack" : {
		name : "Superior Technique [Pushing Attack] (UA23PT7)",
		description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver.",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice.",
			"My chosen Maneuver is Pushing Attack: Use after hitting a creature; I add the superiority",
			"die to my attack's damage. If target is Large or smaller, it must make a Strength save or",
			"be pushed up to 15 ft away.",
		]),
	},
	"quick toss" : {
		name : "Superior Technique [Quick Toss] (UA23PT7)",
		description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver.",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice.",
			"My chosen Maneuver is Quick Toss: As a Bonus Action, I can use a superiority die to do a",
			"ranged attack with a thrown weapon. I can draw a thrown weapon as part of making this attack;",
			"I add the die to the damage.",
		]),
		action : [["bonus action", "Quick Toss"]],
	},
	"rally" : {
		name : "Superior Technique [Rally] (UA23PT7)",
		description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver.",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice.",
			"My chosen Maneuver is Rally: As a Bonus Action, ally that can see/hear me gets",
			"temporary HP equal to superiority die + Int/Wis/Cha mod, my choice.",
		]),
		action : [["bonus action", "Rally"]],
	},
	"riposte" : {
		name : "Superior Technique [Riposte] (UA23PT7)",
		description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver.",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice.",
			"My chosen Maneuver is Riposte: When missed in melee, I can use my Reaction to make one melee",
			"attack vs. the attacker. If the attack hits, I add the superiority die to my attack's damage.",
		]),
		action : [["reaction", "Riposte (after missed in melee)"]],
	},
	"sweeping attack" : {
		name : "Superior Technique [Sweeping Attack] (UA23PT7)",
		description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver.",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice.",
			"My chosen Maneuver is Sweeping Attack: Use after hitting a creature and a second creature",
			"is within 5 ft of the first. If the original attack roll hits this second creature, it takes",
			"the superiority die in damage.",
		]),
	},
	"tactical assessment" : {
		name : "Superior Technique [Tactical Assessment] (UA23PT7)",
		description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver.",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice.",
			"My chosen Maneuver is Tactical Assessment: When I make an Investigation, History, or Insight",
			"check, I can add a superiority die to it.",
		]),
	},
	"trip attack" : {
		name : "Superior Technique [Trip Attack] (UA23PT7)",
		description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver.",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice.",
			"My chosen Maneuver is Trip Attack: Use after hitting a creature; I add the superiority",
			"die to my attack's damage. If target is Large or smaller, it must make a Strength save or",
			"be knocked Prone.",
		]),
	},
};
FeatsList["thrown weapon fighting style ua23pt7"] = {
	name : "Thrown Weapon Fighting Style (UA23PT7)",
	source : [["UA23PT7", 10], ["T", 42], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Fighting Style Feature",
	prereqeval : function(v) {
		return (/features["fighting style ua23pt6"]|features["fighting style ua23pt7"]|features["fighting style"]/i).test(classes.known);
	},
	description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
		"I can draw a weapon with the thrown property as part of the attack I make with it",
		"In addition, my ranged attacks made with thrown weapons deal +2 damage"
	]),
	calcChanges : { //Ripped directly from "all_WotC_pub+UA.js"
		atkAdd : [
			function (fields, v) {
				if (v.isThrownWeapon && v.isMeleeWeapon) {
					fields.Description += (fields.Description ? '; ' : '') + '+2 damage when thrown';
				}
			},
			"I deal +2 damage when I hit a ranged attack made with a thrown weapon."
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isThrownWeapon && !v.isMeleeWeapon) {
					output.extraDmg += 2;
				}
			},
			""
		]
	},
};
FeatsList["unarmed fighting style ua23pt7"] = {
	name : "Unarmed Fighting Style (UA23PT7)",
	source : [["UA23PT7", 10], ["T", 42], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Fighting Style Feature",
	prereqeval : function(v) {
		return (/features["fighting style ua23pt6"] | features["fighting style ua23pt7"] | features["fighting style"]/i).test(classes.known);
	},
	description : desc([ //Ripped directly from "all_WotC_pub+UA.js" and then altered
		"My Unarmed Strikes deal 1d6 damage, or 1d8 damage when I have both hands free",
		"At the start of my turn, I can deal 1d4 bludgeoning damage to one target I'm grappling",
	]),
	calcChanges : { //Ripped directly from "all_WotC_pub+UA.js" and then altered
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == "unarmed strike") {
					if (fields.Damage_Die == 1 || fields.Damage_Die == "1d4") fields.Damage_Die = '1d6';
					fields.Description += (fields.Description ? '; ' : '') + 'Versatile (d8)';
				}
			},
			"My Unarmed Strikes deal 1d6 damage instead of 1, which increases to 1d8 if I have both hands free to make an Unarmed Strike with.",
			1
		]
	},
};

// Add UA23PT7 Spells
SpellsList["arcane eruption ua23pt7"] = {
	name : "Arcane Eruption (UA23PT7)",
	source : [["UA23PT7", 43], ["MJ:HB", 0]],
	classes : ["sorcerer", "sorcerer_ua23pt7"],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	rangeMetric : "36m",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "20 ft rad sphere; 6d6 Acid/Cold/Fire/Lghtng/Poison/Psychic/Thunder dmg w/ Condition, half on save; see book",
	descriptionFull : "Churning magical energy explodes in a 20-foot- radius sphere centered on a point you choose within range. When you cast the spell, you select the type of damage dealt by the explosion: Acid, Cold, Fire, Lightning, Poison, Psychic, or Thunder. Each creature in the sphere must make a Dexterity saving throw. On a failed save, a creature takes 6d6 damage of the chosen type. On a successful save, a creature takes half as much damage." + "\n   " + "Choose one of those d6s. The number rolled on that die determines a condition that’s applied to each creature that failed the save, as shown below. A creature has the condition until the end of your next turn." + "\n" + "d6   Additional Effect" + "\n" + "1    Incapacitated" + "\n" + "2    Blinded" + "\n" + "3    Frightened" + "\n" + "4    Poisoned" + "\n" + "5    Charmed" + "\n" + "6    Deafened" + AtHigherLevels + "When you cast this spell using a spell slot of level 5 or higher, the damage increases by 1d6 for each slot level above 4.",
};
SpellsList["counterspell ua23pt7"] = {
	name : "Counterspell (UA23PT7)",
	source : [["UA23PT7", 43], ["SRD", 131], ["P", 228], ["MJ:HB", 0]],
	classes : ["sorcerer", "sorcerer_ua23pt7", "warlock", "warlock_ua23pt7", "wizard", "wizard_ua23pt7"],
	level : 3,
	school : "Abjur",
	time : "1 rea",
	timeFull : "Reaction, which you take when you see a creature within 60 feet of yourself casting a spell with Verbal, Somatic, or Material components",
	range : "60 ft",
	rangeMetric : "18m",
	components : "S",
	duration : "Instantaneous",
	save : "Con",
	description : "Stop a spell being cast; target make Con save to continue casting; target doesn't use spell slot on fail", //Ripped directly from "ListsSpells.js" and then heavily altered
	descriptionFull : "You attempt to interrupt a creature in the process of casting a spell. The creature must make a Constitution saving throw. On a failed save, the spell dissipates with no effect, and the action, Bonus Action, or Reaction used to cast it is wasted. If that spell was cast with a spell slot, the slot isn’t expended.",
};
SpellsList["jump ua23pt7"] = {
	name : "Jump (UA23PT7)",
	source : [["UA23PT7", 43], ["SRD", 158], ["P", 254], ["MJ:HB", 0]],
	classes : ["artificer", "druid", "druid_ua23pt8", "ranger", "ranger_ua23pt6", "sorcerer", "sorcerer_ua23pt7", "wizard", "wizard_ua23pt7"],
	level : 1,
	school : "Trans",
	time : "1 bns",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "A grasshopper’s hind leg",
	duration : "1 min",
	description : "For duration, 1+1/SL creature(s) can jump 30 ft using 10 ft of movement", //Ripped directly from "ListsSpells.js" and then heavily altered
	descriptionFull : "You touch a willing creature. Once on each of its turns until the spell ends, that creature can jump up to 30 feet by spending only 10 feet of movement." + AtHigherLevels + "When you cast this spell using a spell slot of level 2 or higher, you can target one additional creature for each slot level above 1.",
};
SpellsList["sorcerous burst ua23pt7"] = {
	name : "Sorcerous Burst (UA23PT7)",
	source : [["UA23PT7", 44], ["MJ:HB", 0]],
	classes : ["sorcerer", "sorcerer_ua23pt7"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	rangeMetric : "36m",
	components : "V,S",
	duration : "Instantaneous",
	description : "Ranged spell atk; 1d8 Acid/Cold/Fire/Lghtng/Poison/Psychic/Thunder dmg; +1d8 per 8; +1d8 at CL 5/11/17",
	descriptionCantripDie : "Ranged spell atk; `CD`d8 Acid/Cold/Fire/Lghtng/Poison/Psychic/Thunder dmg; +1d8 per 8",
	descriptionFull : "You cast sorcerous energy at one creature or object within range. Make a ranged attack roll against the target. On a hit, the target takes 1d8 damage. If you roll an 8 on a d8 for this spell, you can roll another d8, and add it to the damage." + "\n   " + "Whenever you cast this spell, the maximum number of these d8s you can add to the spell’s damage equals your spellcasting ability modifier." + "\n   " + "You choose the damage type each time you cast this spell: Acid, Cold, Fire, Lightning, Poison, Psychic, or Thunder." + "\n   " + "Cantrip Upgrade. This spell’s damage increases by 1d8 when you reach level 5 (2d8), 11 (3d8), and 17 (4d8).",
};

// Add Two-Handed Improvised Weapon; made with help from user @TrackAtNite
WeaponsList["two-handed improvised weapon"] = {
	regExpSearch : /^(?=.*two-handed)(?=.*improvised)(?=.*weapon).*$/i,
	name : "Two-handed improvised weapon",
	source : [["UA23PT7", 14], ["SRD", 65], ["P", 147], ["MJ:HB", 0]],
	list : "improvised",
	ability : 1,
	range : "Melee",
	description : "Damage die, type, range, etc. are at the DM's discretion; Two-handed",
	abilitytodamage : true,
	baseWeapon : "improvised weapon",
};