---
title: Profili di buffer
sidebar_position: 4
---

Un profilo di buffer definisce delle caratteristiche comuni a molti articoli buffer.
In questo modo si può associare ad ogni articolo a buffer il suo profilo di buffer e rendere più semplice e veloce la modifica dei relativi parametri, infatti apportando una modifica ad un profilo di buffer la stessa verrà automaticamnte applicata a tutti gli articoli che sono associati a tale profilo.

Un profilo è individuato dalla combinazione di tre parametri:

1. **tipo parte**

   - M = manufacturing, cioè parte prodotta in fabbrica (prodotto finito o semilavorato)
   - I = intermediate, cioè parte semilavorata prodotta in fabbrica (questa distinzione rispetto alla M è facoltativa)
   - P = purchase, parte acquistata
   - D = distributed, parte stoccata in un centro di distribuzione (in questo caso il record non può avere il campo magazzino vuoto)

2. **categoria di lead time**

   confrontando tra loro articoli con lo stesso tipo parte, si possono definire un valore inferiore ed uno superiore del lead time che consentono di raggruppare gli articoli in tre gruppi con un coefficiente associato compreso tra 0 ed 1.

   - S = short lead time items (coefficiente tra 0.61 ed 1)
   - M = mid lead time items (coefficiente tra 0.41 e 0.6)
   - L = long lead time items (coefficiente tra 0 e 0.4)

   Il valore del coefficiente è inversamente proporzionale al lead time.

3. **categoria di variabiltà**

   confrontando tra loro articoli con lo stesso tipo parte, analizzando la variabilità lato domanda e lato fornitura, si decide se un buffer è caratterizzato da variabilità bassa, media o alta.
   Si tratta di un analisi più complessa di quella del lead time poichè deve tenere conto della variabilità della domanda (per esempio verificando la dispersione statistica dei valori della domanda su un arco di tempo significativo), della varibilità lato fornitura (per esempio considerando la dispersione statistica dei ritardi di fornitura), e tenendo presente se come figli di distinta o come padri sono presenti altri buffer, che per loro natura riducono la variabilità.

   Vengono considerati tre livelli di variabiltà associati ad un coefficiente compreso tra 0 ed 1 come segue:

   - L = low variability (coefficiente compreso tra 0 e 0.4)
   - M = mid variability (coefficiente compreso tra 0.41 e 0.6)
   - H = high variability (coefficiente compreso tra 0.61 e 1)

   Più è alta la variabilità e più elevato è il livello di scorta di sicurezza del buffer (zona rossa).
