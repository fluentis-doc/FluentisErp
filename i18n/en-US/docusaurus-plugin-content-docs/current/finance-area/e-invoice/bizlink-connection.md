---
title: Bizlink Configurations for Exchange with ES 
sidebar_position: 7
---

Fluentis allows for the exchange of electronic documents in and out with ES. It is necessary to check the following settings before leveraging this functionality, as Fluentis must be able to communicate with the outside through the BizLink tool.

## Electronic Document Configuration Table 

This table is accessible in Fluentis from Configuration > Tables > General Settings > Electronic Document Configuration.    
The first check to perform is to click *Check connection* in the ribbon bar after opening the table. If all settings have been made correctly, the connection will be enabled. 

:::danger WARNING
If you receive a context error during the connection check, it means that an incorrect server name and database name were provided at the time of service activation. It will be necessary to contact support to provide the correct data.
:::


## BizLink Users Table

This table is accessible in ARM from Home > Connections > BizLink Users.    
On the left grid, there are Users coded with their passwords, while on the right grid, there are the available Connections with the corresponding server names and databases.  
In this table, it is necessary to ensure that the Users set in the left grid have the 'E' flag active in the right grid. 


## BizLink Services 

At this point, you need to open the Services app on your PC and stop the BizLink service.     
Once the service is stopped, you need to open the Services folder (the path can be found in the properties of the BizLink service) and check the keys inside the configuration file. They must match the following:

```xml
        <"GlobalUser" value="FlConServiceUser"/>
        <"GlobalPwd" value="FlConServiceUserPwd"/>
        <"GlobalUrl" value="http://localhost/arm/"/>
```
The user and password must be the same as those present in the previously analyzed BizLink Users Table. If you are unsure, we recommend copying and pasting them.      

At this point, you can delete the text file present in the Services folder and restart the BizLink service. This way, the text file will be recreated. If the text file is not present, execute the .exe file.    
If the text file has no errors, the service will be active. 

:::danger WARNING
If the .exe file closes immediately, then the service is still active or there is some issue with the configuration file.
:::