---
title: Generazione commesse di produzione
sidebar_position: 2
---

La procedura **Generazione commesse di produzione** permette di generare commesse di produzione da ordini clienti, dal previsionale e/o dal Sottoscorta.

### Ordini Clienti {#sales-orders}

In questo tab si possono filtrare le righe d'ordine cliente che si vogliono far analizzare dalla procedura **Generazione commesse di produzione**. 

Per poter essere visualizzate all'interno di questo tab, le righe d'ordine devono rispondere ai seguenti **requisiti**:

- l'articolo oggetto della riga ordine cliente deve avere il flag *Generazione commesse di produzione* abilitato nei suoi [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters);  
- la riga non deve essere stata evasa tramite *Picking list*, o *DDT di vendita*, o *Fattura di vendita*;  
- la riga non deve essere stata messa *Forzatamente evasa* e quindi deve risultare in stato *Non Evasa* oppure *Parzialmente evasa*;  
- dalla riga non devono ancora essere state generate *Commesse di produzione*;  
- la riga deve avere la *Data merce pronta* e *Data consegna* inserite nell'*Ordine cliente* all'interno del tab *Articoli* da cui proviene;  
- l'ordine cliente da cui proviene la riga deve essere *Stampato* e *Confermato*.

:::note Nota
La non presenza di UNA SOLA di queste condizioni provoca l'impossibilità di visualizzare la riga ordine cliente nella griglia.
:::

Nell'area di filtro in cui è possibile filtrare solamente le righe ordine che si vogliono visualizzare in base ai filtri presenti. Una volta impostati i filtri necessari, cliccando sul pulsante **Ricerca** verranno visualizzate nella griglia di risultato tutte le righe ordine corrispondenti ai filtri indicati. 

*Campi*    

**Tipo**: rappresenta il tipo di ordine cliente;       
**Numero**: rappresenta il numero dell'ordine cliente;     
**Anno**: rappresenta l'anno dell'ordine cliente;     
**Data ordine cliente**: rappresenta la data dell'ordine cliente;     
**Numero riga**: rappresenta il numero di riga dell'ordine cliente;        
**Cliente**: rappresenta il conto e sottoconto del cliente dell'ordine cliente;         
**Classe** e **Codice articolo**: rappresentano la classe e il codice dell'articolo;             
**Variante**: rappresenta la variante dell'articolo;          
**Quantità**: rappresenta la quantità ancora da evadere della riga d'ordine;   
**Disponibilità**: rappresenta la quantità disponibile dell'articolo nella data di merce pronta della riga d'ordine;           
**Unità di misura**: rappresenta l'unità di misura;        
**Consegna**: rappresenta data di merce pronta della riga d'ordine;  
**Tipo commessa** e **Descrizione commessa**: rappresentano il codice e la descrizione del tipo commessa associato al *tipo ordine cliente*;    
**Descrizione articolo**: rappresenta la descrizione dell'articolo;          
**Descrizione conto**: rappresenta la ragione sociale del cliente.  

:::note Nota
La colonna **Disponibilità** risulta uguale a zero per tutte le righe nel caso in cui il flag *Considera la disponibilità dell'articolo* presente nel tab **Parametri** sia disattivato. 
:::

*Pulsanti specifici*  

> **Considera per commesse**: permette di spostare le righe d'ordine selezionate nel tab **Riepilogo prototipi commesse** dove potranno essere prese in esame dalla procedura di generazione della commessa di produzione.  

> **Generazione flusso**: il pulsante viene abilitato solo nel caso in cui nei [Parametri MS](/docs/configurations/parameters/production/mps-parameters/) sia stato abilitato il flag *Generazione automatica flusso di produzione*. Con questo tasto è possibile lanciare direttamente l'esecuzione del flusso di produzione completo e quindi la *creazione* delle *Commesse di produzione* che verrebbero direttamente schedulate e, a seconda dei flag successivi impostati sempre nei [Parametri MS](/docs/configurations/parameters/production/mps-parameters/), verrebbero eventualmente anche generati gli *Ordini pianificati di acquisto, conto lavoro e produzione*, con anche la possibilità di definire quali rilasciare in automatico.     
Quindi tramite l’utilizzo di questo pulsante potremo trovarci con già tutti gli ordini pianificati rilasciati e gli ordini di produzione in stato esecutivo, saltando così tutte le fasi intermedie.

### Sottoscorta {#safety-stock}

