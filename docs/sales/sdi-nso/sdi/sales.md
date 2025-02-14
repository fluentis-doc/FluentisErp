---
title: Gestione del ciclo attivo
sidebar_position: 6
---

La gestione di un documento di fatturazione elettronica per il cliclo attivo secondo le normative vigenti 
prevede le seguenti fasi.      

*FATTURAZIONE PUBBLICA AMMINISTRAZIONE*            

- generazione del documento di vendita
- invio a SdI (NON GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS)
- validazione fattura da parte di SdI (NON GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS)
> - la fattura è corretta; inizia la procedura di consegna; la Pubblica Amministrazione viene individuata correttamente e il SdI inizia le procedure di consegna:
> > - nel caso di buon esito della trasmissione, il SdI invia al soggetto trasmittente 
una ricevuta di consegna della fattura elettronica;
> > - nel caso in cui, per cause tecniche non imputabili al SdI, la trasmissione al 
soggetto ricevente non fosse possibile 5 giorni, il SdI invia al soggetto 
trasmittente una notifica di mancata consegna; resta a carico del SdI l’onere di 
contattare il destinatario affinché provveda tempestivamente alla risoluzione 
del problema ostativo alla trasmissione, e, a problema risolto, di procedere con 
l’invio; se, trascorsi 10 giorni dalla data di trasmissione della notifica di 
mancata consegna, il SdI non è riuscito a recapitare la fattura elettronica al 
soggetto ricevente , inoltra al soggetto trasmittente una definitiva attestazione 
di avvenuta trasmissione della fattura con impossibilità di recapito
> > - il soggetto ricevente entro il termine di 15 giorni dalla prima comunicazione 
inviata al soggetto trasmittente, più precisamente dalla data riportata nella 
ricevuta di consegna o dalla data di trasmissione della notifica di mancata 
consegna, può inviare una notifica di accettazione/rifiuto (notifica di esito 
committente) della fattura
> > - se entro il termine dei 15 giorni suddetto il SdI non riceve alcuna 
comunicazione, il SdI inoltra notifica di decorrenza dei termini sia al soggetto 
trasmittente sia al soggetto ricevente . Tale notifica ha la sola funzione di 
comunicare alle due parti che il SdI considera chiuso il processo relativo a 
quella fattura. La notifica di decorrenza termini segnala che il Sistema di 
Interscambio ha regolarmente concluso la gestione (ricezione e consegna ) 
della fattura oggetto della notifica. Pertanto dopo tale notifica il SdI scarterà la 
fattura, se reinviata, e qualsiasi comunicazione ad essa relativa. 
> - la fattura non è corretta e quindi viene inviato all’emittente una notifica di scarto e la fattura 
dovrà essere riemessa

*FATTURAZIONE B2B/B2C*

- generazione del documento di vendita
- invio a SdI (NON GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS)
- validazione fattura da parte di SdI (NON GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS)
> - la fattura è corretta: inizia la procedura di consegna e si possono aprire due scenari:
> > - il canale di invio per il destinatario viene riconosciuto e la fattura viene consegnata
> > - il canale di invio per il destinatario non viene riconosciuto e quindi copia della fattura viene salvata sull’area riservata del destinatario che verrà avvisato dall’emittente dell’emissione della fattura
> > - il destinatario è un soggetto privato quindi copia della fattura viene salvata sull’area 
riservata del destinatario che verrà avvisato dall’emittente dell’emissione della fattura
> - la fattura non è corretta e quindi viene inviato all’emittente una notifica di scarto e la fattura dovrà essere riemessa
> > - il canale di invio per il destinatario non viene riconosciuto e quindi copia della fattura viene salvata sull’area riservata del destinatario che verrà avvisato dall’emittentedell’emissione della fattura
> > - il destinatario è un soggetto privato quindi copia della fattura viene salvata sull’area riservata del destinatario che verrà avvisato dall’emittente dell’emissione della fattura
> - la fattura non è corretta e quindi viene inviato all’emittente una notifica di scarto e la fattura dovrà essere riemessa

