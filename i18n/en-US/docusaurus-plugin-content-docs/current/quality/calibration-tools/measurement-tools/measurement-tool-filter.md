---
title: Measurement Tool Search 
sidebar_position: 1
---

The filter is located on the path **Quality > Calibration tools > Measurement Tools**.   

The data filter allows you to input new *Measurement Tools* or search for existing ones to view, modify, or delete them.   

### ![](/img/neutral/common/search.png) Measurement Tool Search 

The form consists of a filter area and a results area. Once all the desired filters are set, simply click the **Search** button to display the results within the results grid.   

### ![](/img/neutral/common/new.png) Insert Measurement Tools 

To add new *Measurement Tools*, it is necessary to press the **New** button.   

### ![](/img/neutral/common/edit.png) Modify or ![](/img/neutral/common/view.png) View Measurement Tools 

To open the management of the results grid, double-click on the row of interest or select one or more rows and press the **Modify** or **View** buttons.   

*Specific buttons*: 

### Schedule New Calibrations

The button is enabled only if, from the results grid, a single *Measurement Tool* is selected and the *Instrument* must be:   
> *Active*;   
> *Subject to calibration*;   
> periodic calibration and of a temporal type (expanding *Calibration Properties* with *Calibration Period (Periodo di taratura)* different from *zero* and *Measurement Unit* of type *Day* or *Month*).   

To schedule new *Scheduled Tool Calibrations* from a *Measurement Tool*, click on the tool in the grid from which you wish to schedule the *Calibrations* and press the **Schedule New Calibrations** button. You can only schedule one *Measurement Tool* at a time.   
A prompt will be displayed for:   
> **Plan until**: this is the end date of the planning period (mandatory data), a year of planning is proposed starting from today's date.   

Then press the **OK** button or the **Cancel** button if you wish to proceed with the planning activity or not.   

*Method used for scheduling*:   
First, all previous *Calibrations* that were planned and not yet performed for the *Instrument* are deleted.  
Subsequently, from the date of the last *Calibration*, as many *Calibrations* as possible are created in the requested interval starting from today's date, spaced according to the *Calibration Period*. If the proposed date falls on a non-working day specified in the *Factory Calendar*, the proposed date will be postponed to the first available working day.   
If the tool has never had a *Calibration* scheduled or performed, or if the last *Calibration* was from a period prior to today's date minus the *Calibration Period*, the first *Calibration* will be proposed for today, followed by the others.


### New Calibration 

The button is enabled only if, from the results grid, a single *Measurement Tool* is selected and the *Instrument* must be *Active*.   
To create a new *Tool Calibration* from a *Measurement Tool*, click on the *Measurement Tool* in the grid from which you wish to create the *Calibrations* and press the **New Calibration** button. You can create a *Tool Calibration* from only one *Measurement Tool* at a time.   
Upon completion of the processing, the new *Scheduled Tool Calibration* is displayed.   


For everything that is not detailed in this document regarding the common operation of forms, please refer to the following link [Custom Features, Buttons, and Fields](/docs/guide/common).