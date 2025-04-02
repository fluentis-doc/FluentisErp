---
title: Allarmi consumo medio giornaliero
sidebar_position: 7
---
Questo report consente di verificare se il consumo medio giornaliero (ADU) di qualche articolo è variato eccessivamente durante un determinato periodo temporale.

Esiste una procedura la cui esecuzione va schedulata in modo automatico, che analizza tutti i buffer Ddmrp in tutte le unità logistiche e memorizza in una apposita tabella solo quelli la cui variazione percentuale dell' ADU risulta superiore al limite imposto.

Nei parametri generali Ddmrp viene impostata la soglia massima di variazione percentuale che non genera allarme, ed il numero di giorni nel passato in cui va eseguita l'analisi (che si conclude sempre il giorno prima del calcolo).

Tramite questa form si possono effettuare analisi con valori percentuali differenti e per periodi temporali a scelta dell'utente.

Il report evidenzierà solo gli articoli il cui consumo medio giornaliero ha subito una variazione (sia in difetto che in eccesso) percentuale superiore al limite impostato per l'analisi, nel periodo temporale indicato dall'utente.

L'analisi viene eseguita sui valori storicizzati dei parametri Ddmrp, sia per la procedura automatizzata che per questo form.

