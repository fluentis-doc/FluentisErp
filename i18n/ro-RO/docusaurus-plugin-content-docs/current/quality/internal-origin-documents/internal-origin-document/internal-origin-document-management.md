---
title: Documento di origine interna
sidebar_position: 2
---

La gestione si trova sul percorso **Qualità > Documenti di origine interna > Nuovo Documento di origine interna** oppure è possibile eseguirla dalla **Ricerca Documenti di origine interna**.   


:::important A cosa serve
La gestione dei documenti di origine interna permette: la catalogazione, la gestione delle edizioni/revisioni e la loro distribuzione (sia in formato cartaceo che elettronico) alle funzioni aziendali che sono interessate nel visionare tali documenti.   

Elenchiamo alcuni esempi di documenti di origine esterna che possono essere catalogati:   
> *Manuale della qualità*   
> *Politica di gestione*   
> *Organigramma*   
> *Schema di processo*   
> *Istruzione operative*   
> *Scheda di servizio*   

Le informazioni di dove siano depositati gli originali e la possibilità di allegare loro copie elettroniche, permette una loro immediata rintracciabilità e consultazione con un semplice click del mouse.

A standard sono disponibili le reportistiche di:   
> **Pagina di Guardia**: è una scheda che, per *Documento*, riporta l'elenco delle *Revisioni* effettuate e la *Lista di distribuzione*.   
> **Documento interno**: anteprima del documento allegato nel tabulatore *Allegato* e creato nel tabulatore *Creazione documento*.   
> **Documenti allegati al documentale**: anteprima dei documenti allegati alla *Gestione Documentale*.   
:::


## Pulsanti di comando


### ![](/img/neutral/common/save.png) Salva

Premendo questo pulsante si memorizzano tutte le informazioni modificate del *Documento di origine interna* visualizzato.   


### ![](/img/neutral/common/duplicate.png) Duplica

Il pulsante è abilitato solamente per i componenti delle *Funzioni aziendali* di *verifica/approvazione* e *redazione/emissione*.
E' possibile duplicare il *Documento* visualizzato in un nuovo *Documento*. E' sufficiente premere il pulsante **Duplica**.   
Viene visualizzata una richiesta di:
> **Categoria**: è il *Codice categoria documento di origine interna* del nuovo *Documento* (dato obbligatorio).   
> **Codice**: è il *Codice* del nuovo *Documento* (dato obbligatorio).   
> **Titolo**: è il *Titolo* del nuovo *Documento* (dato obbligatorio).   

*Categoria* e *Titolo* sono proposti dal documento di origine; il *Codice* viene proposto se, alla *Categoria*, è associata una *Codifica automatica*.   
Premere successivamente il pulsante **OK** o il pulsante **Cancel** se si desidera proseguire nell'attività di duplica o meno.   
Il nuovo *Documento di origine interna* creato avrà *Edizione* e *Revisione* pari a *Zero* e lo stato di *In creazione*.   
Al termine dell'elaborazione il nuovo *Documento di origine interna* viene visualizzato.


### Crea nuova revisione

Il pulsante è abilitato solamente per i componenti delle *Funzioni aziendali* di *verifica/approvazione* e *redazione/emissione* e se lo stato del documento di origine è *Emesso*. Verrà visualizzata una richiesta di:   
> **Motivo della revisione**: una breve descrizione del motivo che ha condotto alla revisione (dato obbligatorio).   
> **Modifica su paragrafi**: un pro-memoria descrittivo sul riferimento al numero dei paragrafi variati.   
> **Modifica su pagine**: un pro-memoria descrittivo sul riferimento al numero delle pagine variate.   

Premere successivamente il pulsante **OK** o il pulsante **Cancel** se si desidera proseguire nell'attività di creazione o meno.   
Viene creato nuovo *Documento di origine interna*, con tutte le informazioni del *Documento* originale ma con indice di *Revisione* incrementato e lo stato di *In revisione*. Il *Documento* originale rimane in vigore con lo stato di *Emesso*.   
Al termine dell'elaborazione il nuovo *Documento di origine interna* viene visualizzato.   


