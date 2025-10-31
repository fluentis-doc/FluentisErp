---
title: Uvod
sidebar_position: 1
---

Modul se nalazi u području *Prodaja > Agenti*.

Ovaj modul nudi cjelovito rješenje za upravljanje, kontrolu i obradu provizija prodajnih agenata. Ova funkcionalnost omogućuje tvrtkama izračun zarađenih provizija, generiranje detaljnih obračuna i upravljanje naknadama za profesionalce.  

**Glavne funkcionalnosti**:
- Gestione e controllo delle provvigioni: Il sistema permette di gestire, controllare ed elaborare il calcolo delle provvigioni dovute agli agenti, tenendo conto delle vendite effettuate e delle condizioni contrattuali specifiche.
- Generazione delle liquidazioni: È possibile generare liquidazioni periodiche per gli agenti, aggregando le provvigioni maturate e presentando un quadro chiaro delle somme dovute.
- Creazione di compensi per professionisti: Fluentis offre la possibilità di creare compensi specifici per professionisti esterni, garantendo una gestione flessibile e dettagliata dei pagamenti.
- Stampa di cedolini e documentazione: Il modulo consente la stampa dei cedolini per gli agenti, dettagliando le provvigioni maturate e le liquidazioni effettuate, fornendo così una documentazione chiara e trasparente.
- Reportistica e analisi: È possibile generare report sulle provvigioni e le liquidazioni, facilitando il monitoraggio delle performance degli agenti e consentendo un'analisi dettagliata delle vendite.

**Automazione e Integrazione**:        
Il modulo di Liquidazione Agenti è integrato con il resto del sistema gestionale di Fluentis, consentendo il recupero automatico dei dati di vendita e delle provvigioni dai moduli di vendita e fatturazione. Questa integrazione riduce il rischio di errori e garantisce una coerenza dei dati, facilitando la riconciliazione tra vendite, fatture e liquidazioni.

E' collegato a sua volta con il modulo Amministrazione permettendo di convertire la liquidazione provvigioni in compenso percipiente al fine di poter eseguire automaticamente le relative scritture contabili ed il versamento della ritenuta d'acconto oltre ai contributi ENASARCO.
Infine il compenso degli agenti rientrerà anch'esso nell'elaborazione fiscale della certificazione unica delle ritenute.

Prima di utilizzare il modulo, è necessario compilare le seguenti tabelle:
> - [**Anagrafica agente**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/detail)
> - [**Categorie agenti**](/docs/configurations/tables/sales/agent-category)
> - [Range sconto](/docs/configurations/tables/sales/discount-range)
> - [Definizione fasce provvigionali](/docs/configurations/tables/sales/discount-range)
> - [Caratteristiche agente](/docs/configurations/tables/sales/agent-characteristics)

:::danger[Attenzione]
Si ricorda che oltre alla configurazione dei dettagli dell'anagrafica agente, è necessario [**abbinare gli agenti ai rispettivi clienti**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/agents) per poter avere il calcolo delle provvigioni nei documenti ed alimentare quindi le liquidazioni
:::