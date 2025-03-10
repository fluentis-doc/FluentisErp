---
title: Inserimento causali di contabilità generale
sidebar_position: 3
---

:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**](/docs/guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata

Le causali create dalla procedura di Fast Start permettono di eseguire:

- Scritture di acquisto e vendita **Italia**
- Acquisto e vendita in **Reverse charge** in Italia, giroconto acquisti e relativa autofatturazione
- Scritture di acquisto e vendita **UE**, giroconto acquisti e relativa autofatturazione
- Scritture di acquisto e vendita **Extra UE** e relativa autofatturazione con giroconto
- Note di accredito a storno delle precedenti
- Acquisto e vendita **cespiti**
- Corrispettivi
- **Incassi e pagamenti**
- Portafoglio attivo (emissione e presentazione Ri.Ba e incasso, insoluti)
- Scritture di prima nota libere
- Altre scritture in prima nota quali paghe ecc.
- Giriconto IVA
- Versamenti imposte e contributi
- Scritture di rettifica quali ratei e risconti attivi e passivi
- Ammortamenti
- Scritture di chiusura e riapertura conti
:::

## **1. Testata**

#### Campi specifici

**Causale**: rappresenta il codice alfanumerico di 5 caratteri che deve essere univoco.

**Descrizione causale**: rappresenta la descrizione della causale.

**Tipo movimento**: rappresenta il tipo di movimento della registrazione. Si tratta di una tabella fissa interna, non disponibile in modifica all'utente, che suddivide le causali non IVA dalle varie tipologie di movimento IVA.

**Tipo documento**: la tabella è precaricata ma può essere modificata/integrata dall'utente. In questa tabella, in particolare, sono d'interesse le righe che prevedono i flag **‘Nota Accredito'** e **‘Nota di variazione'**: per l'Accredito, infatti, la procedura controlla che la sezione IVA sia valorizzata con importi negativi (un controllo di coerenza dei segni, inoltre, viene effettuata sulla contabilizzazione delle note di credito dall'area vendita/acquisto: significa che non possono essere presenti righe con importi positivi e contemporaneamente altre per un altro sottoconto con importi negativi); per la ‘Nota di variazione' la procedura andrà ad attivare, sempre nella sezione IVA della registrazione, un flag di identificazione delle righe relative alle note di variazione e una data di riferimento del documento da rettificare ai fini dell'IVA. Non si confonda questa data con il campo **Comp. IVA**: la nota di accredito (o comunque di variazione) rettificherà l'iva del periodo indicato in quest'ultimo campo. 

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/header/image02.png)

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/header/image03.png)
 
**Numerazione**: le combo box permettono di abbinare ad ogni causale contabile, rispettivamente per le registrazioni definitive e provvisorie, una particolare numerazione. Questo tipo di gestione è richiesto in alcune localizzazioni estere. Cfr [*Tabella Numerazione Registrazioni contabili* ](/docs/configurations/tables/fluentis-numerations). Se non viene definita una particolare numerazione valida per la causale, di default verrà cercata una numerazione eventualmente impostata nei ** [*Parametri generali di contabilità* ](/docs/configurations/parameters/finance/accounting-parameters/) e in mancanza di un'impostazione sarà letta la tabella generale *Numerazione registrazioni contabili***

**Libri contabili**: combo box che rinvia ad apposita tabella dove definire un codice e descrizione da richiamare poi nella causale al fine di raggruppare e categorizzare le causali stesse. Queste categorie potrebbero essere anche abbinate alle differenti numerazioni di cui al campo precedente (utile per localizzazioni estere dove vengono tenuti separati i libri giornali a seconda del tipo di scrittura contabile). Esempio: gli acquisti potrebbero avere il numeratore a) legato al libro contabile "Acquisti", mentre le vendite il numeratore b) legato al libro "Vendite", le scritture di banca (incassi / pagamenti) il numeratore c) legato al libro "Scritture banca" ecc...

**Data fine validità**: è possibile bloccare l'utilizzo di una causale contabile a partire da questa data. Non sarà visibile nella lista delle causali dalla data successiva.

**Registro incassi e pagamenti**: NON ATTIVO (identifica le causali da riportare nel registro incassi/settlement della contabilità semplificata professionisti).

**Professionisti**: NON ATTIVO (identifica una causale per la contabilità dei professionisti).

### 1.1 Dettaglio attributi 

#### Campi specifici

**Causale automatica**: al momento del salvataggio di una registrazione basata sulla causale che è in modifica il programma andrà a creare automaticamente una seconda registrazione basata sulla causale indicata in questo campo. Affinché la seconda registrazione sia compilata correttamente si devono rispettare le seguenti logiche di relazione tra le due registrazioni:

a) il primo caso è quello in cui la prima registrazione è con tipo movimento IVA acquisti IntraCEE e la seconda con Giroconto IVA acquisti IntraCEE, nella quale il legame è dato dalla rilevazione dell'IVA Acquisti anche nel registro Vendite; (allo stesso modo si ha lil caso del reverse charge, utilizzando i tipi movimento IVA acquisti in reverse charge e Giroconto IVA acquisti reverse charge);

b) il secondo caso è quello in cui la prima registrazione apre una partita mentre la seconda ne opera la chiusura immediata; 

c) il terzo caso è relativo alla registrazione di chiusura di una partita nata con tipo movimento ‘IVA vendita a Enti pubblici' per la quale l'IVA è in sospensione, caso in cui si collega una registrazione di Giroconto IVA in sospensione;

d) il quarto caso è l'acquisto con IVA in sospensione, inverso al precedente 

e) il quinto caso è quello in cui la prima registrazione è IVA, mentre la seconda è valorizzata con la logica dei sottoconti automatici impostati nel piano dei conti 

f) quando non sono presenti i casi precedenti il programma cercherà di impostare i dati della seconda registrazione sulla base dei dati IVA della prima; in alternativa la seconda registrazione sarà generata riportando i sottoconti previsti senza alcun valore impostato.

**Tipo autofattura automatica**: vedere la sezione specifica alle [**configurazioni delle autofatture automatiche**](/docs/finance-area/e-invoice/auto-invoice/ledger-templates)

**Inversione colonne se importo è minore di zero**: È possibile fare in modo che il programma inverta le colonne Dare/Avere di movimentazione sulla base del segno del movimento IVA, tipicamente nel caso di registrazione di note di accredito (di questo campo è consigliato la selezione per tutte le registrazioni IVA).

**Avviso**: Il campo è attivo solo se il precedente è stato attivato, consiste nel ritornare all'utente un messaggio di avvertimento dell'inversione del segno. Il flag è ininfluente per causali utilizzate nelle procedure automatiche di contabilizzazione.

**Consenti sottoconti con valori a zero**: con questo flag la procedura:

a) consentirà di inserire manualmente righe con importo sia dare che avere uguale a zero 

b) al momento del salvataggio della registrazione NON andrà a cancellare le righe riportate dalla causale e non valorizzate dall'utente nella registrazione 

c) le righe che valorizzano nel libro giornale il debito/credito IVA questo flag comporterà comunque la cancellazione dell'importo a zero ma solo a condizione che non sia stato anche inserito il flag ‘Consenti Iva 0 in LG' nella tabella delle [Aliquote modalità IVA](/docs/configurations/tables/finance/vat-rates).

#### ESEMPI:

<details>
 
<summary>Clicca per l'esempio</summary>

- segliendo di impostare il flag disattivato si può sfruttare la funzionalità per inserire nel modello di registrazione proposto dalla causale tutti i conti potenzialmente utili i quali, se non verranno movimentati, non saranno poi mantenuti al momento del salvataggio della registrazione. Si pensi ad esempio alle scritture dei dipendenti, buste paga ecc... per i quali non sempre si utilizzano gli stessi conti ogni mese benchè i conti possibili siano svariati.

- scegliendo di mantenere il flag attivo potranno essere inseriti sottoconti con movimento a zero, situazione che si verifica spesso registrando le utenze telefoniche o elettriche, ad esempio. 

**Prototipo della registrazione**: questa è la sezione fondamentale (ma non obbligatoria) della causale di contabilità, nella quale va caricato lo schema tipico del tipo di registrazione contabile da gestire. È possibile inserire anche codici generici di conto (es. il conto fornitori), che saranno aggiornati automaticamente dal programma sulla base della lista conti clienti/fornitori inseriti nei Parametri di contabilità generale. Questi sottoconti, così come le sezioni dare/avere, guideranno le valorizzazioni contabili, che saranno comunque modificabili nel corso del caricamento manuale della registrazione.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image02.png)
 
</details>

#### [Tipo importo](#amount-type)

Meritano spiegazioni specifiche i codici di Tipo importo, fondamentali per valorizzare automaticamente il libro giornale sulla base dei dati iva e di partitario movimentati nella registrazione. In particolare:

**Manuale**: indica che la riga sarà valorizzata manualmente dall'utente all'atto della registrazione;

**Imponibile sottoconto**: indica che la riga sarà aggiornata per ogni codice di sottoconto inserito nella sezione Iva con l'importo ottenuto dall'imponibile della/e riga/e stessa/e; l'uso di questo tipo importo è **consigliato tipicamente per tutti i ricavi inseriti nelle causali di vendita**;

**Totale imponibile**: indica che la riga sarà aggiornata con il totale imponibile della registrazione: nessuna considerazione sarà effettuata sul codice di conto/sottoconto inserito. ESEMPI: Vendita con regime dello split payment o vendita intra comunitaria; 

**Totale imposta**: indica che la riga sarà aggiornata con il totale imposta della registrazione: nessuna considerazione sarà effettuata sul codice di conto/sottoconto inserito;

**Imposta detraibile**: indica che la riga sarà aggiornata con il totale dell'imposta detraibile della registrazione: nessuna considerazione sarà effettuata sul codice di conto/sottoconto inserito;

**Tot. Doc/Registrazione**: indica che la riga sarà aggiornata con il codice del sottoconto intestatario della registrazione (se conforme alle combinazioni inserite nei Parametri di contabilità) per il valore totale del documento/registrazione;

**Imponibile+Imposta Indetraibile**: indica che la riga sarà aggiornata con il totale imponibile sommato del totale imposta indetraibile della registrazione: nessuna considerazione sarà effettuata sul codice di conto/sottoconto inserito; Tipo di movimento di scarsa applicazione - conviene utilizzare  **Imp. Sott.+Imposta indetr. Sott**.

**50% Imponibile**: indica che la riga sarà aggiornata con il 50% del totale imponibile della registrazione: nessuna considerazione sarà effettuata sul codice di conto/sottoconto inserito;

**50% Imponibile+Iva indetraibile**: indica che la riga sarà aggiornata con il 50% del totale imponibile della registrazione sommato del totale dell'iva indetraibile della stessa: nessuna considerazione sarà effettuata sul codice di conto/sottoconto inserito;

**50% Impon.+ 50% Iva Indetraibile**: indica che la riga sarà aggiornata con il 50% del totale imponibile della registrazione sommato del 50% dell'iva indetraibile della stessa: nessuna considerazione sarà effettuata sul codice di conto/sottoconto inserito;

CREATI PER RAGIONI FISCALI E DA CONSIDERARE OBSOLETI

**Imp. Sott.+Imposta indetr. Sott**.: indica che la riga sarà aggiornata per ogni codice di sottoconto inserito nella sezione IVA con l'importo ottenuto dalla somma dell'imponibile della/e riga/e stessa/e e della relativa imposta indetraibile; **l'uso di questo tipo importo è consigliato tipicamente per tutti i costi inseriti nelle causali d'acquisto;**

**Arrotondamenti Attivi**: indica che la riga sarà aggiornata con l'importo degli arrotondamenti attivi; l'uso è da collegarsi a causali di chiusura partite;

**Arrotondamenti Passivi**: indica che la riga sarà aggiornata con l'importo degli arrotondamenti passivi; l'uso è da collegarsi a causali di chiusura partite;

**Importo Sottoconto**: indica che la riga sarà aggiornata con l'importo dei pagamenti partite inserite nella registrazione, secondo il segno del pagamento stesso;

**Utile Diff. Cambi**: indica che la riga sarà aggiornata con il sottoconto di utile della divisa di riferimento della differenza cambi, per l'importo ottenuto secondo il differenziale di valorizzazione tra cambio storico e cambio di chiusura della partita; in caso sia stato impostato il flag di chiusura al cambio storico la riga non avrà valorizzazione alcuna;

**Perd. Diff. Cambi**: indica che la riga sarà aggiornata con il sottoconto di perdita della divisa di riferimento della differenza cambi, per l'importo ottenuto secondo il differenziale di valorizzazione tra cambio storico e cambio di chiusura della partita; in caso sia stato impostato il flag di chiusura al cambio storico la riga non avrà valorizzazione alcuna;

**Automatico**: tipo importo utilizzato in alcune procedure di contabilizzazione automatica.

*ESEMPIO*: Si imposta nelle causali di vendita cespite per gestire la plus-minusvalenza, per il resto è impostato dal sistema nelle procedure di contabilizzazione automatica.


La griglia si completa con: 

- un campo di codifica delle contropartite (ne è sconsigliato l'uso: in contabilità è già presente una stampa - "Estratto conto con contropartite" - che visualizza le contropartite indipendentemente da questa impostazione). Inoltre attivando il flag che permtte di visualizzare i sottoconti di contropartita (tab Dettaglio Registrazione)

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image03.png)

questi campi saranno gestiti in automatico; per questo motivo non è consigliato gestirli manualmente imponendoli nella causale.

In corripondenza dei conti iva a credito (o a debito) e costo (o ricavo), ad esempio, vengono riportate le indicazioni del fornitore (o cliente), mentre sul fornitore (o cliente) viene riportato il conto di contropartita del costo o ricavo, nel caso in cui ci siano più conti di contropartita viene riportato quello di importo maggiore (gli altri eventuali vengono ignorati).

- un campo di note di dettaglio: in questo campo è possibile utilizzare tutti i codici riportati alla base della maschera.  

**Per causali di chiusura partite** inserire in corrispondenza del conto clienti/fornitori generico i **codici (8) o (9)** in concomitanza con il **flag ‘Rif. doc. partita in pag.'** (situato nel tab Dettaglio Registrazione) per annotare in contabilità i riferimenti dei documenti pagati/incassati.

Prestare attenzione che il conto generico presente nella cusale (esempio "Fornitori Italia") sia effettivamente gestito nei  [Parametri di contabilità](/docs/configurations/parameters/finance/accounting-parameters)  in abbinamento al tipo conto corretto (es. FIT nel db standard Fluentis). Controllare inoltre che il tipo importo in corrispondenza della riga del cliente o fornitore sia correttamente settato su Importo sottoconto.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image04.png)

**Imposta detr. e sottoconto IVA**: tipo importo utilizzato per valorizzare la riga relativa all'IVA con l'importo detraibile dell'IVA e con il sottoconto individuato secondo il ‘Tipo contabilizzazione IVA' associato in via prioritaria all'anagrafica intestataria della registrazione o di default nei ‘Parametri di contabilità generale'.

Impostazione non utilizzata in Italia, utile per localizzazioni estere, esempio Croazia, per legare il conto dell'iva all'aliquota utilizzata (esempio se viene utilizzata l'aliquota IVA 10% verrà associato il conto "iva acquisti al 10%", quindi specifico per quell'aliquota anzichè un conto, esempio "iva a credito", generico come in Italia per tutte le aliquote).

**Descrizione parametrica della registrazione contabile**: all'interno di questa si possono codificare delle descrizioni standard che vengono compilate dal programma attraverso i vari codici indicati nella legenda posta immediatamente sopra al compo, descrizioni che saranno riportate nelle stampe contabili e in particolare negli Estratti conto e nel Libro giornale. 

Anche per ogni riga di movimentazione della sezione *Dettaglio conti / sottoconti - Prototipo registrazione* è possibile, come già illustrato sopra, codificare delle note preimpostate così come per la Descrizione generale. 

**ATTENZIONE**: in particolare i codici (8) e (9) sono gestiti solo per la descrizione specifica di riga e non sono considerati nella descrizione generale della registrazione di cui al campo in commento.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image05.png)

### 1.2 Dettagli registrazione

**Registro IVA**: il campo, obbligatorio solo per causali con tipo movimento IVA, consente di assegnare il registro IVA di riferimento alla causale in gestione.

**Data competenza IVA**: il campo consente di definire quale sia la data di competenza da assegnare al movimento IVA: il programma propone la data registrazione per i movimenti su registri acquisti e la data documento per movimenti su registri vendite. Si raccomanda di impostare la data competenza come data registrazione anche per le causali di giroconto IVA intra cee e reverse charge. 

E' fondamentale, infatti, controllare che le due causali, di acquisto e di giroconto, che sono coinvolte in questi tipi di "doppia registrazione", presentino il medesimo settaggio per evitare che l'iva detratta e l'iva esigibile in contropartita possano assumere periodi di competenza differenti. Lo vogliamo evidenziare in modo particolare perché, la causale di giroconto, essendo una causale iva lato vendite, propone di default il criterio data documento che va dunque modificato.

#### Opzioni tipo documento

**Tipo/N. documento**: l'impostazione di questo flag rende obbligatorio il campo del numero documento per il salvataggio della registrazione basata su questa causale.

**Data documento**: l'impostazione di questo flag rende obbligatorio il campo della data documento per il salvataggio della registrazione basata su questa causale.

**N. Doc. = Prot. IVA**: l'impostazione di questo flag implica che il programma proporrà il numero del documento sulla base del numero di protocollo IVA progressivo. Il campo, quindi, non va impostato per registrazioni d'acquisto per le quali il numero documento e protocollo non hanno alcun legame reciproco; per quanto riguarda le vendite, invece, l'uso è suggerito solo per causali di registrazioni effettuate manualmente direttamente in contabilità generale: l'impostazione di questo flag è sconsigliata per causali impostate nei tipi fatture di vendita e utilizzate nella contabilizzazione fatture.

**Prot. IVA = N. doc**: l'impostazione di questo flag implica che il programma cercherà di attribuire il protocollo iva sulla sulla base del numero di documento. Il campo, quindi, non va impostato per registrazioni d'acquisto per le quali il numero documento e protocollo non hanno alcun legame reciproco; per quanto riguarda le vendite, invece, **l'uso è suggerito per tutte le causali impostate nei tipi fatture di vendita e utilizzate quindi nella contabilizzazione automatica fatture**: la possibilità di utilizzare questa impostazione dipende dalla certezza che la numerazione dei tipi fatture sia la stessa per tutti i documenti da registrare nello stesso Registro IVA, diversamente si verrebbero a creare dei "salti" (o dei "doppioni" con conseguente rifiuto di salvataggio) nella protocollazione.

L'utilità di questa funzione nella contabilizzazione automatica delle fatture consiste nella possibilità di contabilizzare senza porre attenzione all'ordine di protocollazione: esempio posso contabilizzare la fattura nr. 2 e poi la nr. 1 ottenendo una corretta protocollazione che associa la fattura nr. 1 al protocollo 1 ecc...

A fine periodo IVA (mese o trimestre) basterà dunque accertarsi di aver contabilizzato tutte le fatture emesse.

#### Opzioni tipo registrazione

**Apertura partite**: la presenza di questo flag farà comparire il tabulatore di creazione dei partitari nella registrazione contabile che utilizzerà questa causale; l'impostazione di questo flag è quindi consigliata per tutte le registrazioni di tipo IVA e in generale per poter gestire lo scadenzario clienti/fornitori. Il flag può essere impostato anche per causali che rilevano un pagamento anticipato: in questo caso sarà aperta una partita di segno inverso da compensare successivamente con le partite che si creeranno al momento della rilevazione contabile del documento fiscale successivo.

**Dett. mov. in partite**: con questo flag il programma inserirà nelle **note delle partite** i testi inseriti nel campo 'Dettaglio movimento' della riga di contabilità d'origine della partita.![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/recording-detail/image02.png)

Il flag è attivo solo quando il precedente *Apertura partite* è stato impostato.

**Apertura per ogni riga mov.**: con questo flag il programma inserirà, una partita per ogni riga movimento, nella quale è presente un sottoconto con il flag di gestione partite aperte impostato. Il flag è attivo solo quando il precedente *Apertura partite* è stato impostato.

Il flag si può attivare solo per causali non iva (esempio apertura conti) per ogni riga movimento fornitore o cliente apre una partita e riporta le indicazioni di pagamento che prende in anagrafica (serve nel caso in cui si apra più di una riga per un singolo cliente o fornitore).

**Chiusura partite**: la presenza di questo flag farà comparire il tabulatore di chiusura dei partitari nella registrazione contabile che utilizzerà questa causale. Si tratta tipicamente di tutte le registrazioni pagamento/incasso non IVA, ma può anche essere impostato in combinazione con apertura partite e compensazione partite per le causali delle note di credito e in generale per tutte le registrazioni che prevedono un'apertura partite con una contestuale compensazione di una situazione pregressa.

**Usa cambio storico**: con questo flag, disponibile solo nel caso sia stata impostata la chiusura partite, l'applicativo procederà a chiudere i partitari con il cambio storico di apertura, senza alcuna rilevazione automatica delle differenze di cambio (permettendo quindi di gestirle eventualmente in maniera manuale).

**Ragg. pag. in libro giornale**: con questo flag, disponibile solo nel caso sia stata impostata la chiusura partite, l'applicativo procederà a raggruppare in un unico movimento di contabilità tutti gli importi di chiusura partite legati ad uno stesso sottoconto (in particolare, raggrupperà i movimenti di stesso segno e stessa divisa).

**Escludi da provv. maturate**: con questo flag, disponibile solo nel caso sia stata impostata la chiusura partite, le chiusure partite effettuate con questa causale contabile non saranno ritenuti validi per il calcolo delle provvigioni maturate per agenti con calcolo di tipo 'Pagamento avvenuto'.

**Rif. doc. partita in pag.**: con questo flag, disponibile solo nel caso sia stata impostata la chiusura partite, l'applicativo procederà a gestire i codici (8) e (9) di rilevazione dei riferimenti delle chiusure partite nelle descrizioni di dettaglio dei movimenti.

**Compens. partite**: con questo flag, disponibile solo nel caso siano stati impostati entrambi i flag di apertura e chiusura partite, la procedura attiverà la possibilità di procedere ad una compensazione partite all'interno della registrazione basata su questa causale: questa combinazione di flag viene consigliata per tutte le causali collegate a documenti di tipo note di credito.

**Avviso comp.**: con questo flag si attiva, al salvataggio della registrazione contabile, un controllo che avvisa l'utente sulla presenza di partite da compensare.

**Ragg. partite**: il flag attiva la gestione dei raggruppamenti partite invece che la gestione standard ad apertura/chiusura partite, attraverso un tabulatore specifico di rilevazione nella registrazione contabile.

**Crea Gruppo**: il flag, se attivo ed in combinazione con il flag precedente, crea automaticamente un gruppo partite nei raggruppamenti partite, nel quale fa confluire le partite della registrazione (da attivarsi nelle causali delle fatture di acquisto/vendita).

**Ragg. partite – tipo pagamento**: è la tipologia di pagamento da assegnare ai movimenti dei raggruppamenti partite rilevati con questa causale.

**Progetti**: (ex Commesse): l'attivazione di questo flag farà comparire il campo *Progetto* nella testata della registrazione oltre ai campi di dettaglio el corpo della registrazione per il collegamento dei progetti (commesse) con i movimenti contabili di dettaglio.

Per ulteriori dettagli vedere **[qui](/docs/finance-area/ledger-records/records/create-ledger-record/header-and-total-movements-description#campo_progetto)**

**Centri di costo**: la presenza di questo flag farà comparire il tabulatore di gestione della valorizzazione centri di costo nelle registrazioni contabili.

**Centri di profitto**: la presenza di questo flag farà comparire il tabulatore di gestione della valorizzazione centri di profitto nelle registrazioni contabili.

**Gestione macchina**: NON ATTIVATO il flag visualizzerà in contabilità, nella scheda analitica, una griglia di valorizzazione dei costi/ricavi agli automezzi aziendali.

**Cespiti**: la presenza di questo flag farà comparire il tabulatore di gestione delle schede cespiti nella registrazione contabile.

**Tipo operazione**: si tratta del tipo di operazione da proporre di default per i nuovi movimenti rilevati all'interno della scheda cespiti in contabilità.

**Aggiornamento saldi**: flag impostato di default.

**Descr. mov. in giornale e pagamenti**: con questo flag la procedura andrà a copiare la descrizione generale della registrazione in tutte le descrizioni di dettaglio dei movimenti e anche nelle note dei pagamenti.

**Provvigioni**: il flag attiva un tabulatore specifico all'interno delle registrazioni contabili per gestire i dati di calcolo delle provvigioni dal modulo amministrazione (questo modulo, recentemente introdotto, opera in alternativa rispetto alla gestione provvigioni dal modulo vendite, ma non lo sostituisce rimanendo quest'ultimo comunque attivo).

**Intrastat**: il flag attiva un tabulatore specifico all'interno delle registrazioni contabili per gestire i dati, provenienti dalla fattura d'acquisto o di vendita contabilizzata automaticamente tramite l'apposita procedura, oppure inseriti al momento dell'inserimento della scrittura contabile di prima nota, e relativi alla creazione dei modelli intrastat. I dati così gestiti saranno acquisiti nella procedura di creazione dei modelli intrastat tramite la procedura *Acquisizione delle registrazioni contabili.* Si ricorda che è presenta in alternativa la procedura di *acquisizione dalle fatture* che non interagisce con i movimenti contabili andando a leggere direttamente e soltanto i documenti di acquisto / vendita.

#### Ulteriori colonne visualizzabili nella griglia delle registrazioni contabili

**Divisa**: la presenza di questo flag farà comparire il campo Divisa nella sezione del libro giornale.

**Cambio/data valuta**: la presenza di questo flag farà comparire i campi del cambio e della data valuta nella sezione del libro giornale.

**Importo valuta**: la presenza di questo flag farà comparire il campo Importo valuta nella sezione del libro giornale.

**Sottoconto di contropartita**: la presenza di questo flag farà comparire i campi dei sottoconti di contropartita nella sezione del libro giornale. La gestione dei campi di contropartita non è consigliata.

**Dettaglio del movimento**: la presenza di questo flag farà comparire il campo del Dettaglio movimento nella sezione del libro giornale: si consiglia di impostare questo flag per tutte le causali contabili, in modo da consentire sempre l'inserimento di note di dettaglio del singolo movimento contabile.

**Divisione**: la presenza di questo flag farà comparire il campo Divisione già a partite dalla sezione IVA, così come nella sezione del libro giornale. Con questa impostazione sarà possibile spezzare il caricamento dello stesso documento su più divisioni della società.

**Giorni banca**: la presenza di questo flag farà comparire il campo della data valuta banca nella sezione del libro giornale: il campo, quindi, è consigliato per tutte le causali contabili che rilevano movimenti finanziari. La gestione di questo campo può essere automatizzata sulla base dei giorni valuta (positivi/negativi) impostati nell'anagrafica banche per ogni singola causale.

**Numero progressivo**: la presenza di questo flag farà comparire il campo del Numero riga nella sezione del libro giornale: si consiglia di inserire questo flag per causali particolarmente lunghe, in modo da consentire all'utente di ordinare i record in modo fisso come nella causale (es. rilevazione paghe).

**Rif. manuale partite**: la presenza di questo flag farà comparire il campo del Rif. Manuale partita nella sezione del libro giornale. Il campo è indicato per collegare manualmente movimenti di contabilità senza passare per la gestione partite. In pratica si tratta di un campo note libero.

**Operazioni straordinarie**: la presenza di questo flag farà comparire il campo omonimo (di tipo bit ovvero un flag) al fine di evidenziare alcuni movimenti contabili (in particolare ad esempio un costo) come *straordinario* e permettere poi una facile ricerca o estrazione all'interno di una stampa degli stessi.
Questa possibilità si rivela utile a seguito delle modifiche agli schemi di bilancio introdotte con la direttiva 2013/34 (Dlgs 139/2015). Tali modifiche avevano introdotto, in sintesi, l'eliminazione dell'area "straordinaria" del Conto Economico. Ne consegue che tutti i componenti "eccezionali" non possono essere rappresentati da conti quali ad esempio le sopravvenienze attive dell'area straordinaria, ma devono essere iscritti direttamente nel conto cui si riferisce, ad esempio, la spesa (per natura).  Si presenta tuttavia la necessità di evidenziare  tali componenti di costo / ricavo per il necessario dettaglio in nota integrativa e per altre eventuali ragioni di tipo fiscali, ad esempio le riprese in diminuzione di costi nella dichiarazione dei redditi ecc...

**Tipo Operazione fiscale**: Rende visibile una combo box con la quale contrassegnare la riga di contabilita a supporto di una successiva elaborazione (esterna) della dichiarazione annuale iva, dove è richiesto di indicare se l'operazione corrisponda a:
- acquisto beni ammortizzabili
- acquisto beni strumentali non ammortizzabili
- acquisto beni / servizi destinati alla rivendita
- altri acquisti
 
**Riferimento documento**: Rende visibile, in corrispondenza delle righe del movimento contabile due campi ulteriori per annotare il riferimento alla data e numero documento (ad es. fattura sulla riga del conto di contropartita).

### 1.3 Parametri

#### Ordine dei tab nelle registrazioni contabili

E' dedicata all'impostazione dell'ordine con il quale presentare i tabulatori previsti, attraverso gli appositi pulsanti: **Sposta su** e **Sposta giù**. 

#### Parametri registrazione

**Controllo tipo conto**: la presenza di questo flag imporrà alla procedura di verificare la corrispondenza del sottoconto intestatario della registrazione rispetto alle impostazioni dei parametri di contabilità (es. uso di un conto cliente in una causale d'acquisto da fornitore): in caso di esito negativo sarà eseguito un semplice messaggio di avvertimento.

**Blocca registrazione se il tipo conto è incompatibile**: la presenza di questo flag imporrà alla procedura di annullare l'inserimento di un sottoconto intestatario della registrazione non valido rispetto alle impostazioni dei parametri di contabilità (es. uso di un conto cliente in una causale d'acquisto da fornitore).

**Permetti registrazione contabile con sbilancio**: la presenza di questo flag consentirà all'utente di salvare registrazioni contabili non bilanciate (sconsigliato). Può essere utile ad esempio (con le necessarie cautele) per forzare una contabilizzazione automatica che restituisce un messaggio di errore al fine di meglio comprendere il risultato della registarzione e correggere i settaggi.

**Blocca cancellazione registrazioni con partite pagate**: con questo flag non sarà possibile cancellare le registrazioni che abbiano all'interno almeno una partita con un pagamento collegato.

**Blocca registrazione se il valore delle partite non è uguale al movimento contabile**: la presenza di questo flag imporrà alla procedura di bloccare il salvataggio di registrazioni per le quali il valore dei movimenti contabili non corrisponde ai valori di movimentazione dei partitari (in apertura e in chiusura partite): nel caso in cui non sia impostato, la procedura, comunque eseguirà un messaggio di avviso della presenza di una differenza. Il controllo viene eseguito su tutti i sottoconti che nel piano dei conti hanno impostato il flag *Apertura partite*.

**Blocca registrazione se il totale documento è differente dal totale dei dati iva**: la presenza di questo flag imporrà alla procedura di bloccare il salvataggio di registrazioni per le quali il valore totale dei movimenti iva non corrisponde ai totali impostati in testata della registrazione: nel caso in cui il campo non sia impostato comunque la procedura eseguirà un messaggio di avviso.

**Aggiorna automaticamente il totale del documento al variare dei dati nella griglia dell'iva: l**a presenza di questo flag imporrà alla procedura di aggiornare, ma solo in incremento, i totali della testata della registrazione al variare della somma totale inserita nella sezione iva della registrazione.

**Aggiorna anche in decremento**: questo flag, attivo solo quando il precedente è impostato, forzerà la procedura ad aggiornare i totali della registrazione anche in decremento.

**Blocca registrazione se l'ordine di protocollo non è rispettato**: la presenza di questo flag imporrà alla procedura di bloccare il salvataggio di registrazioni per le quali l'ordine temporale di protocollazione non sia rispettato: in particolare, con questo flag la procedura recupererà numeri di protocolli solo nel caso in cui sia stata impostata una data registrazione valida per il numero stesso. Se il flag non viene inserito, comunque la procedura eseguirà un messaggio di avviso della mancanza di ordine di protocollazione: si ricorda, inoltre, che la stampa registri iva non consente, nell'impostazione di default, di stampare in definitivo registri iva che abbiano buchi nella numerazione oppure non seguano l'ordine di protocollazione corretto.

**Gestione separata Cdc/Cdp**: questo flag, attivo solo nel caso in cui la causale gestisca sia i centri di costo che di profitto, consentirà di assegnare i movimenti economici di contabilità sia ai centri di costo che ai centri di profitto. Se non è impostato, invece, il movimento può essere assegnato solo a uno delle due sezioni.

**Ricalcolo automatico CdC, CdP e commesse**: il flag in oggetto sarà riportato anche nelle registrazioni contabili basate su questa causale: il significato è quello di eseguire automaticamente o meno il ricalcolo delle sezioni analitiche dei centri di costo, profitto e delle commesse una volta entrati in modifica di una registrazione contabile già salvata. All'atto dell'inserimento di una nuova registrazione, fino al suo primo salvataggio, l'aggiornamento di queste sezioni sarà sempre automatico nel rispetto delle impostazioni di default definite.

**Blocca registrazione se il valore dei Cdc/Cdp non è uguale al movimento contabile**: la presenza di questo flag imporrà alla procedura di bloccare il salvataggio di registrazioni per le quali il valore totale dei movimenti analitici dei centri di costo e profitto non corrisponde agli importi economici movimentati nella sezione di contabilità generale: nel caso in cui il flag non sia inserito sarà comunque eseguito un messaggio di avviso della mancata corrispondenza dei valori.

**Raggruppa Iva in libro giornale**: la presenza di questo flag imporrà alla procedura di raggruppare nel libro giornale le righe Iva assegnate allo stesso sottoconto contabile (e alla stessa divisione).

**Blocca salvataggio con numero documento duplicato**: la presenza di questo flag, inserito di default, imporrà alla procedura di bloccare il salvataggio di registrazioni contabili con stesso numero documento, stesso anno, stesso tipo documento e anagrafica in testata della registrazione.

**Background colour**: impostare in questo campo il colore di sfondo per visualizzare nelle ricerche a video i movimenti basati su questa causale. L'uso dei colori può essere utile per individuare il tipo di movimento senza dover leggere descrizioni o codici delle causali.

**Foreground colour**: impostare in questo campo il colore di dei testi da visualizzare nelle ricerche a video i movimenti basati su questa causale. L'uso dei colori può essere utile per individuare il tipo di movimento senza dover leggere descrizioni o codici delle causali.

**Sample text**: il campo visualizza il risultato della combinazione di colori impostata.

**Carattere corsivo**: impostare in questo campo la visualizzazione in corsivo dei caratteri per questa causale nelle ricerche a video: può essere utile per individuare il tipo di movimento senza dover leggere descrizioni o codici delle causali.

**Carattere grassetto**: impostare in questo campo la visualizzazione in grassetto dei caratteri per questa causale nelle ricerche a video: può essere utile per individuare il tipo di movimento senza dover leggere descrizioni o codici delle causali.

:::important Vedi Anche
[**VIDEO TUTORIALS SULLE CAUSALI CONTABILI**](/docs/video/finance/intro.md)
:::

### 1.4 Controllo aliquote IVA

In questo tab è possibile inserire alcune aliquote IVA (precedentemente codificate nella tabella [**Aliquote / Modalità IVA**](/docs/configurations/tables/finance/vat-rates/)) che vincoleranno l'utente all' utilizzo esclusivo delle stesse.

Rappresenta dunque una forma di controllo e di vincolo ad utilizzare solo codici iva ritenuti corretti e consoni alla scrittura contabili gestita dalla causale in oggetto.

La possibilità di inserire nella griglia e dunque di attivare il controllo è abilitata dal flag **Imposta aliquote IVA abilitate**.
 
E' presente accanto ai campi che riportano il codice / descrizione dell'aliquota inserita, un campo per impostare una data di fine validità della scelta precedentemente effettuata e dunque cambiare o concludere la politica di gestione.