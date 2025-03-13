---
title: Project management
sidebar_position: 1
---

In **Fluentis ERP**, a project is a complex set of activities, subject to temporal and resource constraints, aimed at a predefined objective. The monitoring of results occurs through appropriate tools such as dashboards, reports, Gantt charts, workflows, supervisors, and sprints for those using the Agile method.

Projects must be defined analytically, specifying all necessary activities to achieve the objectives, which are represented within a project as WBS nodes. Organizing work into more manageable elements makes understanding the project less complex, allowing all stakeholders to communicate the phases and activities to be carried out; the activities are represented by the WBS levels of greater detail and defined as Work Packages/Tasks. Moreover, project management allows for greater flexibility in strategic terms as it can adapt to continuous external and internal changes.

This area meets the needs of "Product Centric" and "Service Centric" business realities, as it connects across all the areas present in Fluentis ERP through specific functionalities.

The main types of projects can be summarized as follows:

**WBS Projects (Progetti WBS)** - Build projects using the Work Break Down Structure method to enable Waterfall management within individual WBS and Work Packages.

**Commission Type Projects (Progetti di tipo Commessa)** - Allow the management of simple projects where the essential element is the project or commission number aimed at aggregating documents of different nature.

**Repetitive Projects (Progetti di tipo Ripetitivo)** - Create projects aimed at repetitive contracts, primarily characterized by a temporal sequence in billing. Typically, projects with repetitive billing such as rental or support contracts.

**Maintenance Projects (Progetti di Manutenzione)** - Enable projects that manage the scheduled maintenance of internal or external systems of the company. Systems that may not even be owned.

**SAL Type Projects (Progetti di tipo SAL)** - Manage contracts of the State of Progress of Works type. These are projects that foresee the realization of services or products related to ongoing activities. Characterized by the issuance of advance and final billing.

**Manufacturing Type Projects (Progetti di tipo Manufacturing)** - Connect project management to the production and logistics flow with the aim of aggregating costs related to production in the typically MTO (Make to Order) mode.

Below are some examples of business processes based on the reality to be managed:

The image below illustrates how the flow of a service company is organized.

Starting from the definition of customer needs, defining the work team and carrying out a status analysis activity, a WBS type project is built within Fluentis with the specific objectives to be achieved. 
Resource planning is carried out, administrative parts are managed with possible advance invoices, and sprints are monitored. 
Periodically, project reporting and billing are conducted.

![Services](/img/it-it/project-management/projects/BPM_SERVIZI.jpg)

The image below illustrates how the flow of a manufacturing company is organized.

The first step occurs in the sales area, with the formulation of an offer and possible prototypes. Even at the offer stage, it is possible to define budgets related to material and service costs.
When the offer is confirmed, it is not necessary to re-enter all the data from scratch, but it will be sufficient to convert the offer into a project. The project can also integrate a template.
From the project, planned interventions can then be created, monitored through sprints, to conclude with the execution of the interventions and the corresponding billing.

![Production](/img/it-it/project-management/projects/BPM_PROD.jpg)

Summarizing the main flows in the project area:

A project can originate from:
1. manual entry
2. from a project template
3. from a sales offer (Various options available: from offer, from offer and template, appending the offer to an already existing project)

A project can be single-level or multi-level, managing a hierarchical structure.

Within the project, time periods, sales price, various costs, materials, and resources can be included. 
Billing criteria are established, and resources are planned.

The essential data of a project are the lines, which if of type 1-coded / 2-uncoded, must have an item and/or description, UM, and price. Otherwise, they will remain descriptive lines that can always be used in subsequent documents. However, they will not determine a value in billing, unless through manual interventions by the operator.

If resources have been planned in the project, automatic requests for intervention or planned interventions can be generated from the project.

- Planned resources in the project > intervention request > planned intervention > actual intervention > sales invoice
- Planned resources in the project > planned intervention > actual intervention > sales invoice
- Activity declaration > intervention > sales invoice

The use or non-use of the intervention request depends on various needs:
- Management of external portals, where clients/users submit intervention requests, which must later be verified and approved.
- Introducing an intermediate verification step of what has been scheduled before actual planning with planned interventions that increase the counters within the project.

Billing in the project area can occur in 2 ways:
- directly from the project (common for recurring billing in cases of projects for managing fees, licenses, etc.) and for advance invoices
- from interventions.

Consequently, all documents to be invoiced must flow into the interventions. In fact, an activity marked as billable can be automatically converted into an intervention.

Instead, for payroll/employee management, all activity declarations must be present. If the operator enters an intervention, when the intervention state is "Approved," the activity for the employee's hour count can be automatically generated.

It follows that interventions and activities are documents linked to each other:
from intervention > into activity
from activity (if billable) > into intervention

For more details, consult the specific pages for each document, where alongside explanations and indications on the configurations to be made, the priorities with which the configurations are read and the connection with other documents will also be illustrated.