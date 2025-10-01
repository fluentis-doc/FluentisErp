---
title: Stati dei documenti in Fluentis
sidebar_position: 5
---

L’invio e la ricezione dei documenti elettronici del ciclo attivo e passivo prevede la gestione, da parte 
dell’utente, di una serie di STATI operativi che definiscono il flusso di gestione del documento di fattura, dalla 
sua generazione fino all’invio a Fluentis Business Hub per l’effettivo trasferimento al SdI.
Gli stati potranno essere gestiti singolarmente, quindi all’interno della gestione di unico documento, oppure 
in modalità massive; ogni stato può prevedere il passaggio ad uno stato PRECEDENTE di gestione oppure ad 
uno SUCCESSIVO. Le azioni e la gestione dei documenti elettronici può essere subordinata a restrizioni 
operative che possono riservare la gestione degli stati dei documenti solo a ruoli e/o utenti predefinito, 
configurando opportunamente la ribbon menu delle azioni relative.
La normativa attuale relativa alle comunicazioni da inviare all’Agenzia delle Entrate prevede che i soggetti 
passivi ai fini IVA comunichino i dati relativi alle operazioni di cessione beni/prestazioni servizi effettuate 
(Gestione del ciclo attivo) e RICEVUTE anche da soggetti NON identificati/non residenti nel territorio dello 
Stato utilizzando lo stesso tracciato previsto per le fatture elettroniche italiane. Se per i documenti EMESSI 
è possibile utilizzare il medesimo tracciato previsto per le fatture elettroniche italiane, per l’invio al Sdi dei 
documenti di acquisto di fornitori esteri è previsto un tracciato apposito e la firma per questi file è 
obbligatoria.
In Fluentis la generazione del file XML di questa tipologia è possibile a fronte della registrazione contabile 
del documento ricevuto e la successiva gestione, all’interno della registrazione contabile, della generazione 
del file XML e suo invio al SdI con le medesime operazioni di cambio stato previste per il ciclo attivo, oppure 
attraverso la gestione dei file dalla funzione Fatturazione elettronica con soggetti non residenti.
       
Il significato dei vari stati nel dettaglio:

| Stato documento | Descrizione | Azioni possibili |
| :-- | :-- | :-- | 
| Non esaminata | Il documento è stato generato e ancora non sono state fatte azioni relative alla gestione del documento elettronico | *Successive*: Controllato, Annullata, Esclusa. *Precedenti*: Eliminazione manuale del documento dalla gestione | 
| Controllato | Il documento è stato sottoposto ai controlli preliminari da parte dell’operatore | *Successive*: Generata, Annullata, Esclusa. *Precedenti*: Non esaminata (torno allo stato iniziale del documento) | 
| Generata | E' stato creato il file XML relativo al documento elettronico. Da questo momento è possibile procedere con gli stati successivi per inviare il file al Fluentis Business Hub oppure scaricare il file XML per gestioni esterne. Il documento in questo stato può essere contabilizzato | *Successive*: Firmata, Da spedire, Annullata, Esclusa. *Precedenti*: Controllata | 
| Firmata | Il documento è stato firmato esternamente con certificato di firma Cadeso Xades e reimportato in Fluentis nel nuovo formato | *Successive*: Da spedire, Annullata, Esclusa. *Precedenti*: Generata | 
| Da spedire | Questo stato, da utilizzare nel caso in cui sia correttamente configurato il canale Fluentis Business Hub, accoda il documento alla lista documenti che BizLink dovrà processare per l’invio a Sdi. PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS QUESTO CAMBIO STATO BLOCCA LA FATTURA A QUALSIASI ALTRA AZIONE | *Successive*: NESSUNA AZIONE MANUALE. Lo stato viene aggiornato da Fluentis Business HubNON GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS | 
| Annullata | Il documento non deve essere inviato al cliente finale ma resta comunque valido ai fini IVA | *Successive*: NESSUNA AZIONE MANUALE. *Precedenti*: Non esaminata | 
| Esclusa | Il documento è stato creato ma non rientra tra quelli da inviare al SdI (es. nota di storno interna o cliente non residente in italia e non soggetto a fatturazione elettronica con invio a SdI) | *Successive*: NESSUNA AZIONE MANUALE. *Precedenti*: Non esaminata | 
| Non abbinata (ciclo passivo) | Il documento è stato ricevuto dal servizio Fluentis Business Hub e non è stato abbinato ad alcun elemento contabile (NON GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS) | *Successive*: Ricevuta | 
| Ricevuta (ciclo passivo) | Il documento è stato abbinato alla registrazione contabile/documento di acquisto/documento compenso (NON GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS) | *Precedenti*: Non abbinata | 

