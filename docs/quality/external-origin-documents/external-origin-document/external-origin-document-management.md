---
title: Documento di origine esterna
sidebar_position: 2
---

La gestione si trova sul percorso **Qualità > Documenti di origine esterna > Nuovo Documento di origine esterna** oppure è possibile eseguirla dalla **Ricerca Documenti di origine esterna**.   


:::important A cosa serve
La gestione dei documenti di origine esterna permette: la catalogazione, la gestione delle edizioni/revisioni e la loro distribuzione (sia in formato cartaceo che elettronico) alle funzioni aziendali che sono interessate nel visionare tali documenti.   


Elenchiamo alcuni esempi di documenti di origine esterna che possono essere catalogati:   
> *Manuali d'uso e manutenzione macchinari e impianti*   
> *Normative*   
> *Leggi*   
> *Rivista specifiche*   

Le informazioni di dove siano depositati gli originali e la possibilità di allegare loro copie elettroniche, permette una loro immediata rintracciabilità e consultazione con un semplice click del mouse.

A standard sono disponibili le reportistiche di:   
> **Documento interno**: anteprima del documento allegato nel tabulatore *Allegato*.   
> **Documenti allegati al documentale**: anteprima dei documenti allegati alla *Gestione Documentale*.   
:::


## Pulsanti di comando


### ![](/img/neutral/common/save.png) Salva

Premendo questo pulsante si memorizzano tutte le informazioni modificate del *Documento di origine esterna* visualizzato.   


### ![](/img/neutral/common/duplicate.png) Duplica

E' possibile duplicare il *Documento* visualizzato in un nuovo *Documento*. E' sufficiente premere il pulsante **Duplica**.   
Viene visualizzata una richiesta di:
> **Categoria**: è la *Categoria documento di origine esterna* del nuovo *Documento* (dato obbligatorio).   
> **Codice**: è il Codice del nuovo *Documento* (dato obbligatorio).   
> **Edizione/Revisione**: sono l'Edizione e la Revisione del nuovo *Documento*.   
> **Titolo**: è il *Titolo* del *Documento* (dato obbligatorio).   

Premere successivamente il pulsante **OK** o il pulsante **Cancel** se si desidera proseguire nell'attività di duplica o meno.   
Al termine dell'elaborazione il nuovo *Documenti di origine esterna* viene visualizzato.


### ![](/img/neutral/common/bill.png) Distribuzione

Il pulsante avvia la procedura di *Distribuzione* del *Documento*.   
Viene visualizzata una richiesta di filtro di chi, tra i destinatari presenti nella *Lista di distribuzione*, riceverà copia del *Documento*:   
> **Tipo:**   
>> **Cartacei**: distribuzione a chi richiede copia cartacea;   
>> **Elettronici**: distribuzione a chi richiede email;   
>
> **Stato:**   
>> **Già consegnati**: distribuzione a chi ha già ricevuto il documento;   
>> **Ancora da consegnare**: distribuzione a chi non ha ancora ricevuto il documento;   
>
> **Destinatario:**
>> **Interni**: distribuzione al solo personale interno (*Funzioni aziendali* e/o *Dipendenti*);   
>> **Clienti/Fornitori**: distribuzione a *Clienti/Fornitori*.

Premere successivamente il pulsante **OK** o il pulsante **Cancel** se si desidera proseguire nell'attività di distribuzione o meno.   


## Gestione dati


### Dati di testata

