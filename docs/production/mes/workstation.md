---
title: Workstation
description: Gestione e configurazione delle workstation nel MES di Fluentis, incluse associazioni alle risorse di produzione.
keywords:
  - MES Fluentis
  - Workstation
  - Risorse di produzione
  - Configurazione MES
  - Centri di lavoro
sidebar_position: 3
schema: TechArticle
tags:
  - MES
  - Produzione
  - Workstation
  - Fluentis
last_update:
  author: Fluentis Documentation Team
---

# Workstation

:::important
L’introduzione alle workstation del **MES di Fluentis** è fondamentale per la gestione efficace delle risorse e delle operazioni produttive.  
La tabella dedicata consente di codificare le workstation, ricercarle, modificarle e associarle alle risorse operative.
:::

Il sistema offre una gestione strutturata delle workstation, permettendo agli utenti di:

- Inserire nuove codifiche.
- Ricercare workstation esistenti tramite filtri dedicati.
- Associare una o più risorse.
- Influenzare il comportamento di caricamento del MES in fase di avvio, in base alle risorse collegate.

## Gestione Workstation

La tabella permette di gestire la codifica delle diverse tipologie di *Workstation*.

Consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

## Ricerca Workstation

La form di ricerca è composta da:  
- **Area filtri**: consente l’impostazione dei criteri di ricerca.
- **Griglia dei risultati**: mostra l’elenco delle workstation trovate.

### Procedura di ricerca

1. Impostare i filtri desiderati.
2. Cliccare sul pulsante **Ricerca**.
3. Visualizzare i risultati nella griglia.

## Inserimento Workstation

Per creare una nuova codifica:

1. Cliccare sulla prima riga vuota della griglia oppure premere **Nuovo**.
2. Compilare i seguenti campi:
   - **Codice**: nome del PC che fungerà da workstation.  
     :::note
     Il nome del PC può essere ottenuto eseguendo il comando `hostname` dal prompt dei comandi.
     :::
   - **Descrizione**: descrizione del PC che fungerà da workstation.

3. Nella griglia secondaria associare le **risorse**.

## Associazione risorse

In questa griglia è possibile associare le *risorse* che potranno lavorare su ciascuna workstation.
- Nel caso in cui per una workstation venga associato solo una risorsa (es. di tipo centro di lavoro), in fase di avvio il MES caricherà automaticamente quella risorsa e tutte le fasi già iniziate associate ad essa.      
Esempio di workstation dedicata ad un centro di lavoro.        
- Nel caso in cui per una workstation vengano associate più risorse (es. di tipo centro di lavoro), in fase di avvio del MES non verrà caricata nessuna di esse e l'utente potrà selezionare solo una delle risorse associate.      
Esempio di workstation dedicata ad un reparto dove avverranno le dichiarazioni di tutti i centro di lavoro di quel particolare reparto.     
- Nel caso in cui, invece, per una workstation non venga associata alcuna risorsa, in fase di avvio del MES non verrà caricata nessuna di esse e l'utente potrà selezionare una qualsiasi delle risorse inserite nella tabella [Risorse di produzione](/docs/production/mes/production-resources).       
Esempio di workstation dedicata ad un attrezzista che dichiarerà le proprie attività per tutti i centro di lavoro.

## Riepilogo e approfondimenti

Le workstation del MES di Fluentis permettono di:

- Definire postazioni operative utilizzate nel processo produttivo.
- Associare risorse singole o multiple con impatto diretto sul comportamento del sistema.
- Automatizzare o personalizzare il caricamento delle fasi produttive.
- Gestire anagrafiche tramite una form strutturata con ricerca, inserimento e modifica.

Per approfondire:

- [Risorse di produzione](/docs/production/mes/production-resources)  
- [Funzionalità comuni](/docs/guide/common)