---
title: Installation
sidebar_position: 2
---

To install Fluentis MES, it is necessary to perform the following steps:

- create a text file containing the following strings:     

```csharp
<?xml version="1.0" encoding="utf-8" ?>
<Settings applicationStyle="Fluent"></Settings>
```

- rename the newly created file to "MobileSettings.xml";        
- copy the "MobileSettings.xml" file into the folder where the Fluentis WPF is located;
- create a new shortcut to the Fluentis executable (located in the folder where the file was saved in the previous step);
- go into the properties of the created shortcut and modify the *target path (path di *destinazione*) by appending a space and the following string: **settingsFile="MobileSettings.xml"**
- launch **Fluentis MES** via the shortcut.