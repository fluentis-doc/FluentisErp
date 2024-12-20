---
title: Visualizzazione Movimenti IVA
sidebar_position: 5
---
:::tip[A cosa serve]
La form consente di **visualizzare i movimenti** eseguiti sui **registri IVA** contestualmente alle registrazioni contabili (ad esempio per ricevimento o emissione fatture).

Utile per **controlli** o **estrazione dati** riferiti all'IVA.

La visualizzazione a video risulta particolarmente flessibile permettendo di esportare velocemente i dati estratti o di entrare velocemente in modifica di ogni movimento con doppio click
:::


## Testata:
Nella parte superiore sono presenti i campi di **filtro**:

**Registri IVA:** per estrarre i movimenti relativi ad uno o più (selezionando dalla tendina tenendo premuto il tasto Ctrl) sezionali IVA

**Codice IVA:** per filtrare i movimenti eseguiti con una determinata aliquota o codice IVA (esenzione, esclusione ecc.)

**DA Data competenza IVA / A Data competenza IVA:** per la ricerca dei movimenti in base alle date di competenza iva, ovvero la data alla quale avrà effetto il movimento ai fini della liquidazione periodica iva. 

:::tip[Nota]
**filtro principale** essendo nel contesto dell'iva si ricerca nel periodo in cui il movimento ha effetto sulla liquidazione periodica IVA, più che per data in cui è stata effettuata la registrazione contabile (come noto infatti la competenza iva può essere variata, in genere retrodatando). 

Se si desidera ricercare anche per una determinata data della registrazione contabile è sempre possibile intervenire sul filtro della colonna nella griglia dei risultati.
:::

**Operazioni:** filtra in base alle tre categorie (attive,passive e reverse charge) considerate per l'abbinamento tr i codici iva e i righi della stampa per la Dichiarazione IVA Annuale. Fare riferimento alla tabella [**Aliquote/ Modalità IVA**](/docs/configurations/tables/finance/vat-rates#tab-specifiche-per-dichiarazione)

**Riga Dichiarazione fiscale:** filtro da abbinare al precedente. Dopo aver selezionato la tipologia di operazioni è possibile dettagliare quali codici iva filtrare inquanto abbinati ad un determinato rigo della stampa per la Dichiarazione IVA Annuale. Fare riferimento alla tabella [**Aliquote/ Modalità IVA**](/docs/configurations/tables/finance/vat-rates#tab-specifiche-per-dichiarazione)

**Tipo IVA:** filtro riferito alla tipologia di operazione iva. Il dato può essere associato ai movimenti iva in sede di creazione delle registrazioni contabili, sezione *estremi iva del movimento*, tramite il campo omonimo.

**Conto / Sottoconto:** permette di filtrare in relazione al conto di contropartita utilizzato nella registrazione che ha generato i movimenti iva, ad esempio in caso di acquisti o vendite, tipicamente si può filtrare per il conto di costo o ricavo

**Conto di testata:** permette di filtrare per sottoconto inserito nella testata delle registrazioni che hanno generato i movimenti iva, ad esempio in caso di acquisti o vendite, tipicamente si può filtrare per fornitore o cliente


## La griglia dati:

Presenta alcune colonne fisse che contengono i valori di ogni movimento quali l'imponibile, l'imposta, la quota indetraibile ed i totali.

Le altre colonne scorrono e presentano i seguenti dati:

- **Data e Numero della registrazione** contabile che ha generato il movimento IVA
- **Numero del documento** registrato, ad esempio il numero della fattura di acquisto o di vendita
- **Causale contabile** (codice e descrizione) utilizzata per la registrazione contabile che ha generato il movimento IVA
- **Sezionale iva** (codice e descrizione) movimentato
- **Protocollo iva** del movimento
- **Conto utilizzato nella testata** della registrazione (ad esempio cliente o fornitore)
- **Conto di contropartita** utilizzato (ad esempio di costo o ricavo) nella registrazione contabile che ha generato il movimento IVA
- **Codice IVA** (aliquota, esenzione, esclusione ecc.) utilizzato per il movimento
- **Percentuale di indetraibilità** presente sulla riga iva del movimento nella registrazione contabile, il valore potrebbe essere forzato manualmente ma in genere è predefinito per il codice iva utilizzato direttamente nella tabella [**Aliquote/ Modalità IVA**](/docs/configurations/tables/finance/vat-rates)
- **Da / A Data competenza**, si riferisce alla competenza economica del costo / ricavo e dunque non strattamente connesso al movimento iva, seppure presente e definito nella sezione iva della registrazione contabile
- **Competenza plafond**, dato definito nella sezione iva della registrazione contabile e riferito alla competenza del movimento ai fini del calcolo del [**plafond per esportatori abituali**](/docs/finance-area/declarations/declarations/plafond/general-overview)
- **Competenza IVA**, dato già presente nei campi di filtro in testata della maschera e qui visualizzato per ogni movimento
- **Descrizione di dettaglio**, omonimo presente nella sezione iva della registrazione contabile
- **Data competenza**, riferita alla competenza contabile presente nella testata della registrazione contabile che ha generato il movimento IVA
- **Data documento**, riferita alla data fattura presente nella testata della registrazione contabile che ha generato il movimento IVA
- **Tipo codice**, riferito al campo Tipo documento presente nella testata della registrazione contabile che ha generato il movimento IVA
- **Tipo operazione fiscale** (codice / descrizione) campo presente ella sezione iva della registrazione contabile, utile per l'abbinamento con il tipo di acquisto finalizzato all'informativa statistica da dare nella dichiarazione iva annuale. Il campo è visibile nelle registrazione previa attivazione nei parametri delle causali contabili.

## Totali alla base della maschera:

- Imponibile / Imposta / Totale **Selezionato**: si riferisce alla selezione attivata dal click del mouse (una o più righe contemporaneamente se si tiene premuto Ctrl)

- Imponibile / Imposta / Totale : indipendentemente dalla selezione del mouse mostra i dati relativi a tutte le righe visibili nella griglia dei risultati (applicando i filtri di testata e /o quelli della testata colonne della griglia stessa)