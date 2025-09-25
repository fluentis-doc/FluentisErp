---
title: Nuovo Contatto
sidebar_position: 2
---

La schermata del Contatto CRM si compone di tre parti:     
- la prima parte in alto presenta eventuali workflow associati al contatto CRM; i workflow generalmente ripercorrono il customer journey che trasforma il lead in cliente, ma ognuno può creare il proprio workflow in base alle esigenze CRM aziendali; si rimanda alla relativa guida sui Workflow per approfondimenti in merito ([qui](/docs/crm/home-crm/contacts/workflow-example) un esempio).               
- la parte centrale presenta la Testata del contatto, con le informazioni generali e anagrafiche, alcuno obbligatorie altre no.      
- sotto si trovano diverse tab, che riportano le diverse operazioni effettuate sul cliente e che verranno trattate successivamente in questa guida. Le tab visualizzate dipenderanno da quelle scelte per ogni [Tipo contatto](/docs/configurations/tables/crm/contacts/contact-type) nella relativa tabella.            

### Dati testata

#### Campi obbligatori

**Tipo Contatto**: rimanda all'omonima tabella [Tipo contatto](/docs/configurations/tables/crm/contacts/contact-type); usata per distinguere tra loro i vari contatti CRM (Contatto, Prospect, Lead, ecc.); il **Tipo contatto** contiene inoltre le tab da visualizzare sull’anagrafica.        

**Nome Contatto**: serve per indicare la ragione sociale o, più in generale, il nominativo del contatto;    

#### Campi non obbligatori

**Partita IVA**: campo composto dal codice ISO internazionale della nazione (definito nella tabella **Nazioni** stessa) e dalla relativa partita iva. Il campo è soggetto a test di correttezza del carattere di controllo per le partite iva italiane; dopo l'inserimento di questo campo, utilizzando il bottone della barra degli strumenti *Proponi dati* è possibile popolare automaticamente i dati anagrafica.   

**IVA**: codice IVA da utilizzare nel caso di emissione di documenti intestati al contatto. 

**Divisa**: Divisa da utilizzare nel caso di emissione di documenti intestati al contatto. 

**Codice Ufficio**: codice IPA dell'ufficio pubblico destinatario della fattura oppure (flag Fatturazione elettronica attivo) codice SDI del destinatario della fattura. Verrà riportato in anagrafica cliente qualora il contatto venga convertito. 

**Posta certificata**: spazio riservato all'indirizzo PEC nel caso sia attiva la modalità PEC destinatario nel campo Tipo codice per l'emissione fatture elettroniche. Verrà riportato in anagrafica cliente qualora il contatto venga convertito. 

**Dettagli indirizzo**: in questa sezione vengono inserite le varie parti che compongono l'indirizzo.    

**Agente Principale** serve per titolo informativo, ma anche per fini di accesso a Fluentis da parte degli agenti: essi potranno consultare solo i contatti in cui hanno il permesso.      

**Latitudine/Longitudine**: viene data la possibilità di gestire la posizione dei contatti con latitudine e longitudine invece che l'indirizzo; questi dati vengono considerati per la localizzazione all'interno del Map presente nella [Ricerca Contatti CRM](/docs/crm/home-crm/contacts/search-contacts), se non presente l'indirizzo.     

**Pipeline contatto**: Se il contatto ha un workflow associato, e lo stato del workflow corrisponde ad uno degli stati presenti in "Pipeline contatto" per il Tipo contatto, il campo "Pipeline contatto" nell'anagrafica contatto verrà aggiornato in automatico. 
Quindi ad ogni cambio stato del workflow, se presente corrispondenza, verrà aggiornato in automatico il campo "Pipeline Contatto". In questo modo il workflow ed il campo Pipeline contatto in anagrafica contatto saranno sempre allineati. 

**Origine contatto**: è possibile indicare come è stato reperito il contatto e quindi la sua [Origine](/docs/configurations/tables/crm/contacts/contact-origin).    

