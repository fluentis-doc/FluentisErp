---
title: Introduzione alla gestione Lotti e Serial Number
sidebar_position: 0
sidebar_label: Introduzione
description: Panoramica sulla gestione di Lotti e Serial Number in Fluentis ERP, con indicazioni su configurazione, tracciabilità e collegamenti ai moduli di magazzino.
schema: TechArticle
tags: [Fluentis ERP, lotti, serial number, magazzino, tracciabilità]
last_update:
  author: Fluentis Documentation Team
  date: 2025-11-07
author: Fluentis Documentation Team
keywords: [Fluentis ERP, lotti, serial number, magazzino, tracciabilità, anagrafica lotti]
related: [/docs/logistics/lots-serial-numbers/lots-register, /docs/logistics/lots-serial-numbers/serial-number-register]
---

# Introduzione alla gestione Lotti e Serial Number

Nella gestione logistica di **Fluentis ERP**, gli articoli possono essere tracciati e gestiti attraverso due modalità principali: **Lotti** e **Serial number**.

I **lotti** rappresentano gruppi omogenei di articoli, sia in entrata che in uscita, e consentono una gestione efficace delle scorte, garantendo al contempo una tracciabilità completa lungo il processo produttivo e distributivo.  
Ogni lotto è identificato da un **codice univoco**, che permette di recuperare informazioni dettagliate come caratteristiche, date di produzione, scadenze e dati di conformità normativa.

I **numeri seriali**, invece, identificano in modo univoco ogni singolo articolo, risultando particolarmente utili per articoli **di alto valore** o **critici**. Questo approccio consente una gestione precisa e puntuale, utile per il monitoraggio e la registrazione di ogni singolo articolo in magazzino.  
L'integrazione di entrambi i sistemi all’interno della piattaforma Fluentis migliora la tracciabilità, ottimizza la gestione delle scorte e aumenta l’efficienza operativa complessiva.

## I documenti gestiti

import Link from '@docusaurus/Link';

<div className="cardContainer">
  <div className="card">
  
### <Link to="/docs/logistics/lots-serial-numbers/lots-register">Anagrafica lotti</Link>

L’**Anagrafica lotti** di Fluentis è uno strumento fondamentale per la gestione e tracciabilità dei lotti.  
Gli utenti possono cercare e visualizzare i dettagli di ogni lotto con un semplice doppio clic, facilitando il monitoraggio delle giacenze.  
Il sistema gestisce inoltre **vari stati lotto**, che influenzano la disponibilità operativa e la movimentazione degli articoli.

  </div>
  <div className="card">
  
### <Link to="/docs/logistics/lots-serial-numbers/serial-number-register">Anagrafica serial number</Link>

L’**Anagrafica serial number** è dedicata alla gestione dei numeri seriali, consentendo la **tracciabilità univoca** di ciascun articolo tramite un codice identificativo specifico.  
È uno strumento essenziale per la **rintracciabilità** e la **sicurezza**, in particolare per articoli di alto valore o soggetti a controlli di qualità.  
Include inoltre i riferimenti ai **documenti di carico e scarico** associati, offrendo una visione completa dell’utilizzo nel tempo e supportando la **compliance normativa**.

  </div>
</div>

## Come iniziare a utilizzare

### Anagrafica lotti

Per iniziare a utilizzare l’anagrafica lotti:

1. Definire un [**Tipo codice lotto**](/docs/configurations/tables/logistics/lot-codes-types).  
2. Impostare i parametri nel tab [**Lotti e Serial number**](/docs/erp-home/registers/items/create-new-item) dell’anagrafica articolo.  
3. Configurare correttamente le [**Causali di magazzino**](/docs/configurations/tables/logistics/warehouse-templates) da utilizzare.  
4. Creare un documento o una [**Registrazione di magazzino**](/docs/logistics/warehouse/stock-records/record) di carico o scarico con un articolo gestito a lotti, per visualizzarne il risultato nell’anagrafica lotto.

### Anagrafica serial number

Per configurare l’anagrafica dei serial number:

1. Definire un [**Tipo codice serial number**](/docs/configurations/tables/logistics/serial-numbers-code-type).  
2. Impostare i parametri nel tab [**Lotti e Serial number**](/docs/erp-home/registers/items/create-new-item) dell’anagrafica articolo.  
3. Definire le [**Causali di magazzino**](/docs/configurations/tables/logistics/warehouse-templates) adeguate.  
4. Creare un documento o una [**Registrazione di magazzino**](/docs/logistics/warehouse/stock-records/record) di carico o scarico con un articolo gestito a serial number, per visualizzare il risultato nell’anagrafica corrispondente.

## Collegamenti con altri moduli

Le funzionalità di gestione lotti e serial number sono strettamente collegate a:

- [**Anagrafica articoli**](/docs/erp-home/registers/items/create-new-item)  
- [**Registrazioni di magazzino**](/docs/logistics/warehouse/stock-records/record)  
- Tutti i documenti che generano movimenti di **carico** e **scarico** in magazzino  

## Riepilogo e approfondimenti

La gestione di **lotti** e **serial number** in Fluentis ERP consente una tracciabilità completa e un controllo preciso sull’inventario, migliorando la qualità dei processi logistici e produttivi.  
Configurando correttamente i parametri di articolo, causali di magazzino e tipi di codice, l’azienda può garantire una gestione efficiente, sicura e conforme alle normative vigenti.

**Approfondisci:**
- [Anagrafica lotti](/docs/logistics/lots-serial-numbers/lots-register)  
- [Anagrafica serial number](/docs/logistics/lots-serial-numbers/serial-number-register)  
- [Causali di magazzino](/docs/configurations/tables/logistics/warehouse-templates)
