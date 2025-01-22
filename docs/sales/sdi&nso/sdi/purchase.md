---
title: Gestione del ciclo passivo
sidebar_position: 7
---

NON GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS         

In Fluentis è possibile, una volta configurato il servizio Fluentis Business Hub, importare le fatture passive provenienti dai fornitori e che transitano dal Sistema di Interscambio. Al momento la modalità di acquisizione 
di seguito descritta è riferita a fatture di fornitori soggetti identificati/residenti nel territorio dello stato per i quali le fatture transitano dal Sistema di Interscambio. Per la comunicazione al SdI delle fatture di acquisto 
di fornitori esteri, si rimanda al paragrafo Invio al SdI fatture di acquisto/vendita fornitori/clienti esteri (soggetti NON identificati/residenti nel territorio dello stato).           

Per ricevere le fatture, è necessario comunicare il proprio codice destinatario ai fornitori, codice fornito da 
Fluentis successivamente all’attivazione del servizio Fluentis Business Hub, al fine di consentire al cedente di compilare correttamente i file XML dei documenti.          

La configurazione di Fluentis prevede l’impostazione delle medesime informazioni richieste per la gestione del ciclo attivo, come dettagliate nel capitolo Configurazione connessione a Fluentis Business Hub.Una volta impostata la comunicazione con il servizio Fluentis Business Hub, le fatture del ciclo passivo 
verranno inviate al servizio sottoscritto e, tramite BizLink, i file XML di fattura e i relativi allegati verranno acquisiti in Fluentis. La registrazione contabile o la registrazione del documento di acquisto nel flusso passivo è a carico dell’utente che, una volta individuato il file elettronico XML corrispondente, lo potrà abbinare alla registrazione o al documento generato.           

L’utente, una volta ricercati e visionati i documenti importati dal processo di BizLink, può selezionare un documento alla volta e abbinarlo alla registrazione contabile/documento di acquisto/documento compenso presenti in Fluentis.              

## Flusso operativo dei documenti di acquisto

Il documento di acquisto in formato elettronico, una volta importato in Fluentis assume lo stato di NON ASSEGNATO e può solo subire il passaggio allo stato RICEVUTO, coneguentemente all’abbinamento all’elemento contabile corrispondente, oppure tornare allo stato NON ASSEGNATO:
Per approfondimenti in merito al significato di ogni singolo stato, si rimanda ai paragrafi relativi alla gestione dei vari STATI DEI DOCUMENTI.

## Modificare e gestire gli stati dei documenti

Per modificare e gestire il documento di acquisto è necessario utilizzare la funzione Documenti acquisto in entrata dell’application Bizlink – Documenti SdI.       

Al momento dell’accesso alla funzione si apre la videata *Documenti Acquisto in entrata* suddivisa in una sezione di testata con i campi di filtro per la ricerca dei documenti e una griglia di risultato. Nel ribbon menu:
- il pulsante *Apri documento* è abilitato solo se il documento selezionato è nello stato RICEVUTA e apre la registrazione contabile/documento di acquisto/fattura compenso a cui il file XML risulta abbinato
- il pulsante *Visualizza* consente di visionare il file XML selezionato con l’apertura del Registro documenti SdI
- il pulsante *Scarica allegato* esegue il download del file selezionato nel pannello Allegati su una cartella di filesystem prescelta.         

Nella sezione superiore della videata sono presenti i campi di filtro che permettono di filtrare la griglia dei risultati visualizzati nella griglia sottostante con alcune informazioni di dettaglio:
- *Stato Sdi*: lo stato del documento una volta acquisito in Fluentis:
> - *Non assegnato*: la fattura non è stata ancora abbinata ad una registrazione contabile o ad una fattura emessa dal ciclo passivo o documento emesso nei confronti di un percipiente
> - *Ricevuta*: la fattura è stata abbinata
- *Tipo*: il codice di riferimento del tipo documento di vendita
- *Data doc. def.*, Numero doc. def: data e numero del documento acquisito
- *Fornitore*: l’emittente del documento
- *Nome file SdI*: il nome del file il nome del file XML che viene creato nel momento in cui il documento viene avanzato nello stato GENERATA; nel formato originale o successivamente all’apposizione della firma digitale, rappresenta il file di fattura da inviare a SdI (per dettagli sulla compilazione del nome del file v. Paragrafo Nome del file).
- *Data ultimo evento*: si riferisce all’ultima azione compiuta dall’operatore o all’ultima notifica ricevuta dal SdI durante il processo di gestione del documento.         

