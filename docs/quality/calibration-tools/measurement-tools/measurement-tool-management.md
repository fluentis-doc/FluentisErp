---
title: Strumento di misura
sidebar_position: 2
---

La gestione si trova sul percorso **Qualità > Taratura strumenti > Strumenti di misura > Nuovo Strumento di misura** oppure è possibile eseguirla dalla **Ricerca Strumenti di misura**.   


:::important A cosa serve
In questa anagrafica vengono memorizzati gli strumenti di misura utilizzati per garantire l’idoneità dei prodotti e l’erogazione dei servizi offerti.   
Allo strumento di misura è possibile associare le informazioni di acquisto, di responsabilità, le proprietà tecniche/meccaniche, di ubicazione e di taratura.   
Se lo strumento è soggetto a taratura e la taratura è interna, è possibile definire quali sono le attività che devono essere fatte e i valori da rilevare affinché la taratura dia esito positivo.   
Se lo strumento è soggetto a taratura e la taratura è esterna, è possibile definire qual e l'ente terzo che effettuerà la taratura.   
Se inserita una periodicità temporale di taratura il pulsante di "Pianifica nuove tarature" permette la creazione automatica, per un periodo desiderato, delle tarature pianificate.   
A standard sono disponibili le reportistiche di: Registro strumenti raggruppati per: Strumento, Categoria, Fornitore, Ubicazione, Utilizzatore, Scadenza garanzia e Scadenza taratura, Registro Strumenti non soggetti a taratura e Scheda Strumento di misura.   

A standard sono disponibili le reportistiche di:   
> **Registro Strumenti di misura**: elenco degli *Strumenti di misura* raggruppabili per: *Strumento*, *Categoria*, *Fornitore* (di acquisto), *Ubicazione*, *Utilizzatore*, *Scadenza garanzia* e *Scadenza taratura*.   
> **Registro Strumenti non soggetti a taratura**: elenco degli *Strumenti di misura* dove non è prevista la *Taratura*; per la stampa di questo report non ha effetto il filtro *Stato - Non soggetti a taratura: Tutti, Soggetti a taratura, Non soggetti a taratura*.   
> **Scheda Strumento di misura**: scheda degli *Strumenti di misura*.   
:::


## Pulsanti di comando


### ![](/img/neutral/common/save.png) Salva

Premendo questo pulsante si memorizzano tutte le informazioni modificate dello *Strumento di misura* visualizzato.   


### ![](/img/neutral/common/duplicate.png) Duplica strumento

Per duplicare lo *Strumento di misura* visualizzato in un nuovo *Strumento di misura* è sufficiente premere il pulsante **Duplica**.   
Le informazioni dello strumento di origine non duplicate sono: *Codice*,  *Matricola*, *Data acquisto*, *Scadenza garanzia*, *Ubicazione fornitore*, *Cliente proprietario*, *Immagine* e i dati dell'ultima taratura effettuata: *Data ultima taratura* ed *Esito*.   
Al termine dell'elaborazione il nuovo *Strumento di misura* viene visualizzato.


### Pianifica nuove tarature

Il pulsante è abilitato solamente se lo *Strumento di misura* è *Attivo*, è *Soggetto a taratura*, ed esiste un *Periodo di taratura* temporale (*Unità di misura* *Giorni* o *Mesi*). Viene visualizzata una richiesta di:   
> **Pianificare fino al**: è la data di fine pianificazione delle nuove tarature schedulate.   

*Metodo utilizzato per la pianificazione*:   
Come prima cosa vengono eliminate tutte le precedenti *Tarature* pianificate e non ancora attuate per lo *Strumento*.  
Successivamente, a partire dalla data di ultima *Taratura*, si creano tante *Tarature* quante sono possibili creare nell'intervallo richiesto a partire dalla data odierna e cadenziate per il *Periodo di taratura*. Se la prima data proposta ricade in una giornate non lavorativa specificata nel *Calendario di fabbrica* la data proposta verrà posticipata alla prima data lavorativa utile.   
Se per lo strumento non è mai stata pianificata o effettuata una *Taratura* o l'ultima data di *Taratura* risale a un periodo antecedente alla data odierna detratta dal
*Periodo di taratura*, la prima *Taratura* sarà proposta in data odierna e successivamente le altre.


