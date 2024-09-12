---
title: Centri aziendali
sidebar_position: 4
---

:::note Percorso
**Tabelle > Controlling > Contabilità analitica > Centri aziendali**

Nota:
Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).

:::

---

La tabella consente la definizione della struttura, anche su diversi livelli, e le caratteristiche dei centri aziendali.


| **PULSANTI della RIBBON BAR** | Significato |
| --- | --- |
| Nuovo CDC | Pulsante per effettuare l'inserimento di un nuovo centro di costo. |
| Nuovo legame CDC | Pulsante per effettuare l'inserimento di un sotto-livello rispetto a quello su cui si è posizionati. |
| Cancella legame CDC | Pulsante per effettuare la cancellazione del sotto-livello del CDC. |


:::tip **Modalità di inserimento nuovi centri**
La struttura ad albero creata per organizzare i centri, ed i centri nel dettaglio, sono visibili nella griglia centrale della form, ma i nuovi centri vengono inseriti compilando i campi nella zona inferiore della maschera.
ATTENZIONE: alcuni campi sono, tuttavia, modificabili agendo direttamente sulla riga della griglia superiore dopo aver inserito il nuovo centro (es. il campo *Cost driver*) 
:::




**Centro aziendale**: codice alfanumerico del CDC.

**Descrizione**: descrizione del CDC.

**Seconda descrizione**: seconda descrizione del CDC.

**Cost driver**: assegna al centro di costo un cost driver di ri-attribuzione percentuale nelle Chiusure infrannuali.

**Tipo centro di costo**: definisce se il centro di costo è diretto o indiretto.

**Centro di responsabilità**: collega il centro di costo al relativo centro di responsabilità.

**Data inizio**: definisce la data inizio del CDC.

**Data fine**: definisce la data di fine utilizzo dei CDC.

**Flag valorizzabile**: quando questo flag è impostato il centro di costo può essere valorizzato con movimenti di contabilità. Togliere il flag dai livelli di struttura che non si vogliono valorizzare erroneamente e lasciarlo solo, quindi, al livello più basso.

**Flag MRP**: il flag consente di utilizzare il centro di costo nel modulo della produzione.

**Flag Conti da riassegnare:** Va ad identificare questo centro come "bidone" dove la contabilità generale assegna quei costi che non è in grado di attribuire in modo preciso e diretto, oppure che potrebbe gestire con delle logiche percentuali fisse legate al piano dei conti. Esempio: il costo degli affitti potrebbe essere abbastanza gestibile nel piano dei conti con delle percentuali, in base ai metri quadri dei vari centri si ricava la percentuale di ripartizione da vincolare nel piano dei conti. 
Potrebbero però esserci logiche di cui la contabilità non ha visibilità ovvero il numero delle persone, ad esempio, dei vari centri; dati che la contabilità non sa dove reperire e quindi intanto il costo viene "parcheggio" nel centro "bidone" e poi a fine periodo si saprà quanti dipendenti sono registrati in ogni centro e quindi viene demandata la logica di attribuzione ad un COST DRIVER.

**Flag Centro default patrimoniale:** identifica che questo è il centro generico al quale assegnare tutti i movimenti patrimoniali della contabilità. Tutta la gestione della contabilità analitica interessa il conto economico, ma potrebbe essere interesse dell’ azienda avere quadratura dei dati complessivi dell’ analitica coi dati complessivi del bilancio. Si può dunque identificare un centro generico unico nel quale tutto il patrimoniale viene assegnato per avere tutto il bilancio completo anche nella parte di controllo di gestione. Serve solo per quadratura.

**Flag Commessa:** identifica il centro aziendale generico che accoglie i costi diretti di commessa. Il centro in questione deve essere associato alla dimensione avente nella relativa tabella il flag *Commessa*. Un costo o ricavo diretto di commessa, può essere associato a questo centro generico di commessa  oppure in alternativa verrà valorizzata la [TABELLA ASSOCIAZIONE CENTRI/COMMESSE](/docs/configurations/tables/controlling/analytical-accounting/projects-centers-association).

Successivamente si potrà indicare a FLUENTIS con quale LOGICA valorizzare il centro aziendale. Infatti potrebbero esserci dei driver differenti di analisi in base al centro aziendale. Occorre tener presente che parliamo di costi diretti di commessa, ma è possibile eseguire successivamente vari ribaltamenti da centro a centro e anche da una dimensione di analisi all’ altra, ragionando su centri di destinazione differenti che raggruppano le commesse. 