**Qualità contatto** attribuisce delle stelle ai vari contatti: la [qualità](/docs/configurations/tables/crm/contacts/contact-quality) è espressa in modo crescente da una a cinque stelline; questa caratteristica serve per le varie analisi e per definire la qualità del contatto in base ad una classificazione effettuata dall'utente.     

**Telefono/Email**: contiene telefono e email principali del contatto, specificati negli omonimi successivi campi: Telefono, Telefono cellulare, Fax, Email, Email secondaria, Web Site. 

**Lingua**: lingua utilizzata dal contatto.

**Natura giuridica società**: natura giuridica della società, selezionabile dal presente elenco. 

**Informazioni Statistiche**: i 3 spazi che lo compongono verranno riempiti in base ai valori inseriti nei successivi campi **Anno Statistica**, **Statistica Fatturato** e **Numero statistico dipendenti**; la modifica di uno di questi campi andrà ad influenzare il relativo spazio e viceversa; solitamente questa combo box contiene i dati del fatturato e del numero dei dipendenti per l'ultimo anno disponibile, informazioni molto importanti in sede di redazione offerta commerciale.    

**Ambiti Email** bisogna indicare se per questa anagrafica è possibile inviare Offerte e/o Newsletter; è importante questo flag perchè altrimenti non sarà possibile inviare nessuna di queste tipologie di documento. 

**Altre informazioni**: contiene Altre informazioni e il Codice fiscale inseriti negli omonimi successivi campi.     

**Persona**: serve per stabilire se il contatto sia una persona fisica o giuridica.     

**Stato Legale**: campo a compilazione libera dove definire lo stato legale del contatto.     

**Capitale Sociale**: campo a compilazione libera dove è possibile indicare il capitale sociale dell’azienda relativa al contatto.

**Porto**: campo dove indicare il porto (ad es. “Franco Fabbrica”), da proporre sui documenti legati al contatto.

**Nota Porto**: campo dove indicare eventuali note relative al porto, da proporre sui documenti legati al contatto.

**Anagrafica** in questo campo viene indicato automaticamente da Fluentis il nomignolo e la ragione sociale del cliente legato al contatto, nel momento in cui quest’ultimo viene convertito a cliente. Oppure è possibile effettuare l'associazione manualmente.     

**Categoria amministrativa**: serve per indicare la categoria amministrativa del contatto, potrebbe essere utile a fini statistici.     

**Categoria Commerciale**: come la categoria amministrativa, potrebbe essere utile per fini statistici.     

**Settore d’uso**: è un campo proprio del CRM e serve per indicare il [settore](/docs/configurations/tables/crm/contacts/sector-use) in cui opera il contatto.      

**Contatto Padre**: è possibile indicare un contatto collegato a quello in visualizzazione, ad esempio nel caso in cui il contatto faccia parte di una holding la cui controllante rientri già tra i nostri contatti. Oppure nel momento in cui contatto cambia ragione sociale, è possibile tenerne traccia collegando con il nuovo contatto.        

**Marca**: serve per indicare l’eventuale marca commercializzata dall’azienda.       

**Sconto**: tipo di sconto da applicare ai documenti intestati al contatto.

**Percentuale**: percentuale di sconto da applicare relativamente al tipo sconto selezionato. 

**Data chiusura**: è possibile specificare una data chiusura del contatto, che non lo farà più comparire tra i contatti attivi, dalla data specificata.          

**Motivo di chiusura**: è possibile specificare le motivazioni che hanno portato alla chiusura del contatto;

**Descrizione motivo di chiusura**: è possibile dettagliare ulteriormente la motivazione della chiusura, andando ad integrare quanto già presente nel campo **Motivo di chiusura**.

Nell'ultima parte della maschera sono poi presenti le **tab specifiche**.     

Nella barra degli strumenti sono presenti i seguenti pulsanti:         
**Proponi dati**: utilizzando questa funzionalità a partire dalla partita iva, verranno precompilati i dati anagrafici.      
**Conversione a cliente**: con questo pulsante è possibile convertire un contatto CRM in un [Cliente](/docs/erp-home/registers/contacts/create-new-contact/general); i dati inseriti nel contatto verranno copiati nella nuova anagrafica; il pulsante è attivo per i [Tipi contatto](/docs/configurations/tables/crm/contacts/contact-type) che non hanno attivo il flag *Cliente*.

