---
title: Gantt Simulation 
sidebar_position: 2
---

The form that allows you to create and modify a Gantt simulation consists of the following tabs:

- Header
- Filter
- Gantt
- Simulation Log

## Header

Allows you to enter the header data of the Gantt simulation.

*Specific fields*:

> **Simulation Name**: indicates the name associated with the Gantt simulation (by default, it proposes the username and the date and time of creation);     
> **Type**: indicates the code of the [Gantt Simulation Type](/docs/configurations/tables/production/crp-gantt-simulation-type) (only non-Snapshot types are visible);           
> **Type description**: indicates the description of the [Gantt Simulation Type](/docs/configurations/tables/production/crp-gantt-simulation-type);        
> **Block documents**: indicates that all documents included in the creation of the Gantt simulation are blocked. Thus, they cannot be modified until the simulation is validated, releasing the changes made to the documents;  
> **Number**: indicates the number of the Gantt simulation and depends on the numbering associated with the [Gantt Simulation Type](/docs/configurations/tables/production/crp-gantt-simulation-type);         
> **Valid Simulation**: indicates that the simulation has been confirmed and therefore the changes made in the Gantt have been reflected in the connected documents;      
> **Insert Date**: indicates the date of insertion of the Gantt simulation;     
> **User**: indicates the user of the Gantt simulation.     

## Filter

Allows you to search for the documents that will be used to create the **Gantt**.     
The form is composed of an upper area where the filters for searching various documents are entered, with a corresponding list below on the left that displays all documents matching the entered filters and on the right the list of documents that will be included in the **Gantt**.       
Among the filters, it is possible to use the one related to *Document Type*, which allows you to select only: *Planned Orders*, *Purchase Requests*, *Production Order*, or *Subcontractor order*; furthermore, they can be displayed by *Job order* or by *document* depending on the needs.       
Completed documents are only considered if the respective flag **Consider executed documents** is activated.      

The underlying grids present the documents in a tree structure, allowing the user to select only those of interest simply by checking the corresponding box. Subsequently, through the appropriate button **Transfer of selected items** or *Drag & Drop*, the user can add them to the list of those to be considered for the creation of the **Gantt**.       

*Specific buttons*:

> **Search**: allows you to search for documents based on the entered filters;          
> **Create**: allows you to create the **Gantt** based on the documents entered in the right grid;     
> **Select**: allows you to check the selected document;        
> **Select All**: allows you to check all documents present in the grid;       
> **Deselect All**: allows you to uncheck all documents present in the grid;    
> **Expand Job Orders**: allows you to expand the tree of the selected job down to the phase detail;      
> **Collapse Job Orders**: allows you to close the tree of the selected job;     
> **Transfer of selected items**: allows you to transfer the selected documents from the search grid to that of Gantt creation;      
> **Save**: allows you to save the changes made.

## Gantt

In this tab, the Gantt is displayed based on the search criteria set in the previous tab. The tab is composed of 2 sections, each divided into 2 panels.

- **Upper Section**: in the upper section, the user can view on the left side the list of documents that have been selected with the checkbox in the previous tab, one below the other in a tree structure, with indentation based on the relationships the documents have with each other.      
If the production job has more than one item, under the production job, the code of the item (Item and then class, code, and description of the same) is presented.         
In each of these rows, the start date of the document and the end date are also visible.      
If the row is highlighted in red, it means that it has been completed or that in reality that row no longer exists.        
Each of these rows corresponds to a horizontal bar placed in the graphical part of the upper section, which graphically depicts the documents detailed in the left area of this section.       
The horizontal bars cover a time span that can be expanded or reduced using the appropriate buttons on the ribbon bar called **Zoom Out** and **Zoom In**, going into the detail of a single day and thus viewing the uses even at the hour/minute level. Additionally, double-clicking on the horizontal bar representing a document automatically opens the document itself, always according to the rights of the user performing this operation.     
The horizontal bars can be moved on the graph with a simple drag and drop; this operation allows the dynamic adjustment of the document dates.   
The user can then choose, upon exiting the tab, whether to confirm the changes made or not using the **Apply** button.

:::note Note
It is important to note that only planned documents or phases that have not yet begun can be advanced or postponed; everything else is blocked.
:::

- **Lower Section**: in the lower section, a histogram related to the availability and commitment of production resources is presented, divided into 2 panels.     
The left panel displays the names of the *Work Center* engaged in the processes the user has decided to visualize in the graph, while in the right panel, indissolubly linked to the left panel of the upper section, some vertical bars show the amount of work each *Work Center* must perform based on the expected times of the phases of the production orders present on those days.      
It should be noted that the histogram highlights the total commitments of individual work centers, not limited to graphically representing only the commitment derived from the production order displayed in the **Gantt**.     
In fact, the user has the option, with a double click on the bar of the histogram of any work center, to explode a window in which the list of production orders present in the **Gantt** is presented along with the list of production orders not present in the simulation currently being graphically executed, with the option from this window to directly open the documents for which limited detail is provided. The window opened with a double click on the histogram is called **View Work Phases**.         
Through the **View Work Phases** form, it is possible to select the phases of interest, and using the **Change Work Center** and **Change Dates** buttons, the user can respectively change the work center of the phase and move it by 'x' time (days/hours/minutes) or to a certain date.

*Specific buttons*:

> **Save**: allows you to save the changes made;       
> **Save Snapshot**: allows you to save the changes made by creating a snapshot (a child) starting from the main simulation;      
> **Rollback Simulation**: allows you to revert the simulation to its original state, canceling all changes;         
> **Choose Progress Status**: allows you to choose the mode in which the progress state of individual documents should be displayed within the **Gantt**; these can be: *based on elapsed time*, *based on elapsed time and quantity*, *based on produced quantity*, or none;      
> **Apply**: allows you to make the changes applied in the **Gantt** simulation effective (the button becomes enabled after saving);      
> **Expand Tree**: allows you to expand the tree of the simulation down to the detail of the phase;      
> **Collapse Tree**: allows you to close the tree of the simulation;     
> **Zoom In**: allows you to increase the zoom in the graph;     
> **Zoom to Window**: allows you to adjust the zoom in the graph based on the time window being considered;     
> **Zoom Out**: allows you to decrease the zoom in the graph;      
> **Zoom Week**: allows you to adjust the zoom in the graph to one week;      
> **Zoom 2 Weeks**: allows you to adjust the zoom in the graph to two weeks;    
> **Zoom Month**: allows you to adjust the zoom in the graph to one month;    
> **Zoom Date**: allows you to adjust the zoom in the graph for a certain range of dates indicated by the user;            
> **Style Code Mapping**: allows you to view the styles currently in use in the **Gantt**, which can be modified via the buttons *Edit Gantt Style* and *Edit Histogram Style*;          
> **Edit Gantt Style**: allows you to access the settings of the current Gantt style;     
> **Edit Histogram Style**: allows you to access the settings of the current histogram style;          
> **Update Style**: allows you to update the changes made to the styles.      

## Simulation Log

In this tab, the logs of previously saved simulations are displayed, with the possibility to check, for each document that would have undergone temporal changes, the old start date, the old end date, the new start date, and the new end date.