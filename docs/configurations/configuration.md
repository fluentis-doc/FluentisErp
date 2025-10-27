---
title: Configurazione ERP
description: Guida completa alla configurazione di Fluentis ERP
keywords: ["ERP", "parametri ERP", "tabelle ERP", "Fast Start"]
tags: [ERP, Configurazione, Fluentis]
schema: TechArticle
sidebar_position: 1
lang: it
---

# Configurazione di Fluentis ERP

L’area di **configurazione** rappresenta il punto di partenza per l’utilizzo corretto di Fluentis ERP.  
Si compone principalmente di due elementi fondamentali: **Tabelle** e **Parametri**.  

Entrambi sono organizzati per **area funzionale**, oltre a un insieme di elementi **generali**, necessari indipendentemente dall’area operativa interessata.

:::danger[Attenzione]
Una configurazione incompleta o errata di questi dati di base può impedire il corretto utilizzo dell’ERP nell’area specifica.
:::

## Tabelle

Le **tabelle** contengono i dati di base necessari alla creazione di documenti e informazioni operative.  

Ad esempio, la tabella **Tipi Fatture** definisce le diverse tipologie di fattura disponibili.  
Per creare una nuova fattura, è necessario selezionare il tipo appropriato tramite l’apposita *combo box*.

> Le tabelle costituiscono la base del sistema: la loro corretta compilazione garantisce coerenza e integrità dei dati in tutte le aree gestionali.

## Parametri

I **parametri** definiscono opzioni, valori predefiniti e impostazioni di comportamento per le procedure di elaborazione o generazione automatica dei dati.  

La loro assenza o una configurazione errata può compromettere il funzionamento di alcune funzioni automatiche.  
In particolare, il mancato salvataggio di un parametro di default può bloccare l’esecuzione della procedura associata.

:::important[Fast Start]
Dopo l’installazione di **Fluentis ERP**, è possibile inizializzare un [**ambiente *Fast Start* pronto all’uso**](/docs/guide/fast-start).  

Questo ambiente preconfigura automaticamente molte **tabelle** e **parametri**, permettendo un avvio rapido e sicuro del sistema.

Un elemento chiave per il Fast Start è il [**Piano dei Conti**](/docs/erp-home/registers/accounting/analytic-chart-of-accounts), parte dell’area amministrativa.

La procedura di Fast Start genera un **piano dei conti standard**:  
è possibile modificarne le descrizioni, aggiungere o eliminare conti (purché non già utilizzati da altri dati generati, come causali contabili o modelli di bilancio).

Se il piano dei conti proposto non rispecchia la realtà aziendale, si consiglia di procedere con una **configurazione manuale** delle tabelle e dei parametri relativi alle aree funzionali desiderate, oltre all’**importazione del piano dei conti personalizzato**.

Consulta la **checklist di verifica dettagliata** disponibile nel link sopra per controllare le tabelle più importanti.
:::