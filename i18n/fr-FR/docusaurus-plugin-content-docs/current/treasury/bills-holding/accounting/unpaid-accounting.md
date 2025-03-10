---
title: Contabilizzazione Insoluti
sidebar_position: 4
---
La form si trova in Tesoreria > Portafoglio Effetti > Contabilizzazione > Contabilizzazione Insoluti


Da questa maschera si procede alla contabilizzazione insoluti: la procedura riapre le partite clienti associate agli effetti insoluti ed eventualmente genera una fattura di addebito spese.

**Pulsanti specifici**

**Ricerca**: Ricerca la lista degli insoluti da contabilizzare.

**Contabilizza**: Esegue la contabilizzazione per le righe selezionate.

## Come contabilizzare un insoluto

1. Utilizza la parte superiore della maschera per filtrare la ricerca degli insoluti da contabilizzare. ATTENZIONE: Occorre prima procedere alla loro creazione.

2. Seleziona dalla griglia centrale gli effetti che desideri contabilizzare 

3. Compila i parametri per la contabilizzazione quali la **Causale di contabilità** e la **data registrazione**.

:::note[Nota]
Questa sezione può essere predefinita all'interno dei [**parametri**](/docs/configurations/parameters/treasury/unpaids-parameters) del modulo Insoluti. 

In particolare:

- la causale contabile viene proposta sulla base dei parametri del modulo, 
- le date di registrazione sono proposte come data odierna; 
- i sottoconti per le **Spese di protesto** e il conto **Transitorio** sono ripresi dai parametri del modulo, ma possono essere modificati o inseriti di volta in volta.

Il flag **Contabilizzazione riepilogativa** rileva in un'unica registrazione tutti gli insoluti presentati sullo stesso istituto di credito (banca): normalmente questa opzione non viene sfruttata, in particolare se è stata inserita l'obbligatorietà della data e numero fattura nella causale contabile da utilizzare.

Il flag **Spese di rivalsa** impone la rilevazione del riaddebito spese al cliente: con questa opzione si attiverà (in basso) la sezione di gestione della fattura per queste spese, invece che registrarle direttamente in contabilità. In questa sezione tutti i campi dovranno essere impostati al fine di poter creare la fattura di vendita.

Infine resta da inserire: 
- il **tipo di pagamento** e 
- la **data scadenza** da assegnare per la riapertura della partita. In alternativa il flag **Data scadenza uguale alla data scadenza effetto** (andato insoluto)

Anche in questo caso avviene la lettura dei parametri del modulo per la proposta di questi due dati.
 
4. Premi il bottone nella ribbon bar **Contabilizzazione**

### Tab Precedenti

Dalla scheda precedenti è possibile procedere all'annullamento delle contabilizzazioni eseguite. 

L'annullamento sarà possibile solo se il periodo è ancora modificabile (stampa libro giornale e chiusura conti non eseguite). 

Un doppio click nella sezione delle registrazioni consentirà di visualizzare la registrazione contabile relativa. 

E' presente un report di visualizzazione degli errori rilevati nel corso della contabilizzazione.




**Pulsanti specifici**

**Ricerca**: Ricerca la lista delle contabilizzazioni eseguite.

**Rollback contabilizzazione**: Esegue il ripristino delle contabilizzazioni selezionate.

**Rollback insoluti**: Esegue il ripristino della registrazione contabile selezionata.

E' presente una tab per visualizzare gli errori memorizzati in fase di contabilizzazione.




