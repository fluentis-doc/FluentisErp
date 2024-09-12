---
title: Compensazione partite
sidebar_position: 2
---

:::note Percorso
**Amministrazione>Partite>Procedure>Compensazione partite**

Nota:
Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).

:::

---

La presente procedura, simile alla analoga *Compensazione veloce* (quest'ultima è stata semplificata e, per certi aspetti è pertanto preferibile) presenta una form di ricerca nella quale poter anche ricercare e rivedere le manovre svolte (a differenza della *Compensazione veloce*).

Per eseguire una compensazione è pertanto necessario premere il tasto **Nuovo** per procedere.

Il primo campo obbligatorio da impostare è il **Tipo compensazione**, da richiamare tramite la combo box che rinvia all'apposita tabella.

In tale tabella, oltre al consueto codice e descrizione del tipo in questione, si può configurare una numerazione specifica ed altri parametri che sono fondamentali quando la compensazione interessa non solo le partite aperte, ma anche i saldi contabili (come ad esempio una posizione di cliente e fornitore nei confronti dello stesso soggetto).
E' obbligatorio, inoltre, selezionare uno dei tre tipi possibili di compensazione dalla relativa combo box:
- Fatture - note di accredito
- Cliente - fornitore: (tipologia che, tipicamente, da luogo anche ad una compensazione di saldi contabili)
- Pagamenti - documenti: utilizzata per chiudere posizioni di partitario aperte a fronte di incassi o pagamenti anticipati


I parametri da impostare sono quelli della causale contabile che sarà utilizzata nella scrittura contabile generata automaticamente dalla compensazione egli eventuali conti da utilizzare per generare degli abbuoni attivi o passivi (nel casi si voglia gestire un residuo rispetto ad importi che non coincidono perfettamente).

La procedura di selezione delle partite è molto simile alla *compensazione veloce* e pertanto si rinvia alle relative istruzioni.

Anche qui sono presenti i "cassetti" a scomparsa (tab laterali) dove vengono anche visualizzate le partite (a differenza dell'analoga procedura) ed una volta selezionate (con un doppio click o apposito tasto della ribbon bar) vengono riportate nelle griglie principali della form per poi procedere con la manovra di compensazione

ATTENZIONE, la manovra viene finalizzata quando è contabilizzata. Il pulsante di contabilizzazione (che agirà solo sulla chiusura partite nel caso in cui il tipo di compensazione non preveda la parte contabile) si abilita quando i valori delle partite da compensare coincidono. Pertanto nel caso in cui il valore (o il residuo) delle partite da compensare non coincida, occorre modificare il valore della partita nella colonna **Importo**, in tal modo la partita sarà chiusa per compensazione soltanto per tale valore (ad esempio una partita da 2.000 viene compensata solo per 1.000 che è il valore della partita di segno opposto) e rimarrà dunque aperta per il residuo.
Verificare che il campo **Differenza**, in basso nella form vada a zero.

Premendo il bottone di contabilizzazione (con possibilità di eseguire il ripristino) saranno generati nella tab successiva (***Contabilizzazione***) i pagamenti a chiusura delle partite e, se il tipo lo prevede, le scritture contabili di compensazione.