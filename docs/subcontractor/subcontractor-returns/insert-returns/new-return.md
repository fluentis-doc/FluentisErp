---
title: Nuovo rientro
sidebar_position: 1
---

Tramite questa form è possibile creare manualmente un nuovo rientro di conto lavoro oppure si possono modificare quelli già esistenti.

La form si apre tramite il percorso **Conto Lavoro > Rientri > Nuovo Rientro** oppure tramite il pulsante **Nuovo** che si trova nella form [Ricerca Rientri](/docs/subcontractor/subcontractor-returns/insert-returns/search-returns).

## **1. Dati obbligatori**

L'applicazione richiede di inserire il **Fornitore** (Terzista) intestatario del ordine, utilizzando l'apposito help conti, il **Tipo**, il **Numero** e la **Data rientro** effettivo (che di solito corrisponde alla data corrente).

**Controllato**: il flag viene attivato manualmente dall'utente;  
**Valorizzato e Caricato**: vengono attivati automaticamente nel momento in cui si procede ad eseguire nell'ordine la valorizzazione e la registrazione a magazzino del documento.

> **Rientri previsti**: il pulsante si attiva dopo il salvataggio dei dati obbligatori e apre la form *Evasione da ordine*, all'interno della quale l'utente visualizza tutti gli ordini di conto lavoro che hanno ancora righe parzialmente o completamente inevase e da cui è possibile quindi generare dei rientri;  
> **Registrazione rientri**:

## **2. Testata**

Dopo aver selezionato i dati obbligatori nella sezione superiore, l'utente può continuare l'inserimento dei seguenti dati [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) oppure con il [help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) oppure, in base ai dati inseriti nell'anagrafica del terzista', l'applicazione compila i campi *automaticamente*.

Inserendo il **Fornitore** vengono *proposti* in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica fornitore](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) nei campi corrispondenti al suo indirizzo e nelle *sezioni*:  

