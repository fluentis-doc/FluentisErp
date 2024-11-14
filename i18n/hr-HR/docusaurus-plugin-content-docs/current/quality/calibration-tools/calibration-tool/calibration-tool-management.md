---
title: Taratura strumenti
sidebar_position: 2
---

La gestione si trova sul percorso **Qualità > Taratura strumenti > Taratura strumenti > Nuovo taratura strumento** oppure è possibile eseguirla dalla **Ricerca Taratura strumenti**.   


:::important A cosa serve
Nella gestione Taratura strumenti è possibile la registrazione delle Tarature interne e dei Certificati di taratura.   
Se lo strumento è soggetto a taratura e la taratura è interna, è possibile inserire, per le posizioni previste, i valori rilevati. Fluentis assegnerà automaticamente un esito positivo o negativo, per singola posizione e generale.   
Se lo strumento è soggetto a taratura e la taratura è esterna, è possibile allegare il Certificato di taratura ricevuto dall'ente terzo che ha effettuato la taratura. L'esito, in questo caso, verrà attribuito manualmente dall'operatore.   
A standard sono disponibili le reportistiche di: Registro tarature strumenti raggruppati per: Rapporto, Strumento e Operatore.   

A standard è disponibile la reportistica di:   
> **Registro Tarature Strumenti**: elenco delle *Tarature strumenti* raggruppabili per: *Rapporto*, *Strumento* e *Effettuata da*.   
:::


## Pulsanti di comando


### ![](/img/neutral/common/save.png) Salva

Premendo questo pulsante si memorizzano tutte le informazioni modificate della *Taratura strumento* visualizzata.   


## Gestione dati


### Dati di testata

Le informazioni gestite sono:   
> **Tipo taratura**: è il *Tipo taratura* (dato obbligatorio).   
> All'inserimento manuale di una nuova *Taratura* viene proposto il *Tipo taratura manuale* indicato nei *Parametri Taratura strumenti*.   
>
> **Anno/Numero**: sono l'*Anno* e *Numero* della *Taratura strumento* (dati entrambe obbligatori).   
>  All'inserimento di una nuova *Taratura strumento*:   
> - la *Data taratura effettiva* viene proposta pari alla data odierna;   
> - l'*Anno* e il *Numero* vengono proposti in base alla *Data taratura effettiva* e alla *Numerazione* associata al *Tipo taratura*.   
>
> **Taratura effettuata da**: expander dove è possibile inserire:   
>
>> **Taratura interna**: indica che lo *Strumento di misura* viene tarato da un soggetto interno all'azienda.   
>> **Laboratorio esterno**: è la ragione sociale del *Fornitore* che effettua la taratura esterna.   
>> **Funzione**: è la *Funziona aziendale* che effettua la taratura interna.   
>> **Dipendente**: è il *Dipendente* che effettua la taratura interna.   
>
> **Schedulata**: indica che la *Taratura strumento* è stata pianificata.   
> **Esito taratura**: è il l'*Esito* complessivo della taratura.   
> E' calcolato automaticamente, sulla base degli *Esiti* dei *Valori rilevati*, se è una *Taratura interna*.
> Viene attribuito manualmente se è una *Taratura esterna*.   
> **Osservazioni**: annotazioni libere sull'argomento.   
> **Note**: annotazioni libere.   
>
> **Data taratura prevista**: è la data di prevista taratura.   
> Viene proposta dalla *Pianifica nuove tarature* e non è modificabile.   
> **Data taratura effettiva**: è la data di effettiva taratura.   
> All'inserimento manuale di una nuova taratura viene proposta pari alla data odierna.
> Viene proposta dalla *Pianifica nuove tarature* pari alla *Data taratura prevista* ed è successivamente modificabile.   
> **Strumento di misura**: è il rifermento allo *Strumento di misura* soggetto alla *Taratura*.   
>
> **Proprietà dello strumento**: expander dove è possibile visualizzare:   
>
>> **Proprietà dello strumento**: è il *Modello* dello *Strumento di misura*.   
>> **Attivo**: indica che lo *Strumento di misura* è ancora *attivo*.   
>> **Classificazione**: è la *Classificazione*; esempi: Meccanico, Elettrico, Elettronico, ecc.   
>> **Unità di misura**: è l'*Unità di misura* dei valori rilevati dallo *Strumento di misura*.   
>> **Intervallo di misura**: è il range misurabile dallo *Strumento di misura*.   
>> **Precisione**: è la *Precisione di misura* minima.   
>> **Limiti**: sono i *Limiti di accettabilitò* dello *Strumento di misura* per poterlo utilizzare; esempi: eventuali limiti di precisione, ambienti dove non utilizzarlo, ecc.   
>
> **Audit Trail**: expander di sola lettura dove sono visibili le seguenti informazioni:   
>
>> **Data creazione/Nome**: è la data e l'*Utente A.R.M.* che ha inserito l'*Azione correttiva*.   
>> **Data ultima modifica/Nome**: è la data e l'*Utente A.R.M.* che ha apportato l'ultima modifica all'*Azione correttiva*.   


