---
title: Basic Course Search (Ricerca Corsi base)
sidebar_position: 2
---

The filter can be found on the path **Home > Employees > Training Courses > Basic Courses (Home > Dipendenti > Corsi di formazione > Corsi base)**.   

The data filter allows you to enter new *Basic courses* or search for existing ones to view, modify, or delete them.   

### ![](/img/neutral/common/search.png) Basic Course Search (Ricerca Corsi base)

The form consists of a filter area and a results area. Once you have set all the desired filters, simply click the **Search** button to view the results within the results grid.   

### ![](/img/neutral/common/new.png) Enter Basic Courses (Inserimento Corsi base)

To enter new *Basic courses*, you must click the **New** button.   

### ![](/img/neutral/common/edit.png) Edit or ![](/img/neutral/common/view.png) View Basic Courses (Modifica o Visualizzazione Corsi base)

To open the management of the results grid, you need to double-click on the row of interest or, by selecting one or more rows, press the **Modify** or **View** buttons.   

*Specific buttons*: 
    
### ![](/img/neutral/common/duplicate.png) Duplicate Basic Courses (Duplica Corsi base)

The button is enabled only if a single *Basic course* is selected from the results grid.   
To duplicate an existing *Basic course* into a new *Basic course*, you need to click on the *Basic course* in the grid you wish to duplicate and press the **Duplicate** button. You can only duplicate one *Basic course* at a time. A prompt will appear asking:   
> **Basic Course Type**: is the *Basic Course Type* of the new *Basic course* (required field), the *Basic course type* of the source *Basic course* is proposed.   
> **title**: is the *title* of the new *Basic course* (required field).   
> **Area**: is the *Area* of the new *Basic course*, the *Area* of the source *Basic course* is proposed.   
> **Sector**: is the *Sector* of the new *Basic course*, the *Sector* of the source *Basic course* is proposed.   
> **Course category**: is the *Course category* of the new *Basic course*, the *Course category* of the source *Basic course* is proposed.   

Then click the **OK** button or the **Cancel** button if you wish to proceed with duplicating or not.   
At the end of the processing, the new *Basic course* will be displayed.

### Schedule Next Course (Pianifica prossimo corso)

The button is enabled only if a single *Basic course* is selected from the results grid.   
To schedule a new *Training course* from a *Basic course*, you need to click on the *Basic course* in the grid from which you wish to schedule and press the **Schedule next course** button. You can only schedule one *Training course* at a time.   
The new *Training course* created will have the following pre-loaded information:   
> **Training course type**: specified in the *Basic course types* table present in the source *Basic course*.   
> **Year**, **Number**, and **Date**: based on what is provided by the *Numeration* associated with the *Training course type* and the current date.   
> **Planned**: indicator of *Planned Training Course (Corso di formazione pianificato)*.   
> Other information inherited from the source *Basic course*: *Contents*, *Tutor*, *Tutor requirements*, *Foreign presence*, *Efficacy evaluation*, *Normative requirements*, *Sector*, *Area*, *Course category*, *Scheduled hours*, and *Expected cost*; the list of *Tasks*.   
> Based on the *Tasks*, the *Employees* who hold those *Tasks* on the date of the course will be proposed.   

At the end of the processing, the new *Training course* will be displayed.

### Schedule Next Renewal (Pianifica prossimo rinnovo)

The button is enabled only if a single *Basic course* is selected from the results grid where a renewal is expected (*Course renewal data* with *Frequency (Periodicità)* different from *zero*).   
To schedule a new renewal from a *Basic course*, you need to click on the *Basic course* in the grid you wish to plan from and press the **Schedule next renewal** button. You can only schedule one *Training course* at a time.   
A message indicating the impossibility of creating a renewal will be displayed if a *Training course* has never been conducted for the *Basic course*. 
The new *Training course* created will have the following pre-loaded information:   
> **Training course type**: specified in the *Basic course types* table present in the source *Basic course*.   
> **Year**, **Number**, and **Date**: based on what is provided by the *Numeration* associated with the *Training course type* and the current date.   
> **Planned**: indicator of *Planned Training Course (Corso di formazione pianificato)*.   
> **Renewal**: indicator of *Training Course Renewal (Rinnovo Corso di formazione)*.   
> Other information inherited from the source *Basic course*: *Tutor*, *Tutor requirements*, *Normative requirements*, *Sector*, *Area*, *Course category*, the list of *Tasks*; from the *Basic Course - Renewal (Corso base - Rinnovo)*: *Contents*, *Foreign presence*, *Efficacy evaluation*, *Scheduled hours*, and *Expected cost*.   
> Based on the *Tasks*, the *Employees* who hold those *Tasks* on the date of the course will be proposed.   

At the end of the processing, the new *Training course* will be displayed.

For anything not detailed in this document about the common functioning of the forms, please refer to the following link [Common functionalities, buttons and fields](/docs/guide/common).