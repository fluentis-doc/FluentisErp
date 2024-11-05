---
sidebar_position: 4
title: Regime iva del margine
---

### CONFIGURAZIONI

E’ necessario codificare (almeno) due **specifici registri iva** sui quali registrare gli acquisti relativi al regime del margine e le vendite dello stesso regime, associandoli, nel campo **tipo di registro**:

- Acquisti regime del margine
- Vendite regime del margine

In secondo luogo, dovremo creare le [**aliquote iva**](/docs/configurations/tables/finance/vat-rates) che saranno utilizzate su questi registri iva specifici, identificandole con il **flag** ***Iva del margine***:

![](/img/it-it/finance-area/other/VATMargine.png)

Le aliquote da utilizzare in acquisto avranno l’indicazione dell’aliquota iva del margine di riferimento, in modo da sapere a quale aliquota assegnare proporzionalmente il valore del margine stesso.

Dovremo poi codificare le causali contabili che prevedono la rilevazione su questi registri specifici: la causale delle vendite, in particolare, sarà collegata ad un tipo fattura di vendita specifico, che consentirà di emettere il documento in vendita e inviarlo allo Sdi. 
Può essere utile, al fine di evitare utilizzi erronei di aliquote non previste per la gestione del margine, abilitare in queste causali la sezione di vincolo alle aliquote iva abilitate (*Controllo Aliquote IVA*).

La causale di vendita andrà a rilevare il debito per iva del margine, con tipo movimento *vendite regime normale* e registro vendite ordinario.

![](/img/it-it/finance-area/other/VATMargine2.png)

Tale registrazione prevede contabilmente il conto del debito iva e il conto di storno del ricavo vendita per margine, che viene impostato nei parametri di contabilità generale in questa sezione:

![](/img/it-it/finance-area/other/VATMargine3.png)

indicheremo il ricavo di vendita e la causale di default. La data ultima elaborazione e il valore negativo del margine, invece, sono due valori aggiornati automaticamente da Fluentis con la stampa definitiva dell’elaborazione del margine di periodo.

### ELABORAZIONE

All’interno del menù *Dichiarazioni* del modulo *Amministrazione* selezionare **Elaborazione iva del margine**:

Generando un nuovo calcolo avremo:

![](/img/it-it/finance-area/other/VATMargine4.png)

L’anno dei parametri di contabilità, il registro da utilizzare per rilevare l’eventuale debito sul margine positivo, la causale di rilevazione, il cliente da assegnare alla registrazione del debito e a destra il range di date oggetto di elaborazione.
Una volta impostati questi dati, avremo la possibilità di eseguire il calcolo attraverso il pulsante della ribbon bar, che andrà a valorizzare i dati dei due sotto tab:

Nel primo avremo i totali delle aliquote movimentate nei registri del margine di acquisto e vendita, dove per l’acquisto avremo l’esposizione delle percentuali relative di ripartizione:

![](/img/it-it/finance-area/other/VATMargine5.png)

Nel secondo tab, invece, avremo l’elaborazione del calcolo del margine applicando le percentuali alle aliquote iva collegate alle aliquote d’acquisto:

![](/img/it-it/finance-area/other/VATMargine6.png)

Questo secondo tab sarà valorizzato solo se il margine del periodo, considerando eventuali margini negativi pregressi, porterà ad un saldo positivo del margine stesso.
Avremo poi alcuni altri pulsanti di gestione da utilizzare: la stampa dell’elaborazione eseguita, che se effettuata direttamente richiederà se impostare il flag ‘definitiva’ rendendo il calcolo non più modificabile:

![](/img/it-it/finance-area/other/VATMargine7.png)

Questa operazione andrà ad aggiornare, nei parametri di contabilità, la data ultima elaborazione e l’importo memorizzato nel saldo negativo del margine.

Una volta settato il flag ‘definitivo’ si abiliterà la possibilità di contabilizzare il debito iva:

![](/img/it-it/finance-area/other/VATMargine8.png)

![](/img/it-it/finance-area/other/VATMargine9.png)

:::tip Particolarità
Nella sezione iva avremo solo l’importo dell’iva a debito, **senza un imponibile**.
:::

Completano la procedura i pulsanti per eseguire il rollback della contabilizzazione e l’annullamento della stampa definitiva:


![](/img/it-it/finance-area/other/VATMargine10.png)