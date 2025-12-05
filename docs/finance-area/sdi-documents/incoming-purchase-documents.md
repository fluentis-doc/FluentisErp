---
title: Documenti Acquisto in entrata
sidebar_position: 3
---


In Fluentis è possibile, una volta configurato il servizio Fluentis Business Hub, ricevere le fatture passive provenienti dai fornitori e che transitano dal Sistema di Interscambio. Una delle modalità d visualizzazione di tali documenti è tramite la gestione delle fatture nella funzione **Documenti acquisto in entrata**. La form di gestione si presenta suddivisa in una sezione di testata, con i campi di filtro per la ricerca dei documenti, e una griglia di risultato.

- **Stato Sdi**: indica lo stato del documento una volta acquisito in Fluentis. Può essere *Non assegnato*, quando la fattura non è stata ancora abbinata ad una registrazione contabile o ad una fattura emessa dal ciclo passivo o documento emesso nei confronti di un percipiente., oppure *Ricevuta*, quando la fattura è stata abbinata.   
- **Tipo**: il codice di riferimento del tipo documento (fattura di acquisto).
- **Data doc.def.** e **Numero doc.def**:  data e numero del documento acquisito.
- **Fornitore** l'emittente del documento.
- **Nome file SdI**: il nome del file XML presente nel sistema di interscambio ed inviato da quest'ultimo al Fluentis Business Hub.
- **Data ultimo evento**: si riferisce all'ultima azione compiuta dall'operatore o all'ultima notifica ricevuta dallo SdI durante il processo di gestione del documento

*Pulsanti specifici:*