I documenti importati possono essere abbinati ad elementi contabili presenti in Fluentis operando dalle funzioni:
1) Documenti acquisto in entrata dell’ application Bizlink – Documenti SdI
2) dalla registrazione contabile del documento di acquisto
3) dalla form di gestione del documento di acquisto
4) dalla form di gestione del compenso         

Analizziamo di seguito queste quattro modalità.           

1) **Abbinare il documento XML dalla funzione di importazione**        

Con la funzione *Documenti acquisto in entrata* dell’applicazione Bizlink – Documenti SdI è possibile abbinare il documento XML ad una registrazione contabile/documento di acquisto/ compenso 
partendo dal documento importato in Fluentis.              
Dopo aver eseguito la ricerca ed aver individuato il file da abbinare, è possibile selezionare il file dalla griglia del Registro documenti SdI con l’azione doppio click sulla riga del documento oppure con il pulsante VISUALIZZA nel ribbon menu. Si apre il Registro documenti SdI con il dettaglio del file 
acquisito e da questa videata è possibile:
- *Abbinare il file a un documento di acquisto* registrato nella sezione Acquisti di Fluentis, 
con la funzione *Collega agli acquisti*.            
- *Abbinare il documento a una registrazione contabile esistente*; tramite la funzione *Collega alle *registrazioni* è possibile selezionare la registrazione contabile corrispondente al documento, selezionandola nell’elenco delle 
registrazioni contabili.
- *Abbinare il documento a un compenso prefessionale*; selezionando l’azione *Collega ai percipienti* del ribbon menu è possibile selezionare il documento relativo al compenso corrispondente al file XML imporato, selezionandolo nell’elenco dei compensi presenti in Fluentis.           

Al termine dell’abbinamento eseguito da una delle funzioni sopra descritte, il documento viene contrassegnato con lo stato Ricevuta, in corrispondenza della Transizione Documento ricevuto viene indicata data e ora dell’abbinamento. Il documento potrà anche essere modificato nuovamente nello stato Non assegnato nel caso si renda necessario tornare nello stato precedente.

2) **Abbinare il documento XML dalla registrazione contabile di acquisto**

Per abbinare una registrazione contabile ad un file XML acquisito in Fluentis, è necessario accedere alla registrazione contabile dal menu Amministrazione – Registrazioni – Registrazione e ricercare la registrazione contabile da gestire. Nella form Ricerca registrazioni contabili sono state aggiunte alcune 
colonne di gestione dell’informazione relativa al file:
- *Stato SdI*: accoglie la descrizione dello stato del documento, riportando sia lo stato di gestione interno di Fluentis sia lo stato riportato da Fluentis Business Hub e acquisito direttamente da SdI ( vedi paragrarafo STATI DEI DOCUMENTI).
- *Nome file SdI*: il nome del file che viene creato nel momento in cui il documento viene avanzato nello 
stato GENERATA; nel formato originale o successivamente all’apposizione della firma digitale, rappresenta il file di fattura da inviare a SdI (Nome del file). 
- *Sdi Id*: l’identificativo univoco che il SdI attribuisce al documento nel momento della ricezione
- *Data ricezione Sdi*: la data in cui il sistema di interscambio ha acquisto il documento inviatogli. Tale informazione viene reperita dalla notifica di ricezione che il SdI rilascia a fronte del recepimento della spedizione e prima di procedere con i controlli formali del file 
- *Data chiusura*: la data di chiusura del flusso di gestione (es. documento Cosegnato)
- *Data ultimo evento*: la data dell’ultimo cambio stato avvenuto sul file o manualmente o per effetto dell’avanzamento dell’elaborazione sul SdI       

