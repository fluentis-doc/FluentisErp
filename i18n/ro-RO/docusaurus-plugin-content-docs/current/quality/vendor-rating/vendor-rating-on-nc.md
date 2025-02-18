---
title: Valutazioni periodiche su Non conformità
sidebar_position: 3
---

La gestione si trova sul percorso **Qualità > Valutazioni fornitore > Valutazioni periodiche su Non conformità**.   


:::important A cosa serve
Le *Valutazioni periodiche su Non conformità* è uno dei metodi di valutazione dei fornitori che vengono messi a disposizione per la valutazione degli stessi.   
Questo metodo "oggettivo" si basa sul peso delle difettosità assegnate alle *Non conformità a fornitore* e viene abitualmente utilizzato per le valutazioni periodiche.   

La gestione consente di inserire nuove *Valutazioni periodiche su Non conformità* o di ricercare quelle già esistenti per visualizzarle.   
:::


## Pulsanti di comando


### ![](/img/neutral/common/search.png) Ricerca Valutazioni periodiche su Non conformità

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.   


### ![](/img/neutral/common/accountant-search.png) Qualificazione periodica

Per poter inserire nuove *Valutazioni iniziali e periodiche* è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Qualificazione periodica**.   


## Gestione dati


### Valutazioni periodiche su Non conformità

E' l'elenco dove vengono visualizzate le informazioni principali della *Valutazione periodiche su Non conformità*.   
L'elenco si compone delle seguenti informazioni:   
> **Da data valutazione**: è la data iniziale del periodo di valutazione. L'informazione è di sola lettura.   
> **A data valutazione**: è la data finale del periodo di valutazione. L'informazione è di sola lettura.   
> **Fornitore**: è la ragione sociale del *Fornitore* valutato. L'informazione è di sola lettura.   
> **Bonus**: è il valore di partenza del *Bonus* associato al *Fornitore*. L'informazione è di sola lettura.   
> **Bonus residuo**: è il valore finale del *Bonus* una volta effettuata la valutazione. L'informazione è di sola lettura.   
> **Punteggio %**: è il valore percentuale tra *Bonus residuo* e *Bonus iniziale*. L'informazione è di sola lettura.   
> **Valutazione**: è la *Valutazione* data al *Fornitore* sulla base del *Punteggio %* ottenuto. L'informazione è di sola lettura.   
> La cella viene colorata con i colori di *sfondo* e di *testo* previsti nella tabella delle *Valutazioni fornitore*.   
> Se la *Valutazione* attribuita è associata ad una *Valutazione fornitore* con *Sospensione automatica* il *Fornitore* valutato verrà *Sospeso* dalla *Data valutazione*.
> Il ripristino della sospensione deve essere fatta manualmente dalla *Funzione aziendale* preposta.   
> **Note**: annotazioni libere.   


### Valori Non conformità nel periodo

E' l'elenco delle diverse *Gravità* riscontrate nel periodo valutato.   
L'elenco si compone delle seguenti informazioni:   
> **Gravità**: è il codice della *Gravità*.   
> **Descrizione gravità**: è la descrizione della *Gravità*.   
> **Conteggio**: è il numero delle *Gravità* conteggiate.   
> **Punteggio gravità**: è il *Punteggio calcolo indice di qualificazione fornitore* associato alla *Gravità*.   
> **Totale punteggio calcolato**: è la sommatoria di tutti i *Punteggi calcolo indici di qualificazione fornitore* (**IQF**) e tra loro moltiplicati.   


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


### Extra data

E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) generali per la *Valutazione periodica su Non conformità*.   


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).