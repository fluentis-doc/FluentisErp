---
title: Crea Chiusure infrannuali
sidebar_position: 3
---

La procedura permettere di creare nuove simulazioni di bilancio infrannuale.

L'origine dei dati di partenza è sempre la Contabilità generale al momento della creazione della chiusura stessa: il programma riprende i saldi dei vari sottoconti, secondo i parametri di creazione della chiusura impostati nella presente form, per consentire poi l'aggiunta extracontabile di tutte le operazioni di ratei, risconti, ammortamenti e registrazioni manuali per arrivare ad una simulazione di bilancio comprensiva degli assestamenti e rettifiche necessarie. L'operazione non ha alcun effetto sui dati di contabilità generale ai fini della chiusura contabile di fine anno: il modulo chiusure infrannuali è infatti gestito in tabelle del database completamente separate dalla contabilità generale.


## Tab *Generale*

Flag **Seleziona dati per divisione**: se impostato, il campo precedente della divisione diventa un filtro con il quale prelevare dalla contabilità i soli dati della divisione impostata.

**Anno contabile**: l'anno di riferimento dei dati, serve per identificare i conti di default delle scritture di assestamento e i periodi contabili relativi.

**Escludi causale**: nel caso in cui si stiano prelevando i dati di un intero anno contabile già chiuso, consente di escludere le registrazioni di chiusura conti e così ottenere i dati di bilancio dell'esercizio.

**Area**: il campo è visibile solo in società che gestiscono lo Controlling, si selezionerà l'area dei Consuntivi da associare al set di dati in elaborazione.



### Sezione **Ripresa valori patrimoniali**

Il flag di **Ripresa dei movimenti di natura patrimoniale**, presente di default, abilita la sezione sottostante di filtro. Con questa opzione, ERP andrà ad inserire nella chiusura infrannuale anche i saldi dei sottoconti collegati ai tipi conto che presentano il flag **Patrimoniale attivo** o **Patrimoniale passivo.**

La sezione dei filtri per data registrazione e data competenza sottostanti consente di definire i range di date che saranno utilizzati per recuperare i dati patrimoniali dalle registrazioni del periodo impostato. 

:::tip NOTA
In particolare, nel caso in cui non sia ancora stata registrata in contabilità la chiusura e riapertura dei conti, la data di inizio deve essere retrodatata alla data di ultima apertura conti rilevata in contabilità, in modo da avere un dato patrimoniale corretto. 

Da considerare che, in questo caso, ci sarà una differenza tra saldo patrimoniale e saldo economico dell'esercizio in corso, corrispondente all'utile/perdita dell'esercizio precedente non ancora rilevato nella chiusura/riapertura dei conti di contabilità generale: al lancio della creazione, Fluentis chiederà se si vuole valorizzare tale differenza sui conti dell'utile o perdita predefiniti nei parametri di contabilità, ottenendo una registrazione bilanciata, mentre se questa opzione non viene utilizzata ci sarà uno sbilancio nella registrazione e quindi, per il buon fine dell'operazione di chiusura stessa, la causale dovrà consentire il salvataggio di registrazioni sbilanciate.
:::


Nel caso in cui la chiusura non preveda la ripresa patrimoniale, nuovamente la registrazione di chiusura infrannuale (della sola sezione economica) sbilancerà per l'utile/perdita del periodo.

### Sezione **Ripresa valori economici**

Il flag di **Ripresa dei movimenti di natura economica**, presente di default, abilita la sezione sottostante di filtro. Con questa opzione, vengono inseriti nella chiusura infrannuale i saldi dei sottoconti collegati ai tipi conto che presentano il flag **Economico costi** o **Economico ricavi**.

La sezione dei filtri per data registrazione, competenza e documento sottostanti consente di definire i range di date che saranno utilizzati per recuperare i dati dalle registrazioni del periodo impostato.

:::tip NOTA
Il range di date documento, non proposto di default, normalmente non viene impostato: non tutte le registrazioni contabili, infatti, presentano le date documento in testata (solitamente solo le registrazioni di fatture di acquisto/vendita).
:::


