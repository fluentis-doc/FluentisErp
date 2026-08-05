---
title: Generation of advance collection from sales order
sidebar_position: 7
---

To make an advance collection<!-- incasso anticipato --> on goods ordered by our customer, you do not need to create a proforma invoice, but you must start from the sales module in the sales order<!-- Ordine cliente --> screen.
            
**Step 1**                
Create a new order (a coded item must be entered)  
In the header tab, fill in the fields:
> - order type<!-- tipo ordine -->
> - customer<!-- cliente -->
> - enter delivery date and goods ready date<!-- inserire data consegna e data merce pronta -->
> - confirmed and confirmation date<!-- confermato e data conferma -->
> - Activate the "printed" flag<!-- Attivare il flag “stampato” -->
              
In the lower section, in the PAYMENTS TAB, enter the payment type ANT (advance<!-- anticipo -->) instead of the payment type proposed by the master data. Move to the Items tab and you must enter a coded item, otherwise the procedure will not work. Also, in the item row, the "Sales invoiced<!-- Fatturato vendite -->" field must be filled in.  
Save the order.
               
Go to the summary section, at the bottom open the "deadlines summary<!-- riepilogo scadenze -->" section.  
Select the row in the grid. In the ribbon bar, use the button advance maturity creation.
               
The "advance maturity creation" window opens; indicate the document type (GEN to remain generic) and enter a description, for example "order ... advance collection<!-- ordine … incasso anticipato -->".
                
**Step 2 Register the advance collection<!-- Registro l’incasso anticipato -->**               
            
Enter the administration module and create a New ledger record. In the template, enter: collection or bank transfer collection<!-- incasso o incasso bonifico -->, depending on what is available.
> - In the ribbon bar, use the "Search maturity values" button, double-click to select the entry created from the order.
> - Move to the Registration tab and in the journal, in the description "bank deposits<!-- depositi bancari -->", enter your bank.
> - Save.
> - After saving, a window will appear asking to create the advance invoice<!-- fattura d’anticipo -->. Click yes.
                
**Step 3 Managing advance maturity values**              
               
Enter the "Advance management<!-- Gestione anticipi -->" tab, click Search and select the row of the order of interest. In the ribbon bar, press the "Advance invoicing<!-- Fatturazione anticipi -->" button.  
The "advance maturity creation" window will open. Enter in the various fields the Invoice type (sales invoice advance<!-- fatt. vend. Anticipo... -->), VAT, and the sales invoiced type<!-- tipo fatturato vendite --> ("advances from customers<!-- anticipi da clienti -->" or similar). Send.
              
**Step 4**               
           
After sending, the advance invoice<!-- fattura d’anticipo --> just created will automatically open. Note that without the Printed flag<!-- flag Stampata -->, the invoice will not be posted.  
In the PAYMENTS TAB, delete the payment proposed by the master data (e.g., bank transfer, RIBA, etc.), leaving ONLY the row with payment type ANT (advance<!-- anticipo -->). Save.
               
**Step 5 Post the invoice<!-- Contabilizzare la fattura -->**           
                
In the Sales module, in the Sales invoices<!-- Fatture di vendita --> screen, go to the procedures and post the invoice just created!!! An error may appear. You need to check if, in the "invoice type<!-- tipo fattura -->" you are using, the flag is disabled in the causale parameters:  
Step 6 Create a new sales invoice<!-- Creare una nuova fattura di vendita -->
New sales invoice<!-- Nuova fattura di vendita --> Select any invoice type for an advance invoice<!-- fattura di acconto -->
Enter the customer<!-- cliente --> In the payments, always enter the type ANT (advance<!-- anticipato -->) instead of the one proposed by the master data.
                
In the ribbon bar, use the "Fulfillment from sales orders<!-- Evasione da ordini clienti -->" procedure.  
Select the order and do Transfer with the button in the ribbon bar.  
Save.  
Move to the Items tab and check that in the grid, the item has the appropriate account entered in the "Purchases invoiced<!-- Fatturato acquisti -->" field, otherwise you will get an error at the end. At the top in the ribbon bar, the advance management<!-- gestione acconti --> button will appear. If it does not appear, close the invoice tab and re-enter.
In the advance management<!-- gestione acconti --> screen, move to the "advance reversal<!-- storno acconti -->" TAB.  
Select the relevant row and press the "Create reversal<!-- Crea storno -->" button in the ribbon bar.  
In the ribbon bar, the "Create work closure<!-- Crea chiusura lavori -->" button will be enabled.  
Close the invoice and post the invoice with the usual posting procedure.