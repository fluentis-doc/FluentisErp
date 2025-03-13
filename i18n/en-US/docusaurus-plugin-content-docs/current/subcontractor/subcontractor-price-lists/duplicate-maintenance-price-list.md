---
title: Duplicate and Maintenance of Work Order Price Lists (Duplica e Manutenzione listini di conto lavoro)
sidebar_position: 2
---

Through this procedure, it is possible to update, close, duplicate, reopen, or modify discounts on existing price lists. Upon opening, we notice that there are filters available, through which it is possible to search for the price list to be handled more precisely. By clicking the Search button, the price list items are proposed based on the set filters. It is necessary to select one or more items, those that will be subject to modification, to perform the procedure. With the buttons on the ribbon bar **Modify** and **View**, it is possible to enter either edit mode or view mode for the reference price list; we remind you that view mode does not allow for editing.

With the **Refresh** button, a mask opens where data to be applied in the update is requested:
- **Starting validity date** and **Expiration Date** must be the same as those of the source price list; otherwise, Fluentis cannot perform the update; these dates can be consulted directly in the item line;
- **Percentage increase**: it is possible to indicate a percentage increase to apply to the price;
- **Roundings**: this field excludes the previous one, so to edit it, it is necessary to clear the content of the previous field; here it is possible to choose the type of Rounding to apply to the price; we remind you that the roundings can also contain a percentage increase, so it would not make sense to leave the previous field editable.
Once the desired updates are set, to execute the procedure, click **OK**. We note that the prices of the selected lines have changed according to the settings entered.

With the **Close price lists** button, it is possible to enter an end validity date for the selected price list items. In fact, clicking the Close button will open a mask in which to enter an End Validity Date, from which the item will no longer be considered valid in the price list.

With the **Duplicate price lists** button, it is possible to create a new price list starting from the selected item line. Clicking the duplicate price lists button will prompt for the mandatory data required to create a price list, namely:
- The Supplier (Fornitore);
- The start validity date and a possible end validity date;
- The Currency (Divisa).
Clicking OK will generate the price list with the entered data. We can see that now the search results present one more line, which is exactly the line of the newly created price list.

Clicking **Discounts** on the ribbon bar, on the other hand, allows for managing the discounts related to the selected item line. The flag **Delete previous discounts (Cancella gli sconti precedenti)** deletes any pre-existing discounts in the price list for that item. In the grid, it is then possible to enter discounts to be included in the source price list corresponding to the selected item. To enter the discounts, it is necessary to input pre-coded discounts, to allow the application to derive the type of discount and related properties.
So, we enter the type and value.

Finally, the button on the ribbon bar **Price list re-opening** allows reopening a previously closed price list, one that has an End validity date. Clicking this button will delete the end validity date.

There are also additional buttons on the ribbon bar. It is therefore possible to print the selected lines, create profiles in case it is necessary to modify the mask, and finally, it is possible to create activities to assign to employees.