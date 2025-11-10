---
title: Bizlink Configurations for Exchange with ES 
sidebar_position: 7
---

Fluentis allows for the exchange of electronic documents in and out with ES. It is necessary to check the following settings before leveraging this functionality, as Fluentis must be able to communicate with the outside through the BizLink service.  
The settings to verify are three:  
- Electronic document configuration table.  
- BizLink users table.  
- BizLink service.

## Electronic Document Configuration Table 

This table is accessible in Fluentis from Configuration > Tables > General Settings > Electronic Document Configuration.    
The first check to perform is to click *Check connection* in the ribbon bar after opening the table. If all settings have been made correctly, the connection will be enabledas shown in the image below.

![image](/img/it-it/finance-area/e-invoice/bizlink/checkConnections.png)

:::danger WARNING
If you receive a context error during the connection check, or a different message from the one in the image above, it means that an incorrect server name MSSQL and/or database name were provided at the time of service activation. It will be necessary to contact the reference sales representative to provide the correct data as reported below.
:::

To report the correct MSSQL server name and database name, execute the following query on the Fluentis database where you want to activate the electronic invoicing service and communicate the result via screenshot and text so that it can be copied to the sales representative with whom you signed the FBH contract.

```sql
select @@SERVERNAME as NomeServer, DB_NAME() as NomeDatabase
```


## BizLink Users Table

This table is accessible in ARM from Home > Connections > BizLink Users.    
On the left grid, there are Users coded with their passwords, while on the right grid, there are the available Connections with the corresponding server names and databases.  
In this table, it is necessary to ensure that the Users set in the left grid have the 'E' flag active in the right grid for the connections where we want the FBH service to function. Additionally, these credentials must match the GlobalUser and GlobalPwd credentials of the BizLink service.

![image](/img/it-it/finance-area/e-invoice/bizlink/bizlink-users.png)

![image](/img/it-it/finance-area/e-invoice/bizlink/bizlink-users2.png)

## BizLink Service 
The BizLink service can be installed on both Windows servers and GNU/Linux servers with Docker.  
For all details regarding the installation of the service, please refer to the specific documentation at the following [**LINK**](https://docs.fluentis.com/Advanced/FluentisLiveUpdate/docs/integration/BizLink/).  
Now let's see how to configure the service in both scenarios and finally how to verify its correct operation.


### Configuration in Windows Server Environment 

To ensure that the configuration parameters of the BizLink service are correctly set, it is necessary to open the configuration file `appsettings.json`.  
Usually, this file is accessible at the following path `C:\Program Files (x86)\Fluentis S.R.L\Fluentis BizLink SelfApp Service`.  
It is necessary to ensure that the following key-value pairs are present within the appsettings.json file. 

```json
  "GlobalUser": "FlConServiceUser",
  "GlobalPwd": "FluentisUserPwd!",
  "GlobalUrl": "http://localhost/Arm/",
```
Such key-value pairs must match the parameters indicated in Arm as mentioned in the previous paragraph.  
If changes are made to the `appsettings.json` file, it is necessary to restart the BizLink service.

---



### Configuration in GNU/Linux Environment with Docker 
To ensure that the configuration parameters of the BizLink service are correctly set, it is necessary to open the configuration file `appsettings.json`.  
Usually, this file is accessible at the following path `/opt/fluentis/fluentis/bizLink`.   
It is essential to ensure that the following key-value pairs are present in the appsettings.json file.

```json
  "GlobalUser": "FlConServiceUser",
  "GlobalPwd": "FluentisUserPwd!",
  "GlobalUrl": "http://localhost/Arm/",
```

In case changes are made to the `appsettings.json` file, it is necessary to restart the BizLink container.

```
sudo docker compose down && sudo docker compose up -d
```

### BizLink Monitor
The BizLink Monitor is a web page that allows the user to have visibility of the connectors set up in Fluentis.  
If you see the two FBH connectors on this page as shown in the image below, it means you have configured BizLink correctly.  
To access the **BizLink Monitor**, you need to type the following address in the web browser's address bar:
```
http://localhost:5070/
```
:::danger Attention
The term localhost should be replaced with the name of the server where BizLink is installed.    
:::

![image](/img/it-it/finance-area/e-invoice/bizlink/bizlink-monitor.png)

## Conclusions 

To configure the electronic invoicing service at the customer, two fundamental points are needed:  
1. FBH contract and the "Electronic Document Configuration" form functioning.  
2. Active and correctly configured BizLink service.  

If point 1 is not functioning, check with the relevant sales representative.  
If point 2 is not functioning, contact Fluentis support.