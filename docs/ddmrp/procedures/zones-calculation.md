---
title: Aggiornamento valore zone articoli a buffer
sidebar_position: 3
---

Questa procedura esegue il calcolo delle zone verde, gialla e rossa di ciascun buffer in base ai parametri DDMRP degli articoli.

La zona verde è determinata considerando il maggiore tra i tre seguenti elementi:

1. quantità minima ordinabile
2. quantità consumata nel periodo di riordino (se definito) = ADU x DOC cioè consumo medio giornaliero x ciclo di riordino in giorni
3. ADU x DLT x LTF ovvero consumo medio giornaliero x lead time disaccoppiato x fattore di lead time

La zona verde determina la dimensione minima degli ordini (non si può emettere un ordine per una quantità minore della zona verde) e la frequenza media di emissione ordini (più è grande meno spesso si ordina).

La zona gialla è determinata come ADU x DLT cioè consumo medio giornaliero x lead time disaccoppiato.

La zona rossa è calcolata come ADU x DLT x LTF ( 1 + VAF) cioè consumo medio giornaliero x lead time disaccoppiato x fattore del lead time, il tutto moltiplicato per 1 sommato al fattore di variabilità.

E' per questo motivo che all'aumentare della variabilità aumenta la zona rossa, cioè la scorta di sicurezza dell'articolo, cioè quella parte di scorta che serve per fronteggiare gli imprevisti.

Questa procedura tiene conto di eventuali valori del **Fattore di rettifica del consumo giornaliero medio** nonchè di eventuali eccezioni delle zone rossa, gialla, verde valide al momento dell'esecuzione della stessa.

Il risultato viene utilizzato per modificare i valori delle zone nella tabella dei parametri Ddmrp.



