---
title: Aggiornamento valore Net Flow Position (NFP)
sidebar_position: 5
---

Questa procedura esegue il calcolo della posizione di flusso netta (NFP) di un articolo a buffer in una data unità logistica.

Per lo stesso articolo il valore NFP cambia al cambiare della unità logistica in cui è stoccato, quindi se per esempio è stoccato in 5 unità logistiche avremo 5 valori NFP per lo stesso articolo, uno per ciascuna unità logistica.

Il calcolo eseguito, come da teoria, è il seguente:

NFP = On-Hand + On Order - Demand - Demand Spikes

On-hand = è la giacenza relativa al magazzino della riga (valore vuoto del magazzino per la fabbrica)

On order = è la quantità totale residua degli ordini confermati (per i centri distribuzione è data da ordini di acquisto ed ordini di fornitura interni, per la fabbrica è data da ordini di acquisto, produzione, conto lavoro)

Demand = è dato dalla somma di tutti i fabbisogni inevasi la cui data impegno non è successiva alla data odierna. 

Per i centri distribuzione e gli hub la domanda proviene o da ordini cliente o da ordini di fornitura interni confermati (quelli pianificati non vengono considerati), per la fabbrica a questi si aggiungono i fabbisogni di ordini di produzione e conto lavoro sia confermati che pianificati, rda e fatture non scaricate.

Demand Spikes = totale degli eventuali picchi di domanda nel periodo a partire da domani fino a domani + l'orizzonte dei picchi di domanda (OSH) indicato nei parametri DDMRP.

Il risultato del calcolo comprende anche l'indicazione della eventuale quantità da ordinare, se infatti risulta NFP \<= zona rossa + zona gialla allora è necessario emettere un ordine per una quantità pari a zona rossa + zona gialla + zona verde - NFP, tenendo conto di eventuali eccezioni delle zone nella data odierna.

Tutti gli elementi del calcolo vengono memorizzati per una facile analisi e per consentire analisi su dati del passato.

Per ogni giorno viene memorizzato un solo calcolo (se lancio la procedura più volte oggi, rimarrà memorizzato solo il risultato dell'ultima esecuzione) ed i dettagli sono visualizzabili nella form **Analisi NFP**.




