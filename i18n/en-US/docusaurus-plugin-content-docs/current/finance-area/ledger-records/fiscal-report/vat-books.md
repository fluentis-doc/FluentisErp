---
title: Registri iva
sidebar_position: 9
---

La stampa dei registri IVA deve essere effettuata singolarmente per ogni registro: non è consentita la stampa complessiva di tutti i registri del periodo.

**Periodo IVA**: All'apertura della maschera questo potrà essere il mese precedente all'attuale nel caso di periodo mensile oppure il trimestre nel caso in cui la periodicità della liquidazione impostata nei parametri di contabilità sia appunto trimestrale;

**Anno di riferimento**: viene proposto di default l'anno in corso;

**Registro IVA da stampare**: selezionare il registro da stampare;

**Divisione**: non è normalmente da utilizzare, a maggior ragione se non sono presenti varie divisioni;

**Riepilogativo**: il flag permette di stampare, sul registro selezionato tramite l'apposito campo, un riepilogo dei registri e dei relativi codici iva movimentati nel mese o trimestre selezionato;



I campi successivi visualizzano qual è l'ultimo numero della pagina stampata per il registro impostato: questo dato viene ripreso dalla tabella Registri IVA.

Il flag **Visualizza intestazione** è già impostato di default: si toglieva quando si dovevano far vidimare i moduli DDTti sui quali stampare i registri, obbligo che non è più previsto. Con questo flag viene riportato il nome del registro IVA, della società e il numero/anno delle pagine.

Il flag **Visualizza tipo documento** farà aggiungere, nei riferimenti dei documenti, anche il tipo del documento: può servire nel caso in cui le fatture di vendita abbiano più numerazioni che fanno capo allo stesso registro IVA.

**Registrazione titolo**: quando il flag Riepilogativo non è attivo è possibile imporre un titolo alla stampa differente rispetto al nome del registro iva che compare per default

Il titolo del registro viene ripreso dal nome del registro IVA e sarà quello riportato in stampa con l'opzione 'Visualizza intestazione'.

**Mensile / Trimestrale**: i due flag riprendono l'impostazione della periodicità iva definità nei parametri di contabilità per memoria ma il settaggio non è modificabile da qui;

 

Attivando il flag **Definitiva** la procedura andrà a stampare i registri in definitivo bloccando il periodo selezionato per ulteriori modifiche: sarà inoltre disabilitato il filtro per divisione. L'esecuzione dell'anteprima di stampa in definitivo non andrà a bloccare il periodo e aggiornare i contatori: solo l'esecuzione del processo di stampa fisica andrà ad operare il blocco del periodo/registro in contabilità e ad aggiornare il contatore delle pagine della tabella Registri IVA (e non è rilevante che il processo di stampa vada a buon fine o meno, potrebbe essere anche una stampa su file). Eseguendo la stampa o l'anteprima, l'applicativo andrà a verificare se ci sono buchi nella protocollazione e se l'ordine cronologico è stato rispettato, bloccandone la stampa definitiva a meno che per il registro IVA non sia stato disabilitato il flag di controllo in tabella. La stampa definitiva NON è necessaria per procedere alla stampa della liquidazione IVA periodica.



| Funzione | Significato |
| --- | --- |
| Anteprima | Pulsante per eseguire l'anteprima di stampa del registro IVA. |
| Stampa | Pulsante per eseguire la stampa fisica del registro IVA. |


:::important Vedi Anche
[**VIDEO TUTORIALS SULLE STAMPE FISCALI**](/docs/video/finance/intro.md)
:::



