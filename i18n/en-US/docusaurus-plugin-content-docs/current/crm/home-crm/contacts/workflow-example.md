---
title: Example CRM Contact Workflow 
sidebar_position: 3
---

Below is an example of a Workflow created to manage the customer journey. 
Remember that to be displayed, the Workflow must be included among the Active Workflows of Fluentis:    

![](/img/it-it/crm/workflows.png)

We propose a workflow that includes the following stages: Start > Qualification > Prospect > Lead > Opportunity > Not qualified customer > Customer > Closed.     
The Start stage is the initial State, while the Closed stage is the final one.    
In the image below, the Start stage is selected. In the right grid, for this stage, various data is visible, such as the Code (which must be unique for each stage), any viewing rights, and any colors valid only for that stage. Two mandatory tasks have also been added for it (due to the *Mandatory* flag: without completing this task, it will not be possible to move to the next stage): entering the registry in the company CRM and the first introductory call. It will be possible to add other tasks within the CRM contact, if available; not adding them in this grid does not preclude their use.  

![](/img/it-it/crm/contactworkflow.png)