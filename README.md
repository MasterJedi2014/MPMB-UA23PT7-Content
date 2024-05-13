# MPMB-UA23PT7-Content
Adds the content from "Unearthed Arcana 2023: Player's Handbook Playtest 7" to the MPMB Character Sheets.

**Script Credit Note:**
A lot of the content of this script is either ripped directly from existing code or is an altered form of existing code. I have tried to diligently note when I copied code from elsewhere, but I probably missed some instances. A lack of note saying I ripped the code from elsewhere either means that I wrote that section of code entirely myself or that the code that was copied to use as a starting point was so heavily altered by me that almost nothing of the copied code exists.

# This script needs the following script loaded before this one or else the sheet runs into errors:
- MPMB-UA23PT8-Weapons (https://github.com/MasterJedi2014/MPMB-UA23PT8-Weapons)

**Detailed List of Script Content:**
- UA23PT7 Fighter & its subclasses
  - Battle Master
  - Brawler
  - Champion
  - Eldritch Knight
- UA23PT7 Sorcerer & its subclasses
  - Draconic
  - Wild Magic
- UA23PT7 Warlock & its subclasses
  - Archfey Patron
  - Celestial Patron
  - Fiend Patron
  - Great Old One Patron
  - Most of the WotC Invocations (Only the pre-2022 UA duplicates were excluded)
- UA23PT7 Wizard & its subclasses
  - Abjurer
  - Diviner
  - Evoker
  - Illusionist
- UA23PT7 spells
  - Arcane Eruption
  - Counterspell
  - Jump
  - Sorcerous Burst
- Fighter "Fighting Styles" as FeatureChoices, each of which adds the corresponding Fighting Style Feat
- Five Fighting Style Feats (imported from *TCE*)
  - Blind
  - Interception
  - Superior Technique
  - Thrown Weapon
  - Unarmed
- Added "Two-Handed Improvised Weapon"; made with help from user "TrackAtNite"

This encompasses all of the content in this UA article that wasn't superseded or removed in later content.

This script will allow users to more easily playtest the upcoming revision to D&D 5E.

**Script Patch Notes:**
- **2024-05-07:**
  - Initial upload of WIP V2.2 & V3 of the script.
- **2024-05-08:**
  - Replacement of WIP V2.2 with V2.9, & update to V3 of the script. Scripts now have all UA Warlock content, though not all of that content works correctly at the moment.
- **2024-05-09:**
  - Replacement of WIP V2.9 with V2.92, & replacement of WIP V3 with V4 of the script. Scripts now have all UA Warlock content, and it should now all be working.
- **2024-05-10:**
  - Removal of V2.92 because the release copy of V4 is complete, making the Warlock only file obsolete. Replacement of WIP V4 with release V4 of the script.
- **2024-05-11:**
  - A lot of code cleanup & the code referencing the Mastery property functions have been disabled so that the script will load into more sheets.
- **2024-05-13:**
  - The Mastery property code has been moved from this script to the "MPMB-UA23PT8-Weapons" script so that I can implement calls for its code into the "MPMB-UA23PT7-Content" script.
  - Despite Joost giving me an example, I can't get the sheet to add the Mastery property to the description of a Pact of the Blade weapon. I have therefore opted to remove any code mentions of Mastery properties from the Pact of the Blade Invocation, as I am clearly not good enough at JS to get that working.

**Known Bugs:**
- ~~Neither of the Mastery property functions I have written are doing their job at the moment; I'll be looking on getting advice on how to get them working.~~ Fixed on 2024-05-13.
- ~~A not insignificant number of the Eldritch Invocations are failing to appear in the "Choose Feature" menu.~~ Fixed on 2024-05-09.

**Script Content Source:** https://media.dndbeyond.com/compendium-images/ua/ph-playtest7/tsgOb3llF22AL0nU/UA2023-PH-Playtest7.pdf

For instructions on how to add this script to the sheet, please see this page: https://www.flapkan.com/how-to/add-more-content
