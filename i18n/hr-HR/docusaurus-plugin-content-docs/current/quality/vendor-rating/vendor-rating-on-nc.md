---
title: Valutazioni periodiche su Non conformità
sidebar_position: 3
---

Upravljanje se nalazi na putanji **Kvaliteta > Kvalifikacije dobavljača > Periodične procjene nesukladnosti**.  


:::important Čemu služi
*Periodične procjene nesukladnosti* jedna su od metoda ocjenjivanja dobavljača koje su dostupne za njihovo ocjenjivanje.   
Ova se objektivna metoda temelji na težini neispravnosti dodijeljenima *Nesukladnostima dobavljaču* i uobičajeno se koristi za periodične procjene.   

Upravljanje omogućuje unos novih *Periodičnih procjena nesukladnosti* ili pretraživanje već postojećih za pregled.   
:::


## Tipke za upravljanje


### ![](/img/neutral/common/search.png) Pretraga Periodičnih procjena nesukladnosti

Obrazac se sastoji od područja filtra i područja rezultata. Nakon što se postave svi željeni filtri, dovoljno je kliknuti na tipku **Traži** kako bi se prikazali podaci unutar tablice rezultata.   


### ![](/img/neutral/common/accountant-search.png) Periodična kvalifikacija

Per poter eseguire la valutazione è necessario premere il pulsante **Qualificazione periodica**.   
Viene visualizzata una richiesta di:
> **Data fine valutazione**: proposta alla data odierna è la data dalla quale valutare ogni singolo *Fornitore*, andando nel passato, per il periodo a lui assegnato.   
> **Tipo valutazione**: è la tipologia attribuita alla valutazione di ogni singolo *Fornitore*.   
> Viene proposto il *Tipo valutazione* indicato nei *Parametri qualificazione fornitore*.
Entrambe le informazioni sono obbligatorie.   



## Gestione dati


### Valutazioni periodiche su Non conformità

E' l'elenco dove vengono visualizzate le informazioni principali della *Valutazione periodiche su Non conformità*.   
L'elenco si compone delle seguenti informazioni:   
> **Da data valutazione**: è la data iniziale del periodo di valutazione.   
> **A data valutazione**: è la data finale del periodo di valutazione.   
> **Fornitore**: è la ragione sociale del *Fornitore* valutato.   
> **Bonus**: è il valore di partenza del *Bonus* associato al *Fornitore*.   
> **Bonus residuo**: è il valore finale del *Bonus* una volta effettuata la valutazione.   
> **Punteggio %**: è il valore percentuale tra *Bonus residuo* e *Bonus iniziale*.   
> **Valutazione**: è la *Valutazione* data al *Fornitore* sulla base del *Punteggio %* ottenuto.   
> La cella viene colorata con i colori di *sfondo* e di *testo* previsti nella tabella delle *Valutazioni fornitore*.   
> Se la *Valutazione* attribuita è associata ad una *Valutazione fornitore* con *Sospensione automatica* il *Fornitore* valutato verrà *Sospeso* dalla *Data valutazione*.
> Il ripristino della sospensione deve essere fatto manualmente dalla *Funzione aziendale* preposta.   
> **Note**: annotazioni libere.   
Tutte le informazione sono di sola lettura ad eccezione delle Note.   


### Valori Non conformità nel periodo

E' l'elenco delle diverse *Gravità* riscontrate nel periodo valutato.   
L'elenco si compone delle seguenti informazioni:   
> **Gravità**: è il codice della *Gravità*.   
> **Descrizione gravità**: è la descrizione della *Gravità*.   
> **Conteggio**: è il numero delle *Gravità* conteggiate.   
> **Punteggio gravità**: è il *Punteggio calcolo indice di qualificazione fornitore* associato alla *Gravità*.   
> **Totale punteggio calcolato**: è la sommatoria di tutti i *Punteggi calcolo indici di qualificazione fornitore* (**IQF**) e tra loro moltiplicati.   


### Extra data

E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) generali per la *Valutazione periodiche su Non conformità*.   


:::tip Metodo utilizzato per il calcolo   
*Metodo utilizzato per il calcolo di:* **Totale punteggio calcolato**, **Bonus residuo**, **Punteggio %** e **Valutazione**.   
- Viene considerata ogni singola riga *Difetto* di *Non conformità* inserite nel periodo valutato, e attribuite al *Fornitore* in valutazione.   
- Per ogni riga di *Difetto riscontrato* viene moltiplicato ogni singolo *IQF* di: *Difetto riscontrato*, *Causa effettiva* oppure *Causa presunta* (in mancanza di una *Causa effettiva* associata), *Soluzione proposta* e *Decisione intrapresa*. Se uno di questi dati non viene inserito l'*IQF* è pari a **1,0**. Esempio:   
  - riga 1: *IQF Difetto riscontrato* = **5,1**, *IQF Causa effettiva* = **1,5**, *IQF Soluzione proposta* = **1,3** e *IQF Decisione intrapresa* = **2,1**;   
  il totale riga è pari a: **5,1 * 1,5 * 1,3 * 2,1 = 20.8845** = *Totale Riga 1*.   
  - riga 2: *IQF Difetto riscontrato* = **2,1**, *IQF Causa presunta* = **4,2** (*Causa effettiva* non inserita), *Soluzione proposta* non inserita quindi *IQF* = **1,0** e *IQF Decisione intrapresa* = **1,7**;   
  il totale riga è pari a: **2,1 * 4,2 * 1,0 * 1,7 = 14,994** = *Totale Riga 2*.   
- Il Totale punteggio calcolato per singola riga viene sommato alle altre righe considerate che hanno la medesima *Gravità*. La sommatoria di tutti i punteggi per riga è il *Totale punteggio calcolato* per quella *Gravità*. Esempio:   
  - **Totale punteggio calcolato** = *Totale Riga 1* + *Totale Riga 2* = **20,8845 + 14,994 = 35,8785**.   
- Per calcolare il *Bonus residuo* consideriamo un *Bonus* iniziale del *Fornitore* pari a **500**. Quindi:   
    - **Bonus residuo** = **Bonus** - sommatoria dei **Totale punteggi calcolati** per ogni *Gravità* = **500 - 35,8785 = 464,1215**.   
- Per calcolare il *Punteggio %* è l'applicazione della percentuale tra *Bonus residuo* e *Bonus iniziale*:   
    - **Bonus residuo** / **Bonus** * 100 = **464,1215 / 500 * 100 = 92.8243%**.   
- La **Valutazione** viene attribuita sulla base dei valori di *Punteggio da* indicati nell'elenco *Intervalli di punteggio per la valutazione* presente nei *Parametri Qualificazione fornitore*. Viene considerata la *Valutazione* con *Punteggio da* immediatamente inferiore al **Punteggio %**.
:::


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).