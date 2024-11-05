---
title: WBS assegnazione risorse
sidebar_position: 3
---
## WBS assegnazione risorse
La funzionalità di WBS Assegnazione risorse permette di associare le risorse alle wbs di progetto, senza aprire il progetto ed utilizzando direttamente il calendario per visualizzare gli impegni effettivi della risorsa. 
E’ disponibile per la licenza Fluentis Universal ed è apribile dall’area Gestione progetti > WBS Assegnazione risorse

# Filtri
All’apertura sarà necessario selezionare i calendari delle risorse su cui si intende lavorare, dalla tab **Filtri** presente in fondo a sinistra. 
Cliccare su ricerca per visionare tutte le risorse disponibili, e trascinare nel riquadro a destra quelle interessate. 

Sarà necessario poi indicare i progetti su cui si vuole lavorare, il cui dettaglio della struttura progetto sarà visibile nella tab **Calendario per progetto** situata in fondo accanto ai filtri. 
Il flag **WBS con giorni residui** mostrerà i progetti che hanno la quantità di “Giorni assegnati” superiori rispetto alla quantità di “Giorni previsti”

**Filtri generali**: 
In questa tab è possibile selezionare:
- quali documenti verranno visualizzati nei calendari: Richieste intervento, Interventi Pianificati, Intervento, Dichiarazione attività, Risorse assegnate a Progetto WBS, Vacanze. 
- L’opzione **evidenziare giorni delle risorse che hanno disponibilità** colora lo sfondo delle giornate dove non tutta la fascia oraria della risorsa è stata allocata. 
Le giornate con disponibilità verranno colorate in turchese. 
 
Ogni tipo di documento nel calendario può essere colorato in modo diverso per facilitarne la distinzione. 

La configurazione va fatta nelle tabelle dei tipi documento, ad es.: 
tabella Tipi intervento – per ogni tipo intervento è possibile gestire un colore diverso.
Allo stesso modo si procede per le richieste intervento, interventi pianificati, dichiarazione attività.

Solo gli appuntamenti delle risorse allocate nel progetto non hanno possibilità di scelta del colore, che sarà corrisponderà al colore del calendario della risorsa. Questi appuntamenti possono essere identificati dalla sigla “PR” (Project resource) dopo l’orario.

In presenza di richieste ferie e permessi, lo sfondo verrà cambiato in arancione. Se collegata l’attività generata dalla richiesta ferie, verrà mostrata in base all’opzione **vacanze** nei filtri “Documenti”. 

# Calendario per progetto
Da questa videata sarà possibile trascinare le singole wbs nel calendario di una o più risorse, e decidere il tipo documento da creare.
Viene visualizzata la struttura completa del progetto, con numero riga, numero WBS, Descrizione WBS, Data inzio e Data fine, Giorni assegnati, Giorni previsti, Giorni pianificati, Giorni eseguiti. 
Tramite i bottoni nella Ribbon bar è possibile **Espandere** e **Comprimere** tutta la struttura. 

Selezionare una singola wbs di ultimo livello e trascinarla verso il giorno desiderato nel calendario. 
Si aprirà una videata dove sarà possibile indicare la risorsa (che viene proposta in automatico in base al calendario in cui si sta allocando l'appuntamento), gli orari di inizio-fine e pausa (ottenuti dal turno della risorsa), ed il documento da generare:
- Assegnare la risorsa al progetto wbs
- Richiesta intervento
- Intervento pianificato
- Intervento


L’appuntamento potrà essere singolo oppure ricorrente, configurato tramite apposito bottone **Ricorrenza**:
- giornaliera: ogni *N.* giorni oppure ogni giorno
- settimanale: ogni *N.* settimane ed in determinati giorni
- mensile: giorno specifico del mese, ogni *N.* mesi oppure *primo/bis/ter/quater/ultimo* giorno ogni *N.* mesi
- annuale: ogni *N.* anni oppure data specifica oppure ogni oppure *primo/bis/ter/quater/ultimo* giorno del specifico mese.

Fine ricorrenza indica quanti appuntamenti verranno allocati con la regola sopra indicata. 
- nessuna data di fine
- Fine dopo: *N* ricorrenze. Viene proposto di default il valore presente in "Giorni Previsti"
- Fine per: *alla data*


In base al tipo documento da generare, verranno effettuate le seguenti operazioni: 
-	Assegnazione risorsa al progetto wbs: verrà inserita una riga nella tab “Risorse” per quella wbs del progetto
-	Richiesta di intervento: verrà inserita una riga nella tab “Risorse” per quella wbs del progetto ed automaticamente verrà generata la richiesta intervento
-	Intervento pianificato: verrà inserita una riga nella tab “Risorse” per quella wbs del progetto ed automaticamente verrà generato l’intervento pianificato
-	Intervento: verrà inserita una riga nella tab “Risorse” per quella wbs del progetto, verrà generato l’intervento pianificato e di conseguenza l’intervento effettivo

In caso di altri documenti già presenti per la giornata, verrà chiesto se sovrapporre l’appuntamento. 

Se presenti più appuntamenti nella stessa giornata e non tutti possono essere visualizzati, verrà mostrata una freccia che aprirà la visualizzazione in dettaglio della giornata.
 
 
Gli appuntamenti mostrano 3 informazioni pricipali: 
-	orario di inizio fine – descrizione tipo documento 
-	cliente
-	wbs progetto
puntando con il mouse sopra l’appuntamento verrà mostrato una tooltip con maggiori dettagli.
Con doppio click è possibile aprire il documento interessato
 
Nel calendario è disponibile anche la procedura drag&drop, per cui trascinando un appuntamento da una giornata all’altra, oppure da una risorsa all’altra, si aggiorneranno in automatico nei relativi documenti. 
Questa operazione non è ammessa negli interventi con stato diverso da inserito, e nelle attività fatturate. 

**Calendario per progetto**: sotto la struttura del progetto, è presente un expander con un piccolo calendario dedicato per il solo progetto, che quindi mostra gli appuntamenti per progetto e non per risorsa. 