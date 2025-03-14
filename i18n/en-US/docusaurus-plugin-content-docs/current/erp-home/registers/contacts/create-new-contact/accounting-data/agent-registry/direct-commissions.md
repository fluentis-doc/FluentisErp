---
title: Direct commissions
sidebar_position: 4
---

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/direct-commissions/image01.png)

The window is essential for defining what the **criteria for identifying commission percentages** are.

## General fields
The first two fields allow you to define a **general percentage** and a **fixed amount**: the general percentage will only be used if in the section on the right, where the prioritization criteria for valuation are defined, the type ‘1 – Agent Registry (Anagrafica agente)' is present.

## Grid with calculation criteria

In the grid, one or more criteria can be defined simultaneously (see also the management of the *Priority* field), and each criterion can be associated with a *Commission category* (see below) that acts as a filter for the criterion itself based on freely configurable information (object properties).

**Commission Type (Tipo provvigione):** The list of possible options (selectable in the combo box) is as follows:

**Agent contact***: according to the percentage entered in the agent's registry;

**Customer contact***: according to the percentage that the agent has in the customer registry;

**Customer zone***: according to the zone associated with the customer;

**Customer price list***: according to the price lists applicable to customers (therefore general price lists and/or customized price lists);

**Class***: according to the class of the sold item;

**ITEM***: for each single item, the percentage for the agent in use is defined;

**Price list - item class***: according to the combination of the item class in the various price lists;

**Price list - item class - item***: according to the combination of the single item in the various price lists;

**Part type***: according to the type of item;

**Customer contact - item class***: according to the combination of the item class for each customer registry;

**Customer contact - item class - item***: according to the combination of the item class for each customer;

**Discount intervals***: according to the type of discount range (Configuration > Tables > Sales > Discount range), that is, linking the commission to the discounts that the agent applies to the customer. In turn, the discount ranges can depend on item classes, price lists, item type, item characteristics, or be a structure of fixed brackets.

***Customer Commission Category (Categoria provv.cliente)***: according to the commission category associated with the customer;

**Product line***: according to the product line associated with the item;

***Customer Category and Product Line (Cat.cliente e linea prodotto)***: according to the combination of Commission Category and Product Line.

***Royalties (Diritti d'autore)***: this type is specific for cases of subjects who are not real agents but Designers or professionals for whom to calculate Royalties. The percentage of royalties can be linked to the single item or the product line;

:::important[Important]
The **logic for identifying the commission to be applied**, therefore, **depends on the priorities associated with the types** that one wants to use: if, for example, the types ‘6 – item', ‘4 – customer price list', and ‘1 – agent registry' are present with priorities 1, 2, 3, the system would evaluate, upon entering the item, whether it is on the list of items for which the agent has a set commission percentage (if it is among these, this commission percentage is taken); if it is not among these, it would evaluate whether the line has a price derived from a particular price list (e.g., promotional price list) on which the agent has a defined commission (if it is among these, this commission percentage is taken); if it is not among these, it would use the fixed percentage of the agent's registry.
:::

:::tip[Detail]
For some of these options, it is necessary to press the button **Detail of Selected Percentages** to open the mask for defining valid combinations for the agent. In these masks, which depend on the type of starting setting (e.g., if talking about items, there will be the field for defining the item; if talking about price lists, there will be the field for the price list, etc.), it is **important** to **define** the **validity date range** of this setting: for the same item, for example, there could be multiple commission percentages with different validity date ranges.

:::

:::note[Note]
The detail concerning **Discount intervals*** deserves special explanation: indeed, it is important to define what the [**Discount range***](/docs/configurations/tables/sales/discount-range) to apply to the agent is and whether the commissions will be the standard ones entered in this or a customized percentage for the agent on the discount brackets defined for that range; secondly, it is essential to say whether the calculation of the actual discount applied is defined with respect to the item registry price or according to the gross-net price relationship of the individual item line (in which case, it will not be possible to automate agent commissions when creating documents directly on net prices).

Another general note regarding price lists: specific price lists are associated, not a type of price list. Essentially, if a new price list of the same type is created in the sales price list module but with a new validity start date, it must be re-associated with the agent registry along with its commission percentages.
:::

**Commission category**: to the various criteria for reading the commission, a possible *Commission category* is also linked. Categories are defined in the appropriate table. The meaning is to tie the selected criterion to a characteristic of the document (for example, the criterion is Agent Registry with reading of the general commission value but based on the order type—setting in the table of [**Commission Categories (Categorie Provvigionali)**](/docs/configurations/tables/sales/commission-categories) the reading criterion based on the object FSSalesOrder.TypeCode, for example, Code = OCIT. That is, the reading of the commission occurs only when the customer order is of type OCIT = Italy Order).

If the condition (or multiple alternative conditions) is not met, the next priority criterion in the grid is evaluated (provided it has been defined).

In the mask, finally, there is another button that allows you to enter the settings for another agent, selected from the agent help that opens, into the one in use.

*Specific buttons*:
> **Save Agent**: to save the changes made to the agent.  
> **Delete Commission**: to delete the details of the selected commissions.  
> **Copy agents commissions**: allows you to enter the settings retrieved from another selected agent into the current agent using the help that opens.