---
title: General Tab
---


 1. Raw material: in this tab the warehouse and the related template are set. They have to be taken into account by the procedure whose task is unloading raw materials or the level immediately below the item of the production order without other sublevels.
 2. WIP: it sets the work in progress warehouse, the related template and templates related to the loading of materials, consumption of materials, to the returns not used, materials scraps, semi-finished products load, semi-finished products consumption. While setting the data related to the WIP warehouse, the picking type of the material picking that has to pass through the warehouse can be set as “Manual”;  in this way, while releasing finished/semi-finished products production orders,  the material included is transferred from the “Raw Material” warehouse to the WIP warehouse. During the production signal of the last processing phase of the item in the production order, or during the processing phase to which the material is associated, this material is then unloaded. If the material picking type is “With list”, while the material transfer to the WIP warehouse follows the same pattern of the setting with the manual picking, the WIP unload follows the picking list procedure.
 3. Semi-finished: it sets the warehouse and the related template that have to be taken into account by the procedures that transfer semi-finished product, or the level immediately below the item of the production order that, in turn, has sublevels. With these settings, the finished product (the item of the job order) is also transferred in the case of multi-phases working cycle, but only on the last stage. “Declaration-unfin. Prod. Last phase” field has to be set if the user wants the unfinished product to be loaded, from the last production phase of its production order, on a different warehouse or with a non-standard template.    
 4. WIP Unfinished: it sets the warehouse and the related template that have to be taken into account by the procedures that transfer the unfinished product or the level immediately below the item of the production order that has sublevels. With these settings, the finished product (the object of the production order) is also transferred in case of multi-stages working cycle. The set templates are considered only when the unfinished product passes from one stage to another, unless it is the last one because for this one are considered the warehouse and the template set in the “unfinished” section.
 5. Finished products: it sets the warehouse and the related template that have to be taken into account by the procedures that load the finished product, object of the production order.
 6. Scrap: it sets the warehouse and the related template that have to be taken into account while inserting a scrap amount on the line of the production signal or on the line of the used material, always within the production signal.

The “Automatic Management of the lots and serial numbers”, if active, enables the automatic visualization of lots and serial numbers of the material used in the production, directly in the dedicated grids related to the one  of the material used by the production signal. Otherwise the user has to manually set both lots and  serial numbers of the used item, which follow this kind of management.

The flag “Automatic Determination of Times Signals”: if active, enables the automatic calculation of the machine and worker time according to the signal times. Otherwise the user has to manually set the time on the production signal line.

The flag “Split Order if the material lots are not sufficient”, if active, enables the “Production Orders Release” procedure to verify if the amount of the material to be automatically unloaded (just in case of automatic picking  or manual but with WIP management) is sufficient in the warehouse from which it has to be picked; if it is not sufficient, then the procedure splits the production order in 2 different orders that have the same number/year but different lot (the first one lot 0, the second one the lot 1; the first one is the one for which the material within the warehouse is sufficient).

The “Management of Double UM” flag, if active, enables the user to manage the double unit of measure within the production signals, both for the produced item and for the materials used.

The “Automatic Proposal of Alternative U.M.”, if active, enables the automatic proposal of the alternative unit of measure, set for the item within the production signal. Usually, if the “Management of Double UM” is active, this one is also activated.

The “The same lot for the scraps/material scraps” flags, if active, decide if the lot loaded to the scrap warehouse is identical to the produced lot (in case of scrap of the finished product, so the first of the two flags) or to lot that has been used (in case of material scraps, the second of the two flags).

The “Change Job order date when modify production order date” flag, if active, while changing the production order end date it automatically modifies the job order end date, on the condition that the item of the production order is the same of the job order; consequently the production order level must be set on 0.

The “Compute production cost for progress” flag, if active, during the production progress recording, enables the user to charge the warehouse recording cost with the actual cost calculated according to the actual time declared in the signal. This time amount is multiplied for the hour cost of the machine and of the group/labor, then for the hour cost of the working center used.

The “Job sheets managed for” section, through the activation of one of the radio buttons, enables the user to select the grouping type to be used during the job sheet print phase. However, it is just a proposal that can be edited within the job sheet print-mask.

The “Period of analysis” section, through the activation of one of the radio buttons, enables the user to select filtering period related to the production orders that have to be visualized in the job sheet print window  (weekly, daily or every 2 days).

The “Material Valorization to cost”, through the activation of one of the radio buttons, enables the user to select the cost type for the materials valorization (last, medium, standard).

 “Associate lot for picking list” flag, if active, enables the user to control that, during the picking list creation of materials belonging to a selection date of production orders, it is possible to associate lots of those materials to be picked up automatically.

The “Progress control” flag, if active, enables the user to control that, during the progress record, it is possible to recalculate the real production cost up to the indicated phase and be sure that the cost is saved during the load movement.






