---
title: Parametri
sidebar_position: 3
---

Nella presente scheda si gestiscono i parametri contabili principali della procedura: 

le **date di registrazione e competenza**, la **causale** di pagamento da utilizzare, i s**ottoconti della banca da addebitare** e quello di **rilevazione del debito della ritenuta (non obbligatorio**, se non presente sarà utilizzato il sottoconto inserito nel tipo ritenuta). 

Il flag di chiusura partite, proposto di default, non va mai tolto (al fine di gestire la chiusura partite).

 

Le opzioni di raggruppamento previste sono:

Il default **Singola registrazione** (senza flag **Raggruppa conti**): in questo caso sarà creata un'unica registrazione con un unico movimento banca (per facilitare la riconciliazione dei movimenti con l'estratto conto bancario) mentre gli altri sottoconti saranno dettagliati compenso per compenso (per un controllo maggiore dei movimenti sul conto delle ritenute). In caso sia impostato anche il flag di raggruppamento conti saranno raggruppati i dati anche degli altri sottoconti uguali movimentati;

**Nessun raggruppamento**: in questo caso ogni compenso avrà una registrazione separata.

**Raggruppa per sottoconto**: in questo caso il raggruppamento sarà effettuato percipiente per percipiente;

 

![](/img/it-it/finance-area/professional-men/accounting/payments-accounting/parameters/image01.png)

 

La sezione successiva, attivata dal flag di **Creazione automatica pagamenti fornitori**, consente di creare una distinta di pagamento nel modulo ** [Pagamenti fornitori](/docs/treasury/vendors-payments/create-vendor-payments) **, al fine di stamparla e inviare telematicamente il tracciato dei bonifici bancari via homebanking. I campi da impostare sono: il tipo di pagamento della distinta, il campo conto corrente (viene proposto dall'anagrafica collegata al sottoconto banca inserito in alto), la data di emissione del pagamento ed una eventuale data valuta beneficiario (previa attivazione del flag corrispondente) ed un'eventuale nota finale da riportare in contabilità in corrispondenza della riga banca.

![](/img/it-it/finance-area/professional-men/accounting/payments-accounting/parameters/image02.png)

 



| Funzione | Significato |
| --- | --- |
| Contabilizzazione pagamenti | Esegue la contabilizzazione dei pagamenti selezionati. |






