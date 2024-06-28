---
title: Crea Chiusure infrannuali
sidebar_position: 3
---

La procedura di creazione 'Chiusure infrannuali' è stata disegnata per permettere all'utente di creare nuove simulazioni di bilancio infrannuale.

L'origine dei dati di partenza è sempre la situazione della Contabilità generale al momento della creazione della chiusura stessa: il programma va in sostanza a riprendere i saldi dei vari sottoconti, secondo i parametri di creazione della chiusura, per consentire poi l'aggiunta extracontabile di tutte le operazioni di ratei, risconti, ammortamenti e registrazioni manuali per arrivare ad una simulazione di bilancio precisa. L'operazione non ha alcun effetto contabile di nessun tipo: il modulo chiusure infrannuali è infatti gestito in tabelle del database completamente separate dalla contabilità generale.

Vediamo i vari elementi presenti nella maschera.

## Generale

Flag **Seleziona dati per divisione**: se impostato, il campo successivo di divisione diventa un filtro con il quale prelevare dalla contabilità i soli dati della divisione impostata.

**Escludi causale**: nel caso in cui si stiano prelevando i dati di un intero anno contabile già chiuso, consente di escludere le registrazioni di chiusura conti e così ottenere i dati di bilancio dell'esercizio.

**A** - Sezione **Ripresa valori patrimoniali**

Il flag di **Ripresa dei valori di natura patrimoniale**, presente di default, abilita la sezione sottostante di filtro. Con questa opzione, ERP andrà ad inserire nella chiusura infrannuale anche i saldi dei sottoconti collegati ai tipi conto che presentano il flag **Patrimoniale attivo** o **Patrimoniale passivo.**

La sezione dei filtri per data registrazione e data competenza sottostanti consente di definire i range di date che saranno utilizzati per recuperare i dati patrimoniali dalle registrazioni del periodo impostato (il riferimento è agli omonimi campi di testata delle registrazioni, non ai range di competenze economiche inseriti nelle righe di contabilità, vedi file CH_1.4_Raffronto_Periodo_Budget.doc). In particolare, nel caso in cui non sia ancora stata registrata in contabilità la chiusura e riapertura dei conti, la data di inizio può essere retrodatata alla data di ultima apertura conti rilevata in contabilità, in modo da avere un dato patrimoniale corretto. Da considerare che, in questo caso, ci sarà una differenza tra saldo patrimoniale e saldo economico dell'esercizio in corso: tale differenza, visualizzato come sbilancio della registrazione di chiusura infrannuale, corrisponderà all'utile/perdita dell'esercizio precedente non ancora rilevato nella chiusura/riapertura dei conti di contabilità generale.

Nel caso in cui la chiusura non preveda la ripresa patrimoniale, nuovamente la registrazione di chiusura infrannuale (della sola sezione economica) sbilancerà per l'utile/perdita del periodo.

**B - **Sezione **Ripresa valori economici**

Il flag di **Ripresa dei valori di natura economica**, presente di default, abilita la sezione sottostante di filtro. Con questa opzione, ERP andrà ad inserire nella chiusura infrannuale anche i saldi dei sottoconti collegati ai tipi conto che presentano il flag **Economico costi** o **Economico ricavi**.

La sezione dei filtri per data registrazione, competenza e documento sottostanti consente di definire i range di date che saranno utilizzati per recuperare i dati patrimoniali dalle registrazioni del periodo impostato (il riferimento è agli omonimi campi di testata delle registrazioni, non ai range di competenze economiche inseriti nelle righe di contabilità, vedi file CH_1.4_Raffronto_Periodo_Budget.doc). In particolare, il range di date documento, non proposto di default, normalmente non viene impostato: non tutte le registrazioni contabili, infatti, presentano le date documento in testata (solitamente solo le registrazioni di fatture di acquisto/vendita).

Nel caso in cui la chiusura non preveda la ripresa economica, la registrazione di chiusura infrannuale (della sola sezione patrimoniale) sbilancerà per l'utile/perdita del periodo.

**C** – Sezione **Dati chiusura conti**

La sezione presenta gli elementi identificativi di questa simulazione di bilancio.

**Causale chiusura conti**: è la causale da utilizzare per creare la registrazione di ripresa saldi. Si ricorda che tale causale deve avere i flag cdc/cdp/job-orders affinchè questi elementi siano considerati nella Chiusura infrannuale stessa.

