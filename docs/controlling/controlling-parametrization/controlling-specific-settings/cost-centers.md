---
title: Centri aziendali
sidebar_position: 4
---

:::tip Nota
La tabella è d'interesse sia per le società con il *Controlling* attivo che no.
In questo secondo caso, pur se sono visibili tutte le opzioni spiegate in seguito, sarà sufficiente assegnare un *Codice* e una *Descrizione* per ogni Centro aziendale ed attivare o meno i flag *Valorizzabile* e *Visibile in produzione* per definire i livelli che possono essere valorizzati in contabilità e che resi visibili nelle tabelle di produzione (*macchine* e *gruppi manodopera*)
:::

L’inserimento dei dati avviene nei tab sottostanti dopo aver premuto il pulsante di creazione di un primo livello (*Nuovo centro di costo*) o di creazione di un livello figlio (*Nuovo legame CdC*) a quello selezionato, vediamo passo passo i singoli campi

## PRIMO TAB - Impostazioni generali

### Campi obbligatori della colonna di sinistra 
- DIMENSIONE di appartenenza
- CODICE ALFANUMERICO, possibili 15 caratteri
- DESCRIZIONE DEL CENTRO
- CATEGORIA DEL CENTRO

### Campi non obbligatori della colonna di sinistra
- SECONDA DESCRIZIONE 
- TIPOLOGIA DEL CENTRO (diretto/indiretto) scelta che non ha una qualche influenza a livello di elaborazioni

### Campi non obbligatori della colonna di destra 
- DATA INIZIO/DATA FINE VALIDITA’ impostando queste date andremo a verificare se il centro di costo è valido alla data di registrazione (o alla data del documento), cioè il menù a tendina dei centri mostrerà solo quelli validi alla data (o con range di validità vuoto)
- FLAG VALORIZZABILE: indica se il centro può essere valorizzato in contabilità o nei documenti o se è un centro di struttura logica
- FLAG VISIBILE IN PRODUZIONE, questo rende visibile quel centro nelle tabelle di produzione, in particolare nelle macchine e nei gruppi manodopera;
- CENTRO DI RESPONSABILITA’. È una tabella libera dove indico chi è il responsabile di quel centro, non ha influenza nelle logiche di gestione della contabilità analitica, ma può essere utilizzato per segnalare tramite supervisor eventuali sforamenti di budget

## SECONDO TAB - Impostazioni di controllo
- CONTI DA RIASSEGNARE: solo un centro può avere questo flag impostato (nella stessa società). Andiamo ad utilizzare questo flag all’interno dei centri di comodo, in particolare in un centro generico “VALORI CON ATTRIBUZIONE NEL CONTROLLING”. 
Questo flag identifica una specie di centro di default dove la contabilità generale assegna quei costi che non sa attribuire in modo preciso. Potrebbero altresì esserci logiche di cui la contabilità non ha elementi certi per valorizzare i dati al momento della registrazione, o che richiederebbero troppo tempo per essere gestiti.

:::tip Nota
Esempio: il costo degli affitti potrebbe essere gestibile già nel piano dei conti con delle percentuali fisse, ma passando per questo centro generico abbiamo la possibilità di gestire un *cost driver* nel quale impostare magari i metri quadri dei vari centri e da qui derivare la mia percentuale. Variando il driver, andremo a valorizzare (solo nel controlling) la nuova percentuale senza dover intervenire sullo storico già movimentato in contabilità.
Oppure il consumo in kwh delle varie macchine, dati che la contabilità non sa dove reperire, per i quali quindi torna comodo parcheggiare i valori in questo centro generico e poi a fine periodo, una volta che so quanto è stato consumato, andrò a valorizzare la logica solo nel controlling demandandola ad un *cost driver*.
:::

