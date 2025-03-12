---
title: Plafond management
sidebar_position: 5
---

The form is located at **Administration > Declarations > Ceiling > New** and allows for the creation of a *new* Ceiling Calculation.

## How to Create a Ceiling Calculation

1.  Upon opening the new screen (after pressing the *New Ceiling* command), enter the following header values: 

![](/img/it-it/finance-area/declarations/declarations/plafond/plafond-start-management/image01.png)

 **Description**: Free description of the calculation being entered. A description that includes the starting year and the type of calculation is recommended.

**Year**: enter the starting year of the ceiling calculation being entered.

:::tip[Note (Nota)]
In managing the various calculations, we can block the period, for example, every year, and enter a new calculation for the following year; however, this is not necessary. It is recommended (for convenience as well) to continue within the same calculation year after year by continuing to press the *Propose Values* command.

The need to enter a new calculation arises, instead, in the case of a change in calculation methodology, for example, from a fixed ceiling to a mobile ceiling.

:::

**Start plafond type**: whether this is a new Ceiling or an extension of a mobile ceiling; 

**Plafond type**: whether it is Solar (i.e., fixed) or Mobile (these are two tax options provided to manage the ceiling). 

**Start date plafond**: it is necessary to enter the month and year of the beginning of the ceiling, and in the case of an 'extension' ceiling, also the **month**, **year**, and **amount** of the last calculated period (Ceiling Properties section). 

**Control Value (Valore di controllo)**: it is possible to set a value threshold in order to alert the user that they are about to use the total available ceiling. For example, if the ceiling available at the beginning of the year is one hundred thousand euros, if we set the threshold value to ten thousand, we will receive a warning upon exceeding ninety thousand, as we are using the last ten thousand.

**Default**: flag that marks, particularly in the presence of multiple stored calculations, which calculation is "current".

:::tip[Attention (Attenzione)]
In the presence of a Ceiling calculation with this flag active, when creating the telematic track for submission to the Revenue Agency for the issued [**intent declarations (dichiarazioni di intento)**](/docs/finance-area/declarations/declarations/intent-declaration), the specific field will be populated.
:::

2. Load the historical values to be used: it is necessary to report the data for the twelve months prior to the date (year) of the calculation start in the detail grid. 

:::tip[Attention (Attenzione)]
In the case of a **mobile** ceiling, it will be necessary to enter precisely **month by month**, as each month the 12th outgoing month must be subtracted and the data of the new 12th must be added; 

in the case of a **solar ceiling**, however, the first 11 months can be loaded with **all zero values** and directly provide the total sales in the ceiling of the year for the final period of **December**. 

The program will check the completeness of the data and save the ceiling for it to be used.
:::

![](/img/it-it/finance-area/declarations/declarations/plafond/plafond-start-management/image02.png)

3. Month by month, it will be necessary to enter edit mode in the ceiling management screen to operate the updated calculation of the data through the **Propose Values** button (present in the ribbon bar). 

**To cancel the calculation of a month, it is necessary to cancel the periods from the last month present in the list (the most recent) to the one of interest**. 

The value available at the beginning of the month is visible in the respective column.

### Ribbon Bar

|  |  |
| --- | --- |
| **New plafond** | Sets the cursor in a new data creation row. |
| **Delete Plafond** | Deletes the selected calculation row. It is not possible to delete intermediate data, only the last in the list. |
| **Propose values** | Executes the calculation for the new month, proposing the values in the grid. |