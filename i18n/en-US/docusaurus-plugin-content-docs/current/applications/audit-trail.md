---
title: Audit Trail
sidebar_position: 2
---

**Audit Trail** represents an application component that allows configuring a sort of LOG capable of tracking any operations within Fluentis by any operator.

Very useful and sometimes mandatory in certain business sectors where it is necessary to produce documents related to “who performed,” “what activity,” and especially “when,” that is, in what time frame.

It is possible to produce logs highlighting which values have been modified regarding any data.

Two useful log forms are already available without any configuration:

**Activity Monitoring (Monitoraggio attività)** which displays in real-time the users connected to the system and the forms they are opening. The refresh of the form can occur manually by pressing the button **Refresh (Aggiorna)**, or automatically after pressing **Automatic Data Update (Aggiornamento automatico dati)**.

**Activity Log (Cronologia delle attività)**: this panel automatically tracks and stores all accesses to all forms by any user.

### SPECIFIC LOGS (LOG SPECIFICI)

It is possible to configure a log to keep track of changes or deletions of particular data. For example, we can monitor the changes made to accounting records.

Open Configuration -> **Audit Trail Configuration (Configurazione Audit Trail)** and press **New (Nuovo)**.

Define a code and a description for the new specific log and then, in the underlying grid, set the relevant business object (and optionally, if necessary, its parent object).

By defining the object, the related properties will be displayed, and those to be monitored in order to track changes or deletions can be selected with the flag.

![](/img/it-it/applications/audittrail/audittrail.png)

To **query the LOG**, open **Audit Trail**:

In the form, if **Search** is simply pressed, all operations subject to monitoring will be displayed, and the type of operation will be visible: Insertion, modification, deletion.

In order to view the details and thus the data before and after the modification, **it is necessary to select** in the header area both the type of LOG previously configured through the **Event Log** field and the **Object**.

![](/img/it-it/applications/audittrail/audittrail2.png)