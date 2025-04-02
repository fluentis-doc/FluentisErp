---
title: Pianificazione generale
sidebar_position: 2
---

:::important A cosa serve
La pianificazione generale in Fluentis è un processo che opera con il presupposto di capacità infinita, il che significa che la pianificazione non tiene conto di limitazioni fisiche nei centri di lavoro o nelle risorse disponibili. Questa metodologia permette di schedulare le operazioni produttive con una certa flessibilità.

La pianificazione può essere eseguita utilizzando due logiche distinte: **al più presto** e **al più tardi**. La logica ***al più presto*** mira a iniziare le operazioni non appena possibile, mentre la logica **al più tardi** pianifica le operazioni il più tardi possibile senza compromettere le scadenze. Questi approcci consentono un'analisi ottimizzata delle esigenze produttive e la gestione dei tempi di lavorazione in base alle priorità aziendali e alle necessità operative
:::

La form si compone di quattro tab: *Commesse*, *Parametri generali*, *Monitor* e *Storico*.         

## Commesse

Il tab commesse, si compone di un’area di filtro che permette di filtrare le commesse che saranno poi visualizzate nella griglia dei risultati sottostante.       
Oltre ai filtri per articolo, anno e numero commessa, sono presenti anche un filtro sul Tipo commessa: che permette di visualizzare le commesse monoprodotto, multiprodotto oppure entrambe.

È presente anche il filtro per *Sito produzione* in modo tale da poter pianificare solo le commesse di un determinato sito produttivo, e una serie di flag: *In ritardo*, *Scadute*, *Lanciate* ed *Esecutive*, che consentono di scegliere se si vogliono visualizzare anche le commesse in ritardo rispetto alla data, oppure scadute, e solo se nei **Parametri generali della pianificazione** è stato attivato il flag *pianificazione commesse lanciate o esecutive*, verranno attivati a loro volta anche i flag *Lanciate* ed *Esecutive*; altrimenti questi due campi risultano sempre non essere attivi.          
Se il flag *pianificazione commesse lanciate o esecutive* non è attivo, nella griglia verranno visualizzate solamente commesse in stato di *non esaminate* o *pianificate*.       
Selezionando una o più commesse, in base ai parametri di pianificazione impostati nel relativo tab, tramite il pulsante pianificazione generale la procedura va a creare gli ordini pianificati dei tre tipi previsti: produzione, acquisto e conto lavoro, partendo dalle informazioni presenti nelle commesse e incrociando i dati con le relative distinte basi e cicli di lavoro.

Una volta creati, gli ordini pianificati si potranno visualizzare nella form [Ricerca ordini pianificati](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders), oppure questa form può essere aperta tramite il pulsante **Apri ricerca ordini pianificati**. 
Nel caso in cui sia selezionata una commessa nella griglia dei risultati e vengo poi premuto il pulsante **Apri ricerca ordini pianificati**, la form degli ordini pianificati verrà aperta filtrando già i risultati per quella commessa.

*Pulsanti specifici*:

> **Pianificazione generale**: consente al sistema di schedulare le commesse selezionate;  
> **Apri ricerca ordini pianificati**: questo pulsante consente di aprire la schermata di  [Ricerca ordini pianificati](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders); nel caso in cui, prima di premere questo pulsante, venga selezionata una riga di commessa la form degli ordini pianificati si aprirà già pre filtrata su quella commessa;               
> **Cambia data fine prevista con data suggerita**: questo pulsante consente di aggiornare la *data fine prevista* con la *data suggerita* calcolata dalla pianificazione nel caso in cui fosse lanciata con il flag **Controlla documenti in ritardo con ATP** attivo;     
> **Sequenza commesse**: tramite questa funzionalità si può accedere alla sequenza commesse, all'interno della quale si potranno visualizzare le commesse in base alla sequenza che gli è stata attribuita, anche tramite un grafico.

*Filtri specifici*:

**Tipo commessa**: tramite questa combo è possibile andare a selezionare il tipo di commessa che si vuole visualizzare, se le commesse monoprodotto, le commesse multiprodotto oppure entrambe;

