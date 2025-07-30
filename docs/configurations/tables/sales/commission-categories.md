---
title: Categorie provvigionali
sidebar_position: 3
---

In questa form si definisco le categorie provvigionali, ovvero una sorta di "extra data" per la definizione dei criteri di lettura delle percentuali di provvigione.

E' possibile dunque definire l'oggetto del business layer e la sua proprietà, che serve da parametro di lettura, e nella griglia inferiore specificare una condizione di filtro per la validità.

Esempio **Oggetto** -> FSSalesOrder
**Percorso Proprietà** -> SalesOrderTypeCode (il codice del tipo ordine di vendita)

Griglia inferiore specificare **Valore** *OCIT* (esempio per limitare la validità al tipo ordine codificato *OCIT* , esempio ordine Italia)

Normalmente può capitare di configurare vari casi corrispondenti a diversi valori della proprietà selezionata, esempio *OCIT*, *OCUE* ecc... per differenziare le percentuali a seconda del tipo di ordine, italiano piuttosto che europa.

Può anche capitare di avere casistiche ancora più articolate con diverse combinazioni di valori e proprietà dell'oggetto.


:::note[Nota]
Questa configurazione porterà ad una compilazione particolare della griglia di definizione delle priorità e criteri di calcolo della provvigione presente nel tab *Provvigioni Dirette* dell'anagrafica agente.

Dovrà essere inserito più volte lo stesso criterio (ad esempio per articolo o per classe) associando ogni volta la categoria provvigionale che in questo senso **funge da filtro**.

Quindi la riga con il criterio che legge la classe o l'articolo a sua volta collegata al dettaglio del criterio stesso (tramite il pulsante ***Dettaglio percentuali selezionate*** presente nella medesima form) con le provvigioni puntuali per ogni articolo o classe, vale solo quando il tipo ordine è *OCIT*.
Dovrà essere definito tutto il dettaglio in una nuova riga in abbinamento con la categoria provvigionale *OCUE* e valido solo per quella combinazione.
:::

:::danger[Attenzione]
La compilazione della presente form presenta alcune particolarità
- La form si compone di una griglia *Master* (in alto) ed una griglia *Detail* in basso che dipende dalla prima. Dopo la compilazione della riga nella griglia *Master*, la griglia *Detail* rimane in uno stato provvisorio dove non è possibile scrivere oppure si presentano 4 colonne con etichetta *Valore*. In realtà sono 4 tipologie di dato (testo, data, true / false ecc...) alternativi di cui **solo uno** può essere utilizzato in relazione alla proprietà selezionata nella griglia *Master*. Pertanto **dopo la compilazione della riga nella griglia Master è necessario premere nuovamente il pulsante Ricerca nella ribbon bar e selezionare nuovamente** con il mouse la riga per poter compilare la griglia *Detail*.
- Nella compilazione della riga nella griglia Master, dopo aver inserito il codice e descrizione liberi per la categoria provvigionale, si consiglia di utilizzare il widget di ricerca che suggerisce il nome dell'oggetto Fluentis, esempio scrivendo FSSales... saranno proposti oggetti quali FSSalesOrder, oppure FSSalesInvoice ecc...
- Dopo la selezione dell'oggetto Fluentis di riferimento, occorre specificare la **proprietà** che determinerà il valore di dettaglio (compilando la griglia di *Detail*), da ricercare. **Si consiglia di fare doppio click per utilizzare il popup di ricerca** che propone le proprietà e tutte le collections collegate all'oggetto che abbiamo selezionato, in questo modo risulta molto più semplice definire la proprietà di riferimento.
:::