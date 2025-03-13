---
title: Technical Settings (Impostazioni tecniche)
sidebar_position: 9
---

In order to properly configure the connection between the Fluentis management system and the Fluentis Business Hub service, it is necessary to:
1) configure the Fluentis BizLink Tools Service in Arm                
2) communicate the SQL Server instance name and the database name to be enabled for the connection to the Fluentis Business Hub service (if not done at the time of signing the contract, or if this information has changed, it can be done by sending an email to fatturazione.elettronica@fluentis.com).

**CONFIGURE THE FLUENTIS BIZLINK TOOLS SERVICE**            

To correctly establish communication between the Fluentis management system and the Fluentis Business Hub service, it is necessary to configure the Fluentis BizLink Tool Service, a service automatically installed with application version 538 (and later) that allows managing the connection to multiple databases with a single Bizlink user.                  

:::tip[N.B.]
For proper management of technical settings, it is recommended to always update Fluentis by installing all patches released for the relevant version.
:::

To configure the Fluentis BizLink Tools Service:
1) stop the Fluentis BizLink Tool Service (if active)
2) from the ARM module, access the menu item Connections > Bizlink Users to create the user to which to associate the individual connections:
3) in the Bizlink Users grid, verify the presence of the new user (configured with version 538) FlConServiceUser (Effe elle Con Service User), set with password FlConServiceUserPwd (Effe elle Con Service User Pwd).                 
For the user FlConServiceUser, the database connections for which the Fluentis BizLink Tool Service should be active must be selected in the grid on the right side of the screen (thus the databases for which electronic invoicing is to be made operational).
4) Restart the Fluentis BizLink Tool Service                

To check that the service has recognized the settings of the entered user, you can monitor the log file Fluentis.Bizlink.Tools.Service.Exe.txt, located in the Fluentis server installation folder under the subfolder “\Bin\Logs” (if in doubt about which is the Fluentis installation folder, check the "executable file path" of the service in the properties window of point 1). The log should show a trace for the service's startup (“Starting service”) and INFO-type traces of connector connections (including “INFO Fluentis.BizLink.Tools.Service.FluentisBusinessHubInputConnector,” which are for electronic invoicing). If only the service startup line is present, it means that Bizlink connectors were not found, or that the connection user was not configured correctly in Arm.
If an ERROR trace appears, the specific error indicated should be handled after updating Fluentis to the latest available patch.               

For example, if the error message is “The computer must be trusted for delegation and the current user account must be configured to allow delegation,” this is an issue related to how Windows manages security certificates, which can be corrected by modifying a key in the configuration registry:
1. Press Windows + R
2. Type “regedit” and press enter
3. Navigate to HKEY_LOCAL_MACHINE\Software\Microsoft\Cryptography\Protect\Providers\df9d8cd0-1501-11d1-8c7a-00c04fc297eb
4. In the folder, right-click and select New > DWORD (32 Bit) Value
5. Rename it ‘ProtectionPolicy’
6. Right-click on ‘Protection Policy’
7. Click Edit and change the “Value data” box to 1 and select Base: Hexadecimal

**COMMUNICATE THE SQL INSTANCE NAME AND DATABASE NAME**           

To uniquely identify the database for communication with the Fluentis Business Hub service, it is necessary to obtain, from the Fluentis management system installation servers, the SQL instance name and the database name on which to activate Electronic Invoicing. This information can be obtained directly from the connection displayed in SQL Server Management Studio.         
Alternatively, by executing the SQL statement “select @@servername” on the active connection. This method is particularly necessary if the server has been renamed after the installation of Fluentis: in this case, even though the new name is displayed, SQL Server still retains the old one.
This information should be communicated to Fluentis via email at the address fatturazione.elettronica@fluentis.com; otherwise, when performing the Connection Check with the FBH service in the Electronic Invoicing Configuration menu, the error “The credentials are valid, but execution in this context is not allowed” would be returned.