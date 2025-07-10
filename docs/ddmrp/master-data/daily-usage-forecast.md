---
title: Previsioni di consumo
sidebar_position: 7
---
Questa tabella contiene le previsioni di consumo degli articoli buffer.

Per ciascun articolo a buffer e per ciascuna unità logistica è possibile indicare quale valore di consumo si prevede con dettaglio giornaliero.

I dati contenuti in questa tabella vengono utilizzati dalla procedura [**aggiornamento consumo medio giornaliero (ADU)**](/docs/ddmrp/procedures/adu-update) nel caso di tecnica di calcolo che considera i dati di previsione consumo futuro, e possono essere inseriti manualmente o possono provenire dalla procedura di calcolo che sviluppa le previsioni di vendita dei prodotti finiti.

Nel caso di inserimento manuale non è necessario inserire un valore per ogni giorno, basta inserirne uno per ogni periodo di tempo di durata pari al parametro **Giorni nel futuro** dei parametri DDMRP dell'articolo.

Se per esempio **Giorni nel futuro** è pari a 10 gg, basterà inserire un valore ogni 10 giorni pari al totale del consumo in tale periodo, poichè la procedura di aggiornamento del consumo medio giornaliero in caso di utilizzo di una modalità che riguarda il futuro, farà la somma delle previsioni in tale periodo di tempo diviso **Giorni nel futuro**.