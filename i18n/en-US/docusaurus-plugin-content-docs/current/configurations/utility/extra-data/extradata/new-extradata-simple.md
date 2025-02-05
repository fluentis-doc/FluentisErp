---
title: New ExtraData Simple
sidebar_position: 2
---

ExtraData is divided into two categories: 

 - **Simple**: these are properties associated with objects

 - **Objects**: these are actual standalone objects

Each of the two has a procedure; let’s start by analyzing simple ExtraData.


### Creating ExtraData

Go to **Home > Utilities > ExtraData > ExtraData** and click on the **New** button for extra data.

In the images below, you can see the first part of the creation.

![](/img/it-it/configurations/utility/extradata/new-extradata-simple/image01.png)         

1. select the radio button corresponding to **Simple**.

2. enter the **Code** that will identify the extra data.

3. enter the geo-localized **Name** of the extra data (it must be a word present in the dictionary; otherwise, we will need to add it).

4. select the **Data Type** from the dropdown menu. 

5. enter a **Description** that often corresponds to the **Name**.

6. if it has an expiration, enter **Start/End Validity Date**; otherwise, it is not necessary to enter them.

7. if necessary, enter the **Editing and Viewing Rights**.

8. select the **Stereotype** of the value (the display mode of the Value column in all document managements).

The stereotype can be activated for the *Data Type*: Date (DateTime and Time); Decimal (Currency and Numeric); Double, Float, and Long (Numeric); Int (Color, Numeric, and Year); Short (Numeric and Year); String (MultiLine).

The stereotype can be activated for all activated objects and for individual objects. 

In ExtraData, present in all document managements, for the columns: Description (for ExtraData of type Simple) and Notes, the Multi-line property has been implemented (which can be activated by pressing the key combination SHIFT+ENTER).

In the **Activations** grid, you can see the list of objects where the extra data will be visible and can be valued.

To add a **New** one, simply go to write in the last row present in the table.

The flags **Mandatory** and **To print** identify whether, concerning the object in which the extra data is visible, the entry is mandatory and whether it can be printed.

The **Ordering** is simply used for display when we add the extra data; the order in which the extra data will appear within the object is determined by this field.

![](/img/it-it/configurations/utility/extradata/new-extradata-simple/image02.png) 

9. Add extra data in the Fluentis form

To add extra data directly from one of these objects, in the appropriate Fluentis mask, right-click on the blue row (with ![](/img/neutral/common/filter.png)) and click on **Add first level extra data**. This process must be performed for each extra data you want to add. Once one is added, you can also **Add child extra data**.

![](/img/it-it/configurations/utility/extradata/new-extradata-simple/image04.png) 

In the dropdown menu, as shown in the figure, select the desired extra data. You can then value the extra data.

![](/img/it-it/configurations/utility/extradata/new-extradata-simple/image05.png) 

10. Finally, you can enter the **Propagation**.

![](/img/it-it/configurations/utility/extradata/new-extradata-simple/image06.png) 

In propagation, you must enter the exact property that, if valued, will automatically bring the extra data into the selected object in **Activations**. There is the possibility to enter multiple propagations.

### Example

Let’s take the image with propagation above, that is, if the depth (“Propagation”) is valued in the account, when inserting this account in the creation of a new invoice, the depth will be automatically imported within the extra data section of the invoice header (“Activations”).

![](/img/it-it/configurations/utility/extradata/new-extradata-simple/image07.png) 

In the image above, you can see how the depth value is being set in the ExtraData section. Save everything once the modifications are completed.

Now create a new invoice and as a customer/supplier enter the same one as seen in the previous image and you will notice that the depth is automatically imported.

 ![](/img/it-it/configurations/utility/extradata/new-extradata-simple/image08.png)

See also [Insert Simple ExtraData in Xtrareport](/docs/configurations/utility/extra-data/extradata/insert-extradata-simple-in-xtrareport).

See also [New Object ExtraData](/docs/configurations/utility/extra-data/extradata/new-extradata-object).