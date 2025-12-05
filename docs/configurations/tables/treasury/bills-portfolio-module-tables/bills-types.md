---
title: Tipi effetti
sidebar_position: 3
---

:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**](/docs/guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata
:::

- **Codice** / **descrizione**: liberamente definibile dall'utente per codificare i possibili tipi di effetto. 
- **Numeratore**: di riferimento per la numerazione automatica egli effetti ( si tratta i un numeratore standard Fluentis con le relatvie possibili opzioni); 
- **Natura effetto** predefinite di default idicano la possibile tipologia di effetto
:::tip[Importante]
- **Conto - Sottoconto - Descrizione**. il sottoconto inserito in questo campo sarà utilizzato in **contropartita alla chiusura cliente** all'interno della procedura di [***contabilizzazione effetti***](/docs/treasury/bills-holding/accounting/bills-accounting).
:::

:::important[To do!]
Il tipo effetto può (**raccomandato** per poter filtrare le partite connesse al tipo pagamento nella procedura di creazione effetti dalle partite o dalle fatture) **essere associato al tipo di pagamento** nella [**tabella omonima**](/docs/configurations/tables/general-settings/payment-types#tipi-effetti).
:::

:::note[Nota]
Solo gli effetti di tipo cambiario potranno essere gestiti nelle procedura di contabilizzazione insoluti su cessione del modulo Insoluti.
:::


Il flag **Gestione importo parziale** consente di creare effetti che consumano *parzialmente* le partite, indicandone l'importo. Prevede una gestione manuale all'interno dell'effetto.

:::danger[Attenzione]
Attivando questo flag, la procedura di generazione automatica effetto dalla partite (/ fatture) non inserirà nell'effetto il riferimento alla partita, di conseguenza, in fase di contabilizzazione effetto non avverrà la chiusura della partita la quale rimarrà aperta.

Infatti l'attivazione del flag comporta (è pensata per) una gestione manuale
:::

Il link **Cassa** non è in uso per la localizzazione italiana, serve per registrare negli effetti dai registratori di cassa.

<iframe width="560" height="315" src="https://www.youtube.com/embed/pnRACKqZqvM" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>
