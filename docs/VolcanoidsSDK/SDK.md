---
id: sdk
title: SDK
sidebar_label: SDK
---

## Remarks
MelodicAlbuild, 3/30/2021

## Class Variables
| Type | Name | Default |
| --- | ----------- | --- |
| Boolean | Enabled | false |
| String | ModID | null |
| String | version | 1.0.0 |

## Functions

### SDK

#### Remarks
MelodicAlbuild, 3/30/2021

#### Arguments
| Type | Name | Description |
| --- | --- | --- | 
| String | name | The Name of your Mod |
| GUID | appIdentifier | The GUID of your Mod passed into the ModID Variable |

#### Return Type
Void

#### Description
The Function to enable the SDK for usage with your mod. Without the 2 arguments the SDK can not be used and it throws an error and stops your mod and the SDK.