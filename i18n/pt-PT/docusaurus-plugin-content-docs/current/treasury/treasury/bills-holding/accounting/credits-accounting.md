---
title: Contabilizzazione Accrediti
sidebar_position: 3
---

La form si trova in Tesoreria > Portafoglio Effetti > Contabilizzazione > Contabilizzazione accrediti

Da questa maschera si procede all'ultima fase del portafoglio effetti: la procedura chiuderà il conto transitorio della banca di presentazione per accreditare il conto corrente effettivo dell'anagrafica banca in distinta.

:::tip[Nota]
**Risulta necessario accedere specificamente alla presente form per questa contabilizzazione, non essendo previsto alcun bottone dentro l'effetto o la distinta**. 
:::

## Come contabilizzare un accredito

1. Utilizza la parte superiore della maschera per filtrare la ricerca degli effetti da accreditare: la contabilizzazione accrediti può essere effettuata solo per effetti contabilizzati. La selezione viene effettuata sul dettaglio degli effetti per poter individuare  gli importi accreditati per ogni data di scadenza.

2. Seleziona dalla griglia centrale gli effetti che desideri gestire 

3. Compila i parametri per la contabilizzazione quali la **Causale di contabilità**, la **data registrazione** e la data competenza.

:::note[Nota]
Questa sezione può essere predefinita all'interno dei [**parametri**](/docs/configurations/parameters/treasury/bills-portfolio-parameters) del modulo Portafoglio effetti.
:::

4. Compila inoltre gli altri campi per la gestione della contabilizzazione:

**Spese commissioni**: il sottconto dove saranno contabilizzate le spese per commissioni, da indicare nel campo successivo

**Commissioni**: valore delle commissioni sull'accredito degli effetti che viene contabilizzato; può essere proposto, per ogni effetto, sulla base delle *commissioni* impostate nell'[***anagrafica banca***](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry).  

**Oneri passivi**: conto dove saranno contabilizzati gli interessi passivi calcolati per distinte allo sconto.

:::note[Nota]
In questa sezione sono presenti anche tre campi per la visualizzazione dei totali degli effetti selezionati nella grigli centrale:

**Totale selezione oneri passivi**: sommatoria del valore Oneri passivi per tutti gli effetti selezionati;

**Totale selezione commissioni**: sommatoria del valore Commissioni per tutti gli effetti selezionati;

**Totale effetti selezionati**: sommatoria del valore degli effetti selezionati;
:::

4. Premi il bottone nella ribbon bar **Contabilizzazione accrediti**



**Pulsanti specifici**

**Ricerca**: Ricerca la lista degli effetti di cui contabilizzare l'accredito.

**Contabilizzazione**: Esegue la contabilizzazione per le righe selezionate.



### Tab Precedenti

Dalla scheda *precedenti* è possibile procedere all'annullamento delle contabilizzazioni eseguite. 

L'annullamento sarà possibile solo se il periodo è ancora modificabile (stampa libro giornale e chiusura conti non eseguite). 

Un doppio click nella sezione delle registrazioni consentirà di visualizzare la registrazione contabile relativa. 

E' presente un Tab di dettaglio di visualizzazione degli errori rilevati nel corso della contabilizzazione.



**Pulsanti specifici**

**Ricerca**: Ricerca la lista delle contabilizzazioni eseguite.

**Rollback contabilizzazione**: Esegue il ripristino delle contabilizzazioni selezionate per tutti i documenti in esse contenuti.

**Rollback registrazioni**: Esegue il ripristino della singola registrazione contabile selezionata.




