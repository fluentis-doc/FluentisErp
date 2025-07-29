---
title: Nuovo DDT di Consegna
sidebar_position: 1
---

La form si apre tramite il percorso **Conto Lavoro > Ordini > Nuovo Ordine di Conto Lavoro** oppure tramite il pulsante **Nuovo** che si trova nella form [Ricerca ordini di C/L](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/new-subcontractor-orders).

## **1. Dati obbligatori**

L'applicazione richiede di inserire il **Fornitore** (Terzista) intestatario del DDT, utilizzando l'apposito help conti presente nella testata del DDT. In automatico verranno proposti: **Anno**, **Numero**, **Data** correnti e il **Tipo DDT di Consegna**(proposto uguale a quello inserito nei *Parametri di Conto Lavoro*), che possono essere modificati dall'utente.

## **2. Testata**

Dopo aver selezionato i dati obbligatori nella sezione superiore, l'utente può continuare l'inserimento dei seguenti dati [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) oppure con il [help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) oppure, in base ai dati inseriti nell'anagrafica del terzista', l'applicazione compila i campi *automaticamente*.

### 2.1 Dati fornitore

Inserendo il **Fornitore** vengono *proposti* in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica fornitore](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) nei campi corrispondenti al suo indirizzo e nelle *sezioni*:  