All'interno del contatto sono presenti anche dei campi utilizzati a fine statistico, non mostrati direttamente all'utente ed impostati in automatico: 

- data creazione contatto
- data inizio lead e data fine lead
- data inizio cliente e data fine cliente

Nel momento in cui un contatto viene creato, viene assegnata la data di creazione del contatto. Quando il tipo contatto viene passato in un tipo con flag "lead" abilitato, verrà assegnata la data di passaggio a tipo lead. Nel momento di passaggio ad un altro tipo contatto che ha flag "lead" disabilitato, verrà assegnata la data di fine lead. 
La stessa logica verrà utilizzata nel caso di passaggio del tipo contatto in tipo contatto con flag "cliente" abilitato. 

### 1. Workflow Log

Questa è la prima tab della maschera dei **Contatti CRM**. Questa tab compare solo se per i Contatti CRM è stato attivato un workflow che preveda la visualizzazione del tab log. Per approfondimenti tecnici si rimanda alla documentazione sui workflow.     
L'utilizzo di un workflow per la gestione dei Contatti permette di gestire il rapporto con il potenziale cliente a stadi. I vari stadi del workflow possono prevedere diverse attività per la conquista del cliente, che dipenderanno dal tipo di rapporto raggiunto in quel determinato stadio: per esempio, nello stadio della Qualificazione sarà importante effettuare una call conoscitiva, invece nello stadio dell'Opportunità no perchè il cliente ci conosce già e sta valutando l'acquisto.       

Sono presenti due tab: Attività e Log.

#### Attività 

I campi disponibili nel dettaglio delle attività sono divisi in 2 riquadri, **Attività** e **Attività in sospeso**. Il primo serve per dettagliare l’attività già svolta, mentre nel secondo possono già essere definite alcune informazioni riguardo l’attività che dovrà essere svolta successivamente a quella già inserita.

Nel primo riquadro sono presenti i seguenti campi:

**Tipo Attività**: è possibile specificare la tipologia di attività effettuata per il contatto; le tipologie vengono definite nella tabella Tipi Attività di Arm; in base alle impostazioni inserite nel workflow, le attività potranno cambiare in base allo stadio del workflow in cui si è;          

**Data**: questo campo viene compilato automaticamente dalla procedura nel momento in cui venga inserito il campo **Tipo Attività**; 

**Operatore**: contiene l'utente Fluentis che ha effettuato l'inserimento;    

**Descrizione attività**: è possibile specificare i dettagli dell'attività in questo campo.     

Nel secondo riquadro sono invece presenti i seguenti campi:

**Data attività in attesa**: questo campo viene compilato automaticamente dalla procedura nel momento in cui venga inserito il campo **Tipo Attività**;

**Tipo Attività**: è possibile specificare la tipologia di attività sospesa per il contatto; 

**Descrizione attività**: in questo campo è possibile definire nel dettaglio l’attività che dovrà essere svolta;

**Data chiusura**: è possibile impostare una data di scadenza per l’attività;

**Operatore**: deve essere definito l’utente di Fluentis che dovrà effettuare l’attività;

**Data inizio/fine promemoria**: in questo campo può essere indicata il range di date in cui dovrà essere visualizzato un promemoria per l’attività successiva;        

**Crea attività**: apponendo la spunta su questa voce verrà creata una nuova voce nella sezione **Attività** di Fluentis per l’utente indicato nel campo **Operatore**. Tale automatismo scatterà al momento del salvataggio del contatto.    

#### Log 

In questo tab vengono visualizzati i cambiamenti di stato del workflow, con indicati: lo stato di partenza e di arrivo, l'operatore che ha effettuato l'operazione, la data.   

### 2. Riferimenti Contatto

Questa è la seconda tab dei **Contatti CRM**.

Per inserire un nuovo Riferimento, è necessario premere sul pulsante della ribbon bar *Nuovo riferimento*, che compare nel momento in cui si è all’interno di questa tab. Per inserire invece un Riferimento già esistente sarà necessario usare il pulsante *Ricerca*. 

