---
title: Prototype Management (Gestione Prototipi)
sidebar_position: 2
---

The Prototypes Area represents the response to the ETO (Engineering To Order) model, typical of companies in the Manufacturing or Plant sector, which operate on a project basis, providing the realization of a "custom-made" product for a specific client, potentially always different.

*Integration with bill of materials / cycles*

After defining all the necessary components, at any level of the bill of materials within the prototype, it is possible to obtain the creation of the corresponding bill of materials and analyze any subsequent differences with respect to it. Through this functionality, it is possible to avoid having to reconstruct the product structure in the bill of materials module once the offer is confirmed by the customer. The same procedure is operational within the context of work cycles, where having previously defined the processing phases, it is possible to obtain the working cycle reflecting what is defined within the prototype structure upon confirmation of the assignment.

The form consists of an area with header information, where it is possible to enter:

**Type of prototype (Tipo di prototipo)**: indicates the type of prototype to be used;      
**Year / number / date**: indicate the year, number, and creation date of the prototype, these are entered automatically;          
**Start and end validity date (Data di inizio e fine validità)**: indicates the start and end validity date of the prototype;          
**Project**: indicates the link of the prototype to a possible project;     
**Prototype description**: is a free note field.

:::note Note
It is possible to create a prototype for an item not coded in registry and similarly to insert an uncoded item as a component.
:::

On the right side of the header, there is the possibility to indicate the information for the parent article of the prototype:

- **Codified Item**        
In the case of creating a prototype for a coded article, specify the class, code, and descriptions of the articles, code and description of the variant, and unit of measure;

- **Not-Codified Item**        
In the case of creating a prototype for an uncoded article, manually indicate the description of the article and possibly the variant; if it is a fictitious article, specify the unit of measure and the procurement type.        
This data will then be used to automatically generate the registry of the corresponding article.       

The boxes for **Coded article** and **Uncoded article** are presented open when creating a new prototype, as it is not yet possible to know if a coded article will be used or not; whereas, the **Coded article** box is displayed open and the **Uncoded article** box closed when opening a prototype based on a coded article, and vice versa for a protoype based on an uncoded article.               

Below are specific tabs for:
- Product    
- Components    
- Costs    

### Product

In this tab, there are a number of read-only information related to the article entered in the header.

**Note article**: includes the notes inserted in the [Notes](/docs/erp-home/registers/items/create-new-items/item-registry/notes) tab of the item registry.       

**Weights**: shows the unit of measure of weight and the related values of gross, net, and specific weight.

**Warehouses stock**: includes all warehouses with the corresponding quantities of the current balance of the article.

**Costs**: shows the cost values: last, average, standard, standard next year, and selling price.

**Sales Price List**: displays all selling price lists where this article appears.

**Prototype note (Nata prototipo)**: allows for entering a free note related to the prototype (this is the only editable field in this tab).

### Components

In the **Components** tab, it is possible to create, modify, and view the bill of materials tree of the prototype.
With specific buttons available in the ribbon bar, it is possible to add or remove individual components of the tree; alternatively, this can also be done using the options activated with the right mouse button over the tree component. Another possibility is to use drag and drop to move a component within the tree.
Moreover, through the **Import** button, a pre-existing bill of materials can be imported, so that the selected component will have the imported bill of materials reported underneath.     
In the **General** tab, the selected parent article is shown with class, code, and description; in the *Parent article data*, it is possible to specify the variant, version, quantity of the parent, unit of measure, and whether it is a fictitious article.     
Finally, there is the possibility to indicate the value of *Bom export* between *Keep bill of materials* and *New bill of materials* both on the parent article and for individual components; these are considered when exporting the newly created bill of materials in the prototype, respectively allowing to maintain the existing component (by selecting *Maintain bill of materials*) or overwrite it with the existing one (by selecting *New bill of materials*).      

It is possible to manage both coded and uncoded components within their respective boxes:

- **Codified Item**        
In the case of wanting to insert a coded article into the prototype, indicating class, code, and description of articles, code and description of the variant, and unit of measure;

- **Not-Codified Item**         
In the case of wanting to insert an uncoded article into the prototype, manually indicating the description of the article and possibly of the variant; if it is a fictitious article, specify the unit of measure and the procurement type.        
This data will then be used to automatically generate the registry of the corresponding article.   