Le informazioni gestibili sono:   
> **Categoria**: è la *Categoria documento di origine esterna* del *Documento* (dato obbligatorio).   
> Inserendo la categoria, la *Lista di distribuzione* e i dati di *Accesso consentito alle funzioni*, vengono ereditati nel *Documento*.   
>
> **Codice**: è il Codice del *Documento* (dato obbligatorio).   
>
> **Edizione/Revisione**: sono l'Edizione e la Revisione del *Documento*; le informazioni sono libere in quanto devono essere riportate le eventuali informazioni descritte nei 
documenti non generati dall'azienda.   
>
> **Titolo**: è il *Titolo* del *Documento* (dato obbligatorio).   
>
> **Provenienza**: annotazioni libere sull'argomento.   
> **Data arrivo**: è la data di arrivo del *Documento*, inserendo un nuovo *Documento* viene proposta pari alla data odierna.   
> **Valido dal/al**: contiene una eventuale data di inizio e fine validità del *Documento*.   
> **Verifica validità**: indica che il *Documento* è stato verificato.   
> **Data verifica**: indica la data di quando è stato verificato il *Documento*.   
>
> **Archivio**: è il *Magazzino* fisico di dove abitualmente viene archiviato il *Documento* (esempio: Ufficio tecnico, Direzione, ...).   
> Il dato è ereditato dalla *Categoria documento di origine esterna* ed è modificabile.   
>
> **Ubicazione**: è l'*Ubicazione* fisica di dove abitualmente viene archiviato il *Documento* (esempio: Armadio, Scaffale, Cassetto, , ...).   
> Il dato è ereditato dalla *Categoria documento di origine esterna* ed è modificabile.   
>
> **Ubicazione descrittiva**: è l'*Ubicazione* fisica in caso di non codifica di *Archivio* e/o *Ubicazione*.   
> Il dato è ereditato dalla *Categoria documento di origine esterna* ed è modificabile.   
>
> **Funzione responsabile**: è la *Funzione aziendale* responsabile del *Documento*. 
> Il dato è ereditato dalla *Categoria documento di origine esterna* ed è modificabile.   
>
> **Categorie di interesse**: annotazioni libere sull'argomento.   
> **Note**: annotazioni libere.


### Lista di distribuzione

In questo elenco è possibile associare: *Funzioni aziendali*, *Dipendenti*, *Clienti/Fornitori* e *Contatti* che abitualmente ricevono copia del *Documento* ed indicare le metodologie abituali di ricezione del documento.   
Alla creazione del *Documento* la *Lista di distribuzione* viene ereditata dalla *Categoria documento di origine esterna* e le informazioni sono modificabili.   
L'elenco si compone delle seguenti informazioni:   
> **Funzione aziendale**   
>> **Codice**: è il codice della *Funzione aziendale* destinataria.   
>> **Descrizione**: è la descrizione della *Funzione aziendale* destinataria.   
>
> **Dipendente**   
>> **Codice**: è il codice del *dipendente* destinatario.   
>> **Cognome**: è il cognome del *dipendente* destinatario.   
>> **Nome**: è il nome del *    dipendente* destinatario.   
>
> **Cliente/Fornitore**   
>> **Descrizione**: è la ragione sociale del *Cliente/Fornitore* destinatario.   
>
> **Contatto**   
>> **Codice**: è il codice del *Contatto* destinatario.   
>> **Descrizione**: è la descrizione del *Contatto* destinatario.   
>
> **Altro destinatario**   
>> **Descrizione**: è la libera descrizione di un destinatario non codificato.   
>
> **Dati per la consegna**   
>> **Cartacea**: indica che al momento della distribuzione il soggetto desidera ricevere copia *Cartacea* del documento o in allegato tramite *Email*.   
>> **Metodo di consegna**: indica la metodologia di consegna abituale del *Documento*.   
>> **Email**: indica una email di destinazione, se non codificata nell'anagrafica del destinatario.   
>> **Numero di copie**: indica il numero di copie cartacee che il destinatario desidera ricevere.   
>> **Note**: annotazioni libere.   


### Allegati
In questo elenco è possibile inserire e consultare eventuali allegati, è possibile visualizzare l'anteprima ed effettuare operazioni sull'immagine.   
Questi allegati sono separati dal Documentale di Fluentis, che è sempre presente ed utilizzabile.   


### Accesso consentito alle funzioni

In questa elenco è possibile inserire le *Funzioni aziendali* a cui dare i diritti di accesso al *Documento*.   
Se non vengono inserite righe in questa tabella, allora l'accesso è consentito a tutti.   
Alla creazione del *Documento* la lista delle *Funzioni aziendali* viene ereditata dalla *Categoria documento di origine esterna* e le informazioni sono modificabili.   
L'elenco si compone delle seguenti informazioni:   
> **Funzione**: è il codice della *Funzione aziendale*.   
> **Descrizione funzione**: è la descrizione della *Funzione aziendale*.   
> **Note**: annotazioni libere.   


### Extra data
E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per ogni *Documento di origine esterna*.   


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).