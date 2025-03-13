---
title: Fixed Assets Parameters
sidebar_position: 4
---

:::tip[Fast Start (FAst Start)]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

If you intend to configure manually, refer to the checklist on the linked page.
:::

The parameters of the Asset module can be found under **Parameters > Administration**.

## Form Data

#### Specific Buttons

> **Save Parameters**: allows you to save the set parameters.  
> **Cancel Settings**: allows you to cancel the settings.  

#### Specific Fields  

- **Verify classification code**: if the flag is set, the pre-code must be predefined in the table and cannot be freely set during the creation of the asset.

- **Code management by companies**: with this check active, the reading from the **Fixed asset classification code** is enabled, and the verification of the pre-code will be related to the individual company instead of referring to all pre-codes of all companies present in the db.
  
- **Show quantity**: if the flag is set, the quantity will be displayed.  

- **Default UM**: defines the default unit of measure if the previous flag is set.  

- **Percentage of individual asset**: with the flag set, a field will be activated in the asset header where a depreciation percentage can be set that will be prioritized over the percentage set in the asset's belonging category.  

- **Management Division**: if the flag is set, it will be possible to assign, in the asset registry, the desired division; otherwise, the division field will be proposed by default.  

- **Depreciation accounting template**: field to enter the default reason to propose in the depreciation accounting form, also for controlling purposes.

- **Single recording in depreciation accounting**: with this check, each asset record will result in a single accounting registration of depreciation.

- **Accounting center enable**: this flag enables the reading of the cost center entered in the **Detail** tab of the asset record, which refers to the depreciation quota calculated by accounting logic, and makes the alternative management of technical depreciation handled in the appropriate tab (Depreciation for controlling) non-mandatory.

## 2. Video Tutorial Fixed Assets Parameters

:::important See Also
[**VIDEO TUTORIALS ON ASSET PARAMETERS**](/docs/video/finance/intro.md)
:::