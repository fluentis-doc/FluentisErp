---
title: Crea Chiusure infrannuali
sidebar_position: 3
---

La procedura permettere di creare nuove simulazioni di bilancio infrannuale.

L'origine dei dati di partenza è sempre la Contabilità generale al momento della creazione della chiusura stessa: il programma riprende i saldi dei vari sottoconti, secondo i parametri di creazione della chiusura impostati nella presente form, per consentire poi l'aggiunta extracontabile di tutte le operazioni di ratei, risconti, ammortamenti e registrazioni manuali per arrivare ad una simulazione di bilancio comprensiva degli assestamenti e rettifiche necessarie. L'operazione non ha alcun effetto sui dati di contabilità generale ai fini della chiusura contabile di fine anno: il modulo chiusure infrannuali è infatti gestito in tabelle del database completamente separate dalla contabilità generale.


## Tab *Generale*

Flag **Seleziona dati per divisione**: se impostato, il campo successivo di divisione diventa un filtro con il quale prelevare dalla contabilità i soli dati della divisione impostata.

**Escludi causale**: nel caso in cui si stiano prelevando i dati di un intero anno contabile già chiuso, consente di escludere le registrazioni di chiusura conti e così ottenere i dati di bilancio dell'esercizio.

### Sezione **Ripresa valori patrimoniali**

Il flag di **Ripresa dei movimenti di natura patrimoniale**, presente di default, abilita la sezione sottostante di filtro. Con questa opzione, ERP andrà ad inserire nella chiusura infrannuale anche i saldi dei sottoconti collegati ai tipi conto che presentano il flag **Patrimoniale attivo** o **Patrimoniale passivo.**

La sezione dei filtri per data registrazione e data competenza sottostanti consente di definire i range di date che saranno utilizzati per recuperare i dati patrimoniali dalle registrazioni del periodo impostato. 

:::tip NOTA
In particolare, nel caso in cui non sia ancora stata registrata in contabilità la chiusura e riapertura dei conti, la data di inizio deve essere retrodatata alla data di ultima apertura conti rilevata in contabilità, in modo da avere un dato patrimoniale corretto. 

Da considerare che, in questo caso, ci sarà una differenza tra saldo patrimoniale e saldo economico dell'esercizio in corso: tale differenza, visualizzato come sbilancio della registrazione di chiusura infrannuale, corrisponderà all'utile/perdita dell'esercizio precedente non ancora rilevato nella chiusura/riapertura dei conti di contabilità generale.
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

**Descrizione chiusura**: è la descrizione che apparirà in tutte le maschere del modulo Chiusure infrannuali, in quello del Bilancio e del Budget. Si consiglia di descrivere in modo chiaro i range di date impostati in modo da capire il periodo simulato, in quanto i filtri impostati nella maschera non saranno più visibili nelle fasi successive.

**Anno contabile**: (In alto nella form) per associare l'anno contabile di riferimento, necessario al fine riprendere dai parametri di contabilità generale i sottoconti e le impostazioni standard (la chiusura potrebbe coinvolgere più esercizi, ci deve essere un anno ‘prioritario' in sostanza).

**Competenza economica dal/al**: questo range di date è obbligatorio per poter procedere alla creazione della chiusura infrannuale. Indica il periodo  di competenza economica che interessa: sarà quindi preso come riferimento per il calcolo delle scritture di rettifica/integrazione e per il calcolo della ripresa ammortamenti del periodo. Per esemplificare, se sono state riprese le registrazioni del primo semestre dell'esercizio X e si è inserito lo stesso semestre come range di date competenza economica, con le procedure di rettifica il programma verificherà se sono presenti righe di contabilità con range di competenza al di fuori di questo semestre al fine di rilevarne il risconto relativo.

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

**Scritture di integrazione in automatico**: impostando il flag si attiverà la sezione delle integrazioni automatiche, è necessario impostare la causale che andrà a rilevare l'operazione **e della data di inizio**. 

Anche qui, per integrare anche i movimenti di cdc/cdp, sarà necessario che la causale ne preveda la gestione. 

L'impostazione di default del del calendario solare è quello che si consiglia di utilizzare. 

Con questo flag il programma verificherà, **a partire dalla *Data di inizio competenza per le scritture di integrazione***, le righe di costo/ricavo presenti in contabilità e non inserite nella chiusura (cioè registrazioni al di fuori dei range di date registrazione/competenza impostate), per creare i ratei dei giorni all'interno del range di date competenza impostate per la chiusura. 

:::tip Nota
I sottoconti di rateo da utilizzare saranno quelli inseriti nel piano dei conti in corrispondenza del singolo sottoconto di costo/ricavo oppure il sottoconto generico inserito nei parametri di contabilità dell'anno della chiusura infrannuale stessa. 
:::

Questo flag crea automaticamente quello che l'utente può gestire separatamente anche dopo l'elaborazione dei saldi di chiusura nella procedura dedicata *Scritture di integrazione*.

:::danger IMPORTANTE
Merita un'attenzione particolare la **data di inizio competenza** da impostare. 

Normalmente questa data sarà impostata uguale alla data dell'ultima apertura conti rilevata in contabilità. 

Esempio: se stiamo creando la chiusura del primo trimestre dell'esercizio, il range di date per la sezione economica sarà tipicamente 01/01/anno X – 31/03/anno X e se è presente la riapertura conti dell'esercizio precedente allora all'interno di questo range ci sarà direttamente il giroconto a costo/ricavo dei ratei rilevati nel bilancio 'anno X-1' e quindi la data inizio per le integrazioni sarà da impostare come 01/01/anno X in modo che il software verifichi se dopo del 31/03 ci sono righe con competenza nel trimestre precedente. 

**Se la riapertura NON è presente**, invece, sarà necessario impostare la data inizio come 01/01/**anno X-1** **includere anche, per competenza, i movimenti che sarebbero stati oggetto di riapertura (ratei e risconti) dall'anno precedente.** 
:::

## Parametri

La scheda ‘Parametri' consente di impostare, per determinati tipi conto oppure per singolo conto/sottoconto, il tipo di saldo da calcolare. Nel dettaglio:

**Generale**: è la situazione normale di default. Con questa opzione l'ERP calcolerà un saldo dare o avere e un saldo generale.

**Dare/avere:** con questa opzione, il programma calcolerà sia un totale dei movimenti dare, un totale avere e il saldo finale relativo.

Il riferimento è alle varie opzioni dei modelli di riclassificazioni presenti nel modulo *Reporting > Riclassificazioni*: in questi è possibile impostare solo il valore ‘Dare' oppure ‘Avere' oppure generale. 

Ad esempio, rilevare in un riclassificato un costo (cioè il totale dei movimenti dare del sottoconto X) e le sue rettifiche (cioè il totale dei movimenti avere del sottoconto X) in due punti separati del riclassificato può dare un'informazione in più del semplice saldo algebrico ‘dare' - 'avere' generale.