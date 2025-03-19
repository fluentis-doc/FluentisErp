For the automatic search of the *Control plan* to be associated with each *ITEM* present in the selected document line, the following methodology is used:  

- for production documents (*Production declarations* and *Production Order Phases*), the *Control Plan* indicated in the *Phase* is considered;   
- for other documents, the account of the *Client* or *Supplier* associated with the *Document type* and the *Date of document* is considered;   
with this information, the *Control Plan* valid as of the document date and for the selected *ITEM* is searched for to associate;   
for each search, if the *Control Plan* is not found, it proceeds with the next combination of values;   
if more than one *Control Plan* is found, the *Control* is still inserted, but a decision must be made on which *Control Plan* to associate among those found;   
the search sequence is as follows:  
   - search among the *Control Plans* of the *Plan Type* indicated as the *Control plan type* of the *Document Type for Import* present in the *Item Control Parameters* and account of the *Customer* or *Supplier* of the document, and subsequently those without a *Customer* or *Supplier* account;   
   - search among the *Control Plans* of other *Plan Types* not indicated as the *Control Plan Type* of the *Document Type for Import* present in the *Item Control Parameters* and the account of the *Customer* or *Supplier* of the document, and subsequently those without a *Customer* or *Supplier* account.   
   - if not found, a warning message is displayed, the *Item Control* is still inserted but without the *Control Plan*, lacking the *Tests* to check, and an indication is added in the *Control Plans Requests*.