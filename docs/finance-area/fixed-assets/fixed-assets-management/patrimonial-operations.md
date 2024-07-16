---
title: Operazioni patrimoniali
sidebar_position: 2
---

All'interno della presente scheda si inseriscono i dettagli delle varie operazioni a libro cespite. 

 | Funzione | Significato |
| --- | --- |
| Nuova operazione | Attiva il cursore nella prima griglia delle operazioni patrimoniali. |
| Cancella operazione | Cancella l'operazione selezionata nella griglia dell'operazione patrimoniale. |
| Nuovo ammortamento | Attiva il cursore nella seconda griglia degli ammortamenti. |
| Cancella ammortamento | Cancella l'ammortamento selezionato nella griglia ammortamenti. |
| Esegue ammortamento automatico | Calcola l'ammortamento del cespite in uso per l'anno impostato nel campo immediatamente sopra la griglia ammortamenti. |
| Inserimento cdc | Attiva il cursore nella griglia dei centri di costo. |
| Cancella cdc | Cancella il movimento del centro di costo selezionato nella griglia. |
| Calcolo centri di costo | Esegue il calcolo dei centri di costo per il valore della riga ammortamento selezionata. |
| Inserimento commesse | Attiva il cursore nella griglia delle commesse. |
| Cancella commesse | Cancella il calcolo commessa selezionato in griglia. |
| Calcolo commesse | Esegue il calcolo della commessa per il valore della riga ammortamento selezionata. |
| Dettagli rivalutazione | Apre la gestione dei dettagli di rivalutazione. Il pulsante è attivo solo se il flag ‘rivalutazioni' è impostato per la categoria del cespite in uso. Vedi applicazione a. |
| Documenti | Gestione dell'archiviazione documentale associata alla maschera in uso. |

### GRIGLIA SUPERIORE

La prima riga sarà sicuramente relativa all'acquisto iniziale del cespite: la **data dell'operazione**, il suo numero **progressivo** e il successivo **importo** inserito nella colonna relativa: 

**Costo originario**: se l'importo è relativo ad una operazione di acquisto e rappresenta dunque il costo storico;

**Alienazione**: se l'importo si riferisce ad una alienazione totale e rappresenta il valore di vendita;

**Alienazione parziale**: se l'importo si riferisce ad una alienazione parziale e rappresenta il valore di vendita;

 

Se è attiva la gestione delle quantità, deve essere valorizzato anche il campo **quantità**.

 
:::danger NOTA:
Nel caso del caricamento di un cespite storico preesistente l'importo dei fondi ammortamento già calcolati **NON** deve essere inserito direttamente in questa sezione ma riportato nella sezione sottostante (inserendo il valore totale dell'ammortamento accumulato in un' unica quota ammortamento con anno pari all'anno precedente la data di inserimento) **con stato *Contabilizzato*** tramite spunta del flag corrispondente per far si che questa sezione sia ricalcolata dall'ERP. **Si veda il video tutorial corrispondente**
:::

**![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image01.png)**

Inserendo una riga relativa ad una operazione patrimoniale (es. acquisto, ma anche alienazione) ed impostando il relativo importo nella colonna adeguata (es. costo originario in caso di acquisto), si nota che i campi evidenziati in giallo vengono aggiornati in automatico dal programma.

**Importo da ammortizzare**: valore di "carico" (acquisto o comunque costo storico caricato) sul quale calcolare l'ammortamento;


**Valore contabile**: Costo storico - Fondo ammortamento accumulato;


**Già ammortizzato**: Valore provvisorio che sarà aggiornato al momento del calcolo dell'ammortamento e poi sarà nuovamente azzerato aggiornando il totale dell'ammortamento accumulato (nel momento della contabilizzazione ammortamento).



### GRIGLIA CENTRALE Ammortamenti:

presenta la lista degli ammortamenti calcolati per il cespite: l'inserimento può essere manuale oppure automatico. 

- L'inserimento manuale prevede l'indicazione dell'anno di riferimento, del numero riga progressivo di riferimento (ma solo per categorie non incrementali, per le altre il campo è nascosto in quanto l'ammortamento sarà sempre collegato al progressivo 1), il tipo di ammortamento da applicare: a questo punto l'ERP riporterà le impostazioni della categoria cespite di riferimento, con un conto e sottoconto per la contabilizzazione della quota, la percentuale e gli importi (valori che si possono forzare e modificare a piacimento). Alla fine della griglia è presente la data di riferimento dell'ammortamento, proposta come la fine esercizio dell'anno contabile di riferimento della riga, e infine gli importi della quota deducibile e indeducibile dell'ammortamento. 

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image02.png)


- L'inserimento automatico prevede la definizione dell'anno di riferimento nel campo superiore alla griglia e l'uso del pulsante di gestione *Esegue ammortamento automatico* che andrà a riportare i dati degli ammortamenti previsti in categoria per tutto il cespite in uso.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image03.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image04.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image05.png)

 

Il calcolo dell'ammortamento sarà riportato nella colonna ***Già ammortizzato*** della griglia superiore che servirà ad indicare un importo non ancora definitivo: solo con l'indicazione del flag ***Contabilizzato***, nelle varie righe, gli importi superiori saranno attribuiti alla colonna del fondo relativo alla tipologia dell'ammortamento stesso. 

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image06.png)

 

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image07.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image08.png)

 
:::danger Nota
L'inserimento manuale del flag **NON** effettua una registrazione in contabilità (per questo c'è la procedura di contabilizzazione ammortamenti): si utilizza normalmente solo per il caricamento manuale iniziale della situazione storica, per la quale, di norma, si effettua un inserimento unico dell'importo totale ammortizzato all'anno precedente all'inizio dell'uso del gestionale e non di tutto il dettaglio dell'ammortamento. 
:::

