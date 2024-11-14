---
title: Fattore di rettifica del consumo giornaliero medio
sidebar_position: 6
---
Il consumo giornaliero medio di un buffer (ADU) è specificato nella tabella dei parametri DDMRP per ciascun articolo e per ciascuna unià logistica (centro distribuzione hub o fabbrica).

Tramite questa tabella è possibile indicare un coefficiente moltiplicativo del consumo medio giornaliero da applicare in specifiche date tramite valori maggiori o uguali a zero. 

La procedura **Aggiornamento valore zone articoli a buffer** in tali date, considererà un valore del consumo medio giornaliero pari a quanto presente nella tabella parametri DDMRP moltiplicato per il coefficiente presente in questa tabella, e le zone verde gialla e rossa verranno calcolate tenendo presente tale prodotto (la procedura non modificherà il valore ADU nei paramteri Ddmrp). 

Serve per alterare il normale valore del consumo medio giornaliero solo per un breve periodo, se si sa già in anticipo che ci saranno delle variazioni consistenti della domanda ma che non rappresentano un cambiamento strutturale e permanente della stessa, come per esempio nel caso di campagne promozionali, introduzione di nuovi prodotti, eliminazione di vecchi prodotti.
