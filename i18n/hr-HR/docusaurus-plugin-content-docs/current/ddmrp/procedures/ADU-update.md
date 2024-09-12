---
title: Aggiornamento consumo medio giornaliero (ADU)
sidebar_position: 1
---
Questa procedura aggiorna il campo **Consumo medio giornaliero** dei parametri DDMRP per ogni articolo gestito a buffer.

L'aggiornamento avviene secondo il metodo indicato nei parametri DDMRP dell'articolo con le seguenti modalità:


  - 0) nessun aggiornamento
  - 1) media aritmetica sul passato (vengono analizzati i consumi effettivi del passato e tutti i consumi hanno lo stesso peso)
  - 2) media pesata sul passato (i consumi recenti pesano più di quelli passati)
  - 3) media aritmetica sul futuro (viene analizzata la tabella delle previsioni di consumo giornaliero)
  - 4) media aritmetica del passato e del futuro (combinazione dei metodi 1 e 3)
  - 5) passato pesato e futuro aritmetico (combinazione dei metodi 2 e 3)

Il periodo di analisi preso in considerazione è indicato per ciascun articolo nei parametri DDMRP tramite i campi **Giorni nel passato** e **Giorni nel futuro**.

Per quanto riguarda le analisi sul passato si raccomanda di utilizzare un periodo di tempo sufficientemente lungo da essere significativo, ovvero un valore alcune volte maggiore del lead time disaccoppiato (DLT) dell'articolo, altrimenti il ricalcolo potrebbe essere troppo sensible alle ultime variazioni.

Se si sceglie la media aritmetica il calcolo sarà poco sensibile alle variazioni casuali ma si accorgerà con un certo ritardo dei nuovi trend di consumo.

Se si sceglie la media pesata il calcolo si accorgerà più rapidamente dei nuovi trend di consumo ma sarà più sensibile alle variazioni casuali.

Per quanto riguarda le previsioni di consumo future, queste devono essere inserite con un anticipo sufficiente, cioè con un anticipo almeno pari al lead time cumulativo dell'articolo (il tempo necessario a produrlo in caso di assenza totale di scorte dei componenti della sua distinta base).

Per tale ragione il valore del parametro **Giorni nel futuro** deve essere pari almeno al lead time cumulativo dell'articolo.


