---
title: Nuovo contatto CRM
sidebar_position: 2
---

In questa form verranno inserite tutte le informazioni generali legate all'anagrafica del Contatto che si vuole inserire. La finestra si compone di una prima sezione in cui verranno inserite le informazioni relative ai dati puramente anagrafici della società, di una seconda sezione in alto, composta dal workflow associato e dalle attività collegate, e da una terza composta da diverse tab, tra le quali quella delle attività effettuate sul contatto, dei suoi riferimenti e degli agenti ad esso collegati.

**Procedimento**:

Per continuare la creazione del Contatto CRM, l'utente deve inserire i **campi obbligatori**:

- **Tipo Contatto**: predefinito nella tabella [Tipo contatto](/docs/configurations/tables/crm/contacts/contact-type); verrà automaticamente proposto un Workflow se assocciato al Tipo contatto; serve per definire la tipologia di contatto per distinguerlo, ad esempio, tra un lead ed un customer. Sul **Tipo contatto** è possibile inoltre indicare le tab da visualizzare sull’anagrafica del contatto;

- **Nome**: serve per indicare la ragione sociale o, più in generale, il nominativo del contatto;

I **campi specifici** sono:

**Dettagli indirizzo**: i 3 spazi che lo compongono verranno riempiti in base ai valori inseriti nei successivi campi **Indirizzo**, **Città** e **Provincia**; la modifica di uno di questi campi andrà ad influenzare il relativo spazio e viceversa;

**Informazioni Statistiche**: i 3 spazi che lo compongono verranno riempiti in base ai valori inseriti nei successivi campi **Anno Statistica**, **Statistica Fatturato** e **Numero statistico dipendenti**; la modifica di uno di questi campi andrà ad influenzare il relativo spazio e viceversa;

**Ambiti Email** bisogna indicare se per questa anagrafica è possibile inviare Offerte e/o Newsletter; è importante questo flag perchè altrimenti non sarà possibile inviare nessuna di queste tipologie di documento.

**Qualità contatto** attribuisce delle stelle ai vari contatti: la [qualità](/docs/configurations/tables/crm/contacts/contact-quality) è espressa in modo crescente da una a cinque stelline; questa caratteristica serve per le varie analisi e per definire la qualità del contatto in base ad una classificazione effettuata dall'utente.

**Agente Principale** serve per titolo informativo, ma anche per fini di accesso a Fluentis da parte degli agenti: essi potranno consultare solo i contatti in cui hanno il permesso. 

**Anagrafica** in questo campo viene indicato automaticamente da Fluentis il nomignolo e la ragione sociale del cliente legato al contatto, nel momento in cui quest’ultimo viene convertito a cliente.

Ulteriori **campi**:

**Nome**: serve per indicare la ragione sociale o, più in generale, il nominativo del contatto;

**Partita IVA**: campo composto dal codice ISO internazionale della nazione (definito nella tabella 
**Nazioni** stessa) e dalla relativa partita iva. Il campo è soggetto a test di correttezza del carattere di controllo per le partite iva italiane;

**Indirizzo**: è l’indirizzo della sede legale;

**Città**: deve essere indicata la città del contatto;

**CAP**: è il codice di avviamento postale; 

**Lingua**: deve essere indicata la lingua del contatto. Fa riferimento alla tabella **Lingua**;

**Nazione**: codice della nazione per l’anagrafica in uso, così come definito in tabella;

**Natura Giuridica società**: deve essere indicata la natura giuridica del contatto (ad es. “Società per azioni”);

**Regione**: codice della regione di appartenenza;

**Provincia**: campo editabile all’interno del quale inserire il codice della provincia. È presente un help Province per ricercare nella lista le province;

**Varie**: i 2 spazi che lo compongono verranno riempiti in base ai valori inseriti nei successivi campi **Telefono** e **Fax**. La modifica di uno di questi campi andrà ad influenzare il relativo spazio e viceversa;

**Telefono**: deve essere indicato il numero di telefono principale del contatto;

**Telefono cellulare**: serve per indicare il riferimento del numero cellulare principale del contatto;

**Fax**: serve per indicare il numero di Fax del contatto;

**Email**: serve per indicare la mail principale del contatto. Tale indirizzo mail verrà utilizzato per l’eventuale invio di **Newsletter** o **Offerte** indirizzate al contatto;

**Email secondaria**: serve per indicare un secondo indirizzo mail collegato al contatto;

**Web Site**: serve per indicare l’indirizzo del sito web del contatto;

**Anno statistica**: è un campo a compilazione libera che può essere utilizzato per indicare l’anno a cui fanno riferimento le successive statistiche per il contatto;

**Statistica Fatturato**: serve per indicare il fatturato del periodo statistico indicato nel campo precedente;

**Numero statistico dipendenti**: permette di indicare il numero di dipendenti del contatto per l’anno statistico indicato in precedenza nel campo **Anno statistica**;

**Tempo trascorso dall’ultima attività**: in questo campo viene rilevato il tempo trascorso dall’ultima attività inserita per il contatto;

**Origine contatto**: è possibile indicare come è stato reperito il contatto e quindi la sua [Origine](/docs/configurations/tables/crm/contacts/contact-origin);

**Codice Fiscale**: campo per l’inserimento del codice fiscale del soggetto;

**Persona**: serve per stabilire se il contatto sia una persona fisica o giuridica;

**Stato Legale**: campo a compilazione libera dove definire lo stato legale del contatto;

**Capitale Sociale**: campo a compilazione libera dove è possibile indicare il capitale sociale dell’azienda relativa al contatto;

**Porto**: campo dove indicare il porto (ad es. “Franco Fabbrica”), da proporre sui documenti legati al contatto;

**Categoria amministrativa**: serve per indicare la categoria amministrativa del contatto, potrebbe essere utile a fini statistici;

**Categoria Commerciale**: come la categoria amministrativa, potrebbe essere utile per fini statistici;

**Settore d’uso**: è un campo proprio del CRM e serve per indicare il [settore](/docs/configurations/tables/crm/contacts/sector-use) in cui opera il contatto;

**Contatto Padre**: è possibile indicare un contatto collegato a quello in visualizzazione, ad esempio nel caso in cui il contatto faccia parte di una holding la cui controllante rientri già tra i nostri contatti;

**Marca**: serve per indicare l’eventuale marca commercializzata dall’azienda;

**Data chiusura**: è possibile specificare una data chiusura del contatto;

**Motivo di chiusura**: è possibile specificare le motivazioni che hanno portato alla chiusura del contatto;

**Descrizione motivo di chiusura**: è possibile dettagliare ulteriormente la motivazione della chiusura, andando ad integrare quanto già presente nel campo **Motivo di chiusura**.

Nell'ultima parte della maschera sono poi presenti le **tab specifiche**.
