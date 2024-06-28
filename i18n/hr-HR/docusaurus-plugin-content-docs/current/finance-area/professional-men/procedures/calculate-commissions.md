---
title: Calcolo provvigioni
sidebar_position: 2
---

La presente procedura (pertinente all'area amministrativa) è stata creata per l'elaborazione dei dati delle provvigioni agenti inseriti direttamente dalle scritture contabili previa opportuna configurazione delle causali contabili coinvolte.

In particolare la causale (o le causali) utilizzate per la registrazone delle fatture di vendita dovranno avere il flag **Provvigioni** attivo.

**NOTA**: è necessario abiltare i flag Gestione Provvigioni anche all'interno di Configurazione > Utilità > Amministrazione > Parametri di contabilità in corrispondenza dell'anno desiderato.

All'apertura della form eseguendo il comando **Ricerca**, posto nella ribbon bar, viene caricata la lista degli agenti attivi (tramite il flag apposito possono essere caricati anche quelli con data fine mandato scaduta).

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image01.png)

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image02.png)

Nella parte destra della form sono presenti sia elementi di filtro per i dati dai quali elaborare le provvigioni, sia elementi da indicare al fine di elaborare correttamente i compensi basati sulla liquidazione che si sta generando.

ATTENZIONE:

Diversamente dall'elaborazione analoga presente nell'area vendite, al termine della presente procedura non vengono elaborate le Liquidazioni (ricercabili e consultabili e da trasformare poi in compensi) ma saranno direttamente generati i compensi agenti ricercabili ed ulteriormente elaborabili dall'area Percipienti.

**Filtro Divisa**: permette di selezionare e filtrare le partite, da considerare per il calcolo delle provvigioni, espresse in una particolare divisa.

**Filtro partite**: i filtri di questo gruppo permettono di impostare la data di riferimento per la maturazione della provvigione (posta di default come la data corrente all'apertura della form) e di filtrare ulteriormente per tipo e data del documento. E' presente inoltre un flag che attiva la conversione delle partite in valuta utilizzando il cambio della data documento andando ad imporsi rispetto all'eventuale diverso cambio di apertura delle partite.

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image03.png)

**ATTENZIONE**: Nel caso in cui l'agente abbia il metodo di maturazione provvigioni a **Pagamento totale** e la fattura di vendita abbia come tipo pagamento **Ricevuta bancaria**, la maturazione della provvigione avverrà in ogni caso alla data di scadenza della ricevuta bancaria, indipendentemente dalla chiusura della partita a fronte dell'emissione della RiBa e della presentazione al Salvo buon fine e/o accredito delle somme.

Inoltre saranno aggiunti ulteriori giorni impostabili in **Parametri > Tesoreria > Parametri Rischio Cliente** > **N. giorni oltre la scadenza per effetti pres. al slavo buon fine / dopo incasso.**

**Estremi per la creazione liquidazione**: I campi di questo gruppo sono da gestire prima di lanciare l'esecuzione del calcolo al fine di inserire la data della liquidazione (proposta di default come data corrente), la descrizione della liquidazione ed il mese/anno di comptenza ENASARCO (se si omette quest'ultimo dato il compenso sarà creato con gli omonimi campi vuotti e sarà necessario integrare manualmente dentro ogni compenso generato).

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image04.png)

Dopo aver impostato i filtri come sopra descritto, inserito gli stremi per la creazione liquidazione, selezionare dalla lista agenti i soggetti da liquidare e premere il tasto **Calcola** posto nella ribbon bar.

a questo punto è possibile chiudere la form in commento essendo i compensi agenti già calcolati e presenti automaticamente nell'area Percipienti.






