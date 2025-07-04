---
title: Comparazione riclassificazioni
sidebar_position: 5
---

Le comparazioni delle riclassificazioni consentono, a partire da un determinato [*Modello di riclassificazione*](/docs/controlling/reclassifications/create-reclassification-model), di elaborare dei confronti tra le varie riclassificazioni memorizzate in ***FluentisERP***.


:::tip[Importante]
Questa form rappresenta il punto conclusivo del percorso di elaborazione dati che avviene nel modulo controlling.

Da qui è possibile generare il reporting finale che permette di analizzare i dati.

Le analisi tipiche che possono essere fatte sono, ad esempio:

- Controllo scostamenti tra budget e consuntivo, oppure tra due o più consuntivi (sia su dati contabili che sui dati dei centri aziendali)
- Analisi di periodo (tipicamente i vari mesi, così come da impostazioni e logiche dell'intero modulo di controlling) per determinare marginalità o andamenti di costi e ricavi
- Analisi della redditività e marginalità delle linee di business, tramite confronto (riassuntivo o mese r mese) di particolari centri " di risultato" aggregati secondo il modello di riclassificazione selezionato.
 
La form può essere utilizzata in due modi diversi per scopi ben precisi:

1) Leggendo e confrontando le riclassificazioni delle **chiusure infrannuali**. In questo caso **NON avviene alcuna lettura delle elaborazioni della contabilità gestionale**, quali cost driver o scritture gestionali dirette, ma solo i dati delle chiusure infrannuali (riclassificati)

2) Leggendo i dati della **contabilità gestionale** (come elaborati dalle apposite procedure) e quindi con i risultati della ripresa dati da produzione, cost driver ecc...
:::

## COMPARAZIONI SU DATI DEI RICLASSIFICATI DI CHIUSURE INFRANNUALI
1. Selezionare il modello di riclassificazione desiderato e inserire una Descrizione identificativa della comparazione, 
2. **NON** attivare il flag **Dati del controlling** in modo che ***FluentisERP*** utilizzi i dati delle *Chiusure infrannuali* o dal *Consolidamento* e li presenti riclassificati In base al modello selezionato.

Nella griglia dei ***Dettagli*** avremo i seguenti campi:
- *Progressivo* di riga, sarà l'elemento identificativo del dato nella scheda successiva degli ***Scostamenti***
- *Codice/Chiusura* (con la relativa Descrizione e Data)

Una volta salvate queste impostazioni, nella Scheda degli ***Scostamenti*** vedremo il risultato della comparazione. In particolare avremo le seguenti opzioni:

- *Visualizzazione degli scostamenti*: consente di vedere lo scostamento percentuale tra le riclassificazioni inserite. Sul lato destro si attiverà la possibilità di impostare su quale quale colonna (quella vicina o su una fissa) calcolare lo scostamento

- *Visualizza dati di dettaglio*: mostrerà il dettaglio dei sottoconti, o centri, che valorizzano il singolo nodo del modello

- *Visualizza centri*: non attivo su comparati non del controlling

- *Cifre decimali*: decimali da utilizzare per la colonna sostamenti


## COMPARAZIONI SU DATI DELLA CONTABILITA' GESTIONE DEL CONTROLLING
1. Selezionare il modello di riclassificazione desiderato e inserire una Descrizione identificativa della comparazione, 
2. **Attivare** il flag **Dati del controlling** in modo che ***FluentisERP*** legga i dati della ***Contabilità gestionale*** del controlling (e quindi siano visibili i risultati di elaborazioni quali cost driver, indici e tariffe, ripresa dati da produzione ecc...).

Nella griglia dei ***Dettagli*** avremo i seguenti campi:
- *Progressivo* di riga, sarà l'elemento identificativo del dato nella scheda successiva degli ***Scostamenti***
- ***Area***, **obbligatorio**, sarà l'area dalla quale leggere i dati (esempio, consuntivo, oppure budget ecc...)
- [***Dimensione***](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension), **obbligatorio**, cioè da quale dimensione leggere i dati (esempio la dimensione principale della contabilità gestionale, oppure altre dimensioni di analisi quali investimenti particolari, commesse ecc...)
- [*Centro aziendale*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), **opzionale**, cioè di quale centro si vuole visualizzare i dati (fungendo da filtro inquanto leggerà i dati solo di quel centro, ed eventualmente sarà necessario specificare, inserendo riga per riga, tutti i centri che devono essere coinvolti (ad esempio centri "i risultato")
- *Progetto*, non in uso
- ***Periodo inizio*** e ***Periodo fine***, **obbligatori**, è il range di periodi (mesi) da considerare
- ***Anno inizio*** e ***Anno fine***, **obbligatori**, è il range di anni da considerare
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


:::note[Indici]
Nel caso in cui si fosse nel comparato del modello di attribuzione costi ai centri per il calcolo degli indici, **se nel dettaglio di impostazione abbiamo filtrato per i vari centri produttivi misurati**, avremo la possibilità di vedere, all'interno del sottostante ***expander***, i totali di elaborazione dell'indice di costo per ognuno di questi. 

I campi visualizzati sono:

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
:::


:::tip NOTA
Quando si elaborano le comparazioni del controlling, ***FluentisERP*** creerà automaticamente tante riclassificazioni sul modello quante sono le combinazioni di centro, anno,mese e dettagli richiesti, prima di rendere disponibile il risultato dell'elaborazione. Più è complessa la lista, più sarà lunga l'elaborazione.
:::

:::important[Approfondimento]
Nella presentazione dei risultati finali (comprensivi delle elaborazioni di contabilità gestionale quali cost driver ecc...) tramite il reporting permesso dalla presente maschera, al fine di rappresentare una situazione completa e corretta in relazione agli scopi del proprio sistema di controlling, occorre valutare l'interazione tra i seguenti elementi: 

- la struttura del modello di riclassificazione che viene selezionato ed i relativi agganci, che possono essere ai soli conti contabili (leggendo in tal modo tutti i centri aziendali collegati ad ogni conto) oppure al conto filtrato per centro (ottenendo solo i movimenti connessi a quel centro, provenienti da quel conto), oppure al solo centro aziendale (ottenendo tutti i movimenti confluiti su quel centro da qualsiasi conto)

- il tipo di dato che viene letto nell'aggancio tra il modello di riclassificazione ed i centri aziendali (dato sorgente, comunque riportante l'effetto dei cost driver per default, oppure ribaltamenti di valori tra centri potendo discriminare tra valori ceduti o ricevuti)

- L'impostazione che si esegue nella griglia *dettagli* della comparazione con attivo il flag ***Dati dal controlling***: ovvero se in questa griglia si richiama un'intera area e dimensione di analisi, con tutti i centri ad essa afferenti, oppure si filtrano solo alcuni centri aziendali. In quest'ultimo caso occorre ponderare quali centri richiamare; a puro titolo di esempio, centri che abbiano ricevuto i valori di risultato da altri centri, questi ultimi NON "svuotati" dai cost driver (per evitare di duplicare valori).
:::