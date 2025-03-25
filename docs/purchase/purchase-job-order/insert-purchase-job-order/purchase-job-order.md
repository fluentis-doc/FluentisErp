---
title: Nuova commessa di acquisto
sidebar_position: 1
---

La form si apre tramite il percorso **Acquisti > Commesse Acquisto > Nuova Commessa di Acquisto** oppure dal filtro di ricerca delle commesse di acquisto, mediante il pulsante *Nuova commessa*.

## *Come creare una commessa di acquisti*

## **1. Dati obbligatori**

Per creare una nuova commessa di acquisto l'utente deve inserire i seguenti dati:

- **Fornitore**: può essere inserito usando l'[help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-con-il-help-di-campo) oppure [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-manuale).  
- **Tipo Commessa**: predefinito nella tabella [Tipi commessa di acquisto](/docs/configurations/tables/purchase/purchase-job-order-types). Questo campo determina il range di numerazione del documento che si sta inserendo e propone automaticamente il *Numero* in base alla data inserimento e all'ultimo numero inserito.   
- **Anno/data inserita**: viene proposta automaticamente la data corrente, ma può essere modificata manualmente.   
- **Numero**: ad ogni documento viene assegnato un numero secondo la numerazione specificata dall'utente nella tabella [Numerazione](/docs/configurations/tables/fluentis-numerations). 
- **Numero interno**: dato facoltativo; viene proposto uguale al campo precedente, ma può essere modificato manualmente inserendo una codice alfanumerico diverso.

La form contiene una serie di tab.

## **2. Testata**

Dopo aver selezionato i dati obbligatori nella sezione superiore, l'utente può continuare l'inserimento dei seguenti dati [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-manuale) oppure con l'[help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-con-il-help-di-campo).

Inserendo il **Fornitore** vengono proposti in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica fornitore](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) nei campi corrispondenti al suo indirizzo e nelle sezioni: 

