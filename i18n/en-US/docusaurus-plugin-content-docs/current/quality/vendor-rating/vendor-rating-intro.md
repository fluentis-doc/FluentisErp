---
title: Introduction
sidebar_position: 1
---

The rating of suppliers refers to the process of approving potential suppliers and assessing historical suppliers through quantitative and qualitative ratings. The main purpose is to create a ranking of available suppliers based on product/service quality.


## Managed Documents 

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/vendor-rating/initial-vendor-rating">Initial and Periodic Ratings</Link>
        <p>It is a *subjective* rating criterion based on predefined questions (*Check-List*) for *Supplying Classes* posed to potential or historical suppliers.</p>
    </div>
    <div className="card">
###     <Link to="/docs/quality/vendor-rating/vendor-rating-on-nc">Periodic Ratings on Non-Compliance</Link>
        <p>It is an *objective* rating criterion based on the *Non-Compliance* attributed to *Suppliers* within a specific timeframe.</p>
    </div>
</div>


## Getting Started    

For **Initial and Periodic Ratings**:
- You need to define: a [*Rating Type*](/docs/configurations/tables/quality/vendor-rating/vendor-rating-type), an account [*Supplier*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), and a [*Vendor Rating*](/docs/configurations/tables/quality/vendor-rating/vendor-ratings);
- To facilitate the management of *Initial and Periodic Ratings*, set the [*Vendor Qualification Parameters*](/docs/configurations/parameters/quality/vendor-ratings) in the *Initial Ratings* section;   
- You need to enter a new [*Initial Rating*](/docs/quality/vendor-rating/initial-vendor-rating);   

For **Periodic Ratings on Non-Compliance**:
- You need to define a [*Rating Type*](/docs/configurations/tables/quality/vendor-rating/vendor-rating-type);   
- To facilitate the management of *Periodic Ratings on Non-Compliance*, set the [*Vendor Qualification Parameters*](/docs/configurations/parameters/quality/vendor-ratings) in the *Periodic Non-Compliance Ratings* section;   
- You need to enter at least one new [*Supplier Non-Compliance*](/docs/quality/claims-and-non-compliance/non-compliances/non-compliance) with a date within the period you wish to evaluate;   
- You need to process a [*Periodic Non-Compliance Rating*](/docs/quality/vendor-rating/vendor-rating-on-nc);   


## Links to Other Modules 
The *External Origin Documents* module is not linked to any other modules.