---
title: Ricerca registrazioni contabili
sidebar_position: 7
---

La presente form permette di ricercare le registrazioni contabili precedentemente inserite ed eventualmente di entrare in modifica (o in visualizzazione) delle stesse selezionando la riga corrispondente ed effettuando un doppio click.



| Funzione | Significato |
| --- | --- |
| Ricerca | Pulsante per avviare la ricerca delle registrazioni contabili inserite secondo i filtri impostati  |
| Nuovo | Pulsante per inserire una nuova registrazione contabile. |
| Modifica | Pulsante per modificare una registrazione contabile precedentemente inserita. |
| Visualizzazione | Pulsante per visualizzare una registrazione contabile precedentemente inserita. |
| Elimina | Pulsante per cancellare una registrazione contabile precedentemente inserita. |
| Documento origine	 | Pulsante attraverso il quale richiamare il documento di origine dal quale si è originata la registrazione contabile. |
| Duplica | Pulsante che permette di creare un duplicato della registrazione contabile al fine di crearne una simile, modificando gli elementi opportuni, senza doverla inserire da capo. |

Filtri di ricercaI principali campi di filtro per la ricerca delle registrazioni contabili sono:

**Causale contabile**: la combo box (come di consueto in Fluentis) consente di selezionare anche più di una causale alla volta tenendo premuto il tasto Ctrl.

**Da / A data registrazione + Da / A data competenza**: sono le date di riferimento delle registrazioni contabili; attenzione, i filtri operano con una condizione AND e quindi il raffinamento della ricerca si somma. In caso di disallineamento involontario della data di registrazione e della data di competenza (contabile) per ritrovare la registrazione desiderata è opportuno togliere in alternativa il filtro per competenza oppure quello per data registrazione.

**Conto**: si tratta del sottoconto inserito nella testata della registrazione (Cliente o fornitore).

**Tipo conto**: permette di selezionare uno (o più di uno tenendo premuto Ctrl) de tipi conto (Costi / Ricavi / attivo / passivo o conti di anagrafica come Clienti, Fornitori, Banche ed Agenti). Inoltre aprendo l'expander è possibile escludere le tipologie di conti di anagrafica.

![](/img/it-it/finance-area/ledger-records/records/search-ledger-records/image01.png)

Fatturazione elettronicaNella sezione dei filtri è presente un expander relativo alle possibili informazioni legate allo Stato della fattura elettronica, riferito ai documenti che hanno un'interazione con il Sistema di Interscambio:

![](/img/it-it/finance-area/ledger-records/records/search-ledger-records/image02.png)

Nel ribbon Menu, nella sezione dedicata alla fatturazione elettronica, utilizzando il bottone **Registro documenti Sdi** è possibile prendere visione delle azioni svolte sul documento selezionato, con la funzione **Stampa** stampare il documento XML abbinato, con le funzioni **Scarica allegato** o **Scarica il contenuto del registro** eseguire il download del file XML.

La griglia di riepilogo risultati visualizza alcune colonne nelle quali viene riportato lo stato e l'esito dei documenti in riferimento alla trasmissione degli stessi al SdI:

![](/img/it-it/finance-area/ledger-records/records/search-ledger-records/image06.png)

-      **Stato SdI**: accoglie la descrizione dello stato del documento, riportando sia lo stato di gestione interno di Fluentis sia lo stato riportato da Fluentis Business Hub e acquisito direttamente da SdI.

-      **Nome file SdI**: il nome del file che viene creato nel momento in cui il documento viene avanzato nello stato GENERATA; nel formato originale o successivamente all'apposizione della firma digitale, rappresenta il file di fattura da inviare a Sdi.

-      **Sdi Id**: l'identificativo univoco che il SdI attribuisce al documento nel momento della ricezione

-      **Data ricezione Sdi**: la data in cui il sistema di interscambio ha acquisto il documento inviatogli. Tale informazione viene reperita dalla notifica di ricezione che il SdI rilascia a fronte del recepimento della spedizione e prima di procedere con i controlli formali del file

-      **Data chiusura**: la data di chiusura del flusso di gestione (es. documento Consegnato).

-      **Data ultimo evento**: la data dell'ultimo cambio stato avvenuto sul file o manualmente o per effetto dell'avanzamento dell'elaborazione sul SdI.