**Data chiusura**: è la data di creazione di questa simulazione, che sarà utilizzata come data della registrazione extracontabile di chiusura stessa e per le altre registrazioni. Non ha nessuna valenza particolare.

**Numero chiusura**: è il numero progressivo della chiusura, proposto automaticamente dal sistema.

**Descrizione chiusura**: è la descrizione che apparirà in tutte le maschere del modulo Chiusure infrannuali, in quello del Bilancio e del Budget. Si consiglia di descrivere in modo chiaro i range di date impostati in modo da capire il periodo simulato, in quanto i filtri impostati nella maschera non saranno più visibili nelle fasi successive.

**Parametri di contabilità rilevati dall'esercizio contabile del ...**: si tratta di associare l'anno contabile di riferimento, per riprendere dai parametri di contabilità i sottoconti e le impostazioni standard (la chiusura potrebbe coinvolgere più esercizi, ci deve essere un anno ‘prioritario' in sostanza).

**D** – Sezione **Raffronto periodo budget**

La sezione è di fondamentale importanza per il range di date competenza economica: vediamo in dettaglio il significato dei vari campi presenti.

**Periodo budget**: in questo campo si imposta il tipo di periodicità dal quale selezionare il dettaglio del periodo di competenza.

**Dettaglio periodo di competenza**: i valori evidenziati dipendono da quanto definito nel campo precedente e consentono di valorizzare il successivo range di date competenza. Se entrambi sono impostati, la chiusura infrannuale che si sta creando sarà considerata da il software come un consuntivo da poter utilizzare (per tutti i budget che presentano questo stesso range di date competenza) nell'analisi scostamenti del modulo budget, previa ‘Ripresa dati' (verificare la documentazione del modulo Budget).

**Competenza economica dal/al**: questo range di date è obbligatorio per poter procedere alla creazione della chiusura infrannuale. Indica il periodo  di competenza economica che interessa: sarà quindi preso come riferimento per il calcolo delle scritture di rettifica/integrazione e per il calcolo della ripresa ammortamenti del periodo. Per esemplificare, se sono state riprese le registrazioni del primo semestre dell'esercizio X e si è inserito lo stesso semestre come range di date competenza economica, con le procedure di rettifica il programma verificherà se sono presenti righe di contabilità con range di competenza al di fuori di questo semestre al fine di rilevarne il risconto relativo.

**E** – Sezione **Opzioni chiusura**

**Raggruppamento sottoconti**: non impostare questi flag, non sono utilizzati al momento (Il modulo Bilancio, così come il report del Bilancio infrannuale, consente di valorizzare direttamente il saldo a livello dei conti escludendo le anagrafiche, senza la necessità di alcun raggruppamento in fase di registrazione di chiusura)

**Chiusura per commessa**: con questo flag, il programma andrà a creare una registrazione di chiusura infrannuale per ogni commessa di vendita che è stata valorizzata nelle registrazioni contabili del periodo di filtro impostato. Si ricorda che la causale di chiusura infrannuale deve prevedere la gestione delle commesse per gestirne i dati.

**Considera registrazioni provvisorie**: con questo flag, la ripresa dei dati dalla contabilità andrà a considerare anche le registrazioni contabili con stato 'provvisorie'.

**Valori calcolati**: questa sezione propone i totali patrimoniali/economici calcolati dalla prima registrazione di chiusura effettuata. (il riferimento è al flag **Chiusura per commessa** che va a creare N registrazioni di chiusura, quindi questa sezione visualizzerà solamente i dati dalla prima commessa individuata nel periodo).

### Rettifiche e integrazioni

La sezione consente di gestire automaticamente, in coda alla registrazione di ripresa dati infrannuale, le relative registrazioni di rettifica e integrazione. Vediamo nel dettaglio la logica applicata dal software.

Innanzi tutto, questo tipo di registrazioni di assestamento viene effettuata in automatico solo relativamente ai movimenti dei sottoconti economici legati ad un tipo conto che presenta il flag 'Servizio' impostato. Normalmente si consiglia di definire due tipi di costo e due tipi di ricavo: uno di questi è il costo/ricavo normale da associare agli acquisti/vendita di merce (per i quali la gestione a bilancio è da collegarsi alla valorizzazione delle rimanenze di magazzino), l'altro sarà da collegare a tutti quei sottoconti che prevedono un servizio (tipicamente) di competenza di un periodo, sia questo ad esempio un affitto, un canone periodico, un'assicurazione. In secondo luogo, il riferimento delle rettifiche/integrazioni è al range di date competenza inserite nei movimenti di prima nota (e nei centri di costo/profitto per la parte di analitica).

**Scritture di rettifica in automatico**: impostando il flag si attiverà la gestione automatica delle rettifiche, previa impostazione della causale che andrà a rilevare l'operazione. Anche qui, per rettificare anche i movimenti di cdc/cdp, sarà necessario che la causale ne preveda la gestione. Le impostazioni di default (raggruppa per registrazione e soprattutto l'uso del calendario solare) sono quelle che si consiglia di utilizzare. Con questo flag il programma verificherà le righe di costo/ricavo riprese dalla contabilità secondo i range di date registrazione/competenza impostate, per creare i risconti dei giorni al di fuori del range di date competenza impostate per la chiusura. I sottoconti di risconto da utilizzare saranno quelli inseriti nel piano dei conti in corrispondenza del singolo sottoconto di costo/ricavo oppure il sottoconto generico inserito nei parametri di contabilità dell'anno della chiusura infrannuale stessa. Questo flag crea automaticamente quello che l'utente può gestire manualmente nella procedura dedicata ‘Scritture di rettifica'.

