---
title: Introduzione
sidebar_position: 1
---

:::note[Info]
La pratica di anticipare le fatture in banca è un'operazione finanziaria comunemente utilizzata dalle aziende per ottenere liquidità immediata, anticipando l’incasso delle fatture emesse nei confronti dei clienti. Questa operazione, chiamata anche sconto fatture, consente di convertire crediti commerciali in denaro liquido, migliorando così la gestione della cassa aziendale e la capacità di far fronte a pagamenti o investimenti senza dover aspettare i tempi di pagamento dei clienti.

L’azienda presenta alla banca una o più fatture che non sono ancora state pagate dai clienti. La banca anticipa una parte del valore della fattura, solitamente tra il 70% e il 90%, trattenendo una quota come garanzia fino al saldo completo del pagamento. Una volta che il cliente paga la fattura, la banca trattiene una commissione e accredita il saldo residuo all’azienda.

Contabilmente l'azienda registra un debito verso la banca per l'importo anticipato, quando il cliente paga l'azienda chiude il debito con la banca e registra i costi per commissioni ecc..
:::

Con questo modulo di Fluentis ERP, è possibile gestire le distinte di anticipo fatture da presentare alla banca al netto di commissioni e interessi, e contabilizzare sia la presentazione sia l'incasso finale.

Prima di inserire nuove distinte di anticipo, occorre preliminarmente gestire la Tabella TIPI ANTICIPO.

In questa tabella sono definite le possibili tipologie di distinta ed i relativi parametri.

![](/img/it-it/treasury/advance/advances-collections/image01.png)

**Codice / Descrizione**: Liberamente assegnabili dall'utente per qualificare la tipologia.

**Tipo calcolo** (codice / descrizione): le opzioni possibili sono Imponibile / Tot: Documento. Indica se la percentuale anticipata dalla banca debba essere calcolata con riferimento al total efattura oppure al solo imponibile.

**Percentuale fatture anticipata**: inserire qui il valore della percentuale della fattura che sarà anticipata dalla banca.

![](/img/it-it/treasury/advance/advances-collections/image02.png)

**Tipo Acquisizione**: le possibili opazioni sono Scadenze / Fatture. Questa opzione controlla soltanto il modo in cui sono visualizzati i dati nella maschera di ricerca per la creazione della nuova distinta, ovvero se sarà selezioanbile l'intera fattura oppure le singole scadenze della fattura. In ogni caso dal punto di vista della base dati sono comunque gestite le scadenze (tutte) anche nel caso della modalità Fatture.

**Numerazione**: è necessario impostare una numerazione dalla relativa tabella dei numeratori per questo tipo di documento.

**Banca C/C**: (conto / sottoconto descrizione): inserire qui il sottoconto che sarà utilizzato nelle registrazioni contabili relativo al conto corrente bancario.

**Conto bancario anticipi**: inserire il conto d'appoggio utilizzato per contabilizzare l'antipo bancario.

![](/img/it-it/treasury/advance/advances-collections/image03.png)

**Conto interessi passivi**: inserire il conto da utilizzare per la contabilizzazione interessi

**Conto commissioni**: inserire il conto da utilizzare per la contabilizzazione commissioni bancarie.






