---
title: Categorie agenti
sidebar_position: 2
---

La tabella si apre tramite il percorso **Tabelle > Vendite > Categorie agenti**.

La tabella è unica per tutte le società presenti nel database ed è la base per i calcoli enasarco/firr degli agenti.

### Categorie agente

E' la griglia principale della form e contiene le categorie agenti. Per ogni riga di questa griglia vengono definiti i dati di dettaglio nelle due griglie successive per la specifica dell'Enasarco e del FIRR.

:::tip[Collegamento]
Le voci della griglia principale (che si collega ai dettagli di calcolo) possono essere agganciate nell'[**anagrafica agente**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/detail) oppure (a titolo di default) all'interno dei dettagli della tabella [**Tipi ritenuta**](/docs/configurations/tables/finance/withholding-tax-types). Il tipo ritenuta a sua volta può essere agganciato all'anagrafica agente (ed in questo caso, se ha la categoria agente di default permette di non dover abbinare quest'ultima ogni volta all'agente)
:::

**Codice/Descrizione**: codice e descrizione che indica la tipologia di agente. Il codice deve essere univoco;

**Monomandatario:** Flag che identifica le categoria monomandatarie (mandato in esclusiva con un'unica casa mandante);

**Plurimandatario:** Flag che identifica le categoria plurimandatarie (es. agente che collabora con più aziende mandanti);

**Generico:** Flag che identifica le categorie generiche (es. agenzie costituite in forma di società);


### Enasarco

**Data inizio validità**: la data di inizio validità del dettaglio, il quale continuerà ad operare finchè non verrà letto un nuovo dettaglio con data inizio validità successiva 

**Min Enasarco**: ***valore in base trimestrale***. È l'importo minimo del contributo enasarco (esempio 250,50 per monomandatario);

**Max Enasarco:** ***valore in base annuale***. È l'importo massimo dell'imponibile provvigionale ai fini del contributo enasarco (massimale) e una volta raggiunto, non è più possibile fare versamenti previdenziali in favore dell'agente (esempio 44.727,00 per monomandatario);

**Perc Enasarco**: percentuale dell'Enasarco a carico dell'agente;

**Perc Enasarco Ditta:** percentuale dell'Enasarco a carico della ditta;

**Imp Enasarco**: la percentuale (100%) di applicazione delle percentuali Enasarco sul totale provvigionale;



### Firr

La griglia viene utilizzata per il calcolo del FIRR (Fondo indennità risoluzione rapporto):

![](/img/it-it/configurations/tables/sales/agent-category/image03.png)

**Riga**: identifica il numero di riga. Deve essere univoco su tutti le categorie agenti;

**Percentuale**: percentuale del tributo;

**DA provvigioni/A provvigioni**: limite inferiore e limite superiore di questo tributo;

Questa griglia dovrà essere popolata seguendo le indicazioni previste per questo trattamento

Aliquote per agenti monomandatari

![](/img/it-it/configurations/tables/sales/agent-category/image04.png) 

Aliquote per agenti plurimandatari

 ![](/img/it-it/configurations/tables/sales/agent-category/image05.png)


