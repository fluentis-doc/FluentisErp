---
title: Differenza tra saldo contabile e partite aperte
sidebar_position: 5
---

La stampa che è possibile lanciare dalla presente form corrisponde al contenuto della visualizzazione a video ottenibile con la form ** [Differenza partite aperte saldo contabile.](/docs/finance-area/maturity-values/maturity-values/difference-between-maturity-value-and-ledger-balance) **

Specularmente alla viualizzazione a video, il significato della presente stampa è quello di ricercare le differenze (squadrature) tra i saldi contabili ed i saldi del partitario per ogni cliente e fornitore al fine di correggerle. Dette differenze possono originare da errori nella gestione del partitario o delle scritture contabili (mancato allineamento tra movimento contabile ed apertura partite o incasso / pagamento e chiusura partita).

:::danger NOTA:
Nel caso dei **percipienti**, se si adotta il criterio di esposizione delle partite aperte al netto della ritenuta d'acconto (nei parametri del [tipo ritenuta d'acconto](/docs/configurations/tables/finance/withholding-tax-types), le differenze che saranno evidenziate devono essere ignorate (e non da considerare come errori) tenedo inoltre presente che saranno riassorbite all'atto del pagamento del compenso e della chiusura della relativa partita.
:::


**Conto**: filtro principale per estrarre solo un sottoconto di cliente o fornitore. Non filtrando saranno riportati i sottoconti di tutti i clienti e fornitori che presentano differenze.

**Da/A Data registrazione**: filtro sulle date di registrazione contabile

**Escludi partite chiuse**: attivando il flag verranno ignorate le partite nello stato Chiusa.

**Dettagli**: attivando questo flag i risultati saranno scomposti (anziché raggruppati) evidenziando l'eventuale differenza per ogni singolo movimento contabile rispetto alla partita correlata (o al pagamento relativo in caso di movimento contabile di incasso / pagamento);

**Visualizzare solo i sottoconti / registrazioni con differenza diversa da zero**: il flag (consigliato) attivo permette di evidenziare solo i sottoconti che presentano delle differenze da correggere nascondendo invece quelli che risultano corretti.

**Raggruppa per divisa della società**: il flag attivo determina l'esposizione dei movimenti in divisa secondo la divisa della società. Esempio dei movimenti in USD saranno esposti e convertiti in Euro.