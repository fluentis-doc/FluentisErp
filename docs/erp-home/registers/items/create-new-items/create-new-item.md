---
title: Nuovo articolo
sidebar_position: 1.1
---

**Introduzione**: [Identificazione dei prodotti e relative parti](/docs/erp-home/registers/items/master-item-intro) 

:::important A cosa serve
L'anagrafica articoli di Fluentis svolge un ruolo cruciale nella gestione e organizzazione delle informazioni relative agli articoli di un'azienda. Essa si presenta come un database centrale dove vengono registrati e aggiornati i dettagli di ogni prodotto, consentendo una visione chiara e sistematica delle giacenze, dei costi e delle movimentazioni di magazzino.

Le informazioni contenute nell'anagrafica articoli includono dettagli identificativi come il codice articolo, la descrizione, l'unità di misura, e le informazioni relative ai fornitori. Inoltre, è possibile inserire dati riguardanti i prezzi, le politiche di approvvigionamento e la gestione dei lotti, facilitando le operazioni quotidiane di acquisto, vendita e logistica.

Grazie a quest’anagrafica, le aziende possono tenere traccia dello stato degli articoli, automatizzare processi come il riordino delle scorte e ottenere report dettagliati per una pianificazione più efficace degli acquisti. Inoltre, l'integrazione con altri moduli di Fluentis consente di coordinare al meglio le attività di magazzino, migliorando l’efficienza operativa e contribuendo a una gestione delle scorte più accurata e rettificata nel tempo.
:::

La procedura di creazione di un nuovo articolo si apre tramite il percorso:
- **Home > Articolo > Crea Nuovo Articolo**,

oppure

- **Home > Articoli > Ricerca Articoli** cliccando sul pulsante **Nuovo** presente nella ribbon Bar della form in oggetto.

Si aprirà la form **Anagrafica articolo** composta da una sezione nella quale si andranno a definire le *caratteristiche obbligatorie* dell'articolo e da una sezione inferiore composta da diversi Tab che ne raggruppano le *caratteristiche specifiche*.

## 1. **Testata**

