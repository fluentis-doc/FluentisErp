---
title: Master Consolidation 
sidebar_position: 5
---

The ***Master Consolidation*** procedure is dedicated to multi-company installations: by setting the master company in a company, we will be able to link the chart of accounts of the 'slave' companies to the account of the master.

The consolidation procedure will fetch data from the selected dimension of the slave companies to transfer it into the master in the target dimension. 
In this step, the detail account of the origin line will be replaced with that of the master company, while for the cost center, we will search for centers *with the same code*.

:::tip Note 
In the case of unmapped detail accounts or centers not uniformly coded, the procedure will return an error.
:::

The result of the consolidation will be to have in the Master company the data of the ***Historical Records Management*** accumulated from all the subsidiary companies, in order to create group reporting. Potentially, we can also apply a new series of calculation drivers in this master company.