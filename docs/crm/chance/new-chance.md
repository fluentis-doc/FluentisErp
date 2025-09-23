---
title: Nuova Opportunità
sidebar_position: 3
---

In questa form verranno inserite tutte le informazioni generali legate all’**Opportunità** che si vuole inserire. La schermata del'Opportunità si compone di tre parti:

- la prima parte in alto presenta eventuali workflow associati; ognuno può creare il proprio workflow in base alle esigenze CRM aziendali; si rimanda alla relativa guida sui Workflow per approfondimenti in merito;    
- la parte centrale presenta la Testata dell'Opportunità, con le informazioni generali e anagrafiche, alcune obbligatorie altre no;    
- sotto si trovano diverse tab, che riportano le diverse operazioni effettuate e che verranno trattate successivamente in questa guida.    


## Gestione opportunità

*Pulsanti specifici* nella ribbon bar:  
> **Salva**: pulsante per salvare l’Opportunità e le relative modifiche;    
> **Calcola valori**: pulsante per ricalcolare i valori dell’opportunità sulla base dell’offerta alla quale l’opportunità è collegata.  

### Testata    

**Tipo opportunità**: serve per definire la [tipologia di Opportunità](/docs/configurations/tables/crm/opportunities/opportunity-type) che si sta inserendo. Sul tipo opportunità è possibile inoltre indicare una pipeline flux di default;

**Numero**: è un valore assegnato automaticamente da Fluentis che permette di identificare in modo univoco l’opportunità;

**Titolo**: tale campo, di compilazione obbligatoria, permette di definire un titolo per l’opportunità in modo tale da riconoscerla più facilmente;

**Data Creazione**: tale data indica la data di inserimento dell’opportunità in Fluentis;

**Data di Chiusura**: tale campo permette di indicare una data di chiusura dell’opportunità e può fungere da filtro nella maschera di ricerca delle opportunità;

**Contatto**: questo campo serve per indicare il Contatto a cui è intestata l’opportunità. Fa riferimento all’anagrafica [contatti](/docs/crm/home-crm/contacts/new-contact) del CRM;

**Agente Principale**: questo dato viene reperito automaticamente in base a quanto indicato sull’anagrafica del contatto CRM intestatario dell’opportunità;    

**Divisa**: indica la divisa in cui dovranno essere espressi i valori dell’opportunità;

**Tempo Trascorso dall’ultima attività**: indica il tempo trascorso dall’inserimento dell’ultima attività inserita per l’opportunità in oggetto;

**Probabilità Successo**: serve per indicare una % di [probabilità](/docs/configurations/tables/crm/opportunities/probability-progress) di successo legata all’opportunità;

**Qualità Contatto**: serve per indicare la [qualità](/docs/configurations/tables/crm/contacts/contact-quality) del contatto intestatario dell’opportunità;

**Vinto/Perso**: serve per indicare se l’opportunità sia stata vinta o persa;

**Motivazioni**: in questo campo è possibile selezionare le [motivazioni](/docs/configurations/tables/crm/opportunities/closing-reason) della vittoria o della perdità dell’opportunità;

**Descrizione**: serve per dettagliare ulteriormente le motivazioni che hanno portato alla vincita o alla perdita dell’opportunità;

**Valore Netto**: in questo campo viene riportato il totale del valore dell’opportunità al netto degli sconti; questo campo viene compilato automaticamente compilando il tab sottostante *Dettaglio*;     

**Importo Lordo**: in questo campo viene riportato il totale del valore dell’opportunità comprensivo degli sconti; questo campo viene compilato automaticamente compilando il tab sottostante *Dettaglio*;     

**Sconti**: in questo campo viene riportato il totale degli sconti dell’opportunità; questo campo viene compilato automaticamente compilando il tab sottostante *Dettaglio*;     

**Margine Lordo Previsto**: in questo campo, di compilazione manuale, deve essere indicato dall’utente il margine lordo previsto per l’opportunità;

**Data prevista dell’ordine cliente**: in questo campo è possibile indicare una data prevista per l’emissione del primo ordine legato all’opportunità;

**Data prevista bolle di vendita**: in questo campo è possibile indicare una data prevista per l’emissione della prima bolla legata all’opportunità;

**Data prevista fatture di vendita**: in questo campo è possibile indicare una data prevista per l’emissione della prima fattura legata all’opportunità.

Nella terza ed ultima sezione della Gestione Opportunità sono presenti 4 tab:

### Workflow logs

In questa tab vengono visualizzate le attività relative al workflow associato a questa Opportunità. Questa tab compare se per questo oggetto è previsto un workflow associato.        

### Dettaglio

In questa tab viene mostrato il dettaglio economico dell’offerta. Per ogni riga di dettaglio è possibile indicare:  
**Famiglia Prodotti**: fa riferimento alla tabella Famiglia prodotti;  
**Descrizione**: è la descrizione della Famiglia Prodotti selezionata in precedenza;  
**Importo lordo**: permette di indicare l’importo dell’opportunità, per la famiglia prodotti indicata in precedenza, al netto degli sconti;  
**Sconto**: permette di indicare l’importo dello sconto applicato per la famiglia prodotti indicata in precedenza;  
**Valore netto**: viene calcolato come differenza tra i campi **Importo Lordo** e **Sconto**;  
**Entrate previste**: permette di indicare quello che sarà il valore effettivo previsionale della riga dell’opportunità;  
**Data prevista fattura di vendita**: corrisponde alla data in cui si prevede di fatturare l’opportunità in oggetto;  
**Data prevista bolle di vendita**: corrisponde alla data in cui si prevede di bollettare l’opportunità in oggetto;  
**Data prevista ordine di vendita**: corrisponde alla data in cui si prevede di emettere l’ordine per l’opportunità in oggetto;  
**Data di chiusura**: è la data in cui la riga in oggetto è stata chiusa;  
**Nota**: in questo campo è possibile indicare eventuali note della riga in oggetto.

### Offerte

In questa tab vengono mostrate le offerte collegate all’opportunità. Facendo doppio click sulla riga dell’offerta si accede alla modalità di visualizzazione/modifica dell’offerta stessa.  
**Nota**: in questo campo è possibile indicare delle note aggiuntive.

### Documenti relativi  
In questa tab è possibile visualizzare i file allegati all’opportunità o procedere ad allegare nuovi file con la procedura di drag and drop.