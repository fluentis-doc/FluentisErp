---
title: Nuovo Listino fornitore
sidebar_position: 3
---

La form si apre tramite il percorso **Acquisti > Listini Fornitore > Nuovo Listino**.  

La form si compone di tre parti: *Sezione superiore*, *Articoli* e *Dettagli*.

## **1. Dati obbligatori**

I campi di testata obbligatori per l'inserimento di un nuovo listino sono:

- **Fornitore** per il quale viene creato il listino.  
- **Da data validità**: viene proposta in automatico la data corrente, ma può essere modificata.  
- **Divisa**: viene proposta in automatico la divisa della società, ma può essere modificata.  

:::important Importante
Per rendere un listino valido per un fornitore, è necessario inserirlo nell'anagrafica contatto, tab *Listini*. Consultare la [documentazione](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) dedicata.
:::

### Campi opzionali

- **A data validità**: viene utilizzato nel caso in cui si voglia definire una campagna promozionale o dare una data scadenza al listino. Può essere inserita massivamente su più listini dal filtro di [Ricerca listini] mediante il pulsante *Chiudi*.   
- **Sconto listino da anagrafica**: se nell'[anagrafica fornitore](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) è stata associata una struttura di scontistica aggiuntiva essa sarà riportata in questo campo di sola lettura.  
- **Note**: per inserire eventuali note associate al listino.   

Dopo aver inserito i dati obbligatori di testata è necessario premere il pulsante *Salva* per poter procedere con l'inserimento degli articoli nella griglia.


## **2. Articoli**

In questa sezione verranno indicati gli articoli ed eventuali sconti associati a questo listino. Le colonne presenti nella griglia sono:

- **Classe/Articolo/Descrizione**: contiene il codice dell'articolo da includere nel listino; per inserire un nuovo articolo nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante *Nuovo articolo* presente nella ribbon bar.  
- **Codice/Descrizione Variante**: serve se oltre al codice articolo anche la variante contraddistingue un articolo da un altro.
- **Codice/Descrizione Articolo fornitore**: serve se il codice articolo del fornitore è diverso dal codice articolo della società.
- **Codice/Descrizione Variante articolo fornitore**: serve se oltre al codice articolo anche la variante contraddistingue un articolo fornitore da un altro.
- **Unità di misura**: può essere quella gestionale dell'articolo o una delle sue unità di misura alternative.
- **Marca dell'articolo** se specificata.
- **Quantità**: è la quantità di riferimento del prezzo e viene proposta uguale a 1; se diversa da 1, quando deve essere calcolato il prezzo viene diviso per la quantità del listino.
- **Prezzo** riferito alla divisa del listino; questa colonna è visibile se il listino non è a *Prezzo ivato*, altrimenti è visibile solo il prezzo ivato.
- **Valore aggiuntivo** e **Percentuale aggiuntiva**: vengono utilizzati quando si creano listini di vendita da listini fornitori; al prezzo fornitore viene aggiunto questo valore.

### 2.1 Dettagli

In questa sezione, per ogni articolo del listino, è possibile inserire diverse tipologie di sconto. Nel **Tipo scaglione** è possibile inserire la tipologia di sconto di default da applicare al listino. Al tipo scaglione inserito qui ha precedenza quello eventualmente inserito in anagrafica.
Nelle tab a destra è possibile inserire i vari sconti per il listino; infatti, è possibile che uno stesso articolo di listino abbia diversi sconti associati, ma sarà possibile scegliere lo scaglione da utilizzare direttamente nel documento.

Di seguito vengono spiegati i tipi sconto che si possono inserire.

### 2.2 Sconti

Questi sconti sono fissi e vengono riportati sui documenti indipendentemente dalla quantità o da altre variabili esplicitate nell'ordine: il tipico esempio sono gli sconti commerciali.       
I campi presenti in questa griglia sono:
- **Tipo sconto/Descrizione**: in questo campo serve selezionare il tipo sconto tra quelli codificati.        
- **Priorità**: questo valore viene preso dalle impostazioni inserite nella tabella [Tipi sconto](/docs/configurations/tables/general-settings/discount-types) e indica la priorità per il reperimento dello sconto.       
- **Cascata/Imponibile**: anche questo dato viene ripreso dalle impostazioni inserite nella tabella [Tipi sconto](/docs/configurations/tables/general-settings/discount-types); se lo sconto è a *Cascata*, viene calcolato sull'imponibile decurtato degli sconti già calcolati, se invece è a *Imponibile* viene calcolato sull'imponibile.         
- **Percentuale**: impostare la percentuale di sconto da applicare.       

### 2.3 Sconti a quantità

Questa tipologia di sconto permette di avere diverse percentuali di sconto a seconda della quantità acquistata. Le colonne presenti sono:      
- **Sconto**: in questo campo serve selezionare il [Tipo sconto](/docs/configurations/tables/general-settings/discount-types) tra quelli codificati.         
- **Quantità**: impostare la quantità per la quale verrà attivato lo sconto.          
- **Percentuale**: inserire la percentuale di sconto al raggiungimento della quantità indicata.      

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image07.png)

Nell'esempio riportato se verranno acquistate 2 unità avremo uno sconto del 7%, con 3 unità uno sconto del 10% e così via.

### 2.4 Sconti a Valore

In questa tipologia lo sconto scatta quando si raggiunge un determinato importo per riga documento. Le colonne presenti sono:     
- **Sconto**: in questo campo serve selezionare il [Tipo sconto](/docs/configurations/tables/general-settings/discount-types) tra quelli codificati.            
- **Valore**: impostare un valore superato il quale scatta lo sconto.
- **Percentuale**: inserire la percentuale di sconto da applicare al raggiungimento del valore.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image09.png)

Nell'esempio riportato se per la riga articolo il valore è inferiore a 100 euro, non avremo sconti. Con un valore compreso tra 100 e 200 avremo il 2% di sconto. Se il valore è compreso tra 200 e 300 verrà applicato il 4%. Se il valore supera i 300 euro verrà applicato uno sconto del 6%.

### 2.5 Prezzo per quantità

In questa caso, al raggiungimento di una certa quantità, il prezzo unitario cambia. Le colonne presenti sono:      
- **Quantità**: impostare un valore superato il quale scatta il prezzo "personalizzato".      
- **Prezzo unitario**: inserire il prezzo unitario per la quantità ordinata.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image11.png)

Nell'esempio riportato se per riga la quantità è inferiore a 100 euro, il prezzo sarà quello del listino. Con una quantità compresa tra 100 e 120 avremo un prezzo unitario di 10. Con una quantità compresa tra 100 e 120 avremo un prezzo unitario di 9 e così via.

### 2.6 Note

L'utente può definire delle note con la data di validità delle stesse.

### 2.7 Extra data

Viene riportata la lista degli **Extra data** collegati all'articolo, con la possibilità di aggiungere nuovi extra data utili solo per il documento in oggetto. Il flag *Da stampare* permette di scegliere quali extra data stampare.

### 2.8 Documenti allegati

Viene visualizzato il dettaglio di un eventuale **Documento allegato** (nome, tipo di documento, eventuali note, ns/vs riferimento). Per le istruzioni relative a come allegare un documento si rimanda all'articolo [Allega documenti](/docs/guide/common/operations-with-data/attach-documents).