> **Visualizza**: consente di visionare il file XML selezionato con l'apertura del *Registro dei documenti SdI* dove è possibile visualizzare le azioni svolte sul documento, scaricare gli allegati e abbinare il file SdI agli acquisti, alle registrazioni oppure ai percipienti. Per maggiori dettagli su queste procedure si veda il [paragrafo 1](/docs/finance-area/sdi-documents/incoming-purchase-documents).
:::note[Opzioni di visualizzazione]
Nella Ribbon Bar è presente la *sezione* *Visualizza* con una apposito pulsante **Alterna View** con il quale quale è possibile cambiare tra due stili alternativi di visualizzazione della fattura: Stile Assosoftware e Stile Agenzia delle Entrate.
:::   
> **Apri fattura**: è abilitato solo se il documento selezionato è nello stato *Riceuta* e apre la registrazione contabile/documento di acquisto/compenso a cui il file XML risulta abbinato.   
> **Scarica allegato**: esegue il download del file XML selezionato.   
> **Importa il file XML**: apre in automatico una finestra in cui selezionare il/i file da importare nel registro dei documenti SDI.    
> **Parametri creazione registrazioni**: permette di impostare i parametri per la creazione della registrazione. Per maggiori dettagli vedere il [paragrafo 2](/docs/finance-area/sdi-documents/incoming-purchase-documents).    
> **Creazione registrazione**: permette di creare in automatico la registrazione contabile a partire dal file XML ricevuto. Per maggiori dettagli vedere il [paragrafo 3](/docs/finance-area/sdi-documents/incoming-purchase-documents).    
> **Creazione fattura di acquisto**: permette di creare la Fattura di Acquisto a partire del file XML. A seguito della creazione della fattura Fluentis effettua l'associazione automatica del DDT di Acquisto o dell'Ordine fornitore corrispondente, se presente. Per maggiori dettagli vedere il [paragrafo 4](/docs/finance-area/sdi-documents/incoming-purchase-documents).    
> **Creazione compenso**: permette di creare il compenso a partire dal documento XML. Per procedere è necessario che il Fornitore (o l'Agente) selezionato abbia il flag *Ritenuta d'acconto* attivato. 

> **Stampa / Anteprima di stampa**: permette stampare o generale l'anteprima di stampa del documento XML.

:::note[Opzioni di visualizzazione]
Nella Ribbon Bar è presente la *sezione* *Visualizza* con una apposita combo box dalla quale è possibile selezionare due modalità alternative Per la stampa: Stile Assosoftware e Stile Agenzia delle Entrate.
::: 
> **Stampa / Anteprima di stampa Allegato**: permette stampare o generale l'anteprima di stampa dell'allegato PDF al documento XML, se questo è stato incluso nel file dal Fornitore che ha inviato la fattura elettronica.

### 1. Abbinamento delle fatture elettroniche di acquisto

Dopo aver eseguito la ricerca dei documenti in entrata, utilizzando la funzione **Visualizza** oppure con l'azione doppio click in corrispondenza del file da gestire, è possibile abbinare il file XML ad una registrazione contabile o a un documento di acquisto oppure ancora ad una registrazione di compensi, rispettivamente utilizzando le funzioni:
- **Collega agli acquisti**
- **Collega alle registrazioni**
- **Collega ai percipienti**

Cliccando in corrispondenza di una delle tre funzioni sopra indicate, viene visualizzata una form di ricerca rispettivamente dei documenti di acquisto registrati nel ciclo passivo di Fluentis, delle registrazioni contabili relative agli acquisti, dei documenti relativi ai compensi di percipienti.    
Selezionando un elemento della griglia dei risultati, il documento XML sarà contrassegnato con lo stato **Ricevuta** e in corrispondenza della Transizione Documento ricevuto verrà indicata data e ora dell'abbinamento. Il documento potrà anche essere riportato nuovamente nello stato **Non assegnato**, nel caso si renda necessario tornare allo stato precedente.

### 2. Parametri creazione automatica registrazioni

All'interno della form dei “Documenti acquisto in entrata”, selezionando il pulsante *Parametri creazione registrazioni* si aprirà un pop-up all'interno del quale ogni utente può configurare le seguenti opzioni di gestione:   
1. Data registrazione proposta
2. Visualizza dati di dettaglio   

Con la prima, l'utente può scegliere se farsi assegnare l'ultima data registrazione introdotta (per il registro iva della causale preimpostata/selezionata), la data odierna, oppure la data dell'ultimo evento del file stesso (cioè la data di ricezione dallo Sdi).

Con la seconda, l'utente imposta la visualizzazione della maschera di gestione del file stesso, dove saranno già valorizzate eventuali configurazioni salvate nell'anagrafica del fornitore che ha emesso il file. In questa form sarà quindi possibile modificare eventuali opzioni già memorizzate oppure sovrascrivere quanto proposto per adattarlo all'esigenza del momento, prima di creare la registrazione. Senza questo flag, invece, la maschera di aprirebbe solo nel caso Fluentis non avesse tutti i parametri per impostare la registrazione risultante, tipicamente per una nuova tipologia iva o pagamento utilizzata dal fornitore rispetto ai precedenti già gestiti dall'utente.

### 3. Contabilizzazione automatica

Partendo dalla fattura d'acquisto ricevuta, è possibile creare in automatico la relativa registrazione contabile. Basterà selezionare il file XML e successivamente cliccare il pulsante **Creazione registrazione**.
  
Una volta premuto questo pulsante Fluentis analizzerà il file per individuare, tramite la partita IVA del cedente prestatore, il sottoconto del fornitore. Le situazioni possibili sono tre:   
1. Non viene individuato nessun fornitore; di conseguenza sarà richiesto se si desidera creare un nuovo soggetto.  
Premendo ‘Si' si aprirà automaticamente la maschera di creazione di una nuova anagrafica, nella quale sarà stata impostata la partita iva del soggetto riprendendone i dati dal database comunitario del Vies: sarà necessario entrare nella scheda ‘Dati contabili' per assegnare un codice contabile di tipo fornitore alla nuova anagrafica. E' necessario salvare per poter proseguire nella procedura, se si chiude senza salvare la procedura di contabilizzazione verrà annullata.
2. Ci sono più sottoconti di tipo fornitore collegati ad un'anagrafica con la partita iva del cedente/prestatore. In questo caso sarà necessario scegliere quale sottoconto utilizzare.
3. Il fornitore è stato individuato in modo univoco. 

Se il fornitore è già presente, o se in questo documento per la prima volta è stato inserito un articolo codificato da parte del fornitore, Fluentis individuerà il primo ‘Tipo codice articolo' presente nel file (potrebbero essercene N: codice fornitore, codice cliente, EAN13, nomenclatura, ecc. ecc.) per chiedere conferma di quale sarà la codifica articolo da memorizzare per questo soggetto.   

La fase successiva dipende dal parametro utente *Visualizza dati di dettaglio* o dal fatto che il file in gestione sia il primo per questo soggetto o se in esso è presente una codifica che Fluentis non sa come gestire per questo soggetto. Se è la prima fattura che si riceve da questo fornitore e non vi sono impostazioni predefinite nella sua anagrafica, allora si aprirà sempre una maschera nella quale Fluentis richiede di definire:   
- La **causale** da utilizzare: saranno visibili le causali che hanno come tipo documento uno di quelli codificato con il ‘TD' utilizzato dal fornitore nel file. Se non dovessero esserci causali con queste caratteristiche, la tendina mostrerà tutte le causali contabili (es.: non si è codificato una causale specifica per i documenti TD24 e si vuole utilizzare la causale dell'acquisto con il TD01).   
- Il **costo di contropartita predefinito**: in questo campo si può definire il sottoconto di costo standard da assegnare a tutte le righe articolo per le quali non si sia memorizzato un sottoconto specifico.   
- Gli **articoli** presenti in fattura: in questa griglia si ha visibilità dei codici e descrizioni di riga presenti nel file, per poter assegnare sottoconti specifici a determinati articoli presenti in fattura. Nel caso che l'articolo sia un articolo codificato, Fluentis memorizzerà questo codice per individuarlo nei documenti successivi, se l'articolo non è codificato si memorizzeranno le descrizioni di riga dell'articolo (i primi 200 caratteri).
- **Aliquote o esenzioni**: all'interno di questa griglia avremo il castelletto iva, con la percentuale applicata dal fornitore oppure la natura dell'esenzione utilizzata. Fluentis andrà a memorizzare la percentuale (es. 22.00) oppure il codice d'esenzione utilizzato dal fornitore con la relativa aliquota selezionata dall'utente.   