In Fluentis è possibile generare documenti del ciclo attivo di vendita e, per i clienti per i quali è stata correttamente impostata la fatturazione elettronica nei parametri anagrafici, prepare il il file XML da inviare al SdI. Ad ogni fase prevista a livello normativo CORRISPONDE uno STATO del documento in Fluentis.         
Qualora in Fluentis risulti correttamente configurata la comunicazione con Fluentis Business Hub (nellasezione Configurazione Fatturazione Elettronica per Società), sarà possibile inoltre inviare direttamente il file al SdI e ricevere le relative notifiche, diversamente, una volta generato il file XML relativo alla fattura, sarà possibile scaricare il file e procedere al suo invio tramite altri canali esterni a Fluentis.            
Le tipologie di documento che per le quali è possibile in Fluentis gestire la generazione del file XML e l’invio a SdI (previste anche dalle vigenti normative), sono:
- Fattura di vendita
- acconto/anticipo su fattura
- acconto/anticipo su parcella
- nota di credito
- nota di debito
- Parcella         

Il file XML generato riporterà al suo interno la codifica relativa al tipo documento e, indipendentemente dalla 
tipologia, le modalità operative di generazione del file XML ed eventuale invio a SdI sono le medesime per 
tutte le tipologie di file. All’interno del file XMl generato:
- per i soggetti identificati/residenti nel territorio dello stato, il soggetto destinatario del documentoviene identificato tramite il codice destinatario o PEC o indirizzo telematico 
- per le Pubbliche Amministrazioni, il codice destinatario è rappresentato dal codice IPA identificativo dell’Ufficio preposto al ricevimento della fattura.            

Tali impostazioni sono inserite nell’anagrafica CLIENTE di ogni soggetto censito in Fluentis.

## Numerazione univoca dei documenti

Ai fini della corretta e univoca numerazione dei documenti di vendita necessaria per evitare lo scarto di documenti riconosciuti dal SDI come già presentati, si consiglia di definire per ogni Tipo documento Fattura di vendita una numerazione univoca che permetta di identificare correttamente il documento, a titolo di esempio, impostando un suffisso “/B” dopo la numerazione. Si ricorda che, per gestire i numeratori dei documenti di vendita, è necessario accedere alla funzione Tabelle > Vendita > Numerazione fatture.           
Per impostare il numero fattura (o bolla) con il barrato (esempio 1/A, 2/A.... 1/B, 2/B), impostare nella tabella Numeratori, la formula 
**number.ToString()+"/B"**            

Poi nel report sostituire il campo standard (es. Number) con un campo calcolato (es. CalcNumber) dove all’interno ci sia questa expression:         
**Iif(IsNullOrEmpty([FormattedNumber]), [Number], [FormattedNumber])**          

ATTENZIONE funziona solo nel report, nelle form si continuerà a visualizzare il numero normale senza il 
barrato ma nel file XML verrà riportato correttamente il numero univoco.            
In sintesi per gestire l’emissione e la trasmissione delle fatture elettroniche in Fluentis i passi da seguire sono:
- Impostazione Anagrafiche contatti
- Impostazione Tabelle di gestione
- EMISSIONE E TRASMISSIONE DOCUMENTI DI VENDITA con le funzioni predisposte e descritte nel paragrafo MODIFICARE E GESTIRE GLI STATI DEI DOCUMENTI

## Emissione e trasmissione documenti di vendita