Le caratteristiche fondamentali e obbligatorie che ogni articolo deve avere e che troviamo nella prima parte della form sono: la [**Classe**](/docs/guide/common/glossary/glossary-intro#item-class) (massimo 3 caratteri), il [**Codice**](/docs/guide/common/glossary/glossary-intro#item-code) (massimo 50 caratteri), una breve **Descrizione** e l'[**Unità di misura**](/docs/guide/common/glossary/glossary-intro#unit-of-measurement).

:::note
L'insieme della classe e del codice deve essere univoco per quello specifico articolo.
:::

#### Campi non obbligatori  
- **Seconda descrizione**: una seconda descrizione che può essere attribuita all'articolo;
- **Configurazione/Versione**: combo attraverso la quale si va a selezionare la versione dell'articolo;

Una volta che tutte le caratteristiche obbligatorie dell'articolo sono state definite, si procede con l'inserimento di quelle più specifiche attraverso i vari tab che troviamo nella seconda parte della finestra e che vengono trattati nei seguenti documenti.

#### Pulsanti specifici  

> **Aggiornamento LF LV con Formula**: pulsante che consente di aggiornare i prezzi di vendita tramite delle specifiche formule partendo dai prezzi di listino;      
> [**Parametri MRP**](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): pulsante che permette di accedere ai *Parametri MRP* di quell'articolo, dove si vanno a definire i parametri che serviranno per gestire quell'articolo in produzione; questo è un pulsante che troveremo anche all'interno di altre form relative alla parte di produzione.  

## 2. **Generalità**

:::important A cosa serve
Il tab Generalità contiene le informazioni principali e logistiche degli articoli, come il codice, la descrizione, l'unità di misura e altre classificazioni opzionali, tra cui categoria merceologica e natura dell’articolo.     
Questo tab consente di definire ulteriori dettagli utili per la gestione e la tracciabilità degli articoli all'interno dei processi aziendali, facilitando l'organizzazione e la reportistica.
:::

#### Campi specifici  

**Data inserimento**: campo che viene compilato in automatico alla creazione dell'articolo, e che appunto indica la data di creazione dell'articolo;  
**Aliquota IVA**: combo attraverso la quale si va a selezionare ed inserire l'aliquota IVA relativa a quell'articolo; questo campo ha priorità rispetto all'aliquota IVA che viene attribuita al cliente/fornitore nell'anagrafica contatto;  
**IVA acquisti agricoli / IVA vendite agricole**: che hanno un metodo diverso di gestione;  
**Caratteristica e Modello**: sono due campi non obbligatori in cui si va a dare un'ulteriore definizione dell'articolo in base a una serie di raggruppamenti che vengono stabiliti all'interno della gestione aziendale dei prodotti;  
**Fatturato acquisti**: combo che si collega a una tipologia di *Fatturato acquisti* che è stata definita nella tabella dei sottoconti contabili per la contabilizzazione delle fatture di acquisto;  
**Tipo articolo**: è una tabella non obbligatoria in cui si può inserire un'ulteriore descrizione dell'articolo in base ad altri raggruppamenti interni;  
**Nomenclatura**: in questi campi viene selezionata attraverso l'help, la nomenclatura (ovvero la voce doganale dell'articolo) utile ai fini l'intrastat per la dichiarazione delle merci all'importazione o all'esportazione nonché ai fini statici per il commercio degli articoli all'interno dell'UE;  
**Giorni di pagamento merce deperibile**: è collegato all'articolo 62; per la merce deperibile la fattura deve essere creata e pagata entro una scadenza di 30/60 giorni in base al tipo di articolo. In questo caso questo controllo viene fatto sia sull'articolo, sia sul tipo di pagamento che viene inserito in modo che non si possano emettere fatture con data decorrenza maggiore rispetto a quella indicata;  	
**Data ultima modifica**: indica la data di ultima modifica dell’articolo;  
**Categoria fiscale**: attraverso questa combo si può andare a selezionare la categoria fiscale a cui appartiene l'articolo che serve per le stampe fiscali di magazzino, per poter raggruppare gli inventari per categoria fiscale;  
**Categoria merceologica**: dato statistico come la caratteristica, e viene utilizzato in alcuni report specifici;  
**Fatturato vendite**: come per il fatturato acquisti, questa combo serve per la gestione dei sottoconti di ricavo per la vendita dell'articolo;  
**Natura articolo**: è un campo che viene utilizzato per attribuire all'articolo alcune caratteristiche specifiche per poi essere utilizzato in alcune procedure particolari. Nella combo troviamo la lista delle varie nature che possiamo attribuire all'articolo (click per il [glossario](/docs/guide/common/glossary/glossary-intro#item-nature));  

> **Attrezzatura/Utensile**: l’articolo di questa natura è associabile all’anagrafica degli strumenti di misura e delle attrezzature presenti nelle fasi dei cicli di lavorazione.
> **Macchina/Impianto**: questa natura è associabile all’anagrafica delle macchine;
> **Famiglia articoli**: che definisce l’articolo come una famiglia di articoli / prodotti delle previsioni di vendita;
> **Imballo**: serve per la gestione degli imballi a rendere, per la contabilità (per capire quanti imballi ho in casa e quanti ne ho dati al cliente o al fornitore e quindi capire quanti me ne devono rendere);
> **Servizi**: per la gestione degli interventi post-vendita;
> **Prestito d’uso/Componente impianto**: servono per la gestione delle manutenzioni;

#### Opzioni disponibili 
**Controllo qualità**: se attivo questo flag innesca il processo del controllo qualità, di conseguenza vorrà dire che l’articolo rientrerà nel flusso della qualità;  
**Fittizio**: se attivo, questo flag serve per dichiarare che l'articolo non deve essere movimentato;  
**Interesse fiscale**: se è attivo, questo flag serve per riportare l'articolo nelle stampe fiscali del magazzino;  
**ABC:** per ABC, nella gestione delle scorte ai fini logistici, si intende un metodo di categorizzazione dell'inventario che consiste nel suddividere gli articolo in tre classi, denominate appunto A, B, e C dove A contiene gli articoli più importanti e C gli articoli meno importanti. È un metodo utile a focalizzare l'attenzione sui pochi prodotti essenziali e non su molti prodotti di scarsa importanza. Se questo metodo viene utilizzato dall'azienda, in questo campo si troverà la lettera che definisce la categoria a cui l'articolo appartiene;  
**In esaurimento**: se attivo, questo flag indica che l'articolo è In esaurimento.         
Le condizioni per ottenere l'avviso che l'articolo sta per esaurire, nei documenti, per esempio negli Ordini cliente, sono:  
- nei [parametri Ordini cliente](/docs/configurations/parameters/sales/sales-orders-parameters) deve essere settato il flag "Verifica articoli in esaurimento";             
- in anagrafica articolo deve essere settato il flag "In esaurimento" e inoltre la "Data esaurimento" deve essere minore o uguale alla data dell'ordine.         

**Data in esaurimento**: indica da quando l'articolo è stato messo in esaurimento;  
**Articolo senza calcolo della disponibilità**: se il flag è attivo, il sistema non andrà a considerare la disponibilità per poter utilizzare l'articolo;  
**Archiviato**: se attivo, l'articolo non comparirà più nella lista degli articoli che si possono utilizzare, in quanto diventato obsoleto;  
**Diritti d'autore**: se attivo, indica che l'articolo è soggetto a diritti d’autore/royalties e sarà considerato nella [Gestione royalties](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/royalties/). 

## 3. **Amministrazione**

All'interno di questo Tab si inseriscono i centri di aziendali (centri di costo) e l'eventuale centro di profitto dell'articolo, in modo tale che richiamando l'articolo nei documenti venga riportato il centro o i centri selezionati per poi essere utilizzati in fase di contabilizzazione.
   
**Griglia dei centri aziendali**: permette di collegare l'anagrafica articolo ad uno o più centri aziendali; 

#### Campi della griglia dei centri aziendali  
> **Numero**: indica il numero della riga;        
> **Centro di costo**: permette di richiamare il codice del centro di costo;         
> **Descrizione**: indica la descrizione;         
> **Percentuale**: indica la percentuale di ripartizione tra i vari centri di costo inseriti nella griglia (se il centro è unico sarà il 100%);            
> **Divisione**: permette di abbinare l'associazione del centro di costo all'articolo in relazione alla *Divisione* aziendale selezionata;          
> **Data inizio / Data fine validità**: permettono di attribuire una validità alla relazione;      
> **Dimensione**: permette di specificare la dimensione del centro aziendale (per ulteriori dettagli la tabella dei [Centri Aziendali](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers);             
> **Categoria**: permette di specificare la categoria del centro aziendale (per ulteriori dettagli la tabella dei [Centri Aziendali](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers).                       

:::note Note
Se il parametro *Gestione controlling*, presente nel tab *Altre impostazioni* della tabella [**Società**](/docs/configurations/tables/general-settings/company) è disattivato, questo campo viene usato per inserire il centro di costo. 
:::

**Centro di profitto**: solo nel caso in cui il parametro *Gestione controlling*, presente nel tab *Altre impostazioni* della tabella **Società** sia disattivato, sarà gestibile e servirà per inserire il centro di profitto.

## 4. **Approvvigionamento**

:::important A cosa serve
Il tab Approvvigionamento dell'anagrafica articoli di Fluentis permette di definire tutti i parametri necessari per gestire in modo ottimale le scorte dell’articolo. Nella prima sezione, si impostano i dati generali come la scorta minima e massima, che indicano i limiti entro cui mantenere le quantità di magazzino. Altri parametri includono le settimane di copertura, i giorni per la scorta e il punto di riordino, che stabilisce quando è necessario procedere con un nuovo ordine.
Inoltre, sono disponibili impostazioni per le stampanti etichette e i tipi di report etichette, utili per la gestione dei lotti nei diversi stati (Unico, Conforme, Non conforme, Quarantena). Nella seconda sezione, è possibile specificare questi parametri per ogni magazzino in cui l'articolo è presente, offrendo una gestione accurata e personalizzata delle scorte.
:::

In questo tab si vanno a definire tutti i dati necessari per l'approvvigionamento dell'articolo in oggetto.  
La finestra si compone di due parti:  
a. Nella prima parte vengono settati i dati per l'approvvigionamento generale dell'articolo e non per singolo magazzino:  

**Scorta minima e scorta massima**: rappresenta le quantità minime che devono essere sempre presenti a magazzino per quell'articolo e le quantità massime che si possono tenere a magazzino;  
**Giorni per la scorta**: rappresenta il numero di giorni necessari per rimpiazzare almeno la scorta minima che è stata indicata per quell'articolo;  
**Settimane di copertura**: viene indicato l'intervallo di tempo (calcolato in settimane) durante il quale (per cui/in cui) la scorta va a coprire il bisogno di quell'articolo;  
**Indice di copertura**: è un campo editabile nel quale viene inserita una percentuale che può venire o meno considerata dallo schedulatore o dall'MRP per il ripristino delle scorte.  
Se nei parametri MRP si mette il flag su *Considera indice copertura* nel momento della schedulazione la procedura andrà a tenere in considerazione la percentuale indicata in questo campo per ripristinare la disponibilità dell'articolo per una quantità tale da coprire il fabbisogno delle n settimane che si è deciso di specificare nel campo **Settimane di copertura**;  
**Punto di riordino**: qui si va ad indicare al raggiungimento di quale quantità è necessario procedere con riordino di quell'articolo;  
**Giorni per il riordino**: giorni necessari per il ripristino del materiale a magazzino;  
**Intervallo tempo revisione punto di riordino**: viene indicato ogni quanto tempo va rivisto e aggiornato il punto di riordino;  
**Data ultimo calcolo punto di riordino**: viene indicata la data relativa all'ultima volta che è stata fatta l'analisi e in cui si è stabilito il punto di riordino indicato sopra.  

Ci sono poi due sezioni chiamate:  
- **Stampanti etichette**: permette di scegliere le stampanti da proporre di default per stampare le etichette dei lotti per i diversi *Stati lotto*; sarà quindi possibile scegliere tra la stampante per lo stato lotto *Unico*, *Conforme*, *Non conforme*, e *Quarantena*.

- **Tipi report etichette**,: permette di specificare i report di default da stampare per i lotti nei diversi *Stati lotto*; sarà quindi possibile scegliere dei report diversi in base allo stato del lotto *Unico*, *Conforme*, *Non conforme*, e *Quarantena*.

b. Nella seconda parte della finestra invece, si vanno ad indicare i vari magazzini in cui possiamo trovare l'articolo ed eventualmente è possibile definire alcuni dei dati sopra elencati (scorta minima/massima e giorni per la scorta, punto di riordino e giorni per il riordino, stampa etichetta unica/conforme/non conforme/quarantena) per ogni singolo magazzino. (es. la scorta minima o la scorta massima che si potrà avere di quell'articolo in quello specifico magazzino, e cosi per il resto delle informazioni).

## 5. **Categoria sconti acquisti**  

In questa tab vengono inserite le **Categorie di sconto** con la quale l'articolo viene acquistato. Queste categorie vengono utilizzate dalla **Gestione prezzi** del modulo acquisti.  

## 6. **Categoria sconti vendite**  

In questa tab vengono inserite le **Categorie di sconto** con la quale l'articolo viene venduto. Queste categorie vengono utilizzate dalla **Gestione prezzi** del modulo vendite. 

## 7. **Clienti**

In questo tab è possibile andare ad associare all'articolo la lista dei clienti che lo hanno acquistato.

**Tipo campionamento**: combo per definire la modalità di default di prelievo dei campioni da un ordine di produzione per quell'articolo (per esempio un campione ogni 100 pezzi, oppure 1 campione ogni 3 ordini etc..).I tipi di campionamento vengono precedentemente codificati all'interno della tabella nel percorso **Tabelle > Logistica**.

Griglia superiore:  
**Cliente**: va indicato il conto/sottoconto e descrizione del cliente;  
**Lotto economico**: va indicato il lotto economico (la quantità minima acquistabile dal cliente) con la relativa unità di misura;  
**Articolo cliente**: in questa sezione si può indicare il codice e la descrizione che il cliente attribuisce all'articolo all'interno del suo database; indicando in questa sezione la loro referenza, questa verrà riportata in tutti i documenti relativi a quel cliente per quell'articolo;  
**Settore uso**: qui viene indicato il settore d'uso del cliente;  
**Tipo di campionamento**: in questo caso si va selezionare il tipo di campionamento dell'articolo in base al cliente a cui è associato che potrebbe quindi essere diversa da quella selezionata nella combo iniziale della finestra;   
**Scheda tecnica**: nel caso vi sia una scheda tecnica già redatta per questo articolo, in questa sezione vengono indicati i dettagli del documento; 
**Collaudo finale**: in questo campo si va ad inserire le eventuali informazioni relative al tipo, anno, codice e descrizione del collaudo finale;  
**Variante**: in questo campo si va ad inserire l'eventuale variante di quell'articolo, selezionandola tramite la combo contenente le varianti precedentemente codificate nella tabella **Varianti Articolo**;  
**Note**: sezione in cui si possono andare ad inserire eventuali note.

La griglia inferiore può contenere delle informazioni sugli [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata).

#### Pulsanti specifici  
> **Inserisci clienti**: permette di inserire un nuovo cliente;    
> **Cancella clienti**: permette di eliminare il record di un cliente inserito in precedenza.

## 8. **Codici Barcode**

All'interno di questo Tab si possono andare ad inserire eventuali codici alternativi detti anche codici barcode che rappresentano l'articolo.  
I codici barcode sono dei codici a barre che racchiudono alcune delle informazioni principali inerenti la codifica dell'articolo a cui vengono associati e sono utili per le operazioni di magazzino. Questi codici vengono letti attraverso delle specifiche apparecchiature dette Mobile tramite raggi laser o barre led.  
I codici a barre possono essere di varie tipologie.  
Le due tipologie gestite dal database sono:
- l'EAN13 (significa che il codice a barre può avere una lunghezza massima di 13 caratteri)     
- l'EAN128 (significa che il codice a barre deve avere una lunghezza di cifre pari).

In **Fluentis ERP** non ci sono dei parametri già definiti che indicano come impostare il codice barcode in modo che questo rispetti le norme relative all'EAN13 e 128, ma possono essere applicati degli algoritmi customizzati che riprendono lo standard e che controllano il codice barcode che viene inserito verificando che rispetti le norme sopra citate.  
La form è composta da una griglia all'interno della quale si va ad inserire un **Nuovo** barcode, tramite il pulsante **Inserisci** presente nella ribbon bar, oppure andando direttamente su una nuova riga.  
Nel campo **Tipo barcode** si va a selezionare, tramite la relativa combo, il tipo di barcode che si vuole codificare e nel campo **Barcode** il codice barcode.

#### Pulsanti specifici  
> **Validation**: premendo questo pulsante, il sistema va a verificare che il codice corrisponda alle norme citate in precedenza riguardanti la lunghezza che il codice deve avere in base al tipo di codice che si sta inserendo;  
> **Cancella codici barcode**: permette di cancellare un codice a barre precedentemente inserito.

## 9. **Confezionamento**

:::important A cosa serve
Il tab di confezionamento dell'anagrafica articoli di Fluentis è essenziale per definire la modalità di confezionamento di un articolo, specificando i tipi di Unità di Carico (UDC) che lo compongono. Questa configurazione può avere una struttura ad albero, nel quale un pallet, ad esempio, può contenere diverse scatole, ognuna delle quali a sua volta può contenere un certo numero di articoli.

Definire accuratamente il confezionamento è fondamentale poiché permette di generare automaticamente le UDC necessarie per la spedizione nel momento in cui si prepara un ordine. 

Inoltre, è possibile associare specifiche unità di misura per il volume e definire la descrizione per cliente o fornitore, permettendo così una gestione personalizzata a seconda delle esigenze specifiche di ciascun cliente. Questo tab si configura quindi come uno strumento chiave per ottimizzare la logistica e la gestione dei magazzini
:::

Attraverso questo tab si va a definire la modalità di confezionamento dell'articolo definendo quali sono i tipi di unità di carico  che lo compongono.

Può essere una struttura ad albero in quanto per esempio possiamo stabilire come metodo di confezionamento il pallet, che al suo interno può aver un determinato numero di scatole che possono contenere un determinato numero di articoli.

Definire il confezionamento consente di creare attraverso il sistema le unità di carico necessarie per la spedizione nel momento in cui dobbiamo preparare un ordine per la spedizione;

La finestra si compone di una griglia all'interno della quale si vanno ad inserire le seguenti informazioni:

**Tipo unità di carico / Tipo unità di carico  contenuto**: in questi campi si vanno ad inserire il tipo di unità di carico  quindi il tipo di imballo, e il tipo di contenuto selezionando la voce interessata tramite la relativa combo; i dati presenti nelle combo di questi campi sono stati precedetemene codificati nella relativa tabella [Tipi unità di carico](/docs/configurations/tables/logistics/loading-unit-types);  
**Quantità**: in questo campo si indica la quantità che quell'unità di carico può contenere;  
**Priorità**: in questo campo di va ad indicare la priorità del confezionamento (per esempio se abbiamo un pallet al cui interno abbiamo delle scatole, bisognerà dare la priorità in modo che quando il sistema va a creare le unità di carico sappia già la priorità di confezionamento);  
**Conto / Sottoconto / Descrizione cliente/fornitore**: in questo campo viene inserito il cliente/fornitore che richiede questo tipo di unità di carico. Quindi è possibile definire diverse unità di carico a livello di singolo cliente;  
**Dimensione Unità di misura**: in questo campo si va a selezionare l'unità di misura per le dimensioni dell'unità di carico; all'inserimento del **Tipo unità di carico** questo valore viene riportato dalla tabella [Tipi unità di carico](/docs/configurations/tables/logistics/loading-unit-types);   
**Altezza / Larghezza / Profondità**: in questi campi di vanno a specificare le dimensioni dell'unità di carico completa; all'inserimento del **Tipo unità di carico** questi valori vengono riportati dalla tabella [Tipi unità di carico](/docs/configurations/tables/logistics/loading-unit-types) solo nel caso in cui anche il flag **Volume variabile** (presente sempre in Tipi unità di carico) sia disattivato; altrimenti i dati non verranno proposti e dovranno essere inseriti manualmente dall'operatore data l'impossibilità di prevedere come vengano posizioni gli articoli sull'unità di carico selezionata. In ogni caso possono essere modificati manualmente, ed ad ogni loro modifica verrà ricalcolato anche il **Volume**;  
**Unità di misura volume**: in questo campo si andrà ad indicare l'unità di misura del volume dell'unità di carico; all'inserimento del **Tipo unità di carico** questo valore viene riportato dalla tabella [Tipi unità di carico](/docs/configurations/tables/logistics/loading-unit-types);   
**Volume**: in questo campo si andrà ad indicare il volume dell'unità di carico completa. Se il flag **Volume variabile** è attivo, all'inserimento del **Tipo unità di carico** questo valore viene calcolato sommando il valore del volume dell'unità di carico a vuoto presente nella tabella [Tipi unità di carico](/docs/configurations/tables/logistics/loading-unit-types) e il valore del volume dell'articolo (preso dal campo *Volume* presente nel tab Pesi / Dimensioni dell'anagrafica articolo moltiplicato per la relativa quantità) dal volume delle unità di carico contenute; invece, se il flag **Volume variabile** non è attivo, all'inserimento del **Tipo unità di carico** verrà riportato direttamente il valore del volume dell'unità di carico a vuoto presente nella tabella [Tipi unità di carico](/docs/configurations/tables/logistics/loading-unit-types) dato che questo non è variabile. Nel caso in cui venissero modificate le dimensioni di **Altezza / Larghezza / Profondità** il valore del **Volume** sarà ricalcolato di conseguenza. Il **volume** verrà ricalcolato anche se ci fossero delle variazioni nel volume del **Tipo unità di carico  contenuto**. Questo valore può sempre essere modificato manualmente;  
**Volume variabile**: indica che si tratta di un'unità di carico con volume variabile, quindi il volume totale varierà a seconda di che cosa e come ci verrà caricato; è campo in sola lettura valorizzabile nella tabella [Tipi unità di carico](/docs/configurations/tables/logistics/loading-unit-types);  
**Unità di misura Peso**: in questo campo si andrà ad indicare l'unità di misura del peso dell'unità di carico; all'inserimento del **Tipo unità di carico** questo valore viene riportato dalla tabella [Tipi unità di carico](/docs/configurations/tables/logistics/loading-unit-types);      
**Peso**: in questo campo si andrà ad indicare il peso dell'unità di carico completa; all'inserimento del **Tipo unità di carico** e della **Quantità** questo valore viene calcolato sommando al peso dell'unità di carico a vuoto presente nella tabella [Tipi unità di carico](/docs/configurations/tables/logistics/loading-unit-types) il peso degli articoli (preso dal campo *Peso lordo* presente nel tab Pesi / Dimensioni dell'anagrafica articolo moltiplicato per la relativa quantità) o dal peso delle unità di carico contenute. Questo valore può sempre essere modificato manualmente;  
**Tolleranza dimensioni/Tolleranza quantità**: sono utilizzati nelle personalizzazioni e servirebbero quando da un piano di carico si crea una lista di prelievo UDC con le unità di carico disponibili a magazzino. La procedura dovrebbe inserire nella lista UDC, unità di carico con dimensioni o quantità che differiscono da quelle specificate nel confezionamento per le percentuali specificate. Attualmente non sono utilizzati a standard;                
**Dimensioni obbligatorie**: se attivo, questo flag sta ad indicare che le dimensioni indicate sono tassative;  
**Unità di carico obbligatoria**: se attivo, questo flag sta ad indicare che questo articolo deve essere obbligatoriamente gestito tramite unità di carico nelle dichiarazioni di produzione e nel ricevimento merci del WMS;  
**Descrizione tipo unità di carico / Descrizione Tipo unità di carico contenuto**: in questi campi, una volta inseriti il tipo unità di carico e il tipo unità di carico contenuto , si visualizzeranno automaticamente le descrizioni dei tipi selezionati.

## 10. **Costi**

:::important A cosa serve
Nel tab Costi dell'anagrafica articoli di Fluentis, gli utenti possono registrare vari tipi di costi associati, tra cui il costo ultimo e il costo medio ponderato, che vengono aggiornati automaticamente in base alle movimentazioni di magazzino. Il costo ultimo rappresenta l'ultimo prezzo d'acquisto registrato, mentre il costo medio è il risultato delle movimentazioni di magazzino, utili per calcolare il valore delle rimanenze.       
Il tab consente anche di definire un costo standard, utilizzato come riferimento per l'anno e solitamente aggiornato annualmente. Inoltre, è possibile inserire il prezzo di vendita, da cui partire per la creazione di listini di vendita.          
Queste informazioni sono fondamentali per la valorizzazione delle rimanenze di magazzino e per la pianificazione finanziaria, contribuendo a una gestione più efficace degli articoli in magazzino.
:::

All'interno di questo Tab si inseriscono diversi costi associati all'articolo.

#### Campi specifici  
**Costo ultimo** e il **Costo medio**: per costo ultimo si intende l'ultimo costo di acquisto (il più recente), mentre per costo medio ponderato si intende il costo medio che deriva dalle movimentazioni di magazzino. Per entrambi i costi la causale utilizzata per la movimentazione del magazzino deve avere il flag su aggiornamento *Costo medio/Costo ultimo* attivato ed anche il flag su *Aggiorna costo articolo* e su *Interesse fiscale*, in questo modo i relativi movimenti verranno presi in considerazione del calcolo dei costi.   
**Costo standard/costo standard successivo**: il costo standard è un costo impostato manualmente o dalla procedura di calcolo costo e indica il costo di riferimento per un dato articolo da usare durante l'anno. Solitamente è un costo che viene aggiornato all'inizio o alla fine dell'anno. Per gli articoli di acquisto solitamente corrisponde al costo medio mentre per gli altri articoli viene calcolato dalla procedura di [Calcolo costo](/docs/controlling/cost-calculation/cost) che si trova nell'area *Controlling*, come somma dei costi dei materiali e dei costi delle fasi di produzione.  
Tutti questi costi possono essere usati per le valorizzazioni della distinta base, delle rimanenze di magazzino oppure (per gli articoli di acquisto) per la valorizzazione degli ordini di produzione (e relativi movimenti di carico) quando si carica a magazzino l'articolo di un ordine di produzione.  
**Prezzo di vendita**: prezzo base da cui si può partire a creare un listino di vendita nel caso in cui si vada a considerare un listino per esempio nazionale di partenza. Nel caso in cui non vi siano listini per questo articolo, nei documenti questo articolo prenderà questo prezzo. (salvo per i documenti di reso nei quali l'articolo prende di default il prezzo indicato nel costo ultimo da verificare bene) (non viene molto utilizzato).  
**Categoria di sconto/Configurazione fasce di prezzo/Formule di aggiornamento delle politiche di sconto**: sono dei dati prettamente commerciali che servono per l'aggiornamento dei prezzi.  
Verrà utilizzato nei documenti non riporterà mai gli sconti provenienti dai listini in cui è contenuto e non verranno calcolate le provvigioni sulle vendite di questo articolo.

## 11. **Descrizione articoli in lingua**

Questo tab permette di inserire la **Descrizione in lingua** e la **Descrizione 2** dell'articolo nelle varie lingue di lavoro utilizzate.

#### Campi specifici  
**Lingua**: attraverso questa combo si va a selezionare la lingua che si vuole aggiungere; le lingue tra cui poter effettuare la selezione sono state precedentemente codificate nella relativa tabella;  
**Descrizione in lingua**: in questo campo si va ad inserire manualmente la descrizione dell'articolo nella lingua prescelta;  
**Descrizione 2**: in questo campo si va ad inserire manualmente la descrizione secondaria dell' articolo nella lingua prescelta.

## 12. **Extra Data**

Si rinvia alla documentazione relativa agli [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata).

## 13. **Fornitori preferenziali**

:::important A cosa serve
Il tab Fornitori Preferenziali all'interno dell'anagrafica articoli di Fluentis è una funzionalità chiave per la gestione degli approvvigionamenti. Questo consente di definire in modo preciso i fornitori preferenziali per ciascun articolo, facilitando così il processo di approvvigionamento e garantendo che vengano scelti i fornitori più adatti.
Nella sua interfaccia, la sezione è suddivisa in due parti principali. La prima parte riguarda informazioni generali sui fornitori, come la selezione di un fornitore predefinito, che diventa il principale canale d'approvvigionamento per l'articolo in questione. Qui, gli utenti possono anche impostare parametri importanti come la quantità massima ordinabile, le tolleranze sulle quantità e sui prezzi, e i dettagli relativi agli ordini di fornitura. La seconda parte offre una griglia dettagliata in cui si possono aggiungere informazioni specifiche su ciascun fornitore, come il tempo di approvvigionamento, ed eventuali note.
:::

In questo tab si possono definire, per singolo articolo, quali sono i fornitori preferenziali da cui viene solitamente approvvigionato quell'articolo, indicandone uno di default in modo che il sistema vada ad ordinare sempre dallo stesso fornitore.

La finestra è composta da due sezioni:  
1. Nella prima sezione si vanno ad indicare le informazioni relative a tutti i fornitori preferenziali, nel caso queste informazioni siano generiche, quali:

**Relazione fornitore obbligatoria**: se attivo, questo flag indica che questo articolo è acquistabile solamente dal fornitore di default che verrà indicato nella griglia nella seconda parte della schermata;  
**Numero massimo righe di prova**: sono il massimo numero di righe di ordine fornitore che si potranno fare per un dato articolo / fornitore fino a quando il flag **Blocco righe ordine** è attivo;  
**U.M di acquisto**: in questo campo viene indicata l'unità di misura di acquisto di quel materiale;  
**Valore massimo acquistabile**: in questo campo viene indicata la quantità massima ordinabile da quel fornitore per quell'articolo;  
**Blocco righe ordine**: se attivo, questo flag indica che si vuole bloccare la possibilità di inserire nuove righe di ordine fornitore;  
**Data Blocco**: indica la data in cui si attiva il blocco delle righe ordine fornitore;  
**% tolleranza quantità ricevuta in eccesso e in difetto**: in questi due campi si andrà ad indicare la % di tolleranza sulla quantità consegnata in più e in meno dal fornitore per quel materiale;  
**% tolleranza prezzo in eccesso e in difetto**: in questi due campi si andrà ad indicare la % di tolleranza sul prezzo fornitore in eccesso e in difetto rispetto al prezzo stabilito;  
**consenti prezzo a zero**: se attivo, questo flag consente di emettere ordini fornitori con prezzo a zero per quell'articolo.

2. Nella seconda parte della schermata si trova una griglia, nella quale si andrà ad indicare il fornitore di default ed eventuali altri fornitori che vengono utilizzarti per l'acquisto dell'articolo e i relativi dati per ogni fornitore:  
**Fornitore**: si andrà ad indicare il conto/sottoconto/descrizione del fornitore;  
**Default**: questo flag, se attivo indica il fornitore di default nel caso di più fornitori;  
**Lotto economico**: in questa sezione di andrà ad indicare per ogni fornitore il lotto economico minimo e i suoi multipli;  
**Articolo fornitore**: in questa sezione si potrà aggiungere il codice e la descrizione che il fornitore utilizza per identificare l'articolo;  
**Tempo di approvvigionamento**: si andrà ad indicare per ogni fornitore la gestione ovvero il tempo necessario al fornitore per riprodurre/acquistare quell'articolo, la spedizione ovvero il tempo necessario di spedizione del materiale dal fornitore, tempo totale la somma dei due dati precedenti che va ad indicare il tempo necessario per reintegrare la scorta di materiale;  
**Ordine di acquisto**: in questa sezione si andranno ad indicare per ogni singolo fornitore le informazioni relative agli ordini di acquisto già dettagliate sopra (U.M, blocco riga, data blocco, numero massimo di righe, valore massimo, % di tolleranza quantità ricevuta in eccesso/difetto);  
**Produttore**: in questa sezione si andrà ad indicare il conto e la descrizione del produttore del materiale;  
**Origine**: indica l'origine della merce, ad esempio il paese di proveniente o la provenienza di origine animale o vegetale;     
**Controlli di accettazione**: all'interno di questo campo si andranno ad indicare eventuali controlli che è necessario eseguire all'accettazione del materiale prima di poterlo utilizzare;  
**Variante**: in questo campo si va ad inserire l'eventuale variante del fornitore di quell'articolo;  
**Note**: in questa sezione è possibile inserire eventuali note relative al fornitore in oggetto.

## 14. **Immagini**

Questo tab consente di associare all'articolo delle immagini.

Attraverso il pulsante **Aggiungi immagine** è possibile andare ad inserire un immagine all'interno del tab.

Questa procedura non è molto utilizzata in quanto è presente in ogni form la funzione [**Allega documenti**](/docs/guide/common/common-buttons#document-manager) che permette di allegare diversi tipi di documenti tra cui anche le immagini.

## 15. **Listini fornitori**

In questa tab vengono riportati tutti i listini fornitore in cui l'articolo è presente. La griglia è read only.

## 16. **Listini di vendita**

In questa tab vengono riportati tutti i listini clienti in cui l'articolo è presente. La griglia è read only.

## 17. **Lotti e serial number**

:::important A cosa serve
Il tab "Lotti e Serial Number" dell'anagrafica articoli di Fluentis consente una gestione dettagliata dei materiali attraverso due varianti: la gestione per lotti e la gestione tramite numeri di serie.
La gestione a lotti permette di organizzare gli articoli in gruppi omogenei che possono essere sia di acquisto che di produzione. Ogni lotto è identificato da un codice univoco che consente di rintracciarne i movimenti e le giacenze, anche in scenari multi-magazzino. All'interno della gestione a lotti, gli utenti possono definire la tipologia di prelievo (FIFO, data scadenza o manuale), selezionare il tipo di codice lotto per definirne la codifica. Questa gestione è fondamentale per articoli sensibili come quelli alimentari e farmaceutici.

In alternativa, la gestione con serial number offre la possibilità di tracciare ogni singolo pezzo attraverso un numero di serie unico. Questo è particolarmente utile per articoli ad alto valore o critici, dove ogni unità necessita di un monitoraggio preciso. Le opzioni disponibili includono la modalità di generazione del numero di serie (manuale o automatica) e la validità temporale del numero stesso.

Questo tab è quindi un elemento cruciale per garantire la rintracciabilità, la compliance normativa e la gestione efficiente delle scorte nel magazzino, contribuendo così a ottimizzare la logistica aziendale.
:::

L'articolo può essere gestito a Lotti o a Serial Number e di ogni codice articolo si possono creare dei sottogruppi che a loro volta possono essere gestiti a lotti o a serial number.

I lotti sono dei gruppi di quantità omogenee di articoli che entrano in azienda (lotti di acquisto) o che vengono prodotti nell'azienda stessa (lotti di produzione).

Ogni lotto deve poter essere identificato da un codice univoco, dal quale vengono reperite alcune informazioni che caratterizzano il lotto stesso. Questo codice può essere definito dall'azienda nella finestra **Tipo codice lotto**, oppure nel caso di lotti di acquisto si può decidere di mantenere lo stesso codice lotto del fornitore.

Ogni lotto deve poter essere quindi rintracciato, e nel caso di più magazzini, grazie al codice lotto deve essere possibile tenere traccia dei dati sulle giacenze per singolo magazzino.

All'interno di questo tab, si andranno a definire i parametri in base al tipo di gestione che si sceglierà di avere per quello specifico articolo e che verrà applicata tramite gli appositi flag che troviamo all'inizio di questo tab: **Gestito a lotti** e **Gestito con serial number**.

### Gestione a lotti

**Tipologia di prelievo del lotto**: indica se la tipologia di prelievo sia F.I.F.O., per data scadenza o manuale (quindi scelto dall’operatore);      
**Tipo codice lotto**: in questo caso si va a selezionare il tipo codice lotto (e le relative caratteristiche impostate per crearlo) che si è definito nella finestra *Tipo codice lotto* e che è dato dalla concatenazione di più campi;       
**Stato iniziale lotto**: solitamente il singolo lotto è caratterizzato anche da uno stato che ne va a definire la validità. Per alcuni tipi di materiali in particolare, come i prodotti alimentari e farmaceutici, lo stato è obbligatorio (per es. nell'ambito farmaceutico un lotto che necessita di analisi prima di poter essere utilizzato avrà come stato iniziale *in quarantena* fino al completamente delle analisi); per questo tipo di prodotti lo stato sarà accompagnato da una data di scadenza per evitare la vendita e l'utilizzo di merce scaduta. In base allo stato del lotto, si potrà scegliere di poterlo gestire a Rfid o a Rfid unico;       
**Gestito RFID**: se attivato, l'articolo verrà gestito tramite la tecnologia Rfid (radiofrequenza) tramite l'applicazione;       
**RFID unico**: se attivato, il codice RFID associato all'articolo è unico per l'articolo;      
**Tipi di scadenza lotto**: per selezionare il tipo di scadenza che si vuole attribuire al lotto (se a data scadenza, all'ultimo giorno del mese di scadenza, al primo giorno del mese di scadenza);      
**Modifica data di scadenza del lotto**: se attivato, consente di modificare la data di scadenza del lotto manualmente;      
**Anticipo blocco lotto espresso in giorni**: i due campi **Avviso blocco** e **Blocco** consentono di esprimere, in giorni, quando avvisare che si sta per bloccare quel lotto e stabilire il giorno di blocco del lotto;      
**Lotto mono fornitore**: se attivato, indica il fatto che a quel lotto apparterranno solo articoli con lo stesso fornitore;      

Si può scegliere altrimenti di gestire l'articolo attraverso la **Gestione con Serial Number**. In questo caso, per ogni pezzo viene creato un numero di serie che identifica in maniera univoca quel pezzo all'interno della struttura in modo da averne traccia. Questo tipo di gestione è particolarmente adatta per articoli considerati *critici* o ad *alto valore* per i quali è necessario tenere traccia di ogni pezzo movimentato e non di una quantità intera.

### Gestione con serial number

**Tipo codice serial number**: per selezionare il tipo predefinito nella tabella **Tipo codice serial number**;      
**Giorni validità del serial number**: per indicare per quanti giorni questo codice sarà valido;      
**Generazione del serial number**: per stabilire la modalità di creazione del serial number, se manuale o automatica; quanto è impostato su automatica, significa che per tutti i movimenti con causale di *carico* e con il flag *Crea serial number* attivo (sulla causale stessa), all'inserimento del lotto i serial number verranno creati automaticamente.

## 18. **Note**

Questo tab consente di associare all'articolo delle note libere.

## 19. **Matrici**

Questo tab si attiva solo se è stata impostata una [Configurazione](/docs/configurations/tables/CPQ/principal-configurations) nella testata dell'Articolo.           
Viene gestito nel caso in cui sia necessario gestire le matrici per la combinazione degli attributi di un articolo e permette di definire le combinazioni possibili per l'articolo.        
Come prima cosa è necessario assegnare **Codice** univoco identificativo e **[Definizione di matrice](/docs/configurations/tables/CPQ/matrices-definition)** (che contiene il set di attributi che comporrà la matrice); in base alla definizione selezionata, nei tab sottostanti sarà possibile selezionare solo gli [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) validi per questa matrice. 

Spostandosi nella sezione *Valori dimensione consentiti*, il passo successivo è selezionare, uno ad uno, gli Extra Data dal combo box **Attributo**. Una volta selezionato l'attributo, nella griglia *Risultati disponibili* vengono visualizzati i valori dell'Extra Data (per esempio, se selezioniamo l'attributo Taglia, in questa griglia saranno visualizzati i valori dell Extra Data: XS, S, M, L, XL, ecc.). Una volta selezionati i valori dell'attributo che vogliamo rendere validi per questa matrice, è necessario trascinarli nella griglia *Valori ammessi* per indicare che quei valori saranno validi per le combinazioni della matrice.        
Una volta scelti i valori validi per ogni attributo, automaticamente compariranno dei nuovi tab, uno per ogni matrice di supporto e un tab per la matrice completa, che unirà le varie matrici di supporto per averne una unica con tutte le combinazioni possibili.        
Spostandosi nei tab generati dalle matrici di supporto, è necessario flaggare le combinazioni di valori valide. Per ogni combinazione, quindi, è necessario inserire il flag solo se valida.        
Nel tab della *Matrice completa*, invece, viene generata una matrice unica con tutte le combinazioni valide, impostate nel tab precedente.      
La matrice ora può essere utilizzata negli oggetti per i quali è stata configurata.   

## 20. **Pesi/Dimensioni**

:::important A cosa serve
Il tab Pesi e Dimensioni dell'anagrafica articoli di Fluentis è essenziale per la gestione logistica degli articoli. In questa sezione, gli utenti possono specificare dettagli riguardanti le dimensioni e il peso degli articoli, facilitando le operazioni di magazzino e approvvigionamento.         
Questo consente l'inserimento delle dimensioni (lunghezza, larghezza, altezza) usando l'unità di misura scelta, e calcola automaticamente il volume.           
Inoltre, è possibile definire il peso lordo, netto e specifico, informazioni importanti per la pianificazione delle spedizioni e la gestione dei costi.
:::

#### Dimensioni articolo

Nella combo l'utente ha la possibilità di scegliere l'unità di misura della dimensione tra le opzioni proposte e nella zona sottostante potrà poi andare ad indicare la prima, seconda e terza dimensione e relativo valore, per poter indicare l'altezza, la larghezza e la profondità.

#### Volume  
Nella combo si andrà a scegliere l'unità di misura del volume e nel campo sottostante si andrà ad indicare il valore del volume di riferimento.

#### Tipo di materiale  
Nella combo si va a selezionare il tipo di materiale tra i tipi materiali precodificati nella relativa tabella **Tabelle > Logistica > Tipi materiale**.
Inoltre, è possibile anche definire il tipo ri profilo del materiale con le relative dimensioni.

#### Peso  
Nella combo si andrà a selezionare l'unità di misura del peso, andando poi ad indicare nei campi sottostanti il peso lordo, il peso netto e il peso specifico. Il peso lordo e il peso netto sono i pesi che vengono riportati nei vari documenti legati all'articolo.

#### Tipo unità di carico  
Nella combo si va a definire il confezionamento dell'articolo (se pallet, europallet etc.) e nel campo sottostante si possono indicare il numero di articoli per unità di carico. In base al tipo unità di carico e agli articoli per tipo unità di carico quando si vanno a creare i piani di carico si potrà avere in automatico il calcolo delle quantità e dell'imballo per la preparazione dei mezzi. È importante notate che questi valori vengono presi in considerazione se non sono presenti dei valori generici nel tab [Confezionamento](/docs/erp-home/registers/items/create-new-items/item-registry/packaging).

#### Numero di colli  
Questa sezione serve per gestire il numero di colli nei documenti; si possono gestire in base o al numero di articoli per collo, o al numero di colli per formare l'articolo impostando il flag sul parametro che si vuole utilizzare per questo calcolo; così facendo poi nei documenti verrà riportato il calcolo del numero dei colli in modo automatico.

## 21. **Qualità**
In questo tab si andranno a definire tutta una serie di informazioni utili ai processi di controllo qualità (ove ve ne fossero) per quell'articolo.

#### Ubicazioni

In questa sezione si andrà a definire il luogo all'interno del magazzino in cui l'articolo dovrà essere ubicato; in particolare si potranno definire:

**Tipo di ubicazione**: ovvero dove vogliamo ubicare l'articolo;  
**Ubicazione mono-articolo**: se attivo, questo flag indica che in quell'ubicazione potrà essere ubicato solamente quel tipo di articolo; non potranno quindi esserci due articoli diversi in quella stessa ubicazione contemporaneamente;  
**Ubicazione mono-lotto**: se attivo, questo flag indica che in quell'ubicazione potrà essere ubicato non soltanto solo un tipo di articolo, ma di quell'articolo potrà essere ubicato in quel luogo solo un lotto e non più lotti dello stesso articolo contemporaneamente

#### Registrazioni di magazzino

In questa sezione si vanno a definire informazioni utili alla registrazione di magazzino per questo articolo, quali:  
**Carico manuale permesso**: se attivo, questo flag indica che questo articolo potrà essere caricato manualmente in magazzino;  
**Blocco movimento**: viene utilizzato nelle personalizzazioni per bloccare il salvataggio di una reg manuale se il relativo valore (da standard o reale dell’articolo o del lotto) supera quello specificato **Valore massimo carico/valore massimo scarico**. Non viene usato a standard;          
**Valore massimo carico/valore massimo scarico**: vengono utilizzati nelle personalizzazioni (insieme al flag **Blocco movimento**) come valori di riferimento per bloccare il salvataggio di una reg manuale se il relativo valore (da standard o reale dell’articolo o del lotto) supera quello specificato. Non sono usati a standard;     
**Costo da utilizzare**: in questa sotto sezione si va ad indicare come si intende valorizzare l'articolo, se considerando il costo reale oppure il costo standard;

#### Acquisti

In questa sezione si va ad indicare se al momento della ricezione del materiale di acquisto debbano essere effettuati degli accertamenti in entrata sul materiale oppure se questi non sono richiesti, indicando:  
**Controlli in accettazione**:  attraverso la combo si va a selezione il tipo di controllo che deve essere fatto (se interno/non normalizzato/normalizzato/ufficiale) e attraverso nei campi affianco attraverso l'help si andrà ad indicare il Tipo di piano di controllo scegliendo tra i piani di controllo codificati all'interno della relativa form a cui si accede tramite il percorso **Qualità > Piani di controllo**.  
**Controlli in accettazione non richiesti**: se attivo, questo flag indica che non sono al contrario richiesti controlli in accettazione. 

#### Produzione

In questa sezione invece si vanno a specificare informazioni relative alla produzione del materiale sempre connesse al controllo qualità, quali:

**% tolleranza quantità prodotta**: in questo si andrà ad indicare la percentuale di tolleranza sulla quantità prodotta in più e/o in meno,

**Scheda tecnica**: in questi campi si va a selezionare, ove sia presente, la scheda tecnica e il tipo di scheda tecnica relativi a questo articolo;

**Scheda tecnica non richiesta**: nel caso in cui il materiale non necessiti di scheda tecnica, questo flag verrà attivato;

#### Qualità

In questa sezione si va ad indicare il lead time di analisi necessario per effettuare i controlli preliminare sull'aritcolo:  
**Lead time analisi**: se attivo, questo flag indica che per quel materiale sono necessarie dei controlli di qualità che necessitano quindi di un periodo di tempo (in giorni) che viene indicato nel campo affianco; questo serve per stabilire dopo aver ricevuto il materiale, dopo quanti giorni è possibile utilizzarlo in produzione o nel caso di un prodotto finito dopo quanti giorni dalla sua produzione è possibile spedire il materiale.

#### Post vendita

In questa sezione finale si andrà ad indicare l'eventuale garanzia concessa sul materiale e i relativi giorni di garanzia stabili attivando il flag **Con Garanzia** e aggiungendo nel campo editabile il numero dei giorni di garanzia; nel caso in cui il materiale non abbia una garanzia il flag risulterà disattivato.

## 22. **Spese**

All'interno di questo tab è possibile andare ad aggiungere/gestire delle spese relative all'articolo che possono essere per esempio spese varie, spese di smaltimento, etc.

Queste spese che vengono codificate nella relativa tabella **Spese**.

La schermata si compone quindi di una griglia in cui si inseriscono la/le spese che si vogliono gestire per quell'articolo tra quelle presenti nei tipi di spesa codificate precedentemente.  
**Tipo**: attraverso questa combo andiamo a selezionare il tipo di spesa che vogliamo aggiungere dall'elenco delle spese tramite la relativa combo;  
**Descrizione**: campo che si compila in automatico una volta selezionato il tipo di spesa, e che mostra la descrizione della spesa prescelta;  
**Importo**: in questo campo va inserito manualmente l'importo di quella spesa nella valuta di riferimento;  
**Data**: attraverso questa combo, si va ad inserire la data di inizio validità della spesa per questo articolo;  
**Data fine**: in questo campo si può andare ad inserire l'eventuale data di fine validità della spesa per quell'articolo.

Nel caso sia necessario inserire più tipi di spesa, basterà spostarsi nella riga sottostante e ripetere la procedura di aggiunta della spesa appena illustrata.

:::note Nota
Le spese inserite in questo tab, vengono riportare nel tab *Riepiloghi* degli ordini clienti nella sezione **Spese**.
:::

## 23. **U.M alternativa**

:::important A cosa serve
Il tab Unità di Misura Alternative nell'anagrafica articoli di Fluentis offre un'importante funzionalità per la gestione delle diverse unità di misura associate a ciascun articolo. In questo tab è possibile definire un'unità di misura alternativa, utile per gestire articoli che possono essere trattati in più di un'unità. Questo approccio consente di semplificare le operazioni di approvvigionamento e magazzino, poiché i vari operatori possono utilizzare un'unità di misura con cui si sentono più a loro agio o che meglio si adatta alle loro esigenze operative.     
Nel tab è presente una sezione per specificare il fattore di conversione tra l'unità di misura principale e quella alternativa, permettendo di calcolare automaticamente la quantità richiesta.     
Le opzioni disponibili comprendono impostazioni per definire se un'unità di misura è predefinita o tassativa, nonché per stabilire quali unità di misura sono prioritarie durante le operazioni di gestione delle scorte.      
Attraverso queste funzionalità, le aziende possono gestire con maggiore efficienza le scorte di magazzino e gli ordinativi, adattando le informazioni relative alle unità di misura alle specifiche necessità operative e migliorando l'interoperabilità tra differenti sistemi di gestione, come il Warehouse Management System (WMS).
:::

In questo tab viene indicata, dove fosse necessaria, l'unità di misura alternativa dell'articolo. 

L'articolo può essere gestito in entrambe le unità di misura e creando delle relazioni tra le due.

**Unità di misura** e **Descrizione**: si indicherà quindi l'unità di misura alternativa con la sua descrizione;  
**Fattore di conversione**: qui si va a definire il fattore di conversione tra l'unità di misura principale e l'unità di misura alternativa; la *quantità alternativa* nei documenti viene calcolata in base al settaggio effettuato nei [Parametri iniziali di magazzino](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)  
**Default**: se attivo, questo flag indica qual'è l'unità di misura di riferimento tra N alternative possibili per articolo;  
**Tassativa**: se attivo, questo flag determina l'invariabilità del fattore di conversione. Quando si va a inserire l'unità di misura gestionale tramite il fattore di conversione il sistema calcoli automaticamente l'unità di misura alternativa, e viceversa. Se flag Tassativa non è attivo, quell'unità di misura alternativa si può impostare come unità di misura primaria, indipendentemente dal flag **Prioritaria**;     
**Prioritaria**: se attivo, l’aggiornamento della *quantità gestionale* non cambia la *quantità alternativa* perché quest’ultima ha la priorità, mentre nel caso in cui venga modificata la *quantità alternativa*, la *quantità gestionale* viene ricalcolata in funzione della quantità alternativa sulla base del fattore di conversione;        
**Default WMS**: se attivo, indica che questa unità di misura sarà quella utilizzata di default all'interno del WMS.

## 24. **Varianti**

:::important A cosa serve
Il tab Varianti dell'anagrafica articoli di Fluentis fornisce la funzionalità per inserire e gestire le varianti di un dato articolo. Questa opzione è particolarmente utile quando è necessario creare un nuovo articolo che differisca solo marginalmente da uno già esistente. In questi casi, la creazione di una variante è preferibile rispetto alla creazione di un nuovo articolo, soprattutto quando le caratteristiche principali dell'articolo originale rimangono sostanzialmente inalterate.       
Un esempio pratico di questa funzionalità si può osservare nel settore della moda: si potrebbe avere un articolo denominato "maglia", da cui si creano varianti per diverse taglie e colori, mantenendo le caratteristiche fondamentali dell'articolo originale.

Il tab è strutturato in due griglie: la prima contiene i dettagli delle varianti, come codice, descrizione, scorta minima e massima, punto di riordino, giorni di scorta, costo medio e prezzo di vendita. Queste informazioni sono quelle che differenziano ogni variante dall'articolo principale. Nella seconda griglia, in caso di disponibilità, si può anche inserire un barcode specifico per la variante.

In sintesi, il tab Varianti rappresenta un potente strumento per la gestione delle differenze minori tra articoli simili, facilitando la registrazione e l'amministrazione delle scorte.
:::

In questo tab si possono inserire e/o vedere le varianti di un dato articolo. A volte se un nuovo articolo che si ha bisogno di creare è molto simile a uno già presente e si differenzia solo per una minima caratteristica che non va ad avere un grosso impatto sulle informazioni presenti nei vari tab dell'articolo esistente, in questo caso non si va a creare un nuovo articolo ma semplicemente si vanno a creare delle varianti di quell'articolo.

Un *esempio* può essere quello del settore fashion: si inserisce l'articolo maglia e poi si possono creare le varianti per taglia e per colore, ma le caratteristiche principali dell'articolo maglia restano le stesse.

Il tab è costituito da due griglie. Nella prima griglia viene inserita la variante con le informazioni relative al codice e descrizione, scorta minima e massima, punto di riordino e i relativi giorni, i giorni per la scorta, il costo ultimo, medio, standard e infine il prezzo di vendita.

Le informazioni che si trovano nella griglia sono le uniche informazioni che differenziano la variante dall'articolo principale; per tutte le informazione che non sono presenti nella griglia basterà fare affidamento a quelle presenti nei vari tab di quell'articolo.

Nella griglia sottostante si potrà andare ad inserire, se presente, anche il barcode specifico di quella variante. 