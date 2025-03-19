Represents the summary of the document deadlines, for each *type* and *payment solution*.  
- **Number**: progressive value of the line.  
- **Payment**: represents the alphanumeric code of the *Payment type* retrieved from *Document Header > Payments tab*.  
- **Amount**: Amount of the calculated deadline. It can be manually overridden, in which case the subsequent flag *Manually edit* is automatically activated. (Automatic controls and alerts regarding the alignment between the deadline values and the total invoice are triggered)  
- **Expiry date**: Date of the calculated deadline. It can be manually overridden, in which case the subsequent flag *Manually edit* is automatically activated.  
- **Collection charges**: Field in which the calculated collection fees are reported.  
- **VAT**: to be applied to collection fees (can also be set manually)  
- **Payment template**: it is possible to directly enter a ledger template in the invoice that leads to an automatic recording of collection/payment. Note: pay attention to the template of the template because it will use the accounts present even without detail account, which is why the following field is present.  
- **Customer/Supplier detail account**: account used to collect/pay (cash or bank, for example) the deadline, overriding the account present in the payment (or collection) ledger template.  
- **Receipt no.**: An eventual receipt number for the money received.  
- **Single**: activates the accounting of the deadline closure in the automated writing.  
- **Discount type**: Type of financial discount.  
- **Mat. value**: Value of the financial discount on collection.  
- **Detail declarations**: This is the reference to the declaration of intent. The VAT applied to collection fees could always be a plafond VAT, so it is also necessary to insert the related declaration of intent here (as for item lines and expense lines).  

**PURCHASE INVOICES:**  

- **Sign**: only the deadlines that have this flag are then managed in payment with the template and account set.  
- **Payment reference models**: Model for creating the payment code. In some foreign locations, each deadline in the invoice requires a code assigned by the invoicer: this code is structured according to specific models (table MB_PaymentReferenceModels), in order to construct the code with an algorithm.  
- **Payment model codes**: This is the code (structured as per the previous model) to be reported in the transaction and then in the payments sent to the bank, so that the bank communicates to the beneficiary which deadline has been paid (thus automating the import from bank movements with transaction closure). From here it is populated inside the transaction and in the Sepa file.  
- **Prepayment date limit**: This is a field provided in the ES invoice trace, the deadline for being able to apply the financial discount.