La gestione dei documenti di vendita da trasmettere in formato elettronico al Sistema di Interscambio inizia 
con la creazione del documento dal ciclo attivo di Fluentis nello stato di NON ESAMINATA: menu Home > 
Vendite >Fatture > Nuovo.
Una volta creato il documento, la generazione del documento XML corrispondente e la trasmissione dei 
documenti al SdI (tramite Fluentis Business Hub), avvengono attraverso la gestione manuale dello stato del 
documento relativamente alla Fatturazione elettronica da parte dell’operatore nella sezione predisposta: 
fino ad arrivare allo stato “Da spedire”, con il quale viene inserito il documento in una “coda di spedizione” 
e, attraverso un processo schedulato di BizLink, inviati a Fluentis Business Hub per la gestione. Da questo 
momento, lo stato dei documenti verrà aggiornato automaticamente da processi silenti automatici e non 
sarà possibile alcun intervento manuale da parte dell’operatore, fino alla ricezione della notifica di scarto, di 
consegna o di mancata consegna. Gli stati dei documenti e notifiche di consegna saranno sempre visibili nella 
form RICERCA FATTURE DI VENDITA e nella funzione REGISTRO DEI DOCUMENTI SdI.

## Come modificare e gestire gli stati dei documenti

Dopo aver generato il documento di vendita, la modifica degli stati dei documenti può essere gestita singolarmente per documento oppure massivamente attraverso la procedura di CAMBIO STATO, all’interno di 4 funzionalità:
1) singolarmente dalla form di gestione della singola fattura ( form Fattura) con la funzione prevista nel Ribbon menu nella sezione Fatturazione elettronica
2) massivamente dalla form RICERCA FATTURE DI VENDITA con la funzione prevista nel Ribbon menu nella sezione Fatturazione elettronica dopo aver selezionato i documenti da gestire
3) singolarmente dalla funzione REGISTRO DEI DOCUMENTI SdI con la funzione prevista nel Ribbon menu 
4) massivamente dalla funzione di gestione dello Stato prevista nel Ribbon menu dell’Application BizLink – Documenti SDI – DOCUMENTI DI VENDITA IN USCITA da Bizlink, dopo aver selezionato i documenti da gestire        
Il monitoraggio dei vari stati dei documenti e la loro gestione è possibile in qualsiasi momento accedendo alla videata di RICERCA, accessibile dalla voce di menu Vendita> Fatture> Fatture;
oppure. dall’Application BizLink, accedendo alla voce Documenti SDI > DOCUMENTI DI VENDITA IN USCITA.

## Ricerca fatture di vendita

La videata di ricerca “Fatture di vendita” accessibile dal punto di menu Home > Vendita > Fatture >Fatture, 
accoglie le informazioni relative agli stati e alla gestione dei documenti inviati tramite Fluentis al Fluentis Business Hub e le relative notifiche di stato.           
Le colonne dalle quali è possibile monitorare lo stato del documento, sia quando risulta ancora in gestione all’operatore sia quando inviato e quindi gestito da Fluentis Business Hub sono:
- *Stato SdI*: accoglie la descrizione dello stato del documento, riportando sia lo stato di gestione interno di Fluentis sia lo stato riportato da Fluentis Business Hub e acquisito direttamente da SdI (vediparagrarafo STATI DEI DOCUMENTI).
- *Nome file SdI*: il nome del file che viene creato nel momento in cui il documento viene avanzato nello stato GENERATA; nel formato originale o successivamente all’apposizione della firma digitale, rappresenta il file di fattura da inviare a SdI (Nome del file). 
- *Sdi Id*: l’identificativo univoco che il SdI attribuisce al documento nel momento della ricezione (NON GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS)
- *Data ricezione Sdi*: la data in cui il sistema di interscambio ha acquisto il documento inviatogli. Tale 
informazione viene reperita dalla notifica di ricezione che il SdI rilascia a fronte del recepimento della spedizione e prima di procedere con i controlli formali del file (NON GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS)
- *Data chiusura*: la data di chiusura del flusso di gestione (es. documento Cosegnato) (NON GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS)
- *Data ultimo evento*: la data dell’ultimo cambio stato avvenuto sul file o manualmente o per effetto dell’avanzamento dell’elaborazione sul SdI            