- **Divisa**: [Divisa](/docs/guide/common/glossary/glossary-intro#currency), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Nazione**: [Nazione](/docs/guide/common/glossary/glossary-intro#country), [Lingua](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Spedizione**: [Spedizione](/docs/guide/common/glossary/glossary-intro#shipment), [Porto](/docs/guide/common/glossary/glossary-intro#carriage), [Imballo](/docs/guide/common/glossary/glossary-intro#packing), [Listino](/docs/guide/common/glossary/glossary-intro#sales-price-list) e il suo [intervallo di validità](/docs/guide/common/glossary/glossary-intro#validity-date)

### 2.1 Pagamenti

Le **Soluzioni di pagamento** sono riportate in automatico dall'*Anagrafica terzista > tab Pagamenti* e possono essere modificate/cancellate dall'utente.

#### Pulsante specifico  
> **Cancella pagamenti**: utilizzato per cancellare le righe di pagamento selezionate.

### 2.2 Sconti

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica terzista > tab Sconti* e possono essere modificate/cancellate dall'utente.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

## Procedure testata:

### *Evasione da ordine*

In questa finestra, che si apre utilizzando il pulsante *Rientri Previsti* posto sulla ribbon bar, è possibile filtrare gli ordini di conto lavoro.

Nella griglia sottostante compare una riga per ciascun ordine di conto lavoro ancora non evaso o parzialmente evaso.  
L'utente, con un doppio click sulla riga dell'ordine, ha la possibilità di esplodere le righe che devono essere ancora fatte rientrare dal terzista, può selezionarle o inserire la quantità su ciascuna di esse e premere il tasto *Acquisizione* per  trasferire le quantità degli articoli selezionati all'interno della griglia del tab *Articoli* del rientro di conto lavoro.

#### Pulsanti specifici  
> **Ricerca ordini**: consente di applicare i filtri di ricerca all'intero database degli Ordini di Conto Lavoro inseriti e non ancora evasi o solo parzialmente evasi;  
> **Acquisizione**: richiama la procedura che trasferisce nella griglia del tab Articoli Rientrati del rientro di conto lavoro gli articoli selezionati nella finestra sottostante;  
> **Evasione forzata ordine**: richiama la procedura che consente di rendere forzatamente evasa la riga dell'ordine di conto lavoro che l'utente sta trasferendo;  
> **Seleziona tutti**: consente di selezionare tutte le righe presenti nella sezione di destra della finestra in cui compaiono gli articoli da trasferire;  

### *Registrazione rientri*

Vedi dettagli sull'argomento nella [Registrazione rientri](/docs/subcontractor/subcontractor-returns/procedure/returns-record).

## **3. Articoli**

La form è costituita da una griglia, all'interno della quale l'utente può inserire manualmente gli articoli rientrati.

### 3.1 Dati

In questo tab vengono visualizzate le informazioni relative alla riga selezionata nella griglia degli articoli, tra quali:

**Ordine prod.**: si tratta dell'ordine di produzione la cui fase esterna ha generato la riga di ordine di conto lavoro che è stata evasa con la riga di rientro selezionata;

**Progetto**: in questo campo viene visualizzata il progetto legato alla riga del rientro. Di solito viene richiamato il progetto inserito nella riga dell'ordine di conto lavoro da cui è stata generata la riga di rientro;

**Pesi**: vengono riportati il Peso netto e il Peso lordo totali delle righe articolo. Vengono riportati i pesi di anagrafica articolo moltiplicati per la quantità di riga.

### 3.2 Lotti/SN

In questo tab viene data la possibilità di impostare, per la riga selezionata nella griglia, i lotti o i serial numbers da caricare a magazzino con la quantità di articolo rientrata, nel caso che si tratti di più lotti diversi rientrati con la stessa riga di rientro. A seconda del fatto che l'articolo sia gestito a lotti o a serial numbers risulta attivata la corrispondente griglia di questo tab.

:::note Nota
La somma delle quantità dei vari lotti/numeri di serie dovrà corrispondere esattamente alla quantità rientrata della riga articolo.
:::

## **4. Materiali**

In questo tab vengono visualizzati i materiali che il terzista dovrebbe aver utilizzato per produrre ciò che è stato inserito nel tab *Articoli*. La proposta dei materiali viene definita nei Parametri di Conto lavoro, nel campo **Dati materiali proposti**.

La sezione *Articolo* contiene le informazioni della riga selezionata nel tab *Articoli*

### 4.1 Materiali

Per ogni articolo visualizzato sopra si possono inserire i materiali e i loro dettagli, oppure questi dati verranno proposti.

### Dettaglio materiale

In questa tab vengono inseriti i Materiali che non sono stati utilizzati dal terzista, perchè in eccesso o perchè scartati.

#### Campi specifici

**Magazzino**: in questa colonna viene visualizzato il codice del magazzino Resi, ripreso dai parametri di conto lavoro, visualizzato automaticamente solo se viene inserita la quantità resa sulla riga del materiale, editabile dall'utente;

**Causale**: in questa colonna viene visualizzato il codice della causale per il carico dei Resi, ripreso dai parametri di conto lavoro, visualizzato automaticamente solo se viene inserita la quantità resa sulla riga del materiale, editabile dall'utente. Se i materiali non utilizzati dall'utente sono stati scartati, allora la causale non deve avere contropartita. Se invece i materiali sono stati tornati, allora la causale deve avere una contropartita di carico per indicare dove collocare i materiali resi.

**Carico Lotto**
Nella griglia, l'utente può indicare quali siano i lotti dei materiali che sono stati utilizzati dal terzista. Le colonne visualizzate e le regole di utilizzo della griglia sono le stesse rispetto alla griglia lotti del tab Lotti\SN che si trova nel tab *Articoli*.

## **5. Riepiloghi**

Nei Riepiloghi sono presentate le informazioni principali dell'intero documento.

### 5.1 Sconti finali articoli

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 5.2 Spese

Sono proposte le spese inserite nell'anagrafica contatto, nel tab *Spese/Sconti*. In questa griglia eventuali spese devono essere inserite in positivo, eventuali sconti in negativo.      

Questi elementi vengono applicati alla totalità del documento e non sono distribuiti tra le righe degli articoli. Possono includere costi aggiuntivi, sconti globali, o maggiorazioni applicate all'intero documento. Se impostati nell'anagrafica articolo, vengono automaticamente proposti al momento della creazione del documento.

- **Tipo/Descrizione**: permette di scegliere le tipologie di spesa (predefiniti nella tabella [Tipi spese](/docs/configurations/tables/general-settings/expenses-types)), attribuendo alla tipologia la percentuale di spesa da applicare.  
- **Importo spesa**: indica il valore della spesa espresso nella divisa del documento.    
- **IVA**: indica l'aliquota IVA da applicare alle spese inserite.   
- **Percentuale/Valore**: indica se calcolare le spese con una percentuale oppure con un valore monetario predefinito. Selezionando *valore* l'importo della spesa va inserito sotto la voce omonima.      
- **Percentuale**: valore numerico della percentuale di spesa.  

:::note Nota
Se il *Tipo spesa* inserito ha il flag [ripartito](/docs/configurations/tables/general-settings/expenses-types) attivo, durante il carico del rientro a magazzino la spesa sarà ripartita su tutti gli articoli in base agli importi totali di ogni riga articolo. Il risultato della ripartizione della spesa è visibile nella [registrazione di magazzino](/docs/logistics/warehouse/stock-records/record).    
1. Se gli articoli hanno un prezzo: la spesa totale sarà ripartita proporzionalmente sugli importi netti di ciascun articolo; il risultato verrà aggiunto al prezzo iniziale dell'articolo nel campo *Totale importo* della registrazione. Se per alcune righe l'importo è 0, esso sarà considerato come 1 per consentire una ripartizione della spesa su tutti gli articoli.   
2. Se tutti gli articoli hanno prezzo pari a 0: la spesa verrà distribuita equamente tra tutte le righe articolo e, a partire da questa distribuzione, sarà calcolato l'*importo movimento/importo gestionale* nella registrazione, tenendo conto delle quantità di ciascun articolo.   
:::

### 5.3 Totali documento

**Importo lordo articoli**: rappresenta la somma dei valori di tutti gli articoli;  
**Acconto**: rappresenta il valore dell' eventuale acconto ricevuto per il documento;  
**Importo omaggio**: rappresenta l'importo degli articoli di tipo omaggio inseriti nel tab *Articoli*;  
**Totale sconti applicati**: rappresenta il valore totale dei sconti applicati sugli articoli, ma senza i sconti finali;  
**Importo netto articoli**: *Importo lordo articoli* – *Totale sconti applicati*;  
**Totale sconti finali**: rappresenta il valore degli sconti finali espressi in percentuale sull'importo lordo degli articoli;  
**Importo netto sconti finali**: *Importo netto articoli* - *Totale sconti finali*;  
**Spese di incasso**: rappresenta la somma delle spese di incasso inserite nella griglia delle *Spese*;  
**Spese bollo**: rappresenta la somma delle spese di bollo inserite nella griglia delle *Spese*;   
**Imponibile**: *Importo netto articoli* – *Sconti finali* + *Totale spese non documentati* + *Totale spese documentati*;  
**Imposta**: rappresenta la somma dei valori contenuti nei riepiloghi IVA;  
**Totale**: *Imponibile* + *IVA*.