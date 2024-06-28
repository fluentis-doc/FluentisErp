---
title: Tabs dell'Attività
#hide_title: true
sidebar_label: Tabs dell'Attività
sidebar_position: 1
---

:::info Nota
Una volta aperta la form di dettaglio dell'attività, nella parte superiore sono presenti alcuni parametri standard come *Codice*, *Nome*, *Descrizione*, *Data Crazione*, *Data Ultima Modifica*, *Gruppo* e *Tipo Attività*. Per questi ultimi due, bisogna prestare molta attenzione, perchè determinano come si andrà a comporre l'attività.
:::

### Parametri Collegati

Tutte i *tipi di Attività* hanno i *Parametri Collegati* (sia di input che di output). Essi quando vengono utilizzati all'interno di un *Task* sono visibili (ci si rende conto di quanto detto quando sono utilizzati all'interno del Widget *Blockly*). Questi parametri sono cruciali in molti casi, perchè sono l'unico modo per mettere in comunicazione l'*Attività* con il *Task*.

Per creare un parametro è necessario specificargli un valore di default (come ad esempio *Nome*, *Descrizione*) e qualche valore più specifico *ParametroInput*, *Obbligatorio*, *Tipo* e *Parametro Globale*. 

### Mappatura Records

Per il tipo di *Attività* **Template Mail**, c'è la possibilità di mappare i records (nomi colonne) alla testata; il risultato della mappatura verrà visualizzato dopo che un recordset è stato utilizzato all'interno di un documento (dalla tab *Template Documento*).  

### Configurazione Attività

Spostiandosi invece sulla tab *Configurazione Attività*, la cosa fondamentale da tenere a mente è che cambia in base al **tipo di Attività** e l'unico valore comune a tutti i *tipi di Attività* e il **ParametroRitorno**.

Vediamo ora tutti tipi:

> Il *tipo di Attività* **Script generico** ha due tabs, *Parametri* e *Script*. I valori di input e di output che sono stati utilizzati nella tab *Script*, devono essere dichiarati nella tab *Parametri*.

> Il *tipo di Attività* **Datasource** non ha alcuna tab, ha soltanto la configurazione dei parametri del *Datasource* e la selezione del *Datasource*.

> Il *tipo di Attività* **Run Report**  non ha alcuna tab, ha solo la selezione del **Business Object**, del **tipo di report** riferito al *Business Object* e infine il **formato di esportazione**.

> Il *tipo di Attività* **Sql Query** condivide lo stesso layout di tabs del tipo Attività *Script Generico*, ad eccezione della tab *Script* che non conterrà più uno script in C# ma in SQL. Per mappare i parametri dell'attività all'interno della query è necessario includerli tra parentesi quadri, come è possible vedere nell'immagine sottostante.

> Il *tipo di Attività* **Stored procedure** non ha alcuna tab, ma solo la configurazione dei parametri di input per le stored procedure.

> Il *tipo di Attività* **Mail Template** ha due tabs, *Impostazione Generazione Documento* e *Template Documento*. Nella prima tab, nella parte superiore dell'interfaccia è possibile impostare il *Master Record* (ovvero il recordset che popolerà il template del documento), *Documento Generato* (la variabile contenente il documento, che deve essere mappata dalla tab Paramateri Collegati come parametro di output in modo tale da da ottenere un risultato quando verrà utilizzata all'interno di un *Task*), *Formato Documento* (ovvero .pdf, .html, .docx, .doc), *Descrizione* e *Invia come corpo HTML* (quest'ultimo è un flag).
Nella parte inferiore della tab invece ci sono le variabili del documento (le variabili appariranno nella seconda tab, sotto la voce "variabili documento" nel pannello sulla parte destra dell'interfaccia).
Nella seconda tab c'è un Widget (con la visualizzazione analoga a quella di un documento in *Microsoft Word*) per visualizzare/modificare il template del documento, utilizzando gli strumenti integrati e le variabili documenti che possono essere trovate nel pannello sulla parte destra dell'interfaccia.
