---
title: Extra Data (Extra Data)
sidebar_position: 0
---

## Introductory Aspects (Aspetti introduttivi)

**ExtraData (ExtraData)** are a means to add **new properties (nuove propriet�)** to both standard and custom objects of Fluentis without resorting to custom code and therefore compiling custom projects.     
All major functional objects such as items, orders, and invoices are already prepared for the addition of ExtraData.  

![](/img/en-US/extradata/20250311142958.png)
The form for **ExtraData (ExtraData)** is accessible from **Configuration (Configurazione)** > **Utilities (Utilit�)** > **ExtraData (ExtraData)**.

### Types of ExtraData (Categori di ExtraData)

ExtraData can be of 3 types:
* **Simple ExtraData (ExtraData semplici).**
* **Object-based ExtraData (ExtraData basati su un oggetto).**
* **Datasource-based ExtraData (ExtraData basati su un datasource).**

Each type of ExtraData has its own peculiar characteristics.  

![](/img/en-US/extradata/20250311143520.png)

***The ExtraData form appears as follows: (La form degli ExtraData si presenta cos� come segue: )*** 

### Ribbon Menu (Ribbon Menu)
The Ribbon menu allows the user to perform operations on ExtraData, specifically:
* Search: allows searching for the existing ExtraData.
* New: allows creating a new ExtraData.
* Edit: allows opening an existing ExtraData in read-write mode.
* View: allows opening an existing ExtraData in read-only mode.
* Remove: allows deleting an existing ExtraData.

### Standard Filter (Filtro Standard)

The standard filter allows searching for the ExtraData defined in Fluentis by **code (codice)**.  

![](/img/en-US/extradata/20250313155146.png)

### Central Body (Corpo Centrale)
The central body presents a grid of results related to the individual Extra Data defined in Fluentis.  
This grid is composed as follows: 

    <table>
        <thead>
            <tr>
                <th>Category (Categoria)</th>
                <th>Attribute (Attributo)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowspan="3">ExtraData</td>
                <td>Code (Code)</td>
            </tr>
            <tr>
                <td>Name (Name)</td>
            </tr>
            <tr>
                <td>Description (Description)</td>
            </tr>
            
            <tr>
                <td rowspan="3">Business Object (Business Object)</td>
                <td>Code (Code)</td>
            </tr>
            <tr>
                <td>Name (Name)</td>
            </tr>
            <tr>
                <td>Description (Description)</td>
            </tr>

            <tr>
                <td rowspan="2">Data Type (Data Type)</td>
                <td>Data type (Data type)</td>
            </tr>
            <tr>
                <td>Name (Name)</td>
            </tr>

            <tr>
                <td rowspan="2">DataSource (DataSource)</td>
                <td>Code (Code)</td>
            </tr>
            <tr>
                <td>Description (Description)</td>
            </tr>

            <tr>
                <td rowspan="2">Validity (Validity)</td>
                <td>Start Validity (Start Validity)</td>
            </tr>
            <tr>
                <td>End Validity (End Validity)</td>
            </tr>
        </tbody>
    </table>


Opening the detail form of an ExtraData will give access to the ExtraData parameterization panel.

![](/img/en-US/extradata/20250311160817.png)

The form consists of 3 tabs.
* Header (Testata)
* Activations (Attivazioni)
* Propagation (Propagazione)

The **header (testata)** refers to the information related to the Extra Data, specifically:

* Code (Codice).
* Content Type (Tipo Contenuto).
* Widget Type (Tipo Widget).
* Name (Nome).
* Business Object (Oggetto di Business).
* Description (Descrizione).
* Validity Date (Data di validit�).
* Viewing Rights (Diritto di visualizzazione).
* Modification Rights (Diritto di Modifica). 

The **Activations (Attivazioni)** tab refers to the **parent objects (oggetti padre)** of Fluentis on which the ExtraData is attached.  
Each ExtraData can have multiple parent objects.