### Nuova taratura

Il pulsante è abilitato solamente se lo *Strumento di misura* è *Attivo* ed è *Soggetto a taratura*.   
Per poter creare una nuova *Taratura* non pianificata per lo *Strumento di misura* visualizzato è necessario premere il pulsante **Nuova taratura**.   
Alla conferma della richiesta viene creata una nuova *Taratura*; viene proposto il *Tipo taratura* (interna o esterna), indicata nei *Parametri taratura strumenti*, i riferimenti dello *Strumenti di misura* e le sue proprietà.   
Al termine dell'elaborazione il nuovo *Corso di formazione* viene visualizzato.   


## Gestione dati


### Dati di testata

Le informazioni gestite sono:   
> **Categoria**: è la *Categoria strumento* dello *Strumento di misura* (dato obbligatorio).   
> **Codice**: è il codice dello *Strumento di misura* (dato obbligatorio).   
> **Matricola**: è la matricola dello *Strumento di misura*; informazione descrittiva libera.   
> **Modello**: è il modello dello *Strumento di misura*; informazione descrittiva libera.   
>
> **Dati di acquisto**: expander dove è possibile inserire:   
>
>> **Fornitore**: è la ragione sociale del *Fornitore* di acquisto.   
>> **Produttore**: è il contatto del *Produttore* dello strumento.   
>> **Data di acquisto**: è la data di acquisto.   
>> **Scadenza garanzia**: è la data di scadenza della garanzia di acquisto.   
>> **Fornitore manutenzione/assistenza**: è la ragione sociale del *Fornitore* abituale di manutenzione/assistenza.   
>
> **Funzione responsabile**: expander dove è possibile inserire:   
>
>> **Funzione**: è la *Funzione aziendale* responsabile.   
>> **Dipendente**: è il *Dipendente* responsabile*.   
>
> **Proprietà di taratura**: expander dove è possibile inserire:   
>
>> **Non soggetto a taratura**: indica che lo *Strumento di misura* non è soggetto a taratura.   
>> In questo caso tutte le altre informazioni presenti nell'expander sono disabilitate.   
>> **Taratura interna**: indica che lo *Strumento di misura* viene tarato da un soggetto interno all'azienda.   
>> **Periodo di taratura**: è il periodo (espresso nella successiva *Unità di misura*) di taratura dello *Strumento di misura*.   
>> **Unità di misura**: è l'*Unità di misura* del *Periodo* di taratura.   
>> **Ultima taratura**: è la data dell'ultima taratura effettuata; il valore viene automaticamente impostato all'attribuzione dell'*Esito* dell'ultima *Taratura* effettuata ma può essere indicato anche manualmente.   
>> **Esito**: è l'*Esito* dell'ultima taratura effettuata; il valore viene automaticamente impostato all'attribuzione dell'*Esito* dell'ultima *Taratura* effettuata ma può essere indicato anche manualmente.   
>> **Data prossima taratura**: è la data della prossima taratura; il valore viene automaticamente impostato all'attribuzione dell'*Esito* dell'ultima *Taratura* effettuata ma può essere indicato anche manualmente.   
>> **Fornitore taratura**: è la ragione sociale del *Fornitore* che effettua la taratura esterna.   
>
> **Classificazione**: è la *Classificazione*; esempi: Meccanico, Elettrico, Elettronico, ecc.   
> **Articolo**: è l'*Articolo* associato allo *Strumento di misura*; l'articolo, per poter essere selezionato, deve di *Natura articolo* *Attrezzatura* oppure *Utensile*.   
>
> **Proprietà dello strumento**: expander dove è possibile inserire:   
>
>> **Unità di misura**: è l'*Unità di misura* dei valori rilevati dallo *Strumento di misura*.   
>> **Intervallo di misura**: è il range misurabile dallo *Strumento di misura*.   
>> **Precisione**: è la *Precisione di misura* minima.   
>> **Limiti**: sono i *Limiti di accettabilitò* dello *Strumento di misura* per poterlo utilizzare; esempi: eventuali limiti di precisione, ambienti dove non utilizzarlo, ecc.   
>> **Ubicazione fornitore**: è la ragione sociale del *Fornitore* dove è ubicato lo *Strumento di misura*.   
>> **E' uno Strumento primario**: indica che lo *Strumento di misura* visualizzato viene utilizzato per la taratura di altri strumenti.   
>> **Strumento primario**: è lo *Strumento di misura* che viene utilizzato per effettuare la taratura dello strumento visualizzato.   
>
> **Funzione di utilizzo**: expander dove è possibile inserire:   
>
>> **Funzione**: è la *Funzione aziendale* che utilizza abitualmente lo *Strumento di misura*.   
>> **Dipendente**: è il *Dipendente* che utilizza abitualmente lo *Strumento di misura*.   
>
> **Classe strumento**: è la *Classe strumento*; è abitualmente utilizzata per definire diversi livelli di declassamento dello *Strumento di misura*.   
> **Magazzino/Ubicazione**: è il *Magazzino/Ubicazione* dove è ubicato lo *Strumento di misura*.   
> **Cliente proprietario**: è la ragione sociale del *Cliente* proprietario.   
> **Attivo**: indica che lo *Strumento di misura* è ancora *attivo*.   
> **Non attivo dal**: indica la data dalla quale lo *Strumento di misura* non è più *attivo*.   
> **Annotazioni**: annotazioni libere.   


