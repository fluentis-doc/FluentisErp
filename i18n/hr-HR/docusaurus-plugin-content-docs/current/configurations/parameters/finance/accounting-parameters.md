---
title: Parametri contabilit
sidebar_position: 2
---


La form si trova sul percorso **Home>Parametri>Amministrativa**.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).

---

La maschera dei Parametri di contabilità consente di definire i vari parametri di gestione **di ogni anno contabile** selezionato.


![](/img/it-it/configurations/parameters/finance/accounting-parameters/image01.png)

---

### Pulsanti specifici


:::note Bottoni Ribbon Bar
**Salva:** salvare le impostazioni relative all'anno

**Inserimento conto:** per inserire nella griglia Lista conti Clienti / Fornitori L'impostazione autorizza la sostituzione automatica del conto generico in causale con il sottoconto intestatario del documento fiscale, così come va a bloccare o segnalare i conti incompatibili.

**Cancella conto:** per cancellare i conti precedentemente inseriti.

**Annulla stampe definitive:** per procedere all'annullamento delle stampe definitive del libro giornale. Una volta annullata la stampa definitiva, l'utente deve resettare il contatore relativo che corrisponde al campo ***Data ultima stampa libro giornale***, nella sezione ***Dati dell'anno***, composto da tre caselle che contengono data, ultima riga e ultima pagina di stampa definitiva.

**Annulla libro ammortamenti:** per procedere all'annullamento delle stampe definitive del libro cespiti. Una volta annullata la stampa definitiva, l'utente deve resettare il contatore delle pagine relativo che corrisponde al campo ***Ultima pagina libro cespiti stampato*** nella sezione ***Dati dell'anno***.

**Sposta su:** per spostare verso l'alto la riga selezionata all'interno della griglia "Proposta centri di costo / profitto" facendogli assumere una priorità maggiore. 

**Sposta giù:** per spostare verso il basso la riga selezionata all'interno della griglia "Proposta centri di costo / profitto" facendogli assumere una priorità minore.
:::

---

## Generale

### Dati dell'anno

**(Inizio/Fine) Esercizio:** Definisce il range di date registrazione dell'esercizio selezionato. Ogni registrazione contabile, per i controlli dei campi precedenti, viene inserita nell'esercizio d'appartenenza rispetto a queste date, che non devono sovrapporsi tra i vari esercizi.

**(Inizio/Fine) Competenza in linea:** Campi facoltativi consigliati, definiscono il range di date competenza gestibile all'interno di registrazioni dell'esercizio selezionato.

**(Inizio/Fine)  Periodo in linea:** Campi obbligatori, definiscono il range di date documento gestibile all'interno di registrazioni dell'esercizio selezionato.

**Chiusura esercizio precedente:** Definisce la data di chiusura dell'esercizio precedente.

**Data ultima stampa libro giornale:** Memorizza l'ultima data stampata in definitivo per l'esercizio corrente. All'apertura di un nuovo esercizio questa data deve corrispondere con la data di chiusura dell'esercizio precedente.

**Saldo dare/avere:** Memorizza gli ultimi saldi dare/avere del libro giornale dell'esercizio selezionato stampati in definitivo. Alla creazione di un nuovo esercizio questi campi devono essere impostati a zero.

**Data / Ultima riga / Ultima pagina libro giornale stampata:** Memorizza la data, l'ultima pagina e l'ultima riga del libro giornale dell'esercizio selezionato stampata in definitivo. Alla creazione di un nuovo esercizio questo campo deve essere impostato a zero.

**Ultima pagina libro cespiti stampata:** Memorizza l'ultima pagina del libro cespiti dell'esercizio selezionato stampata in definitivo. Alla creazione di un nuovo esercizio questo campo deve essere impostato a zero.

**Causale apertura e chiusura conti:** I due campi, non obbligatori, consentono di preimpostare le causali da utilizzare nelle procedure di chiusura/apertura conti.

**Percentuale pro-rata:** Il campo consente di impostare il valore percentuale del pro-rata valido per l'esercizio selezionato. In caso non sia un'opzione utilizzare lasciare il campo vuoto o impostato al 100%.

**Tipo contabilizzazione  IVA:** Il campo consente di definire il tipo di contabilizzazione di default delle aliquote IVA sui vari sottoconti del piano dei conti.

**Chiusura mensile:** Se attivo modifica il funzionamento della procedura *Chiusura automatica conti* al fine di poterla eseguire mensilmente come richiesto in alcune localizzazioni estere (particolarmente nell'Europa dell'est). Settaggio sconsigliato per l'Italia.

**Gestione provvigioni:** Attiva le funzionalità di gestione del calcolo provvigioni agenti dal modulo Amministrazione

**Fattore di attualizzazione:** Indica il valore di incremento dei cespiti di anno in anno ai fini dell'ammortamento calcolato in modo specifico all'interno del modulo Controlling e gestito nei vari altri dettagli all'interno della tab *Ammortamento per controlling* presente nella scheda cespite, Il settaggio è richiamato anche nella form [*Categorie cespiti per il controlling*](/docs/configurations/tables/controlling/analytical-accounting/controlling-asset-categories).  
**ESEMPIO:** Inserendo un valore di 1.1 si avrà, ogni anno, un incremento del valore ammortizzabile del cespite del 10%, quindi un cespite del valore iniziale di 1000 avrà nell'anno x+1 un valore di 1.100 e nell'anno x+2 si aggiungerà un'ulteriore quota di incremento secondo la stessa logica.

**Liquidazione IVA:** Imposta la periodicità delle liquidazioni iva periodiche.

**Tipo rounding IVA:** Imposta arrotondamento IVA sempre per eccesso con la selezione 'Lire' o secondo la logica Euro.

**Registri IVA:** Definisce se stampare i registri IVA per data registrazione o per data competenza IVA all'interno del periodo selezionato. Per chi non si avvale della possibilità di fatturazione differita entro il 15 del mese successivo il risultato non cambia.

**Data competenza plafond uguale a:** Definisce se la data competenza plafond da assegnare ai movimenti IVA con aliquota collegata al plafond vada impostata in base alla data registrazione o alla data documento.

**Numerazione:** Permette di abbinare ad ogni singolo anno selezionato un numeratore per le registrazioni contabili definitive e per quelle nello stato "provvisorio". Utile nel caso di cambi periodici di politica delle numerazioni al posto della definizione fissa del numeratore nella tabella [Numerazione Registrazioni contabili](/docs/configurations/tables/fluentis-numerations). Se la numerazione non viene impostata nella presente form, di default verrà comunque cercata nella tabella *Numerazione Registrazioni contabili*. Il settaggio del numeratore per le registrazioni definitive e provvisorie è presente anche all'interno di ogni singola causale contabile (al fine di differenziare le numerazioni per ogni tipologia di scrittura, così come voluto da alcune localizzazioni estere, tipicamente quella francese) ** [*nella testata della causale* ](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/header) ** e se non viene impostato nella causale verrà letto di default quello impostato nella presente form di parametri generali. Se anche qui non è definito un numeratore verrà letto, come detto sopra, quello presente nella tabella generale.

**Autofattura:** La sezione contiene i parametri per la creazione dell'autofattura dalle registrazioni contabili per la comunicazione dati sugli acquisti allo SDI. [**Cfr. Parametri specifici** ](/docs/finance-area/e-invoice/auto-invoice/parameters) 

---

### Lista Conti Clienti / Fornitori

**L' abbinamento** dei tipi conto clienti, fornitori, banche ed Agenti con i rispettivi conti (mastri senza il codice di sottoconto) da effettuare nella presente griglia, seppur non obbligatorio, **è** <u>**caldamente raccomandato**</u> al fine di consentire vari automatismi all'interno del gestionale.  
In particolare segnaliamo due casi:  
1. Dopo la creazione dell'anagrafica di contatto, quando si assegna il tipo conto ottenendo successivamente i dettagli dell'anagrafica, il parametro permette di creare il nuovo sottoconto contabile destinato al cliente o fornitore o agente o banca in questione, collocandolo sotto il corretto conto mastro. Senza tale abbinamento questa assegnazione andrebbe inserita manualmente.  
2. All'interno delle causali contabili, particolarmente quelle per la registrazione di fatture, lo schema della registrazione che riporta un particolare conto mastro, permette, attraverso l'abbinamento in oggetto, di controllare che si stia utilizzando il corretto conto di anagrafica nella registrazione (ad esempio un conto fornitore nella registrazione di acquisto al posto di un omonimo conto ma di tipo cliente, bloccando eventualmente l'inserimento a seconda del settaggio del relativo parametro di sicurezza nella causale)  
**ATTENZIONE:** L'impostazione autorizza la sostituzione automatica del conto generico in causale con il sottoconto intestatario del documento fiscale, pertanto la mancanza del settaggio non farà funzionare correttamente gli automatismi delle causali impedendo di fatto di contabilizzare in automatico le fatture.

---

### Proposta centri di costo/profitto da: {#center-proposal}

La sezione definisce l'ordine logico di valorizzazione contabile dei centri di costo/profitto.

I criteri possibili contenuti nella sezione possono essere spostati con pulsanti *Sposta su*/ *Sposta giù*, presenti nella ribbon bar, al fine di gestire la priorità di lettura che avviene sempre dall'alto in basso, dunque il primo della lista sarà il primo letto, se non viene trovato il cdc si passa al secondo ecc...

**<u>NOTA:</u>** attualmente il criterio *Costo industriale* deve ritenersi obsoleto e pertanto la lettura di fatto avverrà prioritariamente dal piano dei conti o dall'anagrafica cliente.

---

## Conti

In questa tab si impostano nel dettaglio i conti del piano dei conti che saranno utilizzati nelle varie procedure automatiche di contabilizzazione eseguite dal gestionale.


**Sottoconto IVA acquisti**: consente di impostare il sottoconto da proporre nella rilevazione automatica del giro IVA al momento della stampa definitiva della liquidazione IVA periodica.  
**Sottoconto IVA vendite**: consente di impostare il sottoconto da proporre nella rilevazione automatica del giro IVA al momento della stampa definitiva della liquidazione IVA periodica.  
**Stato patrimoniale iniziale**: consente di impostare il sottoconto da proporre per le operazioni di apertura automatica conti.  
**Utile d'esercizio corrente**: consente di impostare il sottoconto da proporre per le operazioni di chiusura/apertura automatica conti.  
**Perdita d'esercizio corrente**: consente di impostare il sottoconto da proporre per le operazioni di chiusura/apertura automatica conti.  
**Utile d'esercizio precedente**: consente di impostare il sottoconto da proporre per le operazioni di chiusura/apertura automatica conti.  
**Perdita d'esercizio precedente**: consente di impostare il sottoconto da proporre per le operazioni di chiusura/apertura automatica conti.  
**Conto economico**: consente di impostare il sottoconto da proporre per le operazioni di chiusura automatica conti.  
**Minusvalenze**: consente di impostare il sottoconto da utilizzare nella rilevazione delle differenze economiche negative da cessione cespiti.  
**Plusvalenze**: consente di impostare il sottoconto da utilizzare nella rilevazione delle differenze economiche positive  da cessione cespiti.  
**Sopravvenienze attive**: consente di impostare il sottoconto da utilizzare nella rilevazione delle sopravvenienze attive.  
**Sopravvenienze passive**: consente di impostare il sottoconto da utilizzare nella rilevazione delle sopravvenienze passive.  
**Insussistenze attive**: consente di impostare il sottoconto da utilizzare nella rilevazione delle insussistenze attive.  
**Insussistenze passive**: consente di impostare il sottoconto da utilizzare nella rilevazione delle insussistenze passive.  
**Debiti v/erario**: consente di impostare il sottoconto da proporre nella rilevazione automatica del giro IVA al momento della stampa definitiva della liquidazione IVA periodica.  
**Crediti v/erario**: consente di impostare il sottoconto di credito verso l'Erario da proporre nella rilevazione automatica del giro IVA al momento della stampa definitiva della liquidazione IVA periodica.  
**Conto corrispettivi**: consente di impostare il sottoconto del cliente fittizio di rilevazione patrimoniale dei corrispettivi.  
**Contropartita corrispettivi**: attivo se il precedente conto corrispettivi è attivato, consente di impostare il sottoconto di contropartita economica dei corrispettivi da ventilare.  
**Aliquota IVA corrispettivi**: attivo se il precedente conto corrispettivi è attivato, consente di impostare l'aliquota IVA di rilevazione dei corrispettivi da ventilare.  
**Fatture da ricevere**: consente di impostare il sottoconto generico da utilizzare nella procedura di 'Contabilizzazione fatture da ricevere' presente nel modulo 'Fatture d'acquisto', oppure nella contabilizzazione delle fatture di acquisto di un tipo che preveda la gestione della competenza.  
**Fatture da emettere**: consente di impostare il sottoconto generico da utilizzare nella contabilizzazione delle fatture di vendita di un tipo che preveda la gestione della competenza.  
**Risconti attivi**: consente di impostare il sottoconto generico da utilizzare nella procedura delle rettifiche automatiche del modulo 'Chiusure infrannuali'.  
**Ratei attivi**: consente di impostare il sottoconto generico da utilizzare nella procedura delle rettifiche automatiche del modulo 'Chiusure infrannuali'.  
**Risconti passivi**: consente di impostare il sottoconto generico da utilizzare nella procedura delle rettifiche automatiche del modulo 'Chiusure infrannuali'.  
**Ratei passivi**: consente di impostare il sottoconto generico da utilizzare nella procedura delle rettifiche automatiche del modulo 'Chiusure infrannuali'.  
**Conto INAIL**: consente di impostare il sottoconto generico da utilizzare nella procedura di contabilizzazione del Modello F24.  
**Conto INPS**: consente di impostare il sottoconto generico da utilizzare nella procedura di contabilizzazione del Modello F24.  
**Conto altre imposte**: consente di impostare il sottoconto generico da utilizzare nella procedura di contabilizzazione del Modello F24.  
**SottoConto autofattura**: consente di impostare il sottoconto per la creazione dell'autofattura dalle registrazioni contabili per la comunicazione dati sugli acquisti allo SDI. [**Cfr. Parametri specifici** ](/docs/finance-area/e-invoice/auto-invoice/parameters).  

---

## Video Tutorials

<iframe width="1120" height="630" src="https://www.youtube.com/embed/UpAkdvW8ClQ" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>
