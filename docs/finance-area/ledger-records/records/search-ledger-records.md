---
title: Ricerca registrazioni contabili
sidebar_position: 7
---

La presente form permette di ricercare le registrazioni contabili precedentemente inserite ed eventualmente di entrare in modifica (o in visualizzazione) delle stesse selezionando la riga corrispondente ed effettuando un doppio click.


#### Pulsanti specifici nella Ribbon Bar

> **Ricerca**: permette di avviare la ricerca delle registrazioni contabili inserite secondo i filtri impostati   
> **Nuovo**: permette di inserire una nuova registrazione contabile.  
> **Modifica**: permette di modificare una registrazione contabile precedentemente inserita.  
> **Visualizzazione**: permette di visualizzare una registrazione contabile precedentemente inserita. In questa situazione i dati NON sono modificabili 

> **Elimina**: permette di cancellare una registrazione contabile precedentemente inserita. In alcuni casi l'operazione verrà impedita (ad esempio se una fattura è stata contabilizzata automaticamente) chiedendo di eseguire l'operazione di Rollback (Ripristino) connessa alla procedura con cui la registrazione è stata creata.

> **Documento origine**: permette di richiamare il documento di origine dal quale si è originata la registrazione contabile.  
> **Duplica**: permette di creare un duplicato della registrazione contabile al fine di crearne una simile, modificando gli elementi opportuni, senza doverla inserire da capo.  

### Filtri specifici

**Causale contabile**: la combo box (come di consueto in Fluentis) consente di selezionare anche più di una causale alla volta tenendo premuto il tasto Ctrl.

**Da / A data registrazione + Da / A data competenza**: sono le date di riferimento delle registrazioni contabili; attenzione, i filtri operano con una condizione AND e quindi il raffinamento della ricerca si somma. In caso di disallineamento involontario della data di registrazione e della data di competenza (contabile) per ritrovare la registrazione desiderata è opportuno togliere in alternativa il filtro per competenza oppure quello per data registrazione.

**Numero registrazione**: si tratta del numero presente nella testata e riferito al libro giornale (solitamente la numerazione è annuale o giornaliera)

**Data / Numero documento**: riferito alla testata della registrazione, campo che accoglie il numero e la data fattura, generalmente 

**Tipo Documento**: campo presente nella testata della registrazione e riferito ad esempio a Fattura, Nota di accredito, oppure Generico per registrazioni di prima nota

**Conto Registrazione**: si tratta del sottoconto inserito nella testata della registrazione (Cliente o fornitore).

**Conto Dettaglio**: si tratta dei sottoconti inseriti nella sezione del libro giornale (movimenti contabili). Normalmente si utilizza in combinazione con il filtro precedente per ricercare, ad esempio, relativamente ad un particolare sottoconto cliente o fornitore, le registrazioni che contengono un particolare sottoconto di costo o ricavo.

**Tipo conto**: permette di selezionare uno (o più di uno tenendo premuto Ctrl) de tipi conto (Costi / Ricavi / attivo / passivo o conti di anagrafica come Clienti, Fornitori, Banche ed Agenti). Inoltre aprendo **l'expander** è possibile **escludere le tipologie** di conti di anagrafica.

**Registro IVA**: in questa sezione (aprendo l'expander) è possibile filtrare le registrazioni riferite ad uno specifico registro iva e ad un intervallo di protocolli iva.

### Sezione espandibile (expander) *Ricerca Avanzata*

In questa sezione è possibile ricercare anche: 

- le [registrazioni in stato provvisorio](/docs/finance-area/ledger-records/records/bridged-recording-management/bridged-recording) (oltre che definitivo)
- per descrizione della registrazione (sul giornale) e del singolo movimento di dettaglio (descrizione di contropartita)
- in un intervallo numerico di valori riferiti alla sezione Dare / Avere
- registrazioni automatiche di chiusura / apertura conti

### Campi specifici nella griglia di risultato

**Stato SdI**: accoglie la descrizione dello stato del documento, riportando sia lo stato di gestione interno di Fluentis sia lo stato riportato da Fluentis Business Hub e acquisito direttamente da SdI.  