**Modelli di riclassificazione:** permette di abbinare al centro aziendale un modello di riclassificazione (modello che può gestire sia movimenti contabili sia movimenti di centri aziendali) al fine di determinare il totale dei costi assegnati al centro per ottenere l’ indice di costo del centro stesso. Questo perchè alcuni centri (in genere produttivi) sono tipicamente valorizzati in termini di grandezze fisiche (es. ore di lavoro o numero di pezzi utilizzati) ed è necessario determinare la tariffa di valorizzazione per il costo della singola ora di lavoro o del singolo pezzo. Il modello di riclassificazione tipicamente determinerà i costi totali del centro che saranno suddivisi per il valore totale delle ore (ad esempio, o dei pezzi), caricati sul centro stesso.
:::tip Nota
Il modello di riclassificazione da abbinare al centro aziendale per la determinazione della tariffa può dipendere dall'impostazione teorica che si vuole dare al proprio sistema di controllo di gestione, in ogni caso, comunque, sarà un modello che tende a determinare il costo complessivo del centro anche attraverso l'attribuzione di quota parte dei costi indiretti e comuni. Nel dettaglio del modello di riclassificazione è previsto di indicare tramite apposito flag il nodo (la riga) che espone il risultato della riclassificazione e dunque il totale dei costi del centro che diventerà il numeratore del quoziente (esempio Totale cosi del centro / totale ore di lavoro del centro) al fine di determinare ad esempio il costo orario del centro. Nelle immagini si può vedere un esempio di modello specifico denominato Quadro controllo costi. Tale modello è configurato per gestire come numeratore del rapporto la riga Totale costi di Funzionamento. Cfr [**MODELLO DI RICLASSIFICAZIONE**](/docs/controlling/reclassifications/reclassifications-models/create-reclassification-model).
:::

![Immagine](/img/it-it/configurations/tables/controlling/analytical-accounting/corporate-centers/corporate-center-model-connection.png)

![Immagine](/img/it-it/configurations/tables/controlling/analytical-accounting/corporate-centers/QCC-model.png)

**Tipo misurazione:**  indica la modalità con la quale sarà valorizzato il centro in base ai possibili criteri selezionabili che sono:
- **Nessuno:** indica che il centro verrà valorizzato con un criterio diverso dai successivi presenti in lista, ovvero in maniera diretta tramite attribuzione del valore attraverso la contabilità analitica dalla contabilità generale
- **Dimensione fisica:** indica che il centro sarà valorizzato tramite dei movimenti espressi in misurazioni fisiche (ore, pezzi ecc.) e in questo caso nei campi collegati che appaiono verrà definita l'unità di misura rispettivamente per la quota fissa di costo e per la quota variabile. Sono possibili fino a due unità di misura in contemporanea.

:::note Nota
Si veda la [TABELLA DELLE UNITA' DI MISURA](/docs/configurations/tables/general-settings/measurement-units) per la definizione del **Tipo di valutazione del tempo**
:::

- **Percentuale:** indica che il centro sarà valorizzato con un criterio percentuale rispetto ad altri centri o ad altri conti, e più precisamente come coefficiente (rapporto) tra un modello di riclassificazione al numeratore e alcuni centri al denominatore. Selezionando questo criterio si abilitano un altro campo (**Filtro valori denominatore**) per indicare il criterio di calcolo del denominatore del coefficiente, ed una griglia secondaria (in basso a sinistra) per abbinare i centri collegati al calcolo in questione.
    I criteri di calcolo possibili sono:
    - Totale dare: legge solo la sezione Dare dei movimenti dei centri inseriti nella griglia in basso a sinistra 
    - Totale avere: legge solo la sezione Avere dei movimenti dei centri inseriti nella griglia in basso a sinistra
    - Margini: = Totale dare - Totale avere
    - Su sottoconto selezionato: attivando questo criterio compare una ulteriore griglia in basso a destra per abbinare i conti contabili da considerare nel calcolo. Dunque saranno considerati i movimenti dei centri della griglia di sinistra, se questi sono riferiti ai sottoconti inseriti nella griglia di destra.
    - Su conto selezionato: similmente al punto precedente è possibile inserire direttamente il conto mastro anzichè i singoli sottoconti di dettaglio, ottenendo la lettura di tutti i suoi sottoconti 
    - Ad esclusione dei sottoconti selezionati: verranno letti tutti i sottoconti ad esclusione di quelli inseriti nella griglia e pertanto i movimenti dei centri saranno considerati se NON si riferiscono ai sottoconti inseriti nella griglia di destra.
    - Ad esclusione dei conti selezionati: verranno letti tutti i conti con relativi sottoconti ad esclusione d quelli inseriti nella griglia e pertanto i movimenti dei centri della griglia di sinistra saranno considerati solo se NON riferiti ai conti inseriti a destra. 
- **Percentuale e grandezza fisica:** criterio che permette di combinare elementi dei due precedenti parametrizzando sia le unità di misura, sia il coefficiente (rapporto) di ripartizione di altri centri