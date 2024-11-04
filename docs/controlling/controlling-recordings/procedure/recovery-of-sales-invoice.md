---
title: Ripresa dati da fatture di vendita
sidebar_position: 2
---

La procedura ***Ripresa dati da fatture di vendita*** consente di integrare i nostri dati di area con due tipi di dati presenti in fatturazione vendite: le provvigioni e gli sconti.

## RIPRESA PROVVIGIONI
Per le provvigioni, l’esigenza è rilevare nel periodo i costi delle provvigioni che invece la contabilità rileverà solo alla maturazione della provvigione, cioè magari solo al momento dell’incasso totale della fattura. Imposteremo come sempre 
- l’[***Area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- la ***Data*** 
- l’***Anno***
poi sulla destra inseriremo 
- la ***Causale*** 
- il range ***Da data*** e ***A data*** di date fattura da filtrare per prelevare i dati.


## RIPRESA SCONTI
Gli sconti, invece, sono un valore che normalmente la contabilità analitica non trova dalle rilevazioni contabili, che tipicamente valorizzano il netto del ricavo e non il lordo meno il costo dello sconto applicato. In determinate analisi potrebbe essere interessare mettere in evidenza questo costo nascosto che l’azienda sostiene per vendere, da qui l’elaborazione di questi dati.

Imposteremo come sempre 
- l’[***Area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- il ***Conto*** sul quale rilevare questi costi commerciali
- la ***Data***
- l’***Anno***
poi sulla destra inseriremo 
- la ***Causale*** 
- il range ***Da data*** e ***A data*** di date fattura da filtrare per prelevare i dati.
