---
title: New ExtraData Object 
sidebar_position: 3
---

ExtraData is divided into two categories:

- **Simple**: these are properties attached to objects.

- **Objects**: these are standalone objects.

Each of the two has a procedure; let’s start by analyzing the extra data object.


### Creating ExtraData

Go to **Home > Utilities > ExtraData > ExtraData** and click on the **New** extra data button.

In the images below, you can see the first part of the creation.

![](/img/it-it/configurations/utility/extradata/new-extradata-object/image01.png) 

1. First, select the radio button corresponding to **Object**.

2. Enter the **Code** that will identify the extra data.

3. Enter the geo-localized **Name** of the extra data (it must be a word present in the dictionary; otherwise, we will need to add it).

4. Enter the geo-localized **Business Object** that you want to assign to the new object; it corresponds to the name of the object.

5. Enter a **Description** that often corresponds to the **Name**.

6. If it has an expiration, enter the **Start/End Validity Date**; otherwise, it is not necessary to include it.

7. If necessary, enter the **Editing and Viewing Rights**.

In the **Activations** grid, you can see the list of objects where the extra data can be viewed and populated.

To add a new one, just start typing in the last row present in the table.

The **Mandatory** and **To Print** flags identify whether the entry is mandatory concerning the object where the extra data is visible and if it can be printed.

The **Ordering** is simply for display; when we add the extra data, the order in which it will appear within the object is determined by this field.

![](/img/it-it/configurations/utility/extradata/new-extradata-object/image02.png) 

8. Add extra data in the Fluentis form.

To be able to add extra data directly from one of these objects, in the specific Fluentis mask, right-click on the blue row (with ![](/img/neutral/common/filter.png)) and click on **Add first level extra data**. This procedure needs to be performed for each extra data we want to add. Once one is added, we could also **Add child extra data**.

![](/img/it-it/configurations/utility/extradata/new-extradata-object/image04.png) 

In the dropdown menu, as shown in the figure, select the desired extra data. You can then valorize the extra data.

![](/img/it-it/configurations/utility/extradata/new-extradata-object/image05.png) 

9. Finally, you can enter the **Propagation**.

![](/img/it-it/configurations/utility/ex Extradata/new-extradata-object/image06.png) 

In propagation, enter the exact property that, if valorized, will automatically bring the extra data into the selected object in **Activations**. There is the possibility to enter multiple propagations.

### Example

Taking the image with the propagation above, if the language is valorized in the account (“Propagation”), when inserting this account into the creation of a new invoice, the language will be automatically imported into the extra data section of the invoice header (“Activations”).

![](/img/it-it/configurations/utility/extradata/new-extradata-object/image07.png) 

In the image above, you can see how the language value is being set in the extra data section. Save everything once the modifications are complete.

Now create a new invoice and as a customer/supplier enter the same one seen in the previous image, and you will notice that the language is automatically imported.

![](/img/it-it/configurations/utility/extradata/new-extradata-object/image08.png) 

See also [Insert ExtraData Object in Xtrareport](/docs/configurations/utility/extra-data/extradata/insert-extradata-object-in-xtrareport).

See also [New ExtraData Simple](/docs/configurations/utility/extra-data/extradata/new-extradata-simple).