Al salvataggio della riga con flag *Contabilizzato*, Fluentis chiederà se si vuole collegare una registrazione contabile già esistente, messaggio al quale normalmente (in caso di ripresa di dati storici) si risponde negativamente. 

Il flag di Ammortamento fiscale prevede la gestione fiscale della riga ammortamento: viene proposto sulla base dello stesso flag previsto in categoria cespite. In qualche caso può essere utilizzato manualmente per rilevare a libro cespiti, il giro degli ammortamenti anticipati utilizzati nel bilancio ordinario ad ammortamenti fiscali da gestire solo per il calcolo della tassazione. La gestione fiscale, invece, si ha attraverso la valorizzazione dei campi con gli importi deducibili/indeducibili dell'ammortamento, valorizzati automaticamente sulla base della percentuale di deducibilità associata al cespite o alla sua categoria.

Nell'ultima sezione è presente il dettaglio di valorizzazione a centro di costo degli ammortamenti selezionati nella seconda griglia.


### Caricamento di un cespite pregresso

Per inserire nel sistema i cespiti già esistenti al momento dell’inizio delle registrazioni, con la relativa
situazione del fondo ammortamento operare come segue:
1. Inserire una nuova scheda cespite con i dati anagrafici del cespite: descrizione, categoria ecc… (tab *Dettaglio*) e
porre attenzione alla **data inizio attività** che deve essere quella storica

2. Nella tab *Operazioni patrimoniali* inserire il costo storico indicando la data di acquisto e compilando
il campo **Costo originario**

3. **NON** compilare manualmente il campo *Fondo ammortamento* nella riga (altrimenti verrebbe
sovrascritto al prossimo ammortamento), ma inserire una riga (sotto) nella griglia Ammortamenti
con anno uguale all’ anno precedente a quello di inserimento ed il totale degli ammortamenti già
calcolati. E mettere il flag contabilizzato. L’ammortamento si deve inserire nel campo costo
(imponendolo indipendentemente dagli altri campi precedenti)


### Gestione dell'alienazione cespite (casi di alienazione parziale)

#### Caso del cespite già ammortizzato
Esempio valido se il cespite non è stato gestito tramite componenti o incrementi ma in maniera indivisa

1. La scrittura contabile automatica non viene gestita, quindi si può anche gestire il cespite da dentro
la scheda e poi fare la scrittura Fondo amm. a Cespite separatamente.
2. Per scaricare il cespite parzialmente inserire un importo negativo nella colonna del fondo per un
valore corrispondente alla quota del costo storico ceduto o distrutto.
3. Nella colonna Alienazione parziale indicare (**sempre**) il valore al quale viene ceduto (o 0,00 se distrutto)
4. La colonna costo originario ceduto si aggiornerà automaticamente.


#### Caso del cespite NON completamente ammortizzato

Situazione iniziale

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/selling1.PNG)

Per scaricare il cespite parzialmente inserire un importo negativo nella colonna del fondo per un valore
corrispondente alla quota del fondo accantonato proporzionale al costo storico ceduto o distrutto.

Nella colonna Alienazione parziale indicare il valore al quale viene ceduto (o 0,00 se distrutto, in questo
caso si può indicare il valore anche nella colonna Distruzione)
La colonna costo originario ceduto si aggiornerà automaticamente.

Il calcolo che viene fatto nella colonna costo originario ceduto tiene conto anche della plus / minusvalenza
di cessione, che dovrà essere inserita tenendo conto della quota parte di valore netto contabile che viene
ceduto.

**Esempio 1:**
Costo storico 1000, ammortizzato per 125
Ne vendo la metà al prezzo di 200

Rettifico il fondo accantonato per la metà, quindi -62,50 e ho un valore di vendita (attenzione a compilare
la colonna Alienazione parziale, altrimenti se compilo alienazione totale forza a scaricare tutto il costo
storico) di 200.

Quindi dovrò calcolare la minusvalenza da inserire sulla base della metà del valore netto contabile, quindi
875 / 2 = 437,50
Minusvalenza = 437,50 – 200 = 237,50

Il campo Costo originario ceduto si calcola automaticamente a 500 che è il costo storico effettivamente
scaricato dal libro cespiti per la metà.


![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/selling2.png)

**Esempio 2:**
Costo storico 1000, ammortizzato per 125
Ne smaltisco la metà a prezzo 0,00

Rettifico il fondo accantonato per la metà, quindi -62,50 e ho un valore di vendita (attenzione a compilare
la colonna Alienazione parziale, altrimenti se compilo alienazione totale forza a scaricare tutto il costo
storico) di 0,00.

Quindi dovrò calcolare la minusvalenza da inserire sulla base della metà del valore netto contabile, quindi
875 / 2 = 437,50
Minusvalenza = 437,50 – 0 = 437,50

Il campo Costo originario ceduto si calcola automaticamente a 500 che è il costo storico effettivamente
scaricato dal libro cespiti per la metà.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/selling3.png)

