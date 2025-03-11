---
title: Contabilizzazione Distinte
sidebar_position: 2
---

La form si trova in Tesoreria > Portafoglio Effetti > Contabilizzazione > Contabilizzazione distinte

Da questa maschera si procede alla contabilizzazione distinte: la procedura chiuderà il conto collegato al [**tipo**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types) degli effetti inseriti in distinta e aprirà il conto transitorio della banca inserito nella distinta.

::tip[Nota]
Generalmente si può eseguire questa procedura direttamente **dentro la distinta** con l'apposito pulsante per la sua **Contabilizzazione**.

Dalla presente maschera risulta invece possibile eseguire una contabilizzazione massiva di più distinte.
:::

## Come contabilizzare una distinta

1. Utilizza la parte superiore della maschera per filtrare la ricerca delle distinte da contabilizzare. La contabilizzazione distinte può essere effettuata solo per distinte stampate.

2. Seleziona dalla griglia centrale le distinte che desideri contabilizzare 

3. Compila i parametri per la contabilizzazione quali la **Causale di contabilità**, la **data registrazione** e la data competenza.

:::note[Nota]
Questa sezione può essere predefinita all'interno dei [**parametri**](/docs/configurations/parameters/treasury/bills-portfolio-parameters) del modulo Portafoglio effetti.  
:::

Il flag di **contabilizzazione in data maturazione**: spezzerà la registrazione della distinta alle varie date scadenza degli effetti con l'aggiunta dei giorni banca impostati in anagrafica banca per la causale impostata.

Il flag **data scadenza con data valuta uguale a data maturazione**: registrerà i vari effetti alle varie date scadenza ma con data valuta banca rettificata secondo i giorni banca impostati in anagrafica banca.

4. Premi il bottone nella ribbon bar **Contabilizzazione distinte**


**Pulsanti specifici**

**Ricerca**: Ricerca la lista delle distinte da contabilizzare.

**Contabilizzazione**: Esegue la contabilizzazione per le righe selezionate.


### Tab Precedenti

Dalla scheda precedenti è possibile procedere all'annullamento delle contabilizzazioni eseguite. 

L'annullamento sarà possibile solo se il periodo è ancora modificabile (stampa libro giornale e chiusura conti non eseguite). 

Un doppio click nella sezione delle registrazioni consentirà di visualizzare la registrazione contabile relativa.


**Pulsanti specifici**

**Ricerca**: Ricerca la lista delle contabilizzazioni eseguite.

**Rollback contabilizzazione**: Esegue il ripristino delle contabilizzazioni selezionate.

**Rollback distinte**: Esegue il ripristino della registrazione contabile selezionata.

E' presente un Tab di dettaglio di visualizzazione degli errori rilevati nel corso della contabilizzazione.


