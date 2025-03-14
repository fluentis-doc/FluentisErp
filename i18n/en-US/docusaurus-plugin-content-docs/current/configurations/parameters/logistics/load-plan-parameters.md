---
title: Load Plan Parameters
sidebar_position: 5
---

The flags that allow for parameterization are:       

**Control availability**: this flag allows you to insert a column to display the availability of items;      
**Verify availability**: this flag allows checking for any availability;       
**Compulsory availability**: this flag prevents the processing of an item line without availability; it activates once the Check availability flag is set;                  
**View negative availability**: this flag allows viewing any negative availability; it activates once the Check availability flag is set;     
**Consider availability from:**: these flags can be selected if the **Control availability** flag is active; it allows for considering availability coming from different modules;      
**Automatically create picking list from load plans**: obsolete field;          
**Not use dimensions**: this flag does not check the dimensions of items and UDC for comparison with the [Vehicle](/docs/logistics/motorvehicles/motorvehicle), avoiding shipment blocks. Without this flag, if the volume of the items is greater than the volume of the truck, the program will require the use of multiple vehicles.            
**Display items listed in open load plans**: this flag allows viewing (with a color set in the field **Row color in another open load plan**) the lines taken charge of by another colleague in saved and unsaved open load plans;      
**Search proposal for delivery date**: this field sets the delivery dates to check in the search filter for load plans, allowing a choice between: the current week, today onward, or no proposed date;         
**Available line color**: in this field, you can enter the color used to display item lines that have availability;       
**Not available line color**: in this field, you can enter the color used to display item lines that do not have availability;      
**In another load plan line color**: this flag colors the lines already included in another saved load plan;      
**In another open load plan line color**: this flag colors the lines included in another unsaved load plan, which may be in use by a colleague.