- CENTRO DEFAULT PATRIMONIALE: Identifica un centro generico al quale assegnare tutti i movimenti patrimoniali della contabilità. Normalmente tutta la gestione dell’analitica viene legata solo all’economico, ma potrebbe essere interesse dell’azienda avere una quadratura completi di dati di bilancio nell’analitica. Il centro va di pari passo con il flag di valorizzazione del patrimoniale nel Controlling disponibile all'interno della *Divisione*.

- CENTRO DI DEFAULT PER I PROGETTI identifica quello che è il centro aziendale generico che accoglie i costi/ricavi diretti di progetto/commessa. Come abbiamo spiegato a livello di tabella *Dimensioni*, abbiamo una specifica dimensione di analisi dei valori a progetto: dato che ci deve sempre essere un centro nell’analitica, quando valorizzo un costo ed un ricavo diretto di progetto/commessa potrò utilizzare il centro generico con questo FLAG oppure dovrò valorizzare più centri commessa impostando la tabella ***Associazione centri/commesse***.
- MODELLO DI RICLASSIFICAZIONE: per i centri sui quali vogliamo calcolare una tariffa, questo campi definisce qual è il modello che riclassifica e totalizza i costi per poter calcolare l’indice di costo del centro. Nel modello selezionato ci sarà un nodo che avrà il flag ‘Numeratore per calcolo indici’, dal totale di questo nodo otterremo il numeratore dell’indice, lo spiegheremo in dettaglio in un video specifico.

- TIPO MISURAZIONE: possiamo misurare con tre metodologie
    - in dimensione fisica
    - in percentuale
    - in percentuale e grandezza fisica.

Se selezioniamo quest’ultima in modo da visualizzare tutte le opzioni disponibili, avremo

- FILTRO VALORI DENOMINATORE: con questo campo, per calcoli a percentuale, andiamo a definire con che logica calcolare il denominatore per il calcolo indici percentuale. Le opzioni disponibili sono
    - 02 Totale dare
    - 03 Totale avere
    - 04 Margini
    - 05 Su sottoconto selezionato
    - 06 Su conto selezionato
    - 07 Ad esclusione dei sottoconti selezionati
    - 08 Ad esclusione dei conti selezionati

Selezionando il codice 02 Totale dare, ad esempio, andremo a sommare solo il dare dei centri indicati nella griglia in basso a sinistra, con il codice 03 l’avere, 04 i margini cioè la differenza dare-avere, le opzioni successive abiliteranno anche la griglia di destra per filtrare in modo opportuno i dati dei centri.

- UNITA' DI MISURA 1, UNITA' DI MISURA 2, PARTE FISSA e PARTE VARIABILE. Sono 4 campi legati al tipo di calcolo a quantità, dove andare a definire qual è l’unità di misura da ricercare per ottenere il totale della quantità da mettere a denominatore dell’indice fisico: possiamo quindi indicare due unità di misura (UM1 e UM2) per il calcolo di un doppio indice, mentre è chiaramente la stessa unità di misura che si usa per la quota fissa e la quota variabile del primo o secondo indice.

:::tip Nota
Il calcolo su grandezza fisica, tipico dei centri produttivi, consentirà di ottenere le tariffe di costo dei centri come € per ora macchina o ore uomo, al fine di poter calcolare e verificare i costi standard utilizzati nel Costo prodotto per creare le stime di costo in distinta base piuttosto che un preventivo.
:::

- RIFERIMENTO DI MISURAZIONE DEL CENTRO: possiamo indicare quali campi dello storico movimenti fisici andare a filtrare per identificare le quantità del nostro centro: potrà essere in particolare il centro di origine, il centro di destinazione, oppure in via prioritaria la destinazione altrimenti l’origine.

## TERZO TAB - Localizzazioni
In caso di installazione con localizzazioni geografiche differenziate, è possibile sfruttare la sezione Localizzazioni al fine di gestire descrizioni in lingua alternativa, che sarà possibile sfruttare per esempio nella stampa dell’Analisi centri di costo.