Ognuna di queste tipologie di dato prevede l'opzione di salvataggio della selezione effettuata, in modo da riutilizzarla nelle fatture che si riceveranno in seguito dallo stesso soggetto.

Nel caso in cui questo non sia il primo file e l'utente abbia impostato il flag *Visualizza dati di dettaglio*, questa stessa maschera sarà visualizzata con già assegnati eventuali valori già memorizzati precedentemente nell'anagrafica del fornitore che ha emesso il file, per consentirne una modifica prima della creazione della registrazione contabile.

Nel caso in cui questo non sia il primo file e l'utente non abbia impostato flag *Visualizza dati di dettaglio*, allora potrebbe aprirsi una maschera di configurazione per i soli valori che Fluentis non sa come gestire rispetto alle configurazioni già memorizzate nell'anagrafica del fornitore che ha emesso il file: ad esempio è la prima volta che emette fattura con tipo pagamento MP12 invece che il precedente MP05, o un nuovo codice di esenzione iva.

La fase conclusiva sarà la creazione della registrazione contabile: una volta confermate le configurazioni inserite, oppure direttamente dopo la lettura del file se queste fossero già state memorizzate e l'utente non avesse impostato il flag *Visualizza dati di dettaglio*, si aprirà la registrazione contabile valorizzata con i dati del file stesso.   
La registrazione può essere ulteriormente modificata in questa fase, ma queste modifiche non andranno a influire sulle configurazioni già memorizzate nella fase precedente.

Nel caso in cui non si completasse il salvataggio della registrazione, Fluentis annullerà le operazioni eseguite sul file che resterà nello stato *Non assegnato*: le eventuali configurazioni già salvate nel processo, invece, saranno mantenute all'interno dell'anagrafica fornitore.

#### 3.1 Anagrafica fornitori: Configurazione importazione fatture elettroniche

Le configurazioni memorizzate nel corso della gestione dei vari files sono memorizzate all'interno delle varie anagrafiche fornitori nella scheda *Configurazione importazione fatture elettroniche*. In questa griglia ritroviamo le sezioni che abbiamo memorizzato in precedenza.

Nel primo campo indichiamo cosa andiamo a memorizzare nella riga: il tipo documento, il tipo di cessione/prestazione, la percentuale iva e la sua natura, il tipo di pagamento. A seconda di questa tipologia di riga si attiveranno i campi successivi: nel ‘Codice P.A.' saranno visualizzati la lista dei codici ufficiali che si possono utilizzare nei file (dai tipi documento, alle nature iva, al tipi pagamento, …), nelle colonne successive si indicheranno la causale, piuttosto che l'aliquota iva, o il tipo pagamento, o il sottoconto contabile di Fluentis. Nel campo ‘Valore fornitore', invece, avremo tipicamente i dati ‘liberi' che il fornitore può inserire nel file: in particolare, la percentuale iva (22.00, 10.00 ecc.) ma soprattutto il codice o la descrizione della riga articolo.

Il ‘costo di contropartita predefinito' (punto 2 dell'elenco sopra), viene memorizzato nel campo standard del sottoconto di contropartita dell'anagrafica. Il “Tipo codice articolo fornitore”, infine, è presente nella scheda ‘Informazioni fiscali'.

È quindi possibile intervenire anche in questi punti per rivedere le impostazioni già memorizzate e modificarle in vista delle contabilizzazioni successive.

#### 3.2 Cancellazione di una registrazione creata automaticamente

Procedere nel seguente modo:

