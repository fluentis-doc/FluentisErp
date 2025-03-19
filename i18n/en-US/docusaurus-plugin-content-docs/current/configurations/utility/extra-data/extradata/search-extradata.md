---
title: Extra Data 
sidebar_position: 0
---

## Introductory Aspects 

**ExtraData** are a means to add **new property** to both standard and custom objects of Fluentis without resorting to custom code and therefore compiling custom projects.     
All major functional objects such as items, orders, and invoices are already prepared for the addition of ExtraData.  

![](/img/en-US/extradata/20250311142958.png)
The form for **ExtraData** is accessible from **Configuration** > **Utility** > **ExtraData**.

### Types of ExtraData 

ExtraData can be of 3 types:
* **Simple ExtraData.**
* **Object-based ExtraData.**
* **Datasource-based ExtraData.**

Each type of ExtraData has its own peculiar characteristics.  

![](/img/en-US/extradata/20250311143520.png)

***The ExtraData form appears as follows:*** 

### Ribbon Menu 
The Ribbon menu allows the user to perform operations on ExtraData, specifically:
* Search: allows searching for the existing ExtraData.
* New: allows creating a new ExtraData.
* Edit: allows opening an existing ExtraData in read-write mode.
* View: allows opening an existing ExtraData in read-only mode.
* Remove: allows deleting an existing ExtraData.

### Standard Filter 

The standard filter allows searching for the ExtraData defined in Fluentis by **code**.  

![](/img/en-US/extradata/20250313155146.png)

### Central Body 
The central body presents a grid of results related to the individual Extra Data defined in Fluentis.  
This grid is composed as follows: 

    <table>
        <thead>
            <tr>
                <th>Category</th>
                <th>Attribute</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowspan="3">ExtraData</td>
                <td>Code</td>
            </tr>
            <tr>
                <td>Name</td>
            </tr>
            <tr>
                <td>Description</td>
            </tr>
            
            <tr>
                <td rowspan="3">Business Object</td>
                <td>Code</td>
            </tr>
            <tr>
                <td>Name</td>
            </tr>
            <tr>
                <td>Description</td>
            </tr>

            <tr>
                <td rowspan="2">Data Type</td>
                <td>Data type</td>
            </tr>
            <tr>
                <td>Name</td>
            </tr>

            <tr>
                <td rowspan="2">DataSource</td>
                <td>Code</td>
            </tr>
            <tr>
                <td>Description</td>
            </tr>

            <tr>
                <td rowspan="2">Validity</td>
                <td>Start Validity</td>
            </tr>
            <tr>
                <td>End Validity</td>
            </tr>
        </tbody>
    </table>


Opening the detail form of an ExtraData will give access to the ExtraData parameterization panel.

![](/img/en-US/extradata/20250311160817.png)

The form consists of 3 tabs.
* Header
* Activations
* Propagation 

The **header** refers to the information related to the Extra Data, specifically:

* Code.
* Content Type.
* Widget Type.
* Name.
* Business Object.
* Description.
* Validity Date.
* Viewing Rights.
* Modification Rights. 

The **Activations** tab refers to the **parent objects** of Fluentis on which the ExtraData is attached.  
Each ExtraData can have multiple parent objects.