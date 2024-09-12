---
title: Differenza partite aperte saldo contabile
sidebar_position: 4
---

I dati che è possibile estrarre dalla presente form corrispondono al contenuto della stampa **Differenza tra saldo contabile e partite.**

Il significato della ricerca è quello di verificare le differenze (squadrature) tra i saldi contabili ed i saldi del partitario per ogni cliente e fornitore al fine di correggerle. Dette differenze possono originare da errori nella gestione del partitario o delle scritture contabili (mancato allineamento tra movimento contabile ed apertura partite o incasso / pagamento e chiusura partita).

:::danger NOTA IMPORTANTE:
Nel caso dei **percipienti**, se si adotta il criterio di esposizione delle partite aperte al netto della ritenuta d'acconto (nei parametri del [tipo ritenuta d'acconto](/docs/configurations/tables/finance/withholding-tax-types), le differenze che saranno evidenziate devono essere ignorate (e non da considerare come errori) tenendo inoltre presente che saranno riassorbite all'atto del pagamento del compenso e della chiusura della relativa partita.
:::


### **AREA DI FILTRO**:

**Conto**: filtro principale per estrarre solo un sottoconto di cliente o fornitore. Non filtrando saranno riportati i sottoconti di tutti i clienti e fornitori che presentano differenze.

**Da /  A Data registrazione**: filtro sulle date di registrazione contabile

**Escludi partite chiuse**: attivando il flag verranno ignorate le partite nello stato Chiusa.

:::tip **UTILE**
**Dettagli**: attivando questo flag i risultati saranno scomposti (anzichè raggruppati) evidenziando l'eventuale differenza per ogni singolo movimento contabile rispetto alla partita correlata (o al pagamento relativo in caso di movimento contabile di incasso / pagamento); L'opzione è utile in combinazione con il filtro sul sottoconto dello specifico cliente o fornitore per analizzare come si è formata la squadratura (su quali movimenti contabili) e procedere a correggerla.
:::

:::tip **MOLTO UTILE**
**Visualizzare solo i sottoconti / registrazioni con differenza diversa da zero**: il flag (consigliato) attivo permette di evidenziare solo i sottoconti che presentano delle differenze da correggere nascondendo invece quelli che risultano corretti.
:::

**Raggruppa per divisa della società**: il flag attivo determina l'esposizione dei movimenti in divisa secondo la divisa della società. Esempio dei movimenti in USD saranno esposti e convertiti in Euro.

### **GRIGLIA DEI RISULTATI**:

![](/img/it-it/finance-area/maturity-values/maturity-values/difference-between-maturity-value-and-ledger-balance/image1.png)

Per ogni sottoconto relativo al cliente o fornitore sono visualizzati i totali, rispettivamente, DARE ed AVERE sia per la parte dei movimenti contabili, sia per la parte del partitario ed infine il saldo contabile e di partitario. Quindi una colonna con la differenza.

In questo modo è possibile anche valutare la possibile origne della squadratura.

A titolo di esempio: Un totale dare contabile postivo (e quindi un saldo dare contabile positivo) ed un totale dare partite a zero relativamente al sottoconto di un cliente può essere orginato da una apertura dei conti per la quale non si è provveduto anche all'apertura delle partite. 

---

### **VIDEO TUTORIALS**

<iframe width="560" height="315" src="https://www.youtube.com/embed/Phu6-Q4ZF7o" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

