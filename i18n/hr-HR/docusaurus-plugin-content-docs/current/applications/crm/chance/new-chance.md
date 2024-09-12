---
title: Nuova Opportunità
sidebar_position: 2
---

In questa form verranno inserite tutte le informazioni generali legate all’**Opportunità** che si vuole inserire. La finestra si compone di una prima sezione in cui verranno inserite le informazioni relative ai dati puramente anagrafici della società, di una seconda sezione centrale, composta dalla pipeline flux e dalle attività ad essa collegate, e da una terza composta da diverse tab, tra le quali quella delle attività effettuate sull’opportunità, del suo Dettaglio e delle Eventuali offerte collegate.

## Gestione opportunità

*Pulsanti specifici*:
> **Salva**: pulsante per salvare l’Opportunità e le relative modifiche;  
> **Esegui Workflow: pulsante per eseguire l’azione del Workflow;  
> **Indietro: pulsante per passare allo stadio precedente della Pipeline Flux;  
> **Avanti: pulsante per passare allo stadio successivo della Pipeline Flux;  
> **Calcola valori: pulsante per ricalcolare i valori dell’opportunità sulla base dell’offerta alla quale l’opportunità è collegata.  

Le informazioni relative alla prima sezione della finestra, nel dettaglio sono:

**Tipo opportunità**: serve per definire la [tipologia di Opportunità](/docs/configurations/tables/crm/opportunities/opportunity-type) che si sta inserendo. Sul tipo opportunità è possibile inoltre indicare una pipeline flux di default;

**Pipeline Flux**: deve essere indicata la *Pipeline flux* che dovrà essere visualizzata nell’opportunità;

**Numero**: è un valore assegnato automaticamente da Fluentis che permette di identificare in modo univoco l’opportunità;

**Titolo**: tale campo, di compilazione obbligatoria, permette di definire un titolo per l’opportunità in modo tale da riconoscerla più facilmente;

**Data Creazione**: tale data indica la data di inserimento dell’opportunità in Fluentis;

**Data di Chiusura**: tale campo permette di indicare una data di chiusura dell’opportunità e può fungere da filtro nella maschera di ricerca delle opportunità;

**Contatto**: questo campo serve per indicare il Contatto a cui è intestata l’opportunità. Fa riferimento all’anagrafica contatti del CRM;

**Agente Principale**: questo dato viene reperito automaticamente in base a quanto indicato sull’anagrafica del contatto CRM intestatario dell’opportunità;

**Divisa**: indica la divisa in cui dovranno essere espressi i valori dell’opportunità;

**Tempo Trascorso dall’ultima attività**: indica il tempo trascorso dall’inserimento dell’ultima attività inserita per l’opportunità in oggetto;

**Probabilità Successo**: serve per indicare una % di [probabilità](/docs/configurations/tables/crm/opportunities/probability-progress) di successo legata all’opportunità;

**Qualità Contatto**: serve per indicare la [qualità](/docs/configurations/tables/crm/contacts/contact-quality) del contatto intestatario dell’opportunità;

**Vinto/Perso**: serve per indicare se l’opportunità sia stata vinta o persa;

**Motivazioni**: in questo campo è possibile selezionare le [motivazioni](/docs/configurations/tables/crm/opportunities/closing-reason) della vittoria o della perdità dell’opportunità;

**Descrizione**: serve per dettagliare ulteriormente le motivazioni che hanno portato alla vincita o alla perdita dell’opportunità;

**Valore Netto**: in questo campo viene riportato il totale del valore dell’opportunità al netto degli sconti;

**Importo Lordo**: in questo campo viene riportato il totale del valore dell’opportunità comprensivo degli sconti;

**Sconti**: in questo campo viene riportato il totale degli sconti dell’opportunità;

**Margine Lordo Previsto**: in questo campo, di compilazione manuale, deve essere indicato dall’utente il margine lordo previsto per l’opportunità;

**Data prevista dell’ordine cliente**: in questo campo è possibile indicare una data prevista per l’emissione del primo ordine legato all’opportunità;

**Data prevista DDT di vendita**: in questo campo è possibile indicare una data prevista per l’emissione della prima bolla legata all’opportunità;

**Data prevista fatture di vendita**: in questo campo è possibile indicare una data prevista per l’emissione della prima fattura legata all’opportunità.

Nella terza ed ultima sezione della Gestione Opportunità sono presenti 4 tab:

### Attività contatto

In questa tab vengono visualizzate le attività relative all’opportunità visualizzata. Togliendo la spunta dal campo **Filtra solo le attività correlate a questa opportunità** verranno visualizzate anche le attività del contatto intestatario dell’opportunità, oltre a quelle dell’opportunità stessa.
Per ulteriori informazioni riguardanti alle attività Contatto vi rimandiamo alla sezione [Contatti](/docs/crm/contacts/search-contacts)


### Dettaglio

In questa tab viene mostrato il dettaglio economico dell’offerta. Per ogni riga di dettaglio è possibile indicare:  
**Famiglia Prodotti**: fa riferimento alla tabella Famiglia prodotti;  
**Descrizione**: è la descrizione della Famiglia Prodotti selezionata in precedenza;  
**Importo lordo**: permette di indicare l’importo dell’opportunità, per la famiglia prodotti indicata in precedenza, al netto degli sconti;  
**Sconto**: permette di indicare l’importo dello sconto applicato per la famiglia prodotti indicata in precedenza;  
**Valore netto**: viene calcolato come differenza tra i campi **Importo Lordo** e **Sconto**;  
**Entrate previste**: permette di indicare quello che sarà il valore effettivo previsionale della riga dell’opportunità;  
**Data prevista fattura di vendita**: corrisponde alla data in cui si prevede di fatturare l’opportunità in oggetto;  
**Data prevista DDT di vendita**: corrisponde alla data in cui si prevede di bollettare l’opportunità in oggetto;  
**Data prevista ordine di vendita**: corrisponde alla data in cui si prevede di emettere l’ordine per l’opportunità in oggetto;  
**Data di chiusura**: è la data in cui la riga in oggetto è stata chiusa;  
**Nota**: in questo campo è possibile indicare eventuali note della riga in oggetto.

### Offerte

In questa tab vengono mostrate le offerte collegate all’opportunità. Facendo doppio click sulla riga dell’offerta si accede alla modalità di visualizzazione/modifica dell’offerta stessa.  
**Nota**: in questo campo è possibile indicare delle note aggiuntive.

### Documenti relativi  
In questa tab è possibile visualizzare i file allegati all’opportunità o procedere ad allegare nuovi file con la procedura di drag and drop.