Nel caso in cui la chiusura non preveda la ripresa economica, la registrazione di chiusura infrannuale (della sola sezione patrimoniale) sbilancerà per l'utile/perdita del periodo.

### Sezione **Dati chiusura conti**

La sezione presenta gli elementi identificativi che saranno attribuiti a questa simulazione di bilancio.

**Causale chiusura conti**: è la causale da utilizzare per creare la registrazione di ripresa saldi. Si ricorda che tale causale deve avere i flag cdc/cdp/progetti affinchè questi elementi siano considerati nella Chiusura infrannuale stessa.

**Data chiusura**: è la data di creazione di questa simulazione, che sarà utilizzata come data della registrazione extracontabile di chiusura stessa e per le altre registrazioni. Non ha nessuna valenza particolare.

**Numero chiusura**: è il numero progressivo della chiusura, proposto automaticamente dal sistema.

**Descrizione chiusura**: è la descrizione che apparirà in tutte le maschere del modulo Chiusure infrannuali, in quello del Bilancio e del Budget. Si consiglia di descrivere in modo chiaro i range di date impostati in modo da capire il periodo simulato quando si andrà a selezionare la chiusura nelle varie procedure dell'area Controlling.

**Competenza economica dal/al**: questo range di date è obbligatorio per poter procedere alla creazione della chiusura infrannuale. Indica il periodo  di competenza economica che interessa: sarà quindi preso come riferimento per il calcolo delle scritture di rettifica/integrazione, per il calcolo della ripresa ammortamenti del periodo e in generale le varie procedure a valle. Per esemplificare, se sono state riprese le registrazioni del primo semestre dell'esercizio X e si è inserito lo stesso semestre come range di date competenza economica, con le procedure di rettifica il programma verificherà se sono presenti righe di contabilità con range di competenza al di fuori di questo semestre al fine di rilevarne il risconto relativo.

### Sezione **Opzioni chiusura**


**Chiusura per commessa**: con questo flag, il programma andrà a creare una registrazione di chiusura infrannuale per ogni commessa di vendita che è stata valorizzata nelle registrazioni contabili del periodo di filtro impostato. Si ricorda che la causale di chiusura infrannuale deve prevedere la gestione delle commesse (progetti) per gestirne i dati.

**Considera registrazioni provvisorie**: con questo flag, la ripresa dei dati dalla contabilità andrà a considerare anche le registrazioni contabili con stato 'provvisorie'.

### Valori calcolati 

questa sezione propone i totali patrimoniali/economici calcolati dalla prima registrazione di chiusura effettuata. 

(con flag **Chiusura per commessa**  questa sezione visualizzerà solamente i dati dalla prima commessa individuata nel periodo).

### Rettifiche e integrazioni

La sezione consente di gestire automaticamente, in coda alla registrazione di ripresa dati infrannuale, le relative registrazioni di rettifica e integrazione.

:::note Nota
Questo tipo di registrazioni di assestamento viene effettuata in automatico solo relativamente ai movimenti dei sottoconti economici legati ad un tipo conto che presenta il flag *Servizio* impostato. 
:::

il riferimento delle rettifiche/integrazioni è al **range di date competenza** inserite nei movimenti di prima nota (e nei centri di costo/profitto per la parte di analitica).

**Scritture di rettifica in automatico**: impostando il flag si attiverà la sezione delle rettifiche automatiche, è necessario impostare la causale che andrà a rilevare l'operazione. Anche qui, per rettificare anche i movimenti di cdc/cdp, sarà necessario che la causale ne preveda la gestione. 

Le impostazioni consigliate prevedono l'opzione **raggruppa per registrazione** e soprattutto l'uso del **calendario solare**. 

:::tip Nota
I sottoconti di risconto da utilizzare saranno quelli inseriti nel piano dei conti in corrispondenza del singolo sottoconto di costo/ricavo oppure il sottoconto generico inserito nei parametri di contabilità dell'anno della chiusura infrannuale stessa. 
:::

Questo flag crea automaticamente quello che l'utente può gestire separatamente anche dopo l'elaborazione dei saldi di chiusura nella procedura dedicata *Scritture di rettifica* sempre riferita al menu delle chiusure infrannuali (*procedure*).

