---
title: Pianificazione generale
sidebar_position: 1
---

Rappresenta l’algoritmo di Master Scheduling, ovvero lo schedulatore di produzione che si occupa di interessare le commesse selezionate e analizzarne la *fattibilità produttiva* in funzione della sua composizione strutturale. 
Questo tipo di pianificazione, eseguibile con logiche di analisi *al più presto* o *al più tardi*, dà la possibilità di verificare la necessità di ulteriore capacità produttiva, evidenziando la sovra-allocazione dei centri di lavoro critici, permettendo all’operatore di decidere se aumentare la capacità interna, acquistare capacità esterna o spostare i carichi nel tempo, eventualmente accettando ritardi di consegna. 

Da una o più commesse selezionate, in base ai parametri di pianificazione impostati nel tab relativo, la procedura va a creare gli ordini pianificati dei tre tipi previsti: produzione, acquisto e conto lavoro.

Una volta creati, gli ordini pianificati si potranno visualizzare nella form [Ricerca ordini pianificati](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders).

## Commesse

*Pulsanti specifici*:

> **Pianificazione generale**: consente al sistema di schedulare le commesse selezionate;  
> **Apri ricerca ordini pianificati**: questo pulsante consente di aprire la schermata di  [Ricerca ordini pianificati](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders); nel caso in cui, prima di premere questo pulsante, venga selezionata una riga di commessa la form degli ordini pianificati si aprirà già pre filtrata su quella commessa;               
> **Cambia data fine prevista con data suggerita**: questo pulsante consente di modificare la data suggerita, di cui si è parlato in questo articolo;  
> **Sequenza commesse**: tramite questa funzionalità si può accedere alla sequenza commesse, all'interno della quale si potranno visualizzare le commesse in base alla sequenza che gli è stata attribuita, anche tramite un grafico.


*Filtri specifici*:

**Tipo commessa**: tramite questa combo è possibile andare a selezionare il tipo di commessa che si vuole visualizzare, se le commesse monoprodotto, le commesse multiprodotto oppure entrambe;

**Sito produzione**: si possono andare a visualizzare le commesse in base al sito di produzione in cui vanno prodotte, selezionandolo tramite l'apposita combo;

**In ritardo/Scadute/Lanciate/Esecutive**: questi flag consentono di scegliere se si vogliono visualizzare anche le commesse in ritardo rispetto alla data oppure scadute e solo se nei  [Parametri generali di pianificazione ](/docs/planning/ms-master-scheduling/general-schedule) è settato il flag *pianificazione commesse lanciate o esecutive*, altrimenti i due campi risultano non essere attivi; altrimenti come spiegato nell'articolo sui parametri di pianificazione , nel tab commesse si potranno vedere solamente in stato di non esaminate o di schedulate, ma queste assumono lo stato di lanciate  e/o esecutive se questo flag non viene settato non si potranno visualizzare le commesse all'interno di questo tab.

*Campi specifici nella griglia dei Risultati*

**Data suggerita**: come spiegato nell'articolo relativo ai parametri generali di pianificazione , attivando un particolare flag chiamato  [Controlla doc in ritardo con ATP](/docs/planning/ms-master-scheduling/general-schedule) lo schedulatore andrà ad eseguire un ragionamento tale per cui se anche uno solo degli ordini che vengono schedulati e generati risulta essere in ritardo rispetto alla data prevista il sistema andrà a cancellare tutti gli ordini creati e ripartirà a generali dalla data MS che viene definita sempre nei parametri e che si attiva solo settando il flag controllo doc in ritardo con ATP e andrà a proporre la nuova data per le commesse proprio nel campo *Data suggerita* presente nella griglia di risultato.

### Procedura Pianificazione generale

Una volta selezionate le commesse che si vogliono schedulare, si attiverà il pulsante **Pianificazione generale** presente nella ribbon bar della form, e cliccando su quel pulsante il sistema procederà con la pianificazione delle commesse selezionate.

Per visualizzare tutte le schedulazioni effettuate e i relativi ordini di produzione creati per ogni commessa, basterà spostarsi nel tab **Storico**.

:::danger Nota    
Le commesse create manualmente vengono sempre prodotte indipendentemente dalla disponibilità dell'articolo da produrre.    
:::   

## Parametri di Pianificazione generale

:::note Nota
Prima di procedere con la pianificazione , è importante settare all'interno di questo tab i parametri da seguire per eseguire la pianificazione .
::: 

**Schedulare fino al**: indicare la data entro la quale il sistema dovrà andare a considerare i documenti inseriti; è possibile inserire un valore di default in mesi nel campo **Numero massimo di mesi per la pianificazione ** presente nei [Parametri MS](/docs/configurations/parameters/production/mps-parameters);       

