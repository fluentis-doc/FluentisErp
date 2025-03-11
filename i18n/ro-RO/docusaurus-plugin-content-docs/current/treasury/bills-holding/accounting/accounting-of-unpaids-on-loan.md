---
title: Contabilizzazione Insoluti su cessione
sidebar_position: 6
---

La form si trova in Tesoreria > Portafoglio Effetti > Contabilizzazione > Contabilizzazione insoluti su cessione

Da questa maschera si procede alla contabilizzazione degli insoluti girati in pagamento a fornitore: la procedura, secondo le impostazioni della causale contabile impostata, riaprirà le partite clienti associate ai titoli insoluti così come le partite fornitori chiuse con il giro del titolo.



## Come contabilizzare un insoluto su cessione

1. Utilizza la parte superiore della maschera per filtrare la ricerca degli insoluti da contabilizzare.
2. Seleziona dalla griglia centrale gli insoluti che desideri contabilizzare.
3. Compila la Tab parametri per la contabilizzazione, inserendo i dati quali la **Causale di contabilità**, la **data registrazione** e la **data competenza**.

:::note[Nota]
Questa sezione può essere predefinita all'interno dei [**parametri**](/docs/configurations/parameters/treasury/bills-portfolio-parameters) del modulo Portafoglio effetti.
:::

Il flag **Spese di Rivalsa** andrà a gestire l'addebito delle spese sul conto cliente, rilevando il relativo ricavo secondo il sottoconto inserito nella maschera stessa (**Conto / sottoconto addebito spese al cliente**) .

i sottoconti per le **Spese di protesto** e il conto **Transitorio** sono ripresi dai parametri del modulo, ma possono essere modificati o inseriti di volta in volta.

4. Premi il bottone nella ribbon bar **Contabilizzazione insoluti**.

**Pulsanti specifici**

**Ricerca**: Ricerca la lista degli insoluti da contabilizzare.

**Contabilizza**: Esegue la contabilizzazione per le righe selezionate.

### Tab Precedenti

Dalla scheda *precedenti* è possibile procedere all'annullamento delle contabilizzazioni eseguite. 

L'annullamento sarà possibile solo se il periodo è ancora modificabile (stampa libro giornale e chiusura conti non eseguite). 

Un doppio click nella sezione delle registrazioni consentirà di visualizzare la registrazione contabile relativa. 

È presente un Tab di dettaglio di visualizzazione degli errori rilevati nel corso della contabilizzazione.


**Pulsanti specifici**

**Ricerca**: Ricerca la lista delle contabilizzazioni eseguite.

**Ripristina contabilizzazione**: Esegue il ripristino delle contabilizzazioni selezionate.

**Ripristina insoluti**: Esegue il ripristino della registrazione contabile selezionata riferita al singolo insoluto.