I campi relativi alla gestione del documento elettronico sono anche utilizzabili come filtri di ricerca 
documenti dall’expander Stato della Fattura Elettronica nel pannello di filtro.
Dalla videata di ricerca Fatture di vendita è possibile, selezionando una sola fattura oppure fatture con il medesimo Stato SdI, modificarne lo stato di elaborazione utilizzando la funzione Stato della sezione Fatturazione elettronica del ribbon menu.
In caso di selezione di un unico documento fattura e cliccando con il tasto destro del mouse sulla colonna in corrispondenza del nome del file XML e selezionando l’azione Apri Form oppure  selezionando l’azione Registro dei documenti SdI nella sezione Fatturazione elettronica del 
ribbon menu si accede al Registro documenti SdI nel quale è possibile prendere visione del documento XML generato e della storia di gestione del documento di vendita.

## Registro dei documenti SDI

La funzione Registro dei documenti SdI consente di visualizzare per i documenti fatture di vendita gestiti lo stato di elaborazione del documento e di visionare 
- il file XML generato
- il file PDF allegato (se richiesto come allegato al documento XML)
- le notifiche inviate da Fluentis Business Hub e acquisite direttamente dal SdI (NON GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS)        

Nella gestione è possibile inoltre monitorare gli ultimi eventi relativi alla gestione del file e lo storico delle azioni eseguite. 
Il Registro dei documenti SdI è accessibile:
- dalla videata di Ricerca fatture di vendita selezionando un file fattura
- dalla videata di gestione del singolo documento Fattura 
- dalla funzione voce Documenti SDI > Documenti vendita in uscita           

La videata Registro dei documenti SdI si compone di una sezione di testata riepilogativa e due pannelli:
- Allegati
- Registro dei documenti SdI             

Nella sezione di Testata vengono riepilogati i dati del documento di fattura:
- Stato della fattura elettronica: lo stato del documento relativo al suo invio al SdI tramite Fluentis Business Hub (per dettagli sui tipi stati documenti vedi paragrafo STATI DEI DOCUMENTI)
- Tipo fattura: il tipo di documento inviato – il codice Fluentis 
- Data, Numero, Cliente: la data, il numero del documento e il cliente intestatario
- Nome file SdI: il nome del file il nome del file XML che viene creato nel momento in cui il documento viene avanzato nello stato GENERATA; nel formato originale o successivamente all’apposizione della firma digitale, rappresenta il file di fattura da inviare a SdI (per dettagli sulla compilazione del nome del file v. Paragrafo Nome del file).
- SdI Id: l’identificativo univoco attribuito dal SdI al file fattura nel momento in cui il file viene ricevuto. Questo identificativo sarà utilizzato dal SdI per tutte le successive notifiche inviate al trasmittente(NON GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS)
- Data ricezione SdI: la data in cui il SdI riceve il file fattura e invia la Notifica di ricezione al trasmittente(NON GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS)
- Data ricevimento del cliente: coincide con la data consegna del documento al cliente oppure la datadi “messa a disposizione” del documento sull’area riservata del cliente. Quest’ultima casistica si riferisce agli invii per cui il SdI non riesce ad individuare correttamente il committente/cessionario(NON GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS)
- Data ultimo evento:si riferisce all’ultima azione compiuta dall’operatore o all’ultima notifica ricevuta dal SdI durante il processo di gestione del documento

## Pannello ALLEGATI 

Nel pannello ALLEGATI vengono presentati tutti i documenti relativi alla gestione elettronica della fattura, a partire dal file XML del documento fino all’ultima notifica ricevuta dal SdI. Cliccando nella in corrispondenza del documento nella griglia dei documenti, il documento viene visualizzato nella parte destra della videata 
con un foglio di stile che interpreta il file XML di fattura o di notifica e lo visualizza con un formato utente semplificato, ad esempio per il file xml:
La griglia dei documenti sulla sezione sinistra della videata presenta per ogni file le seguenti informazioni:
- *Data*: la data di acquisizione dell’allegato
- *Tipo del contenuto del file*: un identificativo tecnico relativo al foglio di stile adottato per visualizzare il file xml 
- *Nome e Descrizione*: la descrizione il file xml visualizzato        

