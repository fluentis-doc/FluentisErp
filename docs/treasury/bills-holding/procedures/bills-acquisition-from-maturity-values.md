---
title: Acquisizione effetti dalle partite
sidebar_position: 2
---

La form si trova in Tesoreria > Portafoglio Effetti > Procedure > Acquisizione effetti dalle partite

Da questa form è possibile eseguire un *wizard* che esegue contemporaneamente:

- La ricerca delle partite aperte dei clienti idonee alla creazione degli effetti (ad esempio una ricevuta bancaria)
- La creazione dell'effetto (esempio una ricevuta bancaria) leggendo i dati della partita
- La contabilizzazione dell'effetto che,  sua volta, chiude la partita parta e crea la scrittura contabile di storno credito cliente e accredito conto associato alla tipologia di effetto utilizzato.

## Come creare un nuovo effetto automaticamente dalle partite aperte

1. Utilizza la parte superiore della maschera per filtrare la ricerca delle partite aperte da trasformare in effetti (ad esempio Ricevute bancarie o cambiali). 

:::note[Nota]
Sono presenti, nella parte bassa della zona di filtro, alcuni flag di ricerca: 

- secondo l'impostazione del [**raggruppamento scadenze**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments) delle anagrafiche clienti; di default sono attivi e quindi visibili entrambi i gruppi, con e senza raggruppamento scadenze negli effetti
-  Per visualizzare anche le partite attive dei fornitori (disattivata di default) oltre che quelle clienti (attiva di default)
:::

:::tip[Attenzione]
Sono visibili in questa sezione **SOLO** le partite contabili collegate a tipi pagamento di natura ricevuta bancaria o cambiale.

Questo è un filtro a monte, attivo per sicurezza, che è possibile gestire dalla tabella [**Tipi pagamento**](/docs/configurations/tables/general-settings/payment-types) abbinando ad ogni tipo di pagamento il corrispondente tipo effetto.
:::

2. Seleziona con il mouse dalla griglia centrale le partite che desideri acquisire negli effetti. In base all'impostazione del flag *Raggruppa scadenze / Raggruppa note di accredito in effetti*, presente nelle [**anagrafiche clienti**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), ed al flag *Raggruppa note di accredito per data scadenza*, presente nei [**parametri portafoglio effetti**](/docs/configurations/parameters/treasury/bills-portfolio-parameters), le partite saranno accorpate (**a parità di banca d'appoggio e data scadenza**) oppure creeranno in ogni caso effetti distinti.

3. Nella parte bassa della maschera imposta la **data di emissione** degli effetti ed il **tipo effetto**.

La sezione di **contabilizzazione** può essere impostata di default all'interno dei parametri del modulo Portafoglio effetti. Può comunque essere attivata e disattivata da qui, prima di procedere a lanciare l'acquisizione.

La procedura di contabilizzazione, se non attivata contestualmente alla creazione in questa form, può essere lanciata successivamente [**dall'apposita form**](/docs/treasury/bills-holding/accounting/bills-accounting). La scrittura contabile generata provvederà a stornare il credito verso il cliente, chiudendo la relativa partita aperta e accreditando il conto relativo alla [**tipologia di effetto**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types) selezionato.

Il flag  **raggruppa per conto effetto**  esegue una registrazione unica, dove in questo saranno presenti tante righe quante sono gli effetti da contabilizzare.

Il flag di **gestione provvisoria** andrà a generare registrazioni contabili di tipo provvisorio.

:::danger[Attenzione]
La **gestione dell'acquisizione effetti dalle partite** è alternativa all'acquisizione dalle fatture.
:::

4. Premi il bottone nella ribbon bar **Acquisizione** per avviare la procedura.

#### Pulsanti specifici

> **Ricerca**: Ricerca la lista delle partite per le quali creare gli effetti.

> **Acquisizione** Esegue la creazione degli effetti per le partite selezionate.

### Precedenti

Eseguita la creazione, le righe spariranno dalla griglia del *filtro* e il risultato sarà visibile nella scheda **Precedenti** all'interno della quale è possibile annullare l'operazione. 

Non è possibile annullare la creazione di effetti se questi sono contabilizzati o presentati in distinta.

#### Pulsanti specifici

> **Ricerca**: Ricerca la lista delle creazioni eseguite.

> **Rollback acquisizione**: Con questo pulsante sarà cancellata tutta l'acquisizione effettuata, con tutti gli effetti associati.

> **Rollback effetto**: Con questo pulsante sarà cancellata la creazione del singolo effetto selezionato.