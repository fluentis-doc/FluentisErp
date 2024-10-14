---
title: Ripresa dati da produzione
sidebar_position: 1 
---

La ripresa dati da produzione legge i dati per attribuire i movimenti fisici (quindi la movimentazione dei materiali ma anche i tempi) su commessa ed i costi delle lavorazioni

La maschera si divide in 3 procedure differenti

## RIPRESA ORE/COSTI DI PROGETTO
Con questa procedura andiamo a recuperare i dati delle ore del personale di produzione (nella ***Gestione ore dichiarate***) ma anche dell'area Progetti, in particolare dalla ***Dichiarazione attività*** e dagli ***Interventi***, per inserirli nelle ***Registrazioni movimenti fisici*** e nelle tabelle dei ***Movimenti di progetto/commessa***. Vediamo le varie opzioni disponibili:
- Andremo ad indicare su che [***Area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) rilevare i movimenti
- in che ***Data***
- su che ***Anno*** del controlling 
- a destra imposteremo coerentemente il range ***Da data*** e ***A data***
- e qual è il ***Tipo misurazione***, cioè se la prima o la seconda UM impostata nei centri
sul lato sinistro poi avremo la scelta del 
- ***Tipo progetto***, che consente di definire qual è il progetto che ci interessa riportare nei dati fisici di progetto:
    - ***Tutti i progetti in dichiarazione ore***, rileveremo ogni singolo progetto che è stato referenziato nelle dichiarazioni ore
    - ***Ore ai progetti collegati***, andremo ad attribuire sempre il progetto padre di quelli specifici dichiarati
    - L’opzione ***Valorizza ore da intercompany***, invece, consente di portare nella società attiva le ore che i dipendenti potrebbero aver inserito in una differente società del database, ma che sono da considerare in questa.
Sul lato destro possiamo aggiungere anche una valorizzazione economica alle nostre considerazioni finora quantitative dei tempi: 
- possiamo impostare il ***Valorizza oneri viaggio dell'attività/intervento*** per considerare gli oneri viaggio legati alle attività/interventi 
- il flag ***‘***Gestione dell’orario di lavoro per progetto***, invece, fa considerare a Fluentis solo le ore che sono state legate ad un progetto, anche per la valorizzazione della prima nota movimenti fisici, dove normalmente invece finiscono tutte le ore indicate indipendentemente dal collegamento a progetto.
- possiamo impostare il ***Valorizza extracontabilmente i costi delle risorse*** applicando il costo della stessa al numero delle ore del periodo, applicando eventualmente un correttivo di ***Efficienza*** nel campo più in basso.
- Chiude questa sezione l’opzione ***Valorizza di costi/ricavi intercompany delle risorse***: significa valorizzare nella società attiva i costi o i ricavi per prestazioni intercompany rilevate dai dipendenti in dichiarazione ore.

## RIPRESA MOVIMENTI FISICI
La ***Ripresa movimenti fisici*** va a leggere le segnalazioni di produzione e valorizza i tempi macchina, piuttosto che i tempi uomo, e i tempi di attrezzaggio uomo e macchina: li andrà a valorizzare sia nella tabella delle ***Registrazioni movimenti fisici***, che nella tabella dei ***movimenti fisici di progetto/commessa***. Questi dati vengono verificati in riferimento al centro di costo associato alla macchina e al gruppo manodopera, se questo centro viene misurato per i tempi macchina o uomo o attrezzaggio così come impostato nella tabella delle ***Unità di misura dei centri nel controlling***.
I dati da impostare sono 
- l’[***Area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) di riferimento
- la ***Data*** della rilevazione 
- l’***Anno*** 
- il range di date di filtro ***Da data*** e ***A data*** a destra.
Sono previste 3 opzioni sui tempi utilizzati: 
- di default andremo a valorizzare i ***Tempi consuntivi*** nella segnalazione di produzione stessa
- nel secondo caso andremo a leggere i ***Tempi ciclo*** legato alla segnalazione per valorizzare il dato teorico di ciclo (cioè proporzionando la quantità prodotta nella segnalazione rispetto a quella del ciclo)
- mentre nell’ultimo caso ***Tempi fase standard*** andremo a leggere la fase standard della segnalazione per utilizzare il suo valore, sempre proporzionato rispetto alla quantità segnalata.
Se ci sono macchine o attrezzature collegate ad un’anagrafica cespite, questa stessa procedura andrà anche a valorizzare le ***Registrazioni movimenti fisici*** (e quella per progetto) delle quantità che il cespite ha prodotto nel periodo, al fine di poterne calcolare gli ammortamenti su quantità.

## RIPRESA COSTI DI COMMESSA
La procedura della ***Ripresa costi di commessa***, infine, è dedicata alla rilevazione dei costi delle trasformazioni interne ed esterne.
Imposteremo anche qui 
- l’[***Area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- la ***Data*** della rilevazione
- l’***Anno***
- la ***Causale*** da utilizzare nella registrazione di area
- il range di date ***Da data*** e ***A data*** da utilizzare 
- infine il ***Conto lavorazioni esterne*** da utilizzare per valorizzare le lavorazioni esterne che leggeremo dal conto lavoro.
Per quelli che sono i dati ripresi dal conto lavoro, utilizzeremo il conto impostato nella maschera al prezzo rilevato nella fattura di acquisto collegata al rientro, oppure a quello del rientro stesso se non ancora fatturata dal terzista, valorizzando il centro di costo associato al conto di costo stesso.
Per le lavorazioni interne, invece, potremo valorizzare al ***Costo standard***, ***Costo ultimo*** o ***Costo medio*** le quantità che arrivano nelle segnalazioni di produzione del periodo, piuttosto che i materiali utilizzati negli interventi presso terzi.

Il risultato dell’elaborazione viene inserito nei ***Valori da produzione***, maschera della sezione della gestione di progetto: questa procedura, infatti, filtra i dati che sono collegati ai progetti e gestisce **solo questi** al fine della consuntivazione di progetto.

Ultima nota è quella del secondo tab ***Progetti***, che è legato proprio a questa ultima procedura: in questa sezione possiamo andare a selezionare su quali commesse siamo interessati a rilevare i costi di commessa, se non filtriamo nulla andremo a valorizzare tutti i movimenti di commessa che troveremo nel periodo.
