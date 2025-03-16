---
title: Fatt. Elett. di San Marino
sidebar_position: 5
---

:::note NOTA
In questa sezione viene trattata la gestione della fattura elettronica relativamente a operatori economici utenti Fluentis **residenti** o stabiliti a San Marino.

NON riguarda pertanto gli aspetti connessi con la fatturazione di soggetti italiani verso San Marino oppure ricevuta da San Marino.
:::

### Tabella *Configurazione documenti elettronici* 

All'interno della tabella, normalmente compilata per la configurazione del Fluentis Business Hub il quale si collega con lo SDI italiano, occorre in questo caso compilare, oltre ai consueti campi per i quali si rinvia [**qui (video *Configurazione iniziale Fatturazione elettronica*)**](/docs/finance-area/sdi-documents/sdi-documents-intro/), due campi appositi validi per San Marino:

- il flag **Test S. Marino** (per identificare la connessione all'ambiente fiscale di simulazione) il quale prevale e bypassa il flag *E' test* presente in testata (che in questo caso è irrilevante)

- **Token S. Marino** per inserire la credenziale di collegamento con l'ufficio fiscale sanmarinese (al posto dello SDI italiano).

![](/img/it-it/finance-area/sdi-documents/sanmarino/sdiconfig.png)

:::tip INFO
Benchè i campi in tabella riferiti alla connessione con Fluentis Business Hub e lo SDI italiano siano obbligatori (quali ad esempio user name e password) nel caso di San Marino la chiamata avverrà direttamente al web service dell'amministrazione finanziaria di San Marino. Pertanto potrebbe essere necessario inserire delle credenziali Fluentis Business Hub "fittizie" al fine di salvare il contenuto della maschera e poter valorizzare i campi realmente necessari al collegamento quali il Token per il webservice di San Marino.
:::

### Connettori Bizlink da abilitare

![](/img/it-it/finance-area/sdi-documents/sanmarino/bizlinkconnectors.png)

Nel caso in cui i connettori visibili nell'immagine non fossero già presenti a sistema e si renda necessario procedere inserendoli manualmente si consiglia di copiare i codici e descrizioni presenti e poi selezionare nei vari campi le tipologie connesse con la fatturazione elettronica sanmarinese.


<details>

  <summary>In Particolare: (Click to expand)</summary>
 


  1. Tipo connettore: San Marino INPUT e OUTPUT rispettivamente per le fatture in entrata e in uscita
  
  2. Partner: Fluentis
  
  3. Flusso: San Marino
   
  4. Identificativo: Deve corrispondere al parametro *Globalidentifier* settato nelle configurazioni del servizio Bizlink, altrimenti i connettori in questione risulteranno inibiti.
  Pertanto al momento dell'installazione e prima dell'utilizzo i connettori, per precauzione, potrebbero risultare inibiti ed occorre attivarli cancellando la stringa SANMARINO dai connettori se il parametro del servizio bizlink risulta impostato a NULL, oppure riportare nel parametro *Globalidentifier* del servizio la stringa SANMARINO lasciando i connettori come stanno; in questo caso, però, la stringa SANMARINO dovrà essere riportata in tutti gli altri connettori che risultano necessari per le funzionalità desiderate.
  
  5. Operazione di Flusso: selezionare le voci rispettivamente per l'invio, la ricezione o cancellazione, rispettivamente per fatture di acquisto o vendita, le voci sono coerenti con i codici visibili nell'immagine (che sono i connettori necessari) 
    
Documento di flusso: selezionare le voci rispettivamente per l'invio o la ricezione
  
![](/img/it-it/finance-area/sdi-documents/sanmarino/bizlinkconnectors2.png)

![](/img/it-it/finance-area/sdi-documents/sanmarino/bizlinkconnectors3.png)


</details>

## LOGICA DI BASE

### **Acquisti**:

l’operatore economico di S.Marino riceve dall'ufficio tributario sanmarinese, contestualmente ad una pec che notifica la fattura "estera" in arrivo (ovvero da una società italiana che vende ad un sanmarinese), il documento proveniente dallo Sdi italiano e trova il file nei *Documenti acquisto in entrata* come di consueto.

La fattura elettronica di acquisto di cui sopra risulta in questo momento, all'interno di Fluentis, nello stato ***Non assegnato***. 

Per la società in questione deve esser stato attivato (nella tabella Società - SH_Companies direttamente sul database) il flag che attiva la creazione delle fatture di acquisto da File Sdi.
L’utente quindi crea la fattura di acquisto (la fattura elettronica a questo punto passa nello stato ***Ricevuta***) ne integra i dati necessari, in particolare il tipo fatturato acquisti nelle righe, per specificare il tipo merce - vedi immagine sotto -, e l'aliquota iva ai fini del calcolo dell'imposta monofase, dati richiesti dalla fiscalità di S.Marino.

<details>

  <summary>Dettagli integrazione fattura: (Click to expand)</summary>

L'indicazione della tipologia di merce avviene direttamente attraverso la tabella di definizione delle voci di Fatturato acquisti dove, nel campo Tipo IVA (tabella fissa) sono contenute le informazioni che andranno valorizzare l'apposito tag.

![](/img/it-it/finance-area/sdi-documents/sanmarino/purchaseintegration.png)

![](/img/it-it/finance-area/sdi-documents/sanmarino/purchaseintegration2.png)

![](/img/it-it/finance-area/sdi-documents/sanmarino/xmlpurchaseinvoice.png)

![](/img/it-it/finance-area/sdi-documents/sanmarino/vatintegration.png)

</details>

Una volta che ha integrato la fattura, tramite un apposito cambio stato (workflow) crea il file di integrazione dell’importazione da spedire all'ufficio tributario di San Marino.

Gli stati del documento, specifici per San Marino sono a questo punto:

- **Controllato**: esegue un test sulla fattura di acquisto Fluentis per verificare che siano stati compilati i campi necessari;
- **Generato**: crea il file con struttura XML-SM
- **Da spedire**: trasmette il file a FBH e da qui all'ufficio tributario di S.M.
- **Respinto HUB_SM**: se il file non viene acquisto e dunque nemmeno processato della'ufficio tributario di S.M. - da questo stato può essere riportato a *Ricevuta*
- **in HUB-SM**: per il tempo in cui il file rimane presso l'ufficio tributario di S.M.
- **Scartato Non conforme HUB-SM**: se l'ufficio tributario di S.M. scarta il file; da qui può essere riportata nello stato *Ricevuta* per correzioni e nuovo invio	
- **Acquisito HUB-SM**:	se l'elaborazione va a buon fine. Il successo dell'acquisizione dei dati dal formato XML-RSM determina l'atto di presentazione della fattura all'Ufficio Tributario, registrato alla data di trasmissione del file.
- **Cancellato**: stato che si può raggiungere inviando una richiesta di cancellazione; se la richiesta va a buon fine è possibile riportare poi il documento in stato *Ricevuto*
 
:::note **NOTA**
Nel lasso di tempo fra la trasmissione dei file e la loro effettiva elaborazione, l'operatore ha la possibilità di cancellarli, qualora nel frattempo si accorga di eventuali errori di compilazione.

L'upload di un file di integrazione nell'area temporanea innesca la cancellazione immediata di qualsiasi altro file di integrazione che sia riferibile al medesimo file FE Import e sia presente in quel momento nell'area temporanea; in sostanza nell'area temporanea per ciascun FE Import di riferimento prevale l'ultima versione caricata del file di integrazione.
:::

		
L'Ufficio Tributario tramite elaborazioni automatizzate effettua la lavorazione delle fatture in distinte e procede all'emissione di eventuali Avvisi di pagamento relativi all'imposta sulle 
importazioni (Monofase)
Ultimo step del percorso è la conferma della ricezione e accettazione del file da parte dell'ufficio tributario di S. Marino (notifica di "Vidimazione"), che aggiorna lo stato del documento.

La fattura di acquisto viene poi contabilizzata come di consueto, per registrarla in contabilità.


:::note **Nota**
Le fatture in importazione di servizi esenti dal pagamento dell'imposta monofase devono essere integrate presso l'HUB-SM indicando Tipo Merce 9 "Servizi Esenti", tramite le modalità descritte in questo documento, onde evitare la loro giacenza a tempo indefinito nella lista delle fatture da presentare.
Per questo tipo di fatture non sono previsti né la lavorazione in distinte né l'inoltro di alcuna notifica di "vidimazione" rivolta al SdI.
:::

### **Vendite**:

Il flusso è simile a quello italiano (è lo stesso tracciato Sdi, pur se con qualche tag compilato in modo particolare). 

<details>

  <summary>Tag Specifici per San Marino (specifici per SM): (Click to expand)</summary>

Tag fisso Partita IVA del trasmittente esempio:

```xml
    <IdTrasmittente>
    	<IdPaese>SM</IdPaese>
    	<IdCodice>96428100588</IdCodice>
    </IdTrasmittente>
```    

Per ogni sezione 2.2.1 DettaglioLinee della sezione 2.2DatiBeniServizi 

```xml
    <AltriDatiGestionali>
    		<TipoDato>TM</TipoDato>
    		<RiferimentoTesto>1</RiferimentoTesto>
    	</AltriDatiGestionali>
```

dove il valore del Tag TipoDato *TM* è fisso e il valore del tag RiferimentoTesto è preso dalla lista di valori del campo **Tipo IVA** collegati alle classi di **Fatturato vendite** (tabella Fluentis) inseriti in fattura

![](/img/it-it/finance-area/sdi-documents/sanmarino/salesturnover.png)

Nella sezione DatiRiepilogo viene inserito, per ogni valore del campo Tipo IVA (di cui sopra) collegato al fatturato vendite, trovato nel documento, un tag specifico *RiferimentoNormativo* dove il valore è preso concatenando il codice del Tipo IVA collegato a fatturato e il valore del campo Categoria IVA presente nella tabella [**Aliquote IVA**](/docs/configurations/tables/finance/vat-rates). 

```xml
    <DatiRiepilogo>
    		<AliquotaIVA>0.00</AliquotaIVA>
    		<Natura>N3.1</Natura>
    		<ImponibileImporto>1725.00</ImponibileImporto>
    		<Imposta>0.00</Imposta>
    		<EsigibilitaIVA>I</EsigibilitaIVA>
    		<RiferimentoNormativo>**TM:1**, ESENZIONE</RiferimentoNormativo>
    	</DatiRiepilogo>
```
  

</details>

L'ufficio tributario di S.Marino fa da intermediario nel processo di invio, quindi sono previsti degli stati particolari del documento legati al fatto che il file transita per l'ufficio tributario sanmarinese (quindi è S.Marino a fare un primo test delle richieste specifiche in termini di valorizzazione dei tag) e poi, se viene accettata anche dallo Sdi italiano, lo stato del documento arriva a quello consueto (es. Consegnato). 

Le informazioni in merito alle notifiche di consegna ecc. (italiane) passano attraverso l’ufficio tributario di S.Marino che li inoltra al Fluentis Business Hub per l'acquisizione nel gestionale.

(Principali) STATI DEL WORKFLOW (in *corsivo* quelli *SPECIFICI PER SM*):

- **Controllato**: esegue un test sulla fattura di acquisto Fluentis per verificare che siano stati compilati i campi necessari; un controllo particolare per S. Marino che è stato aggiunto è il requisito che nella stessa fattura possano essere contenute esclusivamente le seguenti combinazioni relative al tipo merce (tag TM); Materie prime con Beni di Consumo e con Beni Strumentali e separatamente I servizi di conto lavoro, sia con che senza materie prime (separati tra di loro). 
- **Generato**: crea il file con struttura XML-SM
- **Da spedire**: trasmette il file a FBH e da qui all'ufficio tributario di S.M.
- ***Respinto HUB_SM***: se il file viene scartato della'ufficio tributario di S.M. per errori formali rispetto alle specifiche del tracciato xml - da questo stato può essere riportato a *Non esaminato*
- ***in HUB-SM***: per il tempo in cui il file rimane presso l'ufficio tributario di S.M.
- ***Cancellato HUB SM***: a seguito di istanza di cancellazione attivata da apposito cambio stato
- ***Scartato Non conforme HUB-SM***: se l'ufficio tributario di S.M. scarta il file per errori sostanziali relativi alla correttezza dei dati in fattura (L'Ufficio Tributario tramite elaborazioni automatizzate effettua l'acquisizione dati e la lavorazione delle fatture in distinte, quindi procede ad eventuali controlli (es. versamenti dell'IVA addebitata in fattura e da inoltrare all'Amministrazione Finanziaria italiana, ecc.), poi determina la prosecuzione dell'iter.); da qui può essere riportata nello stato *Ricevuta* per correzioni e nuovo invio	
- ***Non consegnato allo SDI***: in caso di impossibilità di recapito 
- ***In attesa di risposta***: il attesa del messaggio di risposta da parte dello Sdi italiano
- **In SDI**: in transito presso il Sdi italiano che effettua i normali controlli previsti in Italia.
- **Non conforme**: scartata per non aderenza ai controlli effettuati dallo Sdi italiano
- **Mancata consegna**: impossibilità di recapito al destinatario
- **Consegnata**: avvenuta consegna al destinatario

