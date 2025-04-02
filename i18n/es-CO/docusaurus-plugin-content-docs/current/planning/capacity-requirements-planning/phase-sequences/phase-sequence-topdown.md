---
title: Sequenza Fasi - TopDown grid
sidebar_position: 2
---

:::important A cosa serve
La procedura di **Sequenza fasi** in Fluentis, tramite la funzionalità "Sequenza Fasi - TopDown grid", consente di ottimizzare la gestione delle fasi di produzione assemblando sequenze manuali o basate su regole personalizzate.      
Dopo un'accurata selezione dei filtri, tra cui centro di lavoro, periodo d'ordine e commessa, le fasi non ancora ordinate sono elencate in una griglia superiore. Da qui, le fasi vengono spostate nella griglia inferiore per attribuire una sequenza.      
La form include strumenti per modificare dati associati alle fasi, calcolare tempi e aggiornare date, garantendo un preciso controllo sulla pianificazione della produzione. Pulsanti specifici facilitano il calcolo delle sequenze, la gestione delle giacenze e l'aggiornamento dello stato degli ordini, assicurando un flusso produttivo efficiente.
:::

Dà la possibilità di sequenziare le fasi manualmente o secondo regole decise dall’operatore.

La form si compone di una prima area di filtro dove è possibile selezionare:
> **Centro di lavoro**       
> **Macchina**        
> **Da data inizio ordine**         
> **A data fine ordine**      
> **Commessa di produzione**     

Espandendo quest'area è possibile filtrare, ad esempio, anche per *Articolo*, *Sequenza*, *Tipo commessa produzione*, *Gruppi manodopera*, inoltre vi è anche la possibilità di scegliere le tipologie di ordini da visualizzare tra ordini pianificati, ordini di produzione in stato lanciato e/o esecutivo.

La parte centrale della form è costituita da due griglie.           
La prima presenta tutte le fasi di lavorazioni alle quali non è ancora stata data una sequenza. Quindi selezionando una fase o più fasi dalla prima griglia e premendo il pulsante *Spostare fasi*, queste vengono spostate nella seconda griglia (sottostante) dove sarà poi possibile attribuire una sequenza manualmente o automaticamente.          

:::note Nota
Non è possibile modificare le informazioni di una fase già dichiarata in produzione.
:::

Nella parte inferiore della form sono presenti i seguenti campi:
> **Quantità impegno**: riporta il totale delle quantita impegno delle righe selezionate dall'utente;         
> **Unità di misura Tempi**: indica l'unità di misura del tempo con la quale si vuole visualizzare il valore presente in **Totale tempo**;     
> **Totale tempo**: riporta il totale del tempo (Tempo macchina + Tempo manodopera + Tempo attrezzaggio) delle righe selezionate dall'utente.

Inoltre, espandendo questa parte vengono visualizzati in sola lettura i dati di dettaglio relativi a:
> **Quantità**
> **Tempo manodopera**
> **Tempo macchina**
> **Tempo attrezzaggio**

*Pulsanti specifici*:  

> **Ricerca**: permette di visualizzare le fasi in base ai filtri inseriti;           
> **Ricerca e considera giacenze**: effettua la stessa funzione del pulsante **Ricerca**, ma, allo stesso tempo, permette di visualizzare in rosso tutte le fasi dove non c'è giacenza disponibile ad oggi;                   
> **Spostare fasi**: permette di spostare la o le fasi selezionate dalla prima griglia alla seconda griglia dove sarà poi possibile assegnare una sequenza;         
> **Cambia fasi**: una volta selezionata una fase, questo comando permette di *Aggiornare* la fase stessa variando: fase, macchina, centro di lavoro, totale del tempo macchina, del tempo operaio e del tempo di attrezzaggio. Inoltre, selezionando la voce *Inserisci* è possibile aggiungere una nuova fase oppure, tramite la voce *Cancella* di eliminarla definitivamente;            
> **Cambia ciclo/Versione**: permette di variare ciclo e / o versione in quell'ordine di produzione;            
> **Cambio date**: permette di variare la data di inizio della fase selezionata;         
permette di variare la *Data inizio* per tutti gli ordini pianificati o di produzione selezionati con la data indicata nel pop-up; successivamente in base alla fasi e al *Calendario capacità produttive* viene ricalcolata anche la *Data fine* ordine e le date inizio e fine di ciascuna fase. In base alle nuove date vengono anche ricalcolate le date di utilizzo dei materiali.
Oltre ad aggiornare le date nell'ordine vengono aggiornate quelle nella commessa collegata;        
> **Calcola tempo fase in base alla priorità**: permette di effettuare il ricalcolo dei tempi dopo aver assegnato la nuova sequenza oppure dopo aver variato qualche dato tramite la funziona **Cambia fasi**;          
> **Calcolo ed inserimento sequenza di produzione**: dopo aver riordinato le righe della seconda griglia in base alla necessità, questo pulsante permette di dare una sequenza alle fasi che abbiamo selezionato in base all'ordinamento dato;       
> **Ricalcola fattibilità**: la procedura calcolerà la fattibilità sui materiali e sulla fase precedente per le righe selezionate, applicando il colore nelle relative caselle *Fattibilità materiali* e *Fattibilità fase* presenti nella griglia inferiore in base a quanto definito nei [Parametri fabbisogno materiali](/docs/configurations/parameters/production/resource-requirements-parameters). Questo pulsante si abilita solo è stato attivato il flag **Sequenza fasi** nella sezione *Parametri calcolo fattibilità* dei [Parametri fabbisogno materiali](/docs/configurations/parameters/production/resource-requirements-parameters);          
> **Dettaglio fattibilità materiali**: permette di aprire un pop up che evidenzia quali materiali siano disponibili e quali no per quella fase. Questo pulsante si abilita solo è stato attivato il flag **Considera materiali** nella sezione *Parametri calcolo fattibilità* dei [Parametri fabbisogno materiali](/docs/configurations/parameters/production/resource-requirements-parameters);      
> **Dettaglio fattibilità fasi**: permette di aprire un pop up che evidenzia lo stato di avanzamento della fase precedente, visualizzando anche le eventuali dichiarazioni effettuate fino a quel momento. Questo pulsante si abilita solo è stato attivato il flag **Considera fasi precedenti** nella sezione *Parametri calcolo fattibilità* dei [Parametri fabbisogno materiali](/docs/configurations/parameters/production/resource-requirements-parameters);   
viene aperto un pop up che evidenzia quali materiali abbiamo a disposizione e quali no per quella fase; mentre, tramite il pulsante dettaglio fattibilità fasi, è possibile capire lo stato di avanzamento della fase precedente, visualizzando anche le eventuali dichiarazioni effettuate fino a quel momento.
> **Aggiornamento data merce pronta**: permette di aggiornare la *Data merce pronta* degli ordini cliente collegati con la *Data fine ordine*; 
> **Rilascio ordini pianificati**: permette di rilasciare gli ordini pianificati di produzione in ordini di produzione per le fasi selezionate;                     
> **Rilascio ordini**: permette di variare lo stato degli ordini di produzione da lanciato ad esecutivo della o delle fasi selezionate.         
> **Espandi la dimensione della griglia**: permette di nascondere l'area di filtro della form per lavorare più agevolmente sulle griglie;         
> **Doppia griglia**: permette di nascondere la prima griglia per poter lavorare più agevolmente sulla seconda.          

Per dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).
