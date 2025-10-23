---
title: Picking Search 
sidebar_position: 2
---

The form opens via the path **Logistics > Picking**.

import SearchForm from './../../import/sections/search-form.md'

<SearchForm />

*Specific buttons*  
**Delivery Note**: executes the procedure to create the Delivery Note document from a picking.  
**Invoice**: executes the procedure to create the invoice document from a picking. 

During the creation of *Delivery Note* and *Invoice* from picking, a new flag has been added: **Use warehouse and template from Delivery Note type** and **Use warehouse and template from Invoice type**.       
If active, it ensures that the procedure will use for the lines of the Delivery Note / Invoice the warehouse and template taken from those indicated in the Delivery Note / Invoice type.         
Of course, there must be available stock in the warehouse / location taken from the Delivery Note/Invoice template. 

From this form, it is also possible to [Create a new picking](/docs/logistics/picking/picking-management) by clicking the **New** button.