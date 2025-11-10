---
title: The Main Form of Fluentis 
sidebar_position: 2
---

The main form of **Fluentis** is composed of several areas with different functionalities:

## Ribbon Bar 

The ribbon contains the main menus, Home, with some basic settings, and the specific menus for the various functional areas.



### Home Tab

The tab contains:
-The combo-boxes for selecting the **Company** and/or the **Division** that are used for data entry.

- A combo box to select the desired **Language**,
    
- A combo box to choose the **Menu** of Fluentis,

:::note Menu    
Based on the activated menu, the ribbon bar of the **Home** tab is populated with cross-sectional information for the entire application, and tabs corresponding to the areas of Fluentis are added.
:::
    
- **Themes** that the user can choose to change the application background according to their visual needs, 
    
- The available space to display *forms opened by the user*,
    
- A **button** to hide or show the entire ribbon bar.
    
### Area Tabs

Contain a series of ribbons grouped by type/module. For example, the *Purchases* tab contains all documents of the active cycle: requests, orders, delivery notes, invoices, etc.

### Help
    
For detailed information on the form in use, the user can consult the documentation by pressing **F1** or clicking the **?** button.

## Left Panel

Contains the [Form Navigator](/docs/form-navigator/data-grid-settings) with information about the active form and the possibility of managing the elements of the form itself.

## Right Panel

Contains:

**[Tools](/docs/applications/applications-intro)** contains several complementary applications:

- Application Resource Manager: a reduced selection of useful commands also present in the eponymous application for the "backend" management of the system.
- Audit Trail: a component that allows for the traceability of user operations.
- BizLink: the cross-cutting component that manages all input and output communications (data export and import).
- Document Management: the cross-cutting component that manages document archiving related to various forms, or the automatic archiving of files exported from the ERP (such as electronic invoices, telematic tracks of tax and bank documents, etc.).
- Supervisor: the component that allows for the automation of checks performed directly on the database.
- Unsupported applications: present for backward compatibility and/or obsolete functionalities.

**[Object Navigator](/docs/object-navigator/object-navigator-intro)** contains information about the active object, useful for customizing forms with the addition of further data or information.

**[Context Panel](/docs/panels/context-panel)** based on the settings, Fluentis allows for the display of contextual information related to the selected field (e.g., if you select the item, the application shows its availability).

**[Configuration](/docs/configurations/configuration)** contains information that will allow the definition of module management.


## Status Bar 

At the bottom of the application, there is a status bar that contains information about the database connection, which is displayed in the following order: *User*, *Server\Database*, *Company*, (*Division*).

## Multifunction Bar 

**Settings**: Allows access to a series of system functionalities:

- Solutions: which provides information about the available software packages
- Information: which displays a popup containing the currently used version
- Print Report: which allows printer management
- License: which contains information about the license and the software packages available based on your license
- Startup Forms: a utility that allows you to configure which forms to run automatically when the application opens
- Settings: parameters for choosing the graphical layout of the application (these are alternative layouts compared to the standard one) as well as the choice to display or not the status bar and the storage of login data.
- Close: terminates the application


**Task**: allows a quick link to the management of pending activities (derived from the configured Workflow procedures);

**Calendar**: allows for calendar management, which can be hooked up with Exchange or Outlook.
:::note Synchronizing the *Outlook calendar* with the *Fluentis calendar*. 

1. Configure the user in **ARM** and define in the **Other features** tab the email: 

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image01.png)


2. Next, by pressing the *Default Path for Outlook* button, it will ask which calendar to configure among those found, and the **Default Path for Outlook** field will be automatically filled: 

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image02.png) ![](/img/it-it/guide/panels/status-bar/calendar-configuration/image03.png)


At this point, by moving to **Calendar** (status bar), after *restarting* Fluentis, you will notice that synchronization with Outlook has been successfully completed:

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image04.png)


See also [Resource Calendar Planning](/docs/project-management/transverse-procedures).
:::


**Dashboards**: provides a quick summary of the highlights of management with a very powerful and easily customizable statistical interface;

**Find**: allows you to view all application commands. Used together with the search field located at the top of the main menu, we can find a specific command or commands grouped together;


