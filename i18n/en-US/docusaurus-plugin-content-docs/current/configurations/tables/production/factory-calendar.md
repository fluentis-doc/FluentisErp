---
title: Factory Calendar 
sidebar_position: 4
---

Through this window, it is possible to generate and/or modify the *Factory Calendar* of the company, a fundamental element that is taken into account by the *General Schedule* and *MRP* procedures.

The window presents itself as a table within which the number of boxes displayed corresponds to the days of the selected month on the top right.  
In the first field, the **Month** and **Year** of reference can be found, which can be selected through the dropdown and the editable field next to it, or by clicking on the **Previous/Next Year** and **Previous/Next Month** buttons.

In each box, there is a flag that, if activated, indicates that the day in question is *Holiday*.  
The designation of a certain day as *Holiday* allows the user to ensure that when generating the [Production Capacity Calendar](/docs/configurations/tables/production/productive-capacity-calendar), the application automatically generates availability for the *Production Resources* only for the days that in the *Factory Calendar* are identified as non-holidays.  
Additionally, the indication regarding the holiday is also important when defining the *Preferential Vendors Procurement Time*, which must therefore be indicated considering the *Factory Calendar*.  
*Example*:  
If Saturday and Sunday are considered holidays, setting a value of 10 days as lead time implies a total time of about 2 weeks, given that the working week consists in this case of only 5 calendar days.

Once the various fields are set, it will be enough to click the **Save** button.

The flags indicating holiday status can be set:  
- **manually** by the user  
or, as is usually done,   
- by using the ribbon button called **Factory Calendar Generation**. Upon pressing this button, a pop-up window called **Calendar Generation** opens.

In this pop-up window, the user can decide to automatically generate the factory calendar for a specific year, which can be set in the appropriate field **Calendar Generation for Year**.  
After deciding which days of the week should be treated as holidays and whether to consider the settings made in the *Annual Holidays* table, the user can click the **OK** button to automatically create the factory calendar for the indicated year.

Once the calendar is generated, the user must click the **Save** button again and close the factory calendar window.

*Specific button*:  
> **Factory Calendar Generation**: allows opening the pop-up window for the automatic generation of the factory calendar for the entire year.

For anything not detailed in this document regarding the common functionality of forms, please refer to the following link [Custom Features, Buttons, and Fields](/docs/guide/common).