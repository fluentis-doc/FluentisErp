---
title: Anagrafiche banche
sidebar_position: 1
---

## **1. Riferimenti**

L'anagrafica banca presenta nel tab **Riferimenti** i dati fondamentali relativi al conto corrente da indicare:

**ISO**: indicare i primi 4 caratteri dell' IBAN, quindi 2 caratteri per il codice nazione (es. IT) + 2 per il codice istituto;

I codici **ABI**, **CAB**, il numero di **C/C** (per le banche italiane si devono indicare 5 caratteri per abi e cab - quindi anche lo zero iniziale - e tutti i 12 caratteri del conto corrente italiano), il codice internazionale **Swift**, il **CIN**;

**Divisa**: specificare la divisa con il quale è espresso il conto bancario;

E' possibile inserire alcuni dati utili per l'interazione con **DocFinance®** (programma di tesoreria esterno al sistema):

**R.B.N.**: rappresenta la tipologia di rapporto (es Conto corrente, conto valutario...)

**Banca Doc Finance**: il nome della banca da utilizzare per l'analisi flussi per banca ed altre funzioni permesse da DocFinance

**Codice banca**: un eventuale codice banca libero;

**SIA** codice per l'invio dei file telematici italiani, es. per le Ricevute bancarie, (se non indicato viene utilizzato quello di default inserito nella tabella Società, Home>Tabelle>Generali).

**Banca d'appoggio** consente di collegare l'anagrafica banca al relativo codice di [**banca d'appoggio**](/docs/configurations/tables/general-settings/reference-bank) generica. Questo può servire per canalizzare automaticamente i movimenti finanziari dei partitari e valutarli nelle analisi di cash flow.

La sezione legata alla *Fatturazione elettronica* non è attualmente in uso.

## **2. Dettaglio**

Nella prima sezione ***Importo Commissioni*** si possono indicare: 

**Per operazione**: utilizzato nell'accredito effetti 
**Per massimo scoperto** (non utilizzato automaticamente), 
**Varie** (non utilizzato automaticamente),
**Per insoluto**: Utilizzato come rivalsa spese e contabilizzazione a costo nella procedura di creazione insoluto e inserita nella testata del nuovo insoluto nel campo apposito.
**Anticipo Fattura** utilizzato per inserire automaticamente una commissione nel modulo [Anticipi&Incassi](/docs/treasury/advance/advances-collections)

Nelle griglie **Attivi**/**Passivi** ci sono gli scaglioni dei tassi di interessi attivi/passivi da applicare.

**Data**: entrata in vigore scaglione;

**Scaglione**: valore fino al quale è valido il tasso;

**Tasso**: valore percentuale;

**Codice Tasso**: combo box che permette la scelta i tipi inseriti nella tabella collegata *Tipo tasso bancario* (*Configurazione > Tabelle > Impostazioni generali > Tipo Tasso Bancario*). La tabella permette di codificare delle tipologie di tasso bancario e definire se sono valide per gli interessi attivi o passivi.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/detail/image04.png)

#### Pulsanti specifici  
> **Cancella attivi**: per cancellare i tassi attivi selezionati.  
> **Cancella passivi**: per cancellare i tassi passivi selezionati. 

## **3. Castelletti**

In questo tab si indicano i castelletti per le presentazioni effetti in banca, distintamente per tipologia al "**Salvo buon fine**", "**Allo sconto**" e per l'**Anticipo** su fatture (selezionando la modalità **Differenziato**) oppure un castelletto unico globale (selezionando la modalità **Globale**).

Il valore del castelletto concesso viene inserito dall'utente sulla base delle condizioni bancarie in essere, mentre il valore del castelletto utilizzato, e quindi del residuo, saranno aggiornati automaticamente da Fluentis sulla base delle distinte di presentazione effetti riferite alla banca dell'anagrafica in uso e gestite nel modulo *Tesoreria*.

#### Pulsante specifico  
> **Aggiorna**: per aggiornare i valori visualizzati nella scheda. 

## **4. Assegni**

Questa scheda è una rubrica manuale dove indicare il dettaglio delle matrici assegni e dei riferimenti dei singoli assegni emessi.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/cheques/image01.png)

#### Pulsanti specifici  
> **Cancella matrici**: per cancellare la matrice selezionata.  
> **Cancella dett. matrici**: per cancellare il dettaglio degli assegni selezionati. 

## **5. Giorni banca**

In questa form si possono associare i giorni valuta alle relative causali di contabilità, in modo da automatizzare il calcolo della data valuta banca nei movimenti contabili (se le causali di contabilità stesse prevedono la gestione dei giorni banca).

L'opzione **Lavorativi** impone la valutazione se il giorno è lavorativo o festivo (tenendo conto anche della tabella Festività definite per l'azienda in Home>Utilità>Festività annuali).

:::note Nota
La causale selezionata dovrà essere abilitata alla visualizzazione del dato relativo alla Data valuta banca.
:::

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/bank-days/image02.png)

In questo modo il dato potrà essere visualizzato all'interno della registrazione contabile che utilizza la causale in oggetto ed è riferita alla banca che ha il settaggio attivo.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/bank-days/image03.png)

#### Pulsanti specifici  
> **Nuovo**: per impostare il cursore all'inserimento di un nuovo dettaglio di giorni.  
> **Cancella**: per cancellare i dettagli dei giorni banca selezionati.