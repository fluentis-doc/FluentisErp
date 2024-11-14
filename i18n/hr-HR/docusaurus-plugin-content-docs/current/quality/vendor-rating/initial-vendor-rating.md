---
title: Valutazioni iniziali e periodiche
sidebar_position: 2
---

La gestione si trova sul percorso **Qualità > Valutazioni fornitore > Valutazioni iniziali e periodiche**


:::important A cosa serve
Le *Valutazioni iniziali e periodiche* è uno dei metodi di valutazione dei fornitori che vengono messi a disposizione per la valutazione degli stessi.
Questo metodo "soggettivo" è manuale e viene abitualmente utilizzato per le prime valutazioni e valutazioni successive.   

La gestione consente di inserire nuove *Valutazioni iniziali e periodiche* o di ricercare quelle già esistenti per visualizzarle, modificarle oppure cancellarle.   
:::


## Pulsanti di comando


### ![](/img/neutral/common/search.png) Ricerca Valutazioni iniziali e periodiche

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.


### ![](/img/neutral/common/new.png) Inserimento Valutazioni iniziali e periodiche

Per poter inserire nuove *Valutazioni iniziali e periodiche* è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**.   
Per il nuovo record si devono inserire almeno i campi obbligatori richiesti dal programma: La **Data valutazione**, il **Fornitore** e il **Tipo valutazione**.


### ![](/img/neutral/common/select-all.png) Associa Check-list

Pulsante abilitato solamente se si seleziona una sola *Valutazione iniziale e periodica* e il *Fornitore* non è già stato valutato.   
Viene visualizzato l'*Help delle Check-list* dal quale è possibile selezionarne una sola.
Se esiste già una *Check-list* associata alla riga viene richiesto se sostituire quella esistente (e relative *Domande*) con la nuova *Check-list* selezionata.


## Gestione dati


### Valutazioni iniziali e periodiche

E' l'elenco dove vengono inserite le informazioni principali della *Valutazione iniziale e periodica*.   
L'elenco si compone delle seguenti informazioni:   
> **Data valutazione**: (dato obbligatorio) è la data nella quale viene effettuata la valutazione.   
> All'inserimento di una nuova valutazione viene proposta in automatico la data odierna.   
>
> **Fornitore**: (dato obbligatorio) è la ragione sociale del *Fornitore* che viene valutato.   
>
> **Tipo valutazione**: (dato obbligatorio) è il codice del *Tipo valutazione*.   
> All'inserimento di una nuova valutazione viene proposto il *Tipo valutazione* indicato nei *Parametri qualificazione fornitore*.   
>
> **Check-list**: è il codice della *Check-list*.   
> All'inserimento di un *Fornitore* viene proposta in automatico la *Check-list* presente nei suoi *Dati contabili > Dati qualità* e le relative *Domande*.   
> La modifica di una *Check-list* comporta la sostituzione delle *Descrizioni/Domande* presenti previo richiesta.
>
> **Ispettore**: è il codice dell'*Ispettore* che effettua la valutazione.   
>
> **Motivo valutazione**: annotazioni libere sull'argomento, è una descrizione della motivazione della valutazione.   
>
> **Valutazione**: è la *Valutazione* data al *Fornitore* dell'*Ispettore*.   
> La cella viene colorata con i colori di *sfondo* e di *testo* previsti nella tabella delle *Valutazioni fornitore*.   
> Se la *Valutazione* attribuita è assoviata ad una *Valutazione fornitore* con *Sospensione automatica* il *Fornitore* valutato verrà *Sospeso* dalla *Data valutazione*.
> Il ripristino della sospensione deve essere fatta manualmente dalla *Funzione aziendale* preposta.   
> Associata una *Valutazione* le informazioni di: *Data valutazione*, *Fornitore* e *Tipo valutazione* non saranno più modificabili.   
>
> **Descrizione tipo valutazione**: è la descrizione del *Tipo valutazione*.   
> **Descrizione check-list**: è la descrizione della *Check-list*.   
> **Descrizione ispettore**: è la descrizione dell'*Ispettore*.   
> **Note**: annotazioni libere.  


### Descrizioni/Domande

E' l'elenco delle domande/attività da utilizzare/effettuare per le valutazioni a fornitori.   
L'elenco si compone delle seguenti informazioni:   
> **Sequenza**: è la sequenza di attuazione delle *domande/attività*.   
> **Descrizione/Domanda**: annotazioni libere sull'argomento.   
> **Risposta**: annotazioni libere sull'argomento.   
> **Valutazione attesa**: è il *Livello di valutazione* minimo richiesto per la valutazione.   
> **Valutazione rilevata**: è il *Livello di valutazione* valutato.   
> Il carattere diventa *Rosso* se la *Valutazione rilevata* è inferiore alla *Valutazione attesa*.   
> **Note**: annotazioni libere.


### Extra data

E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) generali per la *Valutazione iniziale e periodica*.   


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).