---
title: Introduction 
sidebar_position: 1
---

The documents managed in this module serve to increase customer satisfaction by improving the quality of products and services, complying with regulations, and easily collecting, cataloging, and retrieving feedback.   
The management includes handling Complaints, Returned Products, and Service Notifications.   
The information collected can be a valuable aid in navigating the defects and shortcomings of processes.   


## Managed Documents 

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/claims-and-non-compliance/claims/claim">Complaints from Customer</Link>
        <p>Complaints help record dissatisfaction regarding a service or product, allowing the company to recognize and correct potential issues. They are a tool for improving quality and maintaining a good relationship with customers.</p>
        <p>Through the complaint type, two different management models are possible: 8D problem solving and Defect Management.</p>
        <p>For both models, the header data is the same and allows entering: the Person or Business Function responsible for the document, any references to documents: Sales Invoice, Sales Delivery Notes, Goods Receipt, Project, approval information for the Complaint: date and who approved it, data related to the Audit trail, closing information for Complaint management: date and who closed it.</p>
        <p>In the Notifications section, the reason for the complaint, which Production Site the complaint will be assigned to, and data regarding any non-acceptance of the complaint are managed.</p>
        <p>In the Values section, the currency, references for any debit note received, and the Complaint Values are managed, divided into: Total complaint, Management cost, and amount to be credited, all expressed in the indicated currency, along with references for the Credit Note, if generated.</p>
        <p>The management model is driven by the complaint type, and the management changes structurally.</p>
        **model: 8D problem solving **
        <p>In the Complaint in 8D Problem Solving mode, management diversifies into two subsequent sections: Claimed Objects and 8D Management.</p>
        <p>In the first section, we can indicate the items or services that the customer has disputed.</p>
        <p>In the second section, the actual 8D management: the indication of the team that will handle the Complaint along with the Team leader; Immediate containment Actions to ensure that the reported anomaly does not occur again in the short term; the analysis of the Causes that created the non-compliance; the Permanent Actions that must be implemented to ensure that the reported anomaly does not occur again; Validation, in the long term, that the Permanent Actions had the desired effect; the Implementation phases of the Actions taken.</p>
        <p>For each containment or permanent action and for each phase of implementation, it is possible to create a Corrective Action.</p>
        **model: defects management **
        <p>In the Complaint in Defects Management mode, management diversifies from the previous one with the section: Defects Management.</p>
        <p>In this section, it is possible to manage: multiple reported defects and, for each one: the alleged cause, the phase of detection of the defect, severity, effective cause, proposed technical solution, technical decision taken, and commercial resolution; additional sections dedicated to management: the section of items or services that the customer is claiming, which can be valued and with indications, in case of return, of its acceptance; the section for any materials used to remedy the reported defect; the section for the subjects involved in managing the defect, with indications of involvement, expiration date, and management performed.</p>
        <p>For each defect, it is possible to create a Corrective Action and one or more Internal non-compliances, to the supplier or to the customer.</p>
        <p>This management allows the attachment of documents at three levels: for document, for individual defect, and for individual item or service.</p>
        <p>As standard, reports are available for: List of complaints grouped by Customer and Type, Return authorization, Withdrawal notification, Complaint sheet, and dashboards with Pareto analysis of reported Defects and Causes.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/claims-and-non-compliance/non-compliances/non-compliance">Non-compliance (to Supplier, Internal and to Customer)</Link>
        <p>Non-compliances serve to identify and document deviations from established standards or requirements. This process helps ensure that products, services, or processes are correct and improved to maintain quality and safety. Furthermore, it facilitates the adoption of corrective actions to prevent future issues.</p>
        <p>Through the non-compliance type, three different non-compliance managements are possible: to Supplier, Internal, and to Customer.</p>
        <p>For all three modes, the managed information is the same, except for the recipient of the Non-compliance; they differently enable: the Supplier's account, the Customer's account, or the Business Function/Area/Department.</p>
        <p>The header data includes: the Person or Business Function responsible for the document, which Production Site the non-compliance will be assigned, the reason for the complaint, the proposed solution, the supplier's response, data related to the Audit trail, approval information for Non-compliance: date and who approved it, closing information for Non-compliance management: date and who closed it.</p>
        <p>In the Document References section, references are managed to documents that may have created the Non-compliance.</p>
        <p>In the Values section, the currency, references of any debit note if generated, any credit note received, and the Values of the Non-compliance are managed, divided into: Total unprocessed material, Total processed material, Management cost, Amount to be billed, and Recognized amount, all expressed in the previously indicated currency.</p>
        <p>In the Defect Management section, it is possible to manage: multiple reported defects and, for each one: the alleged cause, the phase of detection of the defect, severity, effective cause, proposed technical solution, technical decision taken, and supplier's response; additional sections dedicated to management: the section of items or services being disputed, which can be valued and with indications of any processing costs incurred; the section for any materials used to remedy the reported defect; the section for subjects involved in defects management, with indications of involvement, expiration date, and management performed.</p>
        <p>For each defect, it is possible to create a Corrective Action.</p>
        <p>This management allows the attachment of documents at three levels: for document, for individual defect, and for individual item or service.</p>
        <p>As standard, a Non-compliance Sheet report and dashboards with Pareto analysis of reported Defects and Causes are available.</p>
    </div>
</div>


## To get started  

**Complaints from Customer**:
- you need to define: a [*Complaint Type*](/docs/configurations/tables/quality/claim-and-non-compliance/claim-type) and its *Numeration*, a [*Customer*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) account or a [*Contact*](/docs/erp-home/registers/contacts/create-new-contact/general) and a [*Defect*](/docs/configurations/tables/quality/claim-and-non-compliance/defect-detected)   
- to facilitate the management of *Complaints*, set, for the desired year, the [*Complaint and Non-compliance Parameters*](/docs/configurations/parameters/quality/claim-and-non-compliances/complaints-and-non-compliance) in the *Complaints* section   
- you need to enter a new [*Complaint*](/docs/quality/claims-and-non-compliance/claims/claim)   

**Non-compliances (to Supplier, Internal and to Customer)**:
- you need to define: a [*Non-conformity Type*](/docs/configurations/tables/quality/claim-and-non-compliance/non-compliance-type) and its *Numeration*, a [*Customer or Supplier*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) account or a [*Business Function*](/docs/configurations/tables/quality/general/company-function) and a [*Defect*](/docs/configurations/tables/quality/claim-and-non-compliance/defect-detected)   
- to facilitate the management of *Non-compliances*, set, for the desired year, the [*Complaint and Non-compliance Parameters*](/docs/configurations/parameters/quality/claim-and-non-compliances/complaints-and-non-compliance) in the *Non-compliances* section   
- you need to enter a new [*Non-compliance*](/docs/quality/claims-and-non-compliance/non-compliances/non-compliance)   

## Links to Other Modules 
It is possible to generate:
- from the management of *Complaints*, [*Non-compliances*](/docs/quality/claims-and-non-compliance/non-compliances/non-compliance) for each line of *Reported Defect*;   
- also from the management of *Complaints*, [*Credit Notes*](/docs/quality/corrective-actions/corrective-action-management) from the [*Sales*](/docs/sales/sales-intro) module;   
- from the management of *Non-compliances*, [*Debit Notes*](/docs/quality/corrective-actions/corrective-action-management) from the [*Sales*](/docs/sales/sales-intro) module;   
- from both managements, [*Corrective Actions*](/docs/quality/corrective-actions/corrective-action-management) from the [*homonymous module*](/docs/quality/corrective-actions/corrective-action-intro).