### Valori da rilevare
In questo elenco è possibile definire i tipi di rilevazione e i valori da rilevare durante le attività di *Taratura interna*.   
Se lo *Strumento di misura* è *Attivo*, è *Soggetto a taratura* e se è di *Taratura interna* questi valori vengono riportati nelle *Tarature interne*.   
L'elenco si compone delle seguenti informazioni:   
> **Sequenza**: è la sequenza di rilevazione.   
> **Posizione**: annotazioni libere sull'argomento.   
> **Intervallo lettura**: annotazioni libere sull'argomento.   
> **Dato richiesto**: è il valore nominale richiesto.   
> **Incertezza (-)**: è il valore dell'incertezza negativa (espressa in percentuale) che verrà applicata al *Dato richiesto*.   
> **Incertezza (+)**: è il valore dell'incertezza positiva (espressa in percentuale) che verrà applicata al *Dato richiesto*.   
> **Nota**: annotazioni libere.   


### Articoli associati
In questo elenco è possibile associare gli *Articoli* misurabili con lo *Strumento di misura*.   
Con la versione attuale di Fluentis non ci sono controlli standard che verificano l'utilizzo dello strumento per rilevare valori dagli *Articoli* presenti in questo elenco.   
L'elenco si compone delle seguenti informazioni:   
> **Classe**: è la *Classe articolo*.   
> **Codice**: è il codice dell'*Articolo*.   
> **Classe**: è la descrizione dell'*Articolo*.   
> **Note**: annotazioni libere.   


### Storico Rapporti e Certificati di taratura
In questo elenco è possibile visualizzare lo storico delle *Tarature* e dei *Certificati di taratura* pianificati ed effettuati per lo *Strumento di misura*.   
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
E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per ogni *Strumento di misura*.   


### Documenti collegati
In questo elenco è possibile inserire e consultare eventuali allegati; è possibile visualizzare l'anteprima.   


### Immagine
E' possibile allegare un'immagine dello *Strumento di misura* tramite l'utilizzo del drag&drop; viene visualizzata l'anteprima.   
Questo allegato non viene incluso nel Documentale di Fluentis.   


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).