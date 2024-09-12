---
title: Creazione DDT da Ricevimento merci
sidebar_position: 2
keywords:
- DDT
- Ricevimento merci
---

La procedura si apre tramite il percorso **Acquisti > Bolla di acquisto > Procedure > Creazione DDT da ricevimento merci**

### Filtro

Offre la possibilità di inserire filtri per cercare i ricevimenti, selezionarli e creare il DDT.

> **DDT di consegna n./Data**: permettono di specificare la data e il numero del DDT che verrà generato con la procedura.

### Parametri

*Dati obbligatori*:

- **Tipo bolla consegna acquisto**: indica il tipo documento da usare per la creazione del DDT.
- **IVA**: indica l'[Aliquota IVA](/docs/configurations/tables/finance/vat-rates) da inserire sulle righe articolo nel DDT.
- **Tipo fatturato acquisti**: da impostare sulle righe articoo del DDT.

*Dati opzionali*:
> **Ricalcola centri di costo/ricavo**: permette di scegliere se si vuole ricalcolare i centri di costo/ricavo al momento della creazione del DDT.

### Rollback

Offre la possibilità di cercare, visualizzare e annullare le operazioni effettuate.

Per annullare un'operazione è sufficiente selezionare la riga corrispondente al DDT da cancellare nella griglia superiore e cliccare sul pulsante **Rollback** posto nella ribbon bar.

Ad ogni riga della griglia superiore (che contiene numero, data e utente che ha creato il DDT) corrispondono una o più righe nelle griglie inferiori **DDT di consegna** e **Ricevimento merci**. In queste due griglie, mediante doppio click sulla riga interessata, l'utente può visualizzare il DDT di consegna appena creato oppure il ricevimento merci da cui è stato generato.
