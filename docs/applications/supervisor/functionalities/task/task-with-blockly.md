---
title: Task & Blockly
sidebar_label: Task & Blockly
sidebar_position: 2
---

:::info
Quando si apre la form di dettaglio, di default viene visualizzato lo *Script Editor* e non *Blockly*, ma se venisse apportata una modifica al codice, dopo un salvataggio/compilazione durante l'utilizzo di *Blockly*, al successivo avvio ella form di dettaglio del *Task*, la piattaforma di coding predefinita sarà *Blockly*.
:::

*Supervisor* sfrutta i blocchi personalizzati di Blockly per creare script C#. Oltre alle categorie standard di Blockly (logiche, loops, op.matematiche, testi, date, liste, colori, variabili), le categorie personalizzate che possono essere trovate nella **Toolbox** sono:

- **Variabili di contesto**, contiene blocchi per selezionare variabili dal contesto corrente e per convertire un oggetto generico in una stringa/numero/...;

- **Dizionario**, contiene tutti i blocchi necessari per lavorare con la struttura dati di tipo <span style={{ fontFamily: 'Consolas' }}>Dizionario</span>;

- **Oggetti Fluentis**, suddivisi in tre sottocategorie:
     - **Commons**, contiene blocchi per eseguire operazioni comuni sugli *Oggetti Fluentis* (ovvero selezionando una proprietà di un oggetto, creando un'espressione logica per filtrare un oggetto, creando un recordset da un'espressione LINQ, ecc...) ;
     - **Read Only**, contiene blocchi specifici per eseguire operazioni di sola lettura sugli *Oggetti Fluentis*(per esempio la lettura di valori, filtrare elementi di una collezione, ecc...);
     - **Read Write**, contiene blocchi specifici per eseguire operazioni di lettura-scrittura sugli *Oggetti Fluentis* (ovvero la creazione e istanziazione di oggetti, settare proprietà o riferimenti, ecc...);

- **Accesso al database**, contiene blocchi che possono eseguire operazioni direttamente con il database, come chiamare stored procedure o leggere valori da recordsets;

- **Attività**, a sua volta suddivise in categorie che portano lo stesso nome dei gruppi (gli stessi gruppi consultabili dalla form principale delle attività). I gruppi standard sono:
     - **Utilità**, che contiene tutte le [attività](../activity/activity-intro) standard (l'utente non può aggiungere nuove attività o modificare quelle esistenti in questo gruppo);
     - **Esempi**, contiene tutti gli esempi di attività che possono guidare l'utente nella creazione di un nuovo *Task* personalizzato (l'utente non può aggiungere nuove attività o modificare quelle esistenti in questo gruppo, è necessario creare un nuovo gruppo con le proprie attività customizzate)

- **Globals**, contiene blocchi che possono recuperare **Parametri** globali o [liste di distribuzione](../distribution-list/distribution-list-intro)

- **Task Utility**, contiene script standard/comuni utili per tutte le *attività*;

Per aggiungere codice ad un *Task* con *Blockly*, trascinare e rilasciare i blocchi dalla *Toolbox* nel **Workspace**. Ci sono più *Workspace* selezionabili in *Blockly*:

- **#STD** gestisce il codice all'interno del metodo dello script <span style={{ fontFamily: 'Consolas' }}>ExecuteTask()</span>;
- **TaskCompleted** gestisce il codice all'interno del metodo dello script <span style={{ fontFamily: 'Consolas' }}>TaskCompleted()</span>;  

Per cambiare l'attuale *Workspace*, seleziona un altro valore dal menu a tendina della voce *Sezione*.

Terminato l'inserimento del codice, assicurarsi di cliccare il pulsante *Salva/Compila* e verificare che lo script sia visibile anche nello *Script Editor*, selezionando la voce *Script* dal selettore *Tipo Script* (per cambiare quindi la piattaforma di coding).

Il codice dello script generato, apparirà tra le due righe commentate (rinominate <span style={{ color: 'forestGreen' , fontWeight: 'bold' }}>// START WIZARD CODE</span> and <span style={{ color: 'forestGreen' , fontWeight: 'bold' }}>// END WIZARD CODE</span>).
