---
title: Simulazione Gantt
sidebar_position: 2
---

La form che permette di creare e modificare una simulazione Gantt, si compone dei seguenti tab:

- Testata
- Filtro
- Gantt
- Log della simulazione

## Testata

Permette di inserire i dati di testata della simulazione Gantt.

*Campi specifici*:

> **Nome della simulazione**: indica il nome associato alla simulazione Gantt (di default viene proposto il nome dell'utente e data ed ora di creazione);     
> **Tipo**: indica il codice del [Tipo Simulazione Gantt](/docs/configurations/tables/production/crp-gantt-simulation-type) (si vedono solo quelli non di tipo Snapshot);           
> **Descrizione** tipo: indica la descrizione del [Tipo Simulazione Gantt](/docs/configurations/tables/production/crp-gantt-simulation-type);        
> **Blocca documenti**: indica che tutti documenti che sono inclusi nella creazione della simulazione Gantt vengono bloccati. Quindi non possono essere modificati fino a quando non vengono non viene resa valida la simulaizone rilsciando le modifiche effettuate sui documenti;  
> **Numero**: indica il numero della simulazione Gantt e dipende dalla numerazione associata al [Tipo Simulazione Gantt](/docs/configurations/tables/production/crp-gantt-simulation-type);         
> **Simulazione Valida**: indica che la simulazione sia è stata confermata e quindi le modifiche effettuate nel Gantt sono state riportate nei documenti collegati;      
> **Data inserimento**: indica la data di inserimento della simulazione Gantt;     
> **Utente**: indica l'utente della simulazione Gantt.     

## Filtro

Permette di ricercare i documenti che saranno utilizzati per la creazione del **Gantt**.     
La forma si presenta composta da un'area superiore, nella quale sono inseriti i filtri per la ricerca dei vari documenti, con al di sotto, sulla sinistra un elenco che visualizza tutti i documenti corrispondenti ai filtri inseriti e sulla destra l'elenco dei documenti che saranno inseriti nel **Gantt**.       
Tra i filtri è possibile utilizzare quello relativo al *Tipo documento* che permette di selezionare solo: *Ordini pianificati*, *Richieste di acquisto*, *Ordine di produzione* o *Ordine di conto lavoro*; inoltre, è possibile visualizzarli per *commessa* o per *documento* a seconda dell esigenze.       
I documenti evasi vengono considerati solamente se viene attivato il rispettivo flag **Considera documenti evasi**.      

Le griglie sottostanti presentano i documenti con una struttura ad albero, permettendo all'utente di selezionare solo quello che gli interessa semplicemente spuntando la casella corrispondente. Successivamente tramite l'apposito pulsante **Traferisci selezionati** oppure *Drag & Drop* l'utente può aggiungerli all'elenco di quelli da considerare per la creazione del **Gantt**.       

*Pulsanti specifici*:

> **Ricerca**: permette di ricercare i dcoumenti sulla base dei filtri inseriti;          
> **Crea**: permette di creare il **Gantt** sulla base dei documenti inseriti nella griglia di destra;     
> **Seleziona**: permette di spuntare il documento selezionato;        
> **Seleziona tutti**: permette di spuntare tutti i documenti presenti nella griglia;       
> **Deseleziona tutti**: permette di rimuovere la spunta da tutti i documenti presenti nella griglia;    
> **Esplodi commesse**: permette di espandere l'albero della commessa selezionata fino ad arrivare al dettaglio della fase;      
> **Implodi commesse**: permette di chiudere l'albero della commessa selezionata;     
> **Traferisci selezionati**: permette di traferire i documenti selezionati dalla griglia di ricerca a quella di creazione del **Gantt**;      
> **Salva**: permette di salvare le modifiche effettuate.

## Gantt

In questo tab viene visualizzato il Gantt in base ai criteri di ricerca impostati nel tab precedente. Il tab si compone di 2 sezioni, a loro volta divise in 2 pannelli ciascuna.

- **Sezione superiore**: nella sezione superiore l'utente può visualizzare nella parte sinistra della sezione la lista dei documenti che sono stati selezionati con il check box nel tab precedente, uno sotto l'altro in una struttura ad albero, con un'indentazione basata sui legami che i documenti presentano reciprocamente.      
Se la commessa di produzione presenta più di un articolo, al di sotto della commessa di produzione viene presentato il codice dell'articolo (Arrticolo e poi classe, codice e descrizione dello stesso).         
In ciascuna di queste righe è visibile anche la data di inizio del documento e la data di fine.      
Se la riga è evidenziata in rosso significa che è stata evasa oppura che nella realtà quella riga non esiste più.        
A ciascuna di queste righe corrisponde una barra orizzontale posta nella parte grafica della sezione superiore, che raffigura appunto graficamente i documenti dettagliati nella zona di sinistra di questa sezione.       
Le barre orizzontali coprono un arco temporale che può essere ampliato o ridotto, usando gli opportuni pulsanti della ribbon bar chiamati **Zoom Out** e **Zoom In**, andando in dettaglio di un singolo giorno e visualizzando quindi gli impieghi addirittura a livello di ora/minuto. Inoltre, con un doppio click sulla barra orizzontale che rappresenta un documento si apre automaticamente il documento stesso, sempre in accordo con i diritti dell'utente che sta eseguendo questa operazione.     
Le barre orizzontali possono essere spostate sul grafico con un semplice drag and drop; l'operazione consente di spostare le date dei documenti in maniera assolutamente dinamica.   
L'utente può poi scegliere, uscendo dal tab, di confermare la modifica effettuata o meno, tramite il tasto **Applica**.

:::note Nota
Si ricorda che è possibile anticipare e posticipare solamente i documenti pianificati oppure le fasi non ancora iniziate, tutto il resto è bloccato.
:::

- **Sezione inferiore**: nella sezione inferiore viene presentato, diviso in 2 pannelli, un istogramma relativo alla disponibilità e all'impegno delle risorse produttive.     
Nel pannello di sinistra vengono visualizzati i nomi dei *Centri di Lavoro* impegnati nelle lavorazioni che si è deciso di visualizzare nel grafico, mentre nel pannello di destra, indissolubilmente legato al pannello di sinistra della sezione superiore, troviamo alcune barre verticali che per ogni giornata lavorativa presentano la quantità di lavoro che ciascun *Centro di Lavoro* deve svolgere in base ai tempi previsti delle fasi degli ordini di produzione presenti in quei giorni.      
Da notare che l'istogramma evidenzia il totale degli impegni dei singoli centri di lavoro, non limitandosi a raffigurare graficamente solo l'impegno derivante dall'ordine di produzione visualizzato nel **Gantt**.     
Infatti l'utente ha la possibilità, con un doppio click sulla barra dell'istogramma di un qualsiasi centro di lavoro, di esplodere una finestra in cui viene presentata la lista degli ordini di produzione presenti nel **Gantt**, e la lista degli ordini di produzione non presenti nella simulazione che si sta eseguendo graficamente, con la possibilità, anche da questa finestra, di aprire direttamente i documenti di cui viene fornito un dettaglio limitato. La finestra che viene aperta con il doppio click sull'istogramma si chiama **Visualizza fasi di lavoro**.         
Tramite la form **Visualizza fasi di lavoro** è possibile selezionare le fasi di interesse e tramite i pulsanti **Cambia centro di lavoro** e **Cambia date**, l'utente può cambiare rispettivamente il centro di lavoro della fase e spostare di 'x' tempo (giorni/ore/minuti) od ad una certa data le singole fasi.

*Pulsanti specifici*:

> **Salva**: permette di salvare le modifiche effettuate;       
> **Salva snapshot**: permette di salvare le modifiche effettuate creando uno snapshot (un figlio) partendo dalla simulazione principale;      
> **Rollback simulazione**: permette di riportare la simulazione allo stato originale annullando tutte le modifiche;         
> **Scegli stato avanzamento**: permette di segliere la modalità con la quale deve essere visualizzato lo stato di avanzamento dei singoli documenti all'interno del **Gantt**; queste possono essere: *in base al tempo trascorso*, *in base al tempo trascorso e alla quantità*, *in base alla quantità prodotta* oppure nessuno;      
> **Applica**: permette di rendere esecutive le modifiche applicate nella simulazione **Gantt** (il pulsante si abilità dopo il salvataggio);      
> **Esplodi l'albero**: permette di espandere l'albero della simulazione fino ad arrivare al dettaglio della fase;      
> **Implodi l'albero**: permette di chiudere l'albero della simulazione;     
> **Zoom in**: permette di aumentare lo zoom nel grafico;     
> **Zoom alla finestra**: permette di regolare lo zoom nel grafico in base alla finestra temporale che si sta considerando;     
> **Zoom out**: permette di diminuire lo zoom nel grafico;      
> **Zoom settimana**: permette di regolare lo zoom nel grafico ad una settimana;      
> **Zoom 2 settimane**: permette di regolare lo zoom nel grafico a due settimane;    
> **Zoom mese**: permette di regolare lo zoom nel grafico ad un mese;    
> **Zoom data**: permette di regolare lo zoom nel grafico per un certo range di date indicate dall'utente;            
> **Mappatura del codice**: permette di visualizzare gli stili attualmente in uso nel **Gantt**, i quali possono essere modificati tramite i pulsanti *Modifica lo stile del Gantt* e *Modifica lo stile dell'istogramma*;          
> **Modifica lo stile del Gantt**: permette di accedere alle impostazioni dello stile del Gantt attuale;     
> **Modifica lo stile dell'istogramma**: permette di accedere alle impostazioni dello stile dell'istogramma attuale;          
> **Aggiorna stile**: permette di aggiornare le modifiche fatte agli stili.      

## Log della simulazione

In questo tab vengono visualizzati i log delle simulazioni precedentemente salvate, con la possibilità di controllare, per ciascun documento che avrebbe subito modifiche temporali, la vecchia data di inizio, la vecchia data di fine, la nuova data di inizio e la nuova data di fine.

