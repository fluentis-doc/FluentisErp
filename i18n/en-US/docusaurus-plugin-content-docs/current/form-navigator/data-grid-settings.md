---
title: Form Navigator - Data Grid Settings (Form Navigator - Impostazioni dati griglie)
sidebar_position: 3
---

To set the grid with the option for **full data loading (caricamento completo dei dati)**, proceed as follows:

**1.** open the *Form Navigator* on the left, open *Results Widgets*, then the grid definition, and select the *Grid* object: the *Grid Control* will appear below where you can select the *Load all data* flag with the maximum number of rows to consider (*Limit rows number*). 

**2.** re-execute the search in the grid to load all data.

**3.** this option must be saved in a profile, which can be stored and retrieved as needed: it should be noted, in fact, that loading all data will slow down data loading times:

![](/img/it-it/guide/panels/form-navigator/data-grid-settings/image01.png)  

Once this data management mode is defined, several options for **totals/data management (totalizzazione/gestione dei dati)** are presented:

By right-clicking on the grid header, a menu opens from which you can choose the *Total Summary panel* option, then right-click outside the grid, but corresponding to the column to be totaled to choose whether to display: Sum, Min, Max, Count, Average:

![](/img/it-it/guide/panels/form-navigator/data-grid-settings/image02.png)

This totalization can also be set at the group level, always choosing from the menu the option *Group by this column*  
![](/img/it-it/guide/panels/form-navigator/data-grid-settings/image03.png)  

If grouping by a date field in a total loading grid, pressing the right button on the grouping label will make the *Group interval* option available with the following options: None (meaning each date will be a different group), ‘Day', ‘Month', ‘Year', ‘Smart' where the latter will show the previous days, the last week, and then backwards by months:

![](/img/it-it/guide/panels/form-navigator/data-grid-settings/image04.png)  

Another option available with these groups on a total loading grid is sorting by the set sum, in ascending or descending order:  

![](/img/it-it/guide/panels/form-navigator/data-grid-settings/image05.png)  

This results in something like this:  
![](/img/it-it/guide/panels/form-navigator/data-grid-settings/image06.png)