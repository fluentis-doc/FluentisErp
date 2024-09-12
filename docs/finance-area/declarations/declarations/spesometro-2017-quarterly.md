---
title: Spesometro 2017 trimestrale
sidebar_position: 8
---

Da questa form è possibile ricercare le elaborazioni dello Spesometro trimestrale già elaborate e presenti nella base dati, oppure procedere alla creazione di un nuovo Spesometro.

PREMESSA:

L'obbligo dello Spesometro è stato introdotto dall'art. 21 del DL 31 maggio 2010, n. 78, che ha previsto l'invio telematico di tutte le operazioni attive e passive rilevanti ai fini Iva (cessioni ed acquisti di beni, prestazioni di servizi rese e ricevute). 

  

Dal 2017 il decreto 193/2016 ha introdotto l'obbligo di comunicazione trimestrale.

**Documenti che non rientrano nello spesometro trimestrale**:

- Non devono essere comunicati i dati delle fatture elettroniche, emesse e ricevute, che sono transitate mediante il Sistema di Interscambio (SdI). Nel caso in cui non tutte le fatture emesse e ricevute transitino dallo SdI il contribuente potrà limitarsi a inviare telematicamente i dati delle altre fatture, oppure, nel caso fosse per lui più comodo, potrà inviare comunque i dati relativi a tutte le fatture, comprese quelle elettroniche;

- Non vanno comunicati i dati contenuti in documenti diversi dalle fatture (come ad esempio i dati delle schede carburante).

ATTIVITA' PRELIMINARI:

Al fine di procedere con la corretta generazione del file (di tipo xml da caricare sull'apposito portale per l'interscambio con l'Agenzia delle Entrate) è necessario predisporre alcuni archivi di base all'interno delle tabelle di Fluentis. 

 

- ** [Tipi Documento](/docs/configurations/tables/general-settings/document-types) **

- ** [Aliquote/Modalità Iva ](/docs/configurations/tables/finance/vat-rates) **

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image01.png)

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image02.png)

All'interno delle tabelle di cui sopra è necessario, in particolare, gestire i campi **Codice P.A.** (i medesimi che vengono gestiti per la fatturazione elettronica nei confronti delle Pubbliche Amministrazioni - trattandosi di un sistema di interscambio similare).

La codifica da adottare è stata pubblicata dall'Agenzia delle Entrate nell'ambito della documentazione tecnica per la creazione del file telematico e la riportiamo di seguito:

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image03.png)

INDICAZIONI OPERATIVE:

 

**Tutte le operazioni che transitano per movimenti iva sono inserite nella dichiarazione: in caso sia necessario (es.: schede carburanti), queste possono essere cancellate dalla dichiarazione manualmente.**

Le fatture intracomunitarie saranno inserite automaticamente, sulla base del tipo movimento IVA della causale utilizzata, con codice documento TD10 (le note di credito intracomunitarie restano con codice TD04): in caso siano servizi sarà necessario intervenire nella riga della dichiarazione con una rettifica manuale. 

 

Le aliquote iva utilizzate negli acquisti in reverse charge, dall'anno 2021, non vanno più inviate con codice N6 e quindi non vengono più automaticamente compilate con questo codice di esenzione (l'automatismo permare attivo per gli anni precedenti): anche in questo caso, comunque, il codice d'esenzione è disponibile nella procedura per modifiche manuali. 

 

I codici relativi all'esigibilità iva ([I] iva ad esigibilità immediata, [D] iva ad esigibilità differita, [S] iva con scissione dei pagamenti (split payment)), sono assegnati automaticamente dal tipo di movimento IVA della causale contabile. 

 

I dati della detraibilità/deducibilità dell'iva indicata, indicati sempre come non obbligatori nel tracciato, non sono gestiti. 

 

PROCEDURA DI CREAZIONE:

**Dati di testata**:

Indicare l'anno e il trimestre per il quale generare il file.

 

Gli altri campi della tstata  vanno valorizzati solo se il soggetto obbligato alla comunicazione dei dati fattura non coincide con il soggetto passivo IVA al quale i dati si riferiscono.

NON devono essere valorizzati se il soggetto trasmittente:

 

- coincide  con il soggetto IVA al quale i dati si riferiscono;

- è legato da vincolo di incarico con il soggetto IVA al quale i dati si riferiscono;

- è un intermediario. 

 