**Scritture di integrazione in automatico**: impostando il flag si attiverà la sezione delle integrazioni automatiche, è necessario impostare la causale che andrà a rilevare l'operazione **e della data di inizio competenza**. 

Anche qui, per integrare anche i movimenti di cdc/cdp, sarà necessario che la causale ne preveda la gestione. 

L'impostazione di default del calendario solare è quello che si consiglia di utilizzare. 

Con questo flag il programma verificherà, **a partire dalla *Data di inizio competenza per le scritture di integrazione***, le righe di costo/ricavo presenti in contabilità e non inserite nella chiusura (cioè registrazioni al di fuori dei range di date registrazione/competenza impostate), per creare i ratei dei giorni all'interno del range di date competenza impostate per la chiusura. 

:::tip Nota
I sottoconti di rateo da utilizzare saranno quelli inseriti nel piano dei conti in corrispondenza del singolo sottoconto di costo/ricavo oppure il sottoconto generico inserito nei parametri di contabilità dell'anno della chiusura infrannuale stessa.
Se il costo/ricavo ha una competenza economica **totalmente inserito nel range d'interesse della chiusura* ed è in una registrazione contabile con il sottoconto di testata valorizzato, allora Fluentis presuppone si sia in una registrazione di una fattura da ricevere/emettere ed utilizzerà questi sottoconti prelevandoli dall'anagrafica cliente/fornitore o dai parametri di contabilità dell'anno selezionato, al posto dei sottoconto di rateo.
:::

Questo flag crea automaticamente quello che l'utente può gestire separatamente anche dopo l'elaborazione dei saldi di chiusura nella procedura dedicata *Scritture di integrazione*.

:::danger IMPORTANTE
Merita un'attenzione particolare la **data di inizio competenza** da impostare. 

Normalmente questa data sarà impostata uguale alla data dell'ultima apertura conti rilevata in contabilità. 

Esempio: se stiamo creando la chiusura del primo trimestre dell'esercizio, il range di date per la sezione economica sarà tipicamente 01/01/anno X – 31/03/anno X e se è presente la riapertura conti dell'esercizio precedente allora all'interno di questo range ci sarà direttamente il giroconto a costo/ricavo dei ratei rilevati nel bilancio 'anno X-1' e quindi la data inizio per le integrazioni sarà da impostare come 01/01/anno X in modo che il software verifichi se dopo del 31/03 ci sono righe con competenza nel trimestre precedente. 