Attraverso questo tab si possono filtrare le righe di articoli gestiti a Scorta che si vogliono far analizzare dalla procedura *Generazione commesse di produzione*.  
L'unico **requisito** che consente all'articolo di essere visualizzabile in questa griglia è rappresentato dal fatto che ha, nel suoi [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro), il *Tipo di gestione* a *Scorta*.

Nell'area di filtro è possibile filtrare solamente le righe ordine che si vogliono visualizzare in base ai *filtri* inseriti.  
**Vedi variante**: il flag attivo permette di visualizzare la variante;  
**Tipo commessa di produzione**: consente di decidere il tipo di commessa di produzione da generare;  
**Sotto punto di riordino al**: rappresenta la data fino alla quale non si vuole che gli articoli della griglia finiscano sottoscorta.  

Una volta impostati i filtri necessari, cliccando sul pulsante **Ricerca** verranno visualizzate nella griglia di risultato tutte le righe articolo corrispondenti ai filtri indicati.

I dati che si possono visualizzare all'interno della griglia sono:  
**Classe**, **Codice** e **Descrizione articolo**;  
**Variante**: viene visualizzato se il flag omonimo è stato selezionato; se si è deciso nell'area di filtro che venga visualizzata;  
**Punto di riordino**, **Scorta minima** e **Giorni di riordino**: vengono ripersi dall'*Anagrafica articolo* > tab *Approvvigionamento*;   
**Consumo medio giornaliero**: viene calcolato sottraendo la scorta minima dal punto di riordino e dividendo il risultato ottenuto per i giorni di riordino;   
**Lotto economico di produzione** e i suoi **Multipli**: vengono ripresi dal tab produzione dei [parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) dell'articolo se è di *tipo approvvigionamento di produzione*, mentre vengono presi dal *fornitore predefinito* del tab *fornitori preferenziali* dell’*anagrafica articolo* nel caso in cui sia *tipo approvvigionamento di acquisto*;           
**Giacenza**: riporta la giacenza dell'articolo alla data corrente;       
**Disponibilità iniziale**: rappresenta la disponibilità dell'articolo al giorno in cui si lancia l'elaborazione;     
**Disponibilità finale**: rappresenta la disponibilità dell'articolo al giorno indicato nella casella **Sotto punto di riordino alla data** presente nell'area di filtro;   
**Disponibilità minima**: rappresenta la disponibilità minima che l'articolo presenta nel lasso di tempo che intercorre tra la data di disponibilità inizio e la data di disponibilità finale.  

:::note Nota
Per i documenti privi della Data Consegna viene considerato il parametro *Se non è specificata la data di consegna* presente nel tab Parametri.
:::

La *griglia inferiore* visualizza il dettaglio della disponibilità dell'articolo selezionato nella griglia principale.

:::note Nota
Nella prima riga della griglia, la disponibilità è data dalla somma della giacenza e di tutti i documenti scaduti (con data antecedente ad oggi).
:::

*Pulsante specifico*  

> **Considera per commesse**: permette di spostare le righe selezionate nel tab **Riepilogo prototipi commesse** dove potranno essere prese in esame dalla procedura di generazione della commessa di produzione.

Solo le righe per le quali la procedura ritiene di poter creare una commessa di produzione saranno trasferite nel tab *Riepilogo prototipi commesse*. La procedura propone per ogni articolo una commessa di produzione e cerca di fare in modo che nel giorno in cui l'articolo abbia il rischio di scendere sotto il livello di scorta minima, venga reintegrato tramite una commessa di produzione avente data identica alla data sottoscorta. La quantità di questa commessa dovrà consentire di sopravvivere fino alla data di **Sotto punto di riordino** indicata nell'area di filtro: ovviamente se l'articolo presenta dei lotti economici di produzione o di acquisto e dei multipli essi vengono rispettati.

### Previsionale {#forecast}

In questo tab si possono filtrare le righe di *Previsioni di vendita* o del *Piano principale di produzione* che si vogliono far analizzare dalla procedura **Generazione commesse di produzione**, utilizzando i filtri per articolo e per variante.

Le righe delle *Previsioni di vendita* che possono essere visualizzate in questo tab devono rispondere ai seguenti **requisiti**:

- la previsione di vendita annuale deve essere in stato di *Consolidata*;  
- la previsione di vendita annuale deve essere stata generata con una *Versione* valida;  
- dalla riga di previsione non devono ancora essere state generate *Commesse di produzione*;  
- dalle righe del *Piano principale di produzione* che possono essere visualizzate in questo tab non devono ancora essere state generate *Commesse di produzione*.

