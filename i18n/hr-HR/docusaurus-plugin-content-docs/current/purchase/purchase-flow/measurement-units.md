---
title: Upravljanje glavnom i alternativnom jedinicom mjere
sidebar_position: 4
---

Ova funkcionalnost omogućuje definiranje i korištenje različitih **jedinica mjere** za isti proizvod u različitim kontekstima, poput prodaje, nabave ili upravljanja skladištem.

:::note
Za aktiviranje upravljanja **alternativnim jedinicama mjere**, potrebno je uključiti opciju **Upravljanje dvostrukom jedinicom mjere** u [Parametrima](/docs/configurations/parameters/sales/dn-parameters).
:::

**Glavna jedinica mjere**, koja je obavezna, definira se za svaki artikl u njegovoj osnovnoj kartici i ne može se mijenjati nakon što je artikl već korišten u dokumentima ili skladišnim zapisima. L'**unità di misura alternativa**, invece, consente di gestire il prodotto in un'unità diversa rispetto a quella principale e può essere impostata nel tab [Unità di Misura Alternative](/docs/erp-home/registers/items/create-new-item) dell’anagrafica articolo.

Nei documenti, l'unità di misura principale viene mostrata nella griglia degli **Articoli**, mentre il widget dell'unità di misura alternativa è visibile nel tab**Dati articolo**, contenente i campi**Quantità Alternativa** e**Prezzo Unità di Misura Alternativa**, ma solo se il flag **Gestione Doppia Unità di Misura** è attivo nei parametri del modulo.

Se il flag **Proposta Automatica Unità di Misura Alternativa** è abilitato, il sistema proporrà automaticamente l'unità di misura alternativa con il flag **Predefinito** attivo nell’anagrafica dell’articolo, calcolando e inserendo automaticamente la quantità alternativa utilizzando il fattore di conversione.

I flag presenti nel tab **Unità di Misura Alternative** dell’anagrafica articolo influenzano la proposta e il calcolo delle quantità nei documenti. Se il flag **Predefinito** è attivo, quella sarà l'unità di misura utilizzata per la proposta automatica. Se il flag **Tassativo** è attivato, qualsiasi modifica della quantità principale o alternativa comporterà il ricalcolo automatico della controparte, mantenendo il legame attraverso il fattore di conversione. Con il flag **Prioritaria** attivo, invece, la quantità alternativa prevale, calcolando la quantità principale senza il ricalcolo dell’alternativa.

Il calcolo della quantità alternativa si basa sul **fattore di conversione**, che può essere moltiplicato o diviso per la quantità principale; questa scelta viene configurata nei [Parametri iniziali di magazzino](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters) tramite appositi flag.

Nei documenti, nella colonna**Unità di Misura**, viene proposta l'unità di misura principale dell’articolo, ma l'utente può sostituirla con una delle unità di misura alternative disponibili. Se si seleziona un'unità di misura alternativa in questa colonna, non sarà possibile specificarne un’altra nell'omonimo widget, poiché in un movimento di magazzino possono essere utilizzate solo due unità di misura: quella gestionale (sempre l'unità di misura principale dell’articolo) e quella alternativa, specificata nella colonna**Unità di Misura** o nel widget dell'Unità di Misura Alternativa.
