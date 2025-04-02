---
title: Amministrativa
sidebar_position: 1
---

I parametri dell'area **Amministrativa** concernono i moduli di 

[**Contabilità**](/docs/configurations/parameters/finance/accounting-parameters): **Indispensabili** per l'utilizzo di qualsiasi funzionalità contabile, contengono la definizione di dati fondamentali quali la durata dell'esercizio i conti utilizzati per le operazioni contabili automatizzate e l'abbinamento tra le anagrafiche ed il piano dei conti, pertanto influenzano anche il processo di creazione di nuove anagrafiche clienti e fornitori.

**Percipienti**:  Parametri **non necessari** e presenti per retro compatibilità

[**Cespiti**](/docs/configurations/parameters/finance/fixed-assets-parameters): parametri che prevedono opzioni specifiche di interesse limitatamente al modulo cespiti/controlling

[**Importazione paghe**](/docs/configurations/parameters/finance/payroll-import-parameters) Parametri specifici per l'importazione delle scritture relative alle paghe dipendenti da altri sistemi gestionali tramite il flusso di importazione Bizlink.

:::danger[Attenzione]
Una mancata gestione di questi dati di base potrebbe impedire l'utilizzo delle funzionalità interessate.
:::

:::tip[Nota]
A fronte della stretta interconnessione con l'area Tesoreria, in particolare per le varie procedure di contabilizzazione automatica del modulo Portafoglio attivo e Pagamenti fornitori, si consiglia di controllare e gestire anche i [**parametri**](/docs/configurations/parameters/treasury/general-overview) dell'area tesoreria.
:::

:::important[**Fast Start**]
I parametri dell'area amministrativa possono essere configurati tramite l'inizializzazione di un [**ambiente *FastStart***](/docs/guide/fast-start) progettato per consentire una configurazione rapida e un utilizzo immediato del sistema.
:::