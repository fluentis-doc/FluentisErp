---
title: Tab Cespiti
sidebar_position: 7
---

 La tab Cespiti è dedicata alla gestione dei beni ad uso pluriennale: sarà utilizzato per rilevare acquisti, incrementi, alienazioni e distruzioni.

ATTENZIONE: La tab è visibile solamente se la causale contabile che si sta utilizzando presenta al suo interno il flag '**cespiti**' attivo. Inoltre è opportuno impostare, sempre nella causale (tab **[Dettaglio registrazione](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**), il **tipo di operazione** da compiere, tramite la combo box accanto al flag di cui sopra (acquisizione, dismissione, distruzione ecc...). Pertanto sarà opportuno creare diverse causali dedicate ai cespiti ed adatte a compiere le diverse operazioni possibili.

 

### LA SEZIONE SUPERIORE

è dedicata alla codifica del nuovo cespite acquistato oppure alla selezione del cespite esistente per rilevare una nuova operazione al suo interno: 

**per inserire un nuovo cespite** è sufficiente procedere a compilare una nuova riga, 

mentre **per selezionare un cespite esistente** bisogna necessariamente utilizzare il pulsante denominato **Seleziona cespite esistente** presente nella ribbon bar al fine di richiamare la scheda cespite già esistente ed integrarla. 

 

### PROCEDURA PER L'INSERIMENTO:

selezionare 

- la **Categoria cespite** di appartenenza tramite la combo box (la quale è collegata alla tabella '**[categoria cespite](/docs/configurations/tables/finance/fixed-asset-category)**'), 

- il **Tipo di proprietà** (normalmente è proposto 'cespite di proprietà' di default), (**Note proprietà**: campo per inserire un'ulteriore annotazione libera)

- assegnare un eventuale **Precodice** (se si desidera ottenere una numerazione all'interno di questo precodice, non sono infatti possibili due schede cespiti con lo stesso numero se non utilizzando un precodice che permette di attribuire una nuova numerazione ad esso riferita) la combo box è collegata alla tabella '**[Precodice cespite](/docs/configurations/tables/finance/fixed-asset-precode)**'



- confermare la numerazione progressiva assegnata in automatico alla scheda cespite, oppure imporre il numero desiderato (anche tramite la combinazione con il precodice) 

- inserire la '**Descrizione cespite**' (che sarà riportata nella scheda cespite ed utilizzata in tutti i report del modulo quali il libro cespiti e le stampe delle schede). 

Tutti questi campi saranno ripresi direttamente dal cespite già esistente nel caso di operazione aggiuntiva.

 

- inserire l'**Importo** (valore patrimoniale corrispondente al costo dell'operazione, ovvero all'imponibile più l'eventuale iva indetraibile in caso di acquisto oppure prezzo di vendita in caso di alienazione totale o parziale);

- inserire l'**aliquota iva** tramite l'apposita combo box.

Il campo **% ind**. che riguarda la percentuale di indetraibilità dell'iva, normalmente è compilato in automatico e dipende dal codice iva selezionato tramite il settaggio impostato nella tabella **[Aliquote e modalità iva](/docs/configurations/tables/finance/vat-rates)**, se ne sconsiglia la modifica manuale.

 

Altri campi:

 

**Stato**: campo impostato automaticamente, inizialmente, all'atto dell'acquisto si imposta su 'non ammortizzato', successivamente, a seconda degli ammortamenti accumulati lo stato sarà 'parzialmente ammortizzato' o 'totalmente ammortizzato'. Il valore può essere forzato manualmente tramite la combo box collegata ad una tabella fissa.

 

**Tipo operazione**: viene proposto sulla base dell'impostazione della causale contabile: tipicamente nel caso di acquisto o incrementi il tipo operazione è ‘costo originario', mentre per le vendite sarà ‘Alienazione parziale' o ‘Alienazione totale';

**Conto / Sottoconto / Descrizione**: viene ripreso dalla categoria cespite (se inserito nella tabella **[Categoria Cespite](/docs/configurations/tables/finance/fixed-asset-category)**);



**Data di inizio attività**: viene proposta sulla base della data registrazione: da questa data sarà verificato l'anno a partire dal quale il cespite può essere ammortizzato; 

**Data di fine attività**: non viene inserita (ma la visualizzazione nel libro cespiti dipende anche da questo campo);

**Inizio / fine garanzia**: campo informativo in merito alla validità della garanzia. 

**Usato**: identifica i cespiti che sono stati acquistati usati (per questi cespiti la percentuale d'applicazione dell'ammortamento il primo anno è del 100% e l'ammortamento anticipato è applicabile solo per un anno), 

**In uso**: (proposto di default al salvataggio) indica che il cespite è effettivamente in uso (senza questo flag il cespite non può essere ammortizzato), 

**Manut.**: indica che il cespite è da considerare per il calcolo delle manutenzioni. 

**Note**: campo per annotazioni, non riportato nei report standard (può essere aggiunto personalizzandoli). 

**Statistiche fiscali**: Abilita la gestione del tab inferiore Dati oggettivi cespite al fine di utilizzarlo per l'ammortamento fiscale.



**Società di comodo**: per identificare i cespiti da considerare nelle stampe cespiti che rientrano in queste casistiche fiscali, 

**Tipo deducibilità**: consente di impostare la deducibilità fiscale dell'ammortamento per il cespite. La combo box è collegata alla tabella **[Tipi deducibilità](/docs/configurations/tables/finance/deductibility-types)**.

**U.M.**: combo box che permette di selezionare l'unità di misura (codice) per la quantità (es. Kg, Pezzi...); la **Descrizione** dell'unità scelta è visualizzata nel campo adiacente;

**Perc**: campo visibile solo se all'interno della form **[Parametri Cespiti](/docs/configurations/parameters/finance/fixed-assets-parameters)** è attivo il flag 'Percentuale su singolo Cespite'. Consente di definire una percentuale di ammortamento specifica per il cespite che si sta inserendo, che andrà a prevalere rispetto a quella definita all'interno della relativa categoria cespite. Il campo è riportato all'interno della scheda cespite.



Tipo Ammortamento: combo box che permette di selezionare la tipologia (codice) di ammortamento oggettivo (un ammortamento tecnico ed extra-contabile) da applicare; la **Descrizione** del codice selezionato è visualizzata nel campo adiacente; la combo box è collegata alla tabella **[Tipi Ammortamenti Oggettivi](/docs/configurations/tables/finance/objective-amortization-types)** (Tipo Ammortamento).



 

**Al salvataggio della riga potrebbero comparire, a seconda dei casi, diversi messaggi**:

- "Il cespite ha valore inferiore a ___. Vuoi ammortizzarlo al 100%?": la categoria cespite ha impostato un valore nel campo del ‘limite amm. totale' e il valore inserito per il nuovo cespite è inferiore: siamo nel caso dei cespiti di valore inferiore a 516 € (il vecchio milione di lire) che la normativa fiscale consente di girare direttamente a costo (cioè ammortizzare al 100%) direttamente nell'anno di acquisto. Scegliendo Si (Yes) sarà eseguito l'ammortamento al 100% il primo anno, tramite l'aggiornamento del flag nella testata dell'anagrafica cespite in modo da essere gestito in modo specifico nella procedura automatica di ammortamento;

- "Vuoi legare l'alienazione parziale ad un'operazione patrimoniale già esistente?": la causale è di vendita parziale e la categoria cespite non ha il flag ‘incrementale': in questo caso sarà eseguito il messaggio per una assegnazione dell'importo di alienazione ad una specifica operazione patrimoniale del cespite. Esempio: per un cespite ‘non incrementale' ogni singola riga di operazione viene gestita a livello di ammortamenti con una vita a se stante: l'alienazione parziale (rispetto a tutto il cespite) potrebbe essere in realtà gestita come una vendita totale della singola operazione (ad es.: ho un computer, lo incremento con uno scanner, poi vendo solo lo scanner).

**Scegliendo Si (Yes)** verrà visualizzato un help (popup) per la ricerca di quale **componente** che costituisce il cespite si vuole alienare, permettendo di selezionarlo tramite i tasti *Ricerca* e *Seleziona*  

In particolare si noti che i vari componenti sono facilmente individuabili anche perchè riferiti, all'interno dell'help, al campo **Progressivo** (*Progrg*.) così come all'interno della scheda cespite

 

 

## TAB DI DETTAGLIO INFERIORI

 

Il contenuto è riferito alla riga superiore selezionata. 

### OPERAZIONI PATRIMONIALI: 

(viene aggiunta una nuova riga per ogni operazione caricata nella griglia superiore). 

**Data Oper**: Data alla quale viene registrato il movimento sul libro cespiti;

**Progr**: Progressivo di riga dell'operazione;

**Costo Originario**: il campo viene valorizzato solo dalle operazioni eseguite con Tipo operazione 'costo originario' con il valore patrimoniale di acquisto (corrispondente all'imponibile + eventuale iva indetraibile);

**Quantità**: riferita alla quantità di beni da caricare;

**Imposta indetraibile**: accoglie il valore dell'eventuale iva indetraibile che sarà sommato al costo per determinare il valore contabile iniziale (costo storico). Il valore è compilato automaticamente a partire dal valore inserito nel campo 'Importo' della griglia superiore in relazione al codice iva selezionato nel campo adiacente (se prevede indetraibilità);

**Importo non ammortizzabile**: se nella categoria cespite corrispondente è valorizzato il campo 'Perc amm.(ortizzabile)' il campo sarà compilato automaticamente; l'importo viene detratto dal valore di calcolo dell'ammortamento es. Perc. amm = 50% Costo storico 30.000;

Ammortamento 30.000 - 15.000 = 15.000 x 3%; L'ammortamento sarà calcolato fichè il fondo non raggiunge 15.000;

**Residuo non ammortizzabile**: gestito solo manualmente, con riferimento all' esempio del campo precedente l'ammortamento sarà pari a 30.000 *3% ma fichè il fondo non raggiunge 15.000;

**Già ammortizzato**: il valore è visibile solo se è calcolato l'ammortamento ma non ancora contabilizzato (contabilizzando il valore verrà sommato nel 'Valore contabile' e nel fondo);

**F.do Amm. Ord. / Anticipato / Decelerato**: i campi accolgono, a seconda del tipo di ammortamento calcolato (ordinario oppure anticipato o decelerato) il cumulo delle quote di ammortamento contabilizzate;

**F.do Amm. Fiscale**: viene valorizzato se è attivo il flag 'Fiscale' presente nella categoria cespite oppure attivabile a livello di singola riga nella Tab 'Ammortamento'

**Alienazione**: accoglie il valore di vendita del bene e viene valorizzato in automatico tramite il campo 'Importo' della griglia superiore se il Tipo Movimento è 'Alienazione'. Sulla base di questo valore e del valore della Plusvalenza o minusvalenza sarà aggiornato il valore storico del bene da scaricare dal libro cespiti;

**Alienazione parziale**: accoglie il valore di vendita del bene e viene valorizzato in automatico tramite il campo 'Importo' della griglia superiore se il Tipo Movimento è 'Alienazione parziale'. Sulla base di questo valore e del valore della Plusvalenza o minusvalenza sarà aggiornato il valore storico del bene da scaricare dal libro cespiti;

**Plusvalenza**: accoglie il valore della plusvalenza di vendita del cespite e concorre al calcolo del valore storico ceduto;

**Plusv. reinvestita**: non attivo;

**Rivalutazione**: aumenta il costo storico a seguito legge di rivalutazione;

**Minusvalenza: **accoglie il valore della minusvalenza di vendita del cespite e concorre al calcolo del valore storico ceduto.



**Distruzione**: normalmente si compila a zero (in alternativa ai campi 'Alienazione' o 'Alienazione parziale'), può essere attribuito un valore per casi particolari (esempio valore di realizzo del rottame);

**Costo Originario ceduto**: valore storico che viene ceduto nell'ambito di un'operazione con Tipo movimento 'Alienazione' o 'Alienazione parziale' calcolato in base ai dati inseriti nei campi Alienazione, Alienazione parziale, (o Distruzione), Plusvalenza e Minusvalenza. Il campo Valore contabile sarà, parallelamente, rettificato in negativo per un importo determinato a partire dal valore originario ceduto al netto del fondo ammortamento accumulato;

**IVA**: non attivo in Italia;

**Assestamento**: non attivo in Italia;

**Valore Euro**: controvalore in Euro se il valore è espresso in valuta o se la valuta della società è diversa da Euro;

**Sottoconto**: sottoconto del fornitore (acquisto) o Cliente (vendita) a livello di riga relativa al singolo componente (potrebbero essere acquistati o venduti a soggetti diversi);

**Data doc. / Nr. doc. / Prot. IVA**: riferimenti della fattura di acquisto o di vendita corrispondente alla riga del movimento in questione;

**Note**: note libere di riga;

**Progr Vend**: in caso di alienazione parziale riporta il progressivo della riga selezionata per la vendita del relativo componente;

**Stampato**: si attiva se è stampato in definitiva il libro cespiti relativamente alla riga in questione.

 

 

### OPERAZIONI ECONOMICHE:

(normalmente non utilizzata), serve per collegare alla scheda cespite un costo che non va capitalizzato (perché non pluriennale).

I dati contenuti in questo tab vengono valorizzati se nella griglia superiore viene inserita una riga con Tipo movimento 'Operazioni economiche'

I campi sono simili a quelli presenti nella tab Operazioni patrimoniali



 

 

### AMMORTAMENTI:

Normalmente non utilizzata all'interno della registrazione contabile, poiché l'ammortamento può essere più comodamente gestito tramite la relativa procedura automatica nell'ambito delle scritture di assestamento, oppure, per singolo cespite, dall'interno della scheda cespite (nell'apposita griglia che ricalca i campi presenti nella tab in commento).

Nel caso si desideri, nell'ambito di una registrazione di prima nota, effettuare l'ammortamento (per quanto riguarda la scheda cespite, la parte contabile sarà gestita nel tab Registrazione) occorrerà richiamare il cespite esistente da ammortizzare tramite il tasto **Seleziona un cespite esistente** che farà comparire la riga relativa nella griglia superiore, assicurarsi che il Tipo operazione sia *F.do Ammortamento Ordinario*, se non già previsto nelle impostazioni della causale, inserire nel campo **Importo** il valore dell'ammortamento annuale da registrare, quindi nella tab *Ammortamenti* indicare l'anno dell'ammortamento (campo **Anno**) e compilare manualmente i campi obbligatori della griglia:

**Progressivo**: permette id selezionare tramite combo box la riga della scheda cespite da ammortizzare (l'unico presente se non vi sono componenti aggiuntivi o incrementi del cespite);

**Anno**: Confermare l'anno dell'ammortamento;

**Tipo di Ammortamento**: Ordinario, anticipato o decelerato;

**Conto / sottoconto / descrizione quota ammortamento**: normalmente richiamato in automatico tramite la categoria cespite della riga caricata nella griglia superiore;

**Conto / sottoconto / descrizione fondo ammortamento**: normalmente richiamato in automatico tramite la categoria cespite della riga caricata nella griglia superiore;

**Imponibile**: valore del cespite (storico) sul quale è calcolato l'ammortamento applicando la **Percentuale** (o aliquota di ammortamento);

**Giorni di possesso**: sui quali viene calcolato l'ammortamento se nelle impostazioni della categoria cespite corrispondente è stato scelto il calcolo sui giorni (con apposito flag);

**Costo**: risultato del calcolo imponibile * Percentuale * giorni possesso / 365 (può essere forzato manualmente).


**Contab**: flag contabilizzato, attribuisce alla registrazione la qualifica di contabilizzata impedendone la sovrascrittura, senza questo flag non potrà essere elaborato un ammortamento successivo.

**Fiscale**: flag che identifica l'ammortamento ai fini fiscali ed andrà ad incrementare il fondo fiscale nel relativo campo, distinto da quello civilistico / contabile.

**Ammortamento deducibile** / **Ammortamento indeducibile**: campi valorizzati automaticamente con le quote deducibile e indeducibile dell'ammortamento, se nella **[categoria cespite](/docs/configurations/tables/finance/fixed-asset-category)** relativa è stato valorizzato il campo Tipo deduc. , a sua volta collegato alla tabella **[Tipi deducibilità](/docs/configurations/tables/finance/deductibility-types)** dove viene definita la percentuale di deducibilità. Diversamente possono essere valorizzati manualmente.

Nella tab Operazioni patrimoniali il tipo operazione F.do Amm. Ordinario avrà già aggiornato la riga del libro cespiti che incrementa il fondo ammortamento e riduce per pari importo il valore netto contabile del bene.




### GESTIONE DATI OGGETTIVI:

Questo tab permette di gestire i dati utili per l'ammortamento oggettivo (tecnico extracontabile - oppure fiscale) che possono essere elaborati parallelamente all'ammortamento civilistico.

Per prima cosa all'interno della tabella delle **[Categorie cespite](/docs/configurations/tables/finance/fixed-asset-category)** dovrà essere attivato il relativo flag per recepire i dati all'interno della scheda cespite.

Quindi inserendo la registrazione contabile relativa, ad esempio, all'acquisto del cespite, nella presente tab saranno riportati in automatico i dati (che possono essere poi modificati indipendentemente da quelli patrimoniali ufficiali) utili per gli ammortamenti oggettivi.

I campi della tab ricalcano infatti quelli presenti nella tab 'Operazioni patrimoniali'. La tab 'Ammortamenti', invece, è utilizzata esclusivamente per registrazioni di tipo contabile / civilistico, quindi la gestione degli ammortamenti tecnici (extracontabili) potrà essere eseguita soltanto entrando nelle scheda cespite (Amministrazione > Cespiti > Cespiti > doppio click per entrare).

### CENTRI DI COSTO - COMMESSE:

Questo tab (**visibile solo quando NON sono attive le funzioni avanzate per il controlling**) gestite dal flag *Gestione controlling* nella tabella Società è riservato all'imputazione del centro di costo / profitto (oggi centro aziendale)  e della commessa (oggi Progetto) da collegare alla scheda cespite che verrà creata con la registrazione contabile che si sta inserendo.

In particolare il centro che verrà collegato alla scheda cespite con la registrazione (e che è possibile inserire anche manualmente direttamente nella scheda, nella tab 'Dettaglio' della stessa) rappresenta una eccezione, valida per quel cespite, rispetto al dato inserito nella categoria cespite alla quale la scheda inserita fa riferimento, nella tabella Categorie cespite.

**Il centro di costo inserito sarà valorizzato al momento del calcolo (da parte della procedura automatica) dell'ammortamento.**

:::tip NOTA:
Nel caso in cui siano attive le funzioni avanzate per il controlling la gestione del centro aziendale e del progetto a cui agganciare le quote di ammortamento sarà definita in una apposita tab **Ammortamento per controlling** all'interno della scheda cespite.
:::


**Cdc**: combo box necessaria per richiamare il centro e collegata con la tabella **[Centri aziendali;](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers)**

**Descrizione**: Descrizione del centro richiamato tramite il campo precedente;

**Percentuale**: percentuale di attribuzione al centro inserito nella riga in uso (esempio, in caso di attribuzione totalmente a quel centro indicare 100%, se invece il costo relativo alla quota ammortamento sarà ripartito su due centri si inseriranno die righe ognuna con ripartizione al 50%).

**La griglia riservata all'inserimento del Progetto** (Commessa) non viene aggiornata e non interagisce con il campo 'Progetto' in testata registrazione e/o la tab 'Progetti' (dedicati alla gestione dei costi ordinari di esercizio anziché quelli pluriennali) infatti tale griglia è dedicata, così come per i centri aziendali, ad indicare il progetto che dovrà essere riportato nella scheda cespite e sul quale andranno imputate le quote di ammortamento calcolate.


**Progetti**: widget per l'inserimento del progetto (con doppio click si apre l'help di ricerca, oppure iniziando a scrivere nel campo si attiva la ricerca rapida); il campo è collegato alla tabella Progetti

**Percentuale**: percentuale di attribuzione al progetto inserito nella riga in uso (esempio, in caso di attribuzione totalmente a quel progetto indicare 100%, se invece il costo relativo alla quota ammortamento sarà ripartito su due progetti si inseriranno die righe ognuna con ripartizione al 50%).

## PROCEDURA PER VENDITA CESPITE

- Inserire una causale contabile adeguatamente configurata con la funzione Cespiti ed il tipo operazione corretto, ad esempio alienazione totale
- Compilare la testata registrazione come di consueto con il cliente ed i dati fattura compreso il totale
- Nel tab Cespiti utilizzare il comando **seleziona cespite esistente** per richiamare la scheda dl cespite venduto
- Nella griglia superiore indicare nel campo **Importo** l'imponibile del valore di vendita pattuito con il cliente (indicare zero se il cespite viene donato o distrutto)
- Nella griglia inferiore il valore del fondo ammortamento accumulato viene stornato in automatico e , per differenza, viene compilato automaticamente il campo plusvalenza o minusvalenza
- Se la causale è correttamente configurata (consigliabile causale standard) la sezione contabile è correttamente già completa con i dati iva e contabili compreso lo storno del costo storico, del fondo ammortamento e la rilevazione della plus/minusvalenza.

## ALTRO

In caso di alienazione parziale (sempre per un cespite ‘incrementale' o in caso di alienazione parziale non collegata per un non incrementale) l'utente dovrà integrare la riga dell'operazione parziale con gli importi di storno dei fondi (con segno negativo quindi) e valorizzare la minusvalenza o plusvalenza relativa: tali importi saranno poi da inserire anche all'interno della scheda ‘registrazione' per la contabilità generale. Negli altri casi, invece, l'applicativo avrà aggiornato correttamente la scheda cespite, avrà inserito il movimento anche all'interno della sezione Iva della registrazione e da qui avrà aggiornato la registrazione relativa. Nel caso di alienazione, in particolare, se sono stati codificati i sottoconti di minusvalenza e plusvalenza sia all'interno della causale che nei parametri di contabilità, saranno state aggiunte anche le righe relative all'operazione di vendita (una riga di storno del totale patrimoniale attivo, una o più righe di storno dei fondi ammortamento e per differenza la minusvalenza/plusvalenza).

Ulteriori operazioni attivabili nella scheda cespiti: al momento del caricamento di un nuovo cespite è possibile procedere a suddividerlo in N schede differenti. È possibile, infatti, che l'acquisto sia relativo ad un numero di cespiti identici, come ad esempio 5 computer uguali: l'utente, invece, di caricare 5 cespiti manualmente, potrebbe procedere a caricarne uno per il totale e poi suddividerlo in 5 parti uguali automaticamente con l'apposito pulsante (una scelta ulteriore potrebbe essere creare un singolo cespite che si compone di 5 cespiti: questo, se da un lato semplifica la situazione a libro cespiti, dall'altro crea una certa difficoltà poi a gestire le alienazioni cespiti, in quanto saranno da gestire manualmente come alienazioni parziali).

È possibile cancellare la riga cespite inserita nella griglia superiore: in questo caso sarà eseguito un messaggio di conferma della cancellazione anche dell'anagrafica cespite, per il quale il default è su ‘No' (il messaggio viene eseguito anche al momento di chiudere la registrazione senza salvare). Si raccomanda di fare particolare attenzione al messaggio, al fine di non lasciare schede cespiti ‘vuote' all'interno del database.




| Funzione | Significato |
| --- | --- |
| Seleziona un cespite esistente | Pulsante per selezionare un cespite già esistente e rilevare una nuova operazione al suo interno. |
| Cancella cespite | Pulsante per cancellare il cespite selezionato. |
| Cancella i dati selezionati dalla griglia tipo ammortamento | Pulsante per cancellare la riga selezionata all'interno della griglia (inferiore) contenuta nella tab Ammortamenti |