Se l'invio viene fatto tramite Fluentis Business Hub, dopo aver contrassegnato il documento creato con lo 
stato “Da spedire”, gli stati successivi acquisiti direttamente dal Fluentis Business Hub possono essere:          

QUESTI STATI NON SONO GESTITI PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FBH CON FLUENTIS           


| Stato documento | Descrizione | Azioni possibili | Notifica XML da SDI |
| :-- | :-- | :-- | :-- |
| In Fluentis Business Hub | Il documento è stato recepito in Fluentis Business Hub e in attesa del prelevo da parte del SdI | E’ necessario attendere un riscontro dal SdI che verificherà ed eventualmente preleverà il file | NO |
| In SDI | Il documento è stato recepito dal SdI | *Successive*: Non conforme, Emessa | NO |
| Non conforme | Il documento NON ha passato i controlli formali previsti da SdI e dovrà essere riemesso. I cambi di stato successivi sono MANUALI e a cura dell’utente | *Precedenti*: Non esaminata, Annullata, Esclusa | SI |
| Consegnata | Il documento è stato consegnato al destinatario | Il ciclo di invio è concluso | SI |
| Mancata consegna | Il SdI non è riuscito a consegnare il documento al destinatario e lo metterà a disposizione nella sua area riservata (es. per indisponibilità dell'indirizzo telematico di ricezione o perché tale indirizzo non è stato indicato in fattura) | *Successive*: Notifica cliente | SI |
| Notifica cliente |  A fronte della mancata consegna da parte del SdI, viene fatta una notifica manuale al cliente della fattura. Questo stato è MANUALE e a cura dell’utente | Il ciclo di invio è concluso | NO | 
| Documento emesso (Solo PA) | Il documento è stato considerato valido da SdI che procede con i tentativi di consegna verso la PA | *Successive*: Consegnata, Mancata consegna | NO | 
| Respinta (solo PA) |  Il documento rivolto alla PA è stato Rifiutato dall’Amministrazione Pubblica | *Precedenti*: Da esaminare | SI |
| Approvata | Il documento rivolto alla PA è stato Accettao dall’Amministrazione Pubblica | Il ciclo di invio è concluso | SI |
| Accettata per decorrenza | Se entro il termine dei 15 giorni dal ricevimento della fattura il SdI non riceve alcuna comunicazione, il SdI inoltra notifica di DECORRENZA DEI TERMINI sia al soggetto trasmittente sia al soggetto ricevente | | SI |

Lo stato dei documenti inviati a Fluentis Business Hub viene aggiornato in modalità silente da alcune procedure automatiche previste in BizLink. 
Nei paragrafi successivi è descritto il dettaglio di ogni stato gestito.

## Stato documento NON ESAMINATA

Contestualmente al momento della creazione del nuovo documento di vendita o di una registrazione contabile di acquisto per soggetti non residenti, nel ribbon menu, nella sezione Fatturazione elettronica, lo 
stato proposto è “Non esaminata”, cioè ancora non valutata dall’operatore per l’invio a SdI.
Una volta inserito e salvato il documento con le relative informazioni, è possibile procedere modificando lo stato del documento in uno tra quelli previsti per lo stato NON ESAMINATA, ovvero:
- *Controllata*: verificata e pronta per essere gestita in formato elettronico
- *Annullata*: la fattura non deve essere inviata a SdI ma deve essere mantenuta come valida per le registrazioni ai fini contabili e IVA
- *Esclusa*: il documento inserito non deve essere inviato a SdI 

## Stato doumento CONTROLLATA 

Il documento/la registrazione nello stato CONTROLLATA è stato validato dall’operatore e può essere elaborato per le fasi successive per l’elaborazione dello stesso e l’invio a SdI, oppure può essere riportato allo stato DA ESAMINARE per eventuali modifiche o integrazioni. 
Gli stati successivi di elaborazione del documento per l’invio a SdI o per l’esclusione all’invio possono 
essere:
- *Generata*: viene creato il file XML relativo al documento inserito e preparato per la spedizione 
- *Annullata*: la fattura non deve essere inviata a SdI ma deve essere mantenuta come valida per le registrazioni ai fini contabili e IVA
- *Esclusa*: il documento inserito non deve essere inviato a SdI 

## Stato documento GENERATA 

Il passaggio dei documenti fattura o delle registrazioni contabili allo stato GENERATA prevede la contestuale 
creazione del documento XML secondo le specifiche tecniche previste dall’Agenzia delle Entrate per la 
tipologia di documento in gestione. Durante questa fase, vengono eseguiti alcuni controlli relativi alla 
presenza delle informazioni obbligatorie per la compilazione e qualora nella sezione anagrafica tali 
informazioni non siano state censite correttamente, verrà emessa una segnalazione di errore relativa al dato 
mancante. 
Il documento fattura/nota di accredito... nello stato GENERATA acquisisce anche lo stato interno di gestione 
STAMPATA e quindi è possibile da questo momento procedere con la contabilizzazione del documento. La 
registrazione contabile nello stato GENERATA crea il file XMl corrispondente.
Il file XML generato viene salvato nella gestione documentale di Fluentis e quindi sempre reperibile dalle 
varie funzionalità che ne consentono l’accesso e dalla funzione **Registro dei Documenti Sdi** previsto nel 
Ribbon Menu delle varie funzionalità.
Il file XML nello stato Generata può essere scaricato e gestito per l’invio con strumenti esterni a Fluentis 
oppure può essere inviato a Fluentis Business Hub attraverso la gestione di uno degli stati operativi previsti. 
Qualora per il contatto o per la società sia stata impostata la gestione della Firma sui documenti di 
fatturazione elettronica, negli gli stati in gestione è previsto anche FIRMATA:
Qualora invece non sia prevista la gestione della firma, gli stati in gestione sono:
- *Controllata*: modifico lo stato del documento per tornare allo stato PRECEDENTE di controllata
- *Annullata*: il documento inserito o registrato non deve essere inviato a SdI ma deve essere mantenuta come valida per le registrazioni ai fini contabili e IVA
- *Esclusa*: il documento inserito non deve essere inviato a SdI 
- *Da spedire*: il documento viene inserito nell’elenco dei documenti da inviare a Fluentis Business Hub
- *Firmata*: il flusso di attribuzione di questo stato ricerca, in un percorso precedentemente configurato, il file firmato corrispondente al file XML generato dalla procedura. Questo stato è visibile SOLO se selezionato il check “Fatturazione elettronica firmata” nell’anagrafica contatto (Impostazione Anagrafiche contatti) o nelle Configurazioni Fatturazione Elettronica della società (Configurazione 
connessione a Fluentis Business Hub) ed è, secondo le normative vigenti, uno stato FACOLTATIVO per i documenti di vendita emessi nei confronti di soggetti residenti in Italia mentre è OBBLIGATORIA per i documenti emessi nei confronti di soggetti non residenti, non stabiliti, non identificati in Italia. 
Prima di procedere con la modifica dello stato in FIRMATA, è necessario procedere con la firma dei documenti nello stato GENERATA:
> - se correttamente impostato il campo *Cartella di creazione file da firmare* nella *Configurazione fatturazione elettronica della società* (Configurazione connessione a Fluentis Business Hub), ogni volta che viene generato il file XML, Fluentis salva una copia nel percorso indicato Qualora il campo non sia stato correttamente configurato, sarà possibile scaricare il file XML dalla 
funzione *Registro documenti SdI* tramite l’azione Scarica Allegato del ribbon menu e salvare il file in una cartella di comodo su FileSystem
> - procedere con la firma del file utilizzando un qualsiasi software di firma in dotazione, che permetta l’apposizione della firma digitale in formato Cades o Xades (come disposto dalla 
specifiche tecniche normative) e avendo cura di salvare il file firmato nella cartella indicata nelle Configurazioni di fatturazione elettronica nel campo Cartella file firmati
> - Modificare lo stato del documento in FIRMATA: automaticamente la procedura andrà a reperire 
il file firmato nella cartella indicata al punto precedente e lo acquisisce nel flusso procedurale di Fluentis. In caso di invio a Fluentis Business Hub, sarà QUESTO file acquisito il file oggetto della trasmissione a SdI

## Stato documento FIRMATA

Il documento nello stato FIRMATA, può essere scaricato e gestito esternamente da Fluentis, oppure inviato a Fluentis Business Hub per l’invio a SdI. 
Per scaricare il documento firmato è possibile accedere alla funzione “Registro documenti SdI” ed eseguire il download nel pannello Allegati tramite l’azione “Scarica Allegato” del ribbon menu oppure dal pannello Registro documenti SdI tramite l’azione “Scarica il contenuto del registro” .
Per procedere con la gestione del documento è possibile selezionare uno degli stati proposti:
- *Generata*: annulla l’operazione di firma del file e torna allo stato GENERATO del file XML
- *Da spedire*: il documento viene inserito nell’elenco dei documenti da inviare a Fluentis Business Hub
- *Annullata*: il documento o la registrazione contabile non si riferiscono ad accadimenti da inviare a SdI ma deve essere mantenuti validi per le registrazioni ai fini contabili e IVA
- *Esclusa*: il documento/la registrazione contabile inserita non deve essere inviato a SdI 

## Stato documento ANNULLATA

Il documento/la registrazione contabile nello stato ANNULLATO viene impostato manualmente dall’utente qualora il documento sia rilevante ai fini IVA e ai fini contabili ma non debba rientrare nel ciclo di gestione del Sistema di Interscambio: un esempio potrebbe essere la fattura emessa dal ciclo attivo di Fluentis che 
riceve dal Sistema di Interscambio una notifica di Scarto e quindi, qualora il documento risulti già acquisito 
in contabilità, si rende necessario procedere con:
- l’annullamento della fattura inviata, al fine di non far più confluire il documento in alcun ciclo di spedizione
- la registrazione di un documento di storno valido ai soli fini contabili, che non dovrà essere trasmesso al SdI e che quindi avrà lo stato di ESCLUSA
- l’emissione di un nuovo documento con una numerazione che faccia riferimento a quella iniziale, da inviare nuovamente al SdI           

Qualora il documento si trovi nello stato Annullata ma si renda necessario poter gestire nuovamente il documento ritornando allo stato iniziale, è possibile modificarne lo stato in NON ESAMINATA e procedere con le modifiche sul documento originale.

## Stato documento ESCLUSA

Lo Stato del documento “Esclusa” viene impostato manualmente dall’utente e riguarda i documenti che, 
per loro natura, non devono rientrare nel flusso di gestione della fatturazione elettronica per il Sistema di 
Interscambio. Alcuni esempi dei documenti in questo stato:
- Note di storno interne relative a documenti fattura che sono stati scartati dal SdI e che devono essere riemessi
- Documenti emessi nei confronti di soggetti esteri/non residenti per i quali non si intende gestire l’invio tramite gli stati di elaborazione previsti per la fatturazione elettronica a SdI           

Qualora il documento si trovi nello stato Annullata ma si renda necessario poter gestire nuovamente il documento ritornando allo stato iniziale della fattura, è possibile modificarne lo stato in NON ESAMINATA e procedere con le modifiche sul documento originale.

## Stato documento DA SPEDIRE e IN FLUENTIS BUSINESS HUB 

I documenti generati dal ciclo attivo di Fluentis e pronti per essere inviati al SdI, devono essere contrassegnati dallo stato DA SPEDIRE: questo stato, da utilizzare nel caso in cui sia correttamente configurato il canale Fluentis Business Hub, accoda il documento alla lista documenti che BizLink dovrà processare per l’invio a Sdi.
Non sono previste modifiche di stato in questa condizione perchè il documento, inserito in una “coda di spedizione” di BizLink, verrà inviato al Fluentis Business Hub per la trasmissione al SdI, attraverso processi automatici che vengono eseguiti a regolari intervalli temporali. 
Una volta che il documento viene inviato al servizio Fluentis Business Hub, lo stato si modifica automaticamente in IN FLUENTIS BUSINESS HUB e vengono compilate automaticamente le colonne relative all’informazione dell’avvenuto trasferimento:
- *Stato SdI*:* accoglie la descrizione dello stato del documento, riportando sia lo stato di gestione interno di Fluentis sia lo stato riportato da Fluentis Business Hub e acquisito direttamente da SdI (vediparagrarafo STATI DEI DOCUMENTI).
- *Nome file SdI*: il nome del file che viene creato nel momento in cui il documento viene avanzato nello stato GENERATA; nel formato originale o successivamente all’apposizione della firma digitale, rappresenta il file di fattura da inviare a SdI (Nome del file). 
- *Sdi Id*: l’identificativo univoco che il SdI attribuisce al documento nel momento della ricezione
- *Data ricezione Sdi*: la data in cui il sistema di interscambio ha acquisto il documento inviatogli. Tale informazione viene reperita dalla notifica di ricezione che il SdI rilascia a fronte del recepimento della spedizione e prima di procedere con i controlli formali del file 
- *Data chiusura*: la data di chiusura del flusso di gestione (es. documento Cosegnato)
- *Data ultimo evento*: la data dell’ultimo cambio stato avvenuto sul file o manualmente o per effetto dell’avanzamento dell’elaborazione sul SdI

## Stato documento IN SDI 

QUESTO STATO NON E’ GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS         

Il documento viene contrassegnato automaticamente dai processi di BizLink con lo stato “IN SDI” nel momento in cui è avvenuta la spedizione nel SdI appunto ed è prevenuta a Fluentis Business Hub la notifica di ricezione, come nell’esempio che segue:
Contestualmente alla registrazione della notifica del SdI, si compilano le colonne della form Fatture di Vendita con i campi:
- *Sdi Id*: l’identificativo univoco che il SdI attribuisce al documento nel momento della ricezione
- *Data ricezione Sdi*: la data in cui il sistema di interscambio ha acquisto il documento inviatogli. Tale informazione viene reperita dalla notifica di ricezione che il SdI rilascia a fronte del recepimento della spedizione e prima di procedere con i controlli formali del file          

Accedendo al Registro documenti SdI corrispondente al documento, nel pannello “Registro dei documenti Sdi” in corrispondenza della Transizione Sistema di Interscambio è possibile prendere visione 
della notifica di ricezione.         
In questo stato non è possibile intervenire con una modifica manuale del file ma sarà necessario attendere la notifica di esito dal SdI che potrà essere Non conforme nel caso in cui non siano stati superati i controlli 
formali oppure Emessa nel caso in cui i controlli previsti siano stati superati e quindi il SdI inizia le procedure di consegna.

## Stato documento NON CONFORME 

QUESTO STATO NON E’ GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS        

I documenti contrassegnati dallo stato NON CONFORME sono stati scartati dal sistema di Interscambio a seguito dei controlli formali eseguiti nel momento della ricezione. In questo caso la notifica di scarto riporta anche la motivazione del rifiuto e il documento, se ancora non contabilizzato, dovrà essere riemesso con lo stesso numero e stessa data con la correzione opportuna dell’informazione entro 5 giorni EFFETTIVI dalla
data di scarto. 
Nella griglia della form Fattura di vendita, in corrispondenza del documento non conforme, viene aggiornata la colonna Data ultimo evento con la data e l’ora della Notifica di scarto ricevuta dal SdI.           

Accedendo al Registro dei documenti SdI del documento selezionato, nel pannello Registro dei documenti SdI è riportata, nella riga corrispondente alla Transizione Documento non conforme, la data e l’ora dell’evento e viene visualizzata la notifica di scarto con la motivazione.         
E’ possibile modificare manualmente lo stato del documento a seconda delle azioni che si intende intraprendere successivamente allo scarto:
- NON ESAMINATA: contrassegnando il documento con questo stato, si intende riportare il documento nello stato iniziale pre-elaborazione. Di fatto questo stato permette le modifiche necessarie al documento al fine di correggere le segnalazioni indicate dal SdI. In questo caso il documento dovrà essere riemesso con pari numero e data. *N.B. qualora il documento sia già stato contabilizzato, il check STAMPATO sul documento NON viene automaticamente rimosso ma è necessario eliminare la registrazione contabile abbinata prima di poter apportare qualsiasi modifica alla testata o al corpo del documento. Qualora la modifica da apportare riguardi l’anagrafica cliente (es. codice destinatario errato), non sarà necessario eliminare la registrazione contabile ma sarà sufficiente intervenire sulle informazioni anagrafiche e rigenerare il file XML.*
- ANNULLATA/ESCLUSA: il documento viene annullato e quindi verrà emessa nota di variazione interna per adeguare la situazione contabile e successivamente marcato come ESCLUSO.       

## Stato documento CONSEGNATA 

QUESTO STATO NON E’ GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS           

Quando il SdI riesce a portare a termine la consegna del documento al cessionario/committente, rilascia al cessionario/emittente una ricevuta di consegna, che riporta data e ora di consegna al destinatario finale. 
Nella form di riepilofo Fatture di vendita, il campo Data ultimo evento riporta data e ora della ricevuta di consegna acquisita dal SdI.    
Accedendo al Registro documenti SdI corrispondente al documento, nel pannello “Registro dei documenti SdI”, in corrispondenza della Transizione Documento consegnato, è possibile prendere visione della notifica di consegna.               
Da questo stato non è possibile fare alcun intervento sul documento e il flusso di gestione si considera terminato. NON SI COMPILA LA DATA DI CHIUSURA.

## Stato documento MANCATA CONSEGNA 

QUESTO STATO NON E’ GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS             

Nel caso in cui il SdI non riesca a consegnare il documento, ad esempio per indisponibilità dell'indirizzo telematico di ricezione o perché l’indirizzo non è stato indicato in fattura (codice destinatario 0000000), il SdI:
- invia al cedente/prestatore una notifica di mancata consegna che ne riporta la motivazione 
- mette a disposizione del cessionario/committente la fattura sulla sua area riservata oppure, in caso di soggetto privato, in un’apposita area riservata del sito Web dell’Agenzia delle Entrate


Il cedente/prestatore in questi casi deve dare notifica al cliente della mancata consegna e della disponibilità della fattura nella sua area riservata, a partire dalla data di “messa a disposizione” identificata dal SdI. Nella 
form di riepilogo Fatture di vendita, il campo Data ultimo evento riporta data e ora della ricevuta.          

Accedendo al Registro documenti SdI corrispondente al documento, nel pannello “Registro dei documenti SdI” in corrispondenza della Transizione Mancata consegna, è possibile prendere visione della 
ricevuta di mancata consegna e della data/ora della notifica.           
Quando il documento è nello stato MANCATA CONSEGNA, è possibile modificarne lo stato in NOTIFICA CLIENTE, registrando quindi il momento in cui l’operatore ha notificato al cliente destinatario l’emissione del documento con l’impossibilità di notifica automatica da parte del SdI. 

## Stato documento NOTIFICA CLIENTE 

QUESTO STATO NON E’ GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS         

L’invio di alcuni documenti al SdI potrebbe non terminare correttamente perchè il SdI stesso non riesce ad identificare il destintario del documento, oppure il documento è destinato ad un consumatore finale. 
In questi casi il SdI notifica la mancata consegna e il cessionari/committente deve trasmettere il documento al destinatario finale, con modalità diverse dallo SdI. 
Quando i documenti di Fluentis sono quindi nello stato “Mancata consegna”, l’operatore può agire e decidere di inviare il documento il destinatario finale con altre modalità e marcare poi il documento con lo stato NOTIFICA CLIENTE.            
I documenti in questo stato non sono più modificabili e nella colonna Data ultimo evento viene resa disponibile la data in cui è stata eseguita l’azione di notifica.               
Accedendo al Registro documenti SdI corrispondente al documento, nel pannello Registro dei documenti SdI in corrispondenza della Transizione Notifica manuale al cliente è possibile prendere visionedell’utente che ha eseguito l’operazione e della data e ora della stessa.         
Il ciclo di gestione del documento è concluso.

## Stato documento NON ABBINATA e RICEVUTA 

QUESTO STATO NON E’ GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS          

Gli stati del documento ABBINATA e RICEVUTA sono gestiti solo per il ciclo passivo di documenti di acquisto da soggetti residenti/identificati nel territorio dello Stato italiano.          
Lo stato identifica i documenti acquisiti dal servizio Fluentis Business Hub e non ancora abbinati (NON ABBINATA) ad una registrazione contabile o ad un documento di acquisto registrato nella sezione Acquisti di Fluentis oppure ancora ad un compenso.            
Oppure, file XML acquisti e abbinati ad un evento contabile o a un documento.

## Stato documento RESPINTA (solo per fatturazione PA)

QUESTO STATO NON E’ GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS         

Lo stato del documento RESPINTA si riferisce al documento destinato alla Pubblica Amministrazione non accettato da quest’ultima. Lo stato viene acquisito direttamente dal Fluentis Business Hub qualora
l’Amministrazione ricevente abbia deciso di comunicare il rifiuto della fattura tramite il canale SdI: è facoltà alle Amministrazioni determinare canali di trasmissione differenti da quello del SdI.In questi casi la fattura nello stato RESPINTA potrà essere ANNULATA o ESCLUSA o Da ESAMINARE.            

In questi casi In casi di rifiuto della fattura, la Pubblica Amministrazione destinataria può indifferentemente:
- richiedere al soggetto trasmittente di riemettere la medesima fattura corretta con stesso numero stessa data e la fattura rifiutata non viene contabilizzata, OPPURE
- richiedere una nota di credito e una nuova fattura se la fattura precedente è già stata contabilizzata.        

Si precisa che la trasmissione del rifiuto da parte della PA attraverso il Sistema di Interscambio è una facoltà.

## Stato del documento APPROVATA (solo per fatturazione PA)
  
QUESTO STATO NON E’ GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS           

Lo stato del documento APPROVATA si riferisce al documento destinato alla Pubblica Amministrazione accettato da quest’ultima. Lo stato viene acquisito direttamente dal Fluentis Business Hub qualoral’Amministrazione ricevente abbia accettato il file XML inviato.
In questi casi il flusso si considera concluso e viene compilata la data di chiusura nelle proprietà del documento.

## Stato del documento ACCETTATA PER DECORRENZA (solo per fatturazione PA)

I documenti di fatturazione elettronica inviati al SdI e rivolti alla Pubblica Amministrazione possono acquisire dal SdI lo stato di ACCETTATA PER DECORRENZA: questo stato si riferisce alla condizione per cui il SdI ha 
consegnato la fattura lla PA destinataria la quale, entro il termine dei 15 giorni dal ricevimento, non invia alcuna comunicazione al SdI, nè in merito all’accettazione nè in merito al rifiuto.
In questi caso quindi il SdI inoltra notifica di DECORRENZA DEI TERMINI sia al soggetto trasmittente sia al soggetto ricevente. Tale notifica ha la sola funzione di comunicare alle due parti che il SdI considera chiuso il processo relativo a quella fattura. La notifica di decorrenza termini segnala che il Sistema di Interscambio 
ha regolarmente concluso la gestione (ricezione e consegna) della fattura oggetto della notifica. Pertanto dopo tale notifica il SdI scarterà la fattura, se reinviata, e qualsiasi comunicazione ad essa relativa. La notifica 
di decorrenza termini non ha alcuna implicazione sulla verifica della correttezza e sulla successiva gestione della fattura da parte degli interessati, cioè la Pubblica Amministrazione può ancora decidere di rifiutare la fattura consegnata.              
Lo stato viene acquisito direttamente da Fluentis Business Hub e in questi casi il ciclo di gestione del documento si considera concluso.
