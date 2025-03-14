---
title: Nuova Registrazione contabile
sidebar_position: 1
---
La form si apre tramite il percorso **Amministrazione > Registrazioni contabili > Registrazioni > Nuova Registrazione** oppure tramite il pulsante **Nuova** che si trova nella form [Ricerca registrazioni contabili](/docs/finance-area/ledger-records/records/search-ledger-records).

## *Come creare una Registrazione contabile di Acquisto o Vendita*

<details>
 
<summary>Clicca per i passaggi fondamentali</summary>
 
1. **Inserisci i dati obbligatori nella Testata**: *Data Registrazione, se diversa da Oggi*, ***Causale contabile***, *Conto (cliente o fornitore)*, *Numero* e *Data Documento* *Totale della registrazione*.  
 
2. **Inserisci i dati IVA**: Tipo IVA, Conto di contropartita ed aliquot IVA (se non già proposti dall'anagrafica cliente /fornitore)  
 
3. **Gestisci le date di competenza economica**: se necessario in particolare per i servizi al fine di ottenere i ratei e risconti automatici in seguito.
 
4. **Verifica e modifica la sezione Libro giornale** se necessario puoi variare i conti o suddividere il costo o ricavo inserendo nuove righe
 
5. **Controlla la sezione dei Riepiloghi** verificando che la registrazione sia bilanciata.  
 
6. **Controlla o gestisci la Tab delle Partite aperte** se non viene proposta dall'anagrafica cliente o fornitore inserisci i dati relativi al tipo e soluzione di pagamento per gestire le partite aperte iun maniera allineata rispetto al movimento contabile

7. **Incassi o pagamenti** verranno gestiti dalla **Tab Pagamenti** che sarà utilizzata **per prima**, ricercando le partite da chiudere con il bottone **Ricerca Partite** e facendo doppio click sulle partite da chiudere, in questo modo i dati dei clienti o fornitori incassati o pagati saranno già riportati nella sezione Libro giornale.

8. **Scritture semplici di prima nota** come giroconti cc... possono essere inseriti direttamente nella sezione Libro giornale, non prevedendo la relativa causale di movimentare la griglia IVA

9. **Altre sezioni specifiche non obbligatorie**  a seconda sei parametri attivati nella causale contabile, verranno visualizzate altre sezioni specifiche, quali la Contabilità **analitica**, I cespiti, gli **Intrastat**, le provvigioni **Agenti** che è possibile gestire.
 
</details>


La Registrazione contabile, e conseguentemente la form per il suo inserimento, è composta dai seguenti elementi:

- La **Testata** ("*Header*" che corrisponde alla zona più in alto nella form) la quale contiene elementi univoci per la registrazione quali:
    > La data

    > Il numero

    > Il totale

    > Il registro iva e il numero di protocollo

    > Altro
    
    > La **Causale contabile** che, in base alle relative impostazioni e parametri, attiva gli ulteriori elementi di cui sotto
- Il **Piede** ("*Footer*") della form che contiene la descrizione generale della registrazione stessa, da riportare sul Libro giornale, oltre ad alcuni totali e il controllo di sbilancio tra sezioni Dare e Avere
- Tab **Registrazione** che contiene le due sotto-sezioni ***IVA*** (dipende dalla causale) e ***Libro Giornale*** con i movimenti di contabilità
- Tab **Partite**, se attivata, per l'apertura delle partite aperte che alimentano lo scadenzario
- Tab **Pagamenti**, se attivata che gestisce la chiusura delle partite aperte
- Tab **Analitica**, se attivata, che gestisce i movimenti dei centri aziendali (centri d costo / profitto)
- Tab **Intrastat**, se attivata, che permette di compilare i dati per la successiva creazione automatica degli elenchi Intrastat
- Tab **Cespiti**, se attivata, che permette di gestire acquisto o vendite cespiti
- Tab **Provvigioni**,se attivata, che permette di gestire la creazione e memorizzazione delle Commissioni agenti
- Tab **Progetti**, se attivata, che permette di movimentare i Progetti (commesse)
- Tab Raggruppamenti partite, se attivata: una modalità particolare di gestione delle partite aperte.
- Tab Parametri con ulteriori informazioni di dettaglio sulla registrazione

## **1. Testata (Header)**

**Data di registrazione**: in una nuova registrazione viene impostata come data odierna di sistema, può essere modificata in avanti o indietro nel tempo purchè sia rispettato l'ordinamento cronologico dei protocolli IVA e gli eventuali periodi già stampati in definitivo. 

<details>

  <summary>Ulteriori dettagli (Click to expand)</summary>
  
  L'importanza di questa data è fondamentale in quanto non esiste la necessità di procedere ad un Cambio esercizio: 

a partire dalla data di registrazione l'applicativo ricerca  i parametri di contabilità per l'anno di riferimento (individuando all'interno di quale range di date esercizio si trovi) e da questo riprende gli altri range di date di controllo (date competenza in linea e date periodo in linea). 

Questa data è quella base della stampa del libro giornale e degli estratti conto contabili. 

In caso sia premuto il pulsante di creazione di una *Nuova registrazione* da dentro quella in gestione è possibile impostare, tramite i **parametri di inserimento**  (nella ribbon bar) che questo campo sia proposto anche in quella nuova;

</details>


**Data competenza**: è la data di riferimento per il bilancio di esercizio: **normalmente è sempre uguale alla data registrazione**. 
Può essere utilizzata per le scritture di assestamento di bilancio e le relative scritture di chiusura/apertura conti, che possono essere impostate come data di registrazione nel periodi di approvazione e chiusura del bilancio (ad esempio aprile o giugno dell'ano successivo) ma saranno impostate con *data competenza* 31/12 – 01/01. 
Questo anche al fine di permettere l'inserimento in un periodo probabilmente già stampato in definitivo nel Libro Giornale.

:::important[Attenzione]
questa data NON può essere utilizzata per rilevare le fatture da ricevere di fine anno. **Si consiglia di lasciarla sempre uguale alla data registrazione**: in contabilità ci sono stampe che lavorano per data registrazione, altre per data competenza, altre che danno libertà all'utente di filtrare per entrambe, chiaramente si otterrebbero risultati differenti a seconda dei filtri applicati. 
:::


Nei **parametri di inserimento** è possibile impostare che questa data sia allineata automaticamente rispetto alla data registrazione;

**Numero di registrazione**: Viene attribuito in base ai settaggi della tabella [**Numerazione Registrazioni**](/docs/configurations/tables/finance/posting-ledger-numeration)

<details>

  <summary>Ulteriori dettagli (Click to expand)</summary>
  
  l'univocità della registrazione viene determinata sempre dalla combinazione *Data registrazione* + *Numero registrazione*. Il numero di registrazione viene gestito automaticamente dalla procedura in base ai settaggi del numeratore (contatore): in particolare, al momento del salvataggio viene attribuito il numero definitivo corretto, recuperando eventualmente un buco di numerazione alla data registrazione relativa. Cancellare una registrazione alla data X, infatti, lascerà un buco nella numerazione di questa data: solo intervenendo in inserimento/modifica di una delle registrazioni di questa data il numero sarà recuperato. In caso di registrazione provvisoria questo numero andrà in progressione negativa a partire dal numero -1000, in modo da rendere ben visibile all'utente che si tratta di una registrazione di questo stato: i report e le ricerche contabili sono impostate per filtrare di default solo sulle registrazioni definitive;

</details>


**Sottoconto intestatario della registrazione**: questo campo è **obbligatorio solo per registrazioni IVA,** in quanto è legato all'anagrafica cliente/fornitore intestataria del documento registrato. 

<details>

  <summary>Ulteriori dettagli (Click to expand)</summary>

Questo campo, normalmente, non va compilato in caso di registrazioni di pagamento/incasso, in quanto normalmente nella stessa registrazione si effettuano vari pagamenti/incassi su soggetti differenti. In questa situazione viene utilizzato come filtro delle partite aperte il campo presente nella scheda *Pagamenti*. 

In caso sia premuto il pulsante di creazione di una *Nuova registrazione* da quella in gestione è possibile impostare i **parametri di inserimento** in modo che questo campo sia proposto anche in quella nuova. La causale contabile, infine, può prevedere un  **[controllo di coerenza](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** tra il tipo conto inserito in questo punto e quanto previsto in causale; 

</details>


**Causale**: questo campo è **obbligatorio**: ogni registrazione si basa infatti su una causale di riferimento che ne regola le caratteristiche e il funzionamento. 

Questo campo non è più modificabile una volta salvata la registrazione (chiaramente saranno bloccati altri campi nel caso in cui sia stato stampato in definitivo il registro IVA o il giornale o sia stata effettuata la chiusura automatica conti): nel caso in cui la causale sia errata bisogna necessariamente cancellare e reinserire la registrazione con il codice corretto. 

In caso sia premuto il pulsante di creazione di una *Nuova registrazione* da quella in gestione è possibile impostare i **parametri di inserimento** in modo che questo campo sia proposto anche in quella nuova;

**Registro IVA**: viene riportato dalla causale di contabilità selezionate non è modificabile manualmente: 

**Protocollo IVA**: è un campo numerico che viene gestito automaticamente dalla procedura per ogni registro: all'apertura della maschera sarà proposto il *max protocollo + 1* per il registro impostato, poi al salvataggio verrà confermato o meno a seconda del caso che siano stati effettuati altri salvataggi per quel registro o vi siano protocolli IVA da recuperare. 

<details>

  <summary>Ulteriori dettagli (Click to expand)</summary>

Il recupero protocolli cambia a seconda che nella causale sia inserito o meno il blocco del salvataggio con numerazione non progressiva (trattasi di un controllo di coerenza tra data registrazione e numero di protocollo), con il blocco attivo sarà recuperato un protocollo libero solamente se la data registrazione è coerente, senza il blocco sarà proposto anche un protocollo non valido per quella data, con i relativi messaggi di avvertimento all'utente. 

Il campo del protocollo viene disabilitato in caso di registrazione provvisoria;

</details>


**Tipo documento**: viene proposto dalla procedura sulla base del valore impostato nelle causali di contabilità generale: è modificabile, ma si tratta di una modifica normalmente non necessaria (tipicamente serve specificare i documenti delle registrazioni IVA, esempio FV = Fatture di vendita o FA = Fatture di acquisto, mentre tutti gli altri movimenti avranno sempre un documento di tipo GEN = Generico);

**Data documento**: è un campo obbligatorio o meno a seconda delle  **[impostazioni delle causali di contabilità:](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** questa data non può essere superiore alla data di registrazione e deve essere all'interno del range di date di validità relativo al  **[periodo in linea per l'esercizio di riferimento](/docs/configurations/parameters/finance/accounting-parameters)** della registrazione. In caso sia premuto il pulsante di creazione di una *Nuova registrazione* da quella in gestione è possibile impostare i **parametri di inserimento** in modo che questo campo sia proposto anche in quella nuova;

<a id="campo_progetto" style={{ textDecoration: 'none' , color: 'inherit' , fontWeight: 'bold' }}></a> 

**Numero documento**: Si inserisce in questo campo il numero della fattura per le scritture contabili IVA 

<details>

  <summary>Ulteriori dettagli (Click to expand)</summary>

è un campo alfanumerico di 20 caratteri: a seconda delle impostazioni della causale viene bloccato l'inserimento dello stesso numero/anno (preso dalla data documento) / tipo (campo tipo documento) per lo stesso codice inserito nel campo sottoconto della testata della registrazione (questo blocco è inserito di default su ogni causale contabile, ma può essere disabilitato). In caso che sia lo stesso numero/anno/sottoconto ma il tipo sia differente viene invece restituito un semplice messaggio di avvertimento all'utente. Allo stesso modo, il messaggio di avvertimento viene restituito anche se lo stesso riferimento è salvato in una registrazione provvisoria;

</details>

**Campo Progetto** (ex commessa): è attivo solo se la causale di contabilità prevede la gestione progetti (ex flag 'Commessa'): questo progetto è quello di riferimento per tutta la registrazione, ma sarà possibile riattribuire i valori all'interno della scheda **Progetto** della stessa.

:::danger ATTENZIONE
la tab Progetti è attiva solamente quando all'interno dell'anagrafica generale della società (Configurazione > Tabelle >Impostazioni generali > Società) il flag **Gestione Controlling** è **disattivato**. Ciò significa che **non** è attivo il modulo di gestione del controllo di gestione in modalità **completa**.  
Nel caso in cui il flag **Gestione Controlling** sia **attivo** la gestione del progetto (o commessa, secondo la precedente dicitura) avverrà in maniera diversa, ovvero sarà necessario attribuire il progetto (commessa) attraverso un particolare centro di costo (oggi centro aziendale) avente come [**dimensione**](/docs/configurations/tables/controlling/analytical-accounting/dimension) (si veda la documentazione dell'area controlling) quella adatta alla gestione delle commesse.
:::

**Divisa**: proposta in via prioritaria dall'anagrafica intestataria della registrazione, in alternativa dalla divisa della società: può essere comunque modificata di volta in volta. Una volta salvata la registrazione il campo non è più modificabile;

**Data valuta**: è la data di riferimento del cambio, così come inserito nella tabella cambi valuta: la procedura legge in questa tabella la più recente data inserita con il relativo tasso di cambio rispetto al presente campo. 

<details>

  <summary>Ulteriori dettagli (Click to expand)</summary>

Nei *parametri di inserimento* questa data può essere impostata come data registrazione (default) o come data documento. 
E' previsto un parametro utente di avviso quando non è impostata un cambio alla data della registrazione (e quindi viene utilizzato un cambio antecedente);

</details>

**Cambio Diretto / Cambio inverso**: è il valore del cambio così come inserito nella tabella cambi valute: vengono esposti contemporaneamente sia il cambio DIRETTO (quello che normalmente si legge nei cambi valute), sia  il valore INVERSO. 

<details>

  <summary>Ulteriori dettagli (Click to expand)</summary>

L'utilizzo del valore inverso  deriva dal fatto che la procedura ha mantenuto la logica *incerto per certo* derivante dalla gestione lire – quante lire per una unità della seconda divisa – mentre l'euro ha cambi *certo per incerto* – con 1 euro quante unità ottengo della seconda divisa. Tale valore può essere forzato manualmente dall'utente (caso tipico: causali di pagamento/incasso in divisa, il valore del cambio applicato dalla banca non sarà mai quello ufficiale dei cambi internazionali);

</details>

**Totale divisa / Totale documento**: sono campi legati tra loro attraverso il cambio, quindi, in registrazioni in euro sarà indifferente scrivere l'importo in uno o nell'altro.  
In una registrazione in divisa estera, solitamente, si inserisce il valore nel campo del Totale in divisa ottenendo il controvalore in Euro.

<details>

  <summary>Ulteriori dettagli (Click to expand)</summary>

**[La causale contabile](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates#13-parametri)** può prevedere che questi siano aggiornati automaticamente al variare dei dati inseriti all'interno della griglia IVA, solo in incremento oppure anche in decremento. Il salvataggio della registrazione può essere bloccato se questo importo non è uguale ai dati IVA della registrazione;

</details>

**Totale imposta**: Campo visualizzato alla base della griglia IVA, per visualizzarne l'importo complessivo, che viene aggiornato sempre automaticamente dalla procedura, non va inserito manualmente.

### Piede (Footer)

In basso nella form, nella scheda *Registrazione*, è presente la **descrizione movimento** della registrazione contabile: si tratta di una nota che si può impostare all'interno della causale di contabilità attraverso l'uso dei codici numerici parametrici (1) (2) … (10) 


<details>

  <summary>Ulteriori dettagli (Click to expand)</summary>

i codici (8) e (9) si utilizzano solo nelle descrizioni di dettaglio dei sottoconti nella sezione del libro giornale. Con un doppio click nel campo è possibile aprire una ricerca all'interno delle note codificate (procedura presente all'interno delle Utilità: la modifica manuale di questa descrizione sarà eventualmente resettata su conferma utente una volta modificato uno dei campi gestiti automaticamente nelle note.

Alla base della maschera, aprendo la sezione espandibile (expander), sono presenti ulteriori campi di riepilogo dei dati IVA e della registrazione: meritano in particolare un'annotazione i campi dedicati alla visualizzazione dello sbilancio della registrazione, cosa normalmente non consentita (ma che si può abilitare nelle impostazioni della causale in uso). 

</details>

Lo **sbilancio dare avere** serve per un controllo di quadrature al fine di poter salvare la registrazione. 

<details>

  <summary>Ulteriori dettagli (Click to expand)</summary>

A meno che non venga disabilitato il controllo all'interno dei parametri della causale contabile, cosa che sconsigliamo caldamente a meno di esigenze del tutto particolari.

Il valore dello sbilancio sarà proposto come importo nelle nuove righe di contabilità che saranno inserite manualmente nella registrazione al fine di bilanciarla automaticamente.


</details>


#### Pulsanti specifici della Ribbon Bar

> **Parametri di inserimento**: richiama i parametri di inserimento della prima nota. 

- *Data competenza economica*: presente nella griglia del registro IVA e riportata in automatico in quella del Libro giornale, può essere proposta come giornaliero (pari alla data registrazione sia per "da data" sia per "a data"), fine esercizio ("a data" sarà impostato 31/12/XXXX), e nessuna per conti di tipo servizi (dove sarà lasciata in bianco se il conto di contropartita utilizzato è di tipo "da rettificare" ovvero utile per il calcolo dell'assestamento, al fine di obbligare l'utente a definire il range di date);  
- *Avvisa sbilancio in valuta*: controlla se anche la colonna 'Importo in valuta' nel Libro Giornale bilancia (anche se rappresentata su un' unica colonna il programma conosce la sezione del movimento);   
- Avvisa data cambio: poiché il cambio proposto in automatico nella registrazione è l'ultimo cambio inserito nella tabella "cambi valute", verifica che la data del cambio in tabella "cambi valute" sia uguale a data registrazione;  
- *Sottconto (Nessuno / Ultimo introdotto)*: riferito al sottoconto intestatario della registrazione inserito in testata.

 > **Pulsanti di ricalcolo**: aggiornano i valori con un refresh / ricalcolo
    - Iva
    - Libro Giornale
    - Centri di costo (se si è posizionati nella Tab Analitica)
    - Partite (se si è posizionati nella Tab Partite)

## **2. Registrazione**

### 2.1 Estremi IVA del documento  
La sezione è presente **solo per registrazioni IVA** (dove nella causale contabile è settato un **registro IVA** ed un tipo di movimento iva coerente).  

In caso di **inserimento manuale** di una nuova registrazione la sezione può essere compilata in più modi:  

- >*l'anagrafica cliente/fornitore/agente intestataria della registrazione non ha alcun sottoconto di contropartita predefinito e nemmeno l'aliquota iva standard*: in questo caso l'utente seleziona il **Tipo IVA** (vedi sotto il dettaglio) così come il **sottoconto** di contropartita per la riga e **l'aliquota IVA** relativa. Una volta impostato anche questo la procedura provvederà a scorporare il totale del documento/registrazione inserito in testata per assegnare gli importi relativi alle varie colonne della riga. L'utente potrà modificare questi valori e procedere a nuovi inserimenti, sempre con la stessa logica. L'importo proposto sarà calcolato sulla base della differenza mancante a coprire il totale della registrazione;  
- >*l'anagrafica cliente/fornitore/agente prevede il sottoconto di contropartita predefinito e/o l'aliquota IVA*: una volta inserito il **Tipo IVA** la procedura propone il sottoconto di contropartita e/o l'aliquota predefinita, gli importi vengono inseriti come nel caso precedente scorporando il totale documento/registrazione e l'utente potrà modificarli manualmente: la prossima riga, nuovamente, proporrà sottoconto/aliquota dall'anagrafica e l'importo ottenuto dal residuo fino a copertura del totale documento/registrazione;  
- >*l'anagrafica cliente/fornitore (non è gestito per gli agenti) prevede una lista di sottoconti di contropartita, nessun sottoconto di contropartita predefinito, ed è presente l'aliquota IVA predefinita*: in questo caso l'applicativo proporrà direttamente nella sezione IVA la lista dei sottoconti di contropartita predefiniti, ognuno con la relativa aliquota IVA di dettaglio o con l'aliquota predefinita dell'anagrafica, e l'utente dovrà inserire gli importi manualmente riga per riga. In questo caso l'aggiunta manuale di una nuova riga non proporrà il sottoconto relativo ma la sola aliquota IVA, scorporando l'importo mancante fino a copertura del totale documento/registrazione.

**Tipo IVA**: è una tabella fissa interna del sistema e contiene i valori:  
> - **Generico**: è il tipo **standard** di movimento IVA, sufficiente nella quasi totalità dei casi. Questo tipo riga viene considerato in alcune procedure IVA come movimento merce;  
> - **Destinato alla rivendita**: è da utilizzare per gli acquisti che sono base di calcolo delle percentuali da applicare nella ventilazione dei corrispettivi (ad es. per supermercati o farmacie: questi dettaglianti non applicano l'IVA articolo per articolo, ma viene loro consentito di fare un totale unico delle vendite di fine periodo e suddividere gli importi secondo la proporzione degli articoli acquistati nel periodo);  
> - **Arrotondamenti**: si tratta degli arrotondamenti fuori campo IVA, tipici ad esempio delle bollette telefoniche. L'utilità di questa indicazione è minima, comunque il sottoconto relativo viene inserito secondo la logica vista poco sopra;  
> - **Vendita IVA 74Ter**: si tratta di un tipo movimento specifico per le agenzie di viaggio, per le quali la data competenza IVA slitta di 30 giorni rispetto alla data dell'operazione (vendo in data odierna, l'IVA sarà da versare nella liquidazione del prossimo mese). Su queste righe viene applicata la gestione IVA del 74Ter con la liquidazione IVA periodica relativa;  
> - **Rivendita**: si tratta delle vendite sulle quali l'applicativo andrà ad applicare il calcolo della ventilazione dei corrispettivi;   
> - **Operazione non agricola**: si tratta di un tipo movimento specifico per le società soggette a regime agricolo, serve per escludere da questo regime (impostato nella causale contabile) per la riga specifica;  
> - **Servizio**: si tratta di un tipo movimento specifico per identificare che la riga deriva da un acquisto/vendita di servizi, elemento importante in alcune procedure IVA (ad esempio glie elenchi **INTRASTAT**).

**% Indetraibilità**: viene ripreso dall'aliquota IVA inserita nella riga. Se ne sconsiglia la forzatura manuale, l'operazione corretta è modificare l'aliquota IVA;  DEtermina il calcolo della colonna (imposta) *indetraibile*

**Imposta**: può essere forzato manualmente rispetto al calcolo effettuato  dalla procedura: può succedere, infatti, che il documento in acquisto abbia un arrotondamento non gestito correttamente, l'utente deve registrare il documento così come lo riceve;  

**Totale valuta / totale**: sono campi calcolati e non memorizzati a livello di database;  

**Da data competenza/A data competenza**: sono le date di **competenza economica**, fondamentali per i **calcoli** automatici delle **rettifiche e integrazioni** sia a livello di bilancio infrannuale che di bilancio contabile. Sulla base della loro indicazione saranno calcolati i ratei ed i risconti.  

<details>

  <summary>**ESEMPIO** Click to expand!</summary>
 
siamo al 31/03/anno X. 

Se la registrazione di costo riporta date di competenza 31/03/X - 31/03/X+1, in data 31/12/X al lancio delle procedure di assestamento sarà calcolato un risconto attivo per la quota parte del costo di competenza 01/01/X+1 - 31/03/X+1.

Se la registrazione di costo eseguita il 31/01/X riporta date di competenza 31/01/X-1 -31/01/X, al lancio delle procedure di assestamento in data 31/12//X-1 verrà calcolato un rateo passivo per la quota parte di costo di competenza 31/01/X-1 - 31/12/X-1

</details>

Questo range di date può essere gestito automaticamente, a seconda dei ***Parametri di inserimento***, in 3 modi alternativi: 

- >*Fine esercizio* con la quale la data iniziale viene proposta sulla base della data documento e quella finale come data fine esercizio 
- >*Giornaliera* (con la quale entrambe le date sono impostate sulla base della data documento);
- >*Nessuna data per tipo conto servizio* (opzione consigliata) l'applicativo non proporrà nessuna data per i sottoconti economici che prevedono nel tipo conto il flag *servizio* ma obbligherà l'utente all'inserimento manuale del range corretto (con gli altri tipi conto proporrà la stessa data documento su entrambe le date).

:::important[Attenzione]
perché possano essere calcolati automaticamente i ratei e risconti dalla procedura di assestamento è necessario che il tipo conto utilizzato per i conti interessati dalle rettifiche sia definito nella tabella **[Tipi conto](/docs/configurations/tables/finance/account-types)** con il flag Servizio.

Esempio di tipi conto che hanno il flag servizio nella tabella Tipi conto (nei database standard) "Costi da rettificare" e "Ricavi da rettificare".

Il tipo conto idoneo viene assegnato al sottoconto in questione direttamente nel piano dei conti.
:::

**Mese**: è il **periodo di riferimento IVA per la registrazione**, ottenuto rispetto al tipo di liquidazione e alla data di competenza IVA. Il campo utilizzato effettivamente nella liquidazione, comunque, è la data competenza IVA; 
 
**Data competenza IVA**: il campo viene proposto rispetto all'impostazione della causale contabile, tipicamente come data registrazione per gli acquisti e data documento per le vendite (se il movimento è vendita 74Ter allora è data documento + 30gg). Questa è la **data di riferimento per la stampa della liquidazione IVA periodica**; 
 
**Competenza plafond**: questa data viene presa come riferimento per il concorso della registrazione in questione al calcolo del plafond; viene proposta pari alla data documento per tutte le aliquote IVA che prevedono la gestione del plafond IVA;  

**Nota variazione anni precedenti**: il campo è attivo solo per registrazioni con tipo documento che prevede il flag *Nota di variazione*. Serve ad indicare che la riga della nota di credito è riferita ad anni precedenti rispetto all'anno del documento.
  
**Data riferimento nota di variazione**: il campo è attivo solo per registrazioni con tipo documento che prevede il flag *Nota di variazione*. Serve ad indicare la data di riferimento della fattura rettificata; 

**Divisione**: il campo è visibile solo se la causale prevede la gestione delle divisioni. In questo caso sarà possibile suddividere la stessa registrazione IVA su più divisioni aziendali.

#### Annotazioni ulteriori:  
- non è possibile salvare **righe IVA con imponibile 0** a meno che la causale contabile non lo consenta (flag *consenti sottoconti con valore 0*); 
 
- gli **arrotondamenti dell'IVA** sono gestiti riga per riga, mentre la normativa prescrive che il calcolo sia effettuato su un imponibile che raggruppa tutte le righe con la stessa aliquota IVA: è possibile, quindi, che ci sia una differenza dovuta unicamente alla gestione arrotondamenti (il discorso vale solo per l'inserimento manuale di una registrazione contabile: le contabilizzazioni automatiche da acquisti e dalle vendite effettuano già il calcolo corretto) rispetto al documento in registrazione.
 
    Una volta rilevata la differenza le soluzioni sono: 
        1. forzare manualmente una riga IVA 
        2. premere il pulsante di ricalcolo imposta che si trova nella testata e far allineare automaticamente dall'applicativo l'ultima riga di ogni aliquota presente.

### 2.2 Libro giornale

<details>

  <summary>Click per visualizzare l'esempio</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/record-tab/image02.png)

</details>

Ogni registrazione di contabilità generale **deve obbligatoriamente avere righe in questa sezione** per poter essere salvata.

- > In caso di **registrazioni IVA** questa parte viene **calcolata**, sulla base della logica dei ***tipi importo***, secondo i dati caricati nelle righe della precedente **griglia IVA**; 

- > in caso di registrazioni di **pagamento/incasso**, invece, gli importi **dipendono dagli importi dei pagamenti caricati nella scheda *Pagamenti***; 

- > negli **altri casi**, invece, le righe e gli importi saranno gestiti in generale **manualmente** dall'utente.  

:::note[Nota]
la causale può proporre una lista di sottoconti preimpostati: l'utente dovrà in questo caso inserire riga per riga soltanto gli importi nella sezione Dare / Avere corretta. 

Al momento del salvataggio, se la causale non prevede il salvataggio di sottoconti a zero, le righe non valorizzate saranno cancellate automaticamente;

Questa modalità di utilizzo è tipica, ad esempio, pr le scritture delle paghe dipendenti dove il template della causale propone tutti i possibili sottoconti utili, ma di volta in volt se ne utilizzano solo alcuni 
:::

<details>

  <summary>Ulteriori dettagli (Click to expand)</summary>
 
- in caso di registrazione semplice ‘dare/avere' è possibile codificare una causale specifica che preveda già i sottoconti da utilizzare con il tipo importo ‘Tot. Doc./Registrazione' per far si che l'utente scriva semplicemente l'importo nei campi dei totali di testata e la procedura li metta in dare/avere secondo la causale;
  
- ogni nuovo inserimento manuale delle righe andrà a coprire l'eventuale sbilancio presente nella registrazione: si ricorda che le registrazioni sbilanciate non possono essere salvate, se non abilitando la causale.

</details>

#### Campi specifici della griglia Libro Giornale

**Valuta**: può prevedere i dettagli della valuta (data cambio, valore cambio e importo valuta): l'importo valuta va caricato sempre in valore assoluto (il segno dare/avere nella divisa della società definisce anche il suo segno); i campi in valuta e nella divisa della società possono essere svincolati tra loro non ricalcolando gli  importi ai messaggi di conferma che sono eseguiti in modifica degli stessi;  
**Da data competenza/A data competenza**: questo range di date, come detto già per la sezione IVA, è fondamentale per la gestione delle scritture di assestamento sia per i bilanci infrannuali che per il bilancio contabile. Si rimanda alle note specifiche inserite sopra;  
**Divisione**: può essere presente se impostato in causale, può servire per suddividere la stessa registrazione su più divisioni;  
**Descrizione dettaglio** (ne è consigliato l'inserimento di default su tutte): può essere presente se impostato in causale, anche questo può essere in parte gestito automaticamente in causale con le note (1) – (2) … ecc come per la descrizione generale. Di particolare interesse la gestione dei codici (8)-(9) relativamente alle righe clienti/fornitori di chiusura partite contabili;  
**Data valuta banca**: Il campo può essere automatizzato rispetto al numero di giorni impostato, su ogni anagrafica banche, per ogni causale contabile che le riguarda;  
**Num. riga**: può tornare utile per registrazioni particolarmente lunghe (es. paghe) per mantenere in ordine di inserimento i vari sottoconti;  
**Rif. manuale partite**: può essere presente, se impostato in causale, può servire per legare manualmente righe di contabilità senza passare per la gestione a partite aperte;  
**Sottoconto di contropartita**: può essere presente, se impostato in causale, ne è sconsigliato l'uso manuale. La gestione automatica in registrazioni IVA prevede per le righe clienti/fornitori di assegnare il sottoconto di costo/ricavo  di importo maggiore, mentre per le righe di costo/ricavo/IVA la contropartita sarà il sottoconto cliente/fornitore.

#### Ulteriori annotazioni  

l'utente può procedere a forzare manualmente le righe di libro giornale: normalmente si consiglia di allineare i dati a partire direttamente dall'IVA. Eventuali forzature possono essere resettate premendo il pulsante di ricalcolo libro giornale.  
Nella causale contabile, in particolare per tutte le causali IVA, per la riga con il *Tot. Doc./registrazione* si inserisce il conto generico dei clienti/fornitori, che sarà sostituito di volta in volta con il sottoconto intestatario della registrazione: questa sostituzione sarà effettuata solo se nei **[parametri di contabilità](/docs/configurations/parameters/finance/accounting-parameters)**, sezione lista conti clienti/fornitori, viene autorizzata (cioè inserita in griglia) la tipologia di sottoconto relativa associandola al conto mastro il quale dovrà corrispondere a quello presente nel template della causale contabile.

## 3. Partite

La scheda è presente **solo se la causale ha il flag 'Apertura partite'** impostato. 

### 3.1 Tipologia partite

è dedicata alla gestione dei dati di calcolo delle partite sottostanti e ricalca le condizioni di pagamento per una registrazione manuale di tipo IVA troveremo la griglia compilata con i dati di default così come inseriti all'interno dell'anagrafica cliente/fornitore/agente assegnata come sottoconto intestatario della registrazione stessa. Per altri tipi di registrazione (ad esempio, per i pagamenti anticipati è possibile codificare una causale che apra la partita, nel segno opposto, invece di chiuderla visto che il documento non è stato ancora rilevato): in questo caso la gestione di questa sezione diventa manuale, cosicché l'utente potrà inserire i dati essenziali del tipo di pagamento, della soluzione di pagamento e del sottoconto di riferimento, con il 100% inserito nel campo 'Percentuale'.  

Per questa sezione è da segnalare che:  
- la partita può essere creata anche su sottoconti non di anagrafica e che non hanno il flag Apertura partite nel piano dei conti (questo flag è relativo al solo controllo che i dati di giornale e partite corrispondano per i sottoconti che l'hanno impostato);  
- gli appoggi bancari sono riportati tipicamente dall'anagrafica o dal documento contabilizzato dall'area acquisti/vendite/percipienti, ma possono essere di volta in volta forzati richiamandone uno differente utilizzando l'help abi/cab (doppio click nel campo). L'appoggio bancario collegato in questa sezione sarà il dato normalmente utilizzato nei pagamenti fornitori quale banca beneficiaria del pagamento a meno che non sia impostato il flag di '**[Imponi banca d'appoggio presente in anagrafica del fornitore](/docs/configurations/parameters/treasury/vendor-payments-parameters)**';  
- normalmente viene inserito il campo '**Percentuale**'. Il significato dei campi 'Importo/Imposta' è il seguente: nel campo '**Importo**' si può inserire un importo fisso da utilizzare per la combinazione tipo pag./soluzione pag. della riga in gestione; il campo '**Imposta**' consente di definire, di questo importo, quanto sia riferibile all'IVA (questo serve nel caso in cui la soluzione di pagamento preveda delle percentuali imponibile/imposta differenziate tra le varie rate, per ottenere un calcolo corretto). È possibile inserire una combinazione importo/percentuale:

**Raggruppa partite**: il flag, non attivo, viene ripreso dall'anagrafica cliente/fornitore: sostanzialmente non ha uso pratico, in quanto è ben raro che due partite abbiano stesso tipo pagamento e stessa data scadenza all'interno dello stesso documento;

- al di sotto ci sono alcuni campi di riepilogo della situazione cliente/fornitore: l'importo del fido concesso nel modulo Rischio cliente, il valore dell'esposizione ottenuto secondo la situazione delle partite aperte (senza considerare la registrazione in uso) e il saldo contabile (considerando anche la registrazione in uso);

- nel caso di registrazione derivante dalla **contabilizzazione insoluti**, la griglia superiore NON ha nessuna rilevanza per il calcolo delle partite sottostanti (tipicamente l'anagrafica prevede partite per RB, ma gli insoluti vengono gestiti come BB e non si devono riemettere in automatico altre riba): viene letta unicamente nel caso serva il dato degli appoggi bancari.

### 3.2 Partite

presenta la lista delle partite calcolate secondo le impostazioni della sezione sopra: l'utente può forzare il tipo di pagamento, la data scadenza e gli importi delle varie rate (avendo cura di rispettare i totali). La griglia delle partite NON consente l'inserimento manuale di una nuova rata. 

Nel caso in cui la causale preveda sia l'apertura partite, che la chiusura per compensazione e sia stato attivato anche il flag 'Avviso', al momento del salvataggio della registrazione verrà restituito all'utente un messaggio di avviso della presenza di partite da poter compensare.

**Descrizione**: viene indicato lo stato della partita (aperta, parzialmente aperta, chiusa);  
**Conto/sottoconto/descrizione**: sottoconto cliente o fornitore al quale la partita è riferita;  
**Pag**: tipo pagamento (bonifico, contanti ecc...);  
**Scadenza**: data di scadenza calcolata a partire dalle condizioni di pagamento della griglia soprastante o imposta manualmente;  
**Cod. doc**: codice del documento che ha generato la partita (esempio FA = fattura di acquisto, FV = fattura di vendita);  
**Data documento**: data del documento (esempio fattura di acquisto) che ha generato la partita;  
**N. documento**: numero del documento che ha generato la partita;  
**Divisa**: divisa in cui è denominata la partita (es. EUR = Euro);  
**Cambio**: tasso di cambio che ha determinato il valore in valuta ed il controvalore in Euro della partita;  
**Data Valuta**: data di riferimento del tasso di cambio;  
**Importo in valuta**: pari all'importo in euro se il cambio è 1;  
**Importo Dare / Avere**: la partita ha un segno (o sezione che dir si voglia) così come il movimento contabile che l'ha generata. La partita con segno dare sarà una partita a nostro credito, mentre una partita con segno avere sarà una partita a debito (esempio a fronte di fattura ricevuta da fornitore o di nota di accredito emessa al cliente) ; 

E' inoltre possibile bloccare il pagamento della partita (Flag **Non Pagabile**): la procedura memorizzerà la data e l'utente che ha bloccato il pagamento con un'eventuale nota esplicativa (**Inizio Blocco, Utente Blocco, Note Blocco**) così come data e utente sbloccante (**Utente Sblocco, Fine Blocco**), per entrambe le operazioni sono previsti specifici diritti utente nell'ARM. 

**Numero / anno partita**: assegnati automaticamente per identificare la partita;  
**Posizione partita**: combo box collegata ad una una tabella libera definibile dall'utente, consente di classificare le partite contabili fin dal momento della loro creazione;  
**Note** (della partita): note libere che si possono anche legare automaticamente in causale contabile alla descrizione di dettaglio del sottoconto così come inserite in contabilità.  
**Agente**: in questo campo è possibile agganciare l'agente di riferimento per la partita: questo viene valorizzato automaticamente sulla base dell'agente inserito nella fattura di vendita all'atto della contabilizzazione (nel caso siano presenti più agenti, sarà assegnato quello con provvigioni superiori).  
**Data Rif / N. Rif**: Campi ripresi dalla data documento  e numero documento nella registrazione contabile (se presenti, altrimenti ripresi da data/numero registrazione), premettono di raggruppare e filtrare le partite/settlement riferite allo stesso documento (ad esempio una nota di credito che si riferisce ad una fattura, per visualizzare il partitario tutto insieme).  
**Cig** e **Cup**: ripresi dalla fattura di vendita, ma possono anche esser scritti a mano (tramite combo box) Si veda **[documentazione sui campi in fattura](/docs/sales/sales-invoices/invoicing/sales-invoice).**  
**Modelli di riferimento** e **Numero di riferimento**: campi solitamente non utilizzati in Italia, tipici della Croazia (dove quando l'azienda emette la fattura ad ogni scadenza associa un tipo/codice identificativo della rata, che il cliente poi riporta nel pagamento e la banca riporta nel movimento d'incasso: dall'estratto conto bancario, quindi, facilmente si può risalire alla rata chiusa. Il campi rappresentano un riferimento anche a seguito di una futura implementazione di importazione movimenti bancari).  
**Ritardo medio giorni di pagamento**: Non utilizzato in Italia: riprende il valore dei giorni di ritardo dell'anagrafica cliente ma è modificabile anche manualmente. Può essere utilizzato nella simulazione di cash flow.

#### Pulsanti specifici  
> **Cancella le partite**: permette di cancellare la partita creata in automatico in base alla tipologia di pagamento inserita.  
> **Cancellazione dalla griglia dei pagamenti**: permette di cancellare la soluzione di pagamento, proposta in automatico dall'anagrafica, o inserita manualmente.  
> **Ricalcola partite**: permette di ricalcolare la partita forzata manualmente.  
> **Raggruppa partite**: permette di raggruppare le partite in presenza di più partite con stessa data scadenza.  

## **4. Pagamenti** 

La scheda ‘Pagamenti' **è presente solo se la causale ha il flag ‘Chiusura partite' impostato**. Consente di visualizzare le partite aperte per procedere ai pagamenti/incassi con chiusura delle partite aperte o alle compensazioni.  

:::tip Info
Il tab è diviso in due griglie fondamentali, la prima, quella superiore, serve per ricercare le partite aperte al fine di chiuderle, la seconda, inferiore, conterrà il risultato della manovra di chiusura (ovvero i pagamenti risultanti)
:::

### Corretta configurazione dell'interazione tra Apertura, Chiusura e Compensazione Partite

- Tipicamente tutte le registrazioni di tipo IVA hanno il flag di 'apertura partite' e possono avere anche il flag di chiusura + compensazione partite; 

- Le causali di **pagamento/incasso**, invece, prevedono sempre la chiusura partite **senza mai il flag di compensazione**, eventualmente possono avere il flag di apertura partite per gestire i casi di pagamento anticipato (in questo caso, mancando la chiusura di una partita, verrà aperta una partita di segno opposto mantenendo la quadratura con il movimento contabile - quadratura che può essere resa obbligatoria tramite i **[parametri](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** della causale contabile). 

:::tip ATTENZIONE
Differenza tra pagamenti partite e compensazione partite:  
la compensazione, nella terminologia contabile, può essere intesa sia come compensazione partite (dare/avere) dello stesso sottoconto (ad es. fattura con nota di credito) ma anche come compensazione cliente/fornitore (ad es. compenso il debito nei confronti del sottoconto fornitore con il credito del sottoconto cliente facente capo alla stessa anagrafica).  
In questa form la compensazione è strettamente collegata alla situazione di partite facenti capo allo stesso sottoconto.  
La compensazione cliente/fornitore può essere gestita  semplicemente effettuando un **pagamento** partite (chiusura semplice) "incrociato" (sia dare che avere - ad esempio tramite un giroconto -  andando a "compensarsi" a saldo in contabilità).
In alternativa è possibile utilizzare due procedure più specifiche e flessibili: [**Compensazione partite**](/docs/finance-area/maturity-values/procedures/maturity-compensation) oppure [**Compensazione veloce**](/docs/finance-area/maturity-values/procedures/fast-compensation)
:::

Se in testata della registrazione è stato inserito un sottoconto intestatario, questo sarà riportato come filtro di ricerca nei campi relativi iniziali della scheda pagamenti: 

<details>

  <summary>Click per visualizzare l'esempio</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/record-tab/image02.png)

</details>

per tutte le registrazioni IVA, quindi, l'applicativo proporrà qui le partite del solo cliente/fornitore inserito in testata, per procedere alla compensazione fattura/nota di credito; 

nel caso di registrazioni di pagamento/incasso (soprattutto di più clienti o fornitori), invece, normalmente il campo in testata sarà vuoto e sarà l'utente a compilare il filtro secondo le esigenze. 

Da segnalare, in particolare, il campo del sottoconto **Banca**: non si tratta di un filtro, ma viene compilato automaticamente con il sottoconto di pagamento inserito in **[anagrafica](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance)** del cliente/fornitore intestatario della registrazione e da qui va ad aggiornare la registrazione contabile nel campo che prevede il tipo importo ‘Tot. Doc./registrazione' 

<details>

  <summary>Click per visualizzare l'esempio</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image03.png)

</details>

(se i **[parametri di contabilità](/docs/configurations/parameters/finance/accounting-parameters)**, nella lista dei conti clienti/fornitori, autorizzano la sostituzione, ovvero deve essere presente una associazione tra il tipo conto banche ed il relativo mastro nel piano dei conti affinché possa avvenire la sostituzione).

<details>

  <summary>Click per visualizzare l'esempio</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image04.png)

</details>

### Esecuzione della chiusura partita 

:::tip COME CHIUDERE LA PARTITA
Una volta individuata, nella prima griglia, la partita (o le partite) da pagare è possibile selezionarle e pagarle mediante **doppio click** sulla singola riga, oppure utilizzando il pulsante **Crea pagamenti**.
:::

Nel caso in cui la causale preveda la compensazione partita sarà attivo il pulsante di **Compensazione partite** (e il doppio click avrà lo stesso significato). 

Un altro pulsante utile in questa sezione è il **Crea pagamenti estesi**: 

<details>

  <summary>Click per visualizzare l'esempio</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image08.png)

</details>

si aprirà una maschera intermedia di impostazione dell'importo del pagamento con un eventuale importo di abbuono, con relativo sottoconto per la rilevazione contabile. 

:::note NOTA
In questa maschera relativa al comando *Pagamenti estesi* (solo qui) è possibile impostare lo stato **Forzatamente chiusa** ad una partita (tramite l'apposito flag): l'uso di questo stato è sconsigliato in quanto non viene determinato dalla normale creazione di un pagamento che chiude la partita ma ne forza lo stato, può essere utile per riallineare differenze ed errori non più individuabili per la normale correzione.  
Un risultato simile può essere ottenuto creando manualmente un pagamento e forzandone l'importo.  
Non è consentito di forzare il pagamento con un importo superiore al residuo della partita.
:::

Nella lista dei pagamenti possono essere inserite note degli stessi: queste note possono essere collegate automaticamente, in causale, con la descrizione generica della registrazione contabile (flag *descrizione in giornale e pagamenti*, sconsigliato).

Se il pagamento sarà gestito, secondo le **[impostazioni della causale](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**, al cambio storico della partita, non sarà rilevata nessuna differenza cambio in automatico e sarà gestirla manualmente in contabilità: l'opzione facilita inoltre, e la cosa è particolarmente utile, la gestione dell'uguaglianza tra partite aperte e saldo contabile. 

Diversamente, se l'opzione non è attiva, il controvalore euro sarà calcolato al cambio della data registrazione (e in questo caso, se impostato correttamente **[in causale](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** - vedere tipo importo Utile/Perd. diff. cambi - e **[nelle divise](/docs/configurations/tables/general-settings/currencies)**, la procedura valorizzerà automaticamente i sottoconti di utile/perdita cambi divisa per divisa). 

Attraverso il pulsante **Espandi/riduci** si può visualizzare una sola delle due griglie (ricerca partite o pagamenti). 

In basso saranno visualizzati campi di totalizzazione degli importi selezionati. 

Sulla base dei pagamenti effettivamente inseriti e delle impostazioni della causale, l'applicativo aggiornerà la riga con il tipo importo ‘Tot. Doc./registrazione' (ad esempio attribuito al sottoconto della banca di pagamento) con il totale dei pagamenti rilevati, mentre inserirà una riga per ogni pagamento o raggrupperà i pagamenti dare e avere, divisa per divisa, di ogni sottoconto cliente/fornitore pagato/incassato.

#### Pulsanti specifici  
> **Parametri di inserimento**: richiama i parametri di inserimento della prima nota.  
> **Ricerca partite**: permette di ricercare le partite da pagare/incassare.  
> **Cancella pagamenti**: permette di cancellare i pagamenti precedentemente selezionati.  
> **Crea pagamenti**: permette di creare il pagamento della partita selezionata.  
> **Compensazione**: permette di operare la compensazione partite se previsto nella causale contabile.  
> **Crea pagamenti estesi**: permette di gestire il pagamento/incasso con eventuali importi di abbuono e relativo sottoconto di rilevazione contabile.  
> **Espandi/riduci**: permette di ridurre la visualizzazione alla sola parte delle partite o pagamenti e viceversa o espanderla ad entrambe.  

## **5. Analitica**

E' dedicata alla gestione a centro di costo/profitto (oggi centri aziendali), è presente solo se la causale ha almeno uno dei due flag di gestione Centri di costo / Centri di profitto.

:::danger ATTENZIONE
La gestione dei centri di costo / profitto (oggi centri aziendali) sarà differente a seconda che siano attivate o meno le **funzionalità avanzate per il controllo di gestione** all'interno della tabella [**Società**](/docs/configurations/tables/general-settings/company).

Queste funzionalità, recentemente sviluppate, permettono una gestione più evoluta e flessibile del controlling (ad esempio consentendo analisi di centri aziendali multi dimensionali e reversioni di qualsiasi centro uno sull'altro) rispetto al set di funzionalità standard, le quali sono comunque tutt'ora disponibili decidendo di non attivare il **flag GESTIONE CONTROLLING** all'interno della tabella di cui sopra.
:::

 a seconda delle impostazioni della causale sarà presente una sezione, l'altra, o entrambe (in quest'ultimo caso con due opzioni: nel caso di ‘gestione separata cdc/cdp' entrambe saranno da valorizzare contemporaneamente, altrimenti la procedura attribuirà l'importo solo ad una delle due sezioni, i costi andranno sui centri di costo e i ricavi ai centri di profitto). 

Nel caso in cui si utilizzino le funzioni evolute per il controlling, sebbene sia possibile attivare nella causale contabile sia cdc che cdp, la valorizzazione di questi ultimi risulta superflua poiché si andrà a valorizzare unicamente i cdc (che assumono la nuova definizione di centri aziendali). I centri aziendali possono accogliere infatti sia componenti positivi (di profitto) che componenti negativi (di costo) e possono essere ribaltati a piacimento gli uni sugli altri secondo le logiche previste nel modulo conformemente al nuovo set di funzionalità in maniera totalmente flessibile.

Se nella causale contabile è stata attivata anche l'opzione **Gestione macchina** sarà presente anche una griglia di valorizzazione costi/ricavi agli automezzi aziendali (sotto alla griglia principale dei centri di costo)  
Richiamando l'automezzo tramite la combo box apposita sarà possibile attribuire anche i dati di dettaglio dello stesso.  
La combo box è collegata alla tabella Gestione automezzo (Logistica > Automezzi >Attività giornaliera > Gestione Automezzo)

### CAMPI PRESENTI NELLA GRIGLIA PRINCIPALE

Se le funzionalità avanzate del controlling sono attive è presente una struttura tipo pivot table che raggruppa, sottoconto per sottoconto, le attribuzioni dei movimenti contabili ai centri per dimensione di analisi. Infatti secondo le metodologie avanzate di cui sopra i centri aziendali devono essere attribuiti ad una dimensione di analisi creando quindi dei sottoinsiemi funzionali a diverse configurazioni possibili nello sviluppo della contabilità analitica.

Lo stesso sottoconto che accoglie il movimento di costo contabile, può dunque essere imputato contemporaneamente a più centri facenti riferimento a dimensioni (e quindi "raggruppamenti") diversi.

All'interno della stessa dimensione il movimento potrebbe poi essere ripartito (esempio al 50%) su due centri.

<details>

  <summary>Click per visualizzare l'immagine</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/cost-profit-centers-tab/image07.png)

</details>

**Conto / Sottoconto / Descrizione**: campi per l'inserimento del sottoconto contabile che viene attribuito al centro. I dati saranno riportati in automatico se è presente una associazione definita nel piano dei conti o in anagrafica (vedere sotto).

**Progetto**: Se nella causale contabile è abilitato il flag Progetti (ex Commesse) è visibile questo campo che permette di attribuire il movimento ad un progetto. Il widget fa riferimento alla tabella Progetti (Gestione Progetti > Progetti > Progetti)

:::danger ATTENZIONE:
se le funzioni avanzate del controlling sono attive, è previsto che il progetto possa essere attribuito soltanto agganciandolo ad un centro aziendale associato alla dimensione di tipo Commessa oppure alle dimensioni per le quali è stato attivato il flag **Abilita commessa**.  

Tale dimensione (che può essere nominata a piacere, anche se si consiglia un nome chiaro, ad esempio "Commesse" o "Progetti") viene agganciata alla corretta tipologia tramite un flag presente nella tabella **Dimensioni** (Configurazione > Tabelle >Controlling > Contabilità analitica > Dimensione) 
:::

**Centri di costo / Descrizione centri di Costo**: campi per l'inserimento (tramite combo box posizionata sul campo Centri di costo) del centro sul quale attribuire il costo (o profitto). La combo box fa riferimento alla tabella **[Centri Aziendali](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers)** (Configurazione > Tabelle >Controlling > Analitica > Centri Aziendali).  
**Divisa**: valore ripreso dai dati della registrazione contabile, specifica la divisa (che presenta poi il controvalore in Euro) del movimento che viene attribuito.  
**Data Valuta**: Data valuta del cambio tra divisa ed Euro (ripresa dal movimento contabile).  
**Cambio**: Valore del cambio tra divisa ed Euro (ripresa dal movimento contabile).  
**Importo Valuta**: Importo in divisa del movimento (ripreso dal movimento contabile in caso di attribuzione totale del movimento ad un singolo centro oppure definito attraverso la percentuale di attribuzione nel piano dei conti o in anagrafica); il valore può essere variato manualmente per definire l'attribuzione ai centri desiderata in caso di ripartizione del costo su più centri. Il campo si presenta su un'unica sezione e viene poi inserito nella sezione dare o avere del movimento in euro seguendo lo schema della causale contabile o della registrazione (Tab Registrazione), ma può essere poi forzato.

**Importo Dare / Importo Avere**: Importo in Euro del movimento (ripreso dal movimento contabile in caso di attribuzione totale del movimento ad un singolo centro oppure definito attraverso la percentuale di attribuzione nel piano dei conti o in anagrafica); il valore può essere variato manualmente per definire l'attribuzione ai centri desiderata in caso di ripartizione del costo su più centri.

**Da Data Competenza / A Data Competenza**: Ripresi dal movimento contabile  (possono eventualmente essere forzate). Permettono la rettifica per competenza economica (ratei e risconti) anche dei movimenti dei centri.

**Descrizione di Dettaglio**: Ripresa dall'omonimo campo nelle righe del movimento contabile. 

#### Il caricamento dei dati nelle sezioni cdc/cdp può essere automatizzato in due modi:

- attraverso l'assegnazione dei centri nel piano dei conti, ai sottoconti di costo/ricavo, valorizzando la percentuale di attribuzione del valore di ogni conto ad uno o più centri. Per maggiori dettagli vedere **[Piano dei conti](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)**. 

- nelle anagrafiche clienti/fornitori, (sempre in percentuale) nel qual caso tutti i sottoconti economici inseriti nella registrazione intestata al soggetto saranno valorizzati allo stesso modo e attribuiti al centro indicato in anagrafica. 

La priorità di valorizzazione, tra la regola impostata nel piano dei conti e quella definita nell'anagrafica, si imposta all'interno dei **[parametri di contabilità generale](/docs/configurations/parameters/finance/accounting-parameters)**.

Sono consentite modifiche manuali agli importi calcolati, così come direttamente un inserimento manuale delle righe: in questo secondo caso la procedura proporrà automaticamente gli importi per coprire, sottoconto per sottoconto, il totale movimentato in contabilità, riportando lo stesso range di date di competenza. È importante segnalare, infatti, che le procedure di rettifica e integrazioni prevedono anche la rettifica dei movimenti assegnati a centro di costo/profitto.

Al momento del salvataggio della registrazione l'applicativo procederà a ritornare una maschera con i dettagli delle differenze di valorizzazione, bloccando eventualmente il salvataggio se così è impostato nella causale in uso.

#### Pulsanti specifici  
> **Cancella i centri di costo selezionati**: permette di cancellare i centri di costo selezionati.  
> **Cancella i centri di profitto selezionati**: permette di cancellare i centri di profitto selezionati.  
> **Espandi/riduci**: permette di ridurre la visualizzazione alla sola parte dei centri di costo o profitto e viceversa o espanderla ad entrambe.  

## **6. Progetti**

La tab **Progetti** (ex *Commesse*) è presente solo se la causale ha il flag *Progetti* impostato.

:::danger ATTENZIONE:
se le funzioni avanzate del controlling sono attive (flag *Gestione controlling* nella tabella Società), è previsto che il progetto possa essere attribuito soltanto agganciandolo ad un centro aziendale a sua volta attribuito ad una dimensione di tipo Commessa.

**Se le funzioni avanzate per il controlling sono attive, pertanto, la tab in commento NON sarà visibile**. 

Rimane invece visibile il campo presente nella testata della registrazione per l'attribuzione del Progetto (ex Commessa) alla registrazione nel suo complesso anzichè al dettaglio dei movimenti.
:::
 
In questo tab saranno assegnati ai vari Progetti (commesse di vendita) i dati economici rilevati nella registrazione di contabilità: automaticamente saranno assegnati tutti alla commessa inserita in testata, ma l'utente potrà suddividere gli importi in modo differente manualmente direttamente in questa sezione.

Nell'inserimento manuale degli importi il software provvederà automaticamente ad attribuire il valore residuo al fine di quadrare il movimento contabile. Sono previsti controlli del bilanciamento degli importi con la contabilità generale e la possibilità di bloccare il salvataggio della registrazione in caso di differenze (vedere '** [parametri](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**' della causale).

## 7. Cespiti

La tab Cespiti è dedicata alla gestione dei beni ad uso pluriennale: sarà utilizzato per rilevare acquisti, incrementi, alienazioni e distruzioni.

ATTENZIONE: La tab è visibile solamente se la causale contabile che si sta utilizzando presenta al suo interno il flag '**cespiti**' attivo. Inoltre è opportuno impostare, sempre nella causale (tab **[Dettaglio registrazione](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**), il **tipo di operazione** da compiere, tramite la combo box accanto al flag di cui sopra (acquisizione, dismissione, distruzione ecc...). Pertanto sarà opportuno creare diverse causali dedicate ai cespiti ed adatte a compiere le diverse operazioni possibili. 

### Tabella superiore

E' dedicata alla codifica del nuovo cespite acquistato oppure alla selezione del cespite esistente per rilevare una nuova operazione al suo interno. **Per inserire un nuovo cespite** è sufficiente procedere a compilare una nuova riga, 
mentre **per selezionare un cespite esistente** bisogna necessariamente utilizzare il pulsante denominato **Seleziona cespite esistente** presente nella ribbon bar al fine di richiamare la scheda cespite già esistente ed integrarla.  

#### PROCEDURA PER L'INSERIMENTO:

- selezionare la **Categoria cespite** di appartenenza tramite la combo box (la quale è collegata alla tabella '**[categoria cespite](/docs/configurations/tables/finance/fixed-asset-category)**'),  
- selezionare il **Tipo di proprietà** (normalmente è proposto 'cespite di proprietà' di default), (**Note proprietà**: campo per inserire un'ulteriore annotazione libera)  
- assegnare un eventuale **Precodice** (se si desidera ottenere una numerazione all'interno di questo precodice, non sono infatti possibili due schede cespiti con lo stesso numero se non utilizzando un precodice che permette di attribuire una nuova numerazione ad esso riferita) la combo box è collegata alla tabella '**[Precodice cespite](/docs/configurations/tables/finance/fixed-asset-precode)**'  
- confermare la numerazione progressiva assegnata in automatico alla scheda cespite, oppure imporre il numero desiderato (anche tramite la combinazione con il precodice)  
- inserire la '**Descrizione cespite**' (che sarà riportata nella scheda cespite ed utilizzata in tutti i report del modulo quali il libro cespiti e le stampe delle schede). 

Tutti questi campi saranno ripresi direttamente dal cespite già esistente nel caso di operazione aggiuntiva. 

- inserire l'**Importo** (valore patrimoniale corrispondente al costo dell'operazione, ovvero all'imponibile più l'eventuale iva indetraibile in caso di acquisto oppure prezzo di vendita in caso di alienazione totale o parziale);

- inserire l'**aliquota iva** tramite l'apposita combo box.

Il campo **% ind**. che riguarda la percentuale di indetraibilità dell'iva, normalmente è compilato in automatico e dipende dal codice iva selezionato tramite il settaggio impostato nella tabella **[Aliquote e modalità iva](/docs/configurations/tables/finance/vat-rates)**, se ne sconsiglia la modifica manuale.

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

**Tipo Ammortamento**: combo box che permette di selezionare la tipologia (codice) di ammortamento oggettivo (un ammortamento tecnico ed extra-contabile) da applicare; la **Descrizione** del codice selezionato è visualizzata nel campo adiacente; la combo box è collegata alla tabella **[Tipi Ammortamenti Oggettivi](/docs/configurations/tables/finance/objective-amortization-types)** (Tipo Ammortamento).

**Al salvataggio della riga potrebbero comparire, a seconda dei casi, diversi messaggi**:

- "Il cespite ha valore inferiore a ___. Vuoi ammortizzarlo al 100%?": la categoria cespite ha impostato un valore nel campo del ‘limite amm. totale' e il valore inserito per il nuovo cespite è inferiore: siamo nel caso dei cespiti di valore inferiore a 516 € (il vecchio milione di lire) che la normativa fiscale consente di girare direttamente a costo (cioè ammortizzare al 100%) direttamente nell'anno di acquisto. Scegliendo Si (Yes) sarà eseguito l'ammortamento al 100% il primo anno, tramite l'aggiornamento del flag nella testata dell'anagrafica cespite in modo da essere gestito in modo specifico nella procedura automatica di ammortamento;

- "Vuoi legare l'alienazione parziale ad un'operazione patrimoniale già esistente?": la causale è di vendita parziale e la categoria cespite non ha il flag ‘incrementale': in questo caso sarà eseguito il messaggio per una assegnazione dell'importo di alienazione ad una specifica operazione patrimoniale del cespite. Esempio: per un cespite ‘non incrementale' ogni singola riga di operazione viene gestita a livello di ammortamenti con una vita a se stante: l'alienazione parziale (rispetto a tutto il cespite) potrebbe essere in realtà gestita come una vendita totale della singola operazione (ad es.: ho un computer, lo incremento con uno scanner, poi vendo solo lo scanner).

**Scegliendo Si (Yes)** verrà visualizzato un help (popup) per la ricerca di quale **componente** che costituisce il cespite si vuole alienare, permettendo di selezionarlo tramite i tasti *Ricerca* e *Seleziona*  

In particolare si noti che i vari componenti sono facilmente individuabili anche perchè riferiti, all'interno dell'help, al campo **Progressivo** (*Progrg*.) così come all'interno della scheda cespite

### Tabelle inferiori

Il contenuto è riferito alla riga superiore selezionata. 

#### OPERAZIONI PATRIMONIALI: 

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

**Minusvalenza**: accoglie il valore della minusvalenza di vendita del cespite e concorre al calcolo del valore storico ceduto.

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

#### OPERAZIONI ECONOMICHE:

(normalmente non utilizzata), serve per collegare alla scheda cespite un costo che non va capitalizzato (perché non pluriennale).

I dati contenuti in questo tab vengono valorizzati se nella griglia superiore viene inserita una riga con Tipo movimento 'Operazioni economiche'

I campi sono simili a quelli presenti nella tab Operazioni patrimoniali

#### AMMORTAMENTI:

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

#### GESTIONE DATI OGGETTIVI:

Questo tab permette di gestire i dati utili per l'ammortamento oggettivo (tecnico extracontabile - oppure fiscale) che possono essere elaborati parallelamente all'ammortamento civilistico.

Per prima cosa all'interno della tabella delle **[Categorie cespite](/docs/configurations/tables/finance/fixed-asset-category)** dovrà essere attivato il relativo flag per recepire i dati all'interno della scheda cespite.

Quindi inserendo la registrazione contabile relativa, ad esempio, all'acquisto del cespite, nella presente tab saranno riportati in automatico i dati (che possono essere poi modificati indipendentemente da quelli patrimoniali ufficiali) utili per gli ammortamenti oggettivi.

I campi della tab ricalcano infatti quelli presenti nella tab 'Operazioni patrimoniali'. La tab 'Ammortamenti', invece, è utilizzata esclusivamente per registrazioni di tipo contabile / civilistico, quindi la gestione degli ammortamenti tecnici (extracontabili) potrà essere eseguita soltanto entrando nelle scheda cespite (Amministrazione > Cespiti > Cespiti > doppio click per entrare).

#### CENTRI DI COSTO - COMMESSE:

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

#### Pulsanti specifici  
> **Seleziona un cespite esistente**: permette di selezionare un cespite già esistente e rilevare una nuova operazione al suo interno.  
> **Cancella cespite**: permette di cancellare il cespite selezionato.  
> **Cancella i dati selezionati dalla griglia tipo ammortamento**: permette di cancellare la riga selezionata all'interno della griglia (inferiore) contenuta nella tab Ammortamenti  

## **8. Parametri**

Il tab **Parametri** è sempre presente in una registrazione contabile, riporta una serie di informazioni e parametri utili ma non strettamente necessari per l'inserimento di una registrazione. 

**Stato registrazione**: *definitivo* o *provvisorio* per la registrazione contabile in uso: la registrazione con stato ‘definitiva' continuerà ad essere modificabile (in tutto tranne che nella causale e divisa di riferimento) finché non sarà stato stampato in definitivo un libro fiscale obbligatorio oppure la stessa non sarà stata utilizzata in una chiusura automatica conti. L'uso dello stato ‘provvisorio' della registrazione (che andrà a togliere e disabilitare il protocollo IVA e a numerare negativamente da -1000 la registrazione) può essere utilizzato per rilevare in contabilità fatture da pagare in via anticipata oppure altri tipi di operazione periodica a manifestazione futura (tipo canoni posticipati). Entrare nella registrazione ad inserire nuovamente lo stato definitivo andrà a riassegnare automaticamente il numero della registrazione e il protocollo Iva valido per la data registrazione impostata (fatta salva la progressività dello stesso). Si ricorda che è presente una procedura di gestione registrazioni provvisorie che consente di gestire massivamente il passaggio a registrazione definitiva di un gruppo di registrazioni provvisorie selezionate.

I flag seguenti derivano dalla causale contabile: 

**Raggruppa registro IVA** (che si consiglia di lasciare sempre attivo) va a raggruppare o meno nel giornale le righe IVA riferite allo stesso sottoconto contabile;

**Ricalcolo automatico centri di costo, di ricavo e progetti**: può essere di interesse per alcuni tipi di registrazione manuale, per le quali l'utente sia normalmente vincolato ad una gestione manuale delle schede cdc/cdp: lasciando il flag inserito, infatti, l'applicativo andrà sempre a resettare le schede citate ad ogni modifica del dato d'origine del libro giornale, cosa che potrebbe causare la perdita appunto di tutti gli inserimenti manuali effettuati. Tale automatismo, anche con flag non inserito, è comunque presente all'atto dell'inserimento della registrazione: vale infatti per l'entrata in modifica della stessa. 

**In black list**: (OBSOLETO) consente di gestire il caso particolare degli acquisti extra-cee (con causale non IVA) da riepilogare nella dichiarazione operazioni con paesi a fiscalità privilegiata, collegando la registrazione attuale al movimento iva del DDT doganale dal quale leggere i valori da dichiarare.

**Data / Num. registrazione collegata**: campo obsoleto, si abilita quando è attivato il flag ‘Black list'. Serviva per le dichiarazioni black list, per legare la fattura del DDT doganale (che dava i valori da comunicare) alla registrazione del soggetto fornitore in black list.

**Data / Num. reg. collegata a nota di accredito**: campo obsoleto; nell'area vendite, quando si crea una nota di accredito, si può indicare all'interno del documento a quale fattura fa riferimento: 

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/parameters-tab/image02.png)

Nell'immagine: campo per indicare il riferimento fattura all'interno della nota di accredito.

Quando si contabilizza la nota di accredito, Fluentis cerca di individuare la registrazione relativa a questa fattura di origine per compilare automaticamente questo legame anche a livello di contabilità (se sei in una registrazione manuale di una nota di credito, allora puoi anche impostare questi campi a mano). Utilizzato per lo spesometro (prima del 2017) quando aveva il limite dei 3000 euro, per stornare le note di credito dalla fattura e non comunicare l'operazione. Oggi non più in uso.

**AUDIT TRAIL**:

Sezione riferita al sistema di monitoraggio attività degli utenti e verifica delle modifiche ai dati integrato nel gestionale "Audit Trail".

**Data Creazione / Nome**: riporta la data e il nome dell'utente che ha creato la registrazione contabile in uso;

**Data ultima modifica / Nome**: riporta la data di ultima modifica e il nome dell'utente che ha modificato la registrazione contabile in uso;

**Data validazione / Nome**: Riporta la data e il nome dell'utente che ha validato la registrazione contabile in uso. Il campo deve tuttavia essere reso operativo tramite un cambio stati (da configurare quando richiesto) che vada ad impostare l'utente e la data di validazione. Con il campo compilato dal cambio stati la registrazione può essere resa non più modificabile.

**Conto Partner**: (OBSOLETO) campo per inserire (tramite il widget di ricerca conti) un sottoconto già codificato in anagrafica; utile per memorizzare, ad esempio, il nome del fornitore estero in una DDT doganale, la quale viene solitamente inserita con riferimento ad un' anagrafica con dati generici per quanto riguarda il soggetto "dogana" (ciò al fine di recepire le modifiche normative nello spesometro secondo le quali dal 2018 non era più consentito passare i dati della dogana  della quale spesso non si hanno riferimenti fiscali e si utilizzava dunque al posto della partita iva il riempitivo XX-99999999, dove XX sta per il codice ISO internazionale della nazione del soggetto)

**La griglia sottostante,** visualizza l'eventuale registrazione automatica collegata a quella in uso: ad ogni modifica della prima, infatti, la procedura continuerà ad allineare la seconda secondo la logica delle causali automatiche.

## 9. Raggruppamento partite  

La gestione dei Raggruppamenti partite permette di creare, in fase di apertura partite oppure in un secondo tempo, dei gruppi di partite (il gruppo è una sorta di contenitore con all'interno, anche visivamente, le partite di dettaglio).

Questi gruppi possono essere poi manipolati aggregando o disaggregando le partite. Quindi in fase di pagamento è possibile assegnare il pagamento stesso in maniera flessibile rispetto ai gruppi ed alle relative partite di dettaglio.

Questo genere di gestione, evidentemente particolare, si addice a chi opera in settori quali la grande distribuzione o il commercio al dettaglio, o comunque a chi gestisca molteplici partite / pagamenti di piccolo importo e alta numerosità e dove il collegamento tra le fatture emesse o ricevute ed i relativi pagamenti sia soggetto ad elevata flessibilità e collegamento meno netto rispetto all'ordinaria operatività. 

Questa funzionalità, una volta inserita, è una gestione incompatibile con la normale gestione a partite e pagamenti: la scelta tra una gestione e l'altra, quindi, va effettuata inizialmente all'atto dell'impostazione delle causali di contabilità generale con ben chiara le caratteristiche di questa gestione.

**GESTIONE DELLA CAUSALE CONTABILE E RISULTATO NELLA REGISTRAZIONE**:

Causale di apertura partite (esempio per "Emissione fattura" o "Fattura Fornitore"): attivare i consueti flag per l'apertura partite (ed eventualmente la chiusura e compensazione), aggiungendo il flag Crea Gruppo.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image01.png)

Nella registrazione contabile di prima nota, con la causale così modificata, in fase di inserimento della registrazione non si noteranno differenze ed il gruppo partite non sarà visibile, ma esso sarà creato con i medesimi riferimenti della partita in esso contenuta: 

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image02.png)

Per effettuare modifiche al gruppo accorpando altre partite o de-raggruppando si deve operare all'interno della maschera **[Raggruppamenti partite](/docs/finance-area/maturity-values/maturity-values/maturity-value-grouping)**.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image03.png)

Qui l'utente potrà procedere a creare, per queste partite, uno o più nuovi gruppi partite (che prenderanno numero e data dal numero e data documento della partita che lo crea). La gestione di queste operazioni si effettua utilizzando il menù contestuale che appare premendo il pulsante destro del mouse partita per partita: 

mark: per selezionare più partite/gruppi 

crea nuovo gruppo:  per creare nuovi gruppi; 

de-raggruppa: per sganciare una partita dal gruppo  

abbuoni: per creare abbuoni  e per chiudere un gruppo, 

dettagli: per visualizzare i dettagli della singola partita ; 

suddividi partita: per suddividere la partita inserita in un gruppo . 

La visualizzazione dei gruppi è effettuata per il sottoconto selezionato nella griglia in alto.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image04.png)   ![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image05.png)

Con drag and drop si può spostare le partite da un gruppo all'altro

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image06.png)

NOTA:

Nel caso di contabilizzazione automatica di fatture dal modulo acquisti o vendite nelle tabelle **Tipi fatture** (in **[acquisti ](/docs/configurations/tables/purchase/purchase-invoices-type)** e **[vendite](/docs/configurations/tables/sales/invoices-type)**) c'è un flag analogo per quando si contabilizza la fattura automaticamente (Ragg. partite)

Causale di chiusura partite: (esempio la causale "Pagamento in contanti") attivare il flag ‘Raggruppamenti partite' che rende visibile la scheda **Pagamenti gruppi.**

E' obbligatorio indicare il tipo pagamento corrispondente nella combo box adiacente. 

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image07.png)

 A questo punto l'operatività dell'utente nelle registrazioni di incasso/pagamento è completamente differente da quella di una chiusura partite normale: in questo caso, infatti, l'utente inizierà la registrazione dalla scheda **[Registrazione](/docs/finance-area/ledger-records/records/ledger-record)**, imputando direttamente un valore al pagamento/incasso (tramite la compilazione delle sezioni della prima nota), sul quale l'applicativo creerà comunque una partita dare/avere che l'utente procederà poi ad assegnare manualmente (se vuole) ad un gruppo dalla scheda ‘Pagamenti gruppi'.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image08.png)

Operativamente l'applicativo andrà a creare, su ognuna di queste partite, i relativi pagamenti reciproci (ed è per questo che la lettura di uno scadenziario ‘standard' non sarà più chiaro e si dovrà utilizzare solo i report e le maschere di visualizzazione/gestione dei raggruppamenti per avere una visione chiara dei partitari). Quando il saldo del gruppo, per effetto delle varie partite assegnate, andrà a 0 allora il gruppo avrà passerà automaticamente allo stato ‘chiuso'.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image09.png)

**NOTA: Per visualizzare i raggruppamenti selezionare con il mouse la riga nella griglia superiore.**

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image10.png)

Direttamente nella tab **Pagamenti gruppi** è possibile effettuare ulteriori modifiche quali de-raggruppamenti o nuovi raggruppamenti.

### VIDEO TUTORIALS

:::important Vedi Anche
[**VIDEO TUTORIALS SULLE REGISTRAZIONI CONTABILI**](/docs/video/finance/intro)
:::