Within the **Component data** box, it is possible to specify:          
> **Quantity**: indicates the quantity of the component used to produce the corresponding *Parent quantity*;           
> **Alternative Measurement Unit**: indicates the alternative unit of measure of the component;              
> **Material cost type**: by default, the *Material cost type* that exists in the [Prototyping parameters](/docs/configurations/parameters/logistics/item-prototypes-parameters/) is proposed; it can obviously be changed manually for each component. If a supplier is entered, the procedure for determining the cost of the component first checks if there is a price list for that supplier and enters the found value regardless of the entered *Material cost type*. Therefore, in calculating the cost of the component, the value from the supplier price list entered always takes precedence.           
> **Supplier**: indicates the supplier of the component. By default, this is reported as indicated in the preferred suppliers for the article, but can be changed manually; if the component is an uncoded article, the supplier entered during the article creation will be used as the default supplier in preferred suppliers.       
> **Material cost**: indicates the material cost of the component based on the **Material cost type** entered;         
> **Work cost**: indicates the processing cost of the component given by the sum of labor and machine costs;        
> **Component cost**: indicates the total cost of the component given by the sum of material and processing costs;             
> **Notes**: allows for inserting a free note related to the component.      

If the selected element in the tree is a semi-finished product, in the **Components** tab, it is possible to view the first-level components it is made up of.

In the **Extra data - model** and **Extra data - component** tabs, it is possible to enter the respective extra data related to the parent article and the component; for an in-depth description of the extra data, reference is made to the article [Extra data](/docs/configurations/utility/extra-data/extradata/new-extradata-simple).     

At the bottom of the form, within the **Cycle** tab, it is possible to insert the processing phases related to the individual elements of the tree with their respective times and setup and processing costs; it is also possible to manually enter a cost in the **Manual phase cost (Costo fase manuale)** field, which will have a higher priority in the cost calculation phase, overriding the cost calculated based on the phase times and cost centers.    
The **Cycle** tab is enabled for articles with **Procurement type** of *Production* or *Subcontractor* in the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro).       
Furthermore, in the **Shipping phases** tab, the phase in which the related element must be withdrawn from the warehouse is indicated.

*The export of cycles is under development.*

*Specific buttons*:

> **Prototyping parameters (Parametri prototipazione)**: allows you to open the prototyping parameters, specifically to consult the Prototyping parameters;    
> **Recompute Costs**: allows recalculating the costs of that prototype based on the costs that comprise it;    
> **Items register**: allows you to open the item registry related to the selected element;    
> **MRP Parameters**: allows you to open the MRP parameters related to the selected element;    
> **Codify items**: allows you to code uncoded articles;          
> **Bill of Materials**: allows you to open the bill of materials related to the selected element;    
> **Work cycle**: allows you to open the work cycle related to the selected element;   
> **Compare**: allows you to compare the components present in the *Components* tab with those in the bill of materials present in registry, highlighting the components that are present in both;        
> **Import**: by selecting a component from the tree, you have the option to attach to that component a pre-defined bill of materials and modify it from there;      
> **Export**: saves or overwrites the bill of materials created in the prototypes, working together with the *Bom export* flag in the *General* tab of the *Component* section;    
> **Insert component**: allows adding a component to the selected element;    
> **Delete component**: allows deleting a component from the selected element;    
> **Expand all**: allows you to open the entire tree of the bill of materials;    
> **Copy**: allows copying an item of the bill of materials tree;     
> **Cut**: allows cutting an item of the bill of materials tree;     
> **Paste**: allows pasting an item of the bill of materials tree that has just been copied or cut.        

### Costs

In the **Costs** tab, the prices of the prototype in general (for internal use), for specific customers, or also for specific customers linked to an offer are reported. So it is possible to have multiple valuations of the same prototype. The individual valuations share only the data contained in the *Components* tab, while they may differ based on the conditions that impact value from the industrial cost onward.          
A prototype can be associated with a customer offer directly from the document itself, so I can create a new prototype or associate an already existing one through the appropriate *Create new prototype* and *Associate prototype* buttons.

In addition, it is possible to insert any *Direct costs*, *General costs*, and/or *Other Costs* that will be taken into account in the total calculation.      
All costs in the following categories: **Direct costs**, **General costs**, and **Other Costs** are managed within the [Cost items table](/docs/configurations/tables/general-settings/cost-elements/) where through the *Cost type* field it is possible to define in which category it will be contained.

Specifically, the fields taken into consideration are the following:

**Manual hourly cost**: allows entering a manual hourly cost, which will impact only those components associated with phases;    
**Material cost**: total material cost calculated from the bill of materials tree;    
**Labour costs**: total labor cost calculated from the bill of materials tree;    
**Machine cost**: total machine cost calculated from the bill of materials tree;    
**Manual cost**: not managed;        