Nell'area di filtro è possibile filtrare solamente le righe ordine che si vogliono visualizzare in base ai *filtri* inseriti.  
**Vedi variante**: il flag attivo permette di visualizzare la variante;  
**Mese di fine schedulazione**: serve per visualizzare nella griglia solo le previsioni di vendita che arrivano fino alla data indicata;  
**Tipo commessa**: rappresenta il tipo di commessa di produzione da generare;    
**Tipi ordine**: la griglia consente di impostare i *Tipi ordini cliente* che devono essere considerati contemporaneamente alle quantità presenti nelle previsioni di vendita, in modo tale che la procedura di creazione commessa generi la commessa di produzione con una quantità pari al maggiore, al minore o alla somma delle quantità presenti, per lo stesso articolo, in riga ordine cliente e/o in previsione di produzione o piano principale.

Una volta impostati i filtri necessari, cliccando sul pulsante **Ricerca** verranno visualizzate nella griglia di risultato tutte le righe di previsione corrispondenti ai filtri indicati.  

*Campi* 

**Classe**, **Codice** e **Descrizione articolo**;  
**Variante**: viene visualizzato se il flag omonimo è stato selezionato; se si è deciso nell'area di filtro che venga visualizzata; 
**Anno**: rappresenta l'anno della previsione di vendita;  
**Mese/Sett**: rappresenta il numero del mese o della settimana della previsione di vendita;  
**Data gen. commessa**: rappresenta la data di generazione della commessa di produzione;  
**Date inizio / fine previsione**: per esempio, se la previsione è stata impostata per il mese di maggio, la data inizio sarà il 01/05 e la data fine sarà il 31/05;   
**Quantità**: rappresenta la quantità relativa alla singola riga di previsione;  
**Conto/Sottoconto/Descrizione conto**: rappresenta il conto del cliente relativo alla riga di previsione di vendita (ove presente).  

*Pulsante specifico*  

> **Considera per commesse**: permette di spostare le righe selezionate nel tab **Riepilogo prototipi commesse** dove potranno essere prese in esame dalla procedura di generazione della commessa di produzione.

### Riepilogo prototipi commesse

Questo tab presenta le righe che sono state spostate dai tab precedenti e che devono essere trasformate in commesse di produzione.

Il tab contiene:  
- la sezione **Commessa di produzione proposta** in cui l'utente può impostare il **Tipo**, l'**Anno** e il **Numero** della commessa di produzione a cui devono essere aggiunte le righe selezionate nello stesso tab **Riepilogo prototipi commesse**.  
- la griglia di risultato dove verranno visualizzate le righe articolo che sono state spostate dagli altri tab.

*Campi griglia*:  