**Materiali/Risorse**: attraverso questi flag si decide se schedulare sia i materiali che le risorse, quindi sia la distinta base che il ciclo di lavoro; con il flag *Risorse* attivo verranno considerati, nella pianificazione , anche i centri di lavoro;

**Ordini pianificati di**: attraverso i 3 flag si va ad indicare se si vuole che il sistemare generi tutti e tre i tipi di ordini previsti quindi produzione, acquisto e conto lavoro; in questo modo questi tipi di ordine avranno il legame diretto con la commessa; (per esempio se non viene messo il flag su Acquisto, però viene mantenuto il flag su Esecuzione MRP, il sistema andrà comunque a creare anche gli ordini di acquisto ma questi risulteranno slegati dalla commessa);

**Genera solo ordini pianificati per livelli**: in questo caso si andranno ad indicare i livelli (1-2...) per i quali si vuole vengano generati gli ordini pianificati;

**Ordini fornitori o Richieste d'acquisto e ordini cliente**: in questo caso, se vi sono presenti a sistema documenti privi di data di impegno e disponibilità, si può dire al sistema che vada a considerare come data quella che si potrà indicare nel apposto campo, oppure dire al sistema che non vada a considerare questo tipo di documenti;

**Raggruppamento ordini pianificati per**: nel caso in cui si lavori a commessa, in questo campo va impostata la voce *Nessun raggruppamento*; altrimenti si può andare a selezionare tramite l'apposita combo il tipo di raggruppamento che si intende applicare ma in questo caso il legame tra ordini pianificati e commessa si andrebbe a perdere;