<details>

  <summary>Dettagli passaggi di stato (specifici per SM): (Click to expand)</summary>

Da Spedire --> Respinto da HUB - SM (automatico)

Da Spedire --> Trasferimento all' HUB - SM (automatico)

Respinto da HUB - SM --> Riporta in non esaminata (manuale)

Trasferimento all' HUB - SM --> Da cancellare dall’HUB-SM (manuale) --> Da questo stato sarà automaticamente resettato a Non esaminato (oppure ad altri stati a seconda della risposta da parte di HUB-SM)

---

Trasferimento all’HUB-SM --> Scartato dall’HUB-SM (automatico)

Trasferimento all’HUB-SM --> Non acquisito dall’HUB-SM (automatico) --> Passa a Scartato dall’HUB-SM (automatico) oppure Accettato dall’HUB-SM (automatico)

Trasferimento all’HUB-SM --> Accettato dall’HUB-SM (automatico)

---

Scartato dall'Hub SM Non conforme  --> Riporta in non esaminata (manuale)

Accettato dall’HUB-SM --> In Sdi (automatico)

Accettato dall’HUB-SM --> Non trasmesso allo Sdi (automatico)

Accettato dall’HUB-SM --> Attesa di risposta dallo Sdi (automatico)


</details>

:::note Nota
Qualora la fattura rientri nel perimetro degli accordi di interscambio, l'HUB-SM trasmette a SdI il file FE e si prosegue con i passi successivi, altrimenti l'iter si conclude.

