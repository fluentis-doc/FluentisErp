---
title: Crea commessa - Sezione superiore
sidebar_position: 1
---

La form si apre tramite il percorso **Acquisti > Commesse Acquisto > Nuova Commessa di Acquisto** oppure dal filtro di ricerca delle commesse di acquisto, mediante il pulsante *Nuova commessa*.

Per creare una nuova commessa di acquisto l'utente deve inserire i seguenti dati:

- **Fornitore**: può essere inserito usando l'[help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-con-il-help-di-campo) oppure [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-manuale).  
- **Tipo Commessa**: predefinito nella tabella [Tipi commessa di acquisto](/docs/configurations/tables/purchase/purchase-job-order-types). Questo campo determina il range di numerazione del documento che si sta inserendo e propone automaticamente il *Numero* in base alla data inserimento e all'ultimo numero inserito.   
- **Anno/data inserita**: viene proposta automaticamente la data corrente, ma può essere modificata manualmente.   
- **Numero**: ad ogni documento viene assegnato un numero secondo la numerazione specificata dall'utente nella tabella [Numerazione](/docs/configurations/tables/fluentis-numerations). 
- **Numero interno**: dato facoltativo; viene proposto uguale al campo precedente, ma può essere modificato manualmente inserendo una codice alfanumerico diverso.

La form contiene una serie di tab:   
>- [Testata](/docs/purchase/purchase-job-order/insert-purchase-job-order/header)   
>- [Articoli](/docs/purchase/purchase-job-order/insert-purchase-job-order/items)   
>- [Riepiloghi](/docs/purchase/purchase-job-order/insert-purchase-job-order/summaries)   