---
title: Fatturazione elettronica con soggetti non residenti
sidebar_position: 1
---

La funzione **Amministrazione > Dichiarazioni > Fatturazione elettronica con soggetti non residenti** genera i file XML relativi ai documenti di acquisto e di vendita da inviare (in alternativa all'invio tramite il medesimo tracciato previsto per le fatture elettroniche con soggetti residenti in Italia) all'Agenzia delle Entrate, in sostituzione dell'adempimento dello spesometro (adempimento di fatto soppresso o meglio attualmente denominato comunemente "esterometro" per distinguere quel che ne rimane).

L'accesso alla funzione visualizza una maschera suddivisa in una sezione superiore di testata, nella quale è possibile impostare una serie di filtri da utilizzare per la visualizzazione e la gestione dei file XML da inviare:

![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image01.png)

![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image02.png)

- **Stato SdI**: accoglie la descrizione dello stato del documento, riportando sia lo stato di gestione interno di Fluentis sia lo stato riportato da Fluentis Business Hub e acquisito direttamente da SdI.

- **Nome file SdI**: il nome del file che viene creato nel momento in cui il documento viene avanzato nello stato GENERATA; nel formato originale o successivamente all'apposizione della firma digitale, rappresenta il file di fattura da inviare a SdI ().

- **Sdi Id**: l'identificativo univoco che il SdI attribuisce al documento nel momento della ricezione

- **Data ricezione Sdi**: la data in cui il sistema di interscambio ha acquisto il documento inviatogli. Tale informazione viene reperita dalla notifica di ricezione che il SdI rilascia a fronte del recepimento della spedizione e prima di procedere con i controlli formali del file

- **Data chiusura**: la data di chiusura del flusso di gestione (es. documento Cosegnato)

**- Data ultimo evento**: la data dell'ultimo cambio stato avvenuto sul file o manualmente o per effetto dell'avanzamento dell'elaborazione sul SdI

Nel ribbon Menu, nella sezione dedicata alla fatturazione elettronica, utilizzando la funzione **Registro documenti Sdi ![](/img/neutral/common/legenda.png)**  è possibile prendere visione delle azioni svolte sul documento selezionato, con la funzione **Stampa ![](/img/neutral/common/print.png)** stampare il documento XML abbinato, con le funzioni **Scarica allegato** o **Scarica il contenuto del registro** ![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image05.png) eseguire il download del file XML.

Con l'azione doppio click in corrispondenza di una riga di risultato della griglia, si accede al dettaglio della registrazione contabile selezionata. Anche nella registrazione contabile è possibile visionare e cambiare lo stato dell'elaborazione del file rispetto all'invio al SdI (utilizzare la combo box dedicata al cambio stati specifico per la fatturazione elettronica posta nella ribbon bar).

La ricerca eseguibile dalla presente form estrae, dunque, tutte le fatture (**contabilizzate**) collegate a causali contabili aventi come tipo movimento (ai fini iva) Iva vendite intra cee oppure Iva vendite extra cee o che abbiano valorizzato il campo “Conto Partner” nel pannello Parametri:

![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image06.png)

I documenti ricercati sono **soltanto quelli NON già inviati** tramite il flusso della fatturazione elettronica con soggetti non residenti secondo il tracciato utilizzato per quelle italiane.

![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image07.png)

Qualora non sia configurato nell'impianto il servizio Fluentis Business Hub, sarà possibile accedere alla funzione ![](/img/neutral/common/legenda.png)  e scaricare il file XML generato  da utilizzare esternamente a Fluentis.

Il file XML creato durante la gestione degli stati da parte dell'operatore dovrà essere firmato, pertanto, se attivo il servizio Fluentis Business Hub, una copia del file sarà creata nella cartella indicata nelle impostazioni relative alla , dove è necessario indicare una cartella di appoggio per depositare i file XML da firmare e recuperare successivamente i file firmati:

![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image09.png)

Al terminine dell'invio al SdI, il file potrà assumere due stati:

-      **Non conforme:** il file contiene segnalazioni per cui non può essere accettato dal SdI. In questi casi è necessario accedere al  ![](/img/neutral/common/legenda.png)  **, **nel pannello Registro documenti SdI e visualizzare la motivazione di non conformità, correggere l'eventuale anomalia e inviare nuovamente il file rigenerato.

**Consegnata:** il file è stato correttamente inviato ed acquisito dal SdI. In questo caso sarà possibile prendere visione dell'esito della consegna accedendo al pannello pannello Registro documenti SdI della funzione  ![](/img/neutral/common/legenda.png)  per ilfile selezionato.



<iframe width="560" height="315" src="https://www.youtube.com/embed/Rbf4cul7SIA" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>


