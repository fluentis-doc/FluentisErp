---
title: Gestione categorie sconto in acquisti
sidebar_position: 4
---

Fluentis premette di assegnare degli sconti per categoria articolo, all'interno di un listino fornitore. 
Per fare questo sono necessari alcuni passaggi.

- nell'*Anagrafica articolo* > tab *Cat. sconti acquisti* deve essere inserita la categoria di sconto con la *Data inizio validità*;  

- nell'*Anagrafica fornitore* > tab *Listini* deve essere inserito il **Listino**, con il flag di **Gestione prezzi** attivo;  

- nella *Definizione politiche sconti* deve essere inserito il **Fornitore**, la **Categoria sconto acquisti**, la **Data di validità** e lo **Sconto** (nella griglia degli *Dettagli*);  
- deve inoltre esserci un **Listino fornitore** valido alla data di validità della politica di sconto che contenga gli articoli che hanno in anagrafica la categoria sconto, per la ripresa del prezzo base. 

A questo punto facendo un **documento di acquisto**, come un ordine vengono, inseriti gli sconti anche per categoria sconto.

![](/img/it-it/purchase/discount-categories/purchase-order.png)