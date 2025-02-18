---
title: Cos'è la fatturazione elettronica
sidebar_position: 1
---

La fatturazione elettronica è un sistema digitale di emissione e trasmissione delle fatture che sostituisce il 
supporto cartaceo a favore di nuove modalità digitali di comunicazione.
Con la fatturazione elettronica le fatture e le note di variazione emesse dovranno essere essere prodotte in 
nuovo formato digitale “XML eXtensible Markup Language”, un linguaggio che consente ai supporti 
informatici di definire e controllare con procedure standardizzate il significato degli elementi contenuti, 
verificando così le informazioni ai fini dei controlli previsti per legge.
L’ordinamento italiano ha introdotto, con la legge finanziaria del 2008 la gestione della fatturazione 
elettronica nel rispetto della normativa comunitaria e dal 6/06/2014 ha reso obbligatoria la fattura in 
formato elettronico per l’emissione dei documenti alla Pubblica Amministrazione.
La “fattura elettronica” prevista dalla normativa italiana è un file in formato XML (eXtensible Markup 
Language) conforme alle specifiche tecniche, di cui all’allegato A del provvedimento del Direttore 
dell’Agenzia delle Entrate, protocollo n. 89757/2018 del 30/04/2018. Il contenuto di qualsiasi fattura è 
regolato, in generale, dagli articoli 21 e 21-bis del D.P.R. n. 633/1972.
Il file fattura generato con il nuovo standard XML, contiene una diversa rappresentazione dei dati obbligatori 
richiesti dalla normativa IVA, integrati eventualmente con ulteriori informazioni o elementi che possano 
facilitare la gestione e contabilizzazione delle stesse.
L’art. 1, c. 917, lett. a e b della Legge n. 205 del 27 dicembre 2017 (Legge di Bilancio 2018) ha introdotto, a 
partire dal 1° gennaio 2019, l’obbligo di fatturazione elettronica per le cessioni di beni e le prestazioni di 
servizi effettuate tra soggetti residenti, stabiliti o identificati nel territorio dello Stato utilizzando, le 
medesime soluzioni informatiche già adottate per l’emissione della fattura elettronica verso la PA
Le fatture elettroniche fin d’ora emesse a favore della PA e successivamente anche quelle emesse per il B2B 
e B2C, sono veicolate e inviate al “Sistema di Interscambio”, ovvero un sistema informatico gestito 
dall'Agenzia delle Entrate in grado di ricevere le fatture elettroniche, effettuare controlli sui file ricevuti e 
provvedere al corretto scambio di informazioni con il soggetto trasmittente nonchè inoltrare le fatture ai 
soggetti destinatari.
Le imprese coinvolte nel proceddo di fatturazione elettronica saranno interessati sia per quanto riguarda la 
gestione del ciclo ATTIVO ossia nel momento in cui viene emessa la fattura relativa a prodotti venduti o 
servizi resi, sia per quanto riguarda il ciclo PASSIVO ossia la ricezione dei documenti emessi dai propri 
fornitori.

## Flusso operativo in Fluentis

In merito alla gestione della Fatturazione elettronica e degli adempimenti ad essa connessi, in Fluentis è 
possibile gestire:
- emissione dei documenti di vendita verso soggetti residenti/stabiliti/identificati nel territorio dello 
stato Italiano
- emissione dei documenti di vendita verso la Pubblica Amministrazione
- acquisizione dei documenti elettronici di acquisto emessi da fornitori italiani (NON GESTITO PER CHI 
NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS)
- Comunicazione al SdI dei documenti di acquisto e vendita emessi da fornitori esteri o rivolti a clienti 
esteri (soggetti NON residenti/stabiliti/identificati nel territorio italiano) (ex spesometro)             

