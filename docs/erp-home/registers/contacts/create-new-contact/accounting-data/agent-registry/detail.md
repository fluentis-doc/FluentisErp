---
title: Dettaglio
sidebar_position: 2
---

L'anagrafica di tipo **Agente** è necessaria al fine di gestire le diverse impostazioni ed automatismi relativi a questa tipologia di soggetti.

Dopo aver inserito i dati anagrafici generali del soggetto si procederà quindi alla scelta del tipo conto **Agenti** nella griglia *Sottoconti assegnati* della tab *Dati contabili*

Questa finestra contiene elementi generali dell'agente stesso:

**Utilizzo a partite aperte**: attiva la gestione delle partite aperte per l'anagrafica in uso;

**Categoria agente**: è l'elemento fondamentale per il calcolo dell'Enasarco e del FIrr, così come definito nella tabella [Categorie Agenti](/docs/configurations/tables/sales/agent-category); la scelta si effettua tramite la combobox collegata alla tabella

**Caratteristica agente**: elemento statistico libero utile, ad esempio, per creare dei raggruppamenti. La combobox è collegata alla tabella [Categorie Agenti](/docs/configurations/tables/sales/agent-category)

**IVA**: Aliquota iva di default da proporre nella creazione del compenso agente, sia manualmente, sia dalla procedura di calcolo dalla liquidazione provvigioni.

**Divisa**: divisa nella quale è denominato il conto contabile ed i documenti intestati all'agente

**Data inizio/fine rapporto**: sulla base di questa data parte il calcolo dell'indennità suppletiva di clientela (stampa a disposizione per il modulo Agenti/Percipienti);

**Costo di/contropartita**: il sottoconto di contabilità generale da proporre all'inserimento del compenso nel modulo Percipienti (o da utilizzare nella sua creazione automatica dalla liquidazione agenti) al fine di accogliere il costo delle provvigioni

**Conto di fatturazione**: questo sottoconto viene utilizzato, nella creazione automatica del compenso percipiente dalla liquidazione agenti, per intestare il compenso ad un codice contabile differente (di tipo fornitore, al fine di unificare i dati contabili per soggetti che sono sia agente che fornitore);

**Annotazioni**: note libere dell'anagrafica agente;

**Enasarco**: numero di iscrizione all'ente;

**CCIAA**: numero di iscrizione alla camera di commercio;

**Capo area**: permette di collegare l'anagrafica di un agente che è capo area rispetto a quello in uso; non vi sono automatismi relativi al calcolo delle provvigioni.

**Intra e Cod.serv.**: per agenti intracomunitari da riportare nelle sezioni quater e quinquies della dichiarazione intrastat;

**Società di capitali**: obsoleto, presente per retrocompatibilità

**Obbligo provvigioni su riga ordine**: con questo flag si obbliga l'utente a impostare una provvigione per l'agente nell'ordine cliente.