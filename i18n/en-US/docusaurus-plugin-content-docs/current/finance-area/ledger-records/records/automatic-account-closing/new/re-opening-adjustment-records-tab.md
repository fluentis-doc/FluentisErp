---
title: Tab Riapertura Scriture di Assestamento
sidebar_position: 6
---

In questa maschera è visibile il risultato dell'opzione di giroconto automatico delle operazioni di assestamento in coda alle registrazioni di riapertura conti. Con questa opzione l'applicativo procederà a rilevare, alla data di riapertura, lo storno delle rettifiche **mentre opererà il giroconto delle integrazioni alla data della registrazione d'origine** dell'assestamento stesso.

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/re-opening-adjustment-records-tab/image01.png)

 Facendo doppio clic sulle righe è possibile visualizzare il dettaglio delle registrazioni eseguite.

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/re-opening-adjustment-records-tab/image02.png)

 

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/re-opening-adjustment-records-tab/image03.png)



:::tip Info
Generare la scrittura di riapertura delle scritture di integrazione (ratei attivi e passivi) alla data della scrittura di origine della rettifica è necessario, rispetto ad esempio a riaprire semplicmente all' 1/1 , al fine di gestire correttamente anche i calcoli delle chiusure infrannuali possibili con Fluentis.


Si pensi ad esempio di aver registrato il 15/04/2023 un costo che ha competenza 01/11/2022 31/03/2023, quindi verrà registrato il rateo passivo al 31/12 di 2 mesi. Registrando la sua registrazione opposta (lo storno) in data 01/01 dipenderebbe molto da come sono filtrati e gestisti ratei/risconti per la chiusura infrannuale, si rischia in sostanza di avere solo lo storno costi (ovvero la riapertura del rateo) e non la fattura del costo nel bilancio infrannuale. 

Registrando invece lo storno nello stesso giorno della fattura, qualsiasi sia il filtraggio successivo per l'estrazione dei saldi della chiusura infrannuale le due registrazioni "viaggeranno assieme" garantendo l'effetto che ci si attende (in questo caso un impatto neutro sul bilancio essendo il costo già stato anticipato all'esercizio precedente)
:::


