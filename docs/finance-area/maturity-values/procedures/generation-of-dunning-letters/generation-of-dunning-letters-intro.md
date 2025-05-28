---
title: Generazione solleciti
sidebar_position: 1
---

Da questa maschera si procederà alla generazione solleciti con la caratteristica di poter impostare un livello di sollecito che andrà oltre l'ordine logico di priorità che invece caratterizza la generazione automatica solleciti. 
E' possibile inoltre selezionare manualmente le partite da sollecitare dopo averle filtrate avendo di fatto un maggiore controllo sull'operazione.

:::tip[Info]
Questa procedura, diversamente dalla [*Generazione automatica solleciti*](/docs/finance-area/maturity-values/procedures/dunning-letters-automatic-issue), permette di gestire anche solleciti con Numero **Giorni di Ritardo negativi**. Tipicamente i giorni negativi vengono impostati per creare un avviso prima della scadenza.
:::

Per procedere è necessario, nella parte inferiore della maschera, assegnare la data di creazione dei solleciti e selezionare il tipo di sollecito (precedentemente codificato nella tabella *Tipi solleciti*) dalla combo box.
Opzionale è invece l'attribuzione di uno specifico livello di sollecito (tramite la combo box ***N. solleciti***), al fine di forzare la creazione oltre l'ordine logico di priorità. Normalmente, infatti, le partite mai sollecitate avranno il sollecito di priorità 1, quelle già sollecitate passeranno ad un nuovo sollecito di priorità 2 e via di seguito per le successive.

La data del sollecito influisce sulla creazione inquanto deve rispettare i parametri presenti nella tipologia del sollecito e nel numero del sollecito quali i giorni di ritardo ed i *giorni* che determinano la scadenza dell'eventuale sollecito precedente.
Se la data sollecito non è valida rispetto ai parametri per la partita selezionata, il comando di creazione non eseguirà alcun sollecito.

CAMPI DI FILTRO:

**Conto / sottoconto:** riferito all'intestatario delle partite

**Agente:** per filtrare l’agente che è dentro l’anagrafica cliente

**Agente da partite sollecitate:** filtra le partite con l’agente inserito nella partita, dato che a sua volta si valorizza alla contabilizzazione fatture di vendita con l’agente principale presente nel documento ovvero quello con importo più alto nel caso di più agenti valorizzati.

CAMPI RELATIVI ALLE PARTITE DA RICERCARE:
Nr Documento, Posizione partita, Da / A Data documento, Da / A data scadenza, anno partita, numero ... Tipo documento, Categoria amministrativa (in anagrafica cliente), Tipo pagamento

CAMPI RELATIVI AI RIFERIMENTI SOLLECITO PRECEDENTE SU PARTITE GIA? SOLLECITATE
Tipo Sollecito, DA / A data sollecito, DA / A Data scadenza (sollecito), Numero sollecito, Riferimento...

TIPO PARTITE: Flag per estrarre non solo le classiche partite attive clienti ma anche quelle riferite ad esempio ai fornitori ecc....