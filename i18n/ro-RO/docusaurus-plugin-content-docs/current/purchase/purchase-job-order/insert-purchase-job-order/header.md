---
title: Testata
sidebar_position: 2
---

Dopo aver selezionato i dati obbligatori nella sezione superiore, l'utente può continuare l'inserimento dei seguenti dati [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-manuale) oppure con l'[help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-con-il-help-di-campo).

Inserendo il **Fornitore** vengono proposti in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica fornitore](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) nei campi corrispondenti al suo indirizzo e nelle sezioni: 

- **Divisa**: sezione contenente i dati [Divisa](/docs/configurations/tables/general-settings/currencies), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/common/glossary/glossary-intro#currency-date).   
- **Nazione**: sezione contenente i dati [*Nazione*](/docs/guide/common/glossary/glossary-intro#country), [Lingua](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).   
- **Spedizione**: sezione contenente i dati [*Spedizioni*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Porto](/docs/guide/common/glossary/glossary-intro#carriage), [Imballo](/docs/guide/common/glossary/glossary-intro#packing), [Listino](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list#listini) predefinito e il suo [intervallo di validità](/docs/guide/common/glossary/glossary-intro#validity-date).
- **Pagamenti**: sezione contenente i dati [*Pagamenti*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), *Sconti*, *Destinazione* e *Vettore*.    

Tutti questi campi possono essere cancellati oppure modificati manualmente dall'utente.

*Campi facoltativi*:

> **Spedizione**, *Porto* e *Imballo* sono ripresi dall'anagrafica del fornitore, se presenti, altrimenti possono essere inseriti manualmente.   
> **Listino**: se nell'anagrafica del fornitore c'è un listino con flag *Predefinito* esso sarà proposto in questo campo congiuntamente alle sue date di validità.   

> **Data prevista consegna**: indica la data prevista per la consegna della merce.      
> **Data inizio/fine**: permette di inserire una data inizio e fine per la commessa.   

> **Annotazioni fornitore**: questo campo viene ripreso dall'[anagrafica fornitore](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), ma può essere inserito anche manualmente.   
> **Nostro/Vostro riferimento**: in questi campi solitamente viene indicato un riferimento interno ed un riferimento fornitore per il documento. Se presente, viene ripreso dall'anagrafica fornitore alrimenti può essere inserito manualmente. Questi dati sranno poi riportati nell'ordine fornitore creato mediante [Evasione da progetto](/docs/purchase/purchase-orders/insert-purchase-orders/header-procedures).   
> **Note iniziali**: si possono selezionare le note che sono state inserite in precedenza nella tabella che si trova nel percorso *Configurazione > Utilità > Gestione note codificate*. Per questo l'utente deve effettuare doppio click sul campo *Note iniziale* per aprire Help note codificate e selezionare i dati.   
> **Progetto:** usando l'help di campo si può collegare il documento a un [progetto](/docs/project-management/projects/search-projects-intro). Questa associazione funziona solo al livello della testata dell'articolo.   

> **Stato evasione**: quando la commessa viene evasa tramite un ordine di acquisto il suo *Stato evasione* cambia automaticamente da *Non evaso* a *Parzialmente evaso* o *Evaso*. L'utente può forzare l'evasione di un ordine non totalmente evaso e quando questo succede, viene salvata anche la **Data evasione** nel campo omonimo.   
> **Data conferma**: permette di inserire la data in cui la commessa è stata confermata.     
> **Stampato**: questo flag viene attivato in automatico al momento di lancio della Stampa definitiva mediante il pulsante posto nella ribbon bar. In alternativa può essere attivato manualmente per poter effettuare l'evasione.    

    
:::important Nota
Per poter effettuare l'evasione di una commessa di acquisto all'interno di un Ordine fornitore è enecssario che la commessa abbia una *Data conferma* inserita e che il flag *Stampato* sia attivo.
:::
### Pagamenti

Le [Soluzioni di pagamento](/docs/configurations/tables/general-settings/payment-terms) sono riportate in automatico dall'*Anagrafica fornitore > tab Pagamenti* e possono essere modificate/cancellate dall'utente.

Se al [Tipo pagamento](/docs/configurations/tables/general-settings/payment-types) è associato uno sconto finanziario, l'importo dello sconto viene considerato solo ai fini contabili cioè nelle scadenze del documento e non nel totale DDT.

*Pulsante specifico*   
> **Cancella pagamento**: utilizzato per cancellare le righe di pagamento selezionate.


### Sconti 

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica fornitore > tab Sconti*. Possono essere modificati/cancellati dall'utente.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### Destinazione

Qui viene proposta l'informazione inserita nell'*Anagrafica fornitore > tab Consegne*, solo se esistono dati di default. Il combo box propone tutti i destinatari, le destinazioni e i vettori inseriti nell'anagrafica fornitore.

Gli indirizzi di spedizione (destinatario/destinazione e vettore) possono essere inseriti anche solo descrittivi senza essere precedentemente inseriti tra i contatti. 

### Vettore

In questo campo è possibile inserire il *Vettore* che effettuerà la spedizione dell'ordine. Se questo è stato inserito nell'*Anagrafica fornitore > tab Consegne* sarà possibile selezionarlo dal menù a tendina della seconda colonna, in alternativa sarà sufficiente fare doppio click sulla terza colonna (*Vettore*) per selezionare uno dei contatti della società. 

Opzionalmente si possono aggiungere i dettagli della *Targa* del vettore e la *Data/Ora trasporto*.

### Extra Data

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />