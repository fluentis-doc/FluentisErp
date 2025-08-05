---
title: FAQ Amministrazione
sidebar_position: 1
---


<details>

  <summary>1. Quali fatture elettroniche vengono inserite nel folder impostato nella tabella <b>Configurazione documenti elettronici</b>?</summary>
  
Ci sono due condizioni da rispettare nell'anagrafica cliente. 

La prima condizione è il flag <b>Firma del documento</b>, che deve essere attivo.                 
La seconda condizione è il flag <b>Fatturazione elettronica firmata</b>, che è un 3-state flag:   

- Quando è 1 per il cliente si prevede la firma, indipendentemente da altre opzioni di configurazione, quindi si esporta sempre il file nel folder definito in configurazione documenti elettronici per farne la firma;           

- Quando è 0 per il cliente non si prevede la firma, indipendentemente da altre opzioni di configurazione, quindi non si esporta il file nel folder di configurazione documenti elettronici, anche se è impostato il folder;      

- Quando è Null come qui sopra (che è l’impostazione di default) vale l’impostazione nella ‘configurazione documenti elettronici’, cioè se c’è un percorso dove creare il file lo crea sempre, altrimenti non lo crea.

</details>


<details>

  <summary>2. Per i pesi, in fase di creazione fattura elettronica, Fluentis mi dice che non possono essere superiori a 9.999 come faccio a togleire questo blocco? </summary>
  
Questo blocco è legato alle regole della Fatturazione Elettronica, la quale non accetta PESI superiori
Per ovviare a questo problema è necessario scalare di UM se si dovesse superare la soglia dei 9999, in modo tale da utilizzare una UM coerente ed ottenere i valori desiderati.

</details>


<details>

  <summary>3. Come è possibile inserire il flag <b>Gruppo IVA </b> in una <b>Dichiarazione di intento</b> già creata? </summary>
  
E' necessario effettuare il seguente update, inserendo l'id della dichiarazione di intento.

update CA_DichIntMain set CADM_IsVatGroup = 1 
where CADM_Id = '[id della dichiarazione di intento]'

</details>


<details>

  <summary> 4. Come è possibile effettuare la stampa di un mastrino filtrando i movimenti in base alla competenza economica? Infatti ad esempio impostando il periodo richiesto, nella stampa dei sottoconti, nei campi "da data competenza" e "a data competenza" non viene presa in considerazione la competenza economica, ma sembrerebbe venga letta la data di competenza che nelle registrazioni contabili è posta di fianco alla data di registrazione.</summary>

Confermo che nei filtri, quando scrive da data competenza a data competenza si intende quella di competenza (per così dire "contabile") della testata. Normalmente coincidono ma può essere usata (anche se di fatto da pochi) per registrare ad esempio scritture di rettifica in data approvazione bilancio che si riferiscano al 31/12 dove a tale data magari il periodo è già bloccato per stampa definitiva del giornale e quindi non accetterebbe la data registrazione. Per quanto riguarda la data competenza economica, la stampa del mastrino e più in generale il sistema non è pensato per lavorare in quel modo. La procedura più corretta è calcolare una chiusura dei conti del periodo (chiusure infrannuali) e lanciare le relative scritture di rettifica integrazione. In alternativa posso consigliare di usare la form visualizzazione conti dove aggiungere dall'object navigator le proprietà From AccrualDate ToAccrualDate che sono le date di competenza economica (Da A) e usare il filtro posto sulla prima riga della griglia di dettaglio. In alternativa ancora occorre eseguire una personalizzazione del report e della form di lancio aggiungendo filtri e capi ecc...

</details>

<details>

  <summary> 5. Come mai, confrontando una chiusura conti infrannuale calcolata dall'1/1 al 31/12 con i risultati del modulo amministrativo, nella chiusra del controling trovo dei risconti che in amministrazione non vengono calcolati?</summary>

Il modulo controlling ragione in modo più flessibile, in alcune situazioni, rispetto al modulo amministrativo.
Infatti è in grado di rettificare qualsiasi costo ricavo (con tipo conto compatibile) anche per quote di competenza economica nel passato. Ad esempio se il costo registrato nell'anno X ha competenza parzialmente (o totalmente) nell'anno X-1, elaborando la chiusura dell'anno X si avrà comunque una rettifica (ad esempio un risconto attivo).
Occorre porre particolare attenzione alla **gestione degli assestamenti eseguiti nel modulo amministrativo**.
**Si raccomanda di eseguire il calcolo e contabilizzazione assestamenti e la chiusura e riapertura conti con riapertura assestamento tramite le procedure automatiche evitando di eseguire scritture manualmente**.
La procedura automatica impone, infatti, alle scritture di riapertura degli assestamenti la data pari alla scrittura originaria oggetto di rettifica e la competenza economica di tale scrittura pari all'anno X-1. In tale modo si evita infatti che elaborando le chiusure di periodo dell'anno X il software vada a calcolare ulteriori rettifiche, avendosi già nel saldo dell'anno X (o periodo infrannuale dell'anno X) il risultato corretto di competenza per effetto della corretta riapertura dell'assestamento precedente.  

</details>

<details>

  <summary> 6. Come mai nella maschera di gestione dell'assestamento (ratei e risconti) pur essendo sicuro di aver inserito movimenti contabili idonei non calcola nulla?</summary>

Dopo essersi accertati di aver effettivamente inserito movimenti contabili con date di competenza economica a cavallo dell'esercizio contabile, e di aver utilizzato conti di costo aventi il tipo "da rettificare" (db Fast Start) o comunque avente il flag Servizio nella tabella *tipi conto*, se ancora non vedo alcun rateo o risconto proposto, potrei aver attivato, inavvertitamente il flag *Chiusura mensile* nei parametri generali di contabilità. Questo flag attiva infatti logiche per localizzazioni estere non italiane.

</details>

<details>

  <summary> 7. Ho associato un tipo ritenuta d'acconto ad un cliente per generare la fattura elettronica completa dei tag necessari, ora voglio contabilizzare la fattura ma vedo che la scrittura contabile non è corretta e non riporta la ritenuta d'acconto, perchè?</summary>

All'interno nella tabella *Tipi Ritenuta*, aprire la tipologia associata al cliente in questione e verificare che il campo *Tipi partite* sia settato su *Partite Nette*.

</details>

<details>

  <summary> 8. Fluentis mi propone all'interno di una nuova registrazione contabile sempre l'ultima divisa utilizzata con la causale selezionata ignorando la divisa di default del cliente o fornitore, perchè? </summary>

Verificare il settaggio del parametro generale nella tabella PARAM_Parameter codice CA-RegCont-General_PurposeCurrencyByTemplate. Se il parametro è impostato a 1 verrà proposta la divisa ultima utilizzata con la causale, se impostato a 0 non verrà proposta alcuna divisa seguendo la logica base della divisa della società e poi lettura della divisa del cliente o fornitore.

</details>

<details>

  <summary> 9. Ho la necessità di creare più numerazioni per le fatture si vendita. Non è chiaro se devo creare tanti registri iva vendita per quante sono le numerazioni o l'unico registro vendita può avere più numerazioni </summary>

la relazione presente nel ciclo di contabilizzazione delle vendite è Tipo Fattura > Numerazione > Causale contabile associata > Registro iva associato alla causale. In un ambiente standard si nota che possono esserci più tipologie, ma se abbinate alla stessa causale, che quindi ha lo stesso sezionale iva, la numerazione è la stessa (condivisa, quindi la FT nr 1 per il tipo A e poi per il tipo B nascerà la nr 2). Nel caso di diversi tipi fattura con diverse numerazioni concorrenti è opportuno differenziare i sezionali iva e pertanto abbinargli anche diverse causali, altrimenti la protocollazione iva andrà in conflitto. Questo inquanto normalmente nelle causali è attiva una spunta di opzione che propone il protocollo iva pari al numero del documento (in modo da non dover fare attenzione a contabilizzare le fatture nell'ordine di numero). Diversamente è necessario disattivare tale opzione

</details>

<details>

  <summary> 10. Come posso gestire una nota di accredito semplificata di sola iva TD08 per il recupero, ad esempio, dell'iva di un cliente fallito? </summary>

1. Nella tabella Amministrazione > **Tipi Documento** verificare la presenza (e se necessario aggiungere) di una tipologia corrispondente. Il campo Codice / Descrizione può essere liberamente nominato, ad esempio *Nota di accredito semplificata per recupero IVA*, oppure *Nota di accredito di sola iva* ecc...; il flag **Nota di accredito** deve essere **attivo** ed il campo **Codice per fatture elettroniche** deve riportare *TD08*
2. Nella tabella Vendite > **Tipi Fatture** verificare la presenza (e se necessario aggiungere) di una tipologia corrispondente. Il campo Codice / Descrizione può essere liberamente nominato, ad esempio *Nota di accredito semplificata per recupero IVA*, oppure *Nota di accredito di sola iva* ecc... ; nel campo **Natura Fattura** DEVE essere selezionata la voce ***Nota di variazione di sola IVA***; il campo **Tipo documento** riporterà la tipologia di cui al punto 1. ed il campo **Causale** (contabile) riporterà la corretta causale (da creare o selezionare all'interno della tabella Amministrativa > Causali di contabilità generale) in modo che la scrittura contabile risulti adeguata alla situazione in questione. (ad esempio sarà una causale che gestisce le note di accredito con conseguente schema contabile).
3. Creare il nuvo documento nel modulo Vendita > Fatture di Vendita utilizzando la tipologia di fattura creata al punto 2. 
    - La particolare tipologia impostata nel campo Natura Fattura di cui al punto 2. permette di inserire, nella griglia Articoli del documento, unicamente righe di tipo *Note* dove potremo inserire una breve descrizione della rettifica effettuata, ad esempio: "Documento emesso ai sensi dell'art. 26, comma 3 bis, D.P.R. n. 633/1972, al solo fine di recuperare l'IVA".
    - Espandendo la sezione *Tipo Riferimento* della *Testata* del documento è possibile, oltre al campo Tipo riferimento, valorizzare anche il dettaglio della fattura precedente che viene rettificata.
    - In questo particolare tipo di Nota di accredito la possibilità di gestire i valori è limitata esclusivamente alla sezione **Riepilogo** e precisamente nella griglia *Riepilogo IVA* dove si movimenterà direttamente il campo **Imposta** (in negativo) oltre al campo (codice) IVA (es. 22%), lasciano a zero l'imponibile (parliamo infatti di nota di accredito di sola iva)
4. Generare il tracciato xml ed inviare la fattura elettronica come di consueto (secondo le istruzioni della guida in linea).
5. Contabilizzare la Nota di accredito come di consueto. Abbinando una causale contabile tipica per le note di accredito Italia, ad esempio (presente nella lista degli ambienti Fast Start), la scrittura contabile sarà comunque eseguita in modo adeguato movimentando, nella sezione iva, solo l'imposta e non l'imponibile e nella sezione contabile stornando dal credito verso il cliente (in Avere) il valore dell'iva che viene dedotta dal conto iva vendite (in Dare) a fronte del recupero effettuato.
</details>

<details>

  <summary> 11. Come posso gestire una "Comunicazione" TD29 per comunicare una omessa o irregolare fatturazione da parte del fornitore? </summary>

1. Nella tabella Amministrazione > **Tipi Documento** verificare la presenza (e se necessario aggiungere) di una tipologia corrispondente. Il campo Codice / Descrizione può essere liberamente nominato, ad esempio *Comunicazione per errata fatturazione fornitore*, il flag **Autofattura** deve essere **attivo**, il campo **Codice per fatture elettroniche** deve riportare *TD29*
2. Nella tabella Vendite > **Tipi Fatture** verificare la presenza (e se necessario aggiungere) di una tipologia corrispondente. Il campo Codice / Descrizione può essere liberamente nominato, ad esempio *Comunicazione per errata fatturazione*; nel campo **Natura Fattura** deve essere selezionata la voce ***Fattura***; il campo **Tipo documento** riporterà la tipologia di cui al punto 1. nel campo **Causale** (contabile) non è detto che sia necessario collegare una voce essendo questa solo una comunicazione di omessa fatturazione del fornitore, senza rilevanza ai fini IVA.
3. Creare il nuvo documento nel modulo Vendita > Fatture di Vendita utilizzando la tipologia di fattura creata al punto 2. 
   - Espandendo la sezione *Tipo Riferimento* della *Testata* del documento è possibile, se necessario, oltre al campo Tipo riferimento, valorizzare anche il dettaglio della fattura precedente che viene rettificata.
   - Nel campo Cedente, nella testata del documento inserire i dati del Fornitore, mentre nel campo Cliente inserire l'anagrafica della nostra società appositamente creata per le autofatture.
   - Nella sezione Articoli del documento inserire una riga con, ad esempio, la descrizione della merce non fatturata ed i relativi importi, oppure e si tratta di rettifica di irregolare o errata fattura il valore della rettifica.
4. Creare il file xml ed inviarlo con le consuete procedure.
</details>

<details>
  <summary> 12. Come posso sbloccare una liquidazione periodica IVA stampata in definitivo? </summary>

1. Nella form Amministrazione > DICHIARAZIONI > **Versamenti Iva**, dove sono riportati tutti i periodi per i quali è presente la liquidazione in definitivo, selezionare il periodo (anche più di uno) da sbloccare e premere il pulsante ***Cancella Liquidazioni IVA***.
2. Normalmente, se quando è stata fatta la liquidazione in definitivo, è stata abilitata l'opzione per le scritture automatiche di giroconto, verrà visualizzato un messaggio che conferma la cancellazione automatica dei giroconti. Verrà inoltre mostrato un messaggio di avviso che ricorda di cancellare manualmente il record (per il periodo corrispondente) presente nella form **Dichiarazione iva periodica** che era stato creato automaticamente al lancio della liquidazione in definitivo.
3. Come riportato al punto precedente cancellare manualmente il record presente nella form **Dichiarazione iva periodica** per il periodo corrispondente a quello sbloccato. Ricordiamo che in questa tabella vengono memorizzati i dati per la gestione dei campi manuali della liquidazione (riporto credito, compensazione ecc...)
4. Riportare indietro il contatore delle pagine e la data i ultima stampa per il sezionale IVA sul quale vengono stampate le liquidazioni periodiche (generalmente codice RIE in database FastStart). Accedere alla tabella Registri IVA, localizzare il sezionale da ripristinare (es. *RIE*) e manualmente correggere, per l'anno corrente nella griglia inferiore di dettaglio, i campi **Ultima pagina stampata**, **Data ultima stampa**.
5. Se le liquidazioni periodiche vengono stampate accodandole ad un sezionale iva ordinario (ad esempio alle vendite o agli acquisti), ed in tutti i casi in cui si necessiti di modificare movimenti iva per i quali, oltre alla liquidazione in definitivo, sono stati stampati in definitivo anche i sezionali, dalla tabella **Registri IVA** premere il pulsante nella ribbon bar **Annulla stampe definitive**. Verrà mostrato un popup dove selezionare e confermare il periodo da sbloccare ed il sezionale iva da sbloccare. Nel caso di sblocco di più periodi per un determinato sezionale, si consiglia di procedere in modo consecutivo e sbloccando tutti gli eventuali periodi intermedi, procedendo dal più recente al più vecchio. Procedere quindi al ripristino manuale dei dati di *ultima pagina stampata, ultima data stampa, ed ultimo protocollo IVA*.

</details>

<details>

  <summary> 13. Come procedo per sbloccare la stampa in definitivo del LIbro Giornale? </summary>

1. Quando è stata creata la stampa in definitivo, nella form di stampa **Libro Giornale**  avevamo lanciato la stampa attivando il flag *Definitiva*. In quel momento, ricordiamo, veniva eseguito anche un controllo con relativo messaggio di avviso, se erano presenti movimenti contabili precedenti alle date selezionate nel filtro per la stampa, che non erano ancora state stampate in definitivo. Era comunque possibile ignorare l'avviso. Il period stampato in definitivo veniva bloccato da possibili modifiche alle registrazioni contabili.
2. **Per sbloccare** un periodo stampato in definitivo accedere alla form Configurazione > Parametri > Amministrazione > **Parametri di contabilità**  per l'anno corrente o quello da sbloccare ed utilizzare il pulsante **Annulla stampe definitive**. Apparirà un popup dove specificare il periodo (da data a data) per il quale eseguire lo sblocco. Lo sblocco consiste, tecnicamente, nel porre le registrazioni interessate nel periodo in stato non definitivo (campo visibile solo nel database oppure trascinando la proprietà IsPrintedInJournal - Stampato in libro giornale, in una form che punta all'oggetto FSPosting quale ad esempio la form *Registrazioni contabili* accessibile dal menu Amministrazione > Registrazioni > Registrazioni), pertanto si consiglia di agire in modo ordinato e consecutivo evitando di lasciare periodi non in definitivo, i quali saranno comunque segnalati dall'avviso di cui al punto precedente.
3. Dopo lo sblocco occorre ripristinare manualmente i dati memorizzati nella form dei Parametri di contabilità in fase di stampa definitiva:
    - Data ultima stampa libro giornale: riportandola indietro all'ultima data registrazione non sbloccata
    - Ultima pagina / riga: riportandola all'ultima non sbloccata
    - Saldo Dare / Avere: cancellando i valori che poi saranno ricreati automaticamente con la nuova stampa definitiva.
</details>

<details>

  <summary> 14. Come posso chiudere forzatamente una partita aperta? </summary>

Lo stato di una partita, (aperta, chiusa, parzialmente aperta) è calcolato dal sistema e non può essere forzato agendo direttamente sul campo dello Stato partita, verrebbe immediatamente ricalcolato.
La partita è *chiusa* (e viene rilevato questo stato) solo se esiste un pagamento per quella partita (ad essa agganciato ed avente lo stesso numero).

Pertanto il modo corretto per la chiusura di una partita creata extra-contabilmente, oppure rimasta aperta inquanto una registrazione contabile di pagamento non ha generato anche il pagamento a livello di partite, consiste nell'utilizzare la seguente procedura.

1. Accedere alla form Amministrazione > Partite > **Pagamenti**
2. Creare un nuovo pagamento con il tasto **Nuovo** 
3. Subito dopo l'apertura della form con i dati del nuovo pagamento, anzichè compilare manualmente, utilizzare il comando **Crea da partite / Pagamenti** che fa comparire un popup per la ricerca e selezione della partita aperta che si vuole chiudere. Nel popup sono presenti i consueti campi di ricerca delle partite, è sufficiente selezionare con il mouse la partita da chiudere e premere il bottone **Seleziona**. Verranno creati automaticamente i collegamenti tra partita e pagamento in modo corretto. Lo stato della partita verrà automaticamente ricalcolato come *Chiusa*.

</details>

<details>

  <summary> 15. Come posso ripristinare una ricevuta bancaria già presentata o accreditata? </summary>

La procedura di emissione di una ricevuta bancaria e la sua successiva contabilizzazione e presentazione la salvo buon fine prevede una serie di passaggi tra loro sequenziali. Pertanto nel caso in cui si tenti di eseguire il ripristino (rollback) ad esempio della,creazione di una ricevuta bancaria che è già stata presentata in banca o accreditata, il software impedirà questa operazione restituendo un messaggio di avviso.

Tutte le fasi della creazione e presentazione con successivo accredito, nonchè le operazioni di contabilizzazione, possono essere ripristinate, ma occorre agire nell'ordine logico corretto, partendo dalle operazioni eseguite successivamente fino ad arrivare alle prime fasi.

Se, pertanto, la sequenza delle operazioni compiute per la creazione è la seguente:

- Contabilizzazione della fattura di vendita con apertura partita
- Creazione automatica delle Ricevuta bancaria dalle partite aperte
- Contabilizzazione dell'emissione della ricevuta bancaria (spesso eseguita contestualmente al punto precedente - wizard)
- Creazione distinta di presentazione e inserimento degli effetti (ricevute bancarie) nella distinta
- Contabilizzazione della presentazione distinta
- Contabilizzazione Accredito Ricevute bancarie

Il rollback dovrà seguire questo ordine

- Ripristino contabilizzazione accredito
- Ripristino contabilizzazione distinta
- Rimozione dell'effetto (ricevuta bancaria) dalla distinta (che potrebbe non essere cancellabile contenendo anche altri effetti) selezionandolo da dentro la distinta e premendo il tasto CANC
- Ripristino della contabilizzazione effetti (PRIMA DEL PUNTO SUCCESSIVO)
- Ripristino della creazione automatica effetti dalle partite
 
Ricordiamo che le procedure di ripristino sono accessibili dalle stesse form dove è avvenuta la creazione, nell'apposito tab successivo, sempre presente.

</details>