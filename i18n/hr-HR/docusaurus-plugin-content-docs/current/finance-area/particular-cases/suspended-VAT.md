---
sidebar_position: 3
title: Regime dell'iva per cassa
---

:::important **Fluentis Academy** 
Si definisce 'IVA in sospensione' l'IVA che diviene esigibile non alla consegna del bene ma al pagamento della fattura.
Il contribuente che adotta questo regime liquida l’Iva di tutte le operazioni, sia attive che passive, con il criterio di cassa.
Il momento impositivo Iva viene fatto coincidere con il momento della data del pagamento o dell’incasso dei corrispettivi. 
In questo modo si deroga, quindi, al principio che vede come esigibile l’Iva di un documento registrato in contabilità.

In pratica, il regime dell’Iva per cassa consente il versamento dell’Iva a debito sulle cessioni o sulle prestazioni di servizi solo al momento del pagamento della fattura da parte del cliente. 
Ed allo stesso tempo consente la detrazione dell’Iva sugli acquisti solo al momento in cui il soggetto pagherà la fattura al fornitore. 

In ogni caso, la liquidazione dell’Iva dovrà avvenire entro un anno dalla vendita o dalla prestazione del servizio fatta eccezione per i casi di fallimento o di coinvolgimento del concessionario o del committente di una procedura concorsuale.
:::

### IMPOSTAZIONI E CONFIGURAZIONE CAUSALI CONTABILI COINVOLTE

Le impostazioni principali per la gestione di questo regime avvengono semplicemente attraverso la corretta configurazione delle causali contabili.

In particolare è fondamentale selezionare correttamente, all'interno delle causali coinvolte, nel campo **Tipo movimento** (riferito all'IVA), la tipologia esatta.

In dettaglio:

- La causale per la registrazione fattura fornitore avrà il tipo *IVA acquisti in sospensione*
- La causale per la registrazione fattura cliente avrà il tipo *Vendita con IVA in sospensione*
- Le causali per l'incasso o il pagamento non avranno un tipo particolare, ma come di consueto il tipo *Non IVA* (saranno collegate alle causali eseguite in automatico per il giroconto dell'iva che diviene esigibile attraverso il campo *Causale automatica*)
- La causale di giroconto dell'iva acquisti avrà il tipo Giroconto IVA acquisti in sospensione
- La causale di giroconto dell'iva vendite avrà il tipo Giroconto IVA in sospensione

Il contenuto (template) delle causali utilizzate per la fattura di vendita e di acquisto differisce tipicamente dalle causali ordinarie per il fatto che l'iva viene contabilizzata su un conto specifico per l'iva sospesa e diverso da quelli ordinari destinati al'iva a credito ed a debito che vengono poi girocontati al conto erario c/iva in fase di liquidazione periodica. Per quanto riguarda il registro iva movimentato, questo può rimanere quello consueto senza necessità di definirne uno specifico. Il tipo particolare di movimento iva definito nella causale fa in modo che l'imposta non venga considerata come credito o debito finchè non interverrà il giroconto, pur essendo visualizzata nei movimenti iva del periodo. 

Il contenuto delle causali di incasso e pagamento risulta quello consueto

Il contenuto delle causali (eseguite in automatico) di giroconto dell'iva sospesa, storna i conti specifici dell'iva sospesa e contabilizza sui conti dell'iva ordinaria inquanto da quel momento l'iva è esigibile o detraibile rispettivamente.

Di seguito alcune immagini di dettaglio delle impostazioni. 

![](/img/it-it/finance-area/other/suspvat1.png)

![](/img/it-it/finance-area/other/suspvat2.png)

![](/img/it-it/finance-area/other/suspvat3.png)

![](/img/it-it/finance-area/other/suspvat4.png)

![](/img/it-it/finance-area/other/suspvat5.png)

### GESTIONE IVA DECORSO UN ANNO DALL'OPERAZIONE SE NON PAGATA O NON INCASSATA

La gestione permette di individuare le partite aperte da oltre un anno e contabilizzare automaticamente il giroconto dell'iva al fine di renderla esigibile oppure detraibile rispettivamente.

Per fare questo è possibile utilizzare (con settaggi specifici) la form [**Giroconto partite**](/docs/finance-area/maturity-values/procedures/maturity-values-giro/filter-tab)

### IMPOSTAZIONI IN PRESENZA DI RICEVUTE BANCARIE ED INSOLUTI

Se, nell'ambito del ciclo attivo, è prevista l'emissione di ricevute bancarie e la presentazione di in banca delle stesse all'incasso o al salvo buon fine, la configurazione delle causali sarà la seguente:

1. Emissione della fattura: registrata con la causale configurata come descritto sopra;

2. Emissione effetto: registrazione normale con la consueta causale, si chiude la partita aperta dalla fattura ma non viene eseguito nessun giroconto iva

3. contabilizzazione **distinta** di presentazione Ri.Ba: **la causale utilizzata ha il collegamento a quella automatica di giroconto iva**, il giroconto viene contabilizzato alla data scadenza degli effetti

4. contabilizzazione accrediti: normale come di consueto

**Nel caso di contabilizzazione insoluti**: la causale contabile utilizzata non necessita di particolari settaggi, la procedura intercetta la partita chiusa dalla Ri.ba. e collegata all' iva per cassa e cancella la registrazione di giroconto e contestualmente, invece di riaprire la partita, fa un pagamento con segno dare per stornare il pagamento partita eseguito dall'emissione Ri.ba., in modo da avere la partita originale (legata all'iva in sospensione) di nuovo aperta.