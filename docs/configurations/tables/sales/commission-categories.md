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