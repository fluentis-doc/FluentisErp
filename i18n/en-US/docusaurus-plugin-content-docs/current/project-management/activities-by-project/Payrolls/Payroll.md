---
title: Totals for payroll
sidebar_position: 2
---

The pay slip summary screen is composed of several sections: 
- movements: all hours related to the employee are summarized, including working hours, vacations, holidays, overtime, business trips, leaves, etc.
- Movements expander (expander Movimenti): summary of total hours by code
- Values (Valori): all expenses for which the employee is entitled to reimbursement
- Values expander (expander Valori): summary of total values by code
- Resource activities (Attività risorse): the ability to view all activity declarations entered for the employee, without the need to open other screens, for an immediate comparison with the payroll processing results. 
- Totals for Vacation - Permits - ROL (Totali Ferie - Permessi - ROL): calculation of total hours of vacation, permits, and ROL for the employee.

Hours requiring the user's attention will be highlighted in red: missing hours, overtime, holidays, etc.

The hours and expenses (only those flagged for reimbursement) considered in the processing of the pay slips will be taken from the activity declarations, regardless of whether they were entered directly in the PM area > activity declaration or generated automatically from interventions. Therefore, it is essential that each activity declaration has the activity category entered.

In cases where the resource performs activities on holiday days such as Saturday or Sunday that are not scheduled in the turn configured for the resource, the hours will automatically be marked with the pay code "Holiday Overtime (Straordinario festivo)." 
If the activity declaration has the "smartworking" flag activated and there is a specific pay code, the existing code for the activity will be replaced with the one intended for smartworking. 
All hours that exceed the maximum hours allowed for the resource's shift will be entered separately with a specific code for Overtime if configured. 
If the holiday calendar is filled out, the pay code for holidays will automatically be entered in the pay slip for the specified days.

Priority of how pay codes are considered: 
1. If it involves overtime, vacation, holidays, business trips, smartworking, etc., specific codes with the corresponding flag enabled will be searched. 
2. If specific codes are not present, the pay code configured for the activity category entered in the activity declaration will be used.
3. If no code is present in the activity category, the first code with the "Ordinary (Ordinario)" flag enabled will be used.
4. If no code with the ordinary flag enabled is found, the first code in the Pay Codes table will be used.
5. If no codes are present, a blocking message will be issued.

Business trips have specific management: 

**Service Activities**

- From interventions: in the expenses incurred, travel hours have been declared. If configured in the [Expense Types table](/docs/configurations/tables/general-settings/expenses-types), activity declarations for travel hours and services will be generated at the approved state of the intervention. 
- In the resource registry, the business trip should be configured indicating how many hours of travel, in addition to ordinary hours, trigger the trip.

If the [pay code](/docs/configurations/tables/employee/Payroll_codes) associated with the activity category of the travel hours has the "Travel Reimbursement (Rimborso viaggio)" flag enabled, the travel-related movement in the pay slip will always have a quantity of 1, regardless of the hours of travel performed (the purpose is to indicate that there was a trip without recording the actual duration). 
If, however, the pay code associated with the category of travel hours does NOT have the "Travel Reimbursement" flag enabled, the travel-related movement in the pay slip will have a quantity equal to the actual hours of travel. 

If, for example, in the resource registry, the threshold is set to "2" hours of travel for the calculation of the business trip, the trip calculation will only occur if the sum of services + travel hours exceeds 2 hours beyond the ordinary hours:

> Example 1:

 8 ordinary hours

 3 travel hours

 --> in the pay slip, there will be 2 rows: 
 - one row with 8 service hours 
 - one row for the business trip (with quantity=1 if the "Travel Reimbursement" flag in the pay code is active, with quantity=3 if the "Travel Reimbursement" flag in the pay code is NOT active)
 
 > Example 2:

 6 ordinary hours

 3 travel hours

--> in the pay slip, there will be a single row for 8 ordinary hours, since the threshold for it to be considered a business trip is 2 travel hours beyond the 8 ordinary hours (in this case, there are 9 hours, so only 1 hour beyond the 8 ordinary).

The same will occur if the activity declaration has been manually entered separately for ordinary hours and travel hours with a specific activity reason.

**ACTIVITY DECLARATION (DICHIARAZIONE ATTIVITA')**

If the travel hours are declared in the incurred expenses with a hourly amount, and if the pay code associated with the incurred expense has the "Travel Reimbursement" flag enabled, upon exceeding 8 hours (thus regardless of the minimum set in the resource registry), a separate row for the business trip will be inserted, always with quantity 1, regardless of the hours declared. 
If the pay code associated with the incurred expense has disabled the "Travel Reimbursement" flag, two separate rows will be inserted for ordinary hours and the actual declared travel hours.