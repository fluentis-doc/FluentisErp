---
title: Authorization levels
sidebar_position: 23
---

This table allows for an extended management of blocking passive items according to a more structured logic.

Assuming there is:
- an administrative control of the invoice  
- a subsequent control by the purchasing department of the invoice  
- a final authorization by the owner  

one could envision a coding of the authorization levels as follows:

![](/img/it-it/configurations/tables/finance/authorization-levels.png)

The level *00 – Initial Block* must be preconfigured in every **vendor record**, in the tab [**Payments**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/), to ensure that its items are created blocked with this starting level.

![](/img/it-it/configurations/tables/finance/authorization-levels-combo.png)

The item can then be advanced to level *01* by users with the *Finance* role (in the image, *Fluentis Users*, see user management and roles in the ARM section): this is because it has a *Father level* of 0, and moves it to level 1.

Then the item can be brought to level *02* by users with the *Purchases* role (in the image, *Fluentis Admins*): this is because it has a *parent level* of 1 and advances it to level 2.

Finally, the item can reach the final level *03* only by the user XXXXXXX (the owner), who will actually grant the payment authorization (and only at this point will the block on the item be removed, making it payable).

Each step may require the entry of an authorization note, if the flag is set at the level.

These state changes can be executed from the [**Cash Management**](/docs/finance-area/maturity-values/procedures/cash-management/) screen, using the *Authorize maturity* button. 

After granting authorization, from the *Cash Management* screen, it is also possible to directly prepare the payment batches of the *Vendors Payments* module for authorized items (or those not blocked), as an alternative to the classic procedure of creating the payment batch and, from within the batch, searching for passive items to include.