Selezionando la registrazione contabile da abbinare e modificando lo stato della fatturazione elettronica in RICEVUTA, si apre l’elenco dei file acquisiti da SDI ancora da abbinare e sarà sufficiente selezionare uno dei file proposti per creare il corretto abbinamento. Dalla medesima videata, accedendo al “Registro documenti Sdi” è possibile prendere visione delle 
azioni svolte sul documento, con la funzione ”Stampa” stampare il documento XML abbinato, con le funzioni ”Scarica allegato” o “Scarica il contenuto del registro” eseguire il download del file XML selezionato nel pannello “Allegati” o nel pannello “Registro dei documenti SdI”.      

3) **Abbinare il file XML dalla gestione documenti di acquisto Acquisti – Fatture di acquisto – Fatture di acquisto**        

Per abbinare il file XML ad un documento di acquisto è necessario accedere alla funzione Acquisti – Fatture di acquisto, ricercare i file da abbinare nella griglia di gestione utilizzando eventualmente anche i nuovi filtri relativi alla Fatturazione elettronica e prendere visione dello stato del documento nelle colonne predisposte 
alla gestione dei file nel SdI. Selezionando un documento nello stato NON ASSEGNATO da abbinare al file XML e modificando dal ribbon 
menu lo stato in RICEVUTA, si apre il dialogo di selezione dei file di acquisto importati e tra i quali è necessario selezionare il file da abbinare.
Lo stato del documento viene così modificato in RICEVUTA, con la possibilità comunque di ripristinare lo stato precedente, agendo sempre dal ribbon menu. Dalla medesima videata, accedendo 
al Registro documenti Sdi è possibile prendere visione delle azioni svolte sul documento, con la funzione Stampa stampare il documento XML abbinato, con le funzioni Scarica allegato o 
Scarica il contenuto del registro eseguire il download del file XML selezionato rispettivamente nel pannello “Allegati” o nel pannello “Registro dei documenti SdI”.          
L’abbinamento del file XML ricevuto alla fattura di acquisto è possibile anche accedendo direttamente al 
documento di acquisto e selezionando il file XML da abbinare tra quelli proposti dalla funzione di cambio stato Ricevuta del ribbon menu.          

4) **Abbinare il documento XML dalla funzione di gestione compensi Amministrazione – Compensi – Compensi**        

Il file XML di acquisto importato potrebbe riferirsi a documenti emessi da professionisti e registrati in Fluentis nella gestione compensi. Per abbinare il file alla registrazione esistente è necessario accedere al menu Amministrazione – Compensi – Compensi, ricercare il documento da abbinare nella griglia di gestione 
utilizzando eventualmente anche i nuovi filtri relativi alla Fatturazione elettronica e prendere visione dello stato del documento nelle colonne predisposte alla gestione dei file nel SdI. 

## Invio al SdI fatture di acquisto/vendita fornitori/clienti esteri (soggetti non identificati/residenti nel territorio dello stato)

La normativa attuale relativa alle comunicazioni da inviare all’Agenzia delle Entrate prevede che i soggetti passivi ai fini IVA comunichino anche i dati relativi alle operazioni di cessione beni/prestazioni servizi EFFETTUATE e RICEVUTE da soggetti NON identificati/non residenti nel territorio dello Stato. Se per i 
documenti EMESSI è possibile utilizzare il medesimo tracciato previsto per le fatture elettroniche italiane, per l’invio al Sdi dei documenti di acquisto di fornitori esteri è previsto un tracciato apposito. La firma per entrambe le tipologie di file è obbligatoria.        

L’invio al SdI di questi file viene gestito in Fluentis attraverso le operazioni di cambio stato dei documenti registrati; il file XML generato a fronte della registrazione dell’operazione di acquisto o di vendita, assume lo stato di NON ESAMINATA e successivamente può subire le medesime trasformazioni di stato previste per i file XML trasmessi al SdI per i documenti di vendita (vedi paragrafo STATI DEI DOCUMENTI). Il documento XML viene quindi trasmesso al SdI che lo controlla e lo acquisice e restituisce le notifiche relative all’eventuale scarto dovuto alla mancata conformità del file oppure dell’avvenuta consegna.            

