---
title: "Creazione lotto da lotto e Creazione lotto da lotto con cambio articolo"
sidebar_position: 5
sidebar_label: "Creazione lotto"
description: "Guida alla creazione di lotti in Fluentis sia da lotto esistente che con cambio articolo."
schema: "TechArticle"
tags: ["ERP", "Fluentis", "magazzino", "lotti"]
keywords: ["creazione lotto", "gestione scorte", "Fluentis", "cambi articolo"]
---

# Creazione lotto da lotto e Creazione lotto da lotto con cambio articolo

## Creazione lotto da lotto

:::important A cosa serve
La procedura di Creazione Lotto da Lotto di Fluentis è un'importante funzionalità che permette di generare un nuovo lotto a partire da un lotto esistente dello stesso articolo. Questa operazione è fondamentale per gestire in modo efficace il magazzino e per rispondere tempestivamente alle esigenze di produzione e logistica.

L'implementazione di questa procedura non solo semplifica la movimentazione dei lotti, ma aiuta anche a mantenere una tracciabilità accurata all'interno del sistema, garantendo i requisiti di qualità e conformità normativa.
:::

Questa form permette di creare un nuovo lotto di uno stesso articolo, partendo dal vecchio lotto. 
La form si compone di 3 sezioni distinte:

- **Filtro**: in cui è possibile filtrare i dati desiderati e tramite il pulsante **Ricerca** presente nella *Ribbon bar* possono essere visualizzati i dati nella griglia sottostante.
- **Griglia dei risultati**: contenente tutte le informazioni relative al lotto cercato.
- **Dati nuovo lotto**: in questa sezione, sottostante alla griglia dei risultati, sono contenuti i dati relativi al nuovo lotto.

### Dati relativi al nuovo lotto da creare

- **Quantità iniziale lotto di destinazione**: indica la quantità iniziale che avrà il lotto di destinazione.
- **Numero colli lotto di destinazione**: indica il numero di colli che avrà il lotto di destinazione.
- **Causale di scarico lotto di origine**: indica la causale di scarico con la quale verrà scaricato il lotto di origine.
- **Causale di carico lotto di destinazione**: indica la causale di carico con la quale verrà caricato il lotto di destinazione.
- **Ubicazione lotto di destinazione**: indica l'ubicazione nella quale verrà caricato il lotto di destinazione.

:::note Attenzione
Le causali di magazzino che possono essere utilizzate in questa procedura sono solo quelle che hanno il flag **Crea lotto da lotto** attivo nella tabella delle [Causali di magazzino](/docs/configurations/tables/logistics/warehouse-templates/). Per poterlo settare è necessario creare una causale di **Scarico**, con i flag **Gestione lotti** e **Integra quantità iniziale** attivi, il flag **Distinta base** disattivato e deve avere una **contro partita** di **Carico**.
:::

### Passi per la Creazione del nuovo lotto

1. Impostare tutti i filtri desiderati.
2. Cliccare sul pulsante **Ricerca** presente nella *Ribbon bar* per visualizzare i risultati nella griglia.
3. Selezionare il lotto desiderato.
4. Inserire i dati relativi al nuovo lotto nella parte sottostante della form.
5. Premere il pulsante **Creazione lotto** per creare il nuovo lotto per il medesimo articolo.

## Creazione lotto da lotto con cambio articolo

:::important A cosa serve
La Creazione Lotto da Lotto con Cambio Articolo è una procedura avanzata di Fluentis che consente di creare un nuovo lotto per un articolo diverso, partendo da un lotto di origine. Questa funzionalità risulta particolarmente utile nel contesto di gestione delle scorte, quando è necessario trasferire quantità da un articolo a un altro, mantenendo sempre una registrazione dettagliata dei lotti.  
Grazie a questa procedura, le aziende possono ottimizzare i flussi di magazzino e garantire una maggiore efficienza operativa, assicurando che tutti i movimenti siano tracciabili e correttamente registrati nel sistema.
:::

Questa form permette di creare un nuovo lotto con un nuovo articolo partendo da un diverso lotto con un diverso articolo. 
La form si compone di 3 sezioni distinte:

- **Filtro**: in cui è possibile filtrare i dati desiderati e tramite il pulsante **Ricerca** presente nella *Ribbon bar* possono essere visualizzati i dati nella griglia sottostante.
- **Griglia dei risultati**: contenente tutte le informazioni relative al lotto cercato.
- **Dati nuovo lotto**: in questa sezione, sottostante alla griglia dei risultati, sono contenuti i dati relativi al nuovo lotto.

### Dati relativi al nuovo lotto da creare

- **Articolo lotto di destinazione**: permette di inserire classe, codice e descrizione dell'articolo di destinazione.
- **Variante articolo**: permette di inserire la variante dell'articolo di destinazione.
- **Quantità iniziale lotto di destinazione**: indica la quantità iniziale che avrà il lotto di destinazione.
- **Numero colli lotto di destinazione**: indica il numero di colli che avrà il lotto di destinazione.
- **Causale di scarico lotto di origine**: indica la causale di scarico con la quale verrà scaricato il lotto di origine.
- **Causale di carico lotto di destinazione**: indica la causale di carico con la quale verrà caricato il lotto di destinazione.
- **Ubicazione lotto di destinazione**: indica l'ubicazione nella quale verrà caricato il lotto di destinazione.

:::note Attenzione
Le causali di magazzino che possono essere utilizzate in questa procedura sono solo quelle che hanno il flag **Crea lotto da lotto** attivo nella tabella delle [Causali di magazzino](/docs/configurations/tables/logistics/warehouse-templates/). 
Per poterlo attivare è necessario creare una causale di **Scarico**, con i flag **Gestione lotti** e **Integra quantità iniziale** attivi, il flag **Distinta base** disattivato e deve avere una **contro partita** di **Carico**.
:::

### Passi per la Creazione del Nuovo Lotto con Cambio Articolo

1. Impostare tutti i filtri desiderati.
2. Cliccare sul pulsante **Ricerca** presente nella *Ribbon bar* per visualizzare i risultati nella griglia.
3. Selezionare il lotto desiderato.
4. Inserire i dati relativi al nuovo lotto nella parte sottostante della form.
5. Premere il pulsante **Creazione lotto** per creare il nuovo lotto per il nuovo articolo.

## Riepilogo e approfondimenti

In questo documento sono state trattate le procedure di *Creazione Lotto da Lotto* e *Creazione Lotto da Lotto con Cambio Articolo* all'interno del sistema Fluentis ERP. 

Per ulteriori approfondimenti, consultare le seguenti guide:
- [Causali di magazzino](/docs/configurations/tables/logistics/warehouse-templates/)
- [Funzionalità, pulsanti e campi comuni](/docs/guide/common)