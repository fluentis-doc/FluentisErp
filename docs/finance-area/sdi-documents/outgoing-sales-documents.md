---
title: Documenti Vendita in uscita
sidebar_position: 2
---

LINK:

** [Documenti acquisto in entrata](/docs/finance-area/sdi-documents/incoming-purchase-documents) **

Comunicazioni IVA in uscita

** [Documenti esteri in uscita](/docs/finance-area/sdi-documents/outgoing-foreign-purchase-documents) **

La form “**Documenti vendita in uscita**“ è divisa in due sezioni, una di testata che contiene i campi di filtro utilizzabili per filtrare i documenti e una griglia di risultato della ricerca effettuata:

![](/img/it-it/finance-area/sdi-documents/outgoing-sales-documents/image01.png)

I valori presentati nella griglia sono:

-      **Stato SdI**: lo stato del documento relativo al suo invio al SdI tramite Fluentis Business Hub

-      **Tipo**: il codice di riferimento del tipo documento di vendita

-      **Data**,**Numero,Cliente :** la data, il numero del documento e il cliente intestatario

-      **Data di ricevimento del cliente**: la data consegna del documento al cliente oppure la data di “messa a disposizione” del documento sull'area riservata del cliente. Quest'ultima casistica si riferisce agli invii per cui il SdI non riesce ad individuare correttamente il committente/cessionario

-      **Nome file SdI:** il nome del file il nome del file XML che viene creato nel momento in cui il documento viene avanzato nello stato GENERATA; nel formato originale o successivamente all'apposizione della firma digitale, rappresenta il file di fattura da inviare a SdI.

-      **Data ultimo evento**: si riferisce all'ultima azione compiuta dall'operatore o all'ultima notifica ricevuta dal SdI durante il processo di gestione del documetno

Cliccando in corrispondenza dell'expander di una fattura (pulsantino + all'estrema sinistra)  si apre il dettaglio delle transizioni relative agli stati del documento e vengono visualizzate le singole transizioni intervenute nella gestione del documento con la relativa data di esecuzione e il nome dell'eventuale file generato dal cambio stato:

![](/img/it-it/finance-area/sdi-documents/outgoing-sales-documents/image02.png)

I documenti presentati nella griglia Registro dei documenti SdI sono tutti quelli creati dal flusso attivo di gestione dei documenti Fattura, indipendentemente dallo stato; l'azione doppio click in corrispondenza di una riga di fattura apre il pannello  nel quale è possibile visionare i documenti creati durante la gestione del file fattura e lo storico delle transizioni.

![](/img/it-it/finance-area/sdi-documents/outgoing-sales-documents/image03.png)

Nella griglia Registro documenti SdI, selezionando un documento fattura o più documenti fattura nel medesimo stato, è possibile gestire lo stato di lavorazione del documento utilizzando la combo Stato nella ribbon menu e selezionando il nuovo stato del documento:

![](/img/it-it/finance-area/sdi-documents/outgoing-sales-documents/image04.png)

Selezionando una fattura dalla griglia, con la funzione **![](/img/it-it/finance-area/sdi-documents/outgoing-sales-documents/image05.png) Apri documento**  dal ribbon menu, viene aperto il documento fattura






