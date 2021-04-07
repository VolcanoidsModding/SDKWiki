---
id: functions
title: Functions
sidebar_label: Functions
---

## Remarks
MelodicAlbuild, 4/4/2021

## Class Variables
None

## Functions

### CreateModule

---

#### *Remarks*
MelodicAlbuild, 3/30/2021

#### *Arguments*
| Type | Name | Description |
| --- | --- | --- | 
| String | codename | The Name of the Module with NO SPACES. |
| String | variantname | The Name of the Variant, Such as Tier1 or Tier2. |
| Integer | maxstack | The Maximum you can have of this item in a stack. | 
| String | baseitem | The Item to Base this object off, Pick a Module with the same Variant. |
| LocalizedString | name | The Spaced Name of your Module. |
| LocalizedString | desc | The Description of your Module. |
| String | guidstring | The GUID in String Form for your module. |
| String | categoryname | The Category in which your Module is in. |
| String | factorytypename | The Factory Type that is Module is a Part of. |
| String | iconPath | Full pathname of the icon file. |
| String Array | categoryList | Array of Strings for Categories for the Module Item to be placed in. |
| Boolean | looping | If you are creating a new FactoryType, This is true for the first Module in that category, False at all other times. |

#### *Return Type*
Void

#### *Description*