**Percorso file:** permette di specificare un percorso locale per il salvataggio del file da inviare telematicamente. Il file verrà comunque salvato nel documentale di Fluentis e sarà possibile scaricarne una copia sul pc locale.

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image04.png)

**Dati Fatture**:

Premere il pulsante **Calcola** nella ribbon bar per riprendere i dati iva del trimestre, che saranno suddivisi nella sezione delle fatture emesse e in quelle ricevute.

In questa fase, il sistema provvederà a verificare se sono presenti più documenti di quanti il ministero ha previsto che se ne possano inserire in ogni file (1000 clienti e 1000 fatture per ognuno per le emesse, 1000 fornitori e 1000 fatture per ognuno per le ricevute). 

 

Nel caso in cui tale limite venga superato, Fluentis provvederà ad avvisare l'utente che sarà necessario creare un'altra dichiarazione per inserire i rimanenti documenti (si possono inviare N file).  

 

Inoltre, verrà già codificato il nome file secondo la nomenclatura prevista (campi Nome file e No. Progressivo).  

 

Il campo “Identificativo file” serve per memorizzare a sistema la ricevuta che il sistema telematico del ministero restituirà: una volta memorizzato tale campo, la sezione non sarà più editabile. 

 

Visto che è possibile indicare fino a 1000 documenti per ogni controparte, le righe vengono numerate progressivamente in ordine di partita iva della controparte, non essendo di alcuna rilevanza la protocollazione dei registri iva originari.

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image05.png)

**SEZIONE DTE / DTR (fatture emesse / ricevute)**

 

I dati da inviare per la sezione DTE e i clienti sono i seguenti (dal 2018): 

 

Codice nazione della partita iva (editabile in griglia)

Partita iva (o in alternativa il codice fiscale) (partita iva editabile in griglia)

Il sottoconto di riferimento (e la relativa anagrafica collegata) sono modificabili in griglia

 

Per ogni documento, sono da indicare: 

 

Il codice del tipo documento (ripreso dalla tabella Tipi documento ma editabile in griglia)

La data e il numero del documento di vendita (editabili in griglia) 

 

Nella griglia in basso vengono indicati i dati iva della registrazione, si devono indicare: 

 

Imponibile

Importo iva

Percentuale iva

Codice di esenzione (obbligatorio nel caso non ci sia iva) 

 

In questa sezione i dati sono dettagliati, nel file saranno raggruppati per percentuale/codice esenzione.

**RETTIFICHE/ANNULLAMENTI**

 

Nel caso in cui sia necessario inviare una rettifica per un documento già inviato, sarà necessario creare una nuova dichiarazione: non è consentito inserire, in un file, più di una rettifica o annullamento (cioè una rettifica di DTE nel suo file, una rettifica di DTR nel suo file, un annullamento nella sezione ANN), per cui sarà necessario creare N dichiarazioni. 

 

Per creare una rettifica di una registrazione già inviata, quindi, è sufficiente creare una nuova dichiarazione e utilizzare il pulsante ‘Inserimento manuale di una rettifica' per andare alla ricerca delle registrazioni già inviate per il trimestre indicato. 

 ![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image06.png)



 Una volta selezionato da questa ricerca, Fluentis riporterà la riga nella dichiarazione valorizzando nella stessa anche il campo dell'identificativo file e il numero progressivo all'interno del dichiarativo:

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image07.png)

E' comunque possibile valorizzare questi dati manualmente e/o modificarli. La sezione dell'annullamento prevede i soli dati dell'identificativo file e numero da annullare come di seguito evidenziato:

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image08.png)

**CREAZIONE DEL FILE**

 

Una volta completata la dichiarazione del trimestre, sarà possibile procedere alla creazione del file attraverso il pulsante **Crea file**

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image09.png)

Una volta completata l'operazione, i file saranno allegati alla dichiarazione stessa e saranno scaricabili dal documentale come di seguito visualizzato nell'immagine.

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image10.png)

**ERRORI NEL TRACCIATO**

 

I file visualizzati come allegato con nome ‘...Errors' vengono valorizzati a scopo di controllo interno e segnalano possibili errori nei dati presenti nella dichiarazione (partite iva mancanti ecc...).

ATTENZIONE: i files contenenti gli errori rappresentano una indicazione di massima e NON sostituiscono la procedura di controllo ufficiale dell'Agenzia delle Entrate, tale procedura è liberamente scaricabile dal sito internet dell'Agenzia Entrate. Vedere in tal senso l'allegato al presente articolo. 