SdI notifica all'HUB-SM il recepimento o lo scarto del file FE. In caso di recepimento, il Cessionario/Committente soggetto italiano ha nelle sue disponibilità la fattura elettronica sul 
portale italiano "Fatture e corrispettivi" oppure nel "cassetto fiscale". Se la fattura contiene addebito IVA, allora giace in uno stato "sospeso" (in attesa di vidimazione), altrimenti si 
considera perfezionata dal punto di vista del cessionario.

HUB-SM notifica all'OESM l'esito pervenuto da SdI (ricevuta/scarto)
:::

il Cedente/Prestatore OESM produce la fattura elettronica e la trasmette all'HUB-SM (sia nella casistica di addebito IVA - dove l'imposta sarà poi inviata dall'Ufficio tributario SM all'Agenzia Entrate italiana, sia senza addebito IVA).

durante la fase di trasmissione avvengono:
- il calcolo del codice hash corrispondente al file, il valore dell'hash viene memorizzato nell'HUB-SM e restituito al trasmittente.
- il controllo sintattico del file FE: se si riscontrano errori, questi sono immediatamente segnalati al trasmittente e il file FE viene subito respinto.

Una volta trasmesso all'HUB-SM, ciascun file FE rimane depositato in un'area temporanea fino all'esecuzione dell'elaborazione automatica che convalida, acquisisce e
lavora i dati; entro tale lasso di tempo il trasmittente può cancellare o sostituire i file trasmessi e ancora non elaborati.

