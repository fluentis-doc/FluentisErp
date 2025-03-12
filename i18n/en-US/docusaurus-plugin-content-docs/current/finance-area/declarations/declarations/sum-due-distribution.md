---
title: Considerations Allocation
sidebar_position: 9
---

The procedure allows the operator to manage the calculations of VAT Ventilation. It receives data from accounting records.

The basic setting of the ventilation derives solely from the table [VAT Registers](/docs/configurations/tables/finance/vat-books), where the registers are set within which to read the movements related to the calculation of the ventilation, which will be carried out based on the operations recorded with the movement type 'Intended for resale (Destinato alla rivendita)' and 'Resale (Rivendita)'. For the sales registers to be ventilated, the option to assign a single reference purchase register is provided: if not indicated, all purchase movements to be ventilated will be used.


From this screen, it is possible to view the calculations already made via the **Search** button as well as add new ventilations via the **Insert New Virement** button.

The ventilation procedure is structured as follows:



The calculation is performed from the form by entering a new calculation: within the form that opens, you need to set the reference date of the last day of the period to be calculated entered in the next field, the sales register to be ventilated, and then press the calculation button. In this way, the details of the ventilated data will be inserted into the previous form, which will need to be reported in a customized printout of the periodic VAT settlement.