**Se la riapertura NON è presente**, invece, sarà necessario impostare la data inizio come 01/01/**anno X-1** **includere anche, per competenza, i movimenti che sarebbero stati oggetto di riapertura (ratei e risconti) dall'anno precedente.** 
:::

:::danger ATTENZIONE
Il modulo controlling ragiona in modo più flessibile, in alcune situazioni, rispetto al modulo amministrativo.
Infatti è in grado di rettificare automaticamente qualsiasi costo ricavo (con tipo conto compatibile) sia per quote di competenza economica nel passato che nel futuro, in quanto procede a mensilizzare i costi/ricavi di competenza e quindi toglie automaticamente i valori anteriori e posteriori al range della chiusura. Ad esempio se il costo registrato nell'anno X ha competenza parzialmente (o totalmente) nell'anno X-1, eseguendo l'elaborazione periodi sui dati consuntivi della chiusura dell'anno X andrà comunque a considerare solo il periodo di competenza richiesto.

Occorre porre particolare attenzione alla **gestione degli assestamenti eseguiti nel modulo amministrativo**.
**Si raccomanda di eseguire il calcolo e contabilizzazione assestamenti e la chiusura e riapertura conti con riapertura assestamento tramite le procedure automatiche evitando di eseguire scritture manualmente**.

La procedura automatica impone, infatti, alle scritture di riapertura degli assestamenti la data pari alla scrittura originaria oggetto di rettifica e la competenza economica di tale scrittura pari all'anno X-1. In tale modo si evita infatti che elaborando le chiusure di periodo dell'anno X il software vada a calcolare ulteriori rettifiche, avendosi già nel saldo dell'anno X (o periodo infrannuale dell'anno X) il risultato corretto di competenza per effetto della corretta riapertura dell'assestamento precedente.  
:::

### Ripresa ammortamento cespiti

La sezione consente di gestire automaticamente, in coda alla registrazione di ripresa dati infrannuale, la rilevazione degli ammortamenti civilistici/fiscali del periodo di competenza: si utilizza quindi la stessa logica della procedura *Ammortamento cespiti* del modulo Cespiti, ma per i soli giorni di competenza economica d'interesse nella chiusura.
Una volta abilitato il calcolo si dovrà impostare la causale contabile da utilizzare e scegliere se creare una *singola registrazione* cumulativa o dettagliata cespite per cespite.
Il flag 'Operazioni incrementali', per il quale si rimanda al modulo cespiti, consente di filtrare il tipo di categorie cespiti da gestire.
Questo flag crea automaticamente quello che l'utente può gestire separatamente anche dopo l'elaborazione dei saldi di chiusura nella procedura dedicata *Ripresa ammortamento cespiti*.

:::tip Nota
Se in azienda fossero presenti sia categorie cespiti incrementali che non, si suggerisce di utilizzare la procedura dedicata *Ripresa ammortamento cespiti*, in modo da poter lanciare entrambe le combinazioni in sequenza.
:::


### Contabilizzazione rimanenze

La sezione consente di gestire automaticamente, in coda alla registrazione di ripresa dati infrannuale, la rilevazione delle rimanenze iniziali/finali del periodo di competenza.
Una volta abilitata la gestione, andremo a gestire il range di date da utilizzare, il tipo di giacenza da considerare (*Positiva/Negativa*), il tipo di calcolo costo (*Costo medio, Costo ultimo, FIFO a Scatti Annuali, LIFO a Scatti Annuali, Area Gestionale, Da costo effettivo lotti*) e la causale contabile da utilizzare per le registrazioni da creare.
La presenza o meno del flag Controlling andrà a gestire le operazioni in due modi differenti:
- Se il flag *non è presente*, **FluentisERP** creerà le scritture delle rimanenze iniziali e quelle finali alle date di inizio e fine periodo della Chiusura infrannuale, e le inserirà in coda alle altre scritture di assestamento della chiusura stessa.
- Se il flag *è presente*, **FluentisERP** creerà le registrazioni delle rimanenze iniziali e finali di ogni singolo mese all'interno del range di date di competenza della Chiusura infrannuale, e le inserirà come Scritture extracontabili dell'Area associata alla chiusura stessa (quindi non saranno scritture della chiusura, ma scritture valide solo per il Controlling)

:::tip Nota
L'elaborazione effettua un test sulla presenza o meno di questo tipo di scritture e quindi, se le trova già presenti, chiede se le si vuole eliminare e ricreare o se le si vuole aggiungere (come nel caso in cui si dovessero selezionare solo alcuni magazzini e non tutti, attraverso la tendina disponibile). Nel caso in cui si volessero creare sia le registrazioni di Area per il controlling che quelle di assestamento nella Chiusura, è necessario lanciare la procedura *prima* con il flag Controlling attivo e *poi* con il flag disattivato.
:::


## Tab *Parametri*

La scheda ‘Parametri' consente di impostare, per determinati tipi conto oppure per singolo conto/sottoconto, il tipo di saldo da calcolare. Nel dettaglio:

**Generale**: è la situazione normale di default. Con questa opzione l'ERP calcolerà un saldo dare o avere e un saldo generale.

**Dare/avere:** con questa opzione, il programma calcolerà sia un totale dei movimenti dare, un totale avere e il saldo finale relativo.

Il riferimento è alle varie opzioni dei modelli di riclassificazioni presenti nel modulo *Reporting > Riclassificazioni*: in questi è possibile impostare solo il valore ‘Dare' oppure ‘Avere' oppure generale. 

Ad esempio, rilevare in un riclassificato un costo (cioè il totale dei movimenti dare del sottoconto X) e le sue rettifiche (cioè il totale dei movimenti avere del sottoconto X) in due punti separati del riclassificato può dare un'informazione in più del semplice saldo algebrico ‘dare' - 'avere' generale.