---
title: Project Types 
sidebar_position: 12
---

The table is accessible from **Tables > Project Management > Project Types**.

The table contains the possible types of **Project (Progetto)**. It consists of a filter section where you can search through the description of the type, and two grids: one where all the project types entered will be listed (just click the ![](/img/neutral/common/search.png) search button in the ribbon bar to display them) and one where predefined costs/revenues for each project type to be used in the WIP calculation can be indicated.

![](/img/it-it/configurations/tables/projects/proj-type.png)

Also within this form, it is possible to add new project types inside the grid by clicking the ![](/img/neutral/common/new.png) New button: this will add a new row in the grid where the following information can be defined:

**Type**: this is the code for the project type;

**Project Type Description**: this is the description of the project type;

**Numeration**: this is the numbering associated with the project configured specifically;

**Hierarchical Structure**: this flag, if enabled, allows projects to have a hierarchical structure, thus multi-level; 

**Order Type**: an associated order type can be indicated;

**Order Type Descr.**: this is the description of the associated order type; used for creating projects from an order.

**Invoice Type**: an associated invoice type can be indicated, necessary for invoicing projects;

**Invoice Type Description**: this is the description of the associated invoice;

**Template**: this flag indicates that the project type is a template, so it cannot be referenced in other documents, but only used as a model for generating new projects.

**Project Security Enabled**: if checked, it enables the possibility to choose, in the User Permissions tab of the Project Header, the users who have Read Only or Read Write rights on the project (other users will not be able to access it); if not checked, it allows modification of the Project by all users;

**Purchase Request Type**: it is possible to associate a type of purchase request; in this way, it will be possible to generate purchase requests directly from the project. 

There are also some flags in the grid that indicate the various tabs to be shown for the project type.

**Activity**: tab containing all the main and mandatory data for the project line, such as item, quantity, price, and cost summary;

**Service Planning**: tab related to the expected start/end dates, percentage of completion, types of interventions to be used, and any links to other WBS;

**Resources**: resource planning tab;

**Materials**: tab containing the list of materials with their cost;

**Phases**:

**Data**: tab containing general information related to codes for the WIP calculation of the project, reference to tickets, production job orders, CRM contacts. 

**Progress**: 

**Agents**: tab for entering Agents related to the project.

**Invoicing**: tab for filling out the invoicing schedule for the project line;

**Extra Data**: tab for managing extra data;

**Attached Documents**: tab for managing attachments.

**Gantt**: general tab that shows the Gantt chart related to the project. 

**Advance Invoice**: tab for managing advance invoices related to projects.

**Mandatory Turnover**: in the case of a invoiceable project line and the mandatory turnover flag, saving will be blocked.

**Recalculate Start-Finish Date**: if enabled, allows automatic modification of the start and finish date of planning in the WBS project lines. The dates will be updated based on the line quantity if the unit of measure matches the days set in the project parameters, or when new resources are added in the resources tab of the project line.

In the grid below, it is possible to construct the valuation of the WIP within the state of progress of works. For each project, a series of codes can be indicated, which will represent documents to be included in the calculation of the state of progress of works. These codes will then be proposed in the individual project lines. 
After selecting a line from the first grid, the fields to be filled in the second are:

**Origin Type Cost/Revenue**: contains the list of codes of costs/revenues expected for the WIP calculation for projects of that specific type;

**Description**: this is the description of the costs/revenues;

**Type**: indicates whether it is a cost or a profit.

**Filter Expression**: if the field is not filled, all documents expected for the specific code are considered. If, instead, you want to exclude certain documents (e.g., by type, numeration, etc.), it is possible to configure a filtering expression. 

![](/img/it-it/configurations/tables/projects/revenue.png)