### Crea nuova edizione

Il pulsante è abilitato solamente per i componenti delle *Funzioni aziendali* di *verifica/approvazione* e *redazione/emissione* e se lo stato del documento di origine è *Emesso*. Verrà visualizzata una richiesta di:   
> **Motivo della revisione**: una breve descrizione del motivo che ha condotto alla revisione (dato obbligatorio).   
> **Modifica su paragrafi**: un pro-memoria descrittivo sul riferimento al numero dei paragrafi variati.   
> **Modifica su pagine**: un pro-memoria descrittivo sul riferimento al numero delle pagine variate.   

Premere successivamente il pulsante **OK** o il pulsante **Cancel** se si desidera proseguire nell'attività di creazione o meno.   
Viene creato nuovo *Documento di origine interna*, con tutte le informazioni del *Documento* originale ma con indice di *Edizione* incrementato e lo stato di *In revisione*. Il *Documento* originale rimane in vigore con lo stato di *Emesso*.   
Al termine dell'elaborazione il nuovo *Documento di origine interna* viene visualizzato.   


### Approva

Il pulsante è abilitato solamente per i componenti delle *Funzioni aziendali* di *verifica/approvazione* e se lo stato del documento di origine è *In creazione* o *In revisione*.   
Successivamente alla richiesta di conferma elaborazione e al termine dell'elaborazione il *Documento di origine interna* passerà ad uno stato di *Approvato*.   


### Emetti

Il pulsante è abilitato solamente per i componenti delle *Funzioni aziendali* di *redazione/emissione* e se lo stato del documento di origine è *Approvato*.   
Successivamente alla richiesta di conferma elaborazione e al termine dell'elaborazione il *Documento di origine interna* passerà ad uno stato di *Emesso* e verrà automaticamente visualizzata l'anteprima della stampa *Pagina di Guardia*.   


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


### Annulla documento

Il pulsante è abilitato solamente per i componenti delle *Funzioni aziendali* di *redazione/emissione* e se lo stato del documento di origine è *Emesso*.   
Successivamente alla richiesta di conferma elaborazione e al termine dell'elaborazione il *Documento di origine interna* passerà ad uno stato di *Annullato*.   


### Ripristina annullamento

Il pulsante è abilitato solamente per i componenti delle *Funzioni aziendali* di *redazione/emissione* e se lo stato del documento di origine è *Annullato*.   
Successivamente alla richiesta di conferma elaborazione e al termine dell'elaborazione il *Documento di origine interna* passerà ad uno stato di *Emesso*.   


## Gestione dati


### Dati di testata