**Raggruppamento al più tardi o al più presto**: in questo caso si può scegliere se andare a raggruppare gli ordini al più tardi (quindi in base all'ultimo) o al più presto (che è il più consigliato) e nel campo successivo chiamato **Per un per. in giorni** di si andranno ad indicare il numero di giorni all'interno del quale fare il raggruppamento;

**Considera le quantità in base al lotto economico/Considera i multipli del lotto economico**: settando il primo parametro si va ad indicare che durante la pianificazione si vuole tenere conto anche del lotto economico dell'articolo, e di conseguenza si attiverà il flag che permetterà di decidere se si vuole vengano tenuti in considerazione anche i multipli del lotto economico (entrambi questi dati vengono impostati all'interno dei [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) dell'articolo);

**Compatta/separa ordini**: in questo caso si va a scegliere se si vuole venga tenuto o meno un giorno di lasco tra la fine della produzione dell'ordine di 1 livello e quello del livello successivo;

**Esecuzione del MRP dopo pianificazione e Articoli a scorta**: in questo si va ad indicare che si vuole che il sistema vada ad analizzare comunque con l'MRP tutti i codici articolo che sono gestiti a fabbisogno per questo prodotto finito. L'MRP gira su tutti gli articoli della Distinta Base di questo articolo, che hanno politica di gestione diversa da quella a commessa, perchè su tutti quegli articoli si può voler verificare la copertura o si può voler generare gli ordini pianificati senza legame con la commessa; in questo caso l'MRP prende inconsiderazione i parametri indicati nel tab *Parametri generali* della **pianificazione **;      

**pianificazione per zona consegna**: settando questo flag il sistema va a vedere quando l'ordine va consegnato in base alla sua zona di consegna e andrà a schedulare l'ordine per prima rispetto al giorno della consegna;

**Controlla documenti in ritardo con ATP**: se si va ad abilitare questo flag si andrà ad abilitare contemporaneamente anche il campo successivo chiamato **Data inizio MS** e il sistema andrà ad eseguire il seguente ragionamento: se nella pianificazione degli ordini che genero, anche solo uno di questi risulta avere una data inizio inferiore ad oggi, cioè se sono in ritardo con la produzione di questa commessa, abilitando questo flag il sistema va a cancellare tutti gli ordini pianificati che ha generato e riparte dalla data che viene impostata dall'operatore nel campo **Data inizio MS** e riparte a schedulare al più presto da quella data;

**Rilascio automatico ordini pianificati**: se si decide di abilitare questo parametro, lo schedulatore oltre a generare gli ordini come pianificati, li va anche a rilasciare automaticamente e quindi gli ordini pianificati di produzione diventeranno ordini di produzione, gli ordini di acquisti diventeranno RDA (richieste d'acquisto) e il conto lavoro diventeranno ordini di conto lavoro;

**pianificazione al più presto o al più tardi:** grazie a questi flag, si può andare a definire se la pianificazione dovrà essere eseguita basandosi sull'ultima data di produzione degli ordini che si devono schedulare, quindi basandosi sull'ultimo ordine da produrre, oppure al più presto basandosi sul primo ordine da produrre;

**pianificazione commesse lanciate o esecutive**: di default quando una commessa viene schedulata la si vede ancora nel tab commesse e da li essendo in stato schedulata è possibile riselezionarla e rischedularla quante vuole si vuole; Quando però si iniziano a rilasciare gli ordini pianificati le commesse cambiano stato da schedulate a lanciare o esecutive e non si vedono più nel tab commesse; per poter continuare a vederle nel tab commesse anche una volta diventate lasciate o esecutive basterà questo flag cosi da poterle vedere e poterle rischedulare esattamente come avviene per le commesse in stato schedulate;

**Versione**: lo schedulatore schedulerà in una versione che viene impostata in questo campo, se nella commessa di produzione non trova una versione definita;

**Considera la disponibilità**: se attivo questo flag indica allo schedulatore che nel processo di pianificazione dovrà tenere conto della disponibilità proveniente dai magazzini indicati nella griglia sottostante che sono quelli precedentemente definiti nei [Parametri MS](/docs/configurations/parameters/production/mps-parameters);  

**Magazzini**: la griglia contenente i magazzini si attiva solamente se viene settato il flag **Considera la disponibilità**; nella griglia compaiono i magazzini che sono stati inseriti nella finestra del [Calcolo Disponibilità](/docs/erp-home/registers/items/calculate-availability);         

**Considera disponibilità al data fabbisogno o la minima nel periodo**: questi flag si attivano solamente se è attivo il flag **Considera la disponibilità**; alla data fabbisogno significa che lo schedulatore dovrà considerare la disponibilità nel momento in cui devo produrre l'ordine, mentre considera la data minima nel periodo lo schedulatore andrà a considerare la disponibilità minima nel periodo fino alla data impostata inizialmente nel parametro Schedulare fino al;

**Considera lotti in stato non disponibile**: anche questo flag si attiva solamente se è attivo il flag **Considera la disponibilità**; se attivo, lo schedulatore dovrà considerare i lotti in stato non disponibile alla data;      

**Considera disponibilità anche per il primo livello**: anche questo flag si attiva solamente se è attivo il flag **Considera la disponibilità**; se attivo, lo schedulatore dovrà considerare la disponibilità anche per il primo livello (quindi per l'articolo presente nella commessa di produzione);

**Considera anche disponibilità negativa**: se attivo, lo schedulatore dovrà considerare anche le disponibilità negative al momento della pianificazione per l'articolo di primo livello; infatti, è possibile abilitare questo flag solo se è attivo il flag **Considera disponibilità anche per il primo livello**;      

**Considera disponibilità provenienti da**: anche questi flag diventano attivabili solamente se attivato il flag **Considera la disponibilità** e permettono di indicare se si vuole che lo schedulatore consideri le disponibilità provenienti dagli acquisti, dalle vendite, dal magazzino, dal conto lavoro e dalla produzione;

**Reintegro scorta minima dell'articolo e reintegro punto di riordino dell'articolo**: il primo flag si attiva solamente se si va a settare il secondo; questi due flag vanno ad indicare che lo schedulatore dovrà prevedere il reintegro del punto di riordino stabilito per quell'articolo e se si vuole anche il reintegro della scorta minima dell'articolo; entrambi questi dati vengono inseriti nel momento della creazione dell'articolo nel tab [Approvvigionamento](/docs/erp-home/registers/items/create-new-items/item-registry/procurement);

**Considera l'indice di copertura**: se il flag è attivo, lo schedulatore dovrà tenere conto dell'indice di copertura che viene stabilito sempre nel tab *Approvvigionamento* dell'articolo;

**Considera anche le alternative dei materiali**: se attivo, nel momento della pianificazione della commessa lo schedulatore dovrà andare a considerare anche le alternative dei materiali nel caso in cui non ci sia disponibilità sufficiente per il materiale indicato in distinta; viene abilitato solo se è attivo il flag **Considera la disponibilità**;            

**Considera solo materiali alternativi**: si attiva solamente quando il flag **Considera anche le alternative dei materiali** è attivo; se attivo questo flag, viene verificata prima la disponibilità dei componenti alternativi in base alla priorità degli stessi, se non sufficiente verifica poi quella del componente principale; viene abilitato solo se è attivo il flag **Considera la disponibilità**;    

:::note Nota
I materiali alternativi vengono inseriti nel tab **Alternative**, relativo al materiale principale, presente nella [Distinta base](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management).
:::

**Considera le fasi alternative**: se attivo, questo flag indica che al momento della pianificazione bisognerà andare a considerare anche le fasi di lavoro alternative; attivando questo flag si attiverà il campo editabile successivo chiamato **Tolleranza per l'occupazione del C.d.L. %**, nel quale si potrà andare ad indicare la tolleranza di occupazione del centro di lavoro in %, oltre alla quale lo schedulatore dovrà andare a considerare le fasi alternative alla fase di default.

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

Nel risultato della pianificazione , si possono vedere il numero della commessa che si è schedulata, il numero degli ordini pianificati che sono stati generati da quella commessa e il dettaglio degli ordini pianificati che sono stati generati.

Per dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).