**Industrial cost**: total of *Material costs (Costi materiale)*, *Labour costs*, and *Machine cost*;     
**Total direct costs**: total of the costs entered in the *Direct costs* section;    
**Industrial cost + direct costs**: total of *Industrial cost* and *Direct costs*;    
**Refill**: allows specifying the markup as a percentage or value; this value increases the *Industrial cost* or the *Total general costs*, respectively if in the [Prototyping parameters](/docs/configurations/parameters/logistics/item-prototypes-parameters/) the *Calculation of sales price with markup on:* field is indicated as *Direct costs* or *Total costs*;      
**Total cost refilled**: total of *Industrial cost + direct costs* and the markup;     
**Total general costs**: total of the costs entered in the *General costs* section;    
**Total other costs**: total of the costs entered in the *Other costs* section;    
**Correction**: allows entering a value to correct the new selling price;      
**Rounding**: allows deciding whether to round up or down and the order of magnitude;      
**Sales price**: total of *Industrial cost + direct costs*, *General costs*, *Total other costs*, *Correction*, and *Rounding*; if the *New selling price (Nuovo prezzo di vendita)* flag is active in the [Prototyping parameters](/docs/configurations/parameters/logistics/item-prototypes-parameters/), this field is calculated automatically and cannot be modified manually; while if it is disabled, the field can also be edited manually;         
**Production batch**: allows indicating the value of the production lot, which determines an increase or decrease in labor and machine costs, and also affects the unit cost of setup;    
**Total production batch**: total of the *Sales price* calculated for the indicated *Production batch*;     
**Price list deviation (Scostamento da listino)**: indicates the deviation from the selling price list;            
**Price list type**: indicates the type of list;                
**From validity date**: indicates the validity date of the price list;           
**To validity date**: indicates the validity date of the price list.                

**Analysis graphic detail type**

Allows visualizing the cost composition of the prototype through a pie chart, either in a synthetic or analytical manner. 

*Specific buttons*:

> **Update sales price list**: allows updating the price of the article on the corresponding selling price list;         
> **Update offers**: by varying the value of the *Sales price* of a prototype linked to an offer, through this button, it is possible to update the price indicated in the offer itself;     
> **Update customer (Aggiorna cliente)**: allows creating a new valuation row for the prototype associated with the selected customer.         

**Cost calculation method (Modalità di calcolo costi)**

The costs reported for each component are unit costs; in the structure of the prototype bills of materials, the unit and total costs of materials and processing related to the quantities of each component’s parent are reported.

- For purchase articles, processing costs are not calculated and material costs are referred to based on the parameters of the prototypes (warehouse costs, price list costs, and best list price).
The cost is searched in the price list based on the validity date of the prototype; if the validity date of the prototype is not entered, the costs are searched by today's date.
For searching the cost in the price lists, the Usage UM is used also as the Alternative UM of the article, and if a price with a different UM than the Usage is found, the conversion factor of the Alternative UM of the article is applied to calculate the material cost.
The material cost of the component can be entered manually and the material cost of the prototype is recalculated based on the new cost; however, running a cost recalculation from the Ribbon will search for the cost based on the rules of the parameters.

- For job order articles, material costs are derived from the components while processing costs are derived from the phases if present, otherwise they are taken from job order price lists.    

- For production articles, material costs are derived from the components while processing costs are taken from the phases.
The calculation of processing costs prioritizes the manual cost expressed in the phase; if not present, it checks whether the manual hourly cost in the costs tab is present; if not present, the cost is searched in the cost center of labor and machine groups.
For setup, if the setup time is entered, it is considered inclusive of labor and machine and is calculated all as labor using the cost based on the priorities described above; if you want to separate the cost of machine setup from the cost of labor setup, the labor group must be entered to find the cost of its cost center and machine setup, that is, the machine to find the cost of its cost center. If these data are missing, even if the labor setup times and machine setup are entered, they will not be considered for cost calculation.
Each component in the prototype’s bill of materials includes within its material and processing cost also the cost of its components, hence the same applies to the prototype.
The indication of the production lot in the costs tab strictly relates only to the calculation of the unit setup cost to be added to the industrial cost of the prototype; varying the production lot increases or decreases the labor and machine cost in the costs tab.
The cost recalculation procedure recalculates all costs by retrieving data from the parameters for purchases (warehouse costs, price list costs, and best price list) and from the phases for processing.