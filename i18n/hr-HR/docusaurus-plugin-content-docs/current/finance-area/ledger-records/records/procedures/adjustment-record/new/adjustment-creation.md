---
title: Creazione assestamento – Generale
sidebar_position: 1
---

LINK:

**[Tab Gestione](/docs/finance-area/ledger-records/records/procedures/adjustment-record/adjustment-creation)**

**[Tab Ripristina](/docs/finance-area/ledger-records/records/procedures/adjustment-record/adjustment-creation)**

 

 

Con questa procedura si potranno calcolare e contabilizzare i dati dei **ratei e risconti** relativi alle registrazioni contabili presenti nella base dati: 

si tratta ad esempio delle rettifiche/integrazioni (rispettivamente risconti e ratei) relative ad assicurazioni, affitti, canoni di leasing o assistenza, che hanno la caratteristica di essere relativi ad un periodo a cavallo d'anno. Pertanto per la regola contabile della competenza economica sono soggetti a rettifiche.



**Requisiti per l'utilizzo della procedura**:

1) Siano stati definiti, nella tabella **[Tipi conto](/docs/configurations/tables/finance/account-types)**, dei tipi conto economici (chiamati ad esempio ‘da rettificare') che abbiano il flag ‘**Servizio**' attivato. 

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/adjustment-creation/image01.png)

 

Il calcolo viene effettuato (così come nei bilanci infrannuali) SOLO per i sottoconti per i quali nel piano dei conti è stata assegnato questi tipi conto particolare.

2) Siano stati definiti nei **[parametri di contabilità](/docs/configurations/parameters/finance/accounting-parameters)** i sottoconti standard di rilevazione dei movimenti di rateo/risconto attivo/passivo. 

NOTA

Si ricorda che a livello del piano dei conti, sul singolo sottoconto di costo/ricavo possono essere specificati sottoconti di rateo/risconto che saranno utilizzati in via prioritaria per la rilevazione dell'integrazione o rettifica.

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/adjustment-creation/image02.png)

 

3) Siano stati utilizzati correttamente i range di date per la competenza economica  nei movimenti di contabilità. 

NOTA: si consiglia di impostare i **[parametri di inserimento](/docs/finance-area/ledger-records/records/ledger-record)** utente con l'opzione ‘Nessuna data per tipo conto servizio' al fine di obbligare l'utente a inserire, volta per volta, il range di date economiche valide per il singolo movimento.