Le informazioni gestibili sono:   
> **Categoria documento**: è la *Categoria documento di origine interna* del *Documento* (dato obbligatorio).   
> Inserendo la categoria, la *Lista di distribuzione* e i dati di *Accesso consentito alle funzioni*, vengono ereditati nel *Documento*.   
>
> **Codice**: è il Codice del *Documento* (dato obbligatorio).   
>
> **Edizione/Revisione**: sono l'Edizione e la Revisione del *Documento*. Le informazioni sono di sola lettura.   
Le informazioni sono modificabili se il documento è nello stato di *In creazione* altrimenti sono di sola lettura; si possono variare in modo pilotato dal sistema usando i pulsanti *Crea nuova revisione* e *Crea nuova revisione* che incrementano il precedente valore di *Revisione* e *Edizione* di una unità.   
>
> **Titolo**: è il *Titolo* del *Documento* (dato obbligatorio).   
>
> **Stato documento**: è lo *Stato* del *Documento* e riporta lo stato attuale del *Documento*. L'informazione è di sola lettura.   
> Gli stati del documento sono valori predefiniti dal sistema che identificano i vari stati di gestione del *Documento di origine interna*.   
> I valori predefiniti sono:   
> - **In creazione**: impostato alla creazione di un nuovo documento;   
> - **Approvato**: impostato all'atto di *verifica/approvazione* di un documento in stato *In creazione* o *In revisione*;   
> - **Emesso**: impostato all'atto di *redazione/emissione* di un documento in stato *Approvato* oppure all'atto di *ripristino annullamento* di un documento in stato *Annullato*;   
> - **In revisione**: impostato all'atto di *creazione nuova edizione/revisione* di un documento in stato *Emesso*;   
> - **Obsoleto**: impostato, per un documento in stato *Emesso*, origine di una richiesta di *creazione nuova edizione/revisione*, all'atto della sua *emissione*;   
> - **Annullato**: impostato all'atto di *annullamento* di un documento in stato *Emesso*.   
>
> **Dalla data**: è la data in cui il *Documento* ha assunto l'attuale *Stato*. L'informazione è di sola lettura.   
> **Dall'utente'**: è l'*Utente A.R.M.* che ha modificato lo *Stato* del *Documento*. L'informazione è di sola lettura.   
>
> **Informazioni su revisione**: expander dove è possibile visualizzare/inserire:   
>
>> **Data creazione/Creato da**: sono la *Data di creazione* e l'*Utente A.R.M.* che ha creato il documento. L'informazione è di sola lettura.   
>> **Data approvazione/Approvato da**: sono la *Data di approvazione* e l'*Utente A.R.M.* che ha *Approvato* il documento. L'informazione è di sola lettura.   
>> **Data emissione/Emesso da**: sono la *Data di emissione* e l'*Utente A.R.M.* che ha *Emesso* il documento. L'informazione è di sola lettura.   
>>
>> **Motivo della revisione**: una breve descrizione del motivo che ha condotto alla revisione.   
>> L'informazione può essere variata se lo *Stato* è *In creazione* o *In revisione*.   
>>
>> **Modifica su paragrafi**: un pro-memoria descrittivo sul riferimento al numero dei paragrafi variati rispetto alla *revisione/edizione* precedente.   
>> L'informazione può essere variata se lo *Stato* è *In creazione* o *In revisione*.   
>>
>> **Modifica su pagine**: un pro-memoria descrittivo sul riferimento al numero delle pagine variate rispetto alla *revisione/edizione* precedente.   
>> L'informazione può essere variata se lo *Stato* è *In creazione* o *In revisione*.   
>>
>> **Data annullamento/Annullato da**: sono la *Data di annullamento* e l'*Utente A.R.M.* che ha *Annullato* il documento. L'informazione è di sola lettura.   
>
> **Informazioni su ubicazione**: expander dove è possibile visualizzare/inserire:   
>
>> **Archivio**: è il *Magazzino* fisico di dove abitualmente viene archiviato il *Documento* (esempio: Ufficio tecnico, Direzione, ...).   
>> Il dato è ereditato dalla *Categoria documento di origine esterna* ed è modificabile.   
>>
>> **Ubicazione**: è l'*Ubicazione* fisica di dove abitualmente viene archiviato il *Documento* (esempio: Armadio, Scaffale, Cassetto, , ...).   
>> Il dato è ereditato dalla *Categoria documento di origine esterna* ed è modificabile.   
>>
>> **Ubicazione descrittiva**: è l'*Ubicazione* fisica in caso di non codifica di *Archivio* e/o *Ubicazione*.   
>> Il dato è ereditato dalla *Categoria documento di origine esterna* ed è modificabile.   
>
> **Funzione di verifica/approvazione**: è la *Funzione aziendale* responsabile della verifica/approvazione del documento.   
>> Il dato è ereditato dalla *Categoria documento di origine esterna* ed è modificabile.   
>
> **Funzione di redazione/emissione**: è la *Funzione aziendale* responsabile della redazione/emissione del documento.   
>> Il dato è ereditato dalla *Categoria documento di origine esterna* ed è modificabile.   
>
> **Note**: annotazioni libere.


