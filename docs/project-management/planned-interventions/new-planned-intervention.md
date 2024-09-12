---
title: Nuovo Intervento Pianificato
sidebar_position: 1
---


In questa maschera è possibile inserire un nuovo **Intervento Pianificato**.
I dati da inserire sono:

**Tipo pianificato**: contiene la tipologia dell’intervento, codificabile nella tabella [Tipo pianificato](/docs/configurations/tables/project-management/planned-type/);

**Numero/Data**: contiene il numero e la data dell’intervento pianificato;

**Cliente**: contiene il cliente a cui è destinato l’intervento;

**Contatto**: contiene l’eventuale *Contatto* cui è destinato l’intervento;

**Categoria di attività**: contiene la categoria di attività;

**Progetto**: contiene il [Progetto](/docs/project-management/projects/search-projects-intro/) collegato all’intervento;

**Tickets/Severità Ticket**: contiene un eventuale ticket di riferimento con la relativa severità;

**SLA**: è il Service Leve Agreement;

**Stato**: contiene lo stato dell’intervento, tra Pianificato, Confermato, Chiuso o Annullato;

**Data conferma**: contiene la data di conferma dell’intervento.

 

Sono poi presenti diverse tab nelle quali inserire ulteriori informazioni circa l’intervento pianificato.

**Tab Risorse**
In questa tab è possibile inserire la **Risorsa** che effettuaerà l’intervento pianificato. I dati da inserire sono:
**Risorsa**: contiene la Risorsa;
**Dipendente**: contiene l’anagrafica Dipendente associata,
**Da data pianificata**: contiene la data e l’ora di inizio dell’intervento;
**Ora inizio pausa**: contiene l’orario di inizio pausa;
**Ora fine pausa**: contiene l’orario di fine pausa;
**A data pianificata**: contiene la data e l’ora di fine dell’intervento,
**Tempo effettivo**: contiene il tempo necessario, calcolato in base ai campi precedenti;
**Descrizione**: è un campo obbligatorio in cui desrivere l’intervento e eventuali note per la risorsa.
Sono poi presenti alcuni flag che regolano l’obbligatorietà o meno del **Tecnico**, della **Data** e che indicano se l’attività sia fatturabile.

![](/img/it-it/project-management/planned-intervention/resource.png)

**Tab Soluzione**
In questa tab sono presenti due aree liberamente compilabili: **Soluzione** e **Nota**.

**Tab Stima**
In questa tab è possibile inserire una stima dell’intervento pianificato attraverso questi dati:
**Unità di Misura**: contiene l’UM da utilizzare per quantificare l’intervento;
**Listino di vendita**: è possibile collegare un [Listino](/docs/sales/sales-price-list/insert-sales-price-list/) di vendita da cui prendere le informazioni;
**Quantità**: è possibile compilare direttamente in questa tab il tempo effettivo, che comparirà nel relativo campo nella tab Risorsa;
**Prezzo netto unitario**: contiene il prezzo unitario in base all’UM;
**Importo totale**: è un campo calcolato in base ai dati inseriti in precedenza;
**Divisa**: indica la valuta da utilizzare.

In fase di selezione del progetto, vengono proposti i seguenti valori: 

- Listino di vendita
- Ticket
- Descrizione
- Categoria attività 
- Fatturabile
- Attività a valore aggiunto
- Articolo (se non già inserito)
- Unità di misura se non già inserita
- Prezzo netto unitario

Il prezzo netto unitario viene aggiornato con il valore presente nel progetto se l'articolo è già presente nell'intervento pianificato e coincide con l'articolo nel progetto.
Oppure se l'articolo non è presente nell'intervento pianificato e viene assegnato dal progetto, di conseguenza anche il prezzo sarà aggiornato con il valore presente nel progetto.

![](/img/it-it/project-management/planned-intervention/stima.png)

**Tab Documento collegato**
In questa tab è possibile visualizzare e aggiungere degli allegati, che verranno salvati nel modulo Documentale di Fluentis. Per aggiungere un file è sufficiente utilizzare il drag and drop, ossia selezionando il file dal percorso in cui si trova attualmente e rilasciandolo all’interno della tabella.
Si aprirà quindi la seguente maschera:

![](/img/it-it/project-management/planned-intervention/document.png)

Nel campo **Tipo Documento** nella parte superiore della form è possibile selezionare la tipologia di documento che si sta caricando selezionandola tra quelle presenti.
Premendo poi il pulsante **Applica**, tale valore verrà riportato nel corrispondente campo su tutti i file che si stanno caricando in quel momento. **Nome** e **Tipo** file vengono invece reperiti in automatico dalla procedura.
Premendo OK, il programma salverà il file nel Documentale di Fluentis.

**Tab Extra Data** 
In questo tab è possibile inserire eventuali Extra Data collegati; per maggiori informazioni consultare la sezione [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata/).





