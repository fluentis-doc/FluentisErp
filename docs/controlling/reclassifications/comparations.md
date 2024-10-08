---
title: Comparazione riclassificazioni
sidebar_position: 5
---

Le comparazioni delle riclassificazioni consentono, a partire da un determinato *Modello di riclassificazione*, di elaborare dei confronti tra le varie riclassificazioni memorizzate in ***FluentisERP***.


## COMPARAZIONI SU DATI DEI RICLASSIFICATI DI CHIUSURE INFRANNUALI
Imposteremo il modello, inseriremo una Descrizione identificativa della comparazione, sulla destra non andremo ad impostare il flag **Dati del controlling** in modo che ***FluentisERP*** vada a leggere i dati dei riclassificati elaborati dai dati della *Chiusura infrannuale* o dal *Consolidamento*.

Nella griglia sottostanti dei ***Dettagli*** avremo i seguenti campi:
- *Progressivo* di riga, sarà l'elemento identificativo del dato nella scheda successiva degli ***Scostamenti***
- *Codice/Chiusura* (con la relativa Descrizione e Data)

Una volta salvate queste impostazioni, nella Scheda degli ***Scostamenti*** vedremo il risultato della comparazione. In particolare avremo le seguenti opzioni:

- *Visualizzazione degli scostamenti*: consente di vedere lo scostamento percentuale tra le riclassificazioni inserite. Sul lato destrosi attiverà la possibilità di impostare su quale quale colonna (quella vicina o su una fissa) calcolare lo scostamento

- *Visualizza dati di dettaglio*: mostrerà il dettaglio dei sottoconti, o centri, che valorizzano il singolo nodo del modello

- *Visualizza centri*: non attivo su comparati non del controlling

- *Cifre decimali*: decimali da utilizzare per la colonna sostamenti


## COMPARAZIONI SU DATI DELLA CONTABILITA' GESTIONE DEL CONTROLLING
Imposteremo il modello, inseriremo una Descrizione identificativa della comparazione, sulla destra andremo ad impostare il flag **Dati del controlling** in modo che ***FluentisERP*** vada a leggere i dati della *Contabilità gestionale* del controlling.

Nella griglia sottostanti dei ***Dettagli*** avremo i seguenti campi:
- *Progressivo* di riga, sarà l'elemento identificativo del dato nella scheda successiva degli ***Scostamenti***
- *Area*, obbligatorio, sarà l'area dalla quale leggere i dati
- *Dimensione*, obbligatorio, cioè da quale dimensione leggere i dati
- *Centro aziendale*, opzionale, cioè di quale centro si vuole visualizzare i dati
- *Progetto*, non in uso
- *Periodo inizio* e *Periodo fine*, obbligatori, è il range di periodi da considerare
- *Anno inizio* e *Anno fine*, obbligatori, è il range di anni da considerare
- *Visualizza dettagli periodo*: significa che per la riga, si richiede l'esplosione di N colonne una per ogni periodo del range definito
- *Centro/Commessa su colonna*: significa che il codice del *Centro* impostato sulla riga sarà riportato nel nome della colonna
- *Calcola indici*: questa opzione forzerà un calcolo 'al volo' degli indici di costo dei centri. Questa opzione è valida quando si sta eseguendo un comparato sul codice modello utilizzato per la misurazione dei centri, in tabella dei *Centri di costo*


Una volta salvate queste impostazioni, nella Scheda degli ***Scostamenti*** vedremo il risultato della comparazione. In particolare avremo le seguenti opzioni:

- *Visualizzazione degli scostamenti*: consente di vedere lo scostamento percentuale tra le riclassificazioni inserite. Sul lato destrosi attiverà la possibilità di impostare su quale quale colonna (quella vicina o su una fissa) calcolare lo scostamento

- *Visualizza dati di dettaglio*: mostrerà il dettaglio dei sottoconti, o centri, che valorizzano il singolo nodo del modello

- *Visualizza centri*: mostrerà anche il dettaglio dei centri associati ai sottoconti del nodo

- *Visualizza totali*: aggiungerà una colonna finale di totalizzazione di tutte le colonne visualizzate nella griglia sottostante

- *Cifre decimali*: decimali da utilizzare per la colonna sostamenti

In caso di visualizzazione degli scostamenti, avremo le seguenti colonne di scostamento:
- *%*: si tratta della *percentuale verticale* tra il nodo che ha il flag 'Riferimento percentuale' (che quindi avrà 100%) e tutti gli altri
- *Scostamento*: si tratta dello scostamento in valore assoluto
- *Scost.%': si tratta dello scostamento in percentuale
- *Scost.% su %': mette a confronto le *percentuali verticali* delle due colonne

Nel caso in cui si fosse nel comparato del modello di attribuzione costi ai centri per il calcolo degli indici, se nel dettaglio di impostazione abbiamo filtrato per i vari centri produttivi misurati avremo la possibilità di vedere, all'interno del sottostante expander, i totali di elaborazione dell'indice di costo per ognuno di questi. I campi visualizzati sono:

- *UM1-F NUMERATORE*: numeratore per il calcolo indice fisso sulla UM1 del centro
- *UM1-F DENOMINATORE*: denominatore per il calcolo indice fisso sulla UM1 del centro
- *UM1-F VALORE INDICE*: valore dell'indice fisso sulla UM1 del centro
- *UM1-V NUMERATORE*: numeratore per il calcolo indice variabile sulla UM1 del centro
- *UM1-V DENOMINATORE*: denominatore per il calcolo indice variabile sulla UM1 del centro
- *UM1-V VALORE INDICE*: valore dell'indice variabile sulla UM1 del centro
- *UM1 TOTALE*: indice totale della UM1 del centro

- *UM2-F NUMERATORE*: numeratore per il calcolo indice fisso sulla UM2 del centro
- *UM2-F DENOMINATORE*: denominatore per il calcolo indice fisso sulla UM2 del centro
- *UM2-F VALORE INDICE*: valore dell'indice fisso sulla UM2 del centro
- *UM2-V NUMERATORE*: numeratore per il calcolo indice variabile sulla UM2 del centro
- *UM2-V DENOMINATORE*: denominatore per il calcolo indice variabile sulla UM2 del centro
- *UM2-V VALORE INDICE*: valore dell'indice variabile sulla UM2 del centro
- *UM2 TOTALE*: indice totale della UM2 del centro

- *% NUMERATORE* numeratore per il calcolo indice percentuale
- *% DEMONIMATORE* denominatore per il calcolo indice percentuale
- *% PERCENTUALE* valore dell'indice percentuale

:::tip NOTA
Quando si elaborano le comparazioni del controlling, ***FluentisERP*** creerà automaticamente tante riclassificazioni sul modello quante sono le combinazioni di centro, anno,mese e dettagli richiesti, prima di rendere disponibile il risultato dell'elaborazione. Più è complessa la lista, più sarà lunga l'elaborazione.
:::