### Allegato

E' possibile allegare il *Documento* che si sta catalogando tramite l'utilizzo del drag&drop; viene visualizzata l'anteprima.   
Questo allegato non viene incluso nel Documentale di Fluentis.   
Nelle informazioni di *Nome allegato* e *Tipo allegato* il sistema riconosce il nome del file fisico e l'estensione.
Se non riconosciuti questi possono essere inseriti manualmente.


### Creazione documento

E' un semplice *word editor* utilizzato per creare il *Documento* direttamente in questa gestione.   
Si possono impostare: il Tipo di carattere, la Dimensione, Stili, Colori di testo e di sfondo, e altri semplici formattazioni del testo.


### Lista di distribuzione

In questo elenco è possibile associare: *Funzioni aziendali*, *Dipendenti*, *Clienti/Fornitori* e *Contatti* che abitualmente ricevono copia del *Documento* ed indicare le metodologie abituali di ricezione del documento.   
Alla creazione del *Documento* la *Lista di distribuzione* viene ereditata dalla *Categoria documento di origine interna* e le informazioni sono modificabili.   
L'elenco si compone delle seguenti informazioni:   
> **Gruppo**   
>> **Codice**: è il codice del *Ruolo A.R.M.* destinatario.   
>> **Descrizione**: è la descrizione del *Ruolo A.R.M.* destinatario.   
>
> **Utente**   
>> **Codice**: è il codice dell'*Utente A.R.M.* destinatario.   
>> **Descrizione**: è la descrizione dell'*Utente A.R.M.* destinatario.   
>
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


### Accesso consentito alle funzioni

In questa elenco è possibile inserire le *Funzioni aziendali* a cui dare i diritti di accesso al *Documento*.   
Se non vengono inserite righe in questa tabella, allora l'accesso è consentito a tutti.   
Alla creazione del *Documento* la lista delle *Funzioni aziendali* viene ereditata dalla *Categoria documento di origine interna* e le informazioni sono modificabili.   
L'elenco si compone delle seguenti informazioni:   
> **Funzione**: è il codice della *Funzione aziendale*.   
> **Descrizione funzione**: è la descrizione della *Funzione aziendale*.   
> **Note**: annotazioni libere.   


### Extra data
E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata-simple) per ogni *Documento di origine interna*.   


### Edizioni/Revisioni precedenti
In questo elenco è possibile visualizzare lo storico delle *Edizioni/Revisioni precedenti* del *Documento* in gestione.   
Tramite un doppio click del mouse sulla riga desiderata è possibile visualizzare la gestione della *Revisione* del *Documento* selezionato.   
L'elenco si compone delle seguenti informazioni:   
> **Categoria**: è la *Categoria documento di origine interna*.   
> **Codice**: è il Codice del *Documento*.   
> **Edizione**: è l'Edizione del *Documento*.   
> **Revisione**: è la Revisione del *Documento*.   
> **Titolo**: è il *Titolo* del *Documento*.   
> **Stato**: è lo *Stato* del *Documento*.   
> **Dalla data**: è la data in cui il *Documento* ha assunto l'attuale *Stato*.   
> **Riferimento paragrafi**: è il riferimento al numero dei paragrafi variati rispetto alla *revisione/edizione* precedente.   
> **Riferimento su pagine**: è il al numero delle pagine variate rispetto alla *revisione/edizione* precedente.   
> **Funzione di verifica/approvazione**: è la *Funzione aziendale* responsabile della verifica/approvazione.   
> **Funzione di redazione/emissione**: è la *Funzione aziendale* responsabile della redazione/emissione.   


:::tip Work flow stato documento   
![example](/img/it-it/quality/internal-origin-document/internal-origin-document-status-work-flow.png)
:::


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).