**Scritture di integrazione in automatico**: impostando il flag si attiverà la gestione automatica delle integrazioni, previa impostazione della causale che andrà a rilevare l'operazione e della data di inizio. Anche qui, per integrare anche i movimenti di cdc/cdp, sarà necessario che la causale ne preveda la gestione. L'impostazione di default del del calendario solare è quello che si consiglia di utilizzare. Con questo flag il programma verificherà, a partire dalla 'Data di inizio competenza per le scritture di integrazione', le righe di costo/ricavo presenti in contabilità e non inserite nella chiusura (cioè registrazioni al di fuori dei range di date registrazione/competenza impostate), per creare i ratei dei giorni all'interno del range di date competenza impostate per la chiusura. I sottoconti di rateo da utilizzare saranno quelli inseriti nel piano dei conti in corrispondenza del singolo sottoconto di costo/ricavo oppure il sottoconto generico inserito nei parametri di contabilità dell'anno della chiusura infrannuale stessa. Questo flag crea automaticamente quello che l'utente può gestire manualmente nella procedura dedicata ‘Scritture di integrazione'.

Questa procedura merita un'attenzione particolare per quanto riguarda la data di inizio da impostare, in quanto normalmente questa data sarà da impostare uguale alla data dell'ultima apertura conti rilevata in contabilità. Esemplifichiamo: se stiamo creando la chiusura del primo trimestre dell'esercizio, il range di date per la sezione economica sarà tipicamente 01/01/anno – 31/03/anno e se è presente la riapertura conti dell'esercizio precedente allora all'interno di questo range ci sarà direttamente il giroconto a costo/ricavo dei ratei rilevati nel bilancio 'anno-1' e quindi la data inizio per le integrazioni sarà da impostare come 01/01/anno in modo che il software verifichi se dopo del 31/03 ci sono righe con competenza nel trimestre precedente. Se la riapertura non è presente, invece, sarà necessario impostare la data inizio come 01/01/anno-1 per far si che ERPverifichi se anche in tutto l'esercizio precedente vi sono costi/ricavi che cadono nel trimestre iniziale di questo esercizio. Se l'utente dovesse aver già rilevato manualmente in contabilità al 31/12/anno-1 il rateo del periodo, ma non vi fosse la chiusura/riapertura, la scrittura di integrazione potrebbe causare una doppia rilevazione del rateo di competenza.

## Parametri

La scheda ‘Parametri' consente di impostare, per determinati tipi conto oppure per singolo conto/sottoconto, il tipo di saldo da calcolare. Nel dettaglio:

**Generale**: è la situazione normale di default. Con questa opzione l'ERP calcolerà un saldo dare o avere e un saldo generale.

**Dare/avere:** con questa opzione, il programma calcolerà sia un totale dei movimenti dare, un totale avere e il saldo finale relativo.

Il riferimento è alle varie opzioni dei riclassificati: in questi è possibile impostare del solo valore ‘Dare' oppure ‘Avere' oppure generale. Per esemplificare, rilevare in un riclassificato un costo (cioè il totale dei movimenti dare del sottoconto X) e le sue rettifiche (cioè il totale dei movimenti avere del sottoconto X) in due punti separati del riclassificato può dare un'informazione in più del semplice saldo algebrico ‘dare' generale.