---
title: Nuova Dichiarazione Attività per Progetto
sidebar_position: 1
---

**. I dati sono:

**Tipo attività**: contiene il [Tipo attività](/docs/configurations/tables/project-management/activity-type/);

**Data attività/Numero attività**: contiene la data e il numero dell’attività; verrà proposta in automatico la più vecchia data mancante in base ai mesi da verificare impostati nei parametri progetti. Se la data è una giornata configurata nel Caledario giorni non lavorativi, questa non verrà proposta.

**Risorsa**: contiene la risorsa che svolge l’attività;

**Data/Tempo manuale**: contiene la data di inserimento e il flag, se attivo, abilita il campo **Totale tempo**;

**Cliente**: contiene il cliente per il quale viene svolta l’attività;

**Progetto**: contiene il [Progetto](/docs/project-management/projects/search-projects-intro/) collegato;

**Conto statistico**: è possibile inserire un conto da utilizzare per le statistiche;

**Ora di inizio/Ora fine**: contiene l’orario di inizio e di fine dell’attività; viene proposta in base al turno della risorsa, e se già presenti altre dichiarazioni, verrà proposta solo la fascia oraria mancante per la giornata. 

**Ora inizio pausa/Ora fine pausa**: contiene gli orari della pausa;

**Intervento**: contiene l’eventuale [Intervento](/docs/project-management/service-activities/search-intervention/) collegato manualmente o generato in automatico al salvataggio o da procedura;

**Tickets**: contiene il ticket dell’attività;

**Stato attività**: contiene lo stato tra Inserito, Verificato, Sospeso, Chiuso.

Sono poi presenti alcuni flag che indicano se l’attività è fatturabile o meno e se l’attività è intercompany.

![](/img/it-it/project-management/projects/declaration.png)

Successivamente sono presenti diverse tab.

**Tab Descrizione**
In questa tab è possibile descrivere l’attività nel campo **Descrizione attività**.

**Tab Oneri di viaggio**
Questa tab contiene eventuali oneri di viaggio spesi durante l’attività. È possibile indicare il **Tipo spese** e altri dati quali **Ore viaggio**, **Costo orario**, **Importo forfait**, **Data**, ecc.

**Tab Documenti allegati**
In questa tab è possibile visualizzare e aggiungere degli allegati, che verranno salvati nel modulo Documentale di Fluentis. Per aggiungere un file è sufficiente utilizzare il drag and drop, ossia selezionando il file dal percorso in cui si trova attualmente e rilasciandolo all’interno della tabella.
Si aprirà quindi la seguente maschera:

![](/img/it-it/project-management/projects/doc.png)

Nel campo **Tipo Documento** nella parte superiore della form è possibile selezionare la tipologia di documento che si sta caricando selezionandola tra quelle presenti.
Premendo poi il pulsante **Applica**, tale valore verrà riportato nel corrispondente campo su tutti i file che si stanno caricando in quel momento. **Nome** e **Tipo** file vengono invece reperiti in automatico dalla procedura.
Premendo OK, il programma salverà il file nel Documentale di Fluentis.

**Tab Extra Data** 
In questo tab è possibile inserire eventuali Extra Data collegati; per maggiori informazioni consultare la sezione [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata).



