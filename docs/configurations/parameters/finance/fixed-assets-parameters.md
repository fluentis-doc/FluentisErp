---
title: Parametri cespiti
sidebar_position: 4
---

:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**](/docs/guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata
:::

I parametri del modulo Cespiti si trovano in **Parametri > Amministrativa**.

## Dati form

#### Pulsanti specifici

> **Salva parametri**: permette di salvare i parametri impostati.  
> **Annulla impostazioni**: permette di annullare le impostazioni.  

#### Campi specifici  

- **Verifica precodice**: se il flag è settato, il precodice deve essere predefinito in tabella e non può essere impostato liberamente nella creazione del cespite.

- **Gestione precodice per società**: con questa spunta attiva la lettura dalla tabella **Precodice cespite** e la verifica del precodice sarà relativa alla singola società anzichè riferirsi a tutti i precodici di tutte le società presenti nel db 
  
- **Visualizza quantità**: se il flag è settato sarà visualizzata la quantità.  

- **Default UM**: definisce l'UM di default se il flag precedente è settato.  

- **Percentuale su singolo cespite**: con il flag settato si attiverà, in testata del cespite, un campo dove poter impostare una percentuale di ammortamento che sarà prioritaria rispetto alla percentuale impostata nella categoria di appartenenza del cespite.  

- **Gestione divisione**: se il flag è settato sarà possibile attribuire, nell'anagrafica del cespite, la divisione desiderata altrimenti il campo divisione sarà proposto di default.  

- **Causale contabilizzazione ammortamenti**: campo per inserire la causale di default da proporre nella form di contabilizzazione ammortamenti, anche per il controlling.

- **Usa conto non deducibile**: questo flag permette di predefinire il valore del medesimo parametro all'interno delle form di contabilizzazione ammortamenti o ripresa ammortamento nelle chiusure infrannuali. Se attivato, lo stesso flag sarà proposto attivo all'interno delle maschere citate e la parte non deducibile fiscalmente dell'ammortamento sarà contabilizzata automaticamente sul conto specifico che è stato definito all'interno della tabella delle [**categorie cespite**](/docs/configurations/tables/finance/fixed-asset-category#seconda-tabella).

- **Singola registrazione in contabilizzazione ammortamenti**: con questa spunta ogni scheda cespite darà luogo ad una singola registrazione contabile di ammortamento.

- **Abilitazione centro contabilità**: questo flag abilita la lettura del centro di costo inserito nel tab **Dettaglio** della scheda cespite il quale si riferisce alla quota ammortamento calcolata dalle logiche contabili, e rende non obbligatoria la gestione alternativa di utilizzo dell'ammortamento tecnico gestito nell'apposita tab (Ammortamento per controlling).

## 2. Video tutorial Parrametri Cespiti

:::important Vedi Anche
[**VIDEO TUTORIALS SUI PARAMETRI CESPITI**](/docs/video/finance/intro)
:::
