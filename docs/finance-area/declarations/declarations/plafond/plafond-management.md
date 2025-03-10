---
title: Gestione Plafond
sidebar_position: 5
---

La form si trova sul percorso  **Amministrazione > Dichiarazioni > Plafond > Nuovo** e permette la creazione di un *nuovo* Calcolo del Plafond.

## Come creare un Calcolo di Plafond

1.  All'apertura della nuova maschera (dopo aver premuto il comando *Nuovo Plafond*) inserire i seguenti valori di testata: 

![](/img/it-it/finance-area/declarations/declarations/plafond/plafond-start-management/image01.png)

 **Descrizione**: Descrizione libera del calcolo che si sta inserendo. Si consiglia una descrizione che riporti l'anno di inizio e il tipo di calcolo.

**Anno**: inserire l'anno di inizio del calcolo plafond che si sta inserendo.

:::tip[Nota]
Nella gestione dei vari calcoli potremo bloccare il periodo, ad esempio ogni anno, e inserire un nuovo calcolo per l'anno successivo, tuttavia ciò non è necessario. Si consiglia (anche per comodità) di proseguire nell’ambito dello stesso calcolo di anno in anno continuando a premere il comando *Proponi Valori*. 

La necessità di inserire un nuovo calcolo sorge, invece, in caso di cambio di metodologia di calcolo, ad esempio dal plafond fisso al plafond mobile.

:::

**Tipo inizio Plafond**: se questo è un nuovo Plafond o se è una estensione di un plafond mobile; 

**Tipo plafond**: se è Solare (cioè fisso) oppure Mobile (sono due opzioni fiscali previste per gestire il plafond). 

Data inizio Plafond: è necessario inserire il mese e l'anno iniziale del plafond, e in caso di un plafond 'estensione' anche il **mese**, l'**anno** e l'**importo** dell'ultimo periodo calcolato (sezione Proprietà plafond). 

**Valore di controllo**: è possibile impostare una soglia valore al fine di avvertire l'utente che sta per utilizzare il totale del plafond disponibile. Ad esempio, se il plafond disponibile ad inizio anno è di cento mila euro, se impostiamo nel valore soglia dieci mila, avremo un avviso al superamento dei novanta mila, inquanto stiamo utilizzando gli ultimi dieci mila.

**Default**: flag che contrassegna, in particolare in presenza di diversi calcoli memorizzati, qual'è il calcolo "attuale".

:::tip[Attenzione]
In presenza di un calcolo di Plafond con questo flag attivo, creando il tracciato telematico di invio all'agenzia delle Entrate delle [**dichiarazioni di intento**](/docs/finance-area/declarations/declarations/intent-declaration) emesse, verrà valorizzato l'apposito campo specifico.
:::

2. Caricare i valori storici da utilizzare: è necessario riportare nella griglia di dettaglio i dati dei dodici mesi precedenti rispetto alla data (anno) di inizio calcolo. 

:::tip[Attenzione]
nel caso di un plafond **mobile** sarà necessario inserire precisamente **mese per mese**, in quanto ad ogni mese si dovrà togliere il 12° mese uscente e aggiungere i dati del nuovo 12°; 

nel caso di **plafond solare**, invece, si possono caricare i primi 11 mesi con **tutti valori zero** e dare direttamente il totale delle vendite in plafond dell'anno del periodo finale di **dicembre**. 

Il programma controllerà la completezza dei dati e salverà il plafond per poterlo, quindi, utilizzare.
:::

![](/img/it-it/finance-area/declarations/declarations/plafond/plafond-start-management/image02.png)

3. Di mese in mese sarà necessario entrare in modifica nella maschera di gestione del plafond per operare il calcolo aggiornato dei dati attraverso il pulsante **Proponi valori** (presente nella ribbon bar). 

**Per annullare il calcolo di un mese è necessario annullare i periodi dall'ultimo mese presente nella lista (il più recente) fino a quello interessato**. 

Il dato del valore disponibile all'inizio del mese è visibile nella colonna relativa.

### Ribbon Bar

|  |  |
| --- | --- |
| **Nuovo plafond** | Imposta il cursore in una nuova riga di creazione dati. |
| **Cancella plafond** | Cancella la riga di calcolo selezionata. Non è possibile cancellare dati intermedi, solo l'ultimo della lista. |
| **Proponi valori** | Esegue il calcolo per il nuovo mese, proponendo i valori in griglia. |