- Annullare il collegamento automatico tra il documento SDI e la registrazione riportando il documento SDI nello stato **non assegnato** (utilizzando l'apposita tendina raggiungibile sia dalla maschera con la lista documenti SDI in entrata, sia dalla maschera con la lista delle registrazioni contabili)

- Procedere cancellando la registrazione contabile normalmente come fosse inserita dalla procedura di prima nota.

### 4. Creazione fattura di acquisto ed Evasione DDT/Ordine

Partendo dal documento XML ricevuto, è possibile creare in automatico la relativa fattura di acquisto mediante il pulsante **Creazione fattura d'acquisto**.
  
Una volta premuto questo pulsante Fluentis analizzerà il file per individuare, tramite la partita IVA del cedente prestatore, il sottoconto del fornitore. Le situazioni possibili sono analoghe a quelle del punto precedente.   

Se è la prima fattura che si riceve da questo fornitore e non vi sono impostazioni predefinite nella sua anagrafica, allora si aprirà una maschera nella quale definire: 
- Il **Tipo fattura acquisto** da scegliere tra quelli già codificati nell'apposita tabella. 
- Il **Tipo fatturato acquisti**: dato facoltativo e modificabile anche a livello di singola riga articolo. 
- L'**Unità di misura** da utilizzare nel caso in cui non sia riportato sulla riga articolo. 
- Gli **articoli** presenti in fattura: nel caso che l'articolo sia un articolo codificato, Fluentis memorizzerà questo codice per individuarlo nei documenti successivi, se l'articolo non è codificato si memorizzeranno le descrizioni di riga dell'articolo (i primi 200 caratteri).   
- **Aliquote o esenzioni**: all'interno di questa griglia avremo il castelletto iva, con la percentuale applicata dal fornitore oppure la natura dell'esenzione utilizzata.   

Ognuna di queste tipologie di dato prevede l'opzione di salvataggio della selezione effettuata, in modo da riutilizzarla nelle fatture che si riceveranno in seguito dallo stesso soggetto.   

Una volta confermati i dati si aprirà la fattura di Acquisto appena creata.    
Al salvataggio della fattura Fluentis effettua una ricerca sui DDT di Acquisto o sugli Ordini Fornitore non evasi per procedere con l'evasione automatica. 

#### 4.1 Associazione fattura con DDT/Ordine di Acquisto

Quando la nuova fattura viene salvata Fluentis avvia autmaticamente la ricerca dei DDT o degli ordini da associare alla fattura. Se trova un DDT o un ordine da associare all'intera fattura o ad alcune righe articolo, imposta il documento (o la riga del documento) evaso e riporta in fattura il riferimento al DDT o all'ordine, negli appositi campi. Le priorità di ricerca sono le seguenti:
1.	Ricerca DDT di Acquisto aventi la stessa data e lo stesso numero documento indicato nel file XML (oppure con gli stessi valori nei campi *Nostro Riferimento* e/o *Vostro Riferimento*). Se trova un DDT con questi dati procede con la verifica degli articoli (prima per codice articolo, poi per descrizione). Se anche gli articoli corrispondono a quelli inseriti in fattura viene effettuata l'evasione, eventualmente parziale, del DDT.
2. La ricerca viene effettuata in tutti i DDT non evasi intestati allo stesso fornitore della fattura, ordinandoli per data e ricercando per riga articolo. Gli articoli della fattura possono essere collegati a diversi DDT.
3.	Se ci sono DDT non evasi per il fornitore, ma alcune (o tutte) le righe non possono essere collegate alla fattura, sarà visualizzata la form di *associazione manuale*. 
4.	Se non ci sono DDT di acquisto per il fornitore, la ricerca sarà effettuata sugli Ordini fornitore iniziando dai Dati ordine di acquisto: viene cercato un ordine avente la stessa data e numero documento uguale all’id documento indicato nel file XML (oppure con gli stessi valori nei campi *Nostro Riferimento* e/o *Vostro Riferimento*). Se viene identificato l'ordine, procede con la verifica degli articoli in base al *Riferimento numero linea*; in caso di esito negativo effettuerà una ricerca per codice e poi per descrizione articolo.
5.	Se non viene identificato l’ordine corrispondente effettua una ricerca su tutti gli ordini non evasi intestati al fornitore della fattura, confrontando poi la singola riga articolo. La fattura può evadere diversi ordini.
6.	Se non risulta possibile effettuare l’associazione di alcune (o di tutte) le righe, si aprirà la form di *Associazione manuale*. Il alternativa l'ordine sarà impostato *Evaso* (o *Parz. evaso*) e le righe articolo della fattura riporteranno il riferimento all'ordine identificato. 

La form di **Associazione manuale** viene aperta nei casi in cui l’evasione non può essere effettuata automaticamente a seguito di creazione della fattura oppure quando viene cliccato il pulsante *Sdi – Chiusura documenti* nella ribbon bar della fattura di acquisto.    
In questa form saranno visualizzati tutti gli ordini e i DDT di acquisto intestati al fornitore e non ancora evasi, in modo che l'utente possa indicare manualmente, per ciascuna riga articolo della fattura, il DDT o l'ordine corrispondente.