### Valori rilevati
Il tabulatore è visibile solamente se lo *Strumento di misura* è soggetto a *Taratura interna*
In questo elenco è possibile indicare i valori da rilevati durante le attività di *Taratura interna*.   
Se lo *Strumento di misura* è *Attivo*, è *Soggetto a taratura* e se è di *Taratura interna* questi valori vengono ereditati dall'anagrafica dello *Strumento di misura*.   
Tutte le informazioni sono disabilitate ad esclusione di: *Dato rilevato*, *Esito*, *Osservazioni* e *Note*
L'elenco si compone delle seguenti informazioni:   
> **Sequenza**: è la sequenza di rilevazione.   
> **Posizione**: annotazioni libere sull'argomento.   
> **Intervallo lettura**: annotazioni libere sull'argomento.   
> **Dato richiesto**: è il valore nominale richiesto.   
> **Incertezza (-)**: è il valore dell'incertezza negativa (espressa in percentuale) che verrà applicata al *Dato rilevato*.   
> **Incertezza (+)**: è il valore dell'incertezza positiva (espressa in percentuale) che verrà applicata al *Dato rilevato*.   
> **Dato rilevato**: è il valore rilevato dalla lettura dello strumento fatta nella *posizione* indicata.   
> **Scostamento**: è il valore calcolato dalla differenza tra *Dato rilevato* e *Dato richiesto*.   
Se lo scostamento è superiore al *Dato richiesto* sommato all'*Incertezza (±)* (applicazione in percentuale) l'*Esito* della rilevazione sarà negativo.   
Al primo valore negativo dell'*Esito* nell'elenco dei *Valori rilevati* anche l'*Esito* complessivo della *Taratura* sarà negativo.   
> **Osservazioni**: annotazioni libere sull'argomento.   
> **Nota**: annotazioni libere.   


### Storico Rapporti e Certificati di taratura
In questo elenco è possibile visualizzare lo storico delle *Tarature* e dei *Certificati di taratura* pienificati ed effettuati per lo *Strumento di misura* associato alla *Taratura* visualizzata.   
Tramite un doppio click del mouse sulla riga desiderata è possibile eseguire la gestione della *Taratura* selezionata.   
L'elenco si compone delle seguenti informazioni:   
> **Tipo taratura**: è il codice del *Tipo taratura*.   
> **Descrizione tipo taratura**: è la descrizione del *Tipo taratura*.   
> **Anno**: è l'*Anno* del documento.   
> **Numero**: è il *Numero* del documento.   
> **Taratura interna**: indica se è stato emesso una *Taratura interna*.   
> **Schedulata**: indica se il documento è stato schedulato (pianificato).   
> **Data prevista**: è la data di prevista taratura.   
> **Data taratura**: è la data di effettiva taratura.   
> **Esito**: è il codice dell'*Esito* della taratura.   
> **Descrizione esito**: è la descrizione dell'*Esito* della taratura.   
> **Categoria**: è il codice della *Categoria strumento*.   
> **Descrizione categoria**: è la descrizione della *Categoria strumento*.   
> **Codice**: è il codice dello *Strumento di misura*.   
> **Matricola**: è la matricola dello *Strumento di misura*.   
> **Modello**: è il modello dello *Strumento di misura*.   
> **Laboratorio esterno**: è la ragione sociale del *Fornitore* che effettua la taratura esterna.   
> **Funzione**: è il codice della *Funziona aziendale* che effettua la taratura interna.   
> **Descrizione funzione**: è la descrizione della *Funziona aziendale* che effettua la taratura interna.   
> **Codice**: è il codice del *Dipendente* che effettua la taratura interna.   
> **Cognome**: è il cognome del *Dipendente* che effettua la taratura interna.   
> **Nome**: è il nome del *Dipendente* che effettua la taratura interna.   


### Extra data
E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata-simple) per ogni *Taratura strumento*.   


### Immagine
Viene riportata l'immagine associata nella gestione dello *Strumento di misura*.   


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).   