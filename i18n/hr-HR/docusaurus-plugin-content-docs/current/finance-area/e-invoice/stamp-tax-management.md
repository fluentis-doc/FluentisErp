---
title: Gestione imposta di bollo
sidebar_position: 2
---

La gestione del corretto inserimento, nel tracciato xml della fattura elettronica, della marca da bollo virtuale da parte di Fluentis avviene in maniera automatica, pertanto sarà sufficiente codificare ed inserire correttamente tale spesa in fattura (come di seguito riepilogato).

- nella tabella relativa alle spese inserire la spesa di tipo "bollo" con valore 2 euro

![](/img/it-it/finance-area/e-invoice/stamp-tax-management/image01.png)

- nell'anagrafica cliente si deve aggiungere una spesa di tipo “bollo” selezionando il codice precedentemente creato nella tabella Tipi spesa

   n.b. per non addebitare il bollo al cliente nella spesa di bollo in anagrafica il valore deve essere impostato a "0"

 ![](/img/it-it/finance-area/e-invoice/stamp-tax-management/image02.png)

- nella tabella società compilare il campo "Spese bollo"=2 e "Roof minimo spese"=77.47

![](/img/it-it/finance-area/e-invoice/stamp-tax-management/image03.png)

Settate le seguenti impostazioni, nella fattura di vendita comparirà in automatico la spesa proposta, di conseguenza in ogni singola fattura si potrà scegliere se addebitare o meno il bollo virtuale (per non addebitare il bollo inserire la spesa con importo = 0).

Al momento della creazione del file XML, se nei riepiloghi fattura figura una spesa tipo bollo, nel tracciato viene aggiunta in maniera automatica la sezione relativa.