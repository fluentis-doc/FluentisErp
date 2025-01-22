---
title: Introduction
sidebar_position: 1
---

The module allows for the recording of all necessary information to ensure correct production and service delivery under controlled conditions.


## Managed Documents 

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/item-control/data-sheets/data-sheet-management">Data Sheets</Link>
        <p>Data Sheets catalog all the information that describes the characteristics of products associated as suitable for a contract, a functional specification, or a specific use.</p>
        <p>Data sheets can be customizable for the Customer.</p>
        <p>Revisions and traceability among desired Data Sheets are managed.</p>
        <p>Standard reports are available for: Data Sheet (for internal use) and Product Details (for commercial use).</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/item-control/control-plans/control-plan-management">Control Plans</Link>
        <p>Control Plans catalog all planned tests, checks, necessary measurements, and the values to be achieved to ensure that associated materials and products fall within the limits of the required properties.</p>
        <p>Through Control Plans it is possible to predefined the checks to be performed during the lifecycle of an item: from incoming material checks, returns from work orders, to checks during the production cycle of an item: before, during, and after the creation of the product.</p>
        <p>Control Plans, as well as Data Sheets, can be customizable for Customer and/or Supplier. This document also manages revisions and traceability among desired Control Plans.</p>
        <p>For each planned test, it is possible to indicate: whether the test is performed internally or by third parties, the category and the measuring tool to be used, the types of required values (Yes/No or Numeric), the typical value, the specified lower and upper limits in percentage or in absolute value, the number of measurements to be taken, and how frequently.</p>
        <p>We list some examples of possible types of Control Plans: Incoming quality checks, Checks for critical suppliers, Production checks, Final testing.</p>
        <p>Standard reports are available for: Control Plan.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/item-control/items-control/item-control-management">Item Control</Link>
        <p>Item Controls allow for the recording of measurements taken, the values detected, and the consequent indication of the compliance of the controlled material, semi-finished product, or finished product.</p>
        <p>We list the documents from which checks can be made on items: Goods Receipts, D.D.T. (Transport Document), and Purchase Invoices, Production Declarations, Phases of production orders, Returns from subcontractors, and Loading Movements. For each type of document, it is possible to specify for which item detail the verification is desired: None, by Lot, by Serial number, or by Load Unit, the type of control to generate, and from which type of Control Plan to search for, as a priority, the tests to be performed.</p>
        <p>It is possible to set color gradations to indicate different states of the controls visible later in the Controls filter.</p>
        <p>Furthermore, it is possible to set whether the recognition of a negative test result is automatically proposed by the system: on the first non-compliant detected value or based on the arithmetic mean of the detected values.</p>
        <p>The management of the insertion and consultation of the measurements includes: the controlled item, the origin Control Plan, the overall result of the measurements, the details of the source document, and for each detected test, all information inherited from the origin Control Plan, the value and the average of the values detected in the Multiple Values Detection session, the result, the operator who detected the values, and with which measuring instrument. From the management, it is also possible to perform the transfer movements of items from the quality control warehouse to the compliant and non-compliance item warehouses.</p>
        <p>Through the M.E.S. solution, integrated into Fluentis, it is possible to enter the aforementioned required information directly and simplified.</p>
        <p>Standard reports are available for: List of Item Controls by Item, List of Item Controls by Customer/Supplier, List of Item Controls by Document type, and Item Label C and NC.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/item-control/certificates-of-analysis/certificate-of-analysis-management">Certificates of Analysis</Link>
        <p>Certificates of Analysis attest to the checks carried out on the product, compliance with the limits indicated in the corresponding Control Plans and Data Sheets, and accompany the sale of the product.</p>
        <p>Standard reports are available for: Certificate of analysis and Declaration of conformity.</p>
    </div>
</div>


## Getting Started   

for **Data Sheets**:
- you must define a [*Type of Data Sheet*](/docs/configurations/tables/quality/item-control/data-sheets-type)   
- you must define a [*Type of Test*](/docs/configurations/tables/quality/item-control/test-type) that will be used in the *Properties* session/tab of the *Data Sheets*   
- to facilitate the management of *Data Sheets*, set the [*Item Control Parameters*](/docs/configurations/parameters/quality/item-control) in the session of *Data Sheets*   
- you need to enter a new [*Data Sheet*](/docs/quality/item-control/data-sheets/data-sheet-management)   

for **Control Plans**:
- you must define a [*Type of Control Plan*](/docs/configurations/tables/quality/item-control/control-plan-type) and its *Numeration*   
- you must define a [*Type of Test*](/docs/configurations/tables/quality/item-control/test-type) that will be used in the *Planned Tests* session/tab of [*Control Plans*](/docs/quality/item-control/control-plans/control-plan-management)   
- to facilitate the management of *Control Plans*, set the [*Item Control Parameters*](/docs/configurations/parameters/quality/item-control) in the session of *Control Plans*   
- you need to enter a new [*Control Plan*](/docs/quality/item-control/control-plans/control-plan-management)   

for **Item Controls**:   
- you must define: a [*Type of Item Control*](/docs/configurations/tables/quality/item-control/item-control-type) and a [*Type of Result*](/docs/configurations/tables/quality/general/result-type)   
- you must define a [*Control Plan*](/docs/quality/item-control/control-plans/control-plan-management) and associate it with an item in the *Associated Items* session/tab or with a phase of a Working Cycle subject to Quality Control   
- to facilitate the management of *Item Controls*, set the [*Item Control Parameters*](/docs/configurations/parameters/quality/item-control) in the session/tab of *Item Controls*   
- you need to enter a new [*Item Control*](/docs/quality/item-control/items-control/item-control-management) using the functionality of [*Import Items to be Controlled*](/docs/quality/item-control/items-control/item-control-import)    

for **Certificates of Analysis**:   
- you must define a [*Type of Certificates of Analysis*](/docs/configurations/tables/quality/item-control/c-o-a-type) and its *Numeration*   
- to facilitate the management of *Certificates of Analysis*, set the [*Item Control Parameters*](/docs/configurations/parameters/quality/item-control) in the session of *Certificates of Analysis*   
- you need to enter a new [*Certificate of Analysis*](/docs/quality/item-control/certificates-of-analysis/certificate-of-analysis-management)