**Dati da**: rappresenta il tab di provenienza della riga;     
**Classe**, **Codice articolo** e **Descrizione**: rappresentano la classe, il codice e la descrizione dell'articolo;             
**Variante**: rappresenta la variante dell'articolo;     
**Quantità**: rappresenta la quantità della commessa che viene proposta dalla procedura;
**Disponibilità**: rappresenta la quantità disponibile dell'articolo alla *Data consegna*;            
**Data di consegna**: rappresenta la data di fine della commessa di produzione proposta (che è modificabile manualmente dall'utente);                
**Data inizio previsione**: rappresenta la data di inizio previsione;      
**Codice tipo**: rappresenta il codice dell'ordine cliente;        
**Numero ordine cliente**: rappresenta il numero dell'ordine cliente;  
**Conto / Sottoconto / Descrizione conto**: rappresentano il conto del cliente relativo alla riga di previsione di vendita (ove presente);      
**Tipo commessa** e **Descrizione commessa**: rappresentano il codice e la descrizione del tipo commessa.       

Dopo aver selezionato le righe desiderate, l'utente ha la possibilità di creare le commesse di produzione in base ai criteri impostati nel tab **Parametri**, utilizzando il tasto **Formazione automatica commesse**. La procedura presenta, al termine dell'elaborazione, una finestra in cui vengono specificati i numeri delle commesse generate, finestra sulla quale l'utente deve solo cliccare su OK e chiudere.

*Pulsante specifico*   
> **Formazione automatica commesse**: richiama la procedura che genera le commesse di produzione dalle righe selezionate.  

### Parametri

Attraverso questo tab vengono settati tutti i parametri che riguardano la gestione della creazione delle commesse di produzione ed il modo in cui devono essere gestite le fasi successive alla generazione delle commesse stesse. Alcune impostazioni presente in questo tab vengono riprese dalla finestra [Parametri MPS](/docs/configurations/parameters/production/mps-parameters).

**Metodo generazione commessa**:  
- **Tipo commessa** (Monoprodotto / Multiprodotto): viene riproposto il dato che era stato settato nel tab  [Parametri MPS.](/docs/configurations/parameters/production/mps-parameters)  Nel momento della generazione della commessa dalla *Generazione commesse di produzione* è comunque possibile modificare questa impostazione all'interno di questa finestra, così come quella relativa alla combo successiva;  
- **Raggruppamento prodotti per**: combo tramite la quale è possibile indicare come devono essere eventualmente raggruppati gli articoli all'interno della stessa commessa *Monoprodotto* o *Multiprodotto*.  

> Se il tipo commessa è *Monoprodotto*, l'unico raggruppamento ammesso è quello per *Articolo*; questo tipo di gestione permette all'utente di far generare automaticamente dal sistema una serie di commesse *Monoprodotto*, selezionando una lista di righe di *Ordini clienti*, righe provenienti da   *Previsioni di vendita* o dal *Piano principale di produzione* o provenienti dal *Sottoscorta* facendo in modo che ciascuna commessa che verrà generata presenti la somma delle quantità richieste per lo stesso articolo. La data di fine di una commessa raggruppata è sempre uguale a quella del fabbisogno più vicino alla data in cui si lancia l'elaborazione.  
> Se il tipo commessa è *Multiprodotto* i raggruppamenti possono essere effettuati per cliente o progetto e consentono all'utente di inserire nella stessa commessa *Multiprodotto* più articoli provenienti da righe d'ordine cliente legate allo stesso cliente, alla stessa commessa di vendita oppure alla stessa commessa di vendita dello stesso cliente.

**Priorità approvvigionamento**: la combo riporta la priorità di approvvigionamento che era stata impostata nei  [Parametri MPS](/docs/configurations/parameters/production/mps-parameters) selezionando una priorità tra quelle codificate all'interno della tabella *Priorità approvvigionamento* che si trova tra le tabelle della sezione *Impostazioni Generali*.

**Aggiornamento commesse già esistenti**: le commesse selezionate nel tab riepilogativo vengono aggiunte ad una commessa già esistente (indicata nel box *Commessa di produzione propost* del tab **Riepilogativo**), se e solo se è abilitato il flag **Aggiornamento commesse già esistenti** nel tab parametri. In automatico verrà proposta una commessa già salvata dove aggiungere le righe, se ne esiste già una con quel tipo e data.         

Di seguito, attraverso degli appositi flag, si può indicare se la commessa debba essere generata da **Ordini clienti** o da un **Previsionale** (e nel caso del previsionale se da **Previsioni di vendita** o dal **Piano principale di produzione**), oppure, in ultima analisi, dal **Sottoscorta**. In quest'ultimo caso viene utilizzato un algoritmo particolare spiegato nel paragrafo dedicato al tab [Sottoscorta](#safety-stock).

**Previsionale**: se il flag è attivo, si può poi decidere con quale modalità temporale debbano essere generate le commesse di produzione, tra le opzioni seguenti:  
> **Mensile**: in questo caso la commessa di produzione verrà generata nel mese in cui cade la data della fine della Previsione di Vendita oppure nel mese in cui è stata inserita la quantità nel Piano Principale di Produzione. L'utente può anche impostare il giorno del mese in cui deve essere impostata dalla procedura automatica di creazione commessa la data di prevista fine della commessa stessa;  
> **Settimanale**: in questo caso verrà generata una commessa di produzione per ogni settimana del mese in cui cade la data della fine della Previsione di Vendita oppure del mese in cui è stata inserita la quantità nel Piano Principale di Produzione. L'utente può anche impostare il giorno della settimana in cui deve essere impostata dalla procedura automatica di creazione commessa la data di prevista fine della commessa stessa;  
> **Reali**: in questo caso verrà generata una commessa di produzione per ogni settimana del mese in cui cade la data della fine della *Previsione di Vendita* oppure del mese in cui è stata inserita la quantità nel *Piano Principale di Produzione*, ma considerando esattamente la data di fine della singola riga della *Previsione di Vendita*;  
> **Settimanale considerando gg di produzione della zona di consegna**: in questo caso verrà generata una commessa di produzione tenendo conto dei giorni di produzione della zona di consegna legata al cliente per cui è stata creata la *Previsione di Vendita*;  
> **Raggruppamento previsioni per clienti**: il flag serve per fare in modo che le commesse di produzione vengano generate raggruppando le righe di previsione degli stessi clienti.

**Se non è specificata la data di consegna** la sezione riguarda esclusivamente il tab *Ordini Clienti* e il tab *Sottoscorta* della *Generazione commesse di produzione*. Qui l'utente può decidere se, nel caso in cui manchi la *Data merce pronta* nella riga dell'ordine cliente che deve essere analizzata dalla procedura, debba essere ignorata la riga priva di data, oppure debba essere accettata una certa data come prevista fine della commessa che verrà generata, oppure debba essere accettata una certa data come previsto inizio della commessa che verrà generata (in questi ultimi due casi le date vanno selezionate nelle due combo dedicate).

**Considera la disponibilità dell'articolo**: il flag consente, se attivato, di fare in modo che in tutti i tab della *Generazione commesse di produzione* venga esposta la disponibilità dell'articolo alla *Data di prevista fine* della commessa di produzione che dovrà essere creata. Lo stesso avviene anche nel tab *Riepilogo prototipi commesse*. La disponibilità viene presa in considerazione sulla base dei flag attivati nei *Parametri MPS* (Conto Lavoro, Acquisti, Vendite, Produzione, Magazzino). In questo caso, quando si andrà a creare la commessa la procedura andrà a tenere conto della disponibilità creando la commessa per la differenza tra la domanda e la disponibilità di quell'articolo.

**Magazzini di pianificazione  commesse**: nella griglia compaiono i magazzini che sono stati inseriti nella finestra del [Calcolo Disponibilità](/docs/erp-home/registers/items/calculate-availability). Da questo tab *Parametri* possono solo essere visualizzato e non modificati.

**Sito Produttivo:** questa informazione, se indicata, viene utilizzata per far considerare alla procedura di generazione commessa da ordine cliente le sole righe ordine cliente confermate, dove il magazzino di prelievo previsto è associato a quel sito produttivo.

**Calcolo quantità in base al lotto economico**: se attivato, questo flag, fa in modo che la procedura generi la commessa di produzione considerando il lotto economico di acquisto inserito nel tab [Fornitori preferenziali](/docs/erp-home/registers/items/create-new-item/item-registry/preferential-vendors) sul fornitore designato come di default se l'articolo analizzato in *Generazione commesse di produzione* ha come *Tipo approvvigionamento*: *Acquisto* o *Conto Lavoro*, e il lotto economico di produzione inserito nei [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) se l'articolo oggetto della commessa ha come *Tipo Approvvigionamento* *Produzione*.       

**Calcolo quantità in base ai multipli dell'articolo**: se attivato, questo flag fa in modo che la procedura generi la commessa di produzione considerando anche i multipli del lotto economico di acquisto inserito nel tab fornitori preferenziali sul fornitore designato come di default degli articoli se l'articolo oggetto della commessa ha come *Tipo Approvvigionamento* *Acquisto* o *Conto Lavoro*, e i multipli del lotto economico di produzione inserito nei  [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters)  se l'articolo analizzato in *Generazione commesse di produzione* ha come *Tipo Approvvigionamento*: *Produzione*. Ovviamente questo flag può essere attivato solo se risulti attivo il flag di cui al paragrafo precedente.              

**Reintegro scorta minima dell'articolo**: se attivato, questo flag permette all'utente di fare in modo che per l'articolo analizzato in *Generazione commesse di produzione* sia reintegrata la scorta minima inserita nell'*Anagrafica articolo > tab Approvvigionamento*.    

**Reintegro punto di riordino dell'articolo**: se attivato, questo flag permette all'utente di fare in modo che per l'articolo analizzato in *Generazione commesse di produzione* sia reintegrato il punto di riordino inserito nell'*Anagrafica articolo > tab Approvvigionamento*.

**Escludi ordini in ritardo**: se attivato, questo flag permette all'utente di fare in modo che la procedura di generazione della commessa di produzione escluda dal calcolo della disponibilità dell'articolo analizzato le quantità provenienti dalle righe d'ordine cliente la cui *Data merce pronta* risulta essere precedente alla data corrente.

Una volta impostati i parametri, si potrà procedere con la creazione delle commesse, nei rispettivi tab degli [Ordini clienti](#sales-orders), del [Previsionale](#forecast) e del [Sottoscorta](#safety-stock).

*Pulsante specifico*  
> **Formazione automatica commesse**: richiama la procedura che genera le commesse di produzione dalle righe selezionate.  

Per dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).
