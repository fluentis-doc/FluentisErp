---
title: Time Roundings
sidebar_position: 24
---

The table is located in Configuration > Tables > Project Management > Time Roundings 

In this table, the rounding rules to be applied in the invoice plan to the service hours declared in the interventions are configured.

**Minutes** indicates the range from which the rounding starts, used to find the rounding to be applied based on the service hours of the intervention performed. 
**Rounding** number of minutes to which to round 
**Tolerance** minutes of tolerance before triggering the rounding or the next range


The table works in “ranges”.


For example, if you want to round all interventions of 2 hours to 2 hours, it is sufficient to configure:


>> minutes 0 > rounding in minutes 120 > tolerance 0


>> this indicates that from 0 to infinity, the hours will always be rounded by 2. Tolerance indicates the time gap beyond which the next range is triggered.


>> Example: 
- Intervention A: 1 h and 30 minutes > invoiced 2 hours
- Intervention B: 2h and 10 minutes > invoiced 4 hours
- Intervention C: 8h and 30 minutes > invoiced 10 hours


By adding a tolerance of, for example, 15 minutes, Intervention B will be invoiced at 2 hours. 
By adding another range, you can, for example, adjust the rounding for hours beyond 8 as follows:

>> minutes 0 > rounding in minutes 120 > tolerance 0


>> minutes 480 > rounding in minutes 30 > tolerance 0

Thus, in the previous example, Intervention C will be invoiced at 8h and 30 minutes. If Intervention C had been 8h and 15 minutes, it would still be invoiced at 8h and 30 minutes, as rounding to the nearest half hour is provided.

If you want to invoice, for example, either 4 or 8 hours, you can configure:


>> Minutes 0 > rounding 240 minutes > tolerance 0


>> Minutes 240 > rounding 240 minutes > tolerance 0


>> Minutes 480 > rounding 1 minute > tolerance 0 to ensure that no rounding occurs beyond 8 hours.