Nella maschera di inserimento del nuovo riferimento sono presenti i seguenti campi:

**Cognome**: è il cognome del riferimento.

**Nome**: è il nome del riferimento.

**Operatore**: viene riportato l'eventuale operatore associato in anagrafica riferimento.      

**Ruolo**: campo dove viene riportato il ruolo del riferimento all’interno dell’azienda del contatto.

**Telefono**: è il telefono fisso principale del riferimento.

**Fax**: è il numero di fax del riferimento.

**Email**: è la mail aziendale del riferimento.

### 3. Indirizzi Contatto

Questa è la terza tab dei **Contatti CRM**.

In questa tab è possibile inserire e visualizzare eventuali indirizzi alternativi rispetto a quello principale indicato sul contatto. Ogni indirizzo è composto dai seguenti campi:

**Descrizione**: campo a compilazione libera.

**Telefono**: è il numero di telefono relativo all’indirizzo indicato.

**Fax**: è il numero di fax relativo all’indirizzo indicato.

**Email**: è l’indirizzo mail associato all’indirizzo indicato.

**Sito web**: è il sito web associato all’indirizzo indicato.

**Tipo indirizzo**: è la tipologia di indirizzo a cui fare riferimento, come da [tabella](/docs/configurations/tables/general-settings/address-types).

**Indirizzo**: è l’indirizzo effettivo.

**CAP**: è il codice di avviamento postale relativo all’indirizzo.

**Città**: è la città relativa all’indirizzo.

**Provincia**: è la provincia relativa all’indirizzo.

**Nazione**: è la nazione riferita all’indirizzo.

**Regione**: è la regione riferita all’indirizzo.

### 4. Note Contatto

Questa è la quarta tab dei **Contatti CRM**.

In questa tab è possibile visualizzare le note relative al contatto.
All’interno della tab sono presenti i campi di filtro, tramite i quali è possibile fare una ricerca delle note.
Per inserire una nuova nota è sufficiente premere il pulsante ![](/img/neutral/common/new.png) sulla ribbon bar. 

Nella maschera di inserimento sono presenti i seguenti campi:

**Titolo**: è il titolo della nota, che permetterà di ricercare la nota più facilmente;

**Data**: si intende la data di inserimento della nota;

**Annotazioni**: in questo campo varchar è possibile scrivere il dettaglio della nota;

**Tipo nota contatto**: è possibile indicare la [tipologia di nota](/docs/configurations/tables/crm/contacts/contact-note-type) che si sta inserendo.

### 5. Gestione Documentale

In questa tab è possibile consultare i documenti allegati. Per allegare i documenti è possibile procedere in due modi:

- utilizzando il pulsante della barra degli strumenti Documenti si può scegliere se allegare un documento già codificato in Fluentis o se creare un nuovo Documento da allegare.
- utilizzando direttamente nella griglia il tasto destro e selezionando Allega file si va in creazione di un nuovo Documento da allegare.

### 6. Categoria Commerciale

Questa è la sesta tab dei **Contatti CRM**.

In questa tab è possibile inserire e visualizzare la categorie commerciale di appartenenza dell’azienda. È sufficiente selezionare la [Categoria commerciale](/docs/configurations/tables/crm/contacts/commercial-category) così come da tabella.

### 7. Zona Contatto

Questa è la settima tab dei **Contatti CRM**.

In questa tab è possibile inserire e visualizzare la zona di appartenenza dell’azienda. È sufficiente selezionare la zona.

### 8. Agenti Contatto

Questa è l'ottava tab dei **Contatti CRM**.

In questa tab è possibile definire gli **Agenti** collegati a questo contatto.

I campi compilabili sono i seguenti:

**Conto###Sottoconto###Descrizione Conto**: tramite questi campi è possibile selezionare l’agente, facendo riferimento alla relativa anagrafica;

**Zona**: è possibile definire la zona di competenza dell’agente, così come definito in tabella;

**Percentuale**: è la percentuale di provvigione spettante all’agente in relazione al contatto;

