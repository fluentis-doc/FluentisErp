---
title: Ispravak zelene zone  
sidebar_position: 8
---

Il valore della zona verde viene calcolato automaticamente dalla procedura aggiornamento zone in base al valore dei parametri DDMRP dell'articolo.

Tramite questa tabella è possibile forzare un valore diverso in date specificate.

Il sistema di pianificazione tiene conto di eventuali valori di rettifica delle zone nel calcolo NFP anche se la procedura aggiornamento zone non è stata eseguita.

Tipicamente si può imporre un valore diverso dal normale calcolo per un periodo di tempo limitato, per alterare la dimensione degli ordini emessi.

Se il valore della zona verde viene incrementato verranno emessi ordini più grandi e si ordinerà meno spesso, se viene diminuito avviene l'esatto contrario.

Un esempio tipico riguarda risorse produttive con tempi di setup non trascurabili.

Se il ciclo produttivo di un articolo a scorta prevede una lavorazione su una risorsa con tempi di attrezzaggio non trascurabili e se la risorsa stessa è un collo di bottiglia, ovvero una risorsa con un carico di lavoro molto prossimo alla sua capacità produttiva, si cerca di ridurre il tempo di inattività della risorsa a causa dell'attrezzaggio aumentando la dimensione dei lotti di produzione, il che viene ottenuto indicando una quantità minima ordinabile nei parametri Ddmrp dell'articolo che di conseguenza determina la dimensione della zona verde dello stesso. 

Se questa necessità si ha solo in un dato periodo di tempo, allora invece di impostare una quantità minima ordinabile si inserisce una eccezione della zona verde per tale periodo di tempo.

Questo per esempio accade per i prodotti a forte stagionalità, dove nel periodo precedente al picco di domanda stagionale si crea una scorta adeguata tramite un incremento temporaneo della zona verde incrementando di conseguenza la produttività della risorsa satura, successivamente la risorsa sarà meno carica, quindi non satura, ovvero con capacità produttiva in eccesso, pertanto si faranno più produzioni di ordini piccoli privilegiando la flessibilità del sistema produttivo.

I maggiori tempi complessivi di setup in questo periodo non sono un problema perchè la risorsa non risulta pienamente caricata e quindi c'è tempo risorsa inutilizzato a disposizione.
