---
title: Testata Contatto 
sidebar_position: 1
---

La schermata del Contatto CRM si compone di tre parti:     
- la prima parte in alto presenta eventuali workflow associati al contatto CRM; i workflow generalmente ripercorrono il customer journey che trasforma il lead in cliente, ma ognuno può creare il proprio workflow in base alle esigenze CRM aziendali; si rimanda alla relativa guida sui Workflow per approfondimenti in merito;          
- la parte centrale presenta la Testata del contatto, con le informazioni generali e anagrafiche, alcuno obbligatorie altre no;     
- sotto si trovano diverse tab, che riportano le diverse operazioni effettuate sul cliente e che verranno trattate successivamente in questa guida.            

# Dati obbligatori di testata

**Nome**: serve per indicare la ragione sociale o, più in generale, il nominativo del contatto;    

**Tipo Contatto**: predefinito nella tabella [Tipo contatto](/docs/configurations/tables/crm/contacts/contact-type); verrà automaticamente proposto un Workflow se assocciato al Tipo contatto; serve per definire la tipologia di contatto per distinguerlo, ad esempio, tra un lead ed un customer. Sul **Tipo contatto** è possibile inoltre indicare le tab da visualizzare sull’anagrafica del contatto;    

# Dati non obbligatori di testata 

**Partita IVA**: campo composto dal codice ISO internazionale della nazione (definito nella tabella **Nazioni** stessa) e dalla relativa partita iva. Il campo è soggetto a test di correttezza del carattere di controllo per le partite iva italiane.

**Origine contatto**: è possibile indicare come è stato reperito il contatto e quindi la sua [Origine](/docs/configurations/tables/crm/contacts/contact-origin).    

**Qualità contatto** attribuisce delle stelle ai vari contatti: la [qualità](/docs/configurations/tables/crm/contacts/contact-quality) è espressa in modo crescente da una a cinque stelline; questa caratteristica serve per le varie analisi e per definire la qualità del contatto in base ad una classificazione effettuata dall'utente.     

**Agente Principale** serve per titolo informativo, ma anche per fini di accesso a Fluentis da parte degli agenti: essi potranno consultare solo i contatti in cui hanno il permesso.     

**Dettagli indirizzo**: i 3 spazi che lo compongono verranno riempiti in base ai valori inseriti nei successivi campi **Indirizzo**, **Città** e **Provincia**; la modifica di uno di questi campi andrà ad influenzare il relativo spazio e viceversa.

**Telefono/Email**: contiene telefono e email principali del contatto, specificati negli omonimi successivi campi. Tale indirizzo mail verrà utilizzato per l’eventuale invio di **Newsletter** o **Offerte** indirizzate al contatto.     

**Ambiti Email** bisogna indicare se per questa anagrafica è possibile inviare Offerte e/o Newsletter; è importante questo flag perchè altrimenti non sarà possibile inviare nessuna di queste tipologie di documento.    

**Informazioni Statistiche**: i 3 spazi che lo compongono verranno riempiti in base ai valori inseriti nei successivi campi **Anno Statistica**, **Statistica Fatturato** e **Numero statistico dipendenti**; la modifica di uno di questi campi andrà ad influenzare il relativo spazio e viceversa; solitamente questa combo box contiene i dati del fatturato e del numero dei dipendenti per l'ultimo anno disponibile, informazioni molto importanti in sede di redazione offerta commerciale.    

**Altre informazioni**: contiene Altre informazioni e il Codice fiscale inseriti negli omonimi successivi campi.     

**Persona**: serve per stabilire se il contatto sia una persona fisica o giuridica.     

**Stato Legale**: campo a compilazione libera dove definire lo stato legale del contatto.     

**Capitale Sociale**: campo a compilazione libera dove è possibile indicare il capitale sociale dell’azienda relativa al contatto;

**Porto**: campo dove indicare il porto (ad es. “Franco Fabbrica”), da proporre sui documenti legati al contatto;

**Anagrafica** in questo campo viene indicato automaticamente da Fluentis il nomignolo e la ragione sociale del cliente legato al contatto, nel momento in cui quest’ultimo viene convertito a cliente.     

**Categoria amministrativa**: serve per indicare la categoria amministrativa del contatto, potrebbe essere utile a fini statistici.     

**Categoria Commerciale**: come la categoria amministrativa, potrebbe essere utile per fini statistici.     

**Settore d’uso**: è un campo proprio del CRM e serve per indicare il [settore](/docs/configurations/tables/crm/contacts/sector-use) in cui opera il contatto.      

**Contatto Padre**: è possibile indicare un contatto collegato a quello in visualizzazione, ad esempio nel caso in cui il contatto faccia parte di una holding la cui controllante rientri già tra i nostri contatti.       

**Marca**: serve per indicare l’eventuale marca commercializzata dall’azienda.       

**Data chiusura**: è possibile specificare una data chiusura del contatto, che non lo farà più comparire tra i contatti attivi, dalla data specificata.          

**Motivo di chiusura**: è possibile specificare le motivazioni che hanno portato alla chiusura del contatto;

**Descrizione motivo di chiusura**: è possibile dettagliare ulteriormente la motivazione della chiusura, andando ad integrare quanto già presente nel campo **Motivo di chiusura**.

Nell'ultima parte della maschera sono poi presenti le **tab specifiche**.     