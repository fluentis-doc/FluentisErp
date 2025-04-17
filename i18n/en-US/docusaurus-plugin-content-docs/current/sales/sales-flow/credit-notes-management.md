---
title: Returns and Credit Note Management
sidebar_position: 3
---

In the Fluentis Sales module, the management of returns and credit notes allows for the registration and monitoring of the return of goods or services by customers, generating the necessary accounting and logistical documents. This process ensures proper traceability of operations and real-time updates of inventory levels and the accounting positions of customers.

Fluentis supports several types of returns:

- **Return with Credit Note:** return of goods with the issuance of a credit note to offset the invoiced amount. The goods can be returned via a transport document or directly upon issuance of the credit note, based on the warehouse settings.

- **Return without Credit Note:** return of goods without issuing a credit note, for example, for goods replacement. In this case, transport documents will typically be used to move the warehouse inventory.

The return can also be:

- **Partial Return:** return of part of the delivered goods.

- **Total Return:** return of the entire supply.

## Operational Process 

**Return** documents can be generated in two ways:

1) *through the **Reversal** procedure available in the toolbar of the Delivery Note or invoice search.* With this procedure, it is possible to partially or fully reverse the selected documents in the search grid. Once the *Reversal* button is clicked, a pop-up will open where: select the item lines to be reversed with their respective quantities, enter the document type to be created (**only document types with a nature of Return will be selectable**), and enter the warehouse reversal reason.

2) *manually by creating a new Delivery Note or invoice.*  
In this case, it is important to enter a Document Type with Nature *Return*, the customer, and the items to be reversed. However, by manually creating the return, there will be no link to the originating document, which must be manually entered by the user.

If a Delivery Note has been generated, it will be possible to generate the invoice from it, either through the procedure or through manual fulfillment. Upon saving a manually entered credit note, the user will be alerted to enter a negative quantity in the credit notes. This functionality allows for an updated turnover that considers credit notes negatively.

:::note Attention   
In the table [Delivery Note Types](/docs/configurations/tables/sales/delivery-notes-type), the Delivery Note Type *Return (Reso)* must be associated with a [Invoice Type](/docs/configurations/tables/sales/invoices-type) *Credit Note*.
:::

For the valuation of return Delivery Notes in credit notes, there can be various cases depending on the signs of quantity and price in the origin Delivery Note:

1) Delivery Note Return       Qty 10, Price 10 -> invoice line (normal or credit note NC) Qty -10, Price 10  
2) Delivery Note Return       Qty -10, Price 10 -> normal invoice line         Qty 10, Price 10  
3) Delivery Note Return       Qty -10, Price 10 -> NC invoice line                Qty -10, Price 10  
4) Delivery Note Return       Qty 10, Price -10 -> normal invoice line         Qty -10, Price -10  
5) Delivery Note Return       Qty 10, Price -10 -> NC invoice line               Qty -10, Price 10  
6) Delivery Note Return       Qty -10, Price -10 -> normal invoice line         Qty 10, Price -10  
7) Delivery Note Return       Qty -10, Price -10 -> NC invoice line              Qty -10, Price 10  
8) Normal Delivery Note     Qty 10, Price 10 -> NC invoice line                   Qty -10, Price 10  
9) Normal Delivery Note     Qty -10, Price 10 -> NC invoice line                   Qty -10, Price 10  
10) Normal Delivery Note    Qty 10, Price -10 -> NC invoice line                   Qty -10, Price 10  
11) Normal Delivery Note    Qty -10, Price -10 -> NC invoice line                   Qty -10, Price 10  

## Configurations and Parameters 

For the correct management of returns and credit notes, ensure that the following elements are configured:

- **Document Types**: define document types for returns and credit notes.

- **Warehouse and Warehouse Template**: every type of document that moves the warehouse must have associated the [Warehouse](/docs/configurations/tables/logistics/warehouses) and the related [template](/docs/configurations/tables/logistics/warehouse-templates); generally, in returns and credit notes, the movement will be a receipt, as the goods are returned by the customer.

## Management of Mixed Signs - NOTE FOR PARTNERS AND PROJECT MANAGERS 

The ability to account for the document with mixed signs must be specifically enabled through an SQL script.

:::note Technical Note for Activation
Below is the script to execute:

WARNING: The parameter below that controls the sign management mode must now be set to +1, unlike in the past, due to the change in the sign management policy mentioned above.

    select * from [Fluentis].[SH_LocalizationParameters] where [SH_LocalizationParameters].[SHLP_Code] like 'VE-SalesInvoice_CreditNotesPostingSigns'

Identify the Id of the parameter in question.

In the search:

    select * from [Fluentis].[SH_CompanyParameters] where [SH_CompanyParameters].[SHCP_Parameter_SHLP_Id] = ..... identify the row for the company in use through the field SHCP_Company_SHC_Id

And execute an update to the SHCP_Value field.

PARAMETER VALUES:

0 = as is, does not allow mixed signs (credit notes are always forced to be negative)

-1 = credit notes are always inverted (the + becomes -, and the - becomes +)

+1 = currently required type for mixed signs, both invoices and credit notes are accounted for with existing signs, the + remains + and the - remains -.
:::