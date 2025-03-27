---
title: Introduction 
sidebar_position: 1
---

The module allows the operator to create inventory lists, populate them, and compare data on physical stocks with logical stocks. The system, automatically and according to the parameters entered by the user, will proceed to align the logical stocks with the physical ones, thereby aligning the information warehouse with the physical one. Once this operation is completed, it will then be possible to proceed to the valuation of the warehouse.

## Managed documents 

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/physical-inventory/physical-inventory-intro">Physical Inventories</Link>
        <p><Link to="/docs/logistics/physical-inventory/inventory-management/search-physical-inventory" className="bold-link">Physical Inventories</Link></p>
        <p>Allows operators to create inventory lists, conduct physical stock counts, and compare the obtained data with the logical stocks present in the system. Through an automated process, Fluentis facilitates the alignment between physical and logical stocks, thus ensuring accurate resource management optimization.</p>
        <p><Link to="/docs/logistics/physical-inventory/stock-difference" className="bold-link">Inventory Differences</Link></p>
        <p>Ensures effective alignment between physical and logical stocks within the warehouse. This functionality allows operators to systematically manage and record the discrepancies identified, ensuring that every warehouse movement is accurately tracked and accounted for.</p>
        <p><Link to="/docs/logistics/physical-inventory/closing-history" className="bold-link">Closing History</Link></p>
        <p>Allows access to historical data related to warehouse closures, enabling operators to monitor and analyze stock variations over time. This functionality allows for consulting detailed information such as the last cost, average cost, and warehouse stocks, all generated through the valuation process.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-history" className="bold-link">Warehouse History</Link></p>
        <p>Allows users to consult historical data related to warehouse operations. This functionality provides a detailed archive of closures and valuations made over time, offering the possibility to analyze information such as the last and average cost of each item, as well as specific stocks associated with each closure.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-valorization" className="bold-link">Warehouse Valuation</Link></p>
        <p>Allows operators to perform warehouse closures as of a specified date, recording the remaining stocks and allowing for the alignment of logistical information with accounting information, thus ensuring accurate management of resources and associated costs.</p>
        <p><Link to="/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity" className="bold-link">Valued Quantity Inventory</Link></p>
        <p>Ensures that companies have a clear and detailed view of their stocks. Through this report, users can access comprehensive information not only about the physical quantities of items present in the warehouse but also about their value.</p>
    </div>
</div>

## To Start Using  

**Physical Inventory**:
- create items in the [*Items register*](/docs/erp-home/registers/items/create-new-item)        
- correctly define the [*Warehouse template*](/docs/configurations/tables/logistics/warehouse-templates) to be used       
- define the [*Initial Warehouse Parameters*](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)          
- define the [*Stock difference parameters*](/docs/configurations/parameters/logistics/stock-difference/)           
- define an [*Inventory List Type*](/docs/configurations/tables/logistics/stock-lists-types/)        
- create an employee in the [*Employees*](/docs/project-management/registers/employee/new-employee/)


## Connections with Other Modules 
From the [*Warehouse posting*](/docs/logistics/warehouse/stock-records/record), it is possible to view the results of the **inventory** and **warehouse closures**.