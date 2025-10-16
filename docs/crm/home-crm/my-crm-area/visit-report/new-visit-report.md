---
title: Nuovo Visit Report
description: Guida passo passo per creare un nuovo Visit Report in Fluentis ERP, con tutti i campi della form spiegati.
keywords: [Fluentis ERP, Visit Report, CRM, guida, procedura]
sidebar_position: 2
schema_type: HowTo
---

# Creazione di un nuovo Visit Report

La procedura di creazione di un nuovo **Visit Report** permette di definire le caratteristiche della visita effettuata dal contatto.

## Struttura della form

La form è divisa in due parti: superiore e inferiore.

### Parte superiore

I campi principali sono:

1. **Tipo Visit Report**: permette di indicare il tipo di Visit Report che si sta inserendo, fa riferimento all'omonima tabella (*Codice* e *Descrizione*).  
2. **Numero**: numero assegnato automaticamente da Fluentis.  
3. **Data**: data della visita, impostata con la data odierna.  
4. **Oggetto**: motivazione della visita al cliente.  
5. **Nota**: campo libero per ulteriori note.  
6. **Contatto/Cliente**: indica il contatto CRM o il cliente; il campo cambia label e oggetto a seconda del flag (*Contatto CRM* o *Conto Fluentis*).  
7. **Partecipanti**: indicare i soggetti che hanno partecipato all’incontro.  
8. **Agente**: riferimento all’anagrafica agenti; indicare l’agente presente all’incontro, se disponibile.  

### Parte inferiore

La parte inferiore della form presenta due tab.

#### Documento

In questa tab generalmente viene compilato il vero e proprio report creato durante la visita. Questo documento può contenere svariate informazioni, in base alla tipologia di visita effettuata. Per questo motivo, nella griglia è possibile selezionare un [Template](/docs/crm/budget-marketing-automation/template/template-search) da utilizzare come base del report e da compilare con le informazioni del cliente. E' necessario quindi creare a priori i vari template per averli disponibili in fase di visita e poterli utilizzare. 
Nella parte destra sarà visualizzato il Template selezionato e sarà possibile compilarlo. E' inoltre possibile inserire i dati necessari per l'invio tramite email del documento.            
Per la gestione del template sono disponibili le seguenti sezioni:     
- **Email**: questa tab contiene:     
> - *Stampa*: permette di stampare il foglio di lavoro;
> - *Anteprima di stampa*: permette di fare la stampa a video del foglio di lavoro in anteprima;
> - *Salva*: permette di salvare una copia del documento;    
> - *Undo*: cancella l’ultima modifica al template;
> - *Redo*: ripristina l’ultima modifica cancellata al template.

- **Home**: questa Tab contiene i pulsanti per le funzionalità di base riguardanti l’editing del testo del Template, quali le dimensioni del carattere, gli elenchi, l’allineamento del testo, ecc.
Richiama le funzioni di base degli editor di testo più diffusi, quali Microsoft Word.

- **Insert**: euesta Tab contiene i pulsanti per inserire alcuni elementi al Template:
> - *Inserisci tabella*: permette l’inserimento di una tabella all’interno del foglio di lavoro;
> - *Allinea Immagine*: permette di inserire un’immagine nel corpo del documento;
> - *Immagine*: permette di inserire un’immagine nel corpo del documento;
> - *Bookmark*: permette di inserire un segnalibro all’interno del template;
> - *Hyperlink*: permette di inserire un link ad una pagina web o ad un segnalibro del template;
> - *Header*: permette di inserire la testata del template;
> - *Footer*: Permette di inserire il piè di pagina del template;
> - *Page Number*: serve per indicare il numero di pagina nella testata o nel piè di pagina del Template;
> - *Page Count*: serve per indicare il numero totale di pagine del template nella testata o nel piè di pagina;
> - *Text Box*: permette di inserire una casella di testo nel Template;
> - *Symbol*: serve per inserire un simbolo speciale all’interno del Template.

- **Merge data**: in questa tab sono presenti i pulsanti necessari alla gestione ed all’inserimento dei merge data.
> - *Insert Merge Field*: Il pulsante permette di inserire i merge data selezionandoli da una lista che si basa sul Data Source a cui fa riferimento il Template;
> - *View Merged Data*: il pulsante permette di nascondere/visualizzare i merge data inseriti nel template;
> - *Show All Field Codes*: il pulsante serve per mostrare I codici dei campi utilizzati come merge data;
> - *Show All Field Results*: il pulsante serve per mostrare il risultato dell’estrapolazione dei campi utilizzati come merge data;
> - *First Record*: permette di posizionarsi sul primo record estrapolato dai merge data;
> - *Previous record*: permette di posizionarsi sul record precedente rispetto a quello attuale estrapolato dai merge data;
> - *Next record*: permette di posizionarsi sul record successivo rispetto a quello attuale estrapolato dai merge data;
> - *Last Record*: permette di posizionarsi sull’ultimo record estrapolato dai merge data.

#### Documenti allegati

In questa tab è possibile consultare i documenti allegati. Per allegare i documenti è possibile procedere in due modi:

- utilizzando il pulsante della barra degli strumenti Documenti si può scegliere se allegare un documento già codificato in Fluentis o se creare un nuovo Documento da allegare.
- utilizzando direttamente nella griglia il tasto destro e selezionando Allega file si va in creazione di un nuovo Documento da allegare.