La gestione dei flussi prevede la configurazione di una connessione in BizLink, dedicata alla comunicazione 
con il servizio Fluentis Business Hub. Il servizio ha lo scopo e l’obiettivo di inviare i documenti al SdI, acquisire 
da SdI i documenti di fatturazione relativi al ciclo passivo (NON GESTITO PER CHI NON HA SOTTOSCRITTO IL 
CONTRATTO FE CON FLUENTIS), acquisire le notifiche e i messaggi relativi alle varie fasi di invio delle fatture 
attive.         

Il protocollo di comunicazione tra Fluentis Business HUB e il SdI (NON GESTITO PER CHI NON HA 
SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS) è il sistema di cooperazione applicativa basato sul servizio 
Web Service: 
- la fattura, emessa da Fluentis, transita tramite la connessione di BizLink al Fluentis Business Hub 
- Il servizio Fluentis Business Hub invia i documenti al SdI 
- Fluentis Digital Hub acquisisce da SdI le notifiche relative allo stato dei documenti e le trasferisce al 
gestionale
- Fluentis Digital Hub riceve le fatture passive trasferite dai fornitori dei clienti Fluentis
- Smista le fatture sulle singole configurazioni dei clienti        

In Fluentis, sarà possibile quindi:
- generare fatture di vendita in formato elettronico secondo il tracciato previsto per la fatturazione 
B2B/B2C/PA
- qualora si decida di firmare digitalmente i file fattura o qualora tale passaggio sia obbligatorio per la 
natura stessa dei documenti, gestire l’esportazione dei documenti XML in una cartella di file system 
esterna per firmare digitalmente i documenti utilizzando un software di firma fornito da terze parti 
e successivamente reimportare il file firmato (.xml è .p7m)
- visualizzare il contenuto del file XML ed eventualmente allegare al file XML anche il file PDF (formato 
standard) del documento di fattura
- inviare i documenti al SdI (NON GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON 
FLUENTIS)
- monitorare lo stato dei documenti inviati attraverso griglie di ricerca massive, campi di 
visualizzazione dello stato dei documenti nei singoli documenti e cruscotti per la visualizzazione dei 
log trasmessi dal SdI
- acquisire fatture passive inviate dai fornitori (NON GESTITO PER CHI NON HA SOTTOSCRITTO IL 
CONTRATTO FE CON FLUENTIS)          

La gestione della trasmissione e acquisizione dei documenti elettronici avviene tramite la procedura di 
CAMBIO STATO dei documenti.

Fluentis consente, attraverso Fluentis Business Hub, il trasferimento al SdI sia di file di fattura firmati, sia di 
file senza la firma digitale. Per apporre la firma digitale sui documenti generati, sarà necessario eseguire lo 
scarico dei documenti su una cartella di filesystem, applicare la firma digitale con un software di firma 
esterno (es. DIKE) e reimportare il file così firmato (xml o p7m) che sarà poi inviato al SdI nel nuovo formato. 
Una volta inviato al SdI, fluentis acquisice le notifiche prodotte dal Sistema di Interscambio e le abbina ai 
documenti relativi, gestendo l’evoluzione degli stati del documento.
Qualora non si disponga di una connessione attiva al Fluentis Business Hub, sarà comunque possibile 
generare i file XML del ciclo attivo per i contatti selezionati, scaricare i file prodotti e procedere con l’invio 
degli stessi tramite canali esterni a Fluentis. 
I file XML generati da Fluentis e acquisiti dal SdI relativi al ciclo passivo, sono conservati nella Gestione 
documentale di Fluentis, oltre ad essere resi sempre disponibili nelle varie fasi di gestione del documento di 
vendita attraverso l’apposita funzionalità **Registro dei documenti SDI** nella quale è possibile 
visualizzare lo storico temporale della trasmissione del documento e scaricare e visionare i file prodotti 
da Fluentis (XML e PDF) e recepiti da SdI. 
Il cliclo passivo di fatturazione elettronica verso privati non ammette il possibile rifiuto da parte del 
destintario del documento di fatturazione che dovrà pertanto essere gestito come adempimento contabile 
secondo la normativa vigente.