---
title: Aggiornamento valore zone articoli a buffer
sidebar_position: 3
---

Questa procedura esegue il calcolo delle zone verde, gialla e rossa di ciascun buffer in base ai parametri DDMRP degli articoli.

La zona verde è determinata considerando il maggiore tra i tre seguenti elementi:

1. quantità minima ordinabile
2. quantità consumata nel periodo di riordino (se definito) = ADU x DOC cioè conumo medio giornaliero x ciclo di riordino in giorni
3. ADU x DLT x LTF ovvero consumo medio giornaliero x lead time disaccoppiato x fattore di lead time

La zona gialla è determinata come ADU x DLT cioè consumo medio giornaliero x lead time disaccoppiato

La zona rossa è calcolata come ADU x DLT x LTF ( 1 + VAF) cioè consumo medio giornaliero x lead time disaccoppiato x fattore del lead time (che può avere un valore diverso da quello usato nel calcolo della zona verde ma sempre entro i limiti del fattore lead time del profilo di buffer associato), il tutto moltiplicato per 1 sommato al fattore di variabilità.

E' per questo motivo che all'aumentare della variabilità aumenta la zona rossa, cioè la scorta di sicurezza dell'articolo, cioè quella parte di scorta che serve per fronteggiare gli imprevisti.

