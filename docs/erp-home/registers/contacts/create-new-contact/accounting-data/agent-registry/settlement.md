---
title: Liquidazione
sidebar_position: 3
---

In questa finestra si impostano gli elementi generali di calcolo della provvigione:

**Causale ritenuta**: il campo è obbligatorio per valorizzare automaticamente anche la parte della ritenuta d'acconto applicata sul compenso agente. Senza questo campo non sarà possibile valorizzare automaticamente il compenso dalla liquidazione agente; Il campo è collegato alla tabella [Tipi Ritenuta](/docs/configurations/tables/finance/withholding-tax-types).

**Periodo di liquidazione**: indicala periodicità della liquidazione agenti;

**Tipo di documento**: considerato alla **base del calcolo della provvigione** agenti: è possibile indicare che l'agente matura la provvigione sull'ordine confermato, sulla consegna merce (cioè ddt emesso), sull'emissione fattura, sulla scadenza maturata (indipendentemente dall'incasso o meno), sul pagamento avvenuto (cioè sulla base della quota incassata: se il cliente paga metà fattura, l'agente maturerà metà provvigione di quel documento). Questa impostazione NON può essere cambiata una volta che si iniziano a creare le liquidazioni per l'agente: sarà necessario creare una nuova anagrafica con la nuova impostazione (e utilizzare la procedura ‘Assegnazione agenti' per aggiornare le anagrafiche clienti massivamente in Home>Contatti).

:::note Nota
Unicamente per la [procedura di calcolo delle liquidazioni agenti gestita dal modulo Amministrazione](/docs/finance-area/professional-men/procedures/calculate-commissions) è presente anche l'ulteriore modalità **Pagamento Totale**, in questo caso la fattura deve essere pagata interamente per la maturazione della provvigione, non vengono tenuti in considerazione eventuali pagamenti parziali.
:::