Le fatture che non contengono IVA seguono un iter più corto, la fattura acquisita con successo dall'HUB SM viene inserita in una Distinta Export ed inviata allo SDI italiano. La comunicazione di un esito positivo da parte dello SdI innesca da parte dell'Ufficio Tributario la registrazione delle Richieste di Rimborso sul Conto Fiscale, creando così la disponibilità del credito.

Le cessioni con IVA, dopo il promo controllo formale, sono inserite in Distinte Export ma rimangono in attesa che l'OESM effettui il versamento in banca sul conto corrente dell'Ufficio tributario di S.M. dell'IVA e presenti la quietanza cartacea del versamento all'Ufficio tributario. Solo a questo punto i file delle relative fatture saranno inoltrati allo Sdi italiano.

Per le fatture con addebito dell'IVA, la comunicazione di un esito positivo da parte del SdI innesca dal lato dell'Ufficio Tributario la registrazione delle Richieste di Rimborso sul Conto Fiscale, creando così la disponibilità del credito. A questo punto, l'acquirente Italiano potrà consultare le fatture con addebito dell'IVA e non ancora perfezionate sul portale "Fatture e corrispettivi" " con l'evidenza dei seguenti due stadi di elaborazione:

- Fattura non ancora vidimata da Agenzia delle Entrate (Direzione Provinciale PU), quindi valida ai soli fini commerciali;
- Fattura vidimata da Agenzia delle Entrate (Direzione Provinciale PU), quindi valida ai fini della detrazione dell'IVA da parte dell'acquirente italiano

