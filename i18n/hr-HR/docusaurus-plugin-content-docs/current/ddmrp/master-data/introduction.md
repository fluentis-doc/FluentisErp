---
title: Introduzione anagrafiche DDMRP
sidebar_position: 0
---

In questa sezione ci sono i dati anagrafici relativi agli articoli gestiti secondo logica DDMRP, ovvero i cosidetti buffer cioè scorte strategiche dimensionate e rifornite secondo la logica DDMRP.

Per prima cosa si deve comunicare a Fluentis che un articolo è un buffer DDMRP tramite la scheda [**Parametri MRP**](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) selezionando un valore per la Politica di approvvigionamento tra quelli disponibili (buffer dinamici, buffer fissi, buffer min-max).

I buffer dinamici prevedono la variazione nel tempo delle tre zone caratteristiche (verde,gialla,rossa) e di conseguenza anche il livello medio di giacenza, i buffer fissi invece utilizzano valori fissi delle zone e di conseguenza anche un livello medio di giacenza fisso (si utilizzano in caso di limitazioni di spazio, di investimento, per limiti di sicurezza etc), i buffer min-max usano invece solo la zona rossa e la zona verde.