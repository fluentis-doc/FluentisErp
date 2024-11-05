---
title: Testata
sidebar_position: 1
---

I campi obbligatori per l'inserimento di una richiesta di acquisto sono i seguenti:

- **Tipo**: è un campo obbligatorio. A seconda del [Tipo RDO](/docs/configurations/tables/purchase/purchase-offer-type) scelto, saranno attivate alcune funzionalità, quali ad esempio la *Gestione cespiti*. 
- **Data/Anno**: di default viene proposta la data corrente, ma può essere modificata manualmente.  
- **Numero**: poposto automaticamente in base al Tipo RDO scelto.   
- **Fornitore**: contiene l'anagrafica contatto a cui viene richiesta l'offerta.                
- **Versione**: contiene la versione dell'offerta; è possibile creare una nuova versione con il pulsante della ribbon bar **Nuova versione**.        

:::note Ricorda
Se il documento viene *creato automaticamente* da una RDA, questi dati vengono ripresi dal *documento d'origine* da cui è stata generato.
:::

Inserendo il **Fornitore** vengono proposti in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica fornitore](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) nei campi corrispondenti al suo indirizzo e nelle sezioni:    
>- **Divisa**: sezione contenente i dati [Divisa](/docs/configurations/tables/general-settings/currencies), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/common/glossary/glossary-intro#currency-date).     
>- **Spedizione**: sezione contenente i dati [*Spedizioni*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Porto](/docs/guide/common/glossary/glossary-intro#carriage), [Imballo](/docs/guide/common/glossary/glossary-intro#packing), [Listino](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list#listini) predefinito e il suo [intervallo di validità](/docs/guide/common/glossary/glossary-intro#validity-date).   
>- **Nazione**: sezione contenente i dati [*Nazione*](/docs/guide/common/glossary/glossary-intro#country), [Lingua](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).    
>- **Pagamenti**: sezione contenente i dati [*Pagamenti*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), *Sconti*, *Destinazione* e *Vettore*.    

Tutti questi campi possono essere cancellati oppure modificati manualmente dall'utente.

Altri campi facoltativi sono: 

- **Annotazioni**: questo campo viene ripreso dall'anagrafica fornitore o eventualmente dalla RDA, ma può essere inserito anche manualmente.             
- **Nostro/Vostro riferimento**: in questi campi solitamente viene indicato un riferimento interno ed un riferimento fornitore per il documento. Se presente, viene ripreso dall'anagrafica fornitore alrimenti può essere inserito manualmente.   
- **Note iniziali/finali**: si possono selezionare le note che sono state inserite in precedenza nella tabella che si trova nel percorso *Configurazione > Utilità > Gestione note codificate*. Per questo l'utente deve effettuare doppio click sul campo *Note iniziali/finali* per aprire Help note codificate e selezionare i dati.
- **Progetto**: usando l'help di campo si può collegare il documento a un progetto. Questa associazione funziona solo al livello della testata dell'articolo. Il progetto viene inserito automaticamente se la RDO è stata generata da una RDA che lo contiene. 
- **Data conferma offerta**: permette di inserire la data in cui è stata confermata l'offerta, ma non è un dato obbligatorio; nella procedura di [Creazione ordine fornitore da Offerta fornitore](/docs/purchase/offer-request/procedures/order-creation) è possibile visualizzare e convertire anche le RDO non confermate, attivando l'apposito flag nell'area di filtro.  
- **Data prevista consegna**: se impostata prima dell'inserimento degli articoli all'interno della RDO sarà riportate anche sulle singole righe articolo. In alternativa sarà sufficiente premere il pulsante *Sostituisci data prevista consegna nelle righe* nella ribbon bar per aggiornare le date sulle righe articolo.
- **Data chiusura**: al momento della conversione della RDO in ordine fornitore viene automaticamente valorizzata con la data corrente se è stato abilitato l'apposito flag per chiudere le offerte convertite. 
- **Validità offerta**: permette di impostare una data fine validità per la richiesta di offerta. 

*Pulsanti specifici*
> **Sostituisci data prev. consegna nelle righe**: dopo aver specificato la data prevista consegna in testata è possibile sostituirla in massa nelle righe articolo già inserite.

### Pagamenti

Le [Soluzioni di pagamento](/docs/configurations/tables/general-settings/payment-terms) sono riportate in automatico dall'*Anagrafica fornitore > tab Pagamenti* e possono essere modificate/cancellate dall'utente.   
Se al [Tipo pagamento](/docs/configurations/tables/general-settings/payment-types) è associato uno sconto finanziario, l'importo dello sconto viene considerato solo ai fini contabili cioè nelle scadenze del documento e non nel totale DDT.

*Pulsante specifico*
> **Cancella pagamenti**: utilizzato per cancellare le righe di pagamento selezionate.

### Sconti

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica fornitore> tab Sconti* e non quelli attribuiti alle condizioni di pagamento o a certi articoli. Possono essere modificati/cancellati dall'utente.   

Gli sconti proposti in testata del documento vengono riportati in ogni nuova riga articolo inserita nel documento. Se dopo aver inserito le righe articolo viene inserito un nuovo sconto in testata questo non viene replicato nelle righe articolo già inserite.

*Pulsante specifico*
> **Cancella sconti predefiniti**: utilizzato per cancellare gli sconti selezionati.


### Extra Data

Qui viene proposta l'informazione inserita nell'*Anagrafica del soggetto > tab Extra data*, solo se esistono dati di default.

