---
sidebar_position: 1
title: Regime Speciale dell'IVA Agricola
---

L’iva Agricola prevede la non detraibilità dell’iva per gli acquisti sottostanti a questo regime e l’applicazione di una percentuale di compensazione per le vendite del regime stesso: invece di detrarre l’iva acquisti come nel regime normale, l’iva negli acquisti è sempre indetraibile mentre l’iva applicata alle vendite è da versare solo in parte con un calcolo fisso, senza alcuna relazione con gli acquisti del periodo, applicando percentuali compensative variabili a seconda del tipo bene venduto.

### Gestione preliminare delle tabelle

Per gestire la percentuale compensativa andremo innanzi tutto a definire le necessarie aliquote iva in vendita, nelle quali andremo a sfruttare la ‘percentuale di indetraibilità’ per eseguire il calcolo:

![](/img/it-it/finance-area/other/agr1.png)

In sostanza, se l’iva X ha percentuale compensativa Y, si andrà ad indicare Y nella colonna ‘% IVA agr. detr.’ (come dato informativo riportato in stampa della liquidazione iva) mentre si valorizzerà con il risultato di Y*100/X la percentuale da indicare in colonna ‘Perc. indetraibilità’.

Andremo a definire uno specifico conto sul quale valorizzare la quota di iva compensata tramite l’applicazione della percentuale di indetraibilità, ad esempio

![](/img/it-it/finance-area/other/agr2.png)

Andremo a definire causali specifiche per suddividere le due Iva nelle registrazioni di vendita in regime agricolo, dove in particolare avremo 
-	un tipo movimento ‘vendita regime agricolo’
-	il conto iva specifico per la rilevazione della quota compensativa di iva
Non è necessario definire un registro iva ad hoc per la rilevazione di queste operazioni.

![](/img/it-it/finance-area/other/agr3.png)

Anche gli acquisti effettuati in regime agricolo dovranno essere gestiti con una causale contabile ad hoc, che ha la sola particolarità di essere legata al regime iva agricolo appunto.

![](/img/it-it/finance-area/other/agr4.png)

Dato che l’iva acquisti registrata con questa causale dovrà avere sempre percentuale di indetraibilità 100% (o percentuale iva 0, se operazione non imponibili/esenti/escluse), si consiglia di valorizzare la scheda ‘Controllo aliquote IVA’ in modo da evitare valorizzazioni errate

![](/img/it-it/finance-area/other/agr5.png)

Nel caso si effettuino anche acquisti intracomunitari soggetti a regime agricolo, invece delle solite causali con tipo movimento acquisto intracomunitario e relativo giroconto iva, sono stati previsti due tipi movimento ad hoc, iva acquisti intracomunitario agricolo con il relativo giroconto iva agricolo.
L’acquisto avrà nuovamente iva indetraibile al 100%, mentre in vendita sarà applicata l’iva che andrà versata: tale cambio di aliquota sarà gestibile tramite l’impostazione dell’aliquota iva automatica in griglia iva, come nei casi di reverse charge misto.


### Risultati per la liquidazione IVA periodica

La liquidazione iva mostrerà il riepilogo dei movimenti in regime agricolo in questo modo:

![](/img/it-it/finance-area/other/agr6.png)

![](/img/it-it/finance-area/other/agr7.png)

:::danger Attenzione
La chiusura del conto ‘IVA vendite agricola’, utilizzato per rilevare la quota compensativa dell’iva vendite, dovrà essere gestito **manualmente** dall’utente con una rilevazione contabile specifica.
:::