- **Divisa**: sezione contenente i dati [Divisa](/docs/configurations/tables/general-settings/currencies), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/common/glossary/glossary-intro#currency-date).   
- **Nazione**: sezione contenente i dati [*Nazione*](/docs/guide/common/glossary/glossary-intro#country), [Lingua](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).   
- **Spedizione**: sezione contenente i dati [*Spedizioni*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Porto](/docs/guide/common/glossary/glossary-intro#carriage), [Imballo](/docs/guide/common/glossary/glossary-intro#packing), [Listino](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list#listini) predefinito e il suo [intervallo di validità](/docs/guide/common/glossary/glossary-intro#validity-date).
- **Pagamenti**: sezione contenente i dati [*Pagamenti*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), *Sconti*, *Destinazione* e *Vettore*.    

Tutti questi campi possono essere cancellati oppure modificati manualmente dall'utente.

#### Campi facoltativi

> **Spedizione**, *Porto* e *Imballo* sono ripresi dall'anagrafica del fornitore, se presenti, altrimenti possono essere inseriti manualmente.   
> **Listino**: se nell'anagrafica del fornitore c'è un listino con flag *Predefinito* esso sarà proposto in questo campo congiuntamente alle sue date di validità.   

> **Data prevista consegna**: indica la data prevista per la consegna della merce.      
> **Data inizio/fine**: permette di inserire una data inizio e fine per la commessa.   

> **Annotazioni fornitore**: questo campo viene ripreso dall'[anagrafica fornitore](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), ma può essere inserito anche manualmente.   
> **Nostro/Vostro riferimento**: in questi campi solitamente viene indicato un riferimento interno ed un riferimento fornitore per il documento. Se presente, viene ripreso dall'anagrafica fornitore alrimenti può essere inserito manualmente. Questi dati sranno poi riportati nell'ordine fornitore creato mediante [Evasione da progetto*.   
> **Note iniziali**: si possono selezionare le note che sono state inserite in precedenza nella tabella che si trova nel percorso *Configurazione > Utilità > Gestione note codificate*. Per questo l'utente deve effettuare doppio click sul campo *Note iniziale* per aprire Help note codificate e selezionare i dati.   
> **Progetto:** usando l'help di campo si può collegare il documento a un [progetto](/docs/project-management/projects/search-projects-intro). Questa associazione funziona solo al livello della testata dell'articolo.   

> **Stato evasione**: quando la commessa viene evasa tramite un ordine di acquisto il suo *Stato evasione* cambia automaticamente da *Non evaso* a *Parzialmente evaso* o *Evaso*. L'utente può forzare l'evasione di un ordine non totalmente evaso e quando questo succede, viene salvata anche la **Data evasione** nel campo omonimo.   
> **Data conferma**: permette di inserire la data in cui la commessa è stata confermata.     
> **Stampato**: questo flag viene attivato in automatico al momento di lancio della Stampa definitiva mediante il pulsante posto nella ribbon bar. In alternativa può essere attivato manualmente per poter effettuare l'evasione.    
    
:::important Nota
Per poter effettuare l'evasione di una commessa di acquisto all'interno di un Ordine fornitore è enecssario che la commessa abbia una *Data conferma* inserita e che il flag *Stampato* sia attivo.
:::

### 2.1 Pagamenti

Le [Soluzioni di pagamento](/docs/configurations/tables/general-settings/payment-terms) sono riportate in automatico dall'*Anagrafica fornitore > tab Pagamenti* e possono essere modificate/cancellate dall'utente.

Se al [Tipo pagamento](/docs/configurations/tables/general-settings/payment-types) è associato uno sconto finanziario, l'importo dello sconto viene considerato solo ai fini contabili cioè nelle scadenze del documento e non nel totale DDT.

#### Pulsante specifico  

> **Cancella pagamento**: utilizzato per cancellare le righe di pagamento selezionate.


### 2.2 Sconti 

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica fornitore > tab Sconti*. Possono essere modificati/cancellati dall'utente.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.3 Destinazione

Qui viene proposta l'informazione inserita nell'*Anagrafica fornitore > tab Consegne*, solo se esistono dati di default. Il combo box propone tutti i destinatari, le destinazioni e i vettori inseriti nell'anagrafica fornitore.

Gli indirizzi di spedizione (destinatario/destinazione e vettore) possono essere inseriti anche solo descrittivi senza essere precedentemente inseriti tra i contatti. 

### 2.4 Vettore

In questo campo è possibile inserire il *Vettore* che effettuerà la spedizione dell'ordine. Se questo è stato inserito nell'*Anagrafica fornitore > tab Consegne* sarà possibile selezionarlo dal menù a tendina della seconda colonna, in alternativa sarà sufficiente fare doppio click sulla terza colonna (*Vettore*) per selezionare uno dei contatti della società. 

Opzionalmente si possono aggiungere i dettagli della *Targa* del vettore e la *Data/Ora trasporto*.

### 2.5 Extra Data

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

## **3. Articoli**

Per inserire un nuovo articolo nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante *Nuovo articolo* presente nella ribbon bar.

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

### 3.1 Dati obbligatori

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tipo riga** offre la possibilità di selezionare, dalla combo-box, articoli con caratteristiche diverse:
> - *Articolo codificato*: sono gli articoli codificati in anagrafica e possono essere contabilizzati in contabilità analitica e registrati in magazzino. <br />
> - *Articolo non-codificato*: sono articoli descrittivi che possono essere contabilizzati in contabilità analitica ma non possono essere movimentati a magazzino. <br />
> - *Articolo spese*: sono articoli codificati o non-codificati e vengono riassunti in modo distinto nei riepiloghi dei documenti, se l'articolo spesa è codificato e di interesse fiscale verrà movimentato in magazzino, se è non codificato oppure non di interesse fiscale non verranno movimentati a magazzino. <br />
> - *Articolo note*: sono note descrittive riportate nella stampa del documento; non incidono sulla contabilità e sul magazzino.

:::note Nota
Se si parte direttamente con l'inserimento del codice articolo, la sua classe, la descrizione e il tipo riga (*Articolo codificato*) vengono inseriti automaticamente.
:::

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

### 3.2 Dati non obbligatori

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

- **Prezzo**:  il prezzo viene proposto dal listino inserito nell'anagrafica contatto; il listino di riferimento per l'articolo stesso è visualizzato nel tab Dati; lo stesso documento potrebbe contenere articoli con prezzi presi da listini diversi, se nell'anagrafica soggetto sono associati più listini in cascata (vedi [Anagrafica contatti](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list)). Attraverso il doppio click nel campo *Listini* (posto sotto la voce *Progetti*) l'utente ha la possibilità di selezionare un listino diverso da quello di default, dal quale sarà ripreso il prezzo dell'articolo inserito. In assenza del listino, il dato proposto può essere ripreso dal *costo ultimo* di anagrafica articolo.   

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **Tipo fatturato acquisti**: viene proposto il dato inserito nel tab [Generalità](/docs/erp-home/registers/items/create-new-items/item-registry/generality) dell'anagrafica articoli. Se questo non è presente, non viene proposto nessun dato e al momento della contabilizzazione della fattura, sarà considerato il valore inserito nel campo *Costo/Ricavo di contropartita predefinito* dell'anagrafica contatto.

- **Evase forzatamente**: attivando il flag la riga articolo sarà contrassegnata come *Evasa forzatamente* e non sarà più disponibile per ulteriori evasioni.   


### 3.3 Totali

- **Sconti**: vengono proposti tutti gli sconti associati all'articolo, ognuno con la propria base di calcolo e di assegnazione.        

*Pulsante specifico*

> **Cancella sconti**: permette di cancellare lo sconto selezionato dalla griglia corrispondente. 

### 3.4 Dati

All'interno di questo tab vengono riportate/inserite ulteriori informazioni relative all'articolo. 

- **Articolo**: riporta  l'articolo selezionato nella griglia superiore.

- **Variante**: in questo campo è possibile selezionare una variante dell'articolo tra quelle precedentemente codificate nel tab [Varianti](/docs/erp-home/registers/items/create-new-items/item-registry/variants) dell'anagrafica articolo. Se nel listino sono stati inseriti prezzi e/o sconti diversi per ciascuna variante essi saranno aggiornati quando si sleziona una variante diversa dell'articolo.   

- **Nota**: sono le note relative alla riga articolo, possono essere inserite anche tramite l'help note codificate. Saranno riportate in tutti i documenti generati da questo.

- **Magazzino e causale**: vengono proposti il magazzino e la causale di riferimento che saranno riportati anche nell'ordin fornitore generato mediante *Evasione progetto*. 

- **Progetto**: rappresenta il progetto da associare al documento. Se nella testata del documento è stato inserito un progetto, esso sarà riportato su tutte le righe articolo; in alternativa può essere selezionato tramite l'apposito help progetti.

- **Listino**: viene proposto il listino dal quale è stato ripreso il prezzo dell'articolo, con la data inizio/fine validità e con le condizioni particolari (ad es. **Tipo scaglione** di sconto) assegnate all'articolo nel listino.

- **Prezzo manuale**: si attiva automaticamente quando il prezzo dell'articolo è stato inserito o modificato manualmente.

- **Data prevista consegna**: permette di indicare la data in cui è prevista la consegna dell'articolo.   

- **Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo.

### 3.5 Sezione valori

La sezione in basso, a destra, presenta il riassunto dei costi che concorrono alla formazione del prezzo finale di ciascun articolo selezionato nella griglia degli articoli. I campi presenti sono:

-    **Prezzo**: il valore del campo Prezzo;
-    **Quantità**: il valore del campo Quantità o Quantità alternativa, a seconda del flag Prezzo unità di misura alternativa;
-    **Importo di riga**: Prezzo articolo * Quantità articolo;
-    **Totale sconti**: la somma degli sconti dell'articolo, inclusi anche gli sconti finali;
-    **Importo**: Importo lordo - Sconti;
-    **IVA**: Imponibile * aliquota IVA dell'articolo;
-    **Totale**: Imponibile + Imposta.

## **4. Riepiloghi**

Nelle diverse sezioni di questo tab sono presentate le informazioni principali dell'intero documento e alcuni pulsanti specifici.

### 4.1 Sconti finali

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Spese

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.3 Totali documento

- **Note finali commessa**: è un campo descrittivo che può essere compilato dall'utente anche con l'ausilio dell'*Help note codificate*.
- **Importo lordo articoli**: rappresenta la somma dei valori di tutti gli articoli.
- **Acconto**: rappresenta il valore dell'eventuale acconto ricevuto per il documento.
- **Importo omaggio**: rappresenta l'importo degli articoli di tipo omaggio inseriti nel tab *Articoli*.
- **Totale sconti applicati**: rappresenta il valore totale degli sconti applicati sugli articoli, escludendo gli sconti finali.
- **Importo netto articoli**: *Importo lordo articoli* – *Totale sconti applicati*.
- **Sconti finali articoli**: rappresenta il valore degli sconti finali espressi in percentuale sull'importo lordo degli articoli.
- **Importo netto sconti finali**: *Importo netto articoli* - *Totale sconti finali*.
- **Totale articoli spese**: rappresenta il valore delle spese inserite nel tab precedente come articoli di *Tipo spese*.
- **Spese di incasso**: rappresenta la somma delle spese di incasso inserite nella griglia delle *Spese*.
- **Spese bollo**: rappresenta la somma delle spese di bollo inserite nella griglia delle *Spese*.
- **Totale spese/sconti/maggiorazioni**: rappresenta il valore totale delle spese inserite nella griglia *Spese*.
- **Imponibile**: *Importo netto articoli* – *Sconti finali* + *Totale articoli spese* + *Totale spese/sconti/maggiorazioni*.
- **IVA**: rappresenta la somma dei valori contenuti nei riepiloghi IVA.
- **Totale**: *Imponibile* + *IVA*.