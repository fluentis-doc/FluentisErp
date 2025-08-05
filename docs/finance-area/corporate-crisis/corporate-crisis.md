---
title: Funzionalità di verifica della crisi di impresa
sidebar_position: 1
---

:::important[Introduzione]
La normativa sulla crisi d’impresa, introdotta dal D.Lgs. 14/2019 (Codice della Crisi d’Impresa e dell’Insolvenza), ha l’obiettivo di prevenire situazioni di insolvenza attraverso l’adozione di strumenti di monitoraggio precoce delle difficoltà finanziarie.

Le imprese sono tenute a dotarsi di assetti organizzativi, amministrativi e contabili adeguati, in grado di rilevare in modo tempestivo segnali di squilibrio economico, patrimoniale o finanziario.

Tra gli strumenti previsti dalla normativa vi sono **indicatori specifici**, come il DSCR (Debt Service Coverage Ratio), la verifica della continuità aziendale, e l’analisi di sostenibilità del debito. L’inosservanza degli obblighi può comportare responsabilità per l’organo amministrativo.

All'interno di Fluentis ERP sono disponibili funzionalità dedicate al controllo degli indicatori della crisi, che supportano l’azienda nel rispettare quanto previsto dalla normativa vigente.

Nei paragrafi seguenti vengono descritte nel dettaglio le funzionalità disponibili per adempiere a tali obblighi.
:::

## 1 Accesso alla funzionalità
La gestione della crisi d’impresa è possibile mediante l'utilizzo della Soluzione Fluentis ***Corporate Performance Monitor (CPM)***. 

![](/img/it-it/finance-area/corporate-crisis/1.png)

Il CPM, più in generale, è stato pensato per monitorare le performance aziendali e, in particolare, creare indici e KPI. Viene impiegato anche per gestire in modo più flessibile gli indici di crisi.

## 2 Funzionalità del CPM
Il modulo CPM include una sezione dedicata alla verifica della crisi d’impresa, articolata in quattro schede. 

![](/img/it-it/finance-area/corporate-crisis/2.png)

Ogni scheda presenta il calcolo dei vari controlli previsti dalla normativa:

Nella prima, ***Verifiche enti terzi***, vengono effettuati i test degli enti come **l’Agenzia delle Entrate e l’INPS**, che monitorano:

-	Ritardi nei versamenti IVA
-	Ritardi nei versamenti dei contributi previdenziali e fiscali dei dipendenti

In particolare, le soglie che attivano le segnalazioni sono:

-	IVA: debito minimo di 100.000 € → possibile insolvenza
-	Altri debiti fiscali: oltre 1.000.000 € e ritardo > 90 giorni → segnalazione
-	Contributi previdenziali: oltre 50.000 € e ritardo > 180 giorni → segnalazione

Queste soglie sono configurabili in tabelle interne al sistema

Nella seconda scheda, ***Verifica Patrimonio netto e DSCR*** si verifica:

-	Totale patrimonio netto: se negativo si presuppone lo stato di crisi
-	DSCR (Debt Service Coverage Ratio): se inferiore a 1 si presuppone lo stato di crisi

Nella terza, ***Indici settoriali***, vengono verificati 5 indici settoriali, dove cioè i valori attesi dipendono dal settore merceologico di appartenenza: in caso di superamento di tutte le soglie previste, nuovamente, si presuppone lo stato di crisi.

L’ultima scheda è dedicata, invece, al calcolo di eventuali ***indici personalizzati***, sui quali ogni azienda farà le sue valutazioni specifiche.

## 3 Fonti dei dati
I dati utilizzati per i controlli provengono da:

-	**Tabelle** di configurazione **specifiche**
-	Calcoli automatici tramite query **SQL**
-	Configurazioni legate ai **conti contabili**
-	**Scadenzari**

Innanzi tutto, all’interno della **tabella Società** è necessario indicare il **settore merceologico** di appartenenza: **Tab Impostazioni amministrative > Campo Settore merceologico per crisi impresa**
 