**Sito produzione**: si possono andare a visualizzare le commesse in base al sito di produzione in cui vanno prodotte, selezionandolo tramite l'apposita combo;

**In ritardo/Scadute/Lanciate/Esecutive**: questi flag consentono di scegliere se si vogliono visualizzare anche le commesse in ritardo rispetto alla data oppure scadute e solo se nei  [Parametri generali di pianificazione ](/docs/planning/ms-master-scheduling/general-schedule) è settato il flag *pianificazione commesse lanciate o esecutive*, altrimenti i due campi risultano non essere attivi; altrimenti come spiegato nell'articolo sui parametri di pianificazione , nel tab commesse si potranno vedere solamente in stato di non esaminate o di schedulate, ma queste assumono lo stato di lanciate  e/o esecutive se questo flag non viene settato non si potranno visualizzare le commesse all'interno di questo tab.

*Campi specifici nella griglia dei Risultati*

**Data suggerita**: come spiegato nell'articolo relativo ai parametri generali di pianificazione, attivando un particolare flag chiamato  [Controlla documenti in ritardo con ATP](/docs/planning/ms-master-scheduling/general-schedule) la procedura di pianificazione andrà ad eseguire un ragionamento tale per cui se anche uno solo degli ordini che vengono schedulati e generati risulta essere in ritardo rispetto alla data prevista, il sistema andrà a cancellare tutti gli ordini creati e ripartirà a calcolarli dalla **Data inizio MS** (che viene definita sempre nei parametri e che si attiva solo settando il flag **Controllo documenti in ritardo con ATP**) con la logica *al più presto* e proporrà la nuova data per le commesse proprio nel campo *Data suggerita* presente nella griglia di risultato.

### Procedura Pianificazione generale

Una volta selezionate le commesse che si vogliono schedulare, si attiverà il pulsante **Pianificazione generale** presente nella ribbon bar della form, e cliccando su quel pulsante il sistema procederà con la pianificazione delle commesse selezionate.

Per visualizzare tutte le schedulazioni effettuate e i relativi ordini di produzione creati per ogni commessa, basterà spostarsi nel tab **Storico**.

:::danger Nota    
Le commesse create manualmente vengono sempre prodotte indipendentemente dalla disponibilità dell'articolo da produrre.    
:::   

## Parametri di Pianificazione generale

:::note Nota
Prima di procedere con la pianificazione, è importante settare all'interno di questo tab i parametri da seguire per eseguire la pianificazione .
::: 

**Pianificare fino al**: indicare la data entro la quale il sistema dovrà andare a considerare i documenti inseriti. Questa data è calcolata dal sistema come la data odierna più il valore in mesi inserito nel campo  **Numero massimo di mesi per la pianificazione** presente nei [Parametri MS](/docs/configurations/parameters/production/mps-parameters);       

**Materiali / Risorse**: attivando il flag **Materiali**, all’interno degli ordini pianificati creati vengono riportati i materiali da consumare. Mentre, attivando il flag **Risorse**, all’interno degli ordini pianificati creati vengono riportate anche le fasi di lavorazione. Nel caso uno o entrambi i flag non fossero attivi, gli ordini pianificati verranno comunque creati ma senza rispettivamente i materiali o le fasi di lavorazione all’interno;

**Ordini pianificati di**: attraverso i 3 flag si va ad indicare se si vuole che il sistemare generi tutti e tre i tipi di ordini previsti quindi produzione, acquisto e conto lavoro; in questo modo questi tipi di ordine avranno il legame diretto con la commessa; (per esempio se non viene messo il flag su Acquisto, però viene mantenuto il flag su Esecuzione MRP, il sistema andrà comunque a creare anche gli ordini di acquisto ma questi risulteranno slegati dalla commessa);

**Genera solo ordini pianificati per livelli**: in questo caso si andranno ad indicare i livelli (1-2...) per i quali si vuole vengano generati gli ordini pianificati;

**Ordini fornitori o Richieste d'acquisto e ordini cliente**: in questo caso, se vi sono presenti a sistema documenti privi di data di impegno e disponibilità, si può dire al sistema che vada a considerare come data quella che si potrà indicare nell'apposito campo, oppure dire al sistema che non vada a considerarli del tutto;