**Utilizzare valore percentuale**: mettendo la spunta a questa voce si indica alla procedura che in fase di inserimento delle offerte di vendita dovrà essere tenuto conto del valore indicato nel campo **Percentuale** per effettuare il calcolo delle provvigioni spettanti all’agente.

### 9. Visit Report Contatti

Questa è la nona tab dei **Contatti CRM**.

In questa tab viene visualizzata la lista dei **Visit Reports** inseriti per il contatto.

Nella parte superiore della tab sono presenti i campi di **filtro** che permettono di effettuare una ricerca più puntuale dei Visit Reports desiderati.

Facendo doppio click sulla riga del Visit Reports lo stesso verrà aperto in visualizzazione/modifica.
Per inserire un nuovo Visit Reports per il contatto in oggetto è sufficiente premere il pulsante ![](/img/neutral/common/new-visit-report.png), presente sulla ribbon bar.

### 10. Offerte contatto

Questa è la decima tab dei **Contatti CRM**.

In questa tab viene visualizzata la lista delle offerte inserite per il contatto.
Nella parte superiore della tab sono presenti i campi di filtro che permettono di effettuare una ricerca più puntuale delle offerte desiderate.
Facendo doppio click sulla riga dell’offerta la stessa verrà aperta in visualizzazione/modifica.
E'possibile inoltre creare nuove offerte.

### 11. Extra Data Contatto

Questa è la undicesima tab dei **Contatti CRM**.

In questa tab è possibile visualizzare e inserire gli [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) per il contatto, che verranno poi riportati sui documenti a lui collegati.

### 12. Concorrenti Contatto

Questa è la dodicesima tab dei **Contatti CRM**.

In questa tab è possibile indicare eventuali **Concorrenti** che la nostra azienda ha nella trattativa con il contatto.
È possibile selezionare il contatto mediante l’apposito menu a tendina, selezionando i valori presenti nella relativa [tabella](/docs/configurations/tables/crm/contacts/competitors).
Nel campo **Nota** è possibile indicare ulteriori informazioni utili riguardo il concorrente.

### 13. Listini di vendita del contatto

Questa è una delle tab dei **Contatti CRM**.

In questa tab vengono visualizzati i listini di vendita validi per il contatto, che verranno applicati nei documenti intestati al contatto. In fase di conversione del contatto in cliente, questi dati verranno riportati. 

### 14. Ordini vendita contatto

Questa è una delle tab dei **Contatti CRM**.

In questa tab viene visualizzata la lista degli ordini inseriti per il contatto.
Nella parte superiore della tab sono presenti i campi di filtro che permettono di effettuare una ricerca più puntuale degli ordini.
Facendo doppio click sulla riga dell'ordine questo verrà aperto in visualizzazione/modifica.
E'possibile inoltre creare nuovi ordini.

### 15. Newsletter contatto

Questa è una delle tab dei **Contatti CRM**.

In questa tab viene visualizzata la lista delle newsletter inserite per il contatto.
Nella parte superiore della tab sono presenti i campi di filtro che permettono di effettuare una ricerca più puntuale delle newsletter desiderate.
Facendo doppio click sulla riga della newsletter la stessa verrà aperta in visualizzazione/modifica.

### 16. Pagamenti contatto

Questa è una delle tab dei **Contatti CRM**.

In questa tab sono configurabili i pagamenti da proporre nei documenti relativi al contatto. 

#### Tipi pagamento

La sezione fondamentale del tab **Pagamenti** e serve per impostare la logica di calcolo delle scadenze. Si selezionano il **Tipo di pagamento** e la **Soluzione di pagamento** (entrambe si trovano in *Configurazione > Tabelle > Impostazioni generali*).

**Percentuale**: consente di definire la quota parte (in percentuale) del valore totale del pagamento (o incasso) da gestire con la condizione di pagamento (come combinazione di tipo pagamento e soluzione di pagamento) impostata nella riga.

In caso di percentuale inferiore a 100 vanno, pertanto, create tante righe con percentuali che sommano 100.

