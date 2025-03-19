---
title: Payroll Slip Export 
sidebar_position: 3
---
 
Clicking the export button will export the selected payroll slip, or by making a multiple selection from the search grid, a multiple export can be performed in a single file.

The configuration of the tracks is as follows:

Configuration > Parameters > Finance > **Payroll import parameters** 
In the screen, there are two fields "Movements" and "Values" that allow you to set which bizlink flow to call for the export:

- Payroll_Export is for Zucchetti
- Payroll_ExportExternalCompany is for TeamSystem
- PayrollExport_SistemiPresenze is for Sistemi and must be entered in the 'Movements' field, while PayrollExport_SistemiVoci should be placed in the next field "Values" (Sistemi requires two distinct files, one for hours and one for reimbursements entered in the payroll; TeamSystem has everything together)

Tools > Bizlink > Configuration > Flows 
Open the **Intercompany** item 
Searching for Payroll will reveal the already existing standard tracks, and from the same screen, it is possible to configure any new tracks.