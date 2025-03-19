---
title: The Main Form of Fluentis 
sidebar_position: 2
---

The main form of **Fluentis** is composed of several areas with different functionalities:

## Upper Section

The toolbar contains combo boxes to select **Company** and/or **Division** that are used for data entry and the editor to facilitate searching for forms within the application.

Right below, there are various tabs:

### First Tab

Contains information about **Versions**, allows you to **Print**, contains detailed information about the **License**, and allows you to **Close** the program.

### Home Tab

The tab contains:

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

Contains the [Form Navigator](/docs/form-navigator/data-grid-settings) with information about the active form.

## Right Panel

Contains:

**[Tools](/docs/applications/applications-intro)** contains various complementary applications: ARM, Audit Trail, BizLink, Business Intelligence, CRM, Document Management, Unsupported Applications.

**[Object Navigator](/docs/object-navigator/object-navigator-intro)** contains information about the active object, useful for customizing forms with the addition of further data or information.

**[Context Panel](/docs/panels/context-panel)** based on the settings, Fluentis allows for the display of contextual information related to the selected field (e.g., if you select the item, the application shows its availability).

**[Configurations](/docs/configurations/configuration)** contains information that will allow the definition of module management.

**Fluentis Chat** allows you to interact with users enabled for this communication service, both internally within the company context and externally to access Fluentis support. The chat is a very useful tool for quickly sharing information with another operator, sharing digital documents, or even active documents from the management system.

## Lower Section

At the bottom of the application, the status bar contains a series of information explained below:

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

**...**: allows the user to access, with a right-click, the **Navigation Options** window to select the maximum number of items to display (arrows up/down to increase/decrease) and to set the order in which they should be displayed (arrows up/down to change the order). Use the 'OK' button to confirm the choices and the 'Reset' button to return to the standard situation;

**Database**: the displayed information refers to the connection to the database and are, in the order displayed: *User*, *Server/Database*, *Company*.