*Esempio*:<br />
- 50% Contanti a vista fattura e 50% Bonifico bancario a 30 gg.<br />
- 50% Contanti a vista fattura; 25% Bonifico bancario a 30 gg; 25% bonifico bancario a 60 gg.<br />
![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image03.png)  ![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image04.png)

<u>Attenzione</u>: se la soluzione di pagamento prevede più di una scadenza si compilerà in questo modo: esempio 50% contanti a vista e 50% bonifico bancario a 30 - 60 gg

**![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image05.png)**

**Banca (d'appoggio)**: rappresenta la banca di riferimento per le partite.  
- Per l' anagrafica cliente:
> - se tipo pagamento è ricevuta bancaria,  va indicata la banca del cliente;
> - se tipo pagamento è bonifico bancario va indicata la banca della società in uso  (in modo da avere in stampa dei documenti i riferimenti di pagamento per il cliente); 

Il campo si compila tramite una combo box (**Banca**) collegata alla tabella *Banca d'appoggio*. All'interno di questa tabella è possibile inserire sia la banche della società, sia le banche della controparte (cliente o fornitore). Inoltre è possibile inserire sia righe complete di codice IBAN e/o SWIFT (consigliato per le banche della società) sia righe complete di soli codice ABI e CAB (consigliato per le banche di controparte per le quali IBAN e SWIFT possono essere indicati nei campi della griglia presente in anagrafica).

Se la riga presente nella tabella Banca d'appoggio è completa di IBAN e/o SWIFT, oltre che di ABI e CAB, richiamando tale riga tramite la combobox i dati saranno riportati nella griglia in anagrafica, diversamente, saranno riportati solo ABI e CAB, ma sarà sempre possibile aggiungere i dati mancanti direttamente nella griglia. Ciò è consigliabile per le banche di controparte al fine di evitare di codificare nella tabella Banca d'appoggio troppe righe utilizzate solo per un unico cliente. E' preferibile indicare solo i dati dello sportello bancario (ABI e CAB) presso il quale potrebbero avere il conto corrente diversi clienti.

L'inserimento di una banca può essere eseguita anche attraverso un doppio click nei campi abi/cab per aprire l'help di ricerca tra le agenzie bancarie nazionali, dalle quali selezionare quella del caso e creare il codice nell'anagrafica da completare con i dati di conto corrente, cin, iban, swift.

**Descrizione Banca**: campo collegato al precedente campo.

**Codice Banca**: campo NON utilizzato in Italia. Per localizzazioni estere può accogliere un codice bancario alternativo rispetto al sistema ABI CAB.

#### Banca d'appoggio

Nella griglia si possono inserire le banche d'appoggio della controparte.

In questo modo è possibile inserire delle banche d'appoggio alternative (sempre di controparte).  Un altro esempio può essere quello di un cliente che paga con bonifico (e quindi nella griglia Tipo Pagamento si inserisce la banca della nostra società) ma del quale si vuole inserire la sua banca d'appoggio in caso di pagamento di note di accredito.

L'inserimento di una banca può essere eseguita attraverso un doppio click nei campi abi/cab per aprire l'help di ricerca tra le agenzie bancarie nazionali, dalle quali selezionare quella del caso e creare il codice nell'anagrafica da completare con i dati di conto corrente, cin, iban, swift.

### 17. Opportunità contatto

Questa è una delle tab dei **Contatti CRM**.

In questa tab viene visualizzata la lista delle opportunità inserite per il contatto.
Nella parte superiore della tab sono presenti i campi di filtro che permettono di effettuare una ricerca più puntuale delle opportunità presenti.
Facendo doppio click sulla riga dell'opportunità questa verrà aperta in visualizzazione/modifica.

### 18. Orari di apertura contatto

Questa è una delle tab dei **Contatti CRM**.

In questa tab vengono visualizzati i giorni e gli orari di apertura del contatto.

### 19. Telefonate contatto

Questa è una delle tab dei **Contatti CRM**.

In questa tab viene visualizzata la lista delle telefonate effettuate al contatto.

### 20. Campagne marketing contatto

Questa è una delle tab dei **Contatti CRM**.

In questa tab viene visualizzata la lista delle campagne marketing dove è presente il contatto. 