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
This function makes a module that you can attach to the drillship immediately, however keep in mind the model for the module is the model of the baseitem variable.

------

### CreateItem

---

#### *Remarks*
MelodicAlbuild, 3/30/2021

#### *Arguments*
| Type | Name | Description |
| --- | --- | --- | 
| String | codename | The Name of the Item with NO SPACES. |
| Integer | maxstack | The Maximum you can have of this item in a stack. | 
| LocalizedString | name | The Spaced Name of your Module. |
| LocalizedString | desc | The Description of your Module. |
| String | guidstring | The GUID in String Form for your module. |
| String | categoryname | The Category in which your Module is in. |
| String | iconPath | Full pathname of the icon file. |

#### *Return Type*
Void

#### *Description*
This function is to create items. Note that if you want to put them in their own categories you need to use the [category](#createcategory) functions.

------

### CreateDeposit

---

#### *Remarks*
MelodicAlbuild, 3/30/2021

#### *Arguments*
| Type | Name | Description |
| --- | --- | --- | 
| Boolean | Underground | If this is an Underground Deposit. |
| Integer | PercentageToReplace | The percentage of active deposits to replace. |
| String | outputname | The Item to Output when Mined. | 
| String | baseitem | The Item to Base this object off, Pick a Module with the same Variant. |
| Float | minyield | The Minimum Amount the Deposit can give. |
| Float | maxyield | The Maximum Amount the Deposit can give. |
| String | ItemToReplace | The Deposit Item to Replace. |

#### *Return Type*
Void

#### *Description*
This function allows you to change deposits to another item. Such as mining copper bolts from copper ore deposits. Currently there is no ability to create more, only replace.

------

### CreateRecipe

---

#### *Remarks*
MelodicAlbuild, 3/30/2021

#### *Arguments*
| Type | Name | Description |
| --- | --- | --- | 
| String | recipeName | Name of the recipe. |
| Input Array | inputs | The inputs of the Recipe. Uses [VolcanoidsFramework.lib.classes.Input](/VolcanoidsSDK/lib/classes/input). |
| Output Array | outputs | The outputs of the Recipe. Uses [VolcanoidsFramework.lib.classes.Output](/VolcanoidsSDK/lib/classes/output). Note there can only be 1 output as of this moment. | 
| String | baseRecipe | The base Recipe. |
| String | itemId | GUID for the Item. |
| String Array | requiredItems | The required items (Schematics) to create this Recipe. |
| String | recipeCategory | Category the recipe belongs to. |

#### *Return Type*
Void

#### *Description*
This function makes a recipe for an Item that does not already have a recipe. Note: This function does not modify existing recipes, Check out [Our Modding Guide](https://modding.melodicalbuild.me) for an explanation on how to modify recipes.

------

### CreateStation

---

#### *Remarks*
MelodicAlbuild, 4/4/2021

#### *Arguments*
| Type | Name | Description |
| --- | --- | --- | 
| String | factoryTypeName | Name of the factory type for this Station to use. |
| String | codename | The Name of the Station with NO SPACES. |
| Integer | maxstack | The Maximum you can have of this item in a stack. | 
| LocalizedString | name | The Spaced Name of your Module. |
| LocalizedString | desc | The Description of your Module. |
| String | guidstring | The GUID in String Form for your module. |
| String | iconPath | Full pathname of the icon file. |
| String | variantname | The Name of the Variant, Such as Tier1 or Tier2. |
| String Array | categoryList | Array of Strings for Categories for the Station Item to be placed in. |

#### *Return Type*
Void

#### *Description*
This function makes a station and it's item that is immediately placeable in the world.

------

### CreateCategory

---

#### *Remarks*
MelodicAlbuild, 3/30/2021

#### *Arguments*
| Type | Name | Description |
| --- | --- | --- | 
| String | categoryName | The Category Name |
| String _or_ GUID | categoryId | The String ID of your Category. |
| CategoryTypes | categoryType | The Type of Category you are Creating, Found in [VolcanoidsSDK.lib.classes.Enums](/VolcanoidsSDK/lib/classes/enums) | 

#### *Return Type*
Void

#### *Description*
This function makes a category for use in Modules, Items, Recipes, or Stations.

------