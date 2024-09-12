---
title: Visualizzazione Bilancio
sidebar_position: 8
---

Da questa form è possibile ottenere una visualizzazione dei dati a video che corrisponde, grossomodo, al report del bilancio di verifica, potendo tuttavia usufruire di svariate possibilità di filtro, raggruppamento dei dati e opzioni ulteriori.

AREA DI FILTRO:

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image01.png)

permette di filtrare i dati contabili da elaborare inserendo un range di **date di registrazione** contabile, un range (sottoinsieme) di conti o sottoconti, un tipo conto, una causale contabile (**Template**) una divisione specifica (utile se ve ne sono più di una attive) una divisa estera (**Valuta**).

**Converti anche le altre somme in divisa**: attivando questo flag, in concomitanza con la valorizzazione del precedente filtro Valuta (il quale estrae i movimenti espressi in una particolare divisa), anche gli altri movimenti contabili espressi in Euro o in altre divise saranno convertiti nella divisa selezionata con il cambio della data di registrazione.

PARAMETRI: (aprire l'expander)

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image02.png)

Poiché la griglia dei risultati presenta anche il campo **Livello**, che rappresenta l'ordine gerarchico del conto/sottoconto rispettivo nel piano dei conti (dove 99 è l'ultimo livello inferiore di massimo dettaglio possibile e 0 è il nodo radice, generalmente contenente il totale) è presente un filtro sui livelli da visualizzare:

**Tutti**: mostra tutti i livelli;

**Mostra i totali per livello X... **: inserendo il livello desiderato (esempio 98) nell'apposito campo adiacente **Livello**, i risultati saranno raggruppati per conto mastro (che nel piano dei conti è il livello immediatamente superiore al 99, definito ai fini della presente elaborazione come massimo dettaglio possibile dei sottoconti nel piano dei conti);

**Mostra i totali per livello X...** **con subtotali:** rispetto al tipo di raggruppamento precedente mostrerà anche i subtotali dei possibili raggruppamenti gerarchicamente inferiori.

**Mostra totali solo per sottoconti**: i valori saranno visualizzati solo per i livelli contenenti sottoconti (i livelli gerarchicamente superiori non saranno visualizzati).

**Escludere le righe a zero**: non saranno visualizzati i conti / sottoconti non movimentati.

**Aggiungere (off/on)**: il flag attiva o disattiva una particolare modalità di visualizzazione che, in caso di modifica del range di date di registrazione ed aggiornamento della videata premendo nuovamente il tasto Ricerca nella ribbon bar, va ad aggiungere il nuovo risultato (accodandolo nella griglia del risultato) a quello precedentemente visualizzato permettendo, ad esempio, di effettuare dei confronti di valori tra periodi diversi. Per ragioni di gestibilità e chiarezza del risultato si consiglia di utilizzare questa modalità solamente in abbinamento con il filtro sui conti / sottoconti settato in modo da restituire un set limitato di dati.

GRIGLIA DEL RISULTATO:

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image03.png)

In questa griglia sono esposti i conti / sottoconti secondo i parametri di filtro e raggruppamento definiti nella parte superiore della form.

Vengono riportati il codice e descrizione sia del **gruppo** (si veda la struttura del **[piano dei conti](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)**) sia del conto / sottoconto ed il codice del **livello** definito specificamente per la presente elaborazione e sopra descritto.

**Finale**: questo campo indica (con un flag) se il conto e/o il gruppo sia di livello gerarchicamente superiore rispetto a tutti gli altri del suo ramo (della struttura del piano dei conti). Ciò è utile perché, in caso di organizzazione non ottimale o non perfettamente omogenea della struttura del piano dei conti, il codice visualizzato nel campo Livello potrebbe non essere realmente quello gerarchicamente superiore e pertanto potrebbe non essere possibile filtrare correttamente (ed ottenere totali corretti).

Quindi nella riga filtro della griglia è possibile scegliere tutti i conti con flag Finale attivo assicurandosi così di estrarre tutti i livelli superiori.

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image04.png)

NOTE:

Nelle colonne don i dati numerici sono utilizzate le seguenti abbreviazioni:

VdS = Valuta della società (inteso come divisa della società in uso, quella in cui è denominata la contabilità che stiamo tenendo, nel caso si una azienda italiana è l'Euro).

VS = Valuta scelta (divisa) nel filtro iniziale.

Euroam = Euroamount: controvalore in Euro di una operazione in valuta.

ATTENZIONE: è possibile visualizzare (o nascondere) ulteriori colonne rispetto al profilo standard della form facendo click con il tasto DX sulle testate delle colonne della griglia e scegliendo **Visualizza selettore colonne**.

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image05.png)

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image06.png)

SIGNIFICATO COLONNE:

Apertura Anno Dare / Avere = valore dell'ultima apertura dei conti calcolata **(A)**

Importo precedente (Dare / Avere) = importo riferito al periodo intercorrente tra l'ultima apertura conti (A) e la data di inizio periodo impostata nel filtro per date registrazione **(B)**

Bilancio precedente (Dare /Avere) = **(A) + (B)**

Dare / Avere nel periodo = importo riferito al periodo inserito nel filtro per date registrazione **(C)**

Totale Dare / Avere = **(A) + (B) + (C)**

Saldo finale Dare /Avere = è il saldo netto dei valori totale dare /avere espressi dal punto precedente.

Colonna **Filtro**: è un dato "tecnico" che serve, nel caso di esportazione dati della griglia in excel (o trasferimento con copia-incolla), per gestire correttamente la successiva creazione, su excel, di pivot table (deve quindi essere portato su excel anche questo dato).

TOTALI:

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image07.png)

**Totale righe selezionate**: è possibile selezionare uno o più (tenendo premuto il tasto Ctrl) conti / sottoconti. in questo caso gli importi vengono totalizzati in questa riga.

ATTENZIONE: Nel caso in cui vengano selezionati ad esempio dei sottoconti e anche i relativi conti mastro , oppure dei gruppi di livello gerarchico superiore (che dunque già comprendono il valore dei sottoconti di dettaglio), **l'importo visualizzato** in questa riga sarà riportato **in rosso** per evidenziare che il totale sarà falsato da una selezione non omogenea e coerente.

**Totale conti dettagliati**: i totali visualizzati in questa riga sono solamente quelli riferiti a sottoconti di dettaglio di livello gerarchico più basso.

**Totale tabella**: i totali visualizzati in questa riga sono quelli riferiti a tutte le righe visualizzate nella griglia dei risultati, quindi nel caso siano restituiti (in base ai filtri impostati) sia sottoconti di dettaglio, sia conti o livelli superiori, il totale sarà la somma dei sottoconti e dei livelli superiori (andando a moltiplicare i valori rispetto al livello di dettaglio e rappresentando in questo caso un dato poco significativo).