**Raggruppamento ordini pianificati per**: nel caso in cui si lavori a commessa, in questo campo va impostata la voce *Nessun raggruppamento*; altrimenti si può andare a selezionare tramite l'apposita combo il tipo di raggruppamento che si intende applicare ma in questo caso il legame tra ordini pianificati e commessa si andrebbe a perdere;

**Raggruppamento al più tardi o al più presto**: in questo caso si può scegliere se andare a raggruppare gli ordini al più tardi (quindi in base all'ultimo) o al più presto (che è il più consigliato) e nel campo successivo chiamato **Per un periodo in giorni** di si andranno ad indicare il numero di giorni all'interno del quale fare il raggruppamento;

**Considera le quantità in base al lotto economico/Considera i multipli del lotto economico**: settando il primo parametro si va ad indicare che durante la pianificazione si vuole tenere conto anche del lotto economico dell'articolo, e di conseguenza si attiverà il flag che permetterà di decidere se si vuole vengano tenuti in considerazione anche i multipli del lotto economico. 
Per l’articolo esaminato verranno considerati i valori del lotto economico e i suoi multipli, se e solo se sono attivi i rispettivi flag all’interno dei [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) dell’articolo. Nel caso in cui si tratti di un articolo con tipo approvvigionamento di produzione, i valori del lotto economico e i multipli verranno presi dal tab produzione dei [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) dell’articolo stesso, mentre si si tratta di un articolo di tipo approvvigionamento acquisto, verranno presi dal fornitore di default presente nel tab [Fornitori preferenziali](/docs/erp-home/registers/items/create-new-item) della sua anagrafica.

**Compatta/separa ordini**: in questo caso si va a scegliere se si vuole venga tenuto o meno un giorno di lasco tra la fine della produzione dell'ordine di 1 livello e quello del livello successivo;

**Esecuzione del MRP dopo pianificazione e Articoli a scorta**: si va ad indicare che si vuole che il sistema, dopo una prima pianificazione, vada ad analizzare comunque con l'M R P tutti i codici articolo della Distinta Base dell’articolo, che hanno politica di gestione diversa da quella a commessa, in modo da verificarne la copertura ed eventualmente generare degli ordini pianificati ma senza legame con la commessa. Attivando anche Articoli a scorta la procedura MRP prenderà in considerazione anche tutti gli articoli con politica di gestione a scorta nei [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters); 

**pianificazione per zona consegna**: settando questo flag il sistema va a vedere quando l'ordine va consegnato in base alla sua zona di consegna e andrà a schedulare l'ordine per prima rispetto al giorno della consegna;

**Controlla documenti in ritardo con ATP**: se si va ad abilitare questo flag si andrà ad abilitare contemporaneamente anche il campo successivo chiamato **Data inizio MS**; a questo punto la procedura di pianificazione andrà ad eseguire un ragionamento tale per cui se anche uno solo degli ordini che vengono pianificati e generati risulta essere in ritardo rispetto alla data prevista, il sistema andrà a cancellare tutti gli ordini creati e ripartirà a calcolarli dalla **Data inizio MS** con la logica *al più presto* e proporrà la nuova data per le commesse proprio nel campo *Data suggerita* presente nella griglia di risultato. A questo punto, tramite il pulsante dedicato **Cambia data fine prevista con data suggerita** (presente nel tab commesse della *Pianificazione generale*), è possibile sostituire la data di fine prevista con la data suggerita appena calcolata per poi lanciare nuovamente la pianificazione in modo da avere ora tutti gli ordini pianificati nel modo corretto;

**Rilascio automatico ordini pianificati**: se si decide di abilitare questo parametro, la pianificazione oltre a generare gli ordini come pianificati, li andrà anche a rilasciare automaticamente e quindi gli ordini pianificati di produzione diventeranno ordini di produzione, gli ordini pianificati di acquisto diventeranno RDA (richieste d'acquisto) e gli ordini pianificati di conto lavoro diventeranno ordini di conto lavoro;

**pianificazione al più presto o al più tardi**: l’utente può decidere con quale logica deve essere eseguire la pianificazione generale tra: al più presto e al più tardi. La logica al più presto mira a iniziare le operazioni non appena possibile, quindi partire dalla data odierna; mentre, la logica al più tardi pianifica le operazioni il più tardi possibile senza ovviamente compromettere le scadenze, quindi partendo dalla data di consegna e andando a ritroso nel tempo. 

**pianificazione commesse lanciate o esecutive**: permette di abilitare i flag: lanciati ed esecutivi presenti nel tab *commesse*; a questo punto attivandoli sarà possibile visualizzare e selezionare anche le commesse in stato lanciato ed esecutivo per poi pianificarle nuovamente. È importante tenere presente che, per le commesse in stato lanciato o esecutivo, verranno ripianificati solamente quegli ordini pianificati che non sono già stati rilasciati;

**Versione**: la procedura pianificherà le commesse nella versione che viene impostata in questo campo, se nella commessa di produzione non trova una versione inserita. La versione inserita nella commessa di produzione avrà una priorità maggiore rispetto alla versione inserita nei parametri della *Pianificazione generale*. Questo è un campo che deve essere valorizzato obbligatoriamente, altrimenti non sarà possibile procedere con la pianificazione;

**Considera la disponibilità**: se attivo questo flag indica alla procedura che nel processo di pianificazione dovrà tenere conto della disponibilità proveniente dai magazzini indicati nella griglia sottostante, che sono quelli definiti all’interno della form [Calcolo Disponibilità](/docs/erp-home/registers/items/calculate-availability/); 

**Considera disponibilità al data fabbisogno o la minima nel periodo**: questi flag si attivano solamente se è attivo il flag **Considera la disponibilità**; Alla **data fabbisogno** significa che la procedura dovrà considerare la disponibilità nel momento in cui devo produrre l'ordine, mentre, nel caso della data **minima nel periodo** la procedura andrà a considerare la disponibilità minima nel periodo fino alla data impostata nel parametro *Pianificazione fino al*.

**Considera lotti in stato non disponibile**: anche questo flag si attiva solamente se è attivo il flag **Considera la disponibilità**; se attivo, la procedura dovrà considerare i lotti in stato non disponibile;      

**Considera disponibilità anche per il primo livello**: anche questo flag si attiva solamente se è attivo il flag **Considera la disponibilità**; se attivo, la procedura dovrà considerare la disponibilità anche per il primo livello (quindi per l'articolo presente nella commessa di produzione);

**Considera anche disponibilità negativa**: se attivo, la procedura dovrà considerare anche le disponibilità negative al momento della pianificazione per l'articolo di primo livello; infatti, è possibile abilitare questo flag solo se è attivo il flag **Considera disponibilità anche per il primo livello**;      

**Considera disponibilità provenienti da**: anche questi flag diventano attivabili solamente se attivato il flag **Considera la disponibilità** e permettono di indicare se si vuole che la procedura consideri le disponibilità provenienti dagli acquisti, dalle vendite, dal magazzino, dal conto lavoro e dalla produzione;

**Reintegro scorta minima dell'articolo e reintegro punto di riordino dell'articolo**: il primo flag si attiva solamente se si va a settare il secondo. Questi due flag vanno ad indicare che la procedura dovrà prevedere il reintegro del punto di riordino stabilito per quell'articolo e se si vuole anche il reintegro della scorta minima dell'articolo; entrambi questi dati vengono inseriti nel tab [Approvvigionamento](/docs/erp-home/registers/items/create-new-item) dell'anagrafica;

**Considera l'indice di copertura**: se il flag è attivo, la procedura dovrà tenere conto dell'indice di copertura che viene stabilito sempre nel tab *Approvvigionamento* dell'articolo;

**Considera anche le alternative dei materiali**: se attivo, nel momento della pianificazione della commessa la procedura dovrà andare a considerare anche le alternative dei materiali,presenti nel tab *alternative* della [Distinta base](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management), nel caso in cui non ci sia disponibilità sufficiente per il materiale principale indicato in distinta;            

**Considera solo materiali alternativi**: si attiva solamente quando il flag **Considera anche le alternative dei materiali** è attivo; se attivo questo flag, viene verificata prima la disponibilità dei componenti alternativi in base alla priorità degli stessi, se non sufficiente verifica poi quella del componente principale; viene abilitato solo se è attivo il flag **Considera la disponibilità**;    

:::note Nota
I materiali alternativi vengono inseriti nel tab **Alternative**, relativo al materiale principale, presente nella [Distinta base](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management).
:::

**Considera le fasi alternative**: se attivo, questo flag indica che al momento della pianificazione bisognerà andare a considerare anche le fasi di lavoro alternative; attivando questo flag si attiverà il campo editabile successivo chiamato **Tolleranza per l'occupazione del C.d.L. %**, nel quale si potrà andare ad indicare la tolleranza di occupazione del centro di lavoro in %, oltre alla quale la procedura dovrà andare a considerare le fasi alternative alla fase di default.

## Monitor

In questo tab, tramite l'attivazione o meno dei flag presenti, l'utente ha la possibilità di scegliere la visualizzazione dei risultati della pianificazione nel tab **Storico**.

Si può decidere se visualizzare i **Calendari** presi in considerazione (il Calendario di *Fabbrica* e il calendario delle *Capacità produttive*); si può decidere che venga segnalato se nella pianificazione erano presenti **Articoli privi di** *Parametri MRP*, privi di *Distinta base* o di *Ciclo di lavoro*, privi di *Fornitore preferenziale* (nel caso di ordini di acquisto), privi di *Terzista preferenziale* (per gli ordini di conto lavoro) e privi dell'indicazione della scorta minima per tutti quegli articoli che sono gestiti a scorta. Per ogni **Commessa di produzione** si può scegliere di visualizzare nello storico, il *Numero di righe schedulate* e il dettaglio di queste righe, le commesse in ritardo e le commesse scadute.

Per quanto riguarda gli **Ordini pianificati**, si può scegliere se visualizzare nello storico, il *Numero di ordini generati* e il loro *Dettaglio*, gli ordini *In ritardo* e *Scaduti*, le *Alternative materiali*; si può scegliere anche di essere avvisati nel caso in cui ci siano **Ordini pianificati privi di** *Materiale*, di *Fasi di lavorazione*, del *Fornitore* (per l'acquisto) e il *Terzista* (per il conto lavoro).

**Legenda**: i flag attivi permettono di ricevere l'avviso e i dettagli riguardanti le voci selezionate.

## Storico

Nella griglia di questo tab vengono visualizzate tutte le informazioni riepilogative relative alla pianificazione della commessa.

**Progr. sched.**: visualizza un semplice progressivo dell'operazione di pianificazione lanciata dall'utente;

**Operatore**: visualizza l'utente che ha lanciato la pianificazione ;

**No. errori**: visualizza il numero degli errori registrati durante la procedura di pianificazione ;

**Data inizio**: visualizza data e ora di inizio del processo di pianificazione ;

**Data fine**: visualizza data e ora di fine del processo di pianificazione ;

**Dati schedulati provenienti da**: visualizza l'origine precisa dei dati schedulati;

**Previsionale**: visualizza se i dati provengano dalle Previsioni di Vendita oppure dal Piano Principale di Produzione;

**Periodo**: visualizza il tipo di previsione, settimanale o mensile;

**Giorno**: visualizza il giorno della settimana designato come giorno in cui deve cadere la data di fine della commessa di produzione schedulata direttamente da Definizione MPS.

Tutte le altre colonne della griglia visualizzano le impostazioni utilizzate nel tab **Parametri** della *Pianificazione generale* relativa alla riga selezionata.

**Risultato pianificazione **

In base alla riga selezionata nella griglia, in questa sezione compariranno i dettagli richiesti dall'utente nel tab **Monitor**.

Nel risultato della pianificazione , si possono vedere il numero della commessa appena pianificata, il numero degli ordini pianificati che sono stati generati da quella commessa e il dettaglio degli ordini pianificati che sono stati generati.

Per dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).