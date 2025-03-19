---
title: Quality 
sidebar_position: 19
---

In this tab, a series of information useful for quality control processes (if any) for that item will be defined.

### Locations 

In this section, the location within the warehouse where the item should be stored will be defined; specifically, the following can be defined:

**Location type**: that is, where we want to store the item;

**Location single-article**: if active, this flag indicates that only that type of item can be stored in that location; therefore, there cannot be two different items in the same location at the same time;

**Location mono-batch**: if active, this flag indicates that not only one type of item can be stored in that location, but that only one batch of that item can be stored there and not more batches of the same item simultaneously;

### Warehouse Registrations

In this section, useful information for the warehouse registration of this item will be defined, such as:

**Manual load allowed**: if active, this flag indicates that this item can be manually loaded into the warehouse;

**Block movement**: used in customizations to block the saving of a manual entry if the relevant value (from standard or actual value of the item or batch) exceeds the specified **Maximum loading value/Maximum unloading value**. It is not used as standard;          

**Maximum loading value/Maximum unloading value**: used in customizations (together with the flag **Block movement**) as reference values to block the saving of a manual entry if the relevant value (from standard or actual value of the item or batch) exceeds the specified one. They are not used as standard;     

**Utilization cost**: in this subsection, it indicates how the item will be valued, either considering the actual cost or the standard cost;

### Purchases 

In this section, it will be indicated whether incoming checks on the material should be performed upon receipt of purchased material or if they are not required, by indicating:

**Checks acceptance**: through the combo box, the type of check that must be done (internal/not standardized/standardized/offical) will be selected, and in the adjoining fields, through the help, the Type of control plan will be indicated by choosing from the coded control plans within the relative form, which can be accessed via the path **Quality > Control Plans**.

**Tests not required**: if active, this flag indicates that, on the contrary, acceptance checks are not required; 

### Production

In this section, information related to the production of the material still connected to quality control will be specified, such as:

**% Tolerance quantity produced**: in this field, the percentage of tolerance for the produced quantity above and/or below will be indicated,

**Data sheet**: in these fields, the technical sheet and the type of technical sheet relevant to this item will be selected, if present;

**Data sheet not required**: in case the material does not require a technical sheet, this flag will be activated;

### Quality 

In this section, the lead time for analysis necessary to carry out preliminary checks on the item will be indicated:

**Lead Time Analysis**: if active, this flag indicates that for this material, quality checks are necessary, which therefore require a period of time (in days) indicated in the adjoining field; this helps to establish after the material is received, in how many days it can be used in production or, in the case of a finished product, in how many days after its production the material can be shipped;

### After-Sales

In this final section, the possible warranty granted on the material and the related warranty days will be indicated by activating the flag **With guarantee** and adding the number of warranty days in the editable field; if the material does not have a warranty, the flag will remain deactivated.