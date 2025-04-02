---
title: Gestione partite
sidebar_position: 1
---

Questa form è accessibile solo dalla form **Partite** (Amministrazione > Partite > Partite).

L'accesso avviene in due modi:

 1. Tramite il comando *Nuova partita*
 2. Facendo doppio click con il mouse su una partita presente nella griglia principale della form di *Ricerca partite* oppure selezionando la riga e utilizzando il comando Modifica partita nella ribbon bar.

Da questa posizione è possibile:

- inserire una nuova partita manualmente (senza che sia generata da una scrittura contabile)

- modificare i dati di una partita pre-esistente.

In particolare, tipicamente, da questa posizione può essere aggiunto o rimosso il blocco della partita per il pagamento agendo sul flag apposito:

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image01.png) 

aggiungendo il flag per bloccare (il programma aggiungerà automaticamente la data e l'utente che ha bloccato)

oppure togliendolo per sbloccare (a questo punto comparirà anche l'utente che ha sbloccato). 

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image02.png)

**Sottoconto di pagam.**: questo sottoconto viene associato alle partite create, al fine di poter verificare la canalizzazione dei pagamenti/incassi nelle stampe degli scadenziari e nelle simulazioni di cash flow; verrà pertanto compilato inserendo il conto bancario dell'azienda in uso. Il campo verrà compilato in automatico, per le partite create da registrazioni contabili, se nell'** [anagrafica del fornitore](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance) ** è compilato il campo apposito.

**Agente**: il campo viene compilato in automatico per le partite generate da contabilizzazione automatica di fatture di vendita con l'indicazione dell'agente collegato alla fattura stessa. L'informazione è utile per filtrare le partite nella form di ricerca e nelle stampe dove il campo è presente.

**Data Prevista**: questo campo può essere compilato per supportare le elaborazione del ** [Cash Flow](/docs/treasury/cash-flow/cash-flow/cash-flow-management) ** (funzionalità presente nell'area tesoreria). Può dunque essere indicata una data prevista di incasso o di pagamento che differisce rispetto alla data scadenza della partita e che sarà riportata nelle elaborazioni per il cash flow (alle quali si rinvia). In particolare si ricorda che in assenza di indicazione particolare definita nel campo in commento, la data prevista sarà valorizzata nell'elaborazione del cash flow, a partire dalla data scadenza, sommando il dato (se presente) contenuto nel campo **Giorni di Ritardo** presente nell'anagrafica del cliente o fornitore.

Per gli altri campi vedere il ** [Glossario](/docs/guide/common/glossary/glossary-intro) ** e fare riferimento alle istruzioni relative alla ** [Tab Partite nella Registrazione contabile](/docs/finance-area/ledger-records/records/ledger-record) **.

**NOTA:**

Generalmente l'inserimento manuale di partite è una operazione non ordinaria in quanto le partite nascono tramite le registrazioni contabili. Può essere eseguita ad esempio per inserire manualmente alcune partite aperte derivanti dal passaggio dati da precedente sistema gestionale (in alternativa alle funzionalità di importazione massiva) o per altre motivazioni particolari.

Se, parallelamente, ad esempio, viene inserita una scrittura contabile di apertura saldo cliente o fornitore, dalla maschera in commento è possibile collegare la scrittura contabile tramite apposito comando presente nella ribbon bar e più sotto descritto.

## Partite raggruppate

 Dalla form in commento è possibile anche eseguire una sorta di "accorpamento" delle partite. Ovvero alla partita attualmente in modifica è possibile accorpare altre partite (anche non intestate allo stesso soggetto). Il comando è posto nella ribbon bar. **Aggiungi partite da raggruppare**.

Il risultato sarà che:

- le partite accorpate non saranno più visibili nella form di ricerca partite

- la partita in modifica assumerà come valore il totale del suo valore più quello delle partite accorpate

- il dettaglio delle partie che sono state accorpate a quella in modifica apparirà nella griglia in commento.

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image03.png)

**Per eseguire l'aggiunta delle partite che saranno accorpate utilizzare il comando Aggiungi partite da raggruppare presente nella ribbon bar.**

*Pulsanti specifici*
> **Aggiungi partite da raggruppare**: permette di selezionare altre partite che saranno accorpate alla partita in modifica;  
> **Cancella partite da raggruppare**: cancella la partita selezionata dalla griglia 'Partite raggruppate' ripristinandone l'autonomia rispetto alla partita in modifica (che è l'unica visibile rispetto a quelle ad essa accorpate);  
> **Crea da partite / pagamenti**: permette di creare una partita a partire da un pagamento. Utile per operazioni di riallineamento di differenze o compensazione. Il comando fa apparire una form di ricerca dei pagamenti dai quali creare la partita. Tipicamente si esegue subito dopo aver creato manualmente una nuova partita dalla form di ricerca partite;  
> **Collegamento registrazioni**: permette di collegare la partita in modifica ad una registrazione contabile (utile se la partita è stata creata manualmente).

## Pagamenti collegati

## Extra Data

Viene riportata la lista degli Extra data collegati, con la possibilità di aggiungere nuovi extra data utili solo per il documento in oggetto, con la possibilità tramite l'apposito flag, di scegliere quali extra data stampare.