- **Divisa**: [Divisa](/docs/guide/common/glossary/glossary-intro#currency), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Nazione**: [Nazione](/docs/guide/common/glossary/glossary-intro#country), [Lingua](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Spedizione**: [Spedizione](/docs/guide/common/glossary/glossary-intro#shipment), [Porto](/docs/guide/common/glossary/glossary-intro#carriage), [Imballo](/docs/guide/common/glossary/glossary-intro#packing), [Listino](/docs/guide/common/glossary/glossary-intro#sales-price-list) e il suo [intervallo di validità](/docs/guide/common/glossary/glossary-intro#validity-date)

### 2.2 Dati facoltativi testata

**Stato DDT**: con questi 2 flag viene identificato lo stato del DDT, che può essere stampato (dopo che è stata lanciata la stampa fisica del report del DDT di consegna) e scaricato (dopo che è avvenuto lo scarico del DDT stessa dal magazzino). Se il DDT non è stato stampato non è possibile scaricarlo;  

**Nostro/Vostro riferimento**: quando viene completata la procedura [Evasione da ordine](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), viene proposta anche l'informazione presente nel campo omonimo dell'ordine;  

**Progetto**: usando il [help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) si può collegare il documento a un progetto.  

#### Pulsanti specifici

> [Consegne previste](/docs/subcontractor/delivery-note/insert-delivery-note/new-delivery-note): richiama la procedura per creare un DDT da un ordine. Si attiva con l'inserimento del fornitore e del tipo DDT. L'ordine da evadere dovrà aver impostato il flag *Stampato* e la *Data conferma ordine* valorizzata;  
> **Scarico automatico**: utilizzato per scaricare automaticamente il magazzino con gli articoli selezionati. Questo campo sarà editabile solo una volta attivato il campo *Stampato*.

### 2.3 Pagamenti

Le **Soluzioni di pagamento** sono riportate in automatico dall'*Anagrafica fornitore > tab Pagamenti* e possono essere modificate/cancellate dall'utente.

Se al **Tipo pagamento** è associato uno sconto finanziario, l'importo dello sconto viene considerato solo ai fini contabili cioè nelle scadenze del documento e non nel totale DDT.

Se il documento nasce da un ordine, i tipi pagamento possono essere ripresi dal primo documento o dall'anagrafica fornitore. 

#### Pulsante specifico

> **Inserisci/Cancella pagamenti**: utilizzati per inserire/cancellare le righe di pagamento selezionate.

### 2.4 Sconti

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica fornitore > tab Sconti* e possono essere modificate/cancellate dall'utente.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.5 Agenti

Indica il codice agente e la sua provvigione per ogni riga articolo. Viene proposto il codice e la percentuale definiti nell'*Anagrafica terzista > tab Agenti*.

Se la provvigione non è collegata al terzista nella sua anagrafica, comunque deve essere inserito l'agente ma con provvigione NULL perché se fosse con provvigione 0, significherebbe che l'agente è collegato all'agente ma non percepisce provvigione.

La stessa sezione verrà riproposta per ogni riga articolo nel relativo tab *Agenti*.

#### Pulsante specifico

**Cancella agenti**: permette di cancellare gli agenti selezionati.

## **Procedure testata:**

### *Evasione DDT*

Nella testata del DDT di consegna, premendo il pulsante **Consegne Previste** si aprirà la form dove è possibile filtrare gli ordini relativi al cliente del documento.

Tramite questa procedura è possibile creare un DDT di consegna dall'evasione del relativo ordine. E' quindi possibile inserire gli articoli all'interno del DDT, evadendo totalmente o parzialmente un intero ordine o una riga.

Per poter utilizzare questa procedura vi sono delle condizioni iniziali che devono essere rispettate:

 -  i/il fornitore degli ordini deve essere lo stesso del DDT;
 -  l'ordine che si vuole evadere deve avere impostato il flag *Stampato*;
 -  i tipi documento devono essere compatibili.

#### Procedimento

I filtri per fornitore e divisa verranno riportati in automatico in base al fornitore selezionato nel DDT.

Una volta impostati tutti i *Filtri* desiderati, cliccando sul pulsante di *Ricerca* verrà visualizzata nella griglia una riga per ciascun ordine stampato e non evaso oppure evaso parzialmente.

:::note AVVISO
La procedura riprende tutti i dati presenti nell'ordine e come conseguenza saranno applicate le condizioni presenti nell'ordine, anche se queste attualmente sono cambiate.
:::

Nella griglia di risultati, l'utente ha poi la possibilità di:

 1. selezionare l'*ordine per intero*. Per farlo basterà selezionare il flag presente all'inizio della riga ordine.
 2. selezionare solo *alcuni* degli *articoli* proposti. Per farlo basterà selezionare il flag presente all'inizio della riga articolo.
 3. selezionare solo *alcuni articoli* ma solo per una *determinata quantità*. In questo caso dovrà andare a modificare la quantità da evadere.

Per completare la procedura bisognerà poi cliccare sul pulsante **Trasferimento**, che andrà a riprendere tutti i dati presenti nell'ordine e li riporterà nel DDT.

#### Pulsanti specifici

> **Ricerca** permette di applicare i filtri di ricerca all'intero del database degli ordini inseriti e non ancora evasi o solo parzialmente evasi.  
> **Trasferimento** permette di trasferire nella griglia del tab Consegne del DDT di conto lavoro gli articoli selezionati nella finestra sottostante.  
> **Esplodi** permette di espandere l'intero albero degli ordini nella griglia sottostante, per visualizzare gli articoli contenuti in essi.  
> **Comprimi** permette di comprimere la visualizzazione delle righe articolo, e di far visualizzare solamente le righe ordine.  
> **Seleziona tutti** permette di selezionare tutti gli articoli dalla lista.  

## **3. Consegna**

In questo tab vengono inseriti i materiali che devono essere consegnati al terzista. Essi possono essere inseriti automaticamente tramite la procedura di *Evasione da Ordine* oppure manualmente dall'utente.


#### Pulsanti specifici
> **Inserisci materiale**: richiama la procedura per inserire un nuovo materiale nella griglia degli articoli del tab 'Consegne'.  
> **Cancella materiale**: richiama la procedura per cancellare un materiale dalla griglia degli articoli del tab 'Consegne'. 

#### Campi specifici

**Ordine C/L numero e anno**: vengono visualizzati il numero e l'anno dell'ordine di conto lavoro da cui la riga articolo è stata prelevata. Se la riga è stata inserita manualmente questa colonna risulta vuota;

**Data prevista consegna**: rappresenta la data di prevista consegna del materiale, ripresa dal tab *Materiali da consegnare* dell'ordine di conto lavoro da cui è stata generata la riga articolo del DDT;

**Previsto rientro**: rappresenta la data di previsto rientro del prodotto finito che dovrà essere realizzato dal terzista utilizzando il materiale in consegna, ripresa dal tab *Articoli da Produrre* dell'ordine di conto lavoro da cui è stata generata la riga articolo del DDT;

**N. riga**: rappresenta un semplice numero progressivo della riga del documento, editabile dall'utente;

**UM**: rappresenta l'unità di misura gestionale dell'articolo in consegna;

**Fase/Sottofase**: vengono visualizzati il codice di fase e il codice di sottofase della fase di produzione dell'ordine di produzione a cui l'articolo è eventualmente legato; questo avviene se l'ordine di conto lavoro da cui è stata creata questa riga di DDT è stato generato da una fase esterna di un ordine di produzione;

**Quantità**: rappresenta la quantità che si è deciso di consegnare al terzista, editabile dall'utente;

**Magazzino**: rappresenta il codice del magazzino da cui viene prelevata la merce da consegnare al terzista. Il codice del magazzino viene proposto uguale a quello impostato nella riga del tab 'Materiali da consegnare' dell'ordine di conto lavoro da cui è stata generata la riga DDT, ma è editabile da parte dell'utente. Se invece è attivo il flag, presente nei Parametri di Conto Lavoro, chiamato 'Considera magazzini in base al tipo DDT di consegna', il magazzino proposto sarà quello impostato nella tabella dei 'Tipi Bolla di Vendita', nell'apposita colonna 'Magazzino';

**Causale**: rappresenta il codice della causale di magazzino che verrà utilizzata per effettuare il prelievo dal magazzino da cui è necessario far uscire la merce da consegnare al terzista. Il codice della causale di magazzino viene proposto uguale a quello impostato nella riga del tab 'Materiali da consegnare' dell'ordine di conto lavoro da cui è stata generata la riga DDT, ma è editabile da parte dell'utente. Se invece è attivo il flag, presente nei Parametri di Conto Lavoro, chiamato 'Considera magazzini in base al tipo DDT di consegna', la causale proposta sarà quello impostata nella tabella dei 'Tipi Bolla di Vendita', nell'apposita colonna 'Causale';

**Prezzo**: rappresenta il prezzo unitario dell'articolo. Si tratta di una colonna editabile dall'utente e non obbligatoria. Si usa solitamente quando la DDT di consegna deve passare da una dogana;

**IVA**: rappresenta il codice IVA, oppure vederlo automaticamente proposto dalla procedura che lo preleva dall'anagrafica del terzista o dall'anagrafica dell'articolo presente nella riga, a seconda dei casi. La combo box attinge dalla tabella 'Aliquote IVA' che si trova nelle 'Impostazioni Generali';

**Tipo fatturato acquisti**: rappresenta il codice del Tipo Fatturato, oppure vederlo automaticamente proposto dalla procedura che lo preleva dall'anagrafica dell'articolo presente nella riga. La combo box attinge dalla tabella 'Tipo Fatturato Acquisti' che si trova nelle 'Tabelle Area Acquisti';     

**Pesi**: vengono riportati il Peso netto e il Peso lordo totali delle righe articolo. Vengono riportati i pesi di anagrafica articolo moltiplicati per la quantità di riga.

### 3.1 Scarico lotti

In questo tab viene data la possibilità di impostare, per la riga selezionata nella griglia, i lotti da scaricare dal magazzino con la quantità di articolo prelevata per l'invio al terzista, nel caso che si tratti di più lotti diversi prelevati con la stessa riga di DDT.

La griglia dei lotti consente all'utente di prelevare il lotto attingendo dall'apposito 'Help Lotti', che filtra tra i lotti disponibili dell'articolo selezionato nella griglia superiore. Le informazioni che vengono riportate nella griglia lotti sono tipo codice lotto, codice lotto, lotto fornitore, tipo lotto, data inizio e data scadenza, quantità del lotto, ubicazione, dati del fornitore del lotto (conto, sottoconto e ragione sociale). Ovviamente la somma delle quantità dei vari lotti dovrà corrispondere esattamente alla quantità consegnata della riga articolo.

### 3.2 Dati materiale

In questo tab vengono visualizzate le seguenti informazioni relative alla riga selezionata nella griglia:

**Classe, codice, descrizione e variante dell'articolo, quantità da consegnare, unità di misura, Magazzino, Causale, Ordine C/L**: si tratta di una serie di informazioni semplicemente riportate dalla riga di DDT selezionata;

**Progetto**: rappresenta la commessa di vendita legata alla riga del DDT. Di solito viene richiamata la commessa di vendita inserita nella riga dell'ordine di conto lavoro da cui è stata generata la riga di DDT;

**Note**: in questo campo l'utente può inserire una nota relativa alla riga selezionata.

## **4. Riepiloghi**

Nei Riepiloghi sono presentate le informazioni principali dell'intero documento.

### 4.1 Sconti finali

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Spese/Sconti/Maggiorazioni finali

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.3 Altri campi

**Volume**: viene proposto il volume cumulativo, risultato dalla somma dei volumi degli articoli (il valore viene ripreso dall'*Anagrafica articolo > tab Pesi/Dimensioni*), quando l'unità di misura del volume degli articoli corrisponde a quella inserita nei parametri della fattura. Sono presi in considerazione solo gli articoli che hanno questo campo compilato;  
**Peso netto**: viene proposto il peso netto cumulativo, risultato dalla somma dei pesi degli articoli (il valore viene ripreso dall'*Anagrafica articolo > tab Pesi/Dimensioni*), quando l'unità di misura del peso degli articoli corrisponde a quello inserito nei parametri della fattura. Sono presi in considerazione solo gli articoli che hanno questo campo compilato;  
**Peso lordo**: viene proposto il peso lordo cumulativo, risultato dalla somma dei pesi degli articoli (il valore viene ripreso dall'*Anagrafica articolo > tab Pesi/Dimensioni*), quando l'unità di misura del peso degli articoli corrisponde a quella inserita nei parametri della fattura. Sono presi in considerazione solo gli articoli che hanno questo campo compilato;  
**Colli**: viene proposto il numero dei colli, sulla base dei dati inseriti nell'*Anagrafica articolo > tab Pesi/Dimensioni*, nei campi *Articoli presenti in un collo* oppure *Colli per formare l'articolo*. Sono presi in considerazione solo gli articoli che hanno questo campo compilato.  

### 4.3 Trasporto

Viene proposto automaticamente il *Trasporto a cura del* presente in *Anagrafica del contatto > tab [Consegna](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)* (radio button: Mittente/Destinatario/Vettore), ma i dati possono essere modificati.

### 4.4 Totali documento

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