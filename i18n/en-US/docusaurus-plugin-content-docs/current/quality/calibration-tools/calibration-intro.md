---
title: Introduction 
sidebar_position: 1
---

This module allows for the cataloguing and periodic and extraordinary maintenance of the monitoring and measurement tools used to ensure the suitability of products and the delivery of services offered.


## Managed Documents

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/calibration-tools/measurement-tools/measurement-tool-management">Measurement Tools</Link>
        <p>This registry stores the measurement tool used to ensure the suitability of products and the delivery of services offered.</p>
        <p>To the measurement instrument, it is possible to associate purchase information, responsibility, technical/mechanical properties, location, and calibration information.</p>
        <p>If the instrument is subject to calibration and the calibration is internal, it is possible to define what activities must be performed and the values to be detected so that the calibration yields a positive result.</p>
        <p>If the instrument is subject to calibration and the calibration is external, it is possible to define which third-party entity will perform the calibration.</p>
        <p>If a calibration periodicity is entered, the "Schedule new calibrations" button allows for the automatic creation of scheduled calibrations for a desired period.</p>
        <p>As standard, reports are available for: Measurement instruments register* grouped by: *Instrument*, *Category*, *Supplier*, *Location*, *User*, *Expire Warrant* and *Calibration Due Date*, *Register of Instruments not Subject to Calibration*, and *Measurement Tool Card*.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/calibration-tools/calibration-tool/calibration-tool-management">Calibration Tools</Link>
        <p>In the Calibration Tools Management, it is possible to register Internal Calibrations and Calibration Certificates.</p>
        <p>If the instrument is subject to calibration and the calibration is internal, it is possible to enter the detected values for the required positions. Fluentis will automatically assign a positive or negative result for each position and overall.</p>
        <p>If the instrument is subject to calibration and the calibration is external, it is possible to attach the Calibration Certificate received from the third-party entity that performed the calibration. In this case, the result will be manually assigned by the operator.</p>
        <p>As standard, reports are available for: *Instrument Calibration Log* grouped by: *Report*, *Instrument*, and *User*.</p>
    </div>
</div>


## Getting Started

with the **Measurement Tools**:
- you need to define a [*Measurement Tools Category*](/docs/configurations/tables/quality/calibration-tools/measurement-tool-categories)   
- you must enter a new [*Measurement Tool*](/docs/quality/calibration-tools/measurement-tools/measurement-tool-management)   

with **Calibration Tools**:
- you need to define: a [*Calibration Type*], related *Numeration* and a [*Measurement Tool*](/docs/quality/calibration-tools/measurement-tools/measurement-tool-management)   
- to facilitate the management of *Calibration Tools*, set the [*Calibration Tools Parameters*](/docs/configurations/parameters/quality/calibration-tools)   
- you must enter a new [*Calibration Tool*](/docs/quality/calibration-tools/calibration-tool/calibration-tool-management)   


## Links to Other Modules
The *Calibration Tools* module is not linked to any other module.