Per ciascun file FE inoltrato dall'HUB-SM al SdI, quest'ultimo sistema produce e restituisce all'HUB SM un file XML di ricevuta, attestante la consegna o la mancata consegna o lo scarto.


## GESTIONE IMPOSTA MONOFASE A IMPORTO FISSO

:::tip Info
Il regime fiscale di San Marino prevede attualmente, in generale, un'imposta monofase al 17% sugli acquisti / importazioni di beni generici oppure altre aliquote in base al tipo di bene, come ad esempio i carburanti ecc...

Per i soli servizi di agenzia è prevista l'imposta monofase in misura fissa di 2€.
Gli altri tipi di servizi sono esenti dall'imposta monofase ma la fattura d'acquisto (come meglio spiegato di seguito) viene in ogni caso lavorata dalle aziende residenti a San Marino per inviare all'ufficio tributario il file con l'integrazione dell'acquisto, seppur con codice iva esente.

Per quanto riguarda le vendite di  BENI verso l'Italia l'applicazione dell'iva (italiana) è facoltativa e si applica su richiesta del cliente, altrimenti vengono fatturati con il codice iva di esenzione.

La vendita di servizi è sempre esente.
:::

Per gli acquisti di servizi di agenzia (provvigioni), la normativa di S.Marino prevede l’imposizione di un’imposta monofase fissa di 2€ per ogni documento: in sostanza, qualsiasi sia la base imponibile dell’imposta, l’importo è fissato in questo importo fisso.

### CONFIGURAZIONE IN TABELLA ALIQUOTE IVA
L’imposta monofase è sostanzialmente l’aliquota iva applicata ai vari articoli, per la localizzazione di S.Marino abbiamo la visibilità del campo **Valore fisso**:

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase1.png)

Quando si imposta un valore in questo campo, il campo percentuale sarà resettato a zero e viceversa.

### USO NEI DOCUMENTI DEL CICLO ACQUISTI/VENDITE, NEI COMPENSI, NELLE REGISTRAZIONI, NELLE CONTABILIZZAZIONI

Es. fattura di vendita: **prima riga articolo** con imposta monofase fissa, viene valorizzata con l’importo relativo:

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase2.png)

Tutte le altre righe articolo (o spese) con stessa aliquota fissa avranno invece imposta = 0:

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase3.png)

Totale nei riepiloghi iva: indipendentemente dal totale imponibile per questa aliquota, l’importo dell’imposta sarà quello fissato in tabella

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase4.png)

Risultato in contabilizzazione: solo una riga avrà l’importo fisso dei 2€

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase5.png)

Nelle registrazioni manuali, il campo dell’imposta fissa sarà non modificabile: per essere precisi, sembra modificabile, ma una volta usciti dal campo Fluentis annullerà la modifica per ripristinare l’importo precedente preso da tabella iva.

### INTEGRAZIONE FATTURA D’IMPORTAZIONE, DETTAGLI PER L’IMPOSTA MONOFASE FISSA
Quando viene ricevuta una fattura elettronica dall’Italia, dal file Sdi si crea le fatture di acquisto, si assegnano alle righe i fatturati acquisti e le varie aliquote iva del caso, per fare poi l’invio telematico al ufficio tributario di SM dell’integrazione fatta e versare la relativa imposta.


:::note Nota
Il flag per identificare l’imposta fissa dei 2€ denominato ‘S.Marino’ utilizzato anche ai fini della creazione del file di integrazione è da considerare obsoleto inquanto attualmente viene letto direttamente il nuovo campo specifico, che viene gestito correttamente nel documento e nella contabilizzazione.

:::
