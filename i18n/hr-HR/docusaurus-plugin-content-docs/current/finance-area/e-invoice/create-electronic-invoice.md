---
title: Creazione fattura elettronica
sidebar_position: 2
---

In questa pagina viene illustrato:

 - **La creazione di una fattura elettronica B2B/PA**  
 - **Gestione della firma digitale**  
 - **Procedura di creazione della fattura per coloro che non sottoscrivono il servizio FBH**  

Per la creazione di una fattura elettronica Business to Business e per la Pubblica Amministrazione, occorrerà prima di tutto creare una fattura di vendita con le normali procedure di Fluentis, dopodichè si procede alla generazione del relativo tracciato XML utilizzando l'apposito workflow.

![](/img/it-it/finance-area/e-invoice/create-electronic-invoice/image01.png)

 
La generazione del file XML avviene mediante il passaggio di stati.

 ![](/img/it-it/finance-area/e-invoice/create-electronic-invoice/image02.png)

  

Una fattura appena creata si presenta con lo stato "**Non esaminata**", lo stato successivo "**Controllo del documento**" oltre ad identificare che il documento è stato creato esegue anche dei controlli automatici per verificare la presenza dei dati mini specifici.

Da questo è possibile tramite lo stato "**Generazione del file**" generare il tracciato XML della fattura.

Da notare i due particolari stati "**Annulla Documento**" e "**Escludi documento**", il primo significa che il documento non dovrà essere inviato al cliente finale ma resterà comunque valido a fini IVA, il secondo riguarda i documenti che per loro natura non devono rientrare nel flusso di gestione della fatturazione elettronica.

Dopo lo stato "generata" quindi è possibile assegnare lo stato "**Da spedire**", in maniera automatica questo stato farà si che il Fluentis Business HUB processi il file e lo trasmetta allo SDI.

Una volta inviato il documento al servizio FBH lo stato si modificherà automaticamente prima in "**In Fluentis Business Hub**", e successivamente nello stato "**In SDI**", quando il server avrà inoltrato il file.

Per il monitoraggio di questi stati è sufficiente premere il tasto ![](/img/neutral/common/search.png) per aggiornare la Form.

n.b. passando allo stato "Da spedire" non sarà più possibile tornare indietro ne modificare la fattura ma si dovrà attendere la notifica di esito dal SDI

 GESTIONE FIRMA DIGITALE Qualora il file debba essere firmato digitalmente l'attivazione del flag "Firma digitale" a livello di anagrafica cliente o nella tabella società, farà comparire un ulteriore stato dopo la fase di generazione del tracciato.

Con lo stato generato infatti è stata creata una copia del file direttamente nella cartella esterna impostata al momento della configurazione della fatturazione elettronica e sarà sufficiente processarla con il software di firma.

Quindi lo stato "**Firma documento**" provvede solamente a reimportare il documento firmato nel nuovo formato (p7m).

 

PROCEDURA PER COLORO CHE NON SOTTOSCRIVONO IL SERVIZIO FBHPer coloro che si affidano a strumenti esterni a Fluentis per l'invio allo SDI dell fatture basterà semplicemente scaricare la e-fattura in formato XML per poi trasmetterla mediante il canale prescelto.

Tramite il pulsante ![](/img/it-it/finance-area/e-invoice/create-electronic-invoice/image04.png) è possibile quindi prelevare il file xml già nello stato "Generata", ma si consiglia di passare comunque allo stato da "Da spedire" per bloccare da eventuali modifiche il file.