Se nel file XML generato sono stati previsti allegati, nella parte inferiore del file xml visualizzato, si presenta una griglia con l’elenco degli allegati al documento. Cliccando in corrispondenza del nome del file allegato, è possibile scaricare il file e salvarlo per utilizzi esterni alla gestioneI file allegati agli stati del documento possono essere scaricati dalla funzione Scarica Allegato presente nel ribbon menu.

## Pannello REGISTRO DEI DOCUMENTI SDI 

Il pannello Registro dei documenti SdI rappresenta lo storico di tutte le fasi di gestione del socumento elettronico, dal momento della sua generazione in formato XML al momento della consegna o dell’eventuale scarto.
Nella griglia degli eventi, per ogni evento viene rappresentata la “Transizione” relativa ossia il cambio stato intervenuto sul documento e, dove previsto l’intervento manuale, il nome e la data dell’operatore che ha eseguito la transizione. Lo stato del documento collegato alla generazione del file XML e gli stati acquisiti da 
SdI per i quali è prevista una notifica, hanno collegato anche il file XML corrispondente.         
Cliccando in corrispondenza dell’evento collegato ad un file XML, si attiva la visualizzazione del file, utilizzando un foglio di stile che consente la visualizzazione del file XML in un formato utente semplificato, come ad esempio per un file di notifica di ricezione. La funzione Scarica contenuto del Registro permette il download del file selezionato e visualizzato. 

## Documenti di vendita in uscita

Nell’ application BizLink è possibile accedere alla voce di menu Documenti SDI – Documenti vendita in 
uscita e visionare lo stato generale di tutti i documenti di vendita preparati dal flusso attivo, gestire lo 
stato, visionare lo storico degli avanzamenti degli stati. Il dialogo *Documenti vendita in uscita* è diviso in due sezioni, una di testata che contiene i campi di filtro 
utilizzabili per filtrare i documenti e una griglia di risultato della ricerca effettuata.         

I valori presentati nella griglia sono:
- *Stato SdI*: lo stato del documento relativo al suo invio al SdI tramite Fluentis Business Hub (perdettagli sui tipi stati documenti vedi paragrafo STATI DEI DOCUMENTI)
- *Tipo*: il codice di riferimento del tipo documento di vendita
- *Data, Numero, Cliente*: la data, il numero del documento e il cliente intestatario
- *Data di ricevimento del cliente*: la data consegna del documento al cliente oppure la data di “messa a disposizione” del documento sull’area riservata del cliente. Quest’ultima casistica si riferisce agli invii per cui il SdI non riesce ad individuare correttamente il committente/cessionario (NON GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS)
- *Nome file SdI*: il nome del file il nome del file XML che viene creato nel momento in cui il documento viene avanzato nello stato GENERATA; nel formato originale o successivamente all’apposizione della firma digitale, rappresenta il file di fattura da inviare a SdI (per dettagli sulla compilazione del nome del file v. Paragrafo Nome del file).
- *Data ultimo evento*: si riferisce all’ultima azione compiuta dall’operatore o all’ultima notifica ricevuta dal SdI durante il processo di gestione del documento.           

Cliccando in corrispondenza dell’expander di una fattura si apre il dettaglio delle transizioni relative agli stati del documento e vengono visualizzate le singole transizioni intervenute nella gestione del documento con la relativa data di esecuzione e il nome dell’eventuale file generato dal cambio stato.

I documenti presentati nella griglia Registro dei documenti SdI sono tutti quelli creati dal flusso attivo di gestione dei documenti Fattura, indipendentemente dallo stato; l’azione doppio click in corrispondenza di una riga di fattura apre il pannello Registro documenti SdI nel quale è possibile visionare i documenti creati 
durante la gestione del file fattura e lo storico degle transizioni.         

Nella griglia Registro documenti SdI, selezionando un documento fattura o più documenti fattura nel medesimo stato, è possibile gestire lo stato di lavorazione del documento utilizzando la combo Stato nellaribbon menu e selezionando il nuovo stato del documento.
Selezionando una fattura dalla griglia, con la funzione Apri documento dal ribbon menu, viene aperto il documento fattura.

