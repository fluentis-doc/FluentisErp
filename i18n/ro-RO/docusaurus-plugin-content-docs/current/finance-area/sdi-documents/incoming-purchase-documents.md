---
title: Documenti Acquisto in entrata
sidebar_position: 3
---



**In questa pagina viene illustrato**:


 - **SCARICO AUTOMATICO DELLE FATTURE DI ACQUISTO DALLO SDI**
 - **IMPORTAZIONE MANUALE FATTURE ELETTRONICHE

**
 - **ABBINAMENTO DELLE FATTURE ELETTRONICHE D'ACQUISTO ALLE REGISTRAZIONI O DOCUMENTI**
 - **CONTABILIZZAZIONE AUTOMATICA DELE FATTURE ELETTRONICHE D'ACQUISTO**

In Fluentis è possibile, una volta configurato il servizio Fluentis Business Hub, ricevere le fatture passive provenienti dai fornitori e che transitano dal Sistema di Interscambio.

Una delle modalità d visualizzazione di tali documenti è tramite la gestione delle fatture nella funzione **Documenti acquisto in entrata**. La form di gestione si presenta suddivisa in una sezione di testata, con i campi di filtro per la ricerca dei documenti, e una griglia di risultato.

-      **Stato Sdi**: lo stato del documento una volta acquisito in Fluentis:


 - **Non assegnato** : la fattura non è stata ancora abbinata ad una registrazione contabile o ad una fattura emessa dal ciclo passivo o documento emesso nei confronti di un percipiente


 - **Ricevuta** : la fattura è stata abbinata

-      **Tipo**: il codice di riferimento del tipo documento (fattura di acquisto)

-      **Data doc.def., Numero doc.def:**  data e numero del documento acquisito

-      **Fornitore:** l'emittente del documento

-      **Nome file SdI**: il nome del file XML presente nel sistema di interscambio ed inviato da quest'ultimo al Fluentis Business Hub.

-      **Data ultimo evento**: si riferisce all'ultima azione compiuta dall'operatore o all'ultima notifica ricevuta dal SdI durante il processo di gestione del documento

Nel ribbon menu:

-       il pulsante  **![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image01.png) Apri documento **è abilitato solo se il documento selezionato è nello stato **RICEVUTA** e apre la registrazione contabile/documento di acquisto/fattura compenso a cui il file XML risulta abbinato

-      il pulsante ![](/img/neutral/common/view.png) **Visualizza** consente di visionare il file XML selezionato  con l'apertura del **Registro documenti SdI  **dove è possibile visualizzare le azioni svolte sul documento e scaricare gli allegati****:

-     il pulsante   ![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image03.png)”**Scarica allegato**” esegue il download del file XML selezionato





****IMPORTAZIONE MANUALE FATTURE ELETTRONICHE

****

Per l'importazione manuale di fatture elettroniche è stato progettato un apposito comando  ![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image04.png) il quale aprirà in automatico una finestra dove andare a selezionare il/i file da importare nel registro dei documenti SDI.

**ABBINAMENTO DELLE FATTURE ELETTRONICHE D'ACQUISTO**

Dopo aver eseguito la ricerca dei documenti in entrata,  utilizzando la funzione ![](/img/neutral/common/view.png)**Visualizza  **oppure con l'azione doppio click in corrispondenza del file da gestire, è possibile abbinare il file XML ad una registrazione contabile o a un documento di acquisto oppure ancora ad una registrazione di compensi, cliccando in corrispondenza della riga relativa ad un file XML, entrando nel dialogo di gestione del file e utilizzando le funzioni

-  ![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image06.png)  **Collega agli acquisti**  oppure

- ![](/img/neutral/common/posting.png)**Collega alle registrazioni **oppure ancora

-**![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image08.png)Collega ai percipienti**

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image09.png)

Cliccando in corrispondenza di una delle tre funzioni sopra indicate, viene visualizzato un dialogo di ricerca rispettivamente dei documenti di acquisto registrati nel ciclo passivo di Fluentis, nelle registrazioni contabili relative agli acquisti, nei documenti relativi ai compensi di percipienti.

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image10.png)

Eseguendo la ricerca tramite il pannello di filtro presentato nel dialogo di ricerca e selezionando un elemento della griglia dei risultati,   il documento XML viene contrassegnato con lo stato **Ricevuta**, in corrispondenza della Transizione Documento ricevuto viene indicata data e ora dell'abbinamento. Il documento potrà anche essere modificato nuovamente nello stato **Non assegnato** nel caso si renda necessario tornare allo stato precedente.

** CONTABILIZZAZIONE AUTOMATICA**

Fluentis inoltre, dà la possibilità, partendo dalla fattura d'acquisto ricevuta, di creare in automatico la relativa registrazione contabile. Basterà selezionare la fattura d'acquisto desiderata e successivamente cliccare il pulsante “**CREAZIONE REGISTRAZIONE**”.

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image11.png)

SOMMARIO DI MASSIMA:

Se il fornitore indicato nella fattura non è presente all'interno delle anagrafiche contatti, comparirà una finestra che darà la possibilità di creare l'anagrafica relativa. Il software compilerà in maniera automatica le generalità del fornitore e basterà solamente compilare i campi specifici.

Successivamente si inseriranno i valori da utilizzare per la registrazione, specificando: la causale, il costo/ricavo di contropartita predefinito, l'aliquota IVA utilizzata ed infine la tipologia di pagamento.

Un flag darà la possibilità di salvare le impostazioni per le registrazioni successive, senza l'obbligo di andarle ad inserire ogni volta.

In automatico dando l''OK' si verrà indirizzati nella Tab delle registrazioni contabili dove è possibile controllare il corretto inserimento di dati e volendo andare ad integrare la registrazione.

Andando a salvare  lo stato della fattura da "non esaminata" si aggiornerà a “Ricevuta”.

**DETTAGLI FUNZIONE DI CREAZIONE AUTOMATICA REGISTRAZIONI**

**PARAMETRI CREAZIONE REGISTRAZIONE**

All'interno della form dei “Documenti acquisto in entrata”, selezionando il pulsante ‘Parametri creazione registrazioni' si aprirà questa configurazione

 ![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image12.png)

all'interno della quale ogni utente può configurare le seguenti opzioni di gestione:

A)     Data registrazione proposta

B)     Visualizza dati di dettaglio

Con la prima, l'utente può scegliere se farsi assegnare l'ultima data registrazione introdotta (per il registro iva della causale preimpostata/selezionata), la data odierna, oppure la data dell'ultimo evento del file stesso (cioè la data di ricezione dallo Sdi)

Con la seconda, l'utente imposta la visualizzazione della maschera di gestione del file stesso, dove saranno già valorizzate eventuali configurazioni salvate nell'anagrafica del fornitore che ha emesso il file. In questa form sarà quindi possibile modificare eventuali opzioni già memorizzate oppure sovrascrivere quanto proposto per adattarlo all'esigenza del momento, prima di creare la registrazione. Senza questo flag, invece, la maschera di aprirebbe solo nel caso Fluentis non avesse tutti i parametri per impostare la registrazione risultante, tipicamente per una nuova tipologia iva o pagamento utilizzata dal fornitore rispetto ai precedenti già gestiti dall'utente.

**FLUSSO OPERATIVO**

Quando il file che è stato selezionato è in stato ‘Non assegnato', cioè non collegato ad una registrazione contabile, si può procedere alla sua contabilizzazione tramite il pulsante ‘Creazione registrazione':

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image13.png)

Una volta premuto questo pulsante Fluentis analizzerà il file per individuare, tramite la partita iva del cedente prestatore, il sottoconto del fornitore. A seconda dei casi potrà apparire uno dei seguenti messaggi:

**caso 1**, non viene individuato nessun fornitore

viene richiesto di creare un nuovo soggetto

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image14.png)

Premendo ‘Si' si aprirà automaticamente la maschera di creazione di una nuova anagrafica, nella quale sarà stata impostata la partita iva del soggetto riprendendone i dati dal database comunitario del Vies: sarà necessario entrare nella scheda ‘Dati contabili' per assegnare un codice contabile di tipo fornitore alla nuova anagrafica. E' necessario salvare per poter proseguire nella procedura, se si chiude senza salvare la procedura di contabilizzazione verrà annullata con questo messaggio

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image15.png)

**caso 2**, ci sono più sottoconti di tipo fornitore collegati ad un'anagrafica con la partita iva del cedente/prestatore

verrà richiesto quale sottoconto utilizzare con questa maschera:

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image16.png)

**caso 3**, il fornitore è stato individuato in modo univoco

se il fornitore è già presente, o se in questo documento per la prima volta è stato inserito un articolo codificato da parte del fornitore, Fluentis individuerà il primo ‘Tipo codice articolo' presente nel file (potrebbero essercene N: codice fornitore, codice cliente, EAN13, nomenclatura, ecc. ecc.) per chiedere conferma di quale sarà la codifica articolo da memorizzare per questo soggetto, ad esempio

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image17.png)

La fase successiva dipende dal parametro utente ‘Visualizza dati di dettaglio' o dal fatto che il file in gestione sia il primo per questo soggetto o se in esso è presente una codifica che Fluentis non sa come gestire per questo soggetto. Se è la prima fattura che si riceve da questo fornitore e non vi sono impostazioni predefinite nella sua anagrafica, allora si aprirà sempre una maschera come questa

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image18.png)

nella quale Fluentis richiede di definire

1)     qual è la causale da utilizzare

2)     qual è il costo di contropartita predefinito

3)     visualizza la lista degli articoli presenti in fattura, per dare la possibilità di associare un sottoconto specifico a determinati articoli

4)     visualizza la lista delle aliquote o esenzioni applicate nel castelletto iva del file

5)     visualizza le tipologie di pagamento utilizzate nel file

Ognuna di queste tipologie di dato prevede l'opzione di salvataggio della selezione effettuata, in modo da riutilizzarla nelle fatture che si riceveranno in seguito dallo stesso soggetto.

Nel caso in cui questo non sia il primo file e l'utente abbia impostato il flag ‘Visualizza dati di dettaglio', questa stessa maschera sarà visualizzata con già assegnati eventuali valori già memorizzati precedentemente nell'anagrafica del fornitore che ha emesso il file, per consentirne una modifica prima della creazione della registrazione contabile.

Nel caso in cui questo non sia il primo file e l'utente non abbia impostato flag ‘Visualizza dati di dettaglio', allora potrebbe aprirsi una maschera di configurazione per i soli valori che Fluentis non sa come gestire rispetto alle configurazioni già memorizzate nell'anagrafica del fornitore che ha emesso il file: ad esempio è la prima volta che emette fattura con tipo pagamento MP12 invece che il precedente MP05, o un nuovo codice di esenzione iva.

Vediamo ora, nella maschera suddetta, quali sono le caratteristiche specifiche delle 5 tipologie suddette

1) causale

 nella causale da utilizzare saranno visibili le causali che hanno come tipo documento uno di quelli codificato con il ‘TD' utilizzato dal fornitore nel file. Se non dovessero esserci causali con queste caratteristiche, la tendina mostrerà tutte le causali contabili (es.: non si è codificato una causale specifica per i documenti TD24 e si vuole utilizzare la causale dell'acquisto con il TD01)

2) contropartita predefinita

 in questo campo si può definire il sottoconto di costo standard da assegnare a tutte le righe articolo per le quali non si sia memorizzato un sottoconto specifico

3) griglia articoli

 in questa griglia si ha visibilità dei codici e descrizioni di riga presenti nel file, per poter assegnare sottoconti specifici a determinati articoli presenti in fattura. Nel caso che l'articolo sia un articolo codificato, Fluentis memorizzerà questo codice per individuarlo nei documenti successivi, se l'articolo non è codificato si memorizzeranno le descrizioni di riga dell'articolo (i primi 200 caratteri).

4) griglia iva

 all'interno di questa griglia avremo il castelletto iva, con la percentuale applicata dal fornitore oppure la natura dell'esenzione utilizzata. Fluentis andrà a memorizzare la percentuale (es. 22.00) oppure il codice d'esenzione utilizzato dal fornitore con la relativa aliquota selezionata dall'utente

5) griglia pagamenti

 sarà presentata la lista dei codici pagamento (con l'eventuale descrizione utilizzata nel file) per poterne assegnare la corrispondente tipologia di Fluentis

Avremo quindi memorizzato le varie opzioni da utilizzare, come in questo esempio:

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image19.png)

La fase conclusiva sarà la creazione della registrazione contabile: una volta confermate le configurazioni inserite, oppure direttamente dopo la lettura del file se queste fossero già state memorizzate e l'utente non avesse impostato il flag ‘Visualizza dati di dettaglio', si aprirà la registrazione contabile valorizzata con i dati del file stesso.

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image20.png)

La registrazione può essere ulteriormente modificata in questa fase, ma queste modifiche non andranno a influire sulle configurazioni già memorizzate nella fase precedente.

Nel caso in cui non si completasse il salvataggio della registrazione, Fluentis annullerà le operazioni eseguite sul file che resterà nello stato ‘Non assegnato': le eventuali configurazioni già salvate nel processo, invece, saranno mantenute all'interno dell'anagrafica fornitore.

**ANAGRAFICA FORNITORI: CONFIGURAZIONE IMPORT F.E.**

Le configurazioni memorizzate nel corso della gestione dei vari files sono memorizzate all'interno delle varie anagrafiche fornitori nella scheda ‘Configurazione import F.E.'.

Ecco il risultato della memorizzazione nell'esempio utilizzato:

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image21.png)

In questa griglia ritroviamo, in pratica, le sezioni che abbiamo memorizzato in precedenza.

Nel primo campo indichiamo cosa andiamo a memorizzare nella riga: il tipo documento, il tipo di cessione/prestazione, la percentuale iva e la sua natura, il tipo di pagamento. A seconda di questa tipologia di riga si attiveranno i campi successivi: nel ‘Codice P.A.' saranno visualizzati la lista dei codici ufficiali che si possono utilizzare nei file (dai tipi documento, alle nature iva, al tipi pagamento, …), nelle colonne successive si indicheranno la causale, piuttosto che l'aliquota iva, o il tipo pagamento, o il sottoconto contabile di Fluentis. Nel campo ‘Valore fornitore', invece, avremo tipicamente i dati ‘liberi' che il fornitore può inserire nel file: in particolare, la percentuale iva (22.00, 10.00 ecc.) ma soprattutto il codice o la descrizione della riga articolo.

Il ‘costo di contropartita predefinito' (punto 2 dell'elenco sopra), viene memorizzato nel campo standard del sottoconto di contropartita dell'anagrafica, qui:

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image22.png)

Il “Tipo codice articolo fornitore”, infine, è presente nella scheda ‘Informazioni fiscali':

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image23.png)

È quindi possibile intervenire anche in questi punti per rivedere le impostazioni già memorizzate e modificarle in vista delle contabilizzazioni successive.