Quindi, all’interno del **piano dei conti** dovremo **assegnare le tipologie di conto per la crisi d’impresa** (tabella fissa), tramite il campo ***Crisi d'impresa*** presente nella griglia *Conti* (il dettaglio del piano dei conti).

Le tipologie possibili sono:
 
- ADE-VAT andrà associato tipicamente al conto che rileva il saldo Iva del mese, sul quale sarà necessario prevedere la gestione delle partite aperte al fine di individuare il debito aperto.
- ADE-OTHER andrà associato, in modo simile, ai conti che ci restituiscono altri debiti fiscali, che saranno sempre da gestire a partite aperte;
- INPS sarà da associare ai debiti previdenziali, sempre da gestire a partite aperte;
- LIQ verrà associato ai **mastri** (cioè, ai conti generici) che contengono il dettaglio dei codici clienti/fornitori, dai quali tramite un cash flow identificheremo i dati della liquidità disponibile
- FIN verrà associato ai conti (o ai mastri) che ci restituiranno, sempre da un cash flow, l’importo dei debiti finanziari, piuttosto che dalle rate future di mutui e leasing
- RIS lo assoceremo ai sottoconti delle riserve di copertura 
- MON lo assoceremo ai sottoconti (o conti) costi/ricavi NON monetari

I calcoli che vengono eseguiti di default, quindi, prelevano gli importi:
-	direttamente dalle partite contabili
-	dai dati elaborati nell’ultimo cash flow
-	dai saldi contabili dei conti associati a specifici nodi del **modello di riclassificazione standard** ***IV direttiva***. 

In questo caso, il modello serve solo per identificare quali conti ricercare per ogni variabile da utilizzare: gli importi vengono letti direttamente dalla contabilità generale, senza passare da una chiusura infrannuale o un riclassificato.

## 4 Gestione della crisi
Attualmente il sistema effettua solo una **validazione degli indici**, ma non gestisce l’intero processo operativo della crisi. Si può prevede l’attivazione di segnalazioni automatiche in caso di superamento delle soglie, tramite schedulazioni di Supervisor.

## 5 Target e settori
Ogni settore merceologico ha i propri **valori target** predefiniti. 

Questi valori sono memorizzati o in tabelle fisse non visualizzabili (sui controlli enti terzi) oppure nella form ***Targeting***, dove i dati degli indici standard per settore non sono comunque modificabili dall’utente in quanto gestiti con natura *standard*: solo i target degli indici personalizzati potranno avere target personalizzati modificabili.

## 6 Descrittori e formule
A parte i controlli enti terzi, che prevedono un calcolo effettuato da codice sorgente, ogni altro indice è associato ad un *descrittore* (si veda la form omonima nel menu principale del CPM) che ne definisce la formula di calcolo, ad esempio:

- Indice di sostenibilità degli oneri finanziari: l’indice si calcola come “Oneri finanziari” / “Fatturato”, che viene memorizzato nel descrittore ‘03.01’ con formula “[RIC-OneriFin]/[RIC-Fatturato]”
- Indice di adeguatezza patrimoniale: il calcolo è “Patrimonio netto” / “Debito totale”, che diventa il descrittore 03.02 con formula “[RIC-PatNetto]/[RIC-DebTot]”

![](/img/it-it/finance-area/corporate-crisis/5.png)

In sostanza, le formule si basano su *variabili* riportate in formula tramite il loro codice tra parentesi quadre.

Ogni **variabile** (si veda la form omonima nel menu principale del CPM) richiama una sua specifica query SQL
 
![](/img/it-it/finance-area/corporate-crisis/6.png)

Le query alla base delle variabili standard sono a loro volta delle query standard sulle quali l’utente non può intervenire: a partire da quelle proposte, comunque, sarà possibile definirne una versione custom che si adatti alle caratteristiche dell’impianto contabile della singola installazione.

## 7 Repository
Il sistema salva nella form Repository i risultati dei calcoli effettuati, creando così uno storico utile per analisi e dashboard. Ogni elaborazione è associata a una data: ogni indice avrà un unico risultato per ogni giorno.
 
![](/img/it-it/finance-area/corporate-crisis/7.png)