Per i documenti di vendita destinati a clienti non residenti/non stabiliti, il flusso elettronico di invio al SdI non potrà mai generare la mancata consegna per errata identificazione del destinatario perchè lo scopo di tale invio è unicamente la comunicazione all’Agenzia delle Entrate del rapporto intercorso con il cliente 
estero e non è compito dello SdI il recapito al destinatario: i documenti emessi e destinati a clienti esteri dovranno essere recapitati nella consueta modalità l’invio. L’invio di tali documenti al SdI deve essere effettuato entro l’ultimo giorno del mese successivo alla data di emissione del documento.Per questo motivo, il flusso degli stati relativi a questi file sarà il medesimo, sia che si tratti di XMl di fatture di vendita che di fatture di acquisto.                

Per il dettaglio relativo ai singoli stati, si rimanda al paragrafo STATI DEI DOCUMENTI IN FLUENTIS. In Fluentis è possibile generare il file relativo alle fatture di vendita destinate a clienti UE o extra UE:        
- dalla gestione del ciclo attivo come descritto nel paragrafo Gestione del ciclo attivo (soggetti identificati/residenti nel territorio dello stato e Pubblica Amministrazione), demandando la creazione del file XML alle impostazioni anagrafiche relative alla fatturazione elettronica e gestendo la creazione e l’invio del file XML come una fattura di vendita destinata ad un cliente italiano. Il flusso di invio, gestito dalla sezione Fatturazione elettronica, riconoscerà in automatico il documento di vendita destinato ad un soggetto estero e richiederà pertanto l’apposizione obbligatoria della firma
- dalla funzione Fatturazione elettronica con soggetti non residenti di seguito descritta, che reperisce le fatture attive dalle registrazioni contabili inserite e non riferite a fatture elettroniche già inviate al SdI dalla gestione del ciclo attivo.          

Per la corretta gestione dei documenti di vendita, in entrambi i casi la dovrà essere configurata l’anagrafica
cliente impostando il campo TIPO CODICE con la scelta “Canale Sdi” e nel campo CODICE DESTINATARIO la sequenza di 7 volte il carattere “X” (“XXXXXXX”).             
Per i dettagli della specifica anagrafica, riferirsi al paragrafo Impostazione Anagrafiche contatti.              
I file relativo alle fatture di acquisto da soggetti esteri è possibile funzione Fatturazione elettronica con 
soggetti non residenti di seguito descritta.

## Fatturazione elettronica con soggetti non residenti

La funzione Amministrazione > Dichiarazioni > Fatturazione elettronica con soggetti non residenti genera i file XML relativi ai documenti di acquisto e di vendita che possono essere inoltrati all’Agenzia delle Entrate singolarmente, in sostituzione dell’adempimento dello spesometro. L’accesso alla funzione visualizza una maschera suddivisa in una sezione superiore di testata, nella quale è possibile impostare una serie di filtri da utilizzare per la visualizzazione e la gestione dei file XML da inviare.           
La funzione, attraverso il filtro TIPO, e il filtro STATO DELLA FATTURA ELETTRONICA, ricerca gli elementi relativi agli acquisti o alle vendite per cui è possibile, dalla griglia dei risultati, gestire l’avanzamento degli stati singolarmente o massivamente per documenti a pari Stato SdI. 
La griglia dei risultati visualizza una serie di colonne destinate al monitoriaggio e alla gestione dei file rispetto all’invio al SdI e nel dettaglio:
- *Stato SdI*: accoglie la descrizione dello stato del documento, riportando sia lo stato di gestione interno di Fluentis sia lo stato riportato da Fluentis Business Hub e acquisito direttamente da SdI (vedi paragrarafo STATI DEI DOCUMENTI).
- *Nome file SdI*: il nome del file che viene creato nel momento in cui il documento viene avanzato nello stato GENERATA; nel formato originale o successivamente all’apposizione della firma digitale, rappresenta il file di fattura da inviare a SdI (Nome del file). 
- *Sdi Id*: l’identificativo univoco che il SdI attribuisce al documento nel momento della ricezione
- *Data ricezione Sdi*: la data in cui il sistema di interscambio ha acquisto il documento inviatogli. Tale informazione viene reperita dalla notifica di ricezione che il SdI rilascia a fronte del recepimento della spedizione e prima di procedere con i controlli formali del file 
- *Data chiusura*: la data di chiusura del flusso di gestione (es. documento Cosegnato)
- *Data ultimo evento*: la data dell’ultimo cambio stato avvenuto sul file o manualmente o per effetto dell’avanzamento dell’elaborazione sul SdI              

Nel ribbon Menu, nella sezione dedicata alla fatturazione elettronica, utilizzando la funzione *Registro documenti Sdi* è possibile prendere visione delle azioni svolte sul documento selezionato, con la funzione *Stampa* stampare il documento XML abbinato, con le funzioni *Scarica allegato* o *Scarica il contenuto del registro* eseguire il download del file XML.

Con l’azione doppio click in corrispondenza di una riga di risultato della griglia, si accede al dettaglio della registrazione contabile selezionata. Anche nella registrazione contabile è possibile visionare lo stato dell’elaborazione del file rispetto all’invio al SdI.           

I documenti di vendita gestiti dalla funzione Fatturazione elettronica soggettti non residenti possono essere ricercati impostando nel pannello dei filtri il check Vendite nella sezione Tipo:
e con il pulsante Ricerca del Ribbon Menu avviare la ricerca di tutte le registrazioni contabili relative a causali di vendita legate a tipo movimento Iva vendite intra cee oppure Iva vendite extra cee o che abbiano valorizzato il campo “Conto Partner” nel pannello Parametri.             

I documenti di acquisto gestiti dalla funzione Fatturazione elettronica soggettti non residenti possono essere ricercati impostando nel pannello dei filtri il check Acquisti nella sezione Tipo:
e con il pulsante Ricerca del Ribbon Menu avviare la ricerca di tutte le registrazioni contabili relative a causali di vendita.            
Il documento di acquisto di un fornitore estero deve essere acquisito e registrato in contabilità utilizzando le causali contabili che:
- sono collegate al Tipo Movimento IVA ACQUISTI INTRA CEE oppure 
- sono collegate al Tipo Movimento Iva Acquisti Extra cee oppure
- hanno valorizzato nel pannello Parametri il campo Conto Partner               

Al termine della ricerca, si popola la grigia dei risultati dalla quale è possibile, utilizzando la funzione di cambio stato nella sezione della fatturazione elettronica, procedere con l’avanzamento MANUALE degli stati fino allo stato previsto “Da spedire” che prevede l’inserimento del file nella coda di spedizione al servizio Fluentis Business Hub.

Qualora non sia configurato nell’impianto il servizio Fluentis Business Hub, sarà possibile accedere alla 
funzione funzione *Registro documenti Sdi* e scaricare il file XML generato da utilizzare esternamente a Fluentis.               

Il file XML creato durante la gestione degli stati da parte dell’operatore dovrà essere firmato, pertanto, se attivo il servizio Fluentis Business Hub, una copia del file sarà creata nella cartella indicata nelle impostazioni relative alla Configurazione connessione a Fluentis Business Hub, dove è necessario indicare 
una cartella di appoggio per depositare i file XML da firmare e recuperare successivamente i file firmati.                

Al terminine dell’invio al SdI, il file potrà assumere due stati:
- *Non conforme*: il file contiene segnalazioni per cui non può essere accettato dal SdI. In questi casi è necessario accedere al Registro documenti Sdi, nel pannello Registro documenti SdI 
visualizzare la motivazione di non conformità, correggere l’eventuale anomalia e inviare nuovamente il file rigenerato.
- *Consegnata*: il file è stato correttamente inviato ed acquisito dal SdI. In questo caso sarà possibile prendere visione dell’esito della consegna accedendo al pannello pannello Registro 
documenti SdI della funzione Registro documenti Sdi per il file selezionato.               

I documenti in uscita possono essere gestiti anche dalla Documenti esteri in uscita accessibile dalle Applications > BizLink >Documenti SdI. In questa funzione e’ possibile monitorare e modificare lo stato relativo alle registrazioni contabili di acquisto/vendita per i soggetti esteri.           

Nella Form Documenti acquisti esteri in uscita vengono visualizzati tutti i file prodotti dalle Registrazioni contabili e relativi a questa tipologia di accadimento. La form è suddivisa in una 
sezione superiore nella quale vengono esposti i filtri di selezione dei file gestiti, tra i quali:
- Da data/ A data di ricevimento
- Da data/A data di ricezione cliente           

Nella griglia dei risultati vengono visualizzati i dati relativi ai file gestiti o da gestire:           
- *Stato SdI*: accoglie la descrizione dello stato del documento, riportando sia lo stato di gestione interno di Fluentis sia lo stato riportato da Fluentis Business Hub e acquisito direttamente da SdI (vedi paragrarafo STATI DEI DOCUMENTI).
- *Nome file SdI*: il nome del file che viene creato nel momento in cui il documento viene avanzato nello stato GENERATA; nel formato originale o successivamente all’apposizione della firma digitale, rappresenta il file di fattura da inviare a SdI (Nome del file). 
- *Sdi Id*: l’identificativo univoco che il SdI attribuisce al documento nel momento della ricezione
- *Data ultimo evento*: la data dell’ultimo cambio stato avvenuto sul file o manualmente o per effetto dell’avanzamento dell’elaborazione sul SdI             

Nel ribbon menu sono presentate le funzioni di gestione del documento o dei documenti selezionati:
- il pulsante Visualizza consente di visionare il Registro documenti SdI dove è possibile prendere visione degli eventi collegati al file XML generato, eseguirne lo scarico o modificarne lo stato
- il pulsante Scarica allegato esegue il download del file selezionato su una cartella di filesystem prescelta
- Il pulsante Apri documento apre la registrazione contabile relativa al file selezionato                

## Registrazioni contabili

Accedendo al punto di menu Amministrazione > Registrazioni > Registrazione, la form Ricerca registrazioni contabili visualizza, nella sezione dei filtri, un expander relativo alle possibili informazioni legate allo Stato della fattura elettronica, riferito ai documenti che hanno un’interazione con il Sistema 
di Interscambio.              

Nel ribbon Menu, nella sezione dedicata alla fatturazione elettronica, utilizzando la funzione *Registro documenti Sdi* è possibile prendere visione delle azioni svolte sul documento selezionato, con la funzione *Stampa* stampare il documento XML abbinato, con le funzioni *Scarica allegato*
o *Scarica il contenuto del registro* eseguire il download del file XML.                
La griglia di riepilogo risultati visualizza alcune colonne nelle quali viene riportato lo stato e l’esito dei documenti in riferimento alla trasmissione degli stessi al SdI:
- *Stato SdI*: accoglie la descrizione dello stato del documento, riportando sia lo stato di gestione interno di Fluentis sia lo stato riportato da Fluentis Business Hub e acquisito direttamente da SdI (vediparagrarafo STATI DEI DOCUMENTI).
- *Nome file SdI*: il nome del file che viene creato nel momento in cui il documento viene avanzato nello stato GENERATA; nel formato originale o successivamente all’apposizione della firma digitale, rappresenta il file di fattura da inviare a SdI (Nome del file). 
- *Sdi Id*: l’identificativo univoco che il SdI attribuisce al documento nel momento della ricezione (NON GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS)
- *Data ricezione Sdi*: la data in cui il sistema di interscambio ha acquisto il documento inviatogli. Tale informazione viene reperita dalla notifica di ricezione che il SdI rilascia a fronte del recepimento della spedizione e prima di procedere con i controlli formali del file (NON GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS)
- *Data chiusura*: la data di chiusura del flusso di gestione (es. documento Cosegnato) (NON GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS)
- *Data ultimo evento*: la data dell’ultimo cambio stato avvenuto sul file o manualmente o per effetto